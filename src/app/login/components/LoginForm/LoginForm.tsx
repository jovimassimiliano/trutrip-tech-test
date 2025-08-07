"use client";

import Button from "@/components/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/Card";
import Input from "@/components/Form/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormValue } from "./types";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormValidationSchema } from "./validation";
import { DevTool } from "@hookform/devtools";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(FormValidationSchema),
    mode: "all",
  });

  const handleSubmitForm: SubmitHandler<FormValue> = () => {
    router.push("/dashboard");

    // simulate user authorization succeed by persisting auth token
    localStorage.setItem("auth-token", "token");
  };

  return (
    <>
      <DevTool control={control} />
      <Card className="sm: w-1/3">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Enter your email to login</CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleSubmit(handleSubmitForm)}
            className="flex flex-col gap-4"
          >
            <Input
              {...register("email")}
              id="email"
              label="Email"
              placeholder="Input your email"
              aria-invalid={Boolean(errors?.email?.message)}
              errormessage={errors?.email?.message}
            />
            <Input
              id="password"
              label="Password"
              type="password"
              placeholder="Input your password account"
              {...register("password")}
              aria-invalid={Boolean(errors?.password?.message)}
              errormessage={errors?.password?.message}
            />
            <Button>Login</Button>
          </form>
        </CardContent>
      </Card>
    </>
  );
};
export default LoginForm;
