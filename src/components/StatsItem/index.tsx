import type { ReactNode } from "react";
import { StatsItemContainer } from "./styles";

interface StatsItemProps {
  children: ReactNode;
}

export function StatsItem({children}: StatsItemProps) {
  return (<StatsItemContainer>{children}</StatsItemContainer>)
}