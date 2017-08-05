import freeze from "deep-freeze";
import createField from "./createField";
jest.mock("./distributeMines");

const field = createField({ width: 4, height: 4, mineCount: 4 });
export default freeze(field);
