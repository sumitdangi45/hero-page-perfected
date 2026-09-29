import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";

import { createLovableAiGatewayRunIdFetch } from "./ai-gateway-run-id.server.ts";

const PROJECT_CATALOG = `
KisanSathi — AI Agricultural Assistant: AI crop and fertilizer guidance, disease detection, weather alerts, multilingual support, livestock help and farmer community features.
Sarvadnya Vidyapeeth — College Portal: online admissions, department and course management, student and faculty dashboards, notices, events and campus administration.
FreshCart — Online Grocery Store: product catalog, search, cart, checkout, secure payments, real-time order tracking, inventory and responsive shopping.
FlowPilot — Operations Dashboard: workflow automation, team task management, analytics, vendor onboarding, process tracking and operational reporting.
`;

function getSafeGatewayError(error: unknown) {
  if (error instanceof Error && error.message.trim()) return error.message;
  return "We couldn't prepare a recommendation right now. Please try again.";
}

export async function recommendProject(requirements: string) {
  const apiKey = process.env['LOVABLE_API_KEY']!;
  if (!apiKey) throw new Error("AI recommendations are not configured yet.");

  const runIdFetch = createLovableAiGatewayRunIdFetch();
  const provider = createOpenAI({
    baseURL: "https://ai.gateway.lovable.dev/v1",
    apiKey,
    headers: {
      "Lovable-API-Key": apiKey,
      "X-Lovable-AIG-SDK": "vercel-ai-sdk",
    },
    fetch: runIdFetch.fetch,
  });

  try {
    const result = streamText({
      model: provider.responses("openai/gpt-6-astra"),
      system:
        "You are Anni Web Solutions' portfolio consultant. Match the visitor to the single most relevant existing project. Be specific, practical and concise. Use plain text with exactly three short lines beginning 'Best match:', 'Why it fits:' and 'Recommended approach:'. Do not invent capabilities beyond the catalog.",
      prompt: `Visitor requirements:\n${requirements}\n\nAvailable projects:\n${PROJECT_CATALOG}`,
      providerOptions: {
        openai: {
          forceReasoning: true,
          reasoningEffort: "medium",
          reasoningSummary: "auto",
          store: false,
          include: ["reasoning.encrypted_content"],
        },
      },
    });

    const text = (await result.text).trim();
    if (!text) throw new Error("The recommendation was empty. Please try again.");
    return { recommendation: text, runId: runIdFetch.getRunId() };
  } catch (error) {
    throw new Error(getSafeGatewayError(error));
  }
}