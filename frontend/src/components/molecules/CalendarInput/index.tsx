import React from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import CalendarIcon from "../../../../public/assets/icons/calendar.svg";
import MuiIcon from "../../atoms/Icon";
import { TextFieldStyled } from "../../atoms/InputField";
import theme from "../../../theme";

interface CalendarProps {
  autofocus?: boolean;
  label?: React.ReactNode;
  onChange: (newDate: Date | null) => void;
  value?: string | null;
  textFieldWidth?: string;
  textFieldHeight?: string;
}
const dateTimePaperPropsStyles = {
  sx: {
    ".MuiPickersCalendarHeader-root": {
      display: "flex",
      alignItems: "center",
      justifyItems: "center",
    },
    ".MuiPickersCalendarHeader-root:first-child": {
      order: 0,
      paddingRight: "20px",
      paddingLeft: "20px",
    },
    ".MuiPickersArrowSwitcher-root": {
      display: "inline-flex",
    },
    ".MuiPickersCalendarHeader-label": {
      textAlign: "center",
    },
    ".MuiPickersArrowSwitcher-spacer": {
      width: "220px",
    },
    ".css-31ca4x-MuiPickersFadeTransitionGroup-root": {
      display: "flex",
      position: "absolute",
      paddingLeft: "80px",
    },
    ".css-9reuh9-MuiPickersArrowSwitcher-root": {
      marginLeft: "-2px",
    },
    ".MuiPickersArrowSwitcher-button": {
      paddingRight: "7px",
    },
    '& .MuiPickersDay-root.Mui-selected': {
      backgroundColor:theme.palette.primary.main
    },
    '.css-f1up7p-MuiTypography-root-MuiDayPicker-weekDayLabel': {
      color: theme.palette.text.medium,
      fontSize: "14px",
      fontWeight: "Regular",
      lineHeight: "21px",
    },
  },
};

const calendarIcon = () => (
  <MuiIcon
    src={CalendarIcon}
    alt="dropdown"
    style={{
      display: "block",
      marginTop: "-9px",
    }}
  />
);

export default function Calendar(props: Readonly<CalendarProps>) {
  const currentDate = new Date();
  const maxDate = currentDate;
  const dateString = props.value;
  const defaultYear = 2023;
  const dateObject = new Date(dateString ?? defaultYear);
  const year = dateObject.getFullYear();
  const minDate = currentDate.getFullYear() - year;

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        components={{ OpenPickerIcon: calendarIcon }}
        dayOfWeekFormatter={(day) => `${day.toLocaleUpperCase()}`}
        inputFormat="dd-MM-yyyy"
        className="bg-mainPanel rounded-md"
        PaperProps={dateTimePaperPropsStyles}
        showDaysOutsideCurrentMonth={false}
        maxDate={maxDate}
        value={props.value}
        renderInput={(params: any) => (
          <TextFieldStyled
            {...params}
            error={minDate < 18}
            sx={{
              "& .MuiOutlinedInput-root": {
                ["& fieldset"]: {
                  borderRadius: "8px",
                  height: props.textFieldHeight,
                },
                paddingRight: "20px",
              },
              "width": props.textFieldWidth,
            }}
          />
        )}
        label={props.label}
        PopperProps={{
          placement: "bottom-end",
        }}
        views={["year", "day"]}
        {...props}
        onChange={props.onChange}
      />
    </LocalizationProvider>
  );
}
