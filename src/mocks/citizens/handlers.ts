import { http, HttpResponse } from "msw";
import { MOCKS } from "./mocks";

export const handlers = [
  http.get("https://rickandmortyapi.com/api/character*", () => {
    return HttpResponse.json(MOCKS);
  }),
];
