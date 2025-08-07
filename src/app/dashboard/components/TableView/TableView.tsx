import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/Table";
import { TABLE_HEADER } from "./constants";
import { TableViewProps } from "./types";
import Badge from "@/components/Badge";
import Skeleton from "@/components/Skeleton";
import { useState } from "react";
import { CitizenData } from "@/services/api/citizens/types";
import CitizenDetail from "../CardView/components/CitizenDetail";
import EmptySearch from "../EmptySearch";

const TableView = ({ citizens, isLoading }: TableViewProps) => {
  const [selectedCitizen, setSelectedCitizen] = useState<
    CitizenData | undefined
  >(undefined);

  if (isLoading) {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            {TABLE_HEADER.map((header) => (
              <TableHead key={header} className="capitalize">
                <Skeleton className="h-4 w-1/3" />
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {[...Array(12)].map((_, index) => (
            <TableRow key={index}>
              {[...Array(4)].map((_, idx) => (
                <TableCell key={idx}>
                  <Skeleton className="h-4 w-full" />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  } else if (citizens.length === 0) return <EmptySearch />;

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            {TABLE_HEADER.map((header) => (
              <TableHead key={header} className="capitalize">
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {citizens.map((citizen) => (
            <TableRow
              className="cursor-pointer"
              key={citizen.id}
              onClick={() => {
                setSelectedCitizen(citizen);
              }}
            >
              <TableCell>{citizen.name}</TableCell>
              <TableCell>
                <Badge
                  variant={citizen.status === "Alive" ? "success" : "danger"}
                >
                  {citizen.status}
                </Badge>
              </TableCell>
              <TableCell>{citizen.gender}</TableCell>
              <TableCell>{citizen.location.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {selectedCitizen && (
        <CitizenDetail
          citizen={selectedCitizen}
          onClose={() => {
            setSelectedCitizen(undefined);
          }}
        />
      )}
    </>
  );
};

export default TableView;
