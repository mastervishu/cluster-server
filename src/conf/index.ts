import "dotenv/config"

export const POST: number = Number(process.env.PORT) || 7001
export const HOST: string = process.env.HOST || "127.0.0.1"
export const MONGO_URI: string = process.env.MONGO_URI || ""
