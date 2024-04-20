import React, { useState } from "react";
import { Box, Stack, Popover, Paper, styled } from "@mui/material";
import Theme from "../../../theme";
import MuiIcon from "../../atoms/Icon";
import NotificationBell from "../../../../public/assets/icons/bell.svg";
import AvatarComponent from "../../atoms/Avatar";
import Logo from "../../../../public/assets/images/avatar.svg";
import TypographyComponent from "../../atoms/Typography";
import AccountInfoPopup from "../AccountInfoPopup";

interface HeaderProps {
  username: string;
  id: string;
  onClickLogout?: () => void;
}
const StyledBox = styled(Box)({
  backgroundColor: Theme.palette.structuralColors.white,
  boxShadow: `0px 0.063rem 0.5rem 0px rgba(0, 0, 0, 0.05)`,
  padding: "1rem 2rem",
  alignItems: "center",
  justifyContent: "flex-end",
  display: "flex",
  flexDirection: "row",
  gap: "1.25rem",
  position: "relative",
});

const StyledStack = styled(Stack)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "0.75rem",
  justifyContent: "center",
});

const StyledPaper = styled(Paper)({
  width: "14.375rem",
});

const StyledAvatar = styled(AvatarComponent)({
  cursor: "pointer",
  width: "1.75rem",
  height: "1.75rem",
});
export const Header = ({ username, id, onClickLogout }: HeaderProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (open) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleLogOut = () => {
    setAnchorEl(null);
    onClickLogout?.();
  };

  return (
    <StyledBox>
      <MuiIcon src={NotificationBell} alt="notification-bell" />

      <StyledStack>
        <StyledAvatar src={Logo} onClick={handleClick} data-testid="avatar" />

        <TypographyComponent
          variant="caption1"
          color={Theme.palette.text.medium}
          text={username}
        />
      </StyledStack>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClick}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <StyledPaper data-testid="popup">
          <AccountInfoPopup
            userName={username}
            id={id}
            handleLogOut={handleLogOut}
          />
        </StyledPaper>
      </Popover>
    </StyledBox>
  );
};
