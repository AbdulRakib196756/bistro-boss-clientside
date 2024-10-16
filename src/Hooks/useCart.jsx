import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useaxios";
import useAuth from "./useauth";

const useCart = () => {
  const axiossecure = useAxiosSecure();
  const { user } = useAuth();

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axiossecure.get(`/cart?email=${user?.email}`);
      return res.data;
    },
  });
  return [cart, refetch];
};

export default useCart;
