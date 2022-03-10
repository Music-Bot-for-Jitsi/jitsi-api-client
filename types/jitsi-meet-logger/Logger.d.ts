export interface LogLevels {
  trace: 0,
  debug: 1,
  info: 2,
  log: 3,
  warn: 4,
  error: 5,
}

declare class Logger {
  levels: LogLevels;
}

export default Logger;
