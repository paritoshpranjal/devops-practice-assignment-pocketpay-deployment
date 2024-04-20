import React from "react";
import { Box, Divider, Stack, styled } from "@mui/material";
import TypographyComponent from "../../atoms/Typography";
import Theme from "../../../theme";
import IconTypograpy from "../../molecules/TypographyWithIcon";
import { LOGOUTITEMS } from "../../../constants";

interface AccountInfoProps {
  userName: string;
  id: string;
  handleLogOut?: () => void;
}
const StyledBox = styled(Box)({
  cursor: "pointer",
  padding: "16px 18px",
});
const StyledStack = styled(Stack)({
  "& > *:hover": {
    backgroundColor: Theme.palette.text.low,
  },
});
const OuterBoxStyles = styled(Box)({
  maxWidth: "230px",
  minHeight: "26.5vh",
  paddingTop: Theme.spacing(4),
  paddingBottom: Theme.spacing(3.25),
  backgroundColor: Theme.palette.structuralColors.white,
  borderRadius: "0.5rem",
  boxShadow: `0px 1px 8px ${Theme.palette.text.low}`,
});

const AccountInfoPopup = ({ userName, id, handleLogOut }: AccountInfoProps) => {
  return (
    <OuterBoxStyles data-testid="pop-up">
      <Stack paddingLeft={Theme.spacing(5)} paddingBottom={Theme.spacing(2)}>
        <TypographyComponent
          variant={"body2"}
          color={Theme.palette.text.high}
          text={userName}
        />
        <TypographyComponent
          variant={"caption1"}
          color={Theme.palette.text.lowemphasis}
          text={id}
        />
      </Stack>
      <Divider />
      <StyledStack>
        {LOGOUTITEMS.map((item, index) => {
          if (index !== 3) {
            return (
              <Stack key={item.src} sx={{ padding: "16px 18px" }}>
                <IconTypograpy
                  key={item.src}
                  icon={item.src}
                  content={item.text}
                  color={Theme.palette.text.high}
                  variant="body2"
                />
              </Stack>
            );
          } else {
            return (
              <StyledBox key={item.src} onClick={handleLogOut}>
                <IconTypograpy
                  key={item.text}
                  icon={item.src}
                  content={item.text}
                  color={Theme.palette.text.high}
                  variant="body2"
                />
              </StyledBox>
            );
          }
        })}
      </StyledStack>
    </OuterBoxStyles>
  );
};
export default AccountInfoPopup;
