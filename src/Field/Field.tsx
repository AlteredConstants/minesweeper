import React from "react";
import { Field as FieldType } from "../interface";
import InitField from "./InitField";
import StartedField from "./StartedField";

interface FieldProps {
  field: FieldType;
}
export default function Field({ field }: FieldProps) {
  return field.state === "init" ? (
    <InitField />
  ) : (
    <StartedField field={field} />
  );
}
