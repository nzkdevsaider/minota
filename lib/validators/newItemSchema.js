import { number, object, string } from "yup";

export const validator = object({
  name: string()
    .max(15, "El nombre del item es muy largo!")
    .required("El nombre del item no puede estar vacío!"),
  percentage: number().required("El porcentaje es requerido!"),
});
