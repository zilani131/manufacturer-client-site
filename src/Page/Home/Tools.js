import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Utilities/Loading';

const Tools = () => {
    const { isLoading, error, data:tools ,refetch} = useQuery('tools', () =>
    fetch(`http://localhost:5000/tools`).then(res =>
      res.json()
    ))
    if(isLoading)
    {
        return <Loading></Loading>
    }
    return (
        <div>
            {tools?.length}
        </div>
    );
};

export default Tools;