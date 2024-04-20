import Stack from "@mui/material/Stack";
import React, { useContext, useState } from "react";
import TypographyComponent from "../../atoms/Typography";
import Theme from "../../../theme";
import Search from "../../atoms/SearchBar";
import { SearchBussiness, Trade, Options } from "../../../constants";
import styled from "@emotion/styled";
import { UserBusinessDetailsContext } from "../../../context/UserBusinessDetailsContext";

interface BusinessSearchProps {
  handleDropdownClick: (value: string) => void;
}
const BusinessSearch = ({ handleDropdownClick }: BusinessSearchProps) => {
  const { setUserBusinessDetails } = useContext(UserBusinessDetailsContext);

  const [newValue, setNewValue] = useState("");
  const handleSearchChange = (value: string) => {
    setNewValue(value);
    setUserBusinessDetails((prev) => ({
      ...prev,
      businessName: value,
    }));
  };

  const StyledBox = styled(Stack)({
    width: "32.188rem",
    height: "65vh",
    gap: "10px",
  });
  const InnerBox = styled(Stack)({
    marginTop: "30px",
  });
  return (
    <StyledBox>
      <TypographyComponent variant={"h1"} text={SearchBussiness} />
      <TypographyComponent
        color={Theme.palette.text.medium}
        variant={"body3"}
        text={Trade}
      />
      <InnerBox>
        <Search
          options={Options}
          placeholder={"Select your Business"}
          onChange={handleSearchChange}
          value={newValue}
          onValueClick={handleDropdownClick}
        />
      </InnerBox>
    </StyledBox>
  );
};

export default BusinessSearch;
