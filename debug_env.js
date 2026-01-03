import dotenv from "dotenv";
dotenv.config();

console.log("Environment Keys:", Object.keys(process.env).filter(k => k.includes("GEMINI") || k.includes("KEY") || k.includes("URL")));
