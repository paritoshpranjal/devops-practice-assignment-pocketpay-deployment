import { Stack, styled } from "@mui/material";
import { MainTemplate } from "../../components/templates/MainTemplate";
import React from "react";
import Register from "../../components/organisms/Register";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const OuterLayout = styled(Stack)({
  width: "516px",
});

const SignUpPage = () => {
  const { loginWithRedirect } = useAuth0();
  const navigate = useNavigate();

  const handleOnClickLogIn = () => {
    navigate("/login");
  }
  const handleOnClickSignUp = () => {
    navigate("/signup-details");
  }
  return (
    <MainTemplate>
      <OuterLayout>
        <Register
          onClickLogIn={handleOnClickLogIn}
          onClickSignUp={handleOnClickSignUp}
          onClickGoogleSignUp={() => {
            loginWithRedirect({
              authorizationParams: {
                connection: "google-oauth2",
              },
            });
          }}
        />
      </OuterLayout>
    </MainTemplate>
  );
};
export default SignUpPage;
