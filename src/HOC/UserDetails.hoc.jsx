import React from "react";
import { Route } from "react-router-dom";

// Layout
import UserLayout from "../layouts/UserLayout.layout.jsx";

function UserDetailshoc({ component: Component, ...rest }) {
  return (
    <>
      <Route
        {...rest}
        component={(props) => (
          <UserLayout {...props}>
            <Component {...props} />
          </UserLayout>
        )}
      />
    </>
  );
}

export default UserDetailshoc;