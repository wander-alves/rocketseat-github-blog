import type { ReactNode } from "react";
import { StatsListContainer } from "./styles";

interface StatsListProps { 
  children: ReactNode;
}
export function StatsList({ children }: StatsListProps){
  return (<StatsListContainer>{ children }</StatsListContainer>)
}