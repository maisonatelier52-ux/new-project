import OrinoxPage from "@/components/OrinoxPage";
import Image from "next/image";
import orinox from '../../../public/data/orinox.json'


export default function Future() {
  return (
   <OrinoxPage data={orinox[2]}/>
  );
}
4