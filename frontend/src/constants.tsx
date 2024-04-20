import PersonLogo from "../public/assets/icons/person.svg";
import DollarLogo from "../public/assets/icons/dollar.svg";
import SuitcaseLogo from "../public/assets/icons/business.svg";
import React from "react";
import Theme from "./theme";
import PERSON from "../public/assets/icons/person.svg";
import SETUP from "../public/assets/icons/setup.svg";
import SEND from "../public/assets/icons/send.svg";
import BUSINESS from "../public/assets/icons/business.svg";
import andoraa from "../public/assets/icons/andoraa.svg";
import uk from "../public/assets/icons/uk.svg";
import austria from "../public/assets/icons/austria.svg";
import india from "../public/assets/icons/india.svg";
import GOOGLE from "../public/assets/icons/google.svg";
import FACEBOOK from "../public/assets/icons/facebook.svg";
import APPLE from "../public/assets/icons/apple.svg";
import gdp from "../public/assets/icons/gbp.svg";
import SBI from "../public/assets/icons/sbi.svg";
import HDFC from "../public/assets/icons/hdfc.svg";
import Hsbc from "../public/assets/icons/hsbc.svg";
import Axis from "../public/assets/icons/axis.svg";
import Lloydsbank from "../public/assets/icons/lyol.svg";
import Other from "../public/assets/icons/bank.svg";
import chevronRight from "../public/assets/icons/chevronright.svg";
import User from "../public/assets/icons/user.svg";
import Settings from "../public/assets/icons/settings.svg";
import Help from "../public/assets/icons/helpcircle.svg";
import Logout from "../public/assets/icons/logout.svg";
import home from "../public/assets/icons/home.svg";
import card from "../public/assets/icons/creditCard.svg";
import person from "../public/assets/icons/person3.svg";
import team from "../public/assets/icons/team.svg";
import account from "../public/assets/icons/account.svg";
import gift from "../public/assets/icons/gift.svg";
import plus from "../public/assets/icons/plus-new.svg";
import TypographyComponent from "./components/atoms/Typography";
import { BankCardInterface } from "./components/utils/interfaces/Card";

export const SETUP_HORIZONTAL_STEPPER_VALUES = [
  "Email",
  "Account type",
  "Country",
  "2-factor-authentication",
  "Password",
];

export const HORIZONTAL_STEPPER_VALUES = [
  "Amount",
  "You",
  "Recipient",
  "Verification",
  "Review",
  "Pay",
];
export const SHARE_TRACKING_LINK = "Share tracking link";
export const SHARE_LINK_ABOVE =
  "Share the link above, and they can securely track this transfer.";
export const EMAIL = "Email";
export const SHARE_TRACKING_LINK_VALUES = [
  { id: 1, label: "Copy", alt: "link-img" },
  { id: 2, label: "Email", alt: "message-img" },
];

export const RECIPEINT_TYPE_VALUES_DATA = [
  {
    id: 1,
    src: SuitcaseLogo,
    alt: "my business logo",
    children: "My Business",
  },
  {
    id: 2,
    src: PersonLogo,
    alt: "person logo",
    children: "Someone else",
  },
  {
    id: 3,
    src: DollarLogo,
    alt: "dollar logo",
    children: "Business or Charity",
  },
];
export const businessOptionList = [
  "Zemoso technologies pvt ltd",
  "Zentech solutions pvt ltd",
  "ZedX Infotech pvt ltd",
  "Zeswe Solutions pvt ltd",
];
export const searchBuisnessPlaceholderText = "Select your business";

export const PurchaseConfirmValues = {
  purchaseSteps: [
    {
      id: 1,
      label:
        "Step 1: Open and confirm the push notification we sent to your mobile.",
    },
    {
      id: 1,
      label:
        "Step 2: Return to this screen and press the button below to finish your purchase.",
    },
  ],
  label2: " to PocketPay using visa card ending ",
  label: "Confirm your purchase",
  completeButton: "Complete",
};

export const AccountCardValues = {
  personalAccount: [
    "Personal account",
    "Send, spend, and receive around the world for less.",
  ],
  businessAccount: [
    "Business account",
    "Do business or freelance work internationally.",
  ],
  sendmoney: [
    "Send Money",
    "Pay an international employee, invoice, or expense",
  ],
  finishAccountSetup: [
    "Finish Account Setup",
    "Get balances in multiple currencies, and take buisness goals",
  ],
};
export const cancelPopUpValues = {
  text1: "Are you sure ?",
  text2: "You want to cancel this transfer",
  ButtonYes: "Yes",
  ButtonNo: "No",
  sendTransferText: "We’ll apply this rate if we receive your money today.",
  ButtonOk: "OK",
};
export const HomeTabs = [{ label: "Updates" }, { label: "Details" }];

export const TransactionStepperValues = [
  {
    leftLable: "Today at 6:43 pm",
    rightLable: "You set up your transfer",
  },
  {
    leftLable: "Today at 6:44 pm",
    rightLable: "We received your GBP",
  },
  {
    leftLable: "Today at 6:50 pm",
    rightLable: "Your money’s being processed",
  },
  {
    leftLable: "Tomorrow at 12:00 am",
    rightLable: "We pay out your EUR",
  },
  {
    leftLable: "Tomorrow at 6:00 am",
    rightLable: "George max recieves your EUR",
  },
];
export const CardTabs = [{ label: "Saved card" }, { label: "New Card" }];
export const cvvRegex = /^\d{3,4}$/;
export const ACCOUNT_TYPE_TITLE =
  "What kind of account would you like to open today?";
export const ACCOUNT_TYPE_SUBTITLE =
  "You can add another account later on, too.";
export const ACCOUNT_TYPE_OPTIONS = [
  {
    src: PERSON,
    title: "Personal account",
    text: "Send, spend, and receive around the world for less.",
  },
  {
    src: BUSINESS,
    title: "Business account",
    text: "Do business or freelance work internationally.",
  },
];
export const SENDING_MONEY_TITLE = "What would you like to do today?";
export const SENDING_MONEY = [
  {
    src: SEND,
    title: "Send Money",
    text: "Pay an international employee, invoice, or expense",
  },
  {
    src: SETUP,
    title: "Finish Account Setup",
    text: "Get balances in multiple currencies, and take buisness goals",
  },
];

export const emailRegex = /^[^\s@]+@(zemosolabs\.com|gmail\.com)$/;

export const countriesDropdownList = [
  {
    icon: andoraa,
    value: "Andorra",
    code: "EUR",
    extraAmount: 1.15,
  },
  {
    icon: uk,
    value: "United Kingdom",
    code: "GRP",
    extraAmount: 0.86,
  },
  {
    icon: austria,
    value: "Austria",
    code: "AUD",
    extraAmount: 13.76,
  },
  {
    icon: india,
    value: "India",
    code: "INR",
    extraAmount: 30.36,
  },
];
export const categories = [
  "Design, marketing or communication",
  "Health, sports or personal care",
  "Real estate or construction",
  "Education or learning",
  "Others",
];
export const Options = [
  "Zemoso technologies pvt ltd",
  "Zentech solutions pvt ltd",
  "ZedX Infotech pvt ltd",
  "Zeswe Solutions pvt ltd",
];
export const SearchBussiness = "Search for your business";
export const Trade =
  "Sole trader, freelancer or not registered with Companies house?";

export const LoginCardValues = {
  heading: "Welcome back",
  emailLabel: "Email",
  emailPlaceholder: "Enter your email",
  emailHelperText: "Enter a valid email",
  passwordLabel: "Password",
  passwordPlaceholder: "Enter your password",
  passwordHelperText:
    "Password must be at least 8 characters long, containing at least one letter, one digit, and one special character (@#$%^&+=)",
  loginButton: "Log in",
  RememberText: "Remember me",
  rememberSupportText: "Trouble logging in?",
  loginHelperText: "Or, Log in with",
  AccountNumberText: "Account number should be 12 digits",
  FirstNameErrorText: "FirstName is required",
  LastNameErrorText: "LastName is required",
  IfscErrorText: "IFSC Code is required",
};

export const socialIcons = [
  { iconSrc: GOOGLE, altText: "google", disabled: false },
  { iconSrc: FACEBOOK, altText: "facebook", disabled: true },
  { iconSrc: APPLE, altText: "apple", disabled: true },
];

export const MOBILE_NUMBER_DROPDOWN = [
  {
    id: 1,
    src: andoraa,
    alt: "Andorra",
    start: "+43",
  },
  {
    id: 2,
    src: gdp,
    alt: "United Kingdom",
    start: "+44",
  },
  {
    id: 3,
    src: india,
    alt: "India",
    start: "+91",
  },
  {
    id: 4,
    src: austria,
    alt: "Austria",
    start: "+36",
  },
];
export const DOWN_ARROW_ALT = "down-arrow";
export const COUNTRY_ICON_ALT = "country-img";
export const MOBILE_LABEL = "Mobile number";
export const VERIFY_YOUR_PHONE_NUMBER = "Verify your phone number with a code";
export const IT_HELPS_US_KEEP = "It helps us keep your account secure.";
export const SUBMIT_BUTTON = "Submit";

export const selectCountryHeading = "Your country of registration";
export const selectCountryLabel = "Country of registration";
export const selectCountryPlaceholder = "Select your country";
export const CONTINUE = "Continue";
export const chooseBankPlaceHolder = "Start typing to search";
export const ChooseYourBank = "Choose your bank";
export const CancleButtonText = "Cancle the transfer";
export const bankOptions = [
  {
    src: SBI,
    name: "State bank of India",
  },
  {
    src: HDFC,
    name: "HDFC",
  },
  {
    src: Hsbc,
    name: "HSBC",
  },
  {
    src: Axis,
    name: "Axis",
  },
  {
    src: Lloydsbank,
    name: "Lloyds",
  },
  {
    src: Other,
    name: "Other bank",
  },
];
export const tradeAddressValue =
  "3217, Central Avenue, 1st cross, 2nd Main Road, Unishire Victory, 2nd Main Rd, Bengaluru, Karnataka  560003";

export const AV_HEADING = "Help us verify your account faster";
export const AV_SUBHEADING =
  "Without this information we can`t verify your account";
export const AV_CONTINUE = "Continue";
export const AV_LABEL_CATEGORY = "Category";
export const AV_LABEL_SUBCATEGORY = "Subcategory";
export const AV_LABEL_SIZE = "Size of your business";

export const category = [
  "Design, marketing or communication",
  "Health, sports or personal care",
  "Education or learning",
  "Others",
  "Real estate or construction",
];

export const subcategoriesMap: {
  [key: string]: string[];
} = {
  "Design, marketing or communication": [
    "Design",
    "Marketing",
    "Communication",
  ],
  "Health, sports or personal care": ["Health", "Sports", "Personal care"],
  "Real estate or construction": [
    "Real estate sale, purchase and management",
    "Real estate construction",
    "Real estate design and planning",
  ],
  "Education or learning": ["Education", "Learning"],
  "Others": ["Other category 1", "Other category 2"],
};

export const sizes = ["50-100", "100-200", "200-500", "500-600", "Others"];
export const PayFromAccountCardValues = {
  heading: "Pay from your Lloyds account",
  subText_1:
    "You’ll be redirected to Lloyds, where you can securely log in to your own ",
  subText_2: " account and approve the payment for your ",
  subtext_3: " transfer.",
  subText2: "Safe and Secure",
  list: [
    "We’ll use an encrypted end to end connection.",
    "Your bank will not share your login details with PocketPay or anyone else.",
  ],
  continueButtonName: "Continue to pay",
  payManuallyButton: "Pay manually",
};

export const verifyOTPOptions = [
  { text: "Resend code by SMS", icon: chevronRight },
  { text: "Send code by voice call", icon: chevronRight },
];
export const OTPReg = /^\d{6}$/;
export const VerifyOtpText1 = "Enter the 6-digit code";
export const VerifyOtpText2 = "I didn’t recieve a code";
export const SUBMIT = "Submit";
export const VerifyOtpText3 = "Approve another way";
export const VerifyOtpText4 = "Use a different phone number";
export const VerifyOtpPlaceHolder = "Enter code here";
export const VerifyOtpLabel = "6-digit code";
export const confirmDetails = {
  name: "Zentech Solutions Pvt Ltd",
  regno: "2020ZEN5367GJ",
  address:
    "#2097, Triveni Main Rd, Gokula 1st Stage, Nanjappa Reddy Colony, Yeswanthpur, Bengaluru, Karnataka 560054",
};
export const confirmBuisnessHeaderText = "Confirm your business details";
export const confirmBuisnessHeaderSubText =
  "Sole trader, freelancer or not registered with Companies house?";

export const cancelHeading = "Cancel transfer #3628287220";
export const cancelBody = "Where would you like us to refund the money?";
export const selAcc = "Select Account";
export const exiAcc = "An existing account";
export const newAcc = "New account";
export const ROSS_GENER = "Ross Gener";

export const CANCEL_TRANSFER = "Cancel transfer #";
export const WHERE_WOULD_YOU_LIKE_TO_REFUND =
  "Where would you like us to refund the money?";
export const SELECT_ACCOUNT = "Select account";
export const AN_EXISTING_ACCOUNT = "An existing account";
export const NEW_ACCOUNT = "New account";
export const SELECT_AN_OPTION = "Select an option";
export const ACCOUNT_ENDING_WITH_4656 = "Ending in 4656";
export const ACCOUNT_ENDING_WITH_4242 = "Ending in 4242";
export const CANCEL_TRANSFER_BUTTON = "Cancel transfer";
export const ACCOUNT_NUMBER_ENDING_WITH_4242 = "xxxx xxxx 4242";
export const ACCOUNT_NUMBER_ENDING_WITH_4656 = "xxxx xxxx 4656";
export const CANCEL_TRANSFER_OPTIONS = [
  {
    id: 1,
    name: ROSS_GENER,
    acctNo: ACCOUNT_ENDING_WITH_4656,
    value: "option1",
  },
  {
    id: 2,
    name: ROSS_GENER,
    acctNo: ACCOUNT_ENDING_WITH_4242,
    value: "option2",
  },
];
export const amountCardProps = {
  fee: 3.69,
  rate: 1.20048,
  totalAmount: 996.31,
};
export const amountCardHeader = "How much would you like to transfer?";
export const VerificationCardValues = {
  heading: "What’s the purpose for using PocketPay?",
  subText:
    "To help us keep PocketPay safe and secure, please tell us what you’re using PocketPay for",
  dropDownLabel: "Tell us what you’re using PocketPay for",
  dropDownPlaceHolder: "Tell us what you’re using PocketPay for",
  dropDownData: [
    "Paying rent, utilities or property charges",
    "Paying suppliers/contractors/employees",
    "Paying for goods or services abroad",
    "Paying tax on profit or property",
  ],
};
export const LOGOUTITEMS = [
  {
    src: User,
    text: "Your details",
  },

  {
    src: Settings,
    text: "Settings",
  },
  {
    src: Help,
    text: "Help center",
  },
  {
    src: Logout,
    text: "Logout",
  },
];
export const OnlineBankingCardValues = {
  heading: "Next, go to your Lloyds’s online banking and make a payment",
  subHeading1: "Our bank details for payments in GBP",
  subHeading2:
    "Below are the bank details for this payment. Please only send the money from an account in your name",
  bankDetails: [
    "Our bank address",
    "PocketPay \n56 Shoreditch High Street \nLondon E16JJ \nUnited Kingdom",
  ],
  endText: (
    <>
      {`You can use your LIoylds `}
      <span
        style={{
          color: Theme.palette.primary[500],
          textDecoration: "underline",
        }}
      >
        online banking
      </span>
      {` to or mobile app to make your bank transfer to PocketPay`}
    </>
  ),
  continueButton: "Continue",
  cancelButton: "Cancel this transfer",
};
export const TransferDetailsCardValues = {
  heading1: "Transfer details",
  heading2: "Recipient details",
  continueButton: "Continue to pay",
  cancelTransferButton: "Cancel this transfer",
};
export const SAVED_CARD = "SAVED CARD";
export const NEW_CARD = "NEW CARD";
export const CARD_ITEMS: BankCardInterface[] = [
  { cardNumber: "4546", expiryDate: "09/25", id: 1, name: "EUR Visa Debit" },
  { cardNumber: "9313", expiryDate: "06/25", id: 2, name: "EUR Visa Debit" },
];

export const reviewTransferDetails = "Review details of your transfer";
export const invalidEmail = "Invalid Email";
export const accountNoRegex = /^\d{12}$/;
export const accountNoHelperText =
  "Account number length should be equal to 12";

export type SideNavItemsType = {
  mainMenuItems: MainMenUItemsType;
  subMenuItems: {
    label: string;
    hidden: boolean;
    items: MenuItemType;
  }[];
};
export type MainMenUItemsType = {
  text: string;
  active: boolean;
  variant: "icon" | "avatar" | "chip";
  chipText: boolean;
  chipName: string;
  hidden: boolean;
  src: string;
  textvariant: "c1";
}[];
export type MenuItemType = {
  text: string;
  src: string;
  active: boolean;
  variant: string;
}[];

export type ElementsType = {
  src: string | undefined;
  text: string;
};

export const SIDE_NAV_ITEMS: SideNavItemsType = {
  mainMenuItems: [
    {
      text: "Home",
      active: true,
      variant: "icon",
      textvariant: "c1",
      chipText: false,
      chipName: "",
      src: home,
      hidden: false,
    },
    {
      text: "Cards",
      active: false,
      textvariant: "c1",
      variant: "icon",
      chipText: false,
      chipName: "",
      src: card,
      hidden: false,
    },
    {
      text: "Recipients",
      active: false,
      textvariant: "c1",
      variant: "icon",
      chipText: false,
      chipName: "",
      src: person,
      hidden: false,
    },
    {
      text: "Team",
      active: false,
      textvariant: "c1",
      variant: "chip",
      chipText: true,
      chipName: "New",
      src: team,
      hidden: false,
    },
    {
      text: "Account",
      active: false,
      textvariant: "c1",
      variant: "icon",
      chipText: false,
      chipName: "",
      src: account,
      hidden: false,
    },
    {
      text: "Invite & earn 150 GBP",
      active: false,
      variant: "icon",
      textvariant: "c1",
      chipName: "",
      chipText: false,
      src: gift,
      hidden: false,
    },
  ],
  subMenuItems: [
    {
      label: "Balances",
      hidden: false,

      items: [
        {
          src: india,
          text: "10,000.00 INR",
          active: false,
          variant: "avatar",
        },
        {
          src: austria,
          text: "1200 GBP",
          active: false,
          variant: "avatar",
        },
        {
          src: uk,
          text: "192.00 USD",
          active: false,
          variant: "avatar",
        },
        {
          src: plus,
          text: "Open a balance",
          active: false,
          variant: "icon",
        },
      ],
    },
    {
      label: "jars",
      hidden: false,

      items: [
        {
          src: plus,
          text: "Open a jar",
          active: false,
          variant: "icon",
        },
      ],
    },
  ],
};

export const FillRecipientConst = {
  ACCOUNTNUMBER_LABEL: "Account Number",
  FIRST_NAME: "First Name",
  LAST_NAME: "Last Name",
  IFSC_CODE: "The Indian Financial System Code",
  MAIN_TEXT: "Send to someone",
  EMAIL_PLACEHOLDER: "Email",
  CHECKBOX_LABEL: "I know their bank details",
  SUB_TEXT: "Recipient details",
  DROPDOWN_LABEL: "Account Type",
  DROPDOWN_PLACEHOLDER: "Select Account Type",
  DROPDOWN_ITEMS: ["Checking", "Savings"],
};
export const newAddressValue =
  "3217, Central Avenue, 1st cross, 2nd Main Road, Unishire Victory, 2nd Main Rd, Bengaluru, Karnataka  560003";
export const ConfirmTradingAddressValues = {
  heading: "Confirm trading address",
  subHeading:
    "Your trading address is usually the place you work every day. If the business has multiple trading addresses, add as many as possible",
  subText: "Trading addresses",
  edit: "Edit",
  cancleButton: "Cancel",
  addTradeAddressButton: "Add trading address",
  saveButton: "Save",
  confirmButton: "Confirm",
};
export const emptyFieldText = "This field should not be empty";
export const FILL_USER_DETAILS_HEADER = "Fill in your details";
export const FILL_USER_DETAILS_SUBTEXT =
  "Since you’re opening the account, we need to know a bit more about you.";
export const ConfirmDirectors = {
  MAINTEXT1: "Confirm your business directors",
  MAINTEXT2: "Confirm your business owners",
  SUBTEXT1:
    "Please confirm these details from companies house. If anyone’s missing, add them below.",
  SUBTEXT2:
    "Please confirm these details from companies house. If anyone else controls more than 25% of your business, add them below.",
  DIRECTOR: "Director",
  SHAREHOLDER: "Shareholder",
  FIRSTNAME: "First name",
  FIRSTNAMEERR: "First name is required",
  LASTNAME: "Last name",
  LASTNAMEERR: "Last name is required",
  DATE_OF_BIRTH: "Date of birth",
  DROPDOWN: "Country of residence",
  ADD_ANOTHER: "Add another",
  Director: "director",
  Owner: "owner",
};

export const CANCEL_TRANSFER_HEADER = "Your money will be refunded";
export const CANCEL_TRANSFER_SUBTEXT =
  "When we receive your money, we’ll give you a refund. Refunds usually take 3-5 working days.";
export const HP_HEADING = "Home";
export const HP_BUTTON = "Send money";
export const BUSINESS_ACCOUNT_SETUP_VALUES = [
  "Your business",
  "Business activity",
  "Your details",
];
export type HOME_TRANSACTION = {
  senderName: string;
  sendAmount: number;
  rate: number;
  recipientCode: string;
  sendCode: string;
  createdAt: Date;
  username: string;
  transferNumber: string;
  accounts: string[];
};
export const HOME_TRANSACTION_VALUES = [
  {
    id: 1,
    SENDER_NAME: "Mario Gabriel",
    SEND_AMOUNT: 100,
    RECIEPIENT_AMOUNT: 114.96,
    RECIPIENT_CODE: "EUR",
    SEND_CODE: "GBP",
    CREATED_AT: new Date(),
    USER_NAME: "Ross Gener",
    TRANSFER_NUMBER: "3227627272",
    ACCOUNTS: ["4656", "4252"],
  },
  {
    id: 2,
    SENDER_NAME: "James",
    SEND_AMOUNT: 340,
    RECIEPIENT_AMOUNT: 355.96,
    RECIPIENT_CODE: "EUR",
    SEND_CODE: "GBP",
    CREATED_AT: new Date(),
    USER_NAME: " Gener",
    TRANSFER_NUMBER: "3227627272",
    ACCOUNTS: ["4656", "4252"],
  },
];
export const HP_TEXTLINE_ONE =
  "This is where you’ll see your activity and transactions.";
export const HP_TEXTLINE_TWO = "Choose how you’d like to get started.";
export const TRANSFER_DETAILS = {
  SEND_AMOUNT: 77.4,
  SEND_COUNTRY_CODE: "GBP",
  RECIEPIENT_COUNTRY_CODE: "EUR",
  RATE: 1.14,
  FEE: "00.00",
  AMOUNT: 77.74,
  NAME: "Mario Gabriel",
  EMAIL: "mario.gabriel@gmail.com",
  ACCOUNT_NO: "213637383919",
  ACCOUNT_TYPE: "Checking",
  SHOULD_ARRIVE: "April 28th",
};

export const Fallback = ({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: () => void;
}) => {
  return (
    <div>
      <TypographyComponent variant="h2" text="Something went wrong:" />
      <TypographyComponent variant="body2" text={error.message} color="red" />
      <button onClick={resetErrorBoundary}>Retry</button>
    </div>
  );
};
export const BANK_ACCOUNT_PAYMENT_FLOW_VALUES = {
  data: {
    name: "Mario Gabriel",
    amount: "100.00 GBP",
    accountNo: "729019188810",
  },
  accountType: "business",
  amount: "75.38 GBP",
};
export const RECEIVER_DATA = {
  name: "Mario Gabriel",
  email: "mario.gabriel@gmail.com",
  accountNo: "21363738391910",
  accountType: "Checking",
};
export const DEBIT_CARD_FLOW = {
  CARD_DIGITS: 4546,
  CURRENCY_TYPE: "GBP",
  AMOUNT: 100,
  RECEIVER_CURRENCY_TYPE: "EUR",
  EXCHANGE_RATE: 1.14,
  AMOUNT_TO_CONVERT: 77.74,
  FEE: 0,
};
export const DEFAULT_BUSINESS_ADDRESS =
  "#2097, Triveni Main Rd, Gokula 1st Stage, Nanjappa Reddy Colony, Yeswanthpur, Bengaluru, Karnataka 560054";
export const TRANSFER_STEPPER_VALUES = [
  "Amount",
  "You",
  "Recipient",
  "Verification",
  "Review",
  "Pay",
];
export const TRANSFER_NUMBER = "3227627272";
