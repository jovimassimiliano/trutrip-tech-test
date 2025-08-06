import { CitizenData } from "@/services/api/citizens/types";

export type TableViewProps = {
  citizens: CitizenData[];
  isLoading: boolean;
};
