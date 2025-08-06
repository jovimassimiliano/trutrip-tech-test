import { Avatar, AvatarFallback, AvatarImage } from "@/components/Avatar";
import Badge from "@/components/Badge";
import { Card, CardContent } from "@/components/Card";
import Heading from "@/components/Typography/Heading";
import Text from "@/components/Typography/Text";
import { MapPin } from "lucide-react";
import { CitizenCardProps } from "./types";

const CitizenCard = ({
  name,
  status,
  imageUrl,
  location,
  gender,
  ...props
}: CitizenCardProps) => {
  return (
    <Card
      {...props}
      className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105"
    >
      <CardContent className="flex space-x-4">
        <Avatar className="w-16 h-16">
          <AvatarImage src={imageUrl} />
          <AvatarFallback className="bg-emerald-100 text-emerald-700">
            {name
              ?.split(" ")
              .map((characterName: string) => characterName[0])
              .join("")}
          </AvatarFallback>
        </Avatar>

        <div className="space-y-2 overflow-hidden">
          <Heading data-testid="citizen-name" variant="h4" className="truncate">
            {name}
          </Heading>
          <Badge
            data-testid="citizen-status"
            variant={status === "Alive" ? "success" : "danger"}
          >
            {status}
          </Badge>
          <Text size="small" data-testid="gender">
            {gender}
          </Text>
          <Text
            size="small"
            className="flex items-center"
            data-testid="location"
          >
            <MapPin size={12} />
            {location}
          </Text>
        </div>
      </CardContent>
    </Card>
  );
};

export default CitizenCard;
