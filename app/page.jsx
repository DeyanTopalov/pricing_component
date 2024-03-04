import PlanBasic from "@components/plan_basic";
import PlanMaster from "@components/plan_master";
import PlanProfessional from "@components/plan_pro";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <Carousel className="max-w-[18.75rem] md:max-w-[21.55rem]">
      <CarouselContent>
        <CarouselItem className="basis-full">
          <PlanBasic />
        </CarouselItem>
        <CarouselItem>
          <PlanProfessional />
        </CarouselItem>
        <CarouselItem>
          <PlanMaster />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="-left-9 md:-left-10" />
      <CarouselNext className="-right-9 md:-right-10" />
    </Carousel>
  );
}
