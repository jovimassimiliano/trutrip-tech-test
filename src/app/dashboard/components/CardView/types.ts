import { CitizenData } from "@/services/api/citizens/types";

export type CardViewProps = {
  citizens: CitizenData[];
  isLoading: boolean;
};
