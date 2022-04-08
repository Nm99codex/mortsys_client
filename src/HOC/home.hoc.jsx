import React from "react";
import { Route } from "react-router-dom";

// Layout
import HomeLayout from "../layouts/Homepage.layout.jsx";

function HomeLayoutHoc({ component: Component, ...rest }) {
  return (
    <>
      <Route
        {...rest}
        component={(props) => (
          <HomeLayout {...props}>
            <Component {...props} />
          </HomeLayout>
        )}
      />
    </>
  );
}

export default HomeLayoutHoc;