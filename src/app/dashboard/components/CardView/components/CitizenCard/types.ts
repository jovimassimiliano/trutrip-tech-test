import { CitizenData } from "@/services/api/citizens/types";

export type CitizenCardProps = {
  [key in keyof Pick<
    CitizenData,
    "name" | "status" | "gender"
  >]: CitizenData[key];
} & { imageUrl: string; location: string; onClick?: VoidFunction };
