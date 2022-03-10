lib_jitsi_meet_repo = ./lib-jitsi-meet-master

types/lib-jitsi-meet:
	cp -r $(lib_jitsi_meet_repo)/types/hand-crafted/ types/lib-jitsi-meet/
	find types/lib-jitsi-meet/ -name "*.d.ts" -exec sed -i \
		-e "s/JQuery\|HTMLElement\|MediaStream\|MediaStreamTrack\|MediaDeviceInfo/any/g" \
		-e "s|\(import .* from ['\"]\.\{1,2\}/[a-zA-Z0-9/\.]\+\)|\1.d.ts|g" \
		{} \;
	sed -i \
		-e "s|jitsi-meet-logger|../jitsi-meet-logger/Logger.d.ts|" \
		-e "s/\(setNetworkInfo: (\)/\1info:/g" \
		types/lib-jitsi-meet/JitsiMeetJS.d.ts
	sed -i "s|from 'events'|from 'https://deno.land/std/node/_events.d.ts'|" types/lib-jitsi-meet/modules/RTC/JitsiTrack.d.ts
	sed -i "s|../.\(./JitsiConnectionErrors.d.ts\)|\1|" types/lib-jitsi-meet/authenticateAndUpgradeRole.d.ts
	sed -i "s|../.\(./JitsiConferenceEvents.d.ts\)|\1|" types/lib-jitsi-meet/JitsiConference.d.ts
