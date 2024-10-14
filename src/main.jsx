import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { router } from "./Route/Routes.jsx";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Authprovider from "./Provider/Authprovider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Authprovider>
      <HelmetProvider>
        <div className="max-w-screen-xl mx-auto">
          <RouterProvider router={router} />
        </div>
      </HelmetProvider>
    </Authprovider>
  </StrictMode>
);
