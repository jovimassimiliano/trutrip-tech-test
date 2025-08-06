import { CitizenData } from "@/services/api/citizens/types";

export type CitizenDetailProps = {
  citizen: CitizenData;
  onClose: VoidFunction;
};
