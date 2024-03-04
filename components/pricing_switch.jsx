"use client";

import { Switch } from "./ui/switch";
import { useState } from "react";

const PricingSwitch = () => {
  const [checked, setChecked] = useState(true);

  return (
    <section className="mb-12 grid w-full place-content-center gap-6">
      <h1 className="text-clr-gray-blue-600  mb-4 text-[2rem] font-bold">
        Our Pricing
      </h1>
      <div className="text-clr-gray-blue-400 flex w-full justify-between space-x-6 text-[15px] font-bold">
        <span>Annualy</span>
        <Switch
          onClick={() => setChecked(!checked)}
          checked={checked}
          id="Annualy-Monthly"
          className=" from-start-clr to-end-clr cursor-pointer data-[state=checked]:bg-gradient-to-r"
        />
        <span>Monthly</span>
      </div>
    </section>
  );
};

export default PricingSwitch;
