import { ContacteNavbar } from "@/Components/catala/ContacteNavbar";
import FooterCat from "@/Components/catala/FooterCat";


export default function ContacteLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section className='font-aeonik dark:font-normal font-semibold dark:bg-slate-950 bg-white'>
        <ContacteNavbar />
        <nav></nav>
        {children}
        <FooterCat />
      </section>
    )
  }