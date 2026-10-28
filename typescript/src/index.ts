export class DiscordPropertiesClient {
  private rapidApiKey: string;
  private host: string;

  constructor(apiKey: string, host = "discord-super-properties-anti-detect-api.p.rapidapi.com") {
    this.rapidApiKey = apiKey;
    this.host = host;
  }

  async checkToken(token: string) {
    const res = await fetch(`https://${this.host}/api/v1/discord/token-check`, {
      method: "POST",
      headers: {
        "x-rapidapi-host": this.host,
        "x-rapidapi-key": this.rapidApiKey,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ token })
    });

    if (!res.ok) {
      throw new Error(`Discord API error: ${res.status} ${res.statusText}`);
    }
    return await res.json();
  }
}
