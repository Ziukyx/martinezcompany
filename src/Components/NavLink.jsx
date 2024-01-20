import Link from 'next/link'

export function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-block font-display rounded-lg px-2 py-1 text-ml text-slate-950 dark:text-white hover:text-gray-600"
    >
      {children}
    </Link>
  )
}
