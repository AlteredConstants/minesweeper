import * as t from "io-ts"
import { getOrElse } from "fp-ts/lib/Either"
import { createContext, useState, useEffect } from "react"

const codec = t.type({
  up: t.string,
  down: t.string,
  left: t.string,
  right: t.string,
  flag: t.string,
  clear: t.string,
  clearAdjacent: t.string,
})

type InputConfig = Readonly<t.TypeOf<typeof codec>>

const defaultInputConfig: InputConfig = {
  up: "ArrowUp",
  down: "ArrowDown",
  left: "ArrowLeft",
  right: "ArrowRight",
  flag: " ",
  clear: "Enter",
  clearAdjacent: "Enter",
}

const getOrDefault = getOrElse<t.Errors, InputConfig>(() => defaultInputConfig)

const localStorageKey = "inputConfig"

export function useInputConfig() {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(localStorageKey)
    return getOrDefault(codec.decode(JSON.parse(storedValue || "null")))
  })

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(value))
  }, [value])

  return [value, setValue] as const
}

export const InputConfigContext = createContext(defaultInputConfig)
