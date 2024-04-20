import React from "react";
import MyText from "../../atoms/Typography";
import { Stack, styled } from "@mui/material";

import Theme from "../../../theme";
import CustomChip from "../../atoms/Chip";
import MuiIcon from "../../atoms/Icon";

interface NavItemProps {
  src?: string;
  alt?: string;
  variant: string;
  text: string;
  label?: string;
  chip?: boolean;
  onClick?: () => void;
  active?: boolean;
  color?: string;
  chipname?: string;
  cursor?: string;
}
const OuterBox = styled(Stack)({
  alignItems: "center",
  width: "auto",
  height: "4vh",
  paddingX: "1vw",
  paddingY: "1.5vh",
  spacing: "1.5vw",
  "&:hover": {
    backgroundColor: Theme.palette.text.low,
    borderRadius: Theme.spacing(1),
  },
  gap: "10px",
  display: "flex",
});

const InnerBox = styled(CustomChip)({
  color: Theme.palette.primary[500],
  backgroundColor: Theme.palette.structuralColors.buttonHover,
});
export const NavItem = (props: NavItemProps) => {
  return (
    <OuterBox
      onClick={props.onClick}
      style={{
        cursor: props.cursor,
      }}
      direction="row"
    >
      <MuiIcon {...props} style={{ height: "auto" }} />
      <MyText
        paddingRight={"1vw"}
        variant={props.variant}
        color={props.color}
        text={props.text}
      />

      {props.chip && <InnerBox label={props.chipname} variant={"filled"} />}
    </OuterBox>
  );
};
