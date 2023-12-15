import { Plan, PlanFeature } from "@/app/lib/types";

export const plans: Plan[] = [
  {
    title: "Medium Member",
    price: "$5/month or $60/year",
    features: [
      { text: "Read member-only stories" },
      { text: "Support writers you read most" },
      { text: "Earn money for your writing" },
      { text: "Listen to audio narrations" },
      { text: "Read offline with the Medium app" },
      { text: "Access our Mastodon community" },
      { text: "Connect your custom domain" },
    ],
    highlighted: false,
  },
  {
    title: "Friend of Medium",
    price: "$15/month or $150/year",
    features: [
      { text: "All Medium member benefits" },
      { text: "PLUS" },
      { text: "Writers earn 4x when you read their stories" },
      {
        text: "Share member-only stories with anyone and drive more earnings for writers",
      },
    ],
    highlighted: true,
  },
];
