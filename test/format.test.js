import winston from "winston";

test("format simple", () => {
    const logger = winston.createLogger({
        transports: [
            new winston.transports.Console({})
        ],
        format: winston.format.simple(),
    });

    logger.log({ level: "info", message: "Hello Info" });
});

test("format stash", () => {
    const logger = winston.createLogger({
        transports: [
            new winston.transports.Console({})
        ],
        format: winston.format.logstash(),
    });

    logger.log({ level: "info", message: "Hello Info" });
});

test("format json", () => {
    const logger = winston.createLogger({
        transports: [
            new winston.transports.Console({})
        ],
        format: winston.format.json()
    });

    logger.log({ level: "info", message: "Hello Info" });
});

test("format printf", () => {
    const logger = winston.createLogger({
        transports: [
            new winston.transports.Console({})
        ],
        format: winston.format.printf(info => {
            return `[${new Date()}}] ${info.level}: ${info.message}`;
        })
    });

    logger.log({ level: "info", message: "Hello Info" });
});

test("format combine", () => {
    const logger = winston.createLogger({
        transports: [
            new winston.transports.Console({})
        ],
        format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.json()
        )
    });

    logger.log({ level: "info", message: "Hello Info" });
});