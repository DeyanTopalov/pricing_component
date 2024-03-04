import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const PlanMaster = () => {
  return (
    <Card className=" grid max-w-[18.75rem] place-content-center rounded-xl bg-white  md:max-w-full">
      <CardHeader>
        <CardTitle className="text-clr-gray-blue-600  mb-4 text-lg font-bold">
          Master
        </CardTitle>
        <CardDescription className="text-clr-gray-blue-800 mb-10 flex items-center text-[2.5rem] font-bold">
          $<span className=" text-7xl font-bold">39.99</span>
        </CardDescription>
      </CardHeader>

      <CardContent className="w-full">
        <ul className="text-clr-gray-blue-600  font-bold">
          <li className="border-clr-gray-blue-200 border-t-2 py-3">
            2 TB Storage
          </li>
          <li className="border-clr-gray-blue-200 border-y-2 py-3">
            10 Users Allowed
          </li>
          <li className="border-clr-gray-blue-200 border-b-2 py-3">
            Send up to 20 GB
          </li>
        </ul>
      </CardContent>
      <CardFooter className="flex justify-center px-0">
        <button
          className="from-start-clr to-end-clr hover:bg-inherit-200 hover:text-clr-gray-blue-800 hover:border-end-clr focus:bg-inherit-200 focus:text-clr-gray-blue-800 focus:border-end-clr h-full w-full cursor-pointer  overflow-hidden rounded-lg border-2 border-white bg-gradient-to-r py-2 text-white transition-all
        duration-300 ease-out hover:bg-none
        focus:bg-none
        "
        >
          <span className="font-bold uppercase">Learn More</span>
        </button>
      </CardFooter>
    </Card>
  );
};

export default PlanMaster;
