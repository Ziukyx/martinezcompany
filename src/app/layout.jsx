
import "../styles/globals.css"
import { Providers } from './providers'


export const metadata = {
  title: 'Martínez & Company Management & Intermediation',
  description: 'Captadores de subvenciones y licitaciones públicas.',
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
