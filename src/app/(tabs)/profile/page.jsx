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

            // Update local UI instantly
            setSession((prev) => ({
                ...prev,
                user: {
                    ...prev.user,
                    name: formData.name,
                    image: formData.image,
                },
            }));

            setEditing(false);
            toast.success("Profile updated successfully ✅");
        } catch (err) {
            console.error(err);
            toast.error("Update failed ❌");
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
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-20">
            <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 space-y-6">

                {/* Header */}
                <div className="flex items-center justify-between gap-6">

                    <div className="flex items-center gap-6">

                        {/* Avatar */}
                        <div className="relative w-24 h-24 rounded-full overflow-hidden border">
                            <Image
                                src={editing ? formData.image || "/default-avatar.png" : user.image || "/default-avatar.png"}
                                alt="User"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Name + Email */}
                        <div>
                            {editing ? (
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({ ...formData, name: e.target.value })
                                    }
                                    className="border px-3 py-2 rounded-md text-lg font-semibold w-full"
                                />
                            ) : (
                                <h1 className="text-2xl font-bold">{user.name || "No Name"}</h1>
                            )}

                            <p className="text-gray-500">{user.email}</p>
                        </div>
                    </div>

                    {/* Edit / Save */}
                    <div>
                        {editing ? (
                            <div className="flex gap-2">
                                <button
                                    onClick={handleUpdate}
                                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                                >
                                    Save
                                </button>
                                <button
                                    onClick={() => setEditing(false)}
                                    className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400"
                                >
                                    Cancel
                                </button>
                            </div>
                        ) : (
                            <button
                                onClick={() => setEditing(true)}
                                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                            >
                                Edit
                            </button>
                        )}
                    </div>
                </div>

                {/* Image URL Field (only in edit mode) */}
                {editing && (
                    <div>
                        <label className="text-sm text-gray-500">Profile Image URL</label>
                        <input
                            type="text"
                            value={formData.image}
                            onChange={(e) =>
                                setFormData({ ...formData, image: e.target.value })
                            }
                            className="w-full mt-2 border px-3 py-2 rounded-md"
                            placeholder="https://example.com/image.jpg"
                        />
                    </div>
                )}

                {/* Divider */}
                <div className="border-t"></div>

                {/* Info Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">

                    <div className="bg-gray-100 p-4 rounded-lg">
                        <p className="text-gray-500">User ID</p>
                        <p className="font-semibold break-all">{user.id}</p>
                    </div>

                    <div className="bg-gray-100 p-4 rounded-lg">
                        <p className="text-gray-500">Email</p>
                        <p className="font-semibold">{user.email}</p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ProfilePage;