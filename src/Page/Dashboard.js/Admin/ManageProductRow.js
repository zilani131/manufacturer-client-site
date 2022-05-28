import React from "react";
import { toast } from "react-toastify";

const ManageProductRow = ({ index, refetch, tool,setDlt }) => {
  const { _id, name, img } = tool;
  

  return (
    <tr>
      {/* <th>{index + 1}</th> */}
      <td>
        {name}
        
      </td>
      <td>
          <img className="w-16" src={img} alt={name} />
      </td>
      <td>{_id}</td>

      <td><label onClick={()=>setDlt(tool)} for="cancelModal" className="btn btn-error btn-sm">Cancel Order</label>
        
      </td>
    </tr>
  );
};

export default ManageProductRow;
