import React from 'react';
import { toast } from 'react-toastify';

const ManageProductRow = ({index,refetch,tool}) => {
    const {_id,name,img}=tool;
    const handleDlt=event=>{
        event.preventDefault();
        fetch(`http://localhost:5000/product/${_id}`,{
             method:"DELETE",
             headers: {
                'Content-Type':'application/json',
              }
         })
         .then(res=>res.json())
         .then(data=>{
             console.log(data);
             if(data?.deletedCount){
                 toast.success(`${name} is deleted`)
             }
            
          refetch()
         })
    }
    return (
        <tr>
        <th>{index+1}</th>
        <td className='flex flex-row items-center gap-1'><div>{name}</div>
  <div class="w-16 rounded-sm">
    <img src={img}  alt={name} />
  </div>

</td>
        <td>{_id}</td>
        
        <td><button  onClick={handleDlt} class="btn btn-success">Delete</button></td>

      </tr>
    );
};

export default ManageProductRow;