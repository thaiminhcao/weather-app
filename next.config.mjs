const nextConfig = {
  experimental: {
    reactCompiler: true,
  },
  pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.weatherapi.com",
      },
      {
        protocol: "https",
        hostname: "assets.algoexpert.io",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "baotintuc.xwai.cc",
      },
      {
        protocol: "https",
        hostname: "api.xwai.cc",
      },
    ],
  },
};

export default nextConfig;
