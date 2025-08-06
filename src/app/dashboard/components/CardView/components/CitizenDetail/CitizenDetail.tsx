import Badge from "@/components/Badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/Dialog";
import Text from "@/components/Typography/Text";
import Image from "next/image";
import { CitizenDetailProps } from "./types";

const CitizenDetail = ({ citizen, onClose }: CitizenDetailProps) => {
  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{citizen.name}</DialogTitle>
        </DialogHeader>
        <div className="flex space-x-4">
          <Image
            src={citizen.image}
            width={192}
            height={192}
            alt={citizen.name}
            className="object-cover"
          />
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Text weight="bold">Status</Text>
              <Badge
                variant={citizen.status === "Alive" ? "success" : "danger"}
              >
                {citizen.status}
              </Badge>
            </div>
            <div>
              <Text weight="bold">Gender</Text>
              <Text>{citizen.gender}</Text>
            </div>
            <div>
              <Text weight="bold">Origin</Text>
              <Text>{citizen.origin.name}</Text>
            </div>
            <div>
              <Text weight="bold">Domicile</Text>
              <Text>{citizen.location.name}</Text>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CitizenDetail;
