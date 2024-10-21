/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/products',
          permanent: false,
          has: [
            {
              type: 'query',
              key: 'noRedirect',
              value: '(?!true)',  // Redirect only if `noRedirect` query param is NOT 'true'
            },
          ],
        },
      ];
    },
  };
  
  export default nextConfig;
  