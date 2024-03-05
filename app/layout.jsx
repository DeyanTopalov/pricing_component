import { montserrat } from "./ui/fonts";
import "@styles/globals.css";
import BackgroundPatternTop from "@components/bg_pattern_top";
import BackgroundPatternBottom from "@components/bg_pattern_bottom";

export const metadata = {
  title: "Pricing Component",
  description:
    "Frontend Mentor challenge to build a Pracing Component with Toggle Switch",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-clr-gray-blue-200 relative grid h-svh w-svw place-items-center overflow-hidden md:h-screen md:w-full">
        <div className="absolute -right-40 top-0 -z-10  object-cover">
          <BackgroundPatternTop />
        </div>
        <div className="absolute  bottom-0 left-0  -z-10 object-cover">
          <BackgroundPatternBottom />
        </div>
        <main
          className={`${montserrat.className} max-w-[90rem]  px-6 text-center antialiased`}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
