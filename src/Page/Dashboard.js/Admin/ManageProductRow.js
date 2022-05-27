import React from "react";
import { toast } from "react-toastify";

const ManageProductRow = ({ index, refetch, tool }) => {
  const { _id, name, img } = tool;
  const handleDlt = (event) => {
    event.preventDefault();
    fetch(`http://localhost:5000/product/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.deletedCount) {
          toast.success(`${name} is deleted`);
        }

        refetch();
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        {name}
        
      </td>
      <td>
          <img className="w-16" src={img} alt={name} />
      </td>
      <td>{_id}</td>

      <td>
        <button onClick={handleDlt} class="btn btn-error">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ManageProductRow;
