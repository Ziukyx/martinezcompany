import GradientDivider from "@/Components/GradientDivider";
import ScrollProgress from "@/Components/ScrollProgress";
import Comillas from "@/Components/español/Comillas";
import Contacto from "@/Components/español/Contacto";
import TrabajaNosotros from "@/Components/español/TrabajaNosotros";
import TrabajaNosotros2 from "@/Components/español/TrabajaNosotros2";
import { TrabajaNosotros3 } from "@/Components/español/TrabajaNosotros3";
import VerticalNavbar from "@/Components/español/VerticalNavbar";


export default function Page() {
    return <div className="bg-white dark:bg-slate-950">
        <Comillas />
        <VerticalNavbar />
        <ScrollProgress />
        <GradientDivider className="h-px lg:h-[1.5px] dark:h-px"/>
        <Contacto />
        <GradientDivider className="h-px lg:h-[1.5px] dark:h-px"/>
        <TrabajaNosotros />
        <GradientDivider className="h-px lg:h-[1.5px] dark:h-px"/>
        <TrabajaNosotros2 />
        <GradientDivider className="h-px lg:h-[1.5px] dark:h-px"/>
        <TrabajaNosotros3 />
        <GradientDivider className="h-px lg:h-[1.5px] dark:h-px"/>
    </div>
  }