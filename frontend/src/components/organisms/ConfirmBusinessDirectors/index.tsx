import React, { useContext, useState } from "react";
import { Box, Stack, TextField } from "@mui/material";
import TypographyComponent from "../../atoms/Typography";
import Calendar from "../../molecules/CalendarInput";
import { Dropdown } from "../../molecules/Dropdown";
import styled from "@emotion/styled";
import MuiButton from "../../atoms/Button";
import PlusIcon from "../../../../public/assets/icons/plus.svg";
import CloseIcon from "../../../../public/assets/icons/close.svg";
import DisableIcon from "../../../../public/assets/icons/Glyph.svg";
import MuiIcon from "../../atoms/Icon";
import {
  CONTINUE,
  ConfirmDirectors,
  countriesDropdownList,
} from "../../../constants";
import { TransactionContext } from "../../../context/TransactionContext";
import theme from "../../../theme";

interface ConfirmBusinessProps {
  isDirectors?: boolean;
  handleContinue?: () => void;
}

const StyledButton = styled(MuiButton)({
  width: "135px",
  height: "56px",
  padding: "16px 30px",
  borderRadius: "56px",
});

const OverFlowStyles = styled(Stack)({
  gap: "32px",
  maxHeight: "521px",
  overflowY: "auto",
  ["&::-webkit-scrollbar"]: {
    display: "none",
  },
});
export const TextFieldStyled = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      border: `1px solid ${theme.palette.otherColors.stroke2}`,
    },
    "&.Mui-focused fieldset": {
      border: `1px solid ${theme.palette.otherColors.stroke2}`,
      borderBottomColor: theme.palette.primary[500],
    },
    "color": theme.palette.text.high,
    "fontSize": theme.typography.body2.fontSize,
    "borderRadius": "8px",
  },

  ".MuiInputLabel-root": {
    fontSize: theme.typography.body2.fontSize,
    color: theme.palette.text.lowemphasis,
  },
  "& .Mui-focused.MuiInputLabel-root": {
    color: theme.palette.primary[500],
  },
  "& fieldset": {
    border: `1px solid ${theme.palette.otherColors.stroke2}`,
  },
  "& .Mui-error .MuiOutlinedInput-notchedOutline": {
    borderColor: `red !important`,
  },
  "& .Mui-error .MuiInputLabel-root": {
    color: "red !important",
  },
});
export type BusinessFields = {
  firstName: string;
  lastName: string;
  dateOfBirth: null | string;
  countryOfResidence: string;
}[];

const ConfirmBusinessDirectors = ({
  isDirectors,
  ...props
}: ConfirmBusinessProps) => {
  const { transaction, setTransaction } = useContext(TransactionContext);
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
  });
  const [owners, setOwners] = useState<BusinessFields>(
    transaction.stackholders
  );

  const [directors, setDirectors] = useState<BusinessFields>(
    transaction.directors
  );

  const handleAddDirector = () => {
    setDirectors((prevDirectors) => [
      ...prevDirectors,
      {
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        countryOfResidence: "",
      },
    ]);
  };

  const handleRemoveDirector = (index: number) => {
    const updatedDirectors = [...directors];
    updatedDirectors.splice(index, 1);
    setDirectors(updatedDirectors);
  };

  const handleFieldChange = (
    index: number,
    field: keyof (typeof directors)[0] | keyof (typeof owners)[0],
    value: string
  ) => {
    if (isDirectors) {
      const updatedDirectors = [...directors];
      updatedDirectors[index][field] = value;
      setDirectors(updatedDirectors);
    } else {
      const updatedOwners = [...owners];
      updatedOwners[index][field] = value;
      setOwners(updatedOwners);
    }
    if (field === "firstName") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        firstName: value.trim() === "",
      }));
    }
    if (field === "lastName") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        lastName: value.trim() === "",
      }));
    }
  };
  const People = isDirectors ? directors : owners;
  const handleContinue = () => {
    if (isDirectors) {
      setTransaction((prev) => ({
        ...prev,
        directors: directors,
      }));
    } else {
      setTransaction((prev) => ({
        ...prev,
        stackholders: owners,
      }));
    }
    props.handleContinue?.();
  };
  return (
    <Stack>
      <OverFlowStyles>
        <Stack gap={"32px"} maxWidth={"516px"}>
          <Stack gap={"12px"}>
            <TypographyComponent
              text={
                isDirectors
                  ? ConfirmDirectors.MAINTEXT1
                  : ConfirmDirectors.MAINTEXT2
              }
              variant={"h1"}
              color={theme.palette.text.high}
            />
            <TypographyComponent
              text={
                isDirectors
                  ? ConfirmDirectors.SUBTEXT1
                  : ConfirmDirectors.SUBTEXT2
              }
              variant={"body3"}
              color={theme.palette.text.medium}
            />
          </Stack>
          {People.map((person, index) => (
            <Stack gap={"16px"} key={person.countryOfResidence}>
              <Stack
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <TypographyComponent
                  variant={"body3"}
                  text={`${
                    isDirectors
                      ? ConfirmDirectors.DIRECTOR
                      : ConfirmDirectors.SHAREHOLDER
                  } ${index + 1}`}
                  color={theme.palette.text.high}
                />

                <Box
                  data-testid="close-icon"
                  onClick={() => {
                    if (People.length > 1) {
                      handleRemoveDirector(index);
                    }
                  }}
                >
                  <MuiIcon
                    src={
                      index > 0 || People.length > 1 ? CloseIcon : DisableIcon
                    }
                    alt="Close Icon"
                    style={{ cursor: "pointer" }}
                  />
                </Box>
              </Stack>
              <TextFieldStyled
                label={ConfirmDirectors.FIRSTNAME}
                value={person.firstName}
                onChange={(e) =>
                  handleFieldChange(index, "firstName", e.target.value)
                }
                helperText={
                  errors.firstName ? ConfirmDirectors.FIRSTNAMEERR : ""
                }
                error={errors.firstName}
              />
              <TextFieldStyled
                label={ConfirmDirectors.LASTNAME}
                value={person.lastName}
                onChange={(e) =>
                  handleFieldChange(index, "lastName", e.target.value)
                }
                helperText={errors.lastName ? ConfirmDirectors.LASTNAMEERR : ""}
                error={errors.lastName}
              />
              <Calendar
                label={
                  <TypographyComponent
                    text={ConfirmDirectors.DATE_OF_BIRTH}
                    variant={"body2"}
                    color={theme.palette.text.lowemphasis}
                  />
                }
                value={person.dateOfBirth}
                onChange={(date: any) =>
                  handleFieldChange(index, "dateOfBirth", date)
                }
                textFieldHeight="60px"
                textFieldWidth="516px"
              />
              <Dropdown
                value={person.countryOfResidence}
                onSelectValue={(value) =>
                  handleFieldChange(index, "countryOfResidence", value)
                }
                label={ConfirmDirectors.DROPDOWN}
                countries={countriesDropdownList}
                placeholder={ConfirmDirectors.DROPDOWN}
              />
            </Stack>
          ))}
          <MuiButton
            variant="text"
            data-testid="add-button"
            text={
              <TypographyComponent
                text={`${ConfirmDirectors.ADD_ANOTHER} ${
                  isDirectors
                    ? ConfirmDirectors.Director
                    : ConfirmDirectors.Owner
                }`}
                variant={"body3"}
                color={theme.palette.primary[500]}
              />
            }
            style={{ width: "207px" }}
            startIcon={<MuiIcon src={PlusIcon} alt="Plus Icon" />}
            onClick={handleAddDirector}
          />
        </Stack>
      </OverFlowStyles>
      <Stack marginLeft={"517px"}>
        <StyledButton
          variant="contained"
          text={
            <TypographyComponent
              text={CONTINUE}
              variant={"body2"}
              color={theme.palette.structuralColors.white}
            />
          }
          onClick={handleContinue}
        />
      </Stack>
    </Stack>
  );
};
export default ConfirmBusinessDirectors;
