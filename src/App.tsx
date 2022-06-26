import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Details } from "./pages/Details";
import { Listing } from "./pages/Listing";
import {
  Auth0Provider,
  withAuthenticationRequired,
  WithAuthenticationRequiredOptions,
} from "@auth0/auth0-react";
import {Home} from "./pages/Home";

const ProtectedRoute = ({ component, ...args }: any) => {
  const Component = withAuthenticationRequired(component, args);
  return <Component />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="listing" element={<Listing />} />
          <Route
            path="details"
            element={<ProtectedRoute component={Details} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
