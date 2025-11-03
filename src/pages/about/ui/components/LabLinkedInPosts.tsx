import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const linkedInPosts = [
  {
    id: 1,
    embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:share:7389021475778871296?collapsed=1",
  },
  {
    id: 2,
    embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:share:7386469873754841088?collapsed=1",
  },
  {
    id: 3,
    embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:share:7377554968540614656?collapsed=1",
  },
  {
    id: 4,
    embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:share:7377554968540614656?collapsed=1",
  },
  // Add more posts
];

const LabLinkedInPosts = () => {
    const [api, setApi] = useState<CarouselApi>();

    useEffect(() => {
        if (!api) return;

        return () => {
            api.off("select", () => {});
        };
    }, [api]);

    return (
        <Card className="shadow-lg font-roboto" style={{ borderRadius: "2rem", backgroundColor: "#FAFAFA" }}>
            <CardContent className="px-6 md:px-8 py-6">
                <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-6">
                    Latest Updates
                </h2>
                
                <Carousel 
                    setApi={setApi} 
                    className="w-full max-w-7xl mx-auto" 
                    opts={{ 
                        align: "start", 
                        loop: true,
                    }}
                >
                    <CarouselContent className="-ml-4">
                        {linkedInPosts.map((post) => (
                            <CarouselItem key={post.id} className="pl-4 md:basis-1/2 lg:basis-1/2">
                                <div className="relative w-full h-[400px] overflow-hidden rounded-lg">
                                    <iframe
                                        src={post.embedUrl}
                                        className="w-full h-full border-0 rounded-lg"
                                        style={{ overflow: 'hidden' }}
                                        frameBorder="0"
                                        allowFullScreen
                                        title={`LinkedIn post ${post.id}`}
                                        scrolling="no"
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-4 size-10 !bg-white" />
                    <CarouselNext className="right-4 size-10 !bg-white" />
                </Carousel>
            </CardContent>
        </Card>
    );
}

export default LabLinkedInPosts;