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
        console.error("SESSION ERROR:", err);
      } finally {
        setLoading(false);
      }
    };

    getSession();
  }, []);

  // SAFE derived user (CRITICAL FIX)
  const user = session?.user ?? null;

  useEffect(() => {
    if (user?.name) {
      document.title = `${user.name} — Libriflow`;
    } else {
      document.title = "Profile — Libriflow";
    }
  }, [user?.name]);

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

  if (!user) {
    return (
      <div className="h-screen flex items-center justify-center text-red-500">
        Not logged in
      </div>
    );
  }

  return (
    <div className="flex justify-center px-4 sm:px-6 md:px-10 lg:px-20 py-10 sm:py-12 lg:py-16">

      <div className="w-full max-w-2xl bg-white/90 border border-slate-200 rounded-xl shadow-lg p-6 dark:bg-slate-950/90 dark:border-slate-800 space-y-6">

        <div className="flex items-center gap-4">

          <div className="relative w-24 h-24 rounded-full overflow-hidden">
            <Image
              src={
                editing
                  ? formData.image || "/default-avatar.png"
                  : user.image || "/default-avatar.png"
              }
              alt="User"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex-1">
            {editing ? (
              <input
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="border px-3 py-2 rounded w-full"
              />
            ) : (
              <h1 className="text-xl font-bold">{user.name}</h1>
            )}

            <p className="text-sm text-gray-500">{user.email}</p>
          </div>

          <div>
            {editing ? (
              <div className="flex gap-2">
                <button onClick={handleUpdate} className="bg-blue-600 text-white px-4 py-2 rounded">
                  Save
                </button>
                <button onClick={() => setEditing(false)} className="bg-gray-200 px-4 py-2 rounded">
                  Cancel
                </button>
              </div>
            ) : (
              <button onClick={() => setEditing(true)} className="bg-blue-600 text-white px-4 py-2 rounded">
                Edit
              </button>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProfilePage;