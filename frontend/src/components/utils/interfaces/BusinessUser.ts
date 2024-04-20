export interface BusinessUserInterface {
  firstName: string;
  lastName: string;
  dob: Date | null;
  country: string;
  businessUserType: "DIRECTOR" | "OWNER";
  businessId: number;
}
