import { setupServer } from "msw/node";
import { defaultHandlers } from "./handlers.js";

export const server = setupServer(...defaultHandlers);
