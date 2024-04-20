import { Stack } from "@mui/material";
import React, { useState } from "react";
import TypographyComponent from "../../atoms/Typography";
import RadioIconText from "../../molecules/RadioIconText";
import theme from "../../../theme";
import transfertype from "../../../../public/assets/icons/pillar.svg";
import card from "../../../../public/assets/icons/card.svg";
import styled from "@emotion/styled";

export interface PaymentOptionsProps {
  onRadioChange?: (value: string) => void;
}

const TransferType = (props: PaymentOptionsProps) => {
  const [selectedRadioValue, setSelectedRadioValue] = useState("bank");

  const radioChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRadioValue(event.target.value);
    props.onRadioChange?.(event.target.value);
  };

  const OuterBox = styled(Stack)({
    width: "29.625rem",
    gap: "4vh",
    height: "40.625rem",   
  });

  const InnerBox = styled(Stack)({
    gap: "2vh",
  });
  const DownBox = styled(Stack)({
    gap: "3vh",
    marginTop: "20px",
  });
  const UpBox = styled(Stack)({
    gap: "5vh",
  });
  return (
    <OuterBox data-testid="PaymentOptions">
      <Stack>
        <TypographyComponent
          variant={"h1"}
          color={theme.palette.text.high}
          text={"Choose your transfer type"}
        />
      </Stack>
      <InnerBox>
        <Stack spacing={"3vh"}>
          <TypographyComponent
            variant={"caption1"}
            color={theme.palette.text.medium}
            text={" Fast and easy transfer"}
          />
          <UpBox>
            <RadioIconText
              backgroundColor={theme.palette.structuralColors.white}
              radioId="debitcard-pay"
              icon={card}
              cardContent={"Debit Card"}
              cardVariant={"body3"}
              detailVariant={"caption1"}
              iconColor={theme.palette.structuralColors.blue}
              flexDirection={"row"}
              color={theme.palette.text.medium}
              singleText={true}
              value="debit"
              isSelected={selectedRadioValue === "debit"}
              radiochange={radioChangeHandler}
              radioSize="small"
              multiText={
                <Stack>
                  <TypographyComponent
                    variant={"caption1"}
                    color={theme.palette.text.medium}
                    text={"Send from your Visa or Mastercard."}
                  />
                  <TypographyComponent
                    variant={"caption1"}
                    color={theme.palette.text.medium}
                    text={" Should arrive by January 28th."}
                  />
                </Stack>
              }
            />

            <RadioIconText
              backgroundColor={theme.palette.structuralColors.white}
              icon={card}
              isSelected={false}
              radioSize="small"
              cardContent={"Credit Card"}
              iconColor={theme.palette.structuralColors.blue}
              cardVariant={"body3"}
              flexDirection={"row"}
              detailVariant={"caption1"}
              singleText={true}
              color={theme.palette.text.medium}
              multiText={
                <Stack>
                  <TypographyComponent
                    variant={"caption1"}
                    color={theme.palette.text.medium}
                    text={" Send from your Visa or Mastercard."}
                  />
                  <TypographyComponent
                    variant={"caption1"}
                    color={theme.palette.text.medium}
                    text={"Should arrive by January 28th."}
                  />
                </Stack>
              }
            />
          </UpBox>
        </Stack>
        <DownBox>
          <TypographyComponent
            variant={"caption1"}
            color={theme.palette.text.medium}
            text={"Low cost transfer"}
          />
          <RadioIconText
            radioId="lloydsBank-pay"
            cardContent={"Transfer from your bank account"}
            backgroundColor={theme.palette.structuralColors.white}
            flexDirection={"row"}
            icon={transfertype}
            cardVariant={"body3"}
            detailVariant={"caption1"}
            iconColor={theme.palette.structuralColors.blue}
            value="bank"
            color={theme.palette.text.medium}
            isSelected={selectedRadioValue === "bank"}
            radiochange={radioChangeHandler}
            singleText={true}
            radioSize="small"
            multiText={
              <Stack>
                <TypographyComponent
                  variant={"caption1"}
                  color={theme.palette.text.medium}
                  text={"Transfer the money using bank account."}
                />
                <TypographyComponent
                  variant={"caption1"}
                  color={theme.palette.text.medium}
                  text={"Should arrive by January 28th."}
                />
              </Stack>
            }
          />
        </DownBox>
        <DownBox>
          <TypographyComponent
            variant={"caption1"}
            color={theme.palette.text.medium}
            text={"Account transfer"}
          />

          <RadioIconText
            iconColor={theme.palette.structuralColors.blue}
            backgroundColor={theme.palette.structuralColors.white}
            icon={transfertype}
            isSelected={false}
            cardVariant={"body3"}
            singleText={true}
            cardContent={" SWIFT Transfer"}
            detailVariant={"caption1"}
            color={theme.palette.text.medium}
            flexDirection={"row"}
            radioSize="small"
            multiText={
              <Stack>
                <TypographyComponent
                  variant={"caption1"}
                  color={theme.palette.text.medium}
                  text={"Send GBP from your bank account outside the UK."}
                />
                <TypographyComponent
                  variant={"caption1"}
                  color={theme.palette.text.medium}
                  text={"Should arrive by January 28th."}
                />
              </Stack>
            }
          />
        </DownBox>
      </InnerBox>
    </OuterBox>
  );
};

export default TransferType;
