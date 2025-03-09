import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Event } from "@/types/event";
import { Calendar, Clock, MapPin, Users } from "lucide-react";


export const EventCard: React.FC<{ event: Event }> = ({ event }) => {
    return (
        <Card className="h-full overflow-hidden transition-all hover:shadow-md">
            <div className="relative overflow-hidden">
                <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="w-full h-48 object-cover transition-transform hover:scale-105 duration-300"
                />
                <Badge
                    className="absolute top-2 right-2 bg-green-600 hover:bg-green-700"
                    variant="secondary"
                >
                    {event.price}
                </Badge>
            </div>
            <CardContent className="p-4">
                <div className="mb-2">
                    <Badge variant="outline" className="text-xs text-gray-600">
                        {event.category === "music" && "Musique"}
                        {event.category === "business" && "Business"}
                        {event.category === "arts" && "Arts & Culture"}
                        {event.category === "sports" && "Sports"}
                        {event.category === "food" && "Gastronomie"}
                    </Badge>
                </div>
                <h3 className="text-lg font-semibold mb-2 line-clamp-1">{event.title}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{event.description}</p>
                <div className="flex items-center text-sm text-gray-500 mb-1">
                    <Calendar className="h-4 w-4 mr-2 text-green-600" />
                    <span>{event.date}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-1">
                    <Clock className="h-4 w-4 mr-2 text-green-600" />
                    <span>{event.time}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-2 text-green-600" />
                    <span>{event.location}</span>
                </div>
            </CardContent>
            <CardFooter className="px-4 py-3 bg-gray-50 flex justify-between items-center">
                <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-1 text-gray-500" />
                    <span>{event.attendees} participants</span>
                </div>
                <Button variant="outline" size="sm" className="border-green-600 text-green-600 hover:bg-green-50">
                    Voir
                </Button>
            </CardFooter>
        </Card>
    );
};
