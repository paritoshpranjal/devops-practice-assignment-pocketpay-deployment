import { Box, Stack, styled } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Dropdown } from "../../molecules/Dropdown";
import TypographyComponent from "../../atoms/Typography";
import theme from "../../../theme";
import {
  AV_CONTINUE,
  AV_HEADING,
  AV_LABEL_CATEGORY,
  AV_LABEL_SIZE,
  AV_LABEL_SUBCATEGORY,
  AV_SUBHEADING,
  category,
  sizes,
  subcategoriesMap,
} from "../../../constants";
import MuiButton from "../../atoms/Button";
import { UserBusinessDetailsContext } from "../../../context/UserBusinessDetailsContext";

export interface BusinessActivityProps {
  onClick: () => void;
}
const MainBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "5px",
});

const ContainerBox = styled(Box)({
  width:"100%",
  maxWidth: "32.25rem",
  display: "flex",
  flexDirection: "column",
  marginBottom: "13rem",
});

const TopStyleStack = styled(Stack)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "0.75rem",
});

const EndStyleStack = styled(Stack)({
  display: "flex",
  flexDirection: "column",
  marginTop: "2.55rem",
  gap: "2rem",
});

const ContinueButton = styled(MuiButton)({
  height: "56px",
  width: "135px",
  color: theme.palette.structuralColors.white,
  backgroundColor: theme.palette.primary[500],
  "&:disabled": {
    backgroundColor: theme.palette.primary[100],
    color: theme.palette.structuralColors.white,
  },
  "&:hover": {
    backgroundColor: theme.palette.primary[300],
  },
  borderRadius: "56px",
});
const VerifyAccount = (props: BusinessActivityProps) => {
  
  const { userBusinessDetails, setUserBusinessDetails } = useContext(
    UserBusinessDetailsContext
  );
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    userBusinessDetails.category
  );
  const [subCategory, setSubCategory] = useState(userBusinessDetails.subCategory);
  const [size, setSize] = useState(userBusinessDetails.sizeOfBusiness);
  const [buttonDisable, setButtonDisable] = useState(true);

  useEffect(() => {
    if (selectedCategory && subCategory && size) {
      setButtonDisable(false);
      setUserBusinessDetails((prev) => ({
        ...prev,
        category: selectedCategory,
        subCategory: subCategory,
        sizeOfBusiness: size
      }));
    } else {
      setButtonDisable(true);
    }
  }, [selectedCategory, subCategory, size, setUserBusinessDetails]);
  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    setSubCategory("");
  };

  const handleSearch = (value: string) => {
    setSubCategory(value);
  };

  const handleSize = (value: string) => {
    setSize(value);
  };

  const subcategories = selectedCategory
    ? subcategoriesMap[selectedCategory]
    : [];

  return (
    <MainBox>
      <ContainerBox>
        <TopStyleStack>
          <TypographyComponent
            variant="h1"
            color={theme.palette.text.high}
            text={AV_HEADING}
          />
          <TypographyComponent
            variant="body3"
            color={theme.palette.text.medium}
            text={AV_SUBHEADING}
          />
        </TopStyleStack>
        <Box>
          <EndStyleStack>
            <Dropdown
              value={selectedCategory ?? ""}
              onSelectValue={handleCategoryChange}
              placeholder={AV_LABEL_CATEGORY}
              label={AV_LABEL_CATEGORY}
              items={category}
            />
            <Dropdown
              value={subCategory}
              onSelectValue={handleSearch}
              placeholder={AV_LABEL_SUBCATEGORY}
              label={AV_LABEL_SUBCATEGORY}
              items={subcategories}
            />
            <Dropdown
              value={size}
              onSelectValue={handleSize}
              placeholder={AV_LABEL_SIZE}
              label={AV_LABEL_SIZE}
              items={sizes}
            />
          </EndStyleStack>
        </Box>
      </ContainerBox>
      <Stack marginLeft={"32.25rem"}>
        <ContinueButton
          onClick={props.onClick}
          disabled={buttonDisable}
          text={<TypographyComponent variant="body2" text={AV_CONTINUE} />}
          variant={"contained"}
        />
      </Stack>
    </MainBox>
  );
};
export default VerifyAccount;
