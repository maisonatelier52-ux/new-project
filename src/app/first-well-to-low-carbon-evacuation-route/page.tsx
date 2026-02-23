import OrinoxPage from "@/components/OrinoxPage";
import Image from "next/image";
import orinox from '../../../public/data/orinox.json'


export default function IntegratedProposition01() {
  return (
   <OrinoxPage data={orinox[0]}/>
  );
}
4