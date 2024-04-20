import React, { StrictMode } from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import { TransactionContextProvider } from "./context/TransactionContext";
import { UserBusinessDetailsContextProvider } from "./context/UserBusinessDetailsContext";
import { SignUpContextProvider } from "./context/CountryContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN as string}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID as string}
      authorizationParams={{
        redirect_uri: window.location.origin+"/signup-details",
      }}
    >
      <TransactionContextProvider>
        <SignUpContextProvider>
          <UserBusinessDetailsContextProvider>
            <App />
          </UserBusinessDetailsContextProvider>
        </SignUpContextProvider>
      </TransactionContextProvider>
    </Auth0Provider>
  </StrictMode>
);
