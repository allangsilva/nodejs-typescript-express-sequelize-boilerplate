import logger from "../logger/logger";
import app from "./app";

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => logger.info(`🚀 Server started on port ${PORT}!`));
