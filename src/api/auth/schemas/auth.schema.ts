import { ZodError, z } from "zod";

export const RegisterUserSchema = z.object({
  email: z
    .string({
      required_error: "e-mail is required",
    })
    .email({ message: "e-mail is not valid" })
    .nonempty(),
  name: z.string().min(3, { message: "name is too short" }),
  password: z
    .string({
      required_error: "password is required",
    })
    .min(8, {
      message: "password is too short, please use at least 8 characters",
    }),
});

export const LoginUserSchema = RegisterUserSchema.pick({
  email: true,
  password: true,
});

export type Register = z.infer<typeof RegisterUserSchema>;

export type Login = z.infer<typeof LoginUserSchema>;

//fucntion to validate data againts the schema whiout react-hook-form
export function validateData<T>(schema: z.ZodType<T>, data: unknown): T {
  try {
    return schema.parse(data) as T;
  } catch (error) {
    if (error instanceof ZodError) {
      throw new Error(`Validation error: ${error.message}`);
    } else {
      throw error;
    }
  }
}
