import {
  Cog6ToothIcon,
  EllipsisVerticalIcon,
  PencilIcon,
  PencilSquareIcon,
  PlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const CoursesPage = () => {
  return (
    <section className="space-y-8">
      {/* Course Header */}
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="flex flex-row justify-center items-center gap-3">
          <h1 className="text-4xl font-extrabold text-center">
            Nombre asignatura
          </h1>
          <button className="btn btn-circle btn-ghost">
            <PencilSquareIcon className="w-5 h-5" />
          </button>
        </div>
        <div className="flex flex-row items-center justify-center bg-primary rounded-full w-40 h-14 gap-4 shadow-md">
          <span className="text-sm">Nota final</span>
          <span className="font-extrabold text-4xl">A</span>
        </div>
      </div>
      {/* Item add */}
      <div className="flex flex-row justify-end items-center gap-5">
        <button className="btn btn-sm btn-primary">
          <PlusIcon className="w-5 h-5" />
          Añadir ítem
        </button>
        <button className="btn btn-circle btn-ghost">
          <Cog6ToothIcon className="w-5 h-5" />
        </button>
      </div>
      {/* Items */}
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
    </section>
  );
};

export default CoursesPage;
