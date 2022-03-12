lib_jitsi_meet_repo = ./lib-jitsi-meet-master

# If the first argument is "run_example", parse cli arguments
ifeq (run_example,$(firstword $(MAKECMDGOALS)))
  # use the rest as arguments for "run"
  RUN_ARGS := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS))
  # ...and turn them into do-nothing targets
  $(eval $(RUN_ARGS):;@:)
endif

clean:
	rm -r types/lib-jitsi-meet

run_example:
	deno run --location="https://jimmi.xyz/fake/" \
		--allow-read --allow-net --allow-env \
		examples/cli.ts $(RUN_ARGS)

types/lib-jitsi-meet:
	cp -r $(lib_jitsi_meet_repo)/types/hand-crafted/ types/lib-jitsi-meet/
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
