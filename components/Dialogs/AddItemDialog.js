import NewItemForm from "../Forms/NewItemForm";

const AddItemDialog = () => {
  return (
    <dialog id="addItem" className="modal text-accent">
      <div className="modal-box overflow-y-visible">
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={() => window.addItem.close()}
        >
          ✕
        </button>
        <h3 className="font-bold text-lg">Crear nuevo item</h3>
        <NewItemForm />
      </div>
    </dialog>
  );
};

export default AddItemDialog;
