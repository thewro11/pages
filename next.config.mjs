/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/pages",
  experimental: {
    // this includes files from the monorepo base two directories up
    outputFileTracingRoot: path.join(__dirname, '../../'),
  },
};

export default nextConfig;
