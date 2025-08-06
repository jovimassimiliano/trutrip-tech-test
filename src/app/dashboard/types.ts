import { GetCitizensParams } from "@/services/api/citizens/types";

export type FilterParamsProps = Omit<GetCitizensParams, "page">;
