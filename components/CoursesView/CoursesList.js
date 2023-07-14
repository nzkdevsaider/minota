import React, { useState, useEffect } from "react";
import { getAllCourses } from "@minota/db/api/courses";
import { useLiveQuery } from "dexie-react-hooks";
import BoxCourse from "./BoxCourse";
import CreatorDialog from "../CourseCreator/CreatorDialog";

const CoursesList = () => {
  const courses = useLiveQuery(() => getAllCourses(), []);
  return (
    <>
      {courses?.map((course) => {
        return <BoxCourse key={course.id} {...course} />;
      })}
      <BoxCourse courseCreator={true} />
    </>
  );
};

export default CoursesList;
