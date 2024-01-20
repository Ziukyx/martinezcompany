import { ContactoNavbar } from "@/Components/español/ContactoNavbar";
import Footer from "@/Components/español/Footer";


export default function ContactoLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section className='font-aeonik dark:font-normal font-semibold dark:bg-slate-950 bg-white'>
        <nav></nav>
        <ContactoNavbar />
        {children}
        <Footer />
      </section>
    )
  }