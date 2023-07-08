import { motion } from "framer-motion";
import Link from "next/link";

const BoxCourse = ({ id, name, teacher, year, semester, color, icon }) => {
  return (
    <Link href="/courses/[id]" as={`/courses/${id}`}>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`course card card-bordered border-[${color}] w-60 h-44 min-w-fit bg-secondary"`}
      >
        <div className="card-body justify-center">
          <div className="card-title">
            <div className="avatar placeholder">
              <div className="bg-secondary-focus mask mask-squircle w-10">
                <span className="text-2xl">{icon ?? "📓"}</span>
              </div>
            </div>
            <h1>{name}</h1>
          </div>
          <div className="card-actions">
            <div className="badge border-primary">{year}</div>
            <div className="badge border-primary">{semester}</div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default BoxCourse;
