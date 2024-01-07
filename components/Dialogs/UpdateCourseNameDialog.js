import { updateCourseName } from "@minota/db/api/courses";
import { CourseContext } from "@minota/context/CourseContext";
import { useContext } from "react";

const UpdateCourseNameDialog = () => {
	const { courseId } = useContext(CourseContext);
	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		const formData = new FormData(form);
		const data = Object.fromEntries(formData);
		updateCourseName(courseId, data.name);
		window.updateCourseName.close();
	};

	return (
		<dialog id="updateCourseName" className="modal text-accent">
			<div className="modal-box overflow-y-visible">
				<button
					type="button"
					className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
					onClick={() => window.updateCourseName.close()}
				>
					✕
				</button>
				<h3 className="font-bold text-lg">Actualizar nombre del curso</h3>
				<form className="mt-4" onSubmit={handleSubmit}>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Nombre</span>
						</label>
						<input
							name="name"
							type="text"
							placeholder="Nombre"
							className="input input-bordered"
						/>
					</div>
					<div className="form-control mt-6">
						<input
							type="submit"
							value="Actualizar"
							className="btn btn-primary w-full"
						/>
					</div>
				</form>
			</div>
		</dialog>
	);
};

export default UpdateCourseNameDialog;
