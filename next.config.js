/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: "standalone",
  env: {
    NEXT_PUBLIC_APP_URL: "http://localhost:3000",
    NEXTAUTH_URL: "http://localhost:3000",
    NEXTAUTH_SECRET: "",
    APP_CRYPT_PHRASE: "myTotallySecretKey",
    //BASEPATH_API_AUTH: "https://9et5tu57tj.execute-api.us-east-1.amazonaws.com",
    //BASEPATH_API_USERS: "https://blcfafys22.execute-api.us-east-1.amazonaws.com"
    BASEPATH_API_AUTH: "https://sq0y8npolg.execute-api.us-east-2.amazonaws.com/produccion",
    BASEPATH_API_USERS: "https://sq0y8npolg.execute-api.us-east-2.amazonaws.com/produccion",
    BASEPATH_API_VEHICLES:"http://localhost:3003"
    
  },
};

module.exports = nextConfig;
