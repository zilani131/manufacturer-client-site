import React from 'react';
import useUserDetails from '../../../Hooks/useUserDetails';

const MakeAdminRow = ({index,refetch,user}) => {
    const {name,email,role}=user;
    // const {
    //   isLoading1,
    //   error1,
    //   data: users,
    //   refetch1,
    // }=useUserDetails(email)
    const handleAdmin=event=>{
        event.preventDefault();
        const data={role:"Admin"};
          fetch(`https://cryptic-dawn-85784.herokuapp.com/alluser?email=${email}`,{
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          })
            .then((res) => res.json())
            .then((data) => {
             console.log(data)
             refetch();
          })

        refetch()
    }
    return (
        <tr>
        <th>{index+1}</th>
        <td>{name}</td>
        <td>{email}</td>
       { role!=="Admin"?<td>User</td>:<td>{role}</td>}
        <td><button onClick={handleAdmin} className="btn btn-success">Make Admin</button></td>

      </tr>
    );
};

export default MakeAdminRow;