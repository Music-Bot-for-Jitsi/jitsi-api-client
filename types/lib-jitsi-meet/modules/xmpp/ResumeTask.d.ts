export default class ResumeTask {
  constructor( stropheConnection: unknown );
  retryDelay: () => number | undefined;
  schedule: () => void;
  cancel: () => void;
}
