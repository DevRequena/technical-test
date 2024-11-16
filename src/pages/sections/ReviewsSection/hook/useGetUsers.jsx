import { useQuery } from '@tanstack/react-query';
import api from '../../../../utils/api';

const useGetUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await api.users.getUsers()
      return response.data;
    }
  });
};

export default useGetUsers;