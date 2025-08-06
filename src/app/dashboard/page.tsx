"use client";

import { useQuery } from "@tanstack/react-query";
import CardView from "./components/CardView";
import FilterForm from "./components/FilterForm";
import Header from "./components/Header/Header";
import NavigationTabs from "./components/Tabs/Tabs";
import { Suspense, useState } from "react";
import { getCitizens } from "@/services/api/citizens";

import Pagination from "@/components/Pagination";
import { FilterParamsProps } from "./types";
import { TabKey } from "./components/Tabs/types";
import TableView from "./components/TableView/TableView";

const DashboardPage = () => {
  const [page, setPage] = useState(1);
  const [activeTab, setActiveTab] = useState<TabKey>("cards");

  const [filterParams, setFilterParams] = useState<FilterParamsProps>({
    name: "",
    gender: "",
    status: "",
  });

  const { data, isLoading } = useQuery({
    queryKey: ["FETCH_CITIZENS", filterParams, page],
    queryFn: async () => {
      const params = {
        ...filterParams,
        gender: filterParams.gender === "all" ? "" : filterParams.gender,
        page,
      };
      const response = await getCitizens(params);

      return response.data;
    },
  });

  const totalPages = data?.info?.pages || 0;

  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-4">
        <FilterForm setFilterValue={setFilterParams} />
        <NavigationTabs
          activeTab={activeTab}
          setActiveTab={(value) => {
            setActiveTab(value as TabKey);
          }}
        />
        <Suspense>
          {activeTab === "cards" ? (
            <CardView citizens={data?.results || []} isLoading={isLoading} />
          ) : (
            <TableView citizens={data?.results || []} isLoading={isLoading} />
          )}
        </Suspense>
        <div>
          {totalPages > 0 && (
            <div className="flex items-center justify-center mt-8">
              <Pagination
                currentPage={page}
                onChangePage={(value) => {
                  setPage(value);
                }}
                totalPage={data?.info?.pages || 0}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
