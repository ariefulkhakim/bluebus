import { z } from "zod";

export const formBookingSchema = z.object({
  start_line: z.string().min(1, "Destination route is required"),
  end_line: z.string().min(1, "Arival route is required"),
  start_date: z.string().max(10, "Select your date"),
  end_date: z.string().max(10, "Select your date"),
});

export type BookingSchema = z.infer<typeof formBookingSchema>;
