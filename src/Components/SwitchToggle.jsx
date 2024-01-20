import { useState, useEffect } from 'react'
import { Switch } from '@headlessui/react'
import { useTheme } from 'next-themes'

function SunIcon(props) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path d="M12.5 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
      <path
        strokeLinecap="round"
        d="M10 5.5v-1M13.182 6.818l.707-.707M14.5 10h1M13.182 13.182l.707.707M10 15.5v-1M6.11 13.889l.708-.707M4.5 10h1M6.11 6.111l.708.707"
      />
    </svg>
  )
}

function MoonIcon(props) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path d="M15.224 11.724a5.5 5.5 0 0 1-6.949-6.949 5.5 5.5 0 1 0 6.949 6.949Z" />
    </svg>
  )
}

export default function SwitchToggle() {
  let { resolvedTheme, setTheme } = useTheme()
  let otherTheme = resolvedTheme === 'dark' ? 'light' : 'dark'
  let [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])


  return (
    <div className='flex flex-row place-items-center'>
    <SunIcon className="h-8 w-8 dark:stroke-white stroke-blue-950"/>
    <div className='w-[42px] mt-1'>
      <Switch
        onClick={() => setTheme(otherTheme)}
        aria-label={mounted ? `Switch to ${otherTheme} theme `: 'Toggle theme'}
        className=' dark:bg-blue-400 bg-blue-950 xxs:mr-2 lg:mr-5  relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none'
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className=' dark:translate-x-5 translate-x-0 pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
        />
      </Switch></div>
      <MoonIcon className="h-7 w-7 dark:stroke-white stroke-blue-950"/>
    </div>
  )
}