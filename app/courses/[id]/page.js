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

const CoursesPage = () => {
  const pathname = usePathname();
  const id = pathname.split("/")[2];
  const course = useLiveQuery(() => getCourseById(id), [id]);
  const items = useLiveQuery(() => getCourseItemsById(id), [id]);

  if (!course) {
    return <LoadingScreen />;
  }

  return (
    <section className="space-y-8">
      {/* Course Header */}
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="flex flex-row justify-center items-center gap-3">
          <div className="avatar placeholder">
            <div className="bg-secondary-focus mask mask-squircle w-10">
              <span className="text-2xl font-bold">
                {course.icon ?? course.name[0]}
              </span>
            </div>
          </div>
          <h1 className="text-4xl font-extrabold text-center">{course.name}</h1>
          <button className="btn btn-circle btn-ghost">
            <PencilSquareIcon className="w-5 h-5" />
          </button>
        </div>
        <FinalGrade />
      </div>
      {/* Items */}
      {!items || items.length === 0 ? (
        <div className="flex flex-col justify-center items-center space-y-4 py-32">
          <span className="text-2xl font-bold">No hay items que mostrar.</span>
          <span className="text-gray-300">Prueba añadiendo items.</span>
          <AddItemButton />
        </div>
      ) : (
        items.map((item) => (
          <>
            {/* Item add */}
            <div className="flex flex-row justify-end items-center gap-5">
              <AddItemButton />
              <button className="btn btn-circle btn-ghost">
                <Cog6ToothIcon className="w-5 h-5" />
              </button>
            </div>

            <div className="flex bg-secondary rounded-md flex-col gap-5 p-5">
              <div className="flex flex-nowrap items-center justify-between">
                <div className="flex flex-col">
                  <h1 className="text-2xl font-bold">Item 1</h1>
                  <span className="text-sm justify-center italic">45%</span>
                </div>
                <button className="btn btn-sm btn-circle btn-ghost">
                  <EllipsisVerticalIcon className="w-5 h-5" />
                </button>
              </div>
              <div className="flex flex-col space-y-5">
                {/* Notas */}
                <div className="flex flex-row items-center justify-between">
                  <span>Nota 1</span>
                  <div className="flex flex-row gap-2">
                    <button className="btn btn-sm btn-circle btn-ghost">
                      <PencilIcon className="w-5 h-5" />
                    </button>
                    <button className="btn btn-sm btn-circle btn-ghost">
                      <XMarkIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div className="flex">
                  <button className="btn btn-sm btn-ghost">
                    <PlusIcon className="w-5 h-5" />
                    Añadir nota
                  </button>
                </div>
              </div>
            </div>
          </>
        ))
      )}
    </section>
  );
};

export default CoursesPage;
