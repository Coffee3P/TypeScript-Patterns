class Logger {
    private static instance: Logger;

    private constructor() {}

    static getInstance(): Logger {
        if (Logger.instance == null) {
            Logger.instance = new Logger();
        }

        return Logger.instance;
    }

    logMessage(message: string): void {
        console.log(message);
    }
}

let logger = Logger.getInstance();

logger.logMessage('Singleton logger created.');