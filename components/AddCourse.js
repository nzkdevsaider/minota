import { useState } from "react";
import { addCourse } from "@minota/db/api/courses";

const AddCourse = () => {
  const [courseName, setCourseName] = useState("");
  const [courseColor, setCourseColor] = useState("");
  const [courseTeacher, setCourseTeacher] = useState("");
  const [courseYear, setCourseYear] = useState("");
  const [courseSemester, setCourseSemester] = useState("");
  const [error, setError] = useState("");

  const handleOnChange = (e) => {
    switch (e.target.name) {
      case "courseName":
        setCourseName(e.target.value);
        break;
      case "courseColor":
        setCourseColor(e.target.value);
        break;
      case "courseTeacher":
        setCourseTeacher(e.target.value);
        break;
      case "courseYear":
        setCourseYear(e.target.value);
        break;
      case "courseSemester":
        setCourseSemester(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addCourse(
        courseName,
        courseColor,
        courseTeacher,
        courseYear,
        courseSemester
      );
    } catch (error) {
      setError("Ha ocurrido un error al agregar el curso.");
      console.log(error);
    }
  };

  return (
    <form onChange={handleOnChange} onSubmit={handleSubmit}>
      {error && <p>{error}</p>}
      <label>Course Name:</label>
      <input type="text" name="courseName" />
      <label>Course Color:</label>
      <input type="text" name="courseColor" />
      <label>Course Teacher:</label>
      <input type="text" name="courseTeacher" />
      <label>Course Year:</label>
      <input type="text" name="courseYear" />
      <label>Course Semester:</label>
      <input type="text" name="courseSemester" />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default AddCourse;
