import { server } from "@/mocks/node";
import "@testing-library/jest-dom/vitest";
import { beforeAll, afterEach, afterAll } from "vitest";

// verify interceptor works
// server.events.on("request:start", ({ request }) => {
//   console.log("MSW intercepted:", request.method, request.url);
// });

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
