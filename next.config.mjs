/** @type {import('next').NextConfig} */
const nextConfig  = {
    poweredByHeader:false,
    env:{
        "APP_SERVER_URL":process.env.SERVER_URL,
        
    },
	async rewrites() {
		return [
			{
				source: "/api/:path*",
				destination: "http://localhost:4200/api/:path*",
			},
            {
                source:"/uploads/:path*",
                destination:"http://localhost:4200/uploads/:path*"
            }
		];
	},
};

export default nextConfig;