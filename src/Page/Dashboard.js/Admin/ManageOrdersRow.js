import React from 'react';

const ManageOrdersRow = ({index,order,refetch}) => {
    const {_id,prodcutName,name,email,status,}=order;
    const handleShip=(event)=>{
        event.preventDefault();
        
    }
    return (
        <tr>
        <th>{index+1}</th>
        <td>{name}</td>
        <td>{email}</td>
        <td>{prodcutName}</td>
        <td>{status}</td>
        <td><button onClick={handleShip} class="btn btn-success">Shipping</button></td>

      </tr>
    );
};

export default ManageOrdersRow;