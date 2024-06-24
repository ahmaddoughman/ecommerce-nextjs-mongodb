/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"mallofamerica.com",
                port:"",
                pathname: "/**"
            },
            {
                protocol:"https",
                hostname:"webassets.linkretail.com",
                port:"",
                pathname: "/**"
            },
            {
                protocol:"https",
                hostname:"images.ctfassets.net",
                port:"",
                pathname: "/**"
            },
            {
                protocol: 'https',
                hostname: '**',
            }
        ]
    }
};

export default nextConfig;
