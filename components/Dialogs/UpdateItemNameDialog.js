import { updateItemName } from "@minota/db/api/courses";
import { useRef } from "react";

const UpdateItemNameDialog = ({ itemId }) => {
	const checkboxRef = useRef();
	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		const formData = new FormData(form);
		const data = Object.fromEntries(formData);
		updateItemName(itemId, data.name);
		checkboxRef.current.checked = false;
	};

	return (
		<>
			<input
				ref={checkboxRef}
				type="checkbox"
				id={`updateItemName_${itemId}`}
				className="modal-toggle"
			/>
			<div className="modal" role="dialog">
				<div className="modal-box overflow-y-visible">
					<label
						htmlFor={`updateItemName_${itemId}`}
						className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
					>
						✕
					</label>
					<h3 className="font-bold text-lg">Actualizar nombre del item</h3>
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
							<button type="submit" className="btn btn-primary w-full">
								Actualizar
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default UpdateItemNameDialog;
