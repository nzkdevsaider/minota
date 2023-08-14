import { InformationCircleIcon } from "@heroicons/react/24/outline";

import NewCourseForm from "../Forms/NewCourseForm";

const CreatorDialog = () => {
  return (
    <dialog id="createCourse" className="modal text-accent">
      <div className="modal-box overflow-y-visible">
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={() => window.createCourse.close()}
        >
          ✕
        </button>
        <h3 className="font-bold text-lg">Crear nuevo curso</h3>
        <div className="aviso flex flex-row justify-between gap-3 items-center">
          <InformationCircleIcon className="h-6 w-6" />
          <p className="py-4">
            Los cursos creados se almacenan localmente en tu dispositivo.
          </p>
        </div>
        <NewCourseForm />
      </div>
    </dialog>
  );
};

export default CreatorDialog;