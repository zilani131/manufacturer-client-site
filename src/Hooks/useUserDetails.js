import React from "react";
import { useQuery } from "react-query";

const useUserDetails = (email) => {
  const {   isLoading1, error1,data: users,refetch1} = useQuery("userdata", () =>
    fetch(`http://localhost:5000/userdetails/${email}`).then(res =>
      res.json()
    )
  );
  return {
    isLoading1,
    error1,
    data: users,
    refetch1,
  };
};

export default useUserDetails;
