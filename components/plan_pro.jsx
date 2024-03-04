import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const PlanProfessional = () => {
  return (
    <Card className=" from-start-clr to-end-clr grid max-w-[18.75rem] place-content-center rounded-xl bg-gradient-to-br  md:max-w-full">
      <CardHeader>
        <CardTitle className="mb-4  text-lg font-bold text-white">
          Professional
        </CardTitle>
        <CardDescription className="mb-10 flex items-center text-[2.5rem] font-bold text-white">
          $<span className=" text-7xl font-bold">24.99</span>
        </CardDescription>
      </CardHeader>

      <CardContent className="w-full">
        <ul className="font-bold text-white">
          <li className="border-t-[1px] border-violet-300 py-3">
            1 TB Storage
          </li>
          <li className="border-y-[1px] border-violet-300 py-3">
            5 Users Allowed
          </li>
          <li className="border-b-[1px] border-violet-300 py-3">
            Send up to 10 GB
          </li>
        </ul>
      </CardContent>
      <CardFooter className="flex justify-center px-0">
        <button
          className=" h-full w-full cursor-pointer overflow-hidden rounded-lg border-2 border-transparent bg-white py-2  text-indigo-600 transition-all duration-300 ease-out hover:border-white hover:bg-inherit hover:bg-none
        hover:text-white focus:border-white focus:bg-none
        focus:text-white
        "
        >
          <span className="font-bold uppercase">Learn More</span>
        </button>
      </CardFooter>
    </Card>
  );
};

export default PlanProfessional;
