import React, { MouseEventHandler } from "react";
import MuiAvatar, { AvatarProps } from "@mui/material/Avatar";

interface AvatarComponentProps extends AvatarProps {
  src: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const AvatarComponent = ({ src, onClick, ...props }: AvatarComponentProps) => {
  return (
    <MuiAvatar
      alt="Avatar"
      src={src}
      onClick={onClick}
      data-testid="avatar"
      {...props}
    />
  );
};

export default AvatarComponent;
