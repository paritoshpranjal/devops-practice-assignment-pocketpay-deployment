import { Stack } from "@mui/material";
import React from "react";
import Theme from "../../../theme";
import styled from "@emotion/styled";

interface DashBoardProps {
  navBar: React.ReactNode;
  header: React.ReactNode;
  body: React.ReactNode;
}
const NavBarStyles = styled(Stack)({
  backgroundColor: Theme.palette.structuralColors.white,
});
const BodyStyles = styled(Stack)({
  backgroundColor: Theme.palette.structuralColors.blue,
  height: "100%",
});
const DashBoard = (props: DashBoardProps) => {
  return (
    <Stack display={"flex"} flexDirection={"row"}>
      <NavBarStyles minWidth={"230px"}>{props.navBar}</NavBarStyles>
      <Stack width={"100vw"}>
        <Stack>{props.header}</Stack>
        <BodyStyles>{props.body}</BodyStyles>
      </Stack>
    </Stack>
  );
};

export default DashBoard;
