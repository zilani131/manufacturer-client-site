import React from 'react';

const MyOrderRow = ({user,index}) => {
     const {productName,_id,orderedNum,status}=user;
    return (
        <tr>
        <th>{index+1}</th>
        <td>{productName}</td>
        <td>{orderedNum}</td>
        <td>{status}</td>
        <td><button className='btn btn-error'>Delete</button></td>
      </tr>
    );
};

export default MyOrderRow;