import { useState, useEffect, useRef, useContext } from "react";
import {
  loadCaptchaEnginge,
  validateCaptcha,
  LoadCanvasTemplate,
} from "react-simple-captcha";
import { Authcontext } from "../../../Provider/Authprovider";
import { Link, replace, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const { signin } = useContext(Authcontext);
  const captcharef = useRef(null);
  const [captchavalid, setcaptchavalid] = useState(false);
  const handlecaptcha = () => {
    const captchavalue = captcharef.current.value;
    if (validateCaptcha(captchavalue)) {
      setcaptchavalid(true);
    } else {
      setcaptchavalid(false);
    }
  };
  const handlelogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signin(email, password)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const message = error.message;
        console.log(message);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 lg:w-1/2 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handlelogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                type="text"
                ref={captcharef}
                name="captcha"
                placeholder="write here..."
                className="input input-bordered"
                required
              />
              <button
                className="btn btn-sm btn-outline mt-2"
                onClick={handlecaptcha}
              >
                submit
              </button>
            </div>
            <div className="form-control mt-3">
              <input
                className="btn btn-primary"
                type="submit"
                disabled={!captchavalid}
                value="Login"
              />
            </div>
            <p>
              creat new account{" "}
              <Link className="text-blue-600" to="/signup">
                signUp
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
