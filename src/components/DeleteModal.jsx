function DeleteModal({

  isOpen,

  onConfirm,

  onCancel

}) {

  if (!isOpen)
    return null;

  return (

    <div className="modal">

      <div className="modal-content">

        <h3>
          Delete Expense
        </h3>

        <p>
          Are you sure?
        </p>

        <button
          onClick={onCancel}
        >
          Cancel
        </button>

        <button
          onClick={onConfirm}
        >
          Delete
        </button>

      </div>

    </div>

  );
}

export default DeleteModal;