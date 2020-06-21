export {}

const mineTileIndexes = [7, 10, 12, 15]
const tiles = Array.from(Array(16), () => ({
  isMine: false,
  isCleared: false,
  isFlagged: false,
}))
const seedField = JSON.stringify({
  width: 4,
  tiles: mineTileIndexes.reduce((state, mineIndex) => {
    state[mineIndex].isMine = true
    return state
  }, tiles),
})

const role = (name: string) => `[role="${name}"]`
const tile = (index: number) => {
  const width = 4
  const row = `${role("row")}:nth-of-type(${Math.floor(index / width) + 1})`
  const cell = `${role("cell")}:nth-of-type(${(index % width) + 1})`
  return `${role("grid")} > ${row} > ${cell}`
}

describe("Playing a game", () => {
  beforeEach(() => {
    localStorage.setItem("field", seedField)
    cy.visit("/")
  })

  it("clear the field", () => {
    for (const index of [0, 3, 11, 13, 14]) {
      cy.get(tile(index)).click()
    }
    cy.get(role("dialog")).should("contain", "Cleared")

    // prettier-ignore
    const values = [
       0,  0,  1,  1,
       0,  1,  2, "",
       1,  2, "",  3,
      "",  2,  2, "",
    ];
    for (const [index, value] of values.entries()) {
      if (value === "") {
        continue
      }
      cy.get(tile(index)).should("contain", value)
    }
  })

  it("set off a mine", () => {
    cy.get(tile(7)).click()
    cy.get(role("dialog")).should("contain", "Boom")
    for (const index of mineTileIndexes) {
      cy.get(tile(index)).should("contain", "💥")
    }
  })
})
