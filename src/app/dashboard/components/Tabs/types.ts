export type TabKey = "cards" | "table";

export type NavigationTabsProps = {
  activeTab: TabKey;
  setActiveTab: (value: string) => void;
};
