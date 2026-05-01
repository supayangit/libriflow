"use client";

import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Check } from "@gravity-ui/icons";
import { Button, Input, Label, InputGroup } from "@heroui/react";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import { useState } from "react";

const SigninPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const { error } = await authClient.signIn.email({
        email: data.email,
        password: data.password,
      });

      if (error) {
        alert(error.message);
        return;
      }

      router.push("/");
    } catch (err) {
      console.error("Unexpected error:", err);
    }
  };

  return (
    <div className="space-y-4 mx-auto flex flex-col justify-center items-center">
      <h2 className="font-bold text-2xl">Sign In to LibriFlow</h2>

      <div>
        <span className="text-sm text-muted-foreground">
          No account?
        </span>{" "}
        <Link href="/signup">Sign Up</Link>
      </div>

      <form
        className="flex w-96 flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Email */}
        <div className="flex flex-col gap-1">
          <Label>Email</Label>
          <Input
            placeholder="john@example.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value:
                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1">
          <Label>Password</Label>

          <InputGroup>
            <InputGroup.Input
              type={isVisible ? "text" : "password"}
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
              })}
            />
            <InputGroup.Suffix>
              <Button
                isIconOnly
                size="sm"
                variant="ghost"
                onPress={() => setIsVisible(!isVisible)}
              >
                {isVisible ? (
                  <Eye className="size-4" />
                ) : (
                  <EyeSlash className="size-4" />
                )}
              </Button>
            </InputGroup.Suffix>
          </InputGroup>

          {errors.password && (
            <p className="text-red-500 text-sm">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <Button type="submit">
            <Check />
            Sign In
          </Button>

          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SigninPage;