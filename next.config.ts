import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' blob: https://elevenlabs.io",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com data:",
              "img-src 'self' data: blob: https://upload.wikimedia.org https://*.elevenlabs.io",
              "media-src 'self' blob: https://elevenlabs.io https://*.elevenlabs.io",
              "connect-src 'self' https://*.elevenlabs.io wss://*.elevenlabs.io",
              "worker-src 'self' blob:",
              "frame-src 'self'",
            ].join('; ')
          },
          {
            key: 'Permissions-Policy',
            value: 'microphone=(self), camera=(), geolocation=(), payment=()'
          }
        ]
      }
    ]
  },
};

export default nextConfig;
