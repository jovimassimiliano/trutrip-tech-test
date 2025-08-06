import { Dispatch, SetStateAction } from "react";
import { FilterParamsProps } from "../../types";

export type FilterFormProps = {
  setFilterValue: Dispatch<SetStateAction<FilterParamsProps>>;
};
