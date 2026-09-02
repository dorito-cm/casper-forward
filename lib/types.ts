export const teamStatuses = ["BUILDING", "TESTNET", "MAINNET PREP", "LIVE"] as const;

export type TeamStatus = (typeof teamStatuses)[number];

export type Team = {
  name: string;
  slug: string;
  logo: string;
  description: string;
  status: TeamStatus;
  latestMilestone: string;
  website: string;
  github: string;
  x: string;
  featured: boolean;
};

export type StyleKey = "a" | "b" | "c" | "d";
