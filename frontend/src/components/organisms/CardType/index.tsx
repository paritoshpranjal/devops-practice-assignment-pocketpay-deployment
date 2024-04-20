import { Box, Stack, styled } from "@mui/material";

import React, { useContext, useState } from "react";
import TabsComponent from "../../molecules/MuiTabs";
import SavedCard from "../../molecules/SavedCard";
import TypographyComponent from "../../atoms/Typography";
import { CardTabs } from "../../../constants";
import { TransactionContext } from "../../../context/TransactionContext";
import { BankCardInterface } from "../../utils/interfaces/Card";
interface DebitCardType {
  cards: BankCardInterface[];
}
const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "29.625rem",
  height: "56.25rem",
});
const HeaderBox = styled(TabsComponent)({
  width: "474px",
  height: "53px",
});

const InnerBox = styled(Stack)({
  gap: "13vh",
  marginTop: "30px",
});
const UpperBox = styled(TypographyComponent)({
  marginBottom: "30px",
});

const CardType = ({ cards }: DebitCardType) => {
  const { transaction, setTransaction } = useContext(TransactionContext);
  const [selectvalue, setSelectvalue] = useState(transaction.paymentId);

  const handleSavedCardChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const cardId = Number(event.target.value);
    setSelectvalue(cardId);
    setTransaction((prev) => ({
      ...prev,
      cardId: cardId,
    }));
  };

  return (
    <StyledBox data-testid="outer-box">
      <UpperBox text={"Pay with your card"} variant={"h1"} />

      <HeaderBox tabGap={true} tabs={CardTabs} tabsGap={"6rem"} />

      <InnerBox>
        {cards.map((card) => (
          <SavedCard
            cardName={card.name}
            lastFourDigits={card.cardNumber}
            expiryDate={card.expiryDate}
            checked={selectvalue === card.id}
            onChange={handleSavedCardChange}
            value={card.id.toString()}
            key={card.id}
          />
        ))}
      </InnerBox>
    </StyledBox>
  );
};

export default CardType;
