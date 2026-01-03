
import dotenv from "dotenv";
dotenv.config();

const apiKey = process.env.GEMINI_API_KEY;
const apiUrl = process.env.GEMINI_API_URL;

console.log("Checking Gemini Configuration...");

if (apiKey) {
         console.log("✅ GEMINI_API_KEY is found.");
         console.log("Key length:", apiKey.length);
} else {
         console.log("❌ GEMINI_API_KEY is undefined.");
}

if (apiUrl) {
         console.log("ℹ️ GEMINI_API_URL is found (optional if Key is present).");
} else {
         console.log("ℹ️ GEMINI_API_URL is undefined (this is okay if Key is present).");
}

if (!apiKey && !apiUrl) {
         console.error("❌ CRITICAL: Neither Key nor URL is configured. The AI features will not work.");
         process.exit(1);
} else {
         console.log("✅ Configuration looks promising (assuming the key is valid).");
}
