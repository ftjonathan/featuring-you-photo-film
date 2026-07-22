import type { NextConfig } from "next";

const repositoryName = "featuring-you-photo-film";
const basePath = `/${repositoryName}`;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
