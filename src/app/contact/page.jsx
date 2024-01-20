import GradientDivider from "@/Components/GradientDivider";
import ScrollProgress from "@/Components/ScrollProgress";
import Contact from "@/Components/english/Contact";
import Quote from "@/Components/english/Quote";
import VerticalNavbar from "@/Components/english/VerticalNavbar";
import WorkWithUs from "@/Components/english/WorkWithUs";
import WorkWithUs2 from "@/Components/english/WorkWithUs2";
import { WorkWithUs3 } from "@/Components/english/WorkWithUs3";


export default function Page() {
    return <div className="bg-white dark:bg-slate-950">
        <VerticalNavbar />
        <ScrollProgress />
        <Quote />        
        <GradientDivider className="h-px lg:h-[1.5px] dark:h-px"/>
        <Contact />
        <GradientDivider className="h-px lg:h-[1.5px] dark:h-px"/>
        <WorkWithUs />
        <GradientDivider className="h-px lg:h-[1.5px] dark:h-px"/>
        <WorkWithUs2 />
        <GradientDivider className="h-px lg:h-[1.5px] dark:h-px"/>
        <WorkWithUs3 />
        <GradientDivider className="h-px lg:h-[1.5px] dark:h-px"/>
    </div>
  }