import React from 'react';
import { useQuery } from 'react-query';

const useUserDetails = (email) => {
    const {
        isLoading,
        error,
        data: users,
        refetch,
      } = useQuery("tool", () =>
        fetch(`http://localhost:5000/user?email=${email}`).then((res) =>
          res.json()
        )
      );
    return  {
        isLoading,
        error,
        data: users,
        refetch,
      } 
};

export default useUserDetails;