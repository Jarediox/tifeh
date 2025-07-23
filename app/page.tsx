import Image from "next/image";
import myImage from "../public/pngguru 2.png"
import layoutImage from "../public/Rectangle 12.png";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Home() {
  return (
    <div>
      <div className="w-screen h-screen bg-linear-[45deg,#ED4690_20%,#5522CC_60%]">
        {/* <div className="w-[80%] pt-20 m-auto flex justify-between">
          <div>
            <Image src={myImage} alt="hh" />
          </div>
          <div>
              <h1>SBS MTV The Kpop Show Ticket  Package</h1>
              <p>Look no further! Our SBS The Show tickets are the simplest way for you to experience a live Kpop recording.</p>
              <Button>Get Ticket</Button>
              <Button>Learn more</Button>
          </div>
        </div> */}
        <div className="w-[80%] pt-20 m-auto ">
          <Carousel >
          <CarouselContent>
            <CarouselItem>
               <Image src={myImage} alt="hh" className="m-auto" />
            </CarouselItem>
            <CarouselItem>
               <Image src={myImage} alt="hh" className="m-auto" />
            </CarouselItem>
            <CarouselItem> <Image src={myImage} alt="hh" className="m-auto" /></CarouselItem>
          </CarouselContent> 
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        </div>
        

      </div>
    </div>
  );
}
