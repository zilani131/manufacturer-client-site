import React from 'react';

const ManageOrdersRow = ({index,order,refetch}) => {
    const {_id,prodcutName,name,email,status,}=order;
    const handleShip=(event)=>{
        event.preventDefault();
        const newStatus={status:"shipped"}
        fetch(`https://cryptic-dawn-85784.herokuapp.com/order/${_id}`,{
            method:"PUT",
            headers: {
               'Content-Type':'application/json',
             },
             body:JSON.stringify(newStatus)
        })
        .then(res=>{
            console.log(res)
            return res.json()
        })
        .then(data=>{
            console.log(data)
            refetch()
        })
         
    }
    return (
        <tr>
        <th>{index+1}</th>
        <td>{name}</td>
        <td>{email}</td>
        <td>{prodcutName}</td>
        <td>{status}</td>
        <td><button disabled={status==="unpaid"} onClick={handleShip} className="btn btn-success">Shipping</button></td>

      </tr>
    );
};

export default ManageOrdersRow;