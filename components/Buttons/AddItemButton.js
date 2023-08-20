import { PlusIcon } from "@heroicons/react/24/outline";
import AddItemDialog from "../Dialogs/AddItemDialog";

const AddItemButton = () => {
  return (
    <>
      <AddItemDialog/>
      <button
        onClick={() => window.addItem.showModal()}
        className="btn btn-sm btn-primary"
      >
        <PlusIcon className="w-5 h-5" />
        Añadir item
      </button>
    </>
  );
};

export default AddItemButton;
