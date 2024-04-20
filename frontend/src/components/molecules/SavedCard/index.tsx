import { Box } from "@mui/material";
import React, { useState } from "react";
import CardIcon from "../../../../public/assets/icons/creditCard.svg";
import Theme from "../../../theme";
import { CustomRadio } from "../../atoms/RadioButton";
import { InputField } from "../../atoms/InputField";
import MuiIcon from "../../atoms/Icon";
import { styled } from "@mui/system";
import TypographyComponent from "../../atoms/Typography";
import { cvvRegex } from "../../../constants";

interface SavedCardProps {
  cardName: string;
  lastFourDigits: string;
  expiryDate: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  
}

const Layout = styled(Box)({
  width: "34.4vw",
  height: "10vh",
  display: "flex",
  gap: "2.4vw",
  alignItems: "flex-start",
});

const Card = styled(Box)({
  paddingTop: "6px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
});

const RadioStyles = styled(CustomRadio)({
  color: Theme.palette.grey[200],
  ["&.Mui-checked"]: {
    color: Theme.palette.primary[500],
  },
});

const SavedCard = (props: SavedCardProps) => {
  const cardDetails = [
    { text: "Last four digit", color: Theme.palette.text.medium },
    { text: props.lastFourDigits.toString(), color: Theme.palette.text.high },
    { text: "Expiry date", color: Theme.palette.text.medium },
    { text: props.expiryDate, color: Theme.palette.text.high },
  ];
  const [cvv, setCvv] = useState<string>("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCvv(event.target.value);
  };
  const validateCVV = (value: string) => {
    if (cvv === "") return false;
    return !cvvRegex.test(value);
  };
  return (
    <Layout>
      <RadioStyles
        checked={props.checked}
        onChange={props.onChange}
        value={props.value}
        variant="primary"
      />
      <Card>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "3px" }}>
          <TypographyComponent
            color={`${Theme.palette.text.high}`}
            text={props.cardName}
            variant="body2"
          />
          <Box sx={{ display: "flex", gap: "3px" }}>
            {cardDetails.map((typo) => (
              <TypographyComponent
                key={typo.text}
                color={`${typo.color}`}
                text={typo.text}
                variant="body2"
              />
            ))}
          </Box>
        </Box>
        <InputField
          placeholder="CVV / CVC"
          endAdornment={<MuiIcon src={CardIcon} alt={"card"} />}
          style={{ height: "60px", width: "308px" }}
          inputMode="numeric"
          error={validateCVV(cvv)}
          onChange={handleChange}
          value={cvv}
        />
      </Card>
    </Layout>
  );
};

export default SavedCard;
