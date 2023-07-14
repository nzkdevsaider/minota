import Dexie from "dexie";

export const database = new Dexie("minotaDB");
database.version(4).stores({
  profile: "name, color",
  courses: "id, name, color, icon, teacher, createdAt",
  courseItems: "id, idCourse, name, percentage",
  courseGrades: "id, idItem, grade, date, description",
});
