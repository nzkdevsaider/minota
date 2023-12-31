import { database } from "../config";
import { v4 } from "uuid";

/**
 * La función `getAllCourses` recupera todos los cursos de una base de datos.
 * @returns La función `getAllCourses` devuelve una promesa que se resuelve en una matriz de todos los
 * cursos de la `base de datos`.
 */
export const getAllCourses = async () => {
  return await database.courses.toArray();
};

/**
 * La función `getCourseById` recupera un curso de una base de datos en función de su ID.
 * @param id - El parámetro `id` es el identificador único del curso que desea recuperar de la base de
 * datos.
 * @returns el objeto del curso con la identificación especificada de la base de datos.
 */
export const getCourseById = async (id) => {
  return await database.courses.get(id);
};

/**
 * La función `getCourseItemsById` recupera los elementos del curso de una base de datos en función del
 * ID del curso proporcionado.
 * @param idCourse - El parámetro `idCourse` es el identificador de un curso. Se utiliza para filtrar
 * los elementos del curso en la base de datos y recuperar solo los elementos que pertenecen al curso
 * especificado.
 * @returns una promesa que se resuelve en una serie de elementos del curso que coinciden con el
 * `idCourse` dado.
 */
export const getCourseItemsById = async (idCourse) => {
  return await database.courseItems.where({ idCourse }).toArray();
};

/**
 * La función `getCourseGradesById` recupera las calificaciones del curso de una base de datos basada
 * en el `idItem` proporcionado.
 * @param idItem - El parámetro `idItem` se utiliza para especificar el ID del curso para el que desea
 * recuperar las calificaciones.
 * @returns una promesa que se resuelve en una serie de calificaciones del curso que coinciden con el
 * idItem dado.
 */
export const getCourseGradesById = async (idItem) => {
  return await database.courseGrades.where({ idItem }).toArray();
};

/**
 * La función `addCourse` agrega un nuevo curso a una base de datos con el nombre, el color, el
 * profesor, el año y el semestre proporcionados.
 * @param name - El nombre del curso.
 * @param color - El parámetro "color" se utiliza para especificar el color del curso. Podría ser una
 * cadena que represente un valor de color, como "rojo", "azul", "#FF0000", etc.
 * @param teacher - El parámetro "profesor" representa el nombre o identificador del profesor que
 * impartirá el curso.
 * @param year - El parámetro "año" representa el año en que se ofrece el curso. Podría ser un valor
 * numérico que represente el año, como 2022.
 * @param semester - El parámetro "semestre" representa el semestre en el que se ofrece el curso.
 * Podría ser una cadena o un número que indique el semestre específico, como "Otoño de 2021" o "1er
 * semestre".
 * @returns una promesa que resuelve el resultado de agregar un curso a la base de datos.
 */
export const addCourse = async (name, color, teacher, year, semester) => {
  if (!name || !color || !teacher || !year || !semester) {
    throw new Error("Todos los campos son requeridos.");
  }

  return await database.courses.add({
    id: v4(),
    name,
    color,
    teacher,
    year,
    semester,
  });
};
