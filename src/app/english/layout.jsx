import ScrollProgress from "@/Components/ScrollProgress";
import Footer from "@/Components/english/Footer";
import { Navbar } from "@/Components/english/Navbar";


export default function EnglishLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section className='font-aeonik bg-white dark:bg-slate-950'>
        <Navbar />
        <ScrollProgress />
        <nav></nav>
        {children}
        <Footer />
      </section>
    )
  }