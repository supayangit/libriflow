/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    domains: [
      "res.cloudinary.com",
      "covers.openlibrary.org",
      "lh3.googleusercontent.com"
    ]
  }
};

export default nextConfig;