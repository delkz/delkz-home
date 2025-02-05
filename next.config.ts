import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./app/i18n/requests.ts');
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['flagsapi.com'],
    },
};
export default withNextIntl(nextConfig);