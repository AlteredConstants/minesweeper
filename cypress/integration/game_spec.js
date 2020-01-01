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

const element = name => `[data-test="${name}"]`
const tile = index =>
  `${element("field")} > ${element("tile")}:nth-of-type(${index + 1})`

describe("Playing a game", () => {
  beforeEach(() => {
    localStorage.setItem("field", seedField)
    cy.visit("/")
  })

  it("clear the field", () => {
    for (const index of [0, 3, 11, 13, 14]) {
      cy.get(tile(index)).click()
    }
    cy.get(element("overlay")).should("contain", "Cleared")

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
    cy.get(element("overlay")).should("contain", "Boom")
    for (const index of mineTileIndexes) {
      cy.get(tile(index)).should("contain", "💥")
    }
  })
})
