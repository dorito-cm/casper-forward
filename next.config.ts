import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Type safety remains mandatory: the build script runs `tsc --noEmit`
  // before Next compiles. Skipping Next's duplicate pass avoids its CLI
  // showConfig parser issue in managed build environments.
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
