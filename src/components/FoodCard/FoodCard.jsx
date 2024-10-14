import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useauth";
import Swal from "sweetalert2";
import axios from "axios";
import useAxiosSecure from "../../Hooks/useaxios";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const axiossecure = useAxiosSecure();
  const handleaddtocart = (item) => {
    if (user && user.email) {
      const cartdata = {
        useremail: user.email,
        menuid: _id,
      };

      axiossecure.post("cart/createcart", cartdata).then((res) => {
        console.log(res.data);
        if (res.data._id) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your order add to cart",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    } else {
      Swal.fire({
        title: "Please log in first?",
        text: "You won't be able to add cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">
        ${price}
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleaddtocart(item)}
            className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
