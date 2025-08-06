import Skeleton from "@/components/Skeleton";
import CitizenCard from "./components/CitizenCard";
import { Card, CardContent } from "@/components/Card";
import { CardViewProps } from "./types";
import { useState } from "react";
import CitizenDetail from "./components/CitizenDetail";
import { CitizenData } from "@/services/api/citizens/types";

const CardView = ({ citizens, isLoading }: CardViewProps) => {
  const [selectedCitizen, setSelectCitizen] = useState<CitizenData | undefined>(
    undefined,
  );

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[...Array(12)].map((_, i) => (
          <Card data-testid={`card-skeleton-${i}`} key={i}>
            <CardContent className="flex space-x-4">
              <Skeleton className="w-16 h-16 rounded-full" />
              <div className="w-full space-y-2">
                {[...Array(3)].map((_, i) => (
                  <Skeleton key={i} className="h-4 w-full" />
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {citizens?.map((citizen, index) => (
        <CitizenCard
          onClick={() => {
            setSelectCitizen(citizen);
          }}
          data-testid={`citizen-card-${index}`}
          key={citizen.id}
          name={citizen.name}
          imageUrl={citizen.image}
          status={citizen.status}
          location={citizen.location.name}
          gender={citizen.gender}
        />
      ))}
      {Boolean(selectedCitizen) && (
        <CitizenDetail
          citizen={selectedCitizen}
          onClose={() => {
            setSelectCitizen(undefined);
          }}
        />
      )}
    </div>
  );
};

export default CardView;
