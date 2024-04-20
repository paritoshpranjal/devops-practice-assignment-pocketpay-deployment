import React from "react";
import MessageImg from "../../../../public/assets/icons/message.svg";
import LinkImg from "../../../../public/assets/icons/link.svg";
import ShareImage from "../../../../public/assets/icons/shareImage.svg";
import { Box, Stack } from "@mui/material";
import styled from "@emotion/styled";
import MuiIcon from "../../atoms/Icon";
import theme from "../../../theme";
import TypographyComponent from "../../atoms/Typography";
import MuiButton from "../../atoms/Button";
import {
  SHARE_TRACKING_LINK,
  SHARE_TRACKING_LINK_VALUES,
  SHARE_LINK_ABOVE,
} from "../../../constants";

interface ShareTrackingProps {
  handleClick?: () => void;
}
const StyledStack = styled(Stack)({
  height: "524px",
  width: "548px",
  borderRadius: "16px",
  backgroundColor: `${theme.palette.structuralColors.white}`,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  boxShadow: `4px 4px 28px rgba(45, 45, 47, 0.1)`,
});

const CircularBox = styled(Box)({
  border: `1px solid ${theme.palette.primary[500]}`,
  borderRadius: "50%",
  height: "60px",
  width: "60px",
  boxSizing: "border-box",
  marginBottom: "10px",
  backgroundColor: "white",
});
const IconBox = styled(Box)({
  width: "175px",
  height: "126px",
});
const InnerBox = styled(Box)({
  margin: "45px 0 40px",
});

const StyledInnerStack = styled(Stack)({
  margin: "40px 0",
  width: "160px",
  height: "96px",
  boxSizing: "border-box",
});

const ShareTrackingModal = ({ handleClick }: ShareTrackingProps) => {
  return (
    <div>
      <StyledStack>
        <InnerBox>
          <TypographyComponent
            variant="body1"
            color={`${theme.palette.text.high}`}
            text={SHARE_TRACKING_LINK}
          />
        </InnerBox>

        <IconBox>
          <MuiIcon src={ShareImage} alt="share" />
        </IconBox>

        <StyledInnerStack
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
        >
          {SHARE_TRACKING_LINK_VALUES.map((item) => {
            return (
              <Stack justifyContent="center" alignItems="center" key={item.id}>
                <CircularBox
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <MuiButton
                    variant={"text"}
                    onClick={handleClick}
                    text={
                      <MuiIcon
                        src={item.id === 1 ? MessageImg : LinkImg}
                        alt={item.alt}
                      />
                    }
                  />
                </CircularBox>
                <TypographyComponent
                  color={theme.palette.primary[500]}
                  variant="body3"
                  text={item.label}
                />
              </Stack>
            );
          })}
        </StyledInnerStack>
        <TypographyComponent
          variant="body3"
          color={`${theme.palette.text.medium}`}
          text={SHARE_LINK_ABOVE}
        />
      </StyledStack>
    </div>
  );
};

export default ShareTrackingModal;
