import ReduxThunk from "redux-thunk";
import logger from "./logger";
import { applyMiddleware } from "redux";

export default applyMiddleware(ReduxThunk, logger);
