import { server } from '@/mocks/node'
import "@testing-library/jest-dom/vitest";
import { beforeAll, afterEach, afterAll } from 'vitest'

 
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())