import { motion } from "framer-motion";
import Link from "next/link";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import CreatorDialog from "../CourseCreator/CreatorDialog";

const BoxCourse = ({ ...course }) => {
  if (course.courseCreator) {
    return (
      <>
        <CreatorDialog />
        <motion.div
          onClick={() => window.createCourse.showModal()}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="course card card-bordered border-primary w-full h-full md:w-72 md:h-44 min-w-max bg-secondary"
        >
          <div className="card-body justify-center items-center text-center text-gray-500 font-bold">
            <span>Crear nuevo curso</span>
            <PlusCircleIcon className="h-10 w-10" />
          </div>
        </motion.div>
      </>
    );
  }

  return (
    <Link href="/courses/[id]" as={`/courses/${course.id}`}>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`course card card-bordered border-[${course.color}] w-full h-full md:w-72 md:h-44 min-w-fit bg-secondary"`}
      >
        <div className="card-body justify-center md:items-center">
          <div className="card-title">
            <div className="avatar placeholder">
              <div className="bg-secondary-focus mask mask-squircle w-10">
                <span className="text-2xl">{course.icon ?? "📓"}</span>
              </div>
            </div>
            <h1>{course.name}</h1>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default BoxCourse;
