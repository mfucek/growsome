/** @type {import('next').NextConfig} */

module.exports = {
	images: {
		domains: ['images.unsplash.com']
	},
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**'
			}
		]
	}
};
