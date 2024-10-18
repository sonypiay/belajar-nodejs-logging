import winston, { level } from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

test("rotate file", () => {
    const logger = winston.createLogger({
        transports: [
            new winston.transports.Console({}),
            new DailyRotateFile({
                filename: 'logs/rotate-%DATE%.log',
                zippedArchive: true,
                maxSize: '1m',
                maxFiles: '2d',
            })
        ]
    });

    for( let i = 1; i < 10000; i++ ) {
        logger.info("Hello World");
        logger.error("Hello World");
    }
});