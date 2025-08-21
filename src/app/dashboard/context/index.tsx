"use client";

import { CitizenData } from "@/services/api/citizens/types";
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

const defaultState = {
  favorites: [],
  addFavorite: () => null,
  removeFavorite: () => null,
};

type ContextValue = {
  favorites: CitizenData[];
  addFavorite: (value: CitizenData) => void;
  removeFavorite: (value: number) => void;
};

type ContextActions = {
  addFavorite: (value: CitizenData) => void;
  removeFavorite: (value: number) => void;
};

const DashboardContext = createContext<ContextValue & ContextActions>(
  defaultState,
);

const DashboardProvider = ({ children }: PropsWithChildren) => {
  const [favorites, setFavorites] = useState<CitizenData[]>(
    defaultState.favorites,
  );

  const addFavorite = useCallback((citizen: CitizenData) => {
    setFavorites((prev) => [...prev, citizen]);
  }, []);

  const removeFavorite = useCallback((citizenId: number) => {
    setFavorites((prev) => prev.filter((citizen) => citizen.id !== citizenId));
  }, []);

  const providerValue = useMemo(() => {
    return favorites;
  }, [favorites]);

  return (
    <DashboardContext
      value={{ favorites: providerValue, addFavorite, removeFavorite }}
    >
      {children}
    </DashboardContext>
  );
};

const useDashboardContext = () => {
  const context = useContext(DashboardContext);

  if (!context) {
    throw new Error(
      "useDashboardContext must be used within a DashboardProvider",
    );
  }

  return context;
};

export { DashboardProvider, useDashboardContext };
