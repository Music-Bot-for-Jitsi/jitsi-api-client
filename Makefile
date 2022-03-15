werift_version = v0.14.2

# If the first argument is "run_example", turn following targets into cli arguments
ifeq (run_example,$(firstword $(MAKECMDGOALS)))
  RUN_ARGS := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS))
  # turn following targets into do-nothing targets
  $(eval $(RUN_ARGS):;@:)
endif

clean:
	rm -r types/lib-jitsi-meet modules/ bundles/

run_example:
	deno run --location="https://jimmi.xyz/fake/" \
		--allow-read --allow-net --allow-env \
		examples/cli.ts $(RUN_ARGS)

modules:
	mkdir modules

modules/werift:
	git clone https://github.com/shinyoshiaki/werift-webrtc/ \
		--branch $(werift_version) \
		--single-branch \
		modules/werift

modules/lib-jitsi-meet: modules
	git clone https://github.com/jitsi/lib-jitsi-meet/ \
		--branch master \
		--single-branch \
		modules/lib-jitsi-meet

bundles:
	mkdir bundles

define WERIFT_BUNDLE_HEADER
// werift-webrct $(werift_version) bundled for deno
import { createRequire } from 'https://deno.land/std/node/module.ts';
const require = createRequire(import.meta.url);
var module = {};
endef

bundles/werift.min.js: bundles modules/werift
	cd modules/werift && npm i --no-scripts esbuild && npx esbuild packages/webrtc/src/index.ts \
		--bundle --minify --outfile=bundle.js --platform=node --target=es2020
	$(file > bundles/werift.min.js,$(WERIFT_BUNDLE_HEADER))
	cat modules/werift/bundle.js >> bundles/werift.min.js
	rm modules/werift/bundle.js

types/lib-jitsi-meet: modules/lib-jitsi-meet
	cp -r modules/lib-jitsi-meet/types/hand-crafted/ types/lib-jitsi-meet/
	find types/lib-jitsi-meet/ -name "*.d.ts" -exec sed -i \
		-e "s/JQuery\|HTMLElement\|MediaStream\|MediaStreamTrack\|MediaDeviceInfo\|Element\|RTCPeerConnection\|RTCRtpSender\|RTCRtpReceiver\|RTCRtpEncodingParameters\|RTCSessionDescription\|\(typeof \)\{0,1\}Strophe\.[A-Za-z]\+/unknown/g" \
		-e "s|\(import .* from ['\"]\.\{1,2\}/[a-zA-Z0-9/\.]\+\)|\1.d.ts|g" \
		{} \;
	sed -i \
		-e "s|jitsi-meet-logger|../jitsi-meet-logger/Logger.d.ts|" \
		-e "s/\(setNetworkInfo: (\)/\1info:/g" \
		types/lib-jitsi-meet/JitsiMeetJS.d.ts
	sed -i -e "s/\({ timeout: number }\)/data: \1/" types/lib-jitsi-meet/modules/xmpp/XmppConnection.d.ts
	sed -i "s|from 'events'|from 'https://deno.land/std/node/_events.d.ts'|" types/lib-jitsi-meet/modules/RTC/JitsiTrack.d.ts
	sed -i "s|../.\(./JitsiConnectionErrors.d.ts\)|\1|" types/lib-jitsi-meet/authenticateAndUpgradeRole.d.ts
	sed -i "s|../.\(./JitsiConferenceEvents.d.ts\)|\1|" types/lib-jitsi-meet/JitsiConference.d.ts
