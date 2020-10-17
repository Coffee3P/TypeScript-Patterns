enum LogLevel {
    None = 0,
    Info,
    Debug,
    Warning,
    Error,
    FunctionalMessage,
    FunctionalError,
    All
}

abstract class Logger {
    protected logMask: LogLevel;

    /**
     * Next logger in chain.
     */
    protected next: Logger;

    constructor(mask: LogLevel) {
        this.logMask = mask;
    }

    /**
     * 
     * @param nextLogger Next logger in the chain of loggers.
     */
    setNext(nextLogger: Logger): Logger {
        let lastLogger: Logger = this;

        while (lastLogger.next != null) {
            lastLogger = lastLogger.next;
        }

        lastLogger.next = nextLogger;
        return this;
    }

    message(msg: string, severity: LogLevel): void {
        if ((severity & this.logMask) != 0) {
            this.writeMessage(msg);
        }

        if (this.next != null) {
            this.next.message(msg, severity);
        }
    }

    protected abstract writeMessage(msg: string): void;
}

class ConsoleLogger extends Logger {
    constructor(mask: LogLevel) {
        super(mask);
    }

    protected writeMessage(msg: string): void {
        console.log('Writing to console: ' + msg);
    }
}

class EmailLogger extends Logger {
    constructor(mask: LogLevel) {
        super(mask);
    }

    protected writeMessage(msg: string): void {
        console.log('Writing to email: ' + msg);
    }
}

class FileLogger extends Logger {
    constructor(mask: LogLevel) {
        super(mask);
    }

    protected writeMessage(msg: string): void {
        console.log('Writing to file: ' + msg);
    }
}

let logger = new ConsoleLogger(LogLevel.All);
logger.setNext(new EmailLogger(LogLevel.FunctionalMessage));
logger.setNext(new FileLogger(LogLevel.Warning))

