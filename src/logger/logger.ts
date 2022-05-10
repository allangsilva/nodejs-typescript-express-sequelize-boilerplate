import pino from "pino";
import config from "../config/appConfig";

export default pino({
  enabled: config.logger.enabled,
  level: config.logger.level,
});
