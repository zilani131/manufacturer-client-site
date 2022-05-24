import React from 'react';
import { toast } from 'react-toastify';

const MyOrderRow = ({user,index,refetch}) => {
     const {productName,_id,orderedNum,status}=user;
     const handleDelete=(event)=>{
         event.preventDefault();
         fetch(`http://localhost:5000/user/${_id}`,{
             method:"DELETE",
             headers: {
                'Content-Type':'application/json',
              }
         })
         .then(res=>res.json())
         .then(data=>{
             console.log(data);
             if(data?.deletedCount){
                 toast.success(`${productName} is deleted`)
             }
          refetch()
         })

     }
    return (
        <tr>
        <th>{index+1}</th>
        <td>{productName}</td>
        <td>{orderedNum}</td>
        <td>{status}</td>
        <td><button onClick={handleDelete} class="btn btn-error">Delete</button></td>
      </tr>
      
    );
};

export default MyOrderRow;