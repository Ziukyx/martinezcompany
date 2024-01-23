import FooterCat from "@/Components/catala/FooterCat";
import { NavbarCat } from "@/Components/catala/NavbarCat";

export const metadata = {
  title: 'Martínez & Company Management & Intermediation',
  description: 'Captadors de subvencions i licitacions públiques.',
}
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