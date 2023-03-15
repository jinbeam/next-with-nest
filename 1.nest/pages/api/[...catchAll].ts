import { Main } from "@/server/main";
import { NextApiRequest, NextApiResponse } from "next";

const catchAll = (req: NextApiRequest, res: NextApiResponse) =>
  new Promise(async (resolve) => {
    const listener = await Main.getListener();
    listener(req, res);
    res.on("finish", resolve);
  });

export default catchAll;
