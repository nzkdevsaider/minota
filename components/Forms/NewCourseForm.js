import { HexColorPicker } from "react-colorful";
import { EyeDropperIcon } from "@heroicons/react/24/outline";
import { Formik } from "formik";
import { randomColor } from "@minota/lib/utils/randomColor";
import { validator } from "@minota/lib/validators/newCourseSchema";
import ErrorForm from "../ErrorMessages/ErrorForm";
import { addCourse } from "@minota/db/api/courses";

const NewCourseForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        color: randomColor(),
      }}
      validationSchema={validator}
      onSubmit={(values) => {
        try {
          window.createCourse.close();
          addCourse(values.name, values.color);
        } catch (error) {
          console.error(error);
        }
      }}
    >
      {({
        errors,
        touched,
        values,
        handleChange,
        handleSubmit,
        setFieldValue,
      }) => (
        <form
          method="dialog"
          className="form-control gap-5"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col space-y-3">
            <div>
              <label className="label">
                <span className="label-text">
                  Nombre del curso o asignatura
                </span>
                {errors.name && touched.name && (
                  <ErrorForm>{errors.name}</ErrorForm>
                )}
              </label>
              <input
                type="text"
                name="name"
                placeholder="ej. Matemáticas I"
                className="input input-bordered w-full max-w-xl"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Color representativo</span>
                {errors.color && touched.color && (
                  <ErrorForm>{errors.color}</ErrorForm>
                )}
              </label>
              <div className="flex flex-row items-center">
                <input
                  type="text"
                  name="color"
                  placeholder="ej. #ff0044"
                  className="input input-bordered w-full max-w-xl"
                  onChange={handleChange}
                  value={values.color}
                />
                <div className="dropdown dropdown-left md:dropdown-top">
                  <label tabIndex={0} className="btn m-1">
                    <EyeDropperIcon className="h-5 w-5" />
                  </label>

                  <HexColorPicker
                    tabIndex={0}
                    name="color"
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                    onChange={(e) => setFieldValue("color", e)}
                    color={values.color}
                  />
                </div>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Crear
          </button>
        </form>
      )}
    </Formik>
  );
};

export default NewCourseForm;
