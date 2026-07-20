import { useParams }
from "react-router-dom";

function EditExpense() {

  const { id } =
    useParams();

  return (

    <div>

      Edit Expense:

      {id}

    </div>

  );
}

export default EditExpense;