"use client";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
    Button,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
    InputGroup,
} from "@heroui/react";
import Link from "next/link";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import { useState } from "react";

const SignupPage = () => {
    const [isVisible, setIsVisible] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        console.log("Form submitted with:", data);

        const { data: res, error } = await authClient.signUp.email({
            name: data.name,
            image: data.image_url,
            email: data.email,
            password: data.password,
            callbackURL: "/",
        });

        if (error) {
            alert("Error signing up: " + error.message);
        }

        if (res) {
            alert("Sign up successful! Please check your email.");
            window.location.href = "/signin";
        }
    };

    return (
        <div className="space-y-4 mx-auto flex flex-col justify-center items-center">
            <h2 className="font-bold text-2xl">Sign Up for LibriFlow</h2>

            <div>
                <span className="text-sm text-muted-foreground">
                    Already have an account?
                </span>{" "}
                <Link href="/signin">Sign In</Link>
            </div>

            <form
                className="flex w-96 flex-col gap-4"
                onSubmit={handleSubmit(onSubmit)}
            >
                {/* Name */}
                <div className="flex flex-col gap-1">
                    <Label>Name</Label>
                    <Input
                        placeholder="John Doe"
                        {...register("name", {
                            required: "Name is required",
                            minLength: {
                                value: 2,
                                message: "At least 2 characters",
                            },
                            pattern: {
                                value: /^[a-zA-Z\s'-]+$/,
                                message: "Only letters allowed",
                            },
                        })}
                    />
                    {errors.name && (
                        <p className="text-red-500 text-sm">{errors.name.message}</p>
                    )}
                </div>

                {/* Photo */}
                <div className="flex flex-col gap-1">
                    <Label>Image</Label>
                    <Input
                        placeholder="Image URL"
                        {...register("image_url", {
                            required: "Image url is required",
                            minLength: {
                                value: 5,
                                message: "At least 5 characters",
                            },
                            pattern: {
                                value: /^(https?:\/\/)[^\s$.?#].[^\s]*$/i,
                                message: "Enter a valid URL",
                            }
                        })}
                    />
                    {errors.name && (
                        <p className="text-red-500 text-sm">{errors.name.message}</p>
                    )}
                </div>

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
                        <p className="text-red-500 text-sm">{errors.email.message}</p>
                    )}
                </div>

                {/* Password */}
                <div className="flex flex-col gap-1">
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
                        <p className="text-red-500 text-sm">
                            {errors.password.message}
                        </p>
                    )}
                </div>

                {/* Buttons */}
                <div className="flex gap-2">
                    <Button type="submit">
                        <Check />
                        Sign Up
                    </Button>
                    <Button type="reset" variant="secondary">
                        Reset
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SignupPage;