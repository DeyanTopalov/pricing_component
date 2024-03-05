import Image from "next/image";

const BackgroundPatternTop = () => {
  return (
    <Image
      src="/bg-top.svg"
      width={375}
      height={658}
      className=" object-cover"
      alt="background pattern"
    />
  );
};

export default BackgroundPatternTop;
