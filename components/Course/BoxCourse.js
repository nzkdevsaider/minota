import { motion } from "framer-motion";
import Link from "next/link";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import CreatorDialog from "../Dialogs/CourseCreatorDialog";
import FinalGrade from "./FinalGrade";

const BoxCourse = ({ course, courseCreator }) => {

  if (courseCreator) {
    return (
      <>
        <CreatorDialog />
        <motion.button
          onClick={() => window.createCourse.showModal()}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.9 }}
          className="course card card-bordered items-center border-primary h-full p-4 bg-secondary"
        >
          <div className="flex flex-row justify-center items-center text-center text-gray-500 font-bold">
            <PlusCircleIcon className="h-10 w-10" />
            <span>Crear nuevo curso</span>
          </div>
        </motion.button>
      </>
    );
  }

  return (
    <Link href="/courses/[id]" as={`/courses/${course.id}`}>
      <motion.div
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.9 }}
        className="course card card-bordered p-4 h-full"
      >
        <div className="flex flex-col justify-center space-y-4 md:flex-row md:justify-between md:space-x-4">
          <div className="flex flex-row items-center gap-4">
            <div className="avatar placeholder">
              <div className="bg-secondary-focus mask mask-squircle w-10">
                <span className="text-2xl font-bold">
                  {course.icon ?? course.name[0]}
                </span>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold">{course.name}</h1>
            </div>
          </div>
          <div>
            <FinalGrade size="small" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default BoxCourse;
