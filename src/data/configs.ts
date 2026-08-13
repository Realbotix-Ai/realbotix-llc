import type { RobotConfig } from "@/types/robot";

export const TABLETOP_CONFIG: Omit<RobotConfig, "shopifyHandle"> = {
  id: "tabletop",
  label: "Tabletop",
  degreesOfFreedom: 16,
  startingPrice: 12000,
  depositAmount: 250,
};

export const FULL_BODY_CONFIG: Omit<RobotConfig, "shopifyHandle"> = {
  id: "full-body",
  label: "Full-Body",
  degreesOfFreedom: 38,
  startingPrice: 55000,
  depositAmount: 250,
};
