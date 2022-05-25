
import { useQuery } from 'react-query';


const useTools = () => {
    const { isLoading, error, data:tools ,refetch} = useQuery('tools', () =>
    fetch(`http://localhost:5000/tools`).then(res =>
      res.json()
    ))
   
    return { isLoading, error, data:tools ,refetch};
};

export default useTools;