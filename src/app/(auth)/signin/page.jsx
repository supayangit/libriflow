"use client";

import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Check } from "@gravity-ui/icons";
import { Button, Input, Label, InputGroup } from "@heroui/react";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";

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
      console.error(err);
    }
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="py-10 sm:py-12 md:py-15 flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-20">

      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-md space-y-4 md:space-y-6 text-center">

        <h2 className="font-bold text-xl sm:text-2xl md:text-3xl">
          Sign In to LibriFlow
        </h2>

        <div className="text-sm">
          <span className="text-muted-foreground">No account?</span>{" "}
          <Link href="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </div>

        <form
          className="flex flex-col gap-4 w-full"
          onSubmit={handleSubmit(onSubmit)}
        >

          {/* Email */}
          <div className="flex flex-col gap-1 text-left">
            <Label>Email</Label>
            <Input
              placeholder="john@example.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-xs sm:text-sm">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1 text-left">
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
              <p className="text-red-500 text-xs sm:text-sm">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-2">
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
              <Check />
              Sign In
            </Button>

            <Button
              type="reset"
              variant="secondary"
              className="text-blue-600 w-full sm:w-auto"
            >
              Reset
            </Button>
          </div>

          {/* Google */}
          <Button
            className="bg-white hover:bg-gray-50 text-black border border-gray-300 flex items-center justify-center gap-2 w-full py-2"
            onClick={handleGoogleSignIn}
          >
            <FaGoogle className="text-blue-500" />
            Sign in with Google
          </Button>

        </form>
      </div>
    </div>
  );
};

export default SigninPage;