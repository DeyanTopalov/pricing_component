"use client";

import PlanBasic from "@components/plan_basic";
import PlanMaster from "@components/plan_master";
import PlanProfessional from "@components/plan_pro";
import PricingSwitch from "@components/pricing_switch";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { useState } from "react";

const cardsData = [
  { id: 1, monthly: 19.99, annually: 199.99 },
  { id: 2, monthly: 24.99, annually: 249.99 },
  { id: 3, monthly: 39.99, annually: 399.99 },
];
export default function Home() {
  const [checked, setChecked] = useState(true);

  const handleToggle = () => {
    setChecked(!checked);
  };

  const getCardDataById = (id) => {
    return cardsData.find((card) => card.id === id);
  };

  return (
    <>
      <PricingSwitch checked={checked} onToggle={handleToggle} />
      <Carousel className="max-w-[18.75rem] md:max-w-[21.55rem]">
        <CarouselContent>
          <CarouselItem className="basis-full">
            <PlanBasic {...getCardDataById(1)} checked={checked} />
          </CarouselItem>
          <CarouselItem>
            <PlanProfessional {...getCardDataById(2)} checked={checked} />
          </CarouselItem>
          <CarouselItem>
            <PlanMaster {...getCardDataById(3)} checked={checked} />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="-left-9 md:-left-10" />
        <CarouselNext className="-right-9 md:-right-10" />
      </Carousel>
    </>
  );
}
