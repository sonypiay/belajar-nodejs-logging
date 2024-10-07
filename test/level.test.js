import winston from "winston";

test("logging level 1", () => {
    const logger = winston.createLogger({
        transports: [
            new winston.transports.Console({})
        ],
        level: "debug"
    });

    logger.log({ level: "info", message: "Hello Info" });
    logger.log({ level: "error", message: "Hello Error" });
    logger.log({ level: "warn", message: "Hello Warn" });
    logger.log({ level: "http", message: "Hello Http" });
    logger.log({ level: "verbose", message: "Hello Verbose" });
    logger.log({ level: "debug", message: "Hello Debug" });
    logger.log({ level: "silly", message: "Hello Silly" });
});

test("logging level 2", () => {
    const logger = winston.createLogger({
        transports: [
            new winston.transports.Console({})
        ],
        level: "debug"
    });

    logger.info("Info")
    logger.error("Error");
    logger.warn("Warn");
    logger.http("Http");
    logger.verbose("Verbose");
    logger.debug("Debug");
    logger.silly("Silly");
});