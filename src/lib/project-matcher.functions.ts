import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { recommendProject } from "./project-matcher.server.ts";

export const getProjectRecommendation = createServerFn({ method: "POST" })
  .inputValidator((data) =>
    z
      .object({ requirements: z.string() })
      .refine(
        ({ requirements }) => requirements.trim().length >= 12 && requirements.trim().length <= 1500,
        "Please describe your project in 12–1500 characters.",
      )
      .parse(data),
  )
  .handler(async ({ data }) => recommendProject(data.requirements.trim()));