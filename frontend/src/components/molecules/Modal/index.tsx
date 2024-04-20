import { Modal, styled } from "@mui/material";
import React from "react";

interface MuiModalProps {
  element: React.ReactElement;
  open: boolean;
  onClose?: () => void;
}

const StyledModal = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "12%",
  height: "auto",
});

export const MuiModal = ({ element, open, onClose }: MuiModalProps) => {
  return (
    <StyledModal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {element}
    </StyledModal>
  );
};
