import { useRef } from "react";
import { EventCard } from "./event-card";
import { Event } from "@/types/event";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Composant de carrousel
export const EventCarousel: React.FC<{ events: Event[] }> = ({ events }) => {
    const carouselRef = useRef<HTMLDivElement>(null);

    const scrollPrev = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -carouselRef.current.offsetWidth, behavior: 'smooth' });
        }
    };

    const scrollNext = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: carouselRef.current.offsetWidth, behavior: 'smooth' });
        }
    };

    return (
        <div className="relative">
            <div
                ref={carouselRef}
                className="flex overflow-x-auto gap-4 py-4 scrollbar-hide scroll-smooth snap-x"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {events.map((event) => (
                    <div
                        key={event.id}
                        className="min-w-[280px] md:min-w-[320px] snap-start"
                    >
                        <EventCard event={event} />
                    </div>
                ))}
            </div>

            <Button
                onClick={scrollPrev}
                variant="outline"
                size="icon"
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white shadow-md border-gray-200 hidden md:flex"
            >
                <ArrowLeft className="h-4 w-4" />
            </Button>

            <Button
                onClick={scrollNext}
                variant="outline"
                size="icon"
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white shadow-md border-gray-200 hidden md:flex"
            >
                <ArrowRight className="h-4 w-4" />
            </Button>
        </div>
    );
};
