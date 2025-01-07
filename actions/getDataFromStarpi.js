"use server";
import qs from "qs";
import { fetchData } from "@/utils/fetch";

export async function FetchDataFromStrapi(queries, path) {
  try {
    const baseURL =
      process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";
    const query = qs.stringify(queries);
    const url = new URL(path, baseURL);
    url.search = query;
    const data = await fetchData(url.href);
    return data;
  } catch (error) {
    throw new Error("Failed to get   Data from strapi");
  }
}
