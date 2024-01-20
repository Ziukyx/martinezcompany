import GradientDivider from "@/Components/GradientDivider";
import ScrollProgress from "@/Components/ScrollProgress";
import Cometes from "@/Components/catala/Cometes";
import ContacteCat from "@/Components/catala/Contacte";
import TreballiNosaltres from "@/Components/catala/TreballiNosaltres";
import TreballiNosaltres2 from "@/Components/catala/TreballiNosaltres2";
import { TreballiNosaltres3 } from "@/Components/catala/TreballiNosaltres3";
import VerticalNavbarCat from "@/Components/catala/VerticalNavbarCat";

export default function Page() {
    return <div className="bg-white dark:bg-slate-950">
        <VerticalNavbarCat />
        <ScrollProgress />
        <Cometes />        
        <GradientDivider className="h-px lg:h-[1.5px] dark:h-px"/>
        <ContacteCat />
        <GradientDivider className="h-px lg:h-[1.5px] dark:h-px"/>
        <TreballiNosaltres />
        <GradientDivider className="h-px lg:h-[1.5px] dark:h-px"/>
        <TreballiNosaltres2 />
        <GradientDivider className="h-px lg:h-[1.5px] dark:h-px"/>
        <TreballiNosaltres3 />
        <GradientDivider className="h-px lg:h-[1.5px] dark:h-px"/>
    </div>
  }