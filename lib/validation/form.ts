import { z } from "zod";

export const formSchema = z.object({
  fName: z.string().min(1, {
    message: "First Name is required",
  }),
  lName: z.string().min(1, {
    message: "Last Name is required",
  }),
  company: z.string().optional(),
  address: z.string().min(1, {
    message: "Address is required",
  }),
  city: z.string().min(1, {
    message: "City is required",
  }),
  province: z.string().min(1, {
    message: "Province is required",
  }),
  postal: z.string().min(1, {
    message: "Postal is required",
  }),
  phone: z.string().min(1).max(10),
});
