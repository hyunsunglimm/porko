/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   loader: 'custom',
  //   path: '',
  //   loaderFile: './shared/utils/imageLoader.ts'
  // }
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io'
      }
    ]
  }
};

export default nextConfig;
