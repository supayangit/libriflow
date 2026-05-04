"use client";

import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Input,
  Label,
  InputGroup,
} from "@heroui/react";
import Link from "next/link";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";

const SignupPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { data: res, error } = await authClient.signUp.email({
      name: data.name,
      image: data.image_url,
      email: data.email,
      password: data.password,
      callbackURL: "/",
    });

    if (error) {
      alert(error.message);
    }

    if (res) {
      alert("Sign up successful!");
      window.location.href = "/signin";
    }
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-20">

      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-md space-y-2 sm:space-y-4 md:space-y-6 text-center">

        <h2 className="font-bold text-xl sm:text-2xl md:text-3xl">
          Sign Up for LibriFlow
        </h2>

        <div className="text-xs sm:text-sm">
          <span className="text-gray-500">
            Already have an account?
          </span>{" "}
          <Link href="/signin" className="text-blue-600 hover:underline">
            Sign In
          </Link>
        </div>

        <form
          className="flex flex-col gap-4 w-full"
          onSubmit={handleSubmit(onSubmit)}
        >

          {/* Name */}
          <div className="flex flex-col gap-1 text-left">
            <Label>Name</Label>
            <Input
              placeholder="John Doe"
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 2,
                  message: "At least 2 characters",
                },
              })}
            />
            {errors.name && (
              <p className="text-red-500 text-xs sm:text-sm">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Image */}
          <div className="flex flex-col gap-1 text-left">
            <Label>Image URL</Label>
            <Input
              placeholder="https://example.com/image.jpg"
              {...register("image_url", {
                required: "Image URL is required",
                pattern: {
                  value: /^(https?:\/\/)[^\s$.?#].[^\s]*$/i,
                  message: "Enter valid URL",
                },
              })}
            />
            {errors.image_url && (
              <p className="text-red-500 text-xs sm:text-sm">
                {errors.image_url.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1 text-left">
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
                placeholder="Enter password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters",
                  },
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
            <Button type="submit" className="bg-blue-600 w-full sm:w-auto">
              <Check />
              Sign Up
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
            onClick={handleGoogleSignIn}
            className="bg-white hover:bg-gray-50 text-black border border-gray-300 flex items-center justify-center gap-2 w-full py-2"
          >
            <FaGoogle className="text-blue-500" />
            Continue with Google
          </Button>

        </form>
      </div>
    </div>
  );
};

export default SignupPage;