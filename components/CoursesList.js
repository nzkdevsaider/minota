import React, { useState, useEffect } from "react";
import { getAllCourses } from "@minota/db/api/courses";
import { motion } from "framer-motion";
import { useLiveQuery } from "dexie-react-hooks";
import BoxCourse from "./CoursesView/BoxCourse";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

const CoursesList = ({ newButton = false }) => {
  const courses = useLiveQuery(() => getAllCourses(), []);
  return (
    <>
      {courses?.length === 0
        ? "No hay cursos."
        : courses?.map((course) => {
            return <BoxCourse key={course.id} {...course} />;
          })}
      {newButton && (
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="course card card-bordered border-primary w-60 h-44 min-w-max bg-secondary"
        >
          <div className="card-body justify-center items-center text-center text-gray-500 font-bold">
            <span>Crear nuevo curso</span>
            <PlusCircleIcon className="h-10 w-10" />
          </div>
        </motion.div>
      )}
    </>
  );
};

export default CoursesList;
