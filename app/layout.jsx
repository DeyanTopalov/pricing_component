import { montserrat } from "./ui/fonts";
import "@styles/globals.css";

export const metadata = {
  title: "Pricing Component",
  description:
    "Frontend Mentor challenge to build a Pracing Component with Toggle Switch",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-clr-gray-blue-200 grid h-svh place-items-center md:h-screen">
        <main
          className={`${montserrat.className} max-w-[90rem] px-6 text-center antialiased`}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
