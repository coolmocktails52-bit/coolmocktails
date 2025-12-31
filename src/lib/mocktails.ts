import { Mocktail } from "@/app/types/mocktails"
import fs from "fs/promises"
import path from "path"

const filePath = path.join(process.cwd(), "data", "mocktails.json")

export async function readMocktails(): Promise<Mocktail[]> {
  const data = await fs.readFile(filePath, "utf-8")
  return JSON.parse(data || "[]")
}

export async function writeMocktails(mocktails: Mocktail[]) {
  await fs.writeFile(filePath, JSON.stringify(mocktails, null, 2))
}
