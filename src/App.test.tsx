import React from "react";
import { render, fireEvent, within } from "@testing-library/react";
import {
  mockField,
  mockMineTileIndex,
  mockSafeTileIndexes,
} from "./util/__mocks__/createField";
import App from "./App";
import { serialize } from "./util/fieldSerialization";

test("Clicking a mine tile should explode the field", () => {
  localStorage.setItem("field", serialize(mockField));
  const { getAllByRole, getByRole } = render(<App />);
  const tiles = getAllByRole("cell");
  const mineTile = tiles[mockMineTileIndex];

  fireEvent.click(within(mineTile).getByRole("button"));

  expect(mineTile).toHaveTextContent("💥");
  expect(getByRole("dialog")).toHaveTextContent("Boom");
});

test("Clicking all safe tiles should clear the field", () => {
  localStorage.setItem("field", serialize(mockField));
  const { getAllByRole, getByRole } = render(<App />);
  const tiles = getAllByRole("cell");

  for (const index of mockSafeTileIndexes) {
    fireEvent.click(within(tiles[index]).getByRole("button"));
  }

  expect(getByRole("dialog")).toHaveTextContent("Cleared");
});
