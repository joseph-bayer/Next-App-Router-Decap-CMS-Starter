/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.md$/,
      use: "frontmatter-markdown-loader",
    });
    return cfg;
  },
};

export default nextConfig;
