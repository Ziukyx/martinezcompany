import FooterCat from "@/Components/catala/FooterCat";
import { NavbarCat } from "@/Components/catala/NavbarCat";

export default function CatalaLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section className='font-aeonik dark:font-normal font-semibold dark:bg-slate-950 bg-white'>
        <NavbarCat />
        <nav></nav>
        {children}
        <FooterCat />
      </section>
    )
  }