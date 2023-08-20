"use client";

import {
  Cog6ToothIcon,
  EllipsisVerticalIcon,
  PencilIcon,
  PencilSquareIcon,
  PlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import { getCourseById, getCourseItemsById } from "@minota/db/api/courses";
import { useLiveQuery } from "dexie-react-hooks";
import LoadingScreen from "@minota/components/Loading/LoadingScreen";
import FinalGrade from "@minota/components/Course/FinalGrade";
import AddItemButton from "@minota/components/Buttons/AddItemButton";
import { CourseProvider } from "@minota/context/CourseContext";
import CourseLayout from "@minota/components/Layouts/CourseLayout";

const CoursesPage = () => {
  const pathname = usePathname();
  const id = pathname.split("/")[2];

  return (
    <CourseProvider>
      <CourseLayout id={id} />
    </CourseProvider>
  );
};

export default CoursesPage;
