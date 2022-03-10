import polyfills from './polyfills.ts'

async function init(domain: string) {
    const JitsiMeetJS = await polyfills.init(domain);

    JitsiMeetJS.init({})
}

await init("meet.jit.si")
