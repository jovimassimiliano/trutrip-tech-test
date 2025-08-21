import { Avatar, AvatarFallback, AvatarImage } from "@/components/Avatar";
import Badge from "@/components/Badge";
import { Card, CardContent } from "@/components/Card";
import Heading from "@/components/Typography/Heading";
import Text from "@/components/Typography/Text";
import { MapPin, Star } from "lucide-react";
import { CitizenCardProps } from "./types";
import Button from "@/components/Button";
import { useDashboardContext } from "@/app/dashboard/context";
import { cn } from "@/utils/classname";

const CitizenCard = ({
  name,
  status,
  imageUrl,
  location,
  gender,
  data,
  ...props
}: CitizenCardProps) => {
  const { favorites, addFavorite, removeFavorite } = useDashboardContext();

  const isFavorite = favorites.some((citizen) => citizen.id === data.id);

  const handleAddFavorites = () => {
    if (isFavorite) {
      removeFavorite(data.id);
    } else {
      addFavorite(data);
    }
  };

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
          <Button className="cursor-pointer" onClick={handleAddFavorites}>
            <Star
              className={cn(
                isFavorite ? "fill-amber-300 stroke-amber-300" : "fill-white",
              )}
            />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CitizenCard;
