
import { useQuery } from 'react-query';


const useTools = () => {
    const { isLoading, error, data:tools ,refetch} = useQuery('tools', () =>
    fetch(`https://cryptic-dawn-85784.herokuapp.com/tools`).then(res =>
      res.json()
    ))
   
    return { isLoading, error, data:tools ,refetch};
};

export default useTools;