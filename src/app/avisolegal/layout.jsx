import Footer from "@/Components/español/Footer";
import { NavbarEsp } from "@/Components/español/NavbarEsp";


export default function AvisoLegalLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section className='font-aeonik dark:font-normal font-semibold dark:bg-slate-950 bg-white'>
        <NavbarEsp />
        <nav></nav>
        {children}
        <Footer />
      </section>
    )
  }