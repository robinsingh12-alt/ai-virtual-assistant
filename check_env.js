
import dotenv from "dotenv";
dotenv.config();

const url = process.env.GEMINI_API_URL;
console.log("Loaded GEMINI_API_URL:", url);
console.log("Type of URL:", typeof url);
console.log("Length of URL:", url ? url.length : 0);
console.log("Code point at 0:", url ? url.codePointAt(0) : "N/A");

if (url) {
         try {
                  new URL(url);
                  console.log("URL is valid according to new URL()");
         } catch (e) {
                  console.error("URL Validation Error:", e.message);
         }
} else {
         console.error("URL is undefined or empty");
}
