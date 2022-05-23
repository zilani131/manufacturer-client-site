import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Utilities.js/Loading';
import ToolCard from './ToolCard';

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
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8 mt-6'>
        
            {tools.map(tool=><ToolCard key={tool._id} tool={tool}></ToolCard>)}
        </div>
    );
};

export default Tools;