"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

const ProfilePage = () => {
    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true);
    const [editing, setEditing] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        image: "",
    });

    useEffect(() => {
        const getSession = async () => {
            try {
                const res = await authClient.getSession();
                const data = res?.data || res;
                setSession(data);

                if (data?.user) {
                    setFormData({
                        name: data.user.name || "",
                        image: data.user.image || "",
                    });
                }
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        getSession();
    }, []);

    const handleUpdate = async () => {
        try {
            await authClient.updateUser({
                name: formData.name,
                image: formData.image,
            });

            setSession((prev) => ({
                ...prev,
                user: {
                    ...prev.user,
                    name: formData.name,
                    image: formData.image,
                },
            }));

            setEditing(false);
            toast.success("Profile updated successfully!");
        } catch (err) {
            console.error(err);
            toast.error("Update failed!");
        }
    };

    if (loading) {
        return (
            <div className="h-screen flex items-center justify-center text-gray-500">
                Loading profile...
            </div>
        );
    }

    if (!session?.user) {
        return (
            <div className="h-screen flex items-center justify-center text-red-500">
                Not logged in
            </div>
        );
    }

    const user = session.user;

    return (
        <div className="flex justify-center px-4 sm:px-6 md:px-10 lg:px-20 py-10 sm:py-12 lg:py-16">

            <div className="w-full max-w-2xl bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 md:p-8 space-y-6">

                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">

                    {/* Left */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 text-center sm:text-left w-full">

                        {/* Avatar */}
                        <div className="p-[3px] rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
                            <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-30 lg:h-30 rounded-full overflow-hidden bg-white">
                                <Image
                                    src={editing ? formData.image || "/default-avatar.png" : user.image || "/default-avatar.png"}
                                    alt="User"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Name, Email */}
                        <div className="w-full">
                            {editing ? (
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({ ...formData, name: e.target.value })
                                    }
                                    className="border px-3 py-2 rounded-md text-base sm:text-lg font-semibold w-full"
                                />
                            ) : (
                                <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
                                    {user.name || "No Name"}
                                </h1>
                            )}

                            <p className="text-gray-500 text-xs sm:text-sm md:text-base break-all">
                                {user.email}
                            </p>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-center sm:justify-end w-full sm:w-auto">
                        {editing ? (
                            <div className="flex gap-2 w-full sm:w-auto">
                                <button
                                    onClick={handleUpdate}
                                    className="flex-1 sm:flex-none bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 text-sm sm:text-base"
                                >
                                    Save
                                </button>
                                <button
                                    onClick={() => setEditing(false)}
                                    className="flex-1 sm:flex-none bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400 text-sm sm:text-base"
                                >
                                    Cancel
                                </button>
                            </div>
                        ) : (
                            <button
                                onClick={() => setEditing(true)}
                                className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm sm:text-base"
                            >
                                Edit
                            </button>
                        )}
                    </div>
                </div>

                {/* Image URL */}
                {editing && (
                    <div>
                        <label className="text-xs sm:text-sm text-gray-500">
                            Profile Image URL
                        </label>
                        <input
                            type="text"
                            value={formData.image}
                            onChange={(e) =>
                                setFormData({ ...formData, image: e.target.value })
                            }
                            className="w-full mt-2 border px-3 py-2 rounded-md text-sm"
                            placeholder="https://example.com/image.jpg"
                        />
                    </div>
                )}

                {/* Divider */}
                <div className="border-t"></div>

                {/* Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-sm">

                    <div className="bg-gray-100 p-3 sm:p-4 rounded-lg">
                        <p className="text-gray-500 text-xs sm:text-sm">User ID</p>
                        <p className="font-semibold break-all text-xs sm:text-sm">
                            {user.id}
                        </p>
                    </div>

                    <div className="bg-gray-100 p-3 sm:p-4 rounded-lg">
                        <p className="text-gray-500 text-xs sm:text-sm">Email</p>
                        <p className="font-semibold text-xs sm:text-sm break-all">
                            {user.email}
                        </p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ProfilePage;