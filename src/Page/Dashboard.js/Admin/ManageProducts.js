import React, { useState } from 'react';
import useTools from '../../../Hooks/useTools';
import Loading from '../../../Utilities.js/Loading';
import ManageProductRow from './ManageProductRow';
import ProductDlt from './ProductDlt';

const ManageProducts = () => {
    const { isLoading, error, data:tools ,refetch}=useTools();
    const [dlt,setDlt]=useState(null);
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
      
          <div class="overflow-x-auto w-full">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              {/* <th></th> */}
              <th>Product Name</th>
              <th>Image</th>
              <th>Id</th>
              <th>Action</th>
             
            </tr>
          </thead>
          <tbody>
            {tools.length && (tools.map((tool, index) => (
              <ManageProductRow
                key={tool._id}
                refetch={refetch}
                index={index}
                tool={tool}
                setDlt={setDlt}
              ></ManageProductRow>
            ))).reverse()}
          </tbody>
        </table>
      </div> 
      {dlt && <ProductDlt refetch={refetch} dlt={dlt} setDlt={setDlt}></ProductDlt>} 
        </div>
    );
};

export default ManageProducts;