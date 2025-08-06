"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/Tabs";
import { TABS_MENU } from "./constants";
import { NavigationTabsProps } from "./types";

const NavigationTabs = ({ activeTab, setActiveTab }: NavigationTabsProps) => {
  return (
    <Tabs
      className="w-full"
      value={activeTab}
      onValueChange={(value) => {
        setActiveTab(value);
      }}
    >
      <TabsList className="self-center">
        {TABS_MENU.map((menu) => (
          <TabsTrigger
            key={menu.label}
            value={menu.label}
            className="capitalize"
          >
            {<menu.icon />}
            {menu.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

export default NavigationTabs;
