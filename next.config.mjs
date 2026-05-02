/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images:{
    domains: ["res.cloudinary.com", "covers.openlibrary.org"]
  }
};

export default nextConfig;
