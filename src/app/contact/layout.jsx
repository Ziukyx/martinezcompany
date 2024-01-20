import { ContactNavbar } from "@/Components/english/ContactNavbar";
import Footer from "@/Components/english/Footer";

export default function ContactLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section className='font-aeonik dark:font-normal font-semibold dark:bg-slate-950 bg-white'>
        <ContactNavbar />
        <nav></nav>
        {children}
        <Footer />
      </section>
    )
  }