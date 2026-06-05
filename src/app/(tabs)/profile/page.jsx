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

  const user = session?.user ?? null;

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
      <div className="h-screen flex items-center justify-center text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-950">
        Loading profile...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="h-screen flex items-center justify-center text-red-500 bg-white dark:bg-slate-950">
        Not logged in
      </div>
    );
  }

  return (
    <div className="flex justify-center px-4 sm:px-6 md:px-10 lg:px-20 py-10 sm:py-12 lg:py-16 bg-white dark:bg-slate-950 transition-colors duration-300">

      <div className="w-full max-w-2xl bg-white/90 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-xl sm:rounded-2xl shadow-lg backdrop-blur-xl p-4 sm:p-6 md:p-8 space-y-6 transition-all duration-300">

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">

          {/* LEFT */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 text-center sm:text-left w-full">

            {/* AVATAR */}
            <div className="p-[3px] rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-sky-500">
              <div className="relative w-24 h-24 rounded-full overflow-hidden bg-white dark:bg-slate-800">
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
            </div>

            {/* NAME + EMAIL */}
            <div className="w-full">
              {editing ? (
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 px-3 py-2 rounded-md text-base font-semibold outline-none"
                />
              ) : (
                <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  {user.name || "No Name"}
                </h1>
              )}

              <p className="text-slate-500 dark:text-slate-400 text-sm break-all">
                {user.email}
              </p>
            </div>
          </div>

          {/* BUTTONS */}
          <div>
            {editing ? (
              <div className="flex gap-2">
                <button
                  onClick={handleUpdate}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditing(false)}
                  className="bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-100 px-4 py-2 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-700 transition"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                onClick={() => setEditing(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
              >
                Edit
              </button>
            )}
          </div>
        </div>

        {/* IMAGE INPUT */}
        {editing && (
          <div>
            <label className="text-sm text-slate-500 dark:text-slate-400">
              Profile Image URL
            </label>
            <input
              type="text"
              value={formData.image}
              onChange={(e) =>
                setFormData({ ...formData, image: e.target.value })
              }
              className="w-full mt-2 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 px-3 py-2 rounded-md text-sm outline-none"
              placeholder="https://example.com/image.jpg"
            />
          </div>
        )}

        {/* DIVIDER */}
        <div className="border-t border-slate-200 dark:border-slate-800" />

        {/* INFO CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">

          <div className="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 p-4 rounded-lg">
            <p className="text-slate-500 dark:text-slate-400 text-sm">User ID</p>
            <p className="font-semibold text-slate-900 dark:text-slate-100 break-all">
              {user.id}
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 p-4 rounded-lg">
            <p className="text-slate-500 dark:text-slate-400 text-sm">Email</p>
            <p className="font-semibold text-slate-900 dark:text-slate-100 break-all">
              {user.email}
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProfilePage;