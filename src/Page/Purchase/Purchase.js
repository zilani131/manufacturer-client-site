import React from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const {_id}=useParams()
    
    return (
        <div>
            purchase page {_id}
        </div>
    );
};

export default Purchase;