import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Utilities.js/Loading';

const Purchase = () => {
    const {_id}=useParams();
    
    const { isLoading, error, data:tool ,refetch} = useQuery('tool', () =>
    fetch(`http://localhost:5000/purchase/${_id}`).then(res =>
      res.json()
    ))
 if(isLoading){
     return <Loading></Loading>
 }
    return (
        <div>
            purchase page {_id}
            <h1>{tool?.name}</h1>
        </div>
    );
};

export default Purchase;