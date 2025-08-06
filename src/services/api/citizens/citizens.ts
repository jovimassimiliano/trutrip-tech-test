import axiosInstance from "@/lib/axios";
import { GetCitizensParams, GetCitizensResponse } from "./types";
import { AxiosResponse } from "axios";

export const getCitizens = async (params: GetCitizensParams) => {
  const response: AxiosResponse<GetCitizensResponse> = await axiosInstance.get(
    "/character",
    {
      params,
    },
  );

  return response;
};
