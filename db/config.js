import Dexie from "dexie";

export const database = new Dexie("minotaDB");
database.version(1).stores({
  profile: "name, color",
  courses: "id, name, color, icon, teacher, year, semester",
  courseItems: "id, idCourse, name, percentage",
  courseGrades: "id, idItem, grade, date, description",
});
