import Home from "@/components/client-page/landing-page"
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Youth Leadership Programs in Nigeria | Mikaelson Initiative",
  description: "Structured youth leadership and personal development programs equipping African students with discipline, innovation skills, and accountability systems.",
  
};

export default function LandingPage(){
  return(
    <>
      <Home />
    </>
  )
}