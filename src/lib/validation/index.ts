import { z } from "zod"

export const SignupValidation = z.object({
    name: z.string().min(2, { message: 'Too Short' }),
    username: z.string().min(2, { message: 'Username must be at least 4 characters' }),
    email: z.string().email(),
    password: z.string().min(8, { message: "Password need to be at least 8 characters." }),
  })