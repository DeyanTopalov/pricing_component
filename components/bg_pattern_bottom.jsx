import Image from "next/image";

const BackgroundPatternBottom = () => {
  return (
    <Image
      src="/bg-bottom.svg"
      width={353}
      height={304}
      className="hidden object-cover md:block"
      alt="background pattern"
    />
  );
};

export default BackgroundPatternBottom;
