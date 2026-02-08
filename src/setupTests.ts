import { afterEach, expect, mock } from "bun:test";
import { GlobalRegistrator } from "@happy-dom/global-registrator";
import { cleanup } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";
import { createFieldModuleMock } from "@/util/__mocks__/createField";
import { distributeMinesModuleMock } from "@/util/__mocks__/distributeMines";

GlobalRegistrator.register();

mock.module("@/util/distributeMines", () => distributeMinesModuleMock);
mock.module("@/util/createField", () => createFieldModuleMock);

expect.extend(matchers);

afterEach(() => {
	cleanup();
});
