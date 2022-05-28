import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Utilities.js/Loading';
import MakeAdminRow from './MakeAdminRow';

const MakeAdmin = () => {
    const {
        isLoading,
        error,
        data: allusers,
        refetch,
      } = useQuery("alluser", () =>
        fetch(`http://localhost:5000/alluser`).then((res) => res.json()))
        if(isLoading){
            return <Loading></Loading>
        }
    return (
        <div>
            <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
         
            </tr>
          </thead>
          <tbody>
            {allusers.map((user, index) => (
          <MakeAdminRow     key={user._id}
          refetch={refetch}
          index={index}
          user={user}>

          </MakeAdminRow>
            ))}
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default MakeAdmin;