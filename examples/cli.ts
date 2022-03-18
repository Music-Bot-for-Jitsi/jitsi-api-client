import { JitsiClient } from '../mod.ts';

if (Deno.args.length != 2) {
  console.log('Usage: make run_example <domain> <conference>');
  console.log('Example: make run_example meet.jit.si MyConference');
  Deno.exit(1);
}

const [instance, conference] = Deno.args;

await JitsiClient.join(instance, conference);
