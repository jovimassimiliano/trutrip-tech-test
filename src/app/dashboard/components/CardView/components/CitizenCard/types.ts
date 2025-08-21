import { CitizenData } from "@/services/api/citizens/types";

export type CitizenCardProps = {
  [key in keyof Pick<
    CitizenData,
    "name" | "status" | "gender"
  >]: CitizenData[key];
} & {
  data: CitizenData;
  imageUrl: string;
  location: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};
