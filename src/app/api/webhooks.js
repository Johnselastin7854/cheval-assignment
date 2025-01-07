import { useSWR, mutate } from "swr";
import { navbarRoute, heroRoute, technologiesRoute } from "./apiRoutes";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { data } = req.body;

      if (
        data.event === "entry.create" ||
        data.event === "entry.update" ||
        data.event === "entry.delete"
      ) {
        await mutate(navbarRoute, () => fetchData(navbarRoute), false);

        await mutate(heroRoute, () => fetchData(heroRoute), false);

        await mutate(
          technologiesRoute,
          () => fetchData(technologiesRoute),
          false
        );
      }

      res.status(200).json({ message: "Webhook received successfully" });
    } catch (error) {
      console.error("Error handling webhook:", error);
      res.status(500).json({ error: "Error handling webhook" });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
