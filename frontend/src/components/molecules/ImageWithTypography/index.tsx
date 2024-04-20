import React from "react";
import Theme from "../../../theme/index";
import { Stack } from "@mui/material";
import MuiIcon from "../../atoms/Icon/index";
import { styled } from "@mui/system";
import TypographyComponent from "../../atoms/Typography";

interface ImageTypographyProps {
  text?: string;
  src?: string;
}
const StyledTypography = styled(TypographyComponent)({
  width: Theme.spacing(140.5),
  height: Theme.spacing(16),
  textAlign: "center",
});

const ImageTypography = (props: ImageTypographyProps) => {
  return (
    <Stack
      alignItems={"center"}
      spacing={"3vh"}
      width={"30vw"}
      paddingY={"21vh"}
      marginLeft={"30%"}
    >
      <MuiIcon src={props.src} style={{ height: "183px", width: "178px" }} />
      <StyledTypography
        variant="body1"
        color={Theme.palette.text.medium}
        text={props.text}
      />
    </Stack>
  );
};

export default ImageTypography;
