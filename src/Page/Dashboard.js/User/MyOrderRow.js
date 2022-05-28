import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const MyOrderRow = ({user,index,refetch,setCancel}) => {
     const {productName,_id,orderedNum,status}=user;
    //  const handleDelete=(event)=>{
    //     //  event.preventDefault();
    //      fetch(`http://localhost:5000/user/${_id}`,{
    //          method:"DELETE",
    //          headers: {
    //             'Content-Type':'application/json',
    //           }
    //      })
    //      .then(res=>res.json())
    //      .then(data=>{
    //          console.log(data);
    //          if(data?.deletedCount){
    //              toast.success(`${productName} is deleted`)
    //          }
            
    //       refetch()
    //      })

    //  }
     
    return (
        <tr>
        <th>{index+1}</th>
        <td>{productName}</td>
        <td>{orderedNum}</td>
        <td>{status}</td>
        <td><label onClick={()=>setCancel(user)} for="cancelModal" className="btn btn-error btn-sm">Cancel Order</label>
            </td>
        <td> 
            <Link to={`/dashboard/payment/${_id}`}  className="btn btn-success btn-sm">Payment</Link></td>
      </tr>
      
    );
};

export default MyOrderRow;