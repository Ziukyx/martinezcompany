
import "../styles/globals.css"
import { Providers } from './providers'


export const metadata = {
  title: 'Martínez & Company - Captadores de subvenciones y licitaciones públicas.',
  description: 'Nos dedicamos a la captación de subvenciones y licitaciones públicas en Palma de Mallorca.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <link rel="icon" href="/favicon.ico"></link>
      <body className="font-aeonik dark:font-normal font-semibold dark:bg-slate-950 bg-white">
      <Providers>
      {children}
      </Providers>
      </body>
    </html>
  );
}
