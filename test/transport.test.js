import winston from "winston";

test("create logger with file transport", () => {
    const logger = winston.createLogger({
        transports: [
            new winston.transports.Console({}),
            new winston.transports.File({
                filename: 'application.log'
            })
        ],
    });

    logger.info("Info");
    logger.error("Error");
});