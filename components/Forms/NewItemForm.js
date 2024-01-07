import { Formik } from "formik";
import { validator } from "@minota/lib/validators/newItemSchema";
import ErrorForm from "../ErrorMessages/ErrorForm";
import { addItem } from "@minota/db/api/courses";
import { CourseContext } from "@minota/context/CourseContext";
import { useContext } from "react";

const NewItemForm = () => {
  const { courseId } = useContext(CourseContext);

  return (
    <Formik
      initialValues={{
        name: "",
        percentage: "",
      }}
      validationSchema={validator}
      onSubmit={(values) => {
        try {
          window.addItem.close();
          addItem(courseId, values.name, values.percentage);
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
                <span className="label-text">Nombre del item</span>
                {errors.name && touched.name && (
                  <ErrorForm>{errors.name}</ErrorForm>
                )}
              </label>
              <input
                type="text"
                name="name"
                placeholder="ej. Talleres"
                className="input input-bordered w-full max-w-xl"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Porcentaje</span>
                {errors.percentage && touched.percentage && (
                  <ErrorForm>{errors.percentage}</ErrorForm>
                )}
              </label>
              <div className="flex flex-row items-center">
                <input
                  type="text"
                  name="percentage"
                  placeholder="ej. 35%"
                  className="input input-bordered w-full max-w-xl"
                  onChange={handleChange}
                />
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

export default NewItemForm;