# 💬 Discord Super Properties Anti-Detect Header Generator & Token Validation API SDK

[![RapidAPI](https://img.shields.io/badge/RapidAPI-Active%20Listing-indigo.svg?logo=rapidapi)](https://rapidapi.com/aether-protocol-labs-aether-protocol-labs-default/api/discord-super-properties-anti-detect-api)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Latency](https://img.shields.io/badge/Latency-Sub--30ms-brightgreen.svg)]()
[![Free Tier](https://img.shields.io/badge/Free%20Plan-50%20Calls%2Fmo-green.svg)]()

> **Production-grade Discord Super Properties (`x-super-properties`) and Client Integrity Engine. Emulates official desktop and web client signatures to eliminate automated bot flags, captcha prompts, and unauthorized device classifications.**

---

## 🚀 Instant Free Access (50 Free Calls/Month)

Subscribe and get your live API key in 5 seconds:  
👉 **[Subscribe on RapidAPI Hub (Free Plan Available)](https://rapidapi.com/aether-protocol-labs-aether-protocol-labs-default/api/discord-super-properties-anti-detect-api)**

- **RapidAPI Host:** `discord-super-properties-anti-detect-api.p.rapidapi.com`
- **Base Gateway:** `https://discord-super-properties-anti-detect-api.p.rapidapi.com`

---

## ⚡ Why Use Discord Super Properties API?

* **Prevent Automated Captchas:** Requests sent with missing or outdated `x-super-properties` immediately trigger Discord hCaptcha challenges.
* **Synchronized Client Builds:** Automatically stays updated with the latest Discord desktop build numbers and browser client fingerprints.
* **Instant Token Verification:** Validates Discord user / bot tokens and checks quarantine flags in `<30ms`.
* **Zero Headless Footprint:** Eliminates the need to maintain Puppeteer or Playwright instances just to spoof Discord headers.

---

## 💻 Quickstart Examples

### 1. cURL (Instant Terminal Test)
```bash
curl --request POST \
  --url https://discord-super-properties-anti-detect-api.p.rapidapi.com/api/v1/discord/token-check \
  --header 'x-rapidapi-host: discord-super-properties-anti-detect-api.p.rapidapi.com' \
  --header 'x-rapidapi-key: YOUR_RAPIDAPI_KEY' \
  --header 'Content-Type: application/json' \
  --data '{
    "token": "YOUR_DISCORD_TOKEN"
  }'
```

### 2. Python (`requests`)
```python
import requests

API_KEY = "YOUR_RAPIDAPI_KEY"

url = "https://discord-super-properties-anti-detect-api.p.rapidapi.com/api/v1/discord/token-check"
headers = {
    "x-rapidapi-host": "discord-super-properties-anti-detect-api.p.rapidapi.com",
    "x-rapidapi-key": API_KEY,
    "Content-Type": "application/json"
}
payload = {
    "token": "YOUR_DISCORD_TOKEN"
}

response = requests.post(url, json=payload, headers=headers)
print("Discord Anti-Detect Headers:", response.json())
```

### 3. Node.js / TypeScript (`axios`)
```typescript
import axios from "axios";

async function getDiscordSuperProperties(token: string) {
  const res = await axios.post(
    "https://discord-super-properties-anti-detect-api.p.rapidapi.com/api/v1/discord/token-check",
    { token },
    {
      headers: {
        "x-rapidapi-host": "discord-super-properties-anti-detect-api.p.rapidapi.com",
        "x-rapidapi-key": process.env.RAPIDAPI_KEY || "YOUR_RAPIDAPI_KEY",
        "Content-Type": "application/json"
      }
    }
  );
  console.log("Super Properties Data:", res.data);
}

getDiscordSuperProperties("YOUR_DISCORD_TOKEN");
```

---

## 🎯 Endpoints Available

1. `POST /api/v1/discord/token-check` — Verify token authenticity and synthesize matching anti-detect header bundle.
2. `POST /api/v1/discord/super-properties` — Generate standalone base64-encoded `x-super-properties` JSON for Windows, macOS, or Linux.

---

## 🔍 SEO & Use Cases
- **Discord Bot Infrastructure:** High-scale utility bots and community management tools.
- **Selfbot Anti-Ban Protection:** Prevent phone verification lockouts and suspicious location flags.
- **Server Analytics:** Monitor server metrics without triggering Cloudflare / Discord gateway limits.

---

## 📄 License
MIT © [Aether Protocol Labs](https://rapidapi.com/aether-protocol-labs-aether-protocol-labs-default)
