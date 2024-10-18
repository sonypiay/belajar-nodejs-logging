import winston, { level } from "winston";

test("transport level", () => {
    const logger = winston.createLogger({
        transports: [
            new winston.transports.Console({}),
            new winston.transports.File({
                level: 'info',
                filename: 'logs/app.info.log'
            }),
            new winston.transports.File({
                level: 'error',
                filename: 'logs/app.error.log'
            })
        ]
    });

    logger.info("Hello World");
    logger.error("Hello World");
});