/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/education',
        destination: '/programs/education',
        permanent: true,
      },
      {
        source: '/child-development',
        destination: '/programs/child-development',
        permanent: true,
      },
      {
        source: '/community-outreach',
        destination: '/programs/community-outreach',
        permanent: true,
      },
      {
        source: '/festivals',
        destination: '/programs/festival-support',
        permanent: true,
      },
      {
        source: '/programs/festivals',
        destination: '/programs/festival-support',
        permanent: true,
      },
      {
        source: '/environment',
        destination: '/programs/environment',
        permanent: true,
      },
      {
        source: '/privacy-policy',
        destination: '/privacy',
        permanent: true,
      },
      {
        source: '/terms-of-use',
        destination: '/terms',
        permanent: true,
      },
      {
        source: '/about/founder',
        destination: '/founder',
        permanent: true,
      },
      {
        source: '/about/transparency',
        destination: '/impact',
        permanent: true,
      },
      {
        source: '/get-involved/volunteer',
        destination: '/volunteer',
        permanent: true,
      },
      {
        source: '/get-involved/sponsor',
        destination: '/sponsor',
        permanent: true,
      },
      {
        source: '/get-involved/partnerships',
        destination: '/partnerships',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
