import React from 'react';
import { useQuery } from 'react-query';

const useUserOrders = (email) => {
    const {
        isLoading,
        error,
        data: users,
        refetch,
      } = useQuery("tool", () =>
        fetch(`https://cryptic-dawn-85784.herokuapp.com/user?email=${email}`).then((res) =>
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

export default useUserOrders;