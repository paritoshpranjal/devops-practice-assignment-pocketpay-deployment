import { Stack, styled } from "@mui/material";
import { LoginCard } from "../../components/organisms/LoginCard";
import { MainTemplate } from "../../components/templates/MainTemplate";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { ErrorBoundary } from "react-error-boundary";
import { Fallback } from "../../constants";

const OuterBox = styled(Stack)({
  width: "516px",
});

const LoginPage = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <MainTemplate>
        <OuterBox>
          <LoginCard
            handleLogInWithGoogle={() => {
              loginWithRedirect({
                authorizationParams: {
                  connection: "google-oauth2",
                },
              });
            }}
          />
        </OuterBox>
      </MainTemplate>
    </ErrorBoundary>
  );
};
export default LoginPage;
