import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Authcontext } from "../../Provider/Authprovider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { createUser, updateUser } = useContext(Authcontext);
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggeduser = result.user;
      console.log(loggeduser);

      updateUser(data.name)
        .then(
          () => console.log("user profile updated"),
          reset(),
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "user created successfully",
            showConfirmButton: false,
            timer: 1500,
          }),
          navigate("/")
        )
        .catch((error) => {
          console.log(error);
        });
    });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">signUp now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 lg:w-1/2 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
              {errors.name && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", { required: true })}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              {errors.password && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            <div className="form-control mt-3">
              <input className="btn btn-primary" type="submit" value="signUp" />
            </div>
            <p>
              already have an account{" "}
              <Link className="text-blue-600" to="/login">
                login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
