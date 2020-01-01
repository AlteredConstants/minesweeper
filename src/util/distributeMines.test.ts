import distributeMines from "./distributeMines"
jest.unmock("./distributeMines")

it("should create an array", () => {
  const field = distributeMines(9, 3)
  expect(field).toEqual(expect.any(Array))
})

it("should create an array of the specified size", () => {
  const field = distributeMines(9, 3)
  expect(field).toHaveLength(9)
})

it("should create an array containing `true` for each mine", () => {
  const field = distributeMines(9, 3)
  expect(field.filter(t => t === true)).toHaveLength(3)
})

it("should create an array containing `false` for non-mines", () => {
  const field = distributeMines(9, 3)
  expect(field.filter(t => t === false)).toHaveLength(6)
})
