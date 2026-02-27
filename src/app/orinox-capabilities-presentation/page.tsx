import OrinoxGenericSlide from "@/components/OrinoxGenericSlide";
import presentationData from "../../../public/data/capabilities_presentation.json";
import Orinox from "@/components/Orinox";

export default function OrinoxCapabilitiesPresentation() {
  return (
    <>
    <Orinox />
      {presentationData.map((slide: any) => (
        <OrinoxGenericSlide key={slide.id} {...slide} />
      ))}
    </>
  );
}
