/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const nextTranslate = require('next-translate');

module.exports = nextTranslate({
  reactStrictMode: true,
  images: {
    domains: 
    [
    'mdbootstrap.com',
    'https://images.unsplash.com',
    'cdn.pixabay.com',
    'dummyimage.com',
    'placehold.it',
    'source.unsplash.com'
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: "en",
  pages: {
    "*": ["common"],
    "/": ["home"],
    "/about": ["about"]
  },
  },

})
