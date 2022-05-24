import React from 'react';

const MakeAdminRow = ({index,refetch,user}) => {
    const {name,email,role}=user;
    const handleAdmin=event=>{
        event.preventDefault();
        const data={role:"admin"};
          fetch(`http://localhost:5000/alluser?email=${email}`,{
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
        <td>{role}</td>
        <td><button onClick={handleAdmin} class="btn btn-success">Make Admin</button></td>

      </tr>
    );
};

export default MakeAdminRow;