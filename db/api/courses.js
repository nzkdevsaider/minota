import { database } from "../config";
import { v4 } from "uuid";

// Courses

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
 * La función `addCourse` agrega un nuevo curso a una base de datos con un nombre y color determinados.
 * @param name - El parámetro de nombre es el nombre del curso que desea agregar.
 * @param color - El parámetro "color" se utiliza para especificar el color del curso. Puede ser
 * cualquier valor de color válido, como un código de color hexadecimal (#RRGGBB) o un nombre de color
 * (por ejemplo, "rojo", "azul", "verde").
 * @returns una promesa que resuelve el resultado de agregar un curso a la base de datos.
 */

export const addCourse = async (name, color) => {
  if (!name || !color) {
    throw new Error("Todos los campos son requeridos.");
  }

  return await database.courses.add({
    id: v4(),
    name,
    color,
    createdAt: new Date(),
  });
};

/**
 * La función `deleteCourse` elimina un curso de la base de datos utilizando el `id` proporcionado.
 * @param id - El parámetro `id` es el identificador único del curso que debe eliminarse de la base de
 * datos.
 * @returns La función deleteCourse devuelve el resultado de la operación database.courses.delete(id).
 */
export const deleteCourse = async (id) => {
  return await database.courses.delete(id);
};

/**
 * La función actualiza el nombre de un curso en una base de datos.
 * @param id - El parámetro id es el identificador único del curso que debe actualizarse. Se utiliza
 * para localizar el curso específico en la base de datos.
 * @param name - El nombre del curso que desea actualizar.
 * @returns el resultado de actualizar el nombre del curso en la base de datos.
 */
export const updateCourseName = async (id, name) => {
  if (!name) {
    throw new Error("El nombre es requerido.");
  }

  return await database.courses.update(id, { name });
};

// Items

/**
 * La función `addItem` agrega un nuevo elemento a un curso con el ID, el nombre y el porcentaje
 * especificados.
 * @param idCourse - El id del curso al que pertenece el elemento.
 * @param name - El parámetro de nombre es una cadena que representa el nombre del elemento que se
 * agregará.
 * @param percentage - El parámetro "porcentaje" representa el valor porcentual asociado con el
 * elemento que se agrega al curso.
 * @returns una promesa que resuelve el resultado de agregar un nuevo elemento a la base de datos.
 */
export const addItem = async (idCourse, name, percentage) => {
  if (!name || !percentage || !idCourse) {
    throw new Error("Todos los campos son requeridos.");
  }

  return await database.courseItems.add({
    id: v4(),
    idCourse,
    name,
    percentage,
  });
};

/**
 * La función actualiza el nombre de un elemento en una base de datos del curso.
 * @param id - El parámetro `id` es el identificador del elemento que debe actualizarse en la base de
 * datos. Se utiliza para localizar el elemento específico que necesita ser actualizado.
 * @param name - El parámetro de nombre es el nuevo nombre que desea actualizar para el elemento.
 * @returns el resultado de actualizar el nombre del elemento en la base de datos.
 */
export const updateItemName = async (id, name) => {
  if (!name) {
    throw new Error("El nombre es requerido.");
  }

  return await database.courseItems.update(id, { name });
};

/**
 * La función `updateItemPercentage` actualiza el porcentaje de un elemento del curso en una base de
 * datos.
 * @param id - El parámetro id es el identificador del elemento que debe actualizarse. Se utiliza para
 * localizar el elemento específico en la base de datos.
 * @param percentage - El parámetro "porcentaje" es el nuevo valor que desea actualizar para el
 * elemento con el "id" especificado.
 * @returns el resultado de actualizar el porcentaje del artículo en la base de datos.
 */
export const updateItemPercentage = async (id, percentage) => {
  if (!percentage) {
    throw new Error("El porcentaje es requerido.");
  }

  return await database.courseItems.update(id, { percentage });
}
