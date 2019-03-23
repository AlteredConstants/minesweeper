import * as React from "react";
import { Field } from "../interface";
import InitField from "./InitField";
import StartedField from "./StartedField";

interface FieldProps {
  field: Field;
}
export default function Field({ field }: FieldProps) {
  return field.state === "init" ? (
    <InitField />
  ) : (
    <StartedField field={field} />
  );
}
