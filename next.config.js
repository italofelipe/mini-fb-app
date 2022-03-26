/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    apiKey: "AIzaSyAr8mdO560MWfkymLODRAh9OLmNLMo81nc",
    authDomain: "facebook-comments-50cd4.firebaseapp.com",
    databaseURL: "https://facebook-comments-50cd4-default-rtdb.firebaseio.com",
    projectId: "facebook-comments-50cd4",
    storageBucket: "facebook-comments-50cd4.appspot.com",
    messagingSenderId: "261501086824",
    appId: "1:261501086824:web:92a1d484495e8212131fdd",
  },
};

module.exports = nextConfig;
