import React from 'react';
import useTools from '../../../Hooks/useTools';
import Loading from '../../../Utilities.js/Loading';
import ManageProductRow from './ManageProductRow';

const ManageProducts = () => {
    const { isLoading, error, data:tools ,refetch}=useTools();
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
          {tools.length}
          <div class="overflow-x-auto w-full">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Id</th>
              <th>Action</th>
             
            </tr>
          </thead>
          <tbody>
            {tools.length && tools.map((tool, index) => (
              <ManageProductRow
                key={tool._id}
                refetch={refetch}
                index={index}
                tool={tool}
              ></ManageProductRow>
            ))}
          </tbody>
        </table>
      </div>  
        </div>
    );
};

export default ManageProducts;