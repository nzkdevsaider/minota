import { object, string } from "yup";

export const validator = object({
  name: string()
    .max(25, "El nombre del curso es muy largo!")
    .required("El nombre del curso no puede estar vacío!"),
  color: string()
    .matches(/^#[0-9a-f]{6}$/i, "El color debe ser un código hexadecimal válido!")
    .required("El color debe ser un código hexadecimal válido!"),
});
