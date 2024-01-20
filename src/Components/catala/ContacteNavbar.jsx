'use client' 
import React from "react"
import { Popover, Transition } from "@headlessui/react" 
import { Fragment } from "react" 
import Logo from '../../images/logovectorizado.svg' 
import Image from 'next/image' 
import { Container } from "../Container" 
import { NavLink } from "../NavLink" 
import LogoColor from '../../Images/LogoVecColor.svg' 
import { MobileNavIcon, MobileNavLink } from "../español/NavbarEsp"
import { LanguageMenuContacto } from "../LanguageMenu"
import SwitchToggle from "../SwitchToggle"

 
//Componente de React que representa la interfaz de navegación para el sitio web, 
// específicamente diseñada para la visualización en dispositivos móviles. 
 
function MobileNavigation() { 
  return ( 
    <Popover> 
      <Popover.Button 
        className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none" 
        aria-label="Toggle Navigation" 
      > 
        {({ open }) => <MobileNavIcon open={open} />} 
      </Popover.Button> 
      <Transition.Root> 
        <Transition.Child 
          as={Fragment} 
          enter="duration-150 ease-out" 
          enterFrom="opacity-0" 
          enterTo="opacity-100" 
          leave="duration-150 ease-in" 
          leaveFrom="opacity-100" 
          leaveTo="opacity-0" 
        > 
          <Popover.Overlay className="fixed inset-0 bg-white/50 dark:bg-slate-300/50" /> 
        </Transition.Child> 
        <Transition.Child 
          as={Fragment} 
          enter="duration-150 ease-out" 
          enterFrom="opacity-0 scale-95" 
          enterTo="opacity-100 scale-100" 
          leave="duration-100 ease-in" 
          leaveFrom="opacity-100 scale-100" 
          leaveTo="opacity-0 scale-95" 
        > 
          <Popover.Panel 
            as="div" 
            className="absolute inset-x-0 top-full mt-4 flex flex-col content-center rounded-2xl from-slate-300 to-slate-100 dark:bg-slate-900 bg-gradient-to-t dark:from-slate-950 dark:to-blue-950 p-4 text-lg tracking-tight text-slate-950 dark:text-white" 
          > 
            <h1 href="#features" className="block w-full p-2 text-center">Mapa web</h1> 
            <hr className="m-2 border-blue-950 dark:border-slate-300/40" /> 
            <div className="flex flex-row place-items-center hover:text-pink-500 max-w-[150px] mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" className=''>
                <path fill="currentColor" d="m19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25zm0 6l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25zm-7.5-5.5L9 4L6.5 9.5L1 12l5.5 2.5L9 20l2.5-5.5L17 12zm-1.51 3.49L9 15.17l-.99-2.18L5.83 12l2.18-.99L9 8.83l.99 2.18l2.18.99z"/>
              </svg>
              <MobileNavLink href="/catala" className="">Inici</MobileNavLink>
            </div>
            <div className="flex flex-row place-items-center hover:text-cyan-400 max-w-[150px] mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.7em" height="1.7em" viewBox="0 0 24 24" className=''>
                <circle cx="7" cy="14" r="3" fill="currentColor"/>
                <circle cx="11" cy="6" r="3" fill="currentColor"/>
                <circle cx="16.6" cy="17.6" r="3" fill="currentColor"/>
              </svg>
              <MobileNavLink href="/catala/#introduccio" className="">Introducció</MobileNavLink> 
            </div>  
            <div className="flex flex-row place-items-center hover:text-green-400 max-w-[150px] mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" className=''>
                <path fill="currentColor" d="M18.7 12.4a6.06 6.06 0 0 0-.86-.4c.29-.11.58-.24.86-.4a6.012 6.012 0 0 0 3-5.19a6.007 6.007 0 0 0-6 0c-.28.16-.54.35-.78.54c.05-.31.08-.63.08-.95c0-2.22-1.21-4.15-3-5.19C10.21 1.85 9 3.78 9 6c0 .32.03.64.08.95c-.24-.2-.5-.39-.78-.55a6.008 6.008 0 0 0-6 0a5.97 5.97 0 0 0 3 5.19c.28.16.57.29.86.4c-.29.11-.58.24-.86.4a6.012 6.012 0 0 0-3 5.19a6.007 6.007 0 0 0 6 0c.28-.16.54-.35.78-.54c-.05.32-.08.64-.08.96c0 2.22 1.21 4.15 3 5.19c1.79-1.04 3-2.97 3-5.19c0-.32-.03-.64-.08-.95c.24.2.5.38.78.54a6.008 6.008 0 0 0 6 0a6.012 6.012 0 0 0-3-5.19M12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4"/>
              </svg>
              <MobileNavLink href="/catala/#missio" className="">Missió</MobileNavLink> 
            </div>
            <div className="flex flex-row place-items-center hover:text-yellow-300 max-w-[150px] mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.7em" height="1.7em" viewBox="0 0 24 24" className=''>
                <path fill="currentColor" d="M12.01 2C6.49 2 2.02 6.48 2.02 12s4.47 10 9.99 10c5.53 0 10.01-4.48 10.01-10S17.54 2 12.01 2m.01 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8m3.5-9c.83 0 1.5-.67 1.5-1.5S16.35 8 15.52 8s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5m-7 0c.83 0 1.5-.67 1.5-1.5S9.35 8 8.52 8s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5m3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.91c.8 2.04 2.78 3.5 5.11 3.5"/>
              </svg>
              <MobileNavLink href="/catala/#nostresvalors" className="">Valors</MobileNavLink>
            </div>
            <div className="flex flex-row place-items-center hover:text-red-500 max-w-[150px] mx-auto">
              <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px" className='hover:text-red-500'>    
                <path d="M 20 2 A 2 2 0 0 0 18.035156 3.625 L 14.46875 4.6445312 A 2 2 0 0 0 13 4 A 2 2 0 0 0 11 6 A 2 2 0 0 0 12.994141 8 L 16.398438 14.806641 A 2 2 0 0 0 16.339844 14.884766 L 11.880859 14.328125 A 2 2 0 0 0 10 13 A 2 2 0 0 0 8 15 A 2 2 0 0 0 8.0527344 15.451172 L 4.7949219 18.166016 A 2 2 0 0 0 4 18 A 2 2 0 0 0 2 20 A 2 2 0 0 0 4 22 A 2 2 0 0 0 6 20 A 2 2 0 0 0 5.9472656 19.548828 L 9.2050781 16.833984 A 2 2 0 0 0 10 17 A 2 2 0 0 0 11.660156 16.115234 L 16.119141 16.671875 A 2 2 0 0 0 18 18 A 2 2 0 0 0 20 16 A 2 2 0 0 0 18.005859 14 L 14.601562 7.1933594 A 2 2 0 0 0 14.964844 6.375 L 18.53125 5.3554688 A 2 2 0 0 0 20 6 A 2 2 0 0 0 22 4 A 2 2 0 0 0 20 2 z"/>
              </svg>
              <MobileNavLink href="/catala/#mapaconceptual" className="">Full de ruta</MobileNavLink>
            </div>
            <div className="flex flex-row place-items-center hover:text-orange-500 max-w-[150px] mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 24 24" className=''>
                <g fill="none" fillRule="evenodd"><path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M5 16c.748 0 1.463.226 2.014.64c.552.413.986 1.06.986 1.86s-.434 1.447-.986 1.86c-.55.414-1.266.64-2.014.64c-.748 0-1.463-.226-2.014-.64C2.434 19.948 2 19.3 2 18.5s.434-1.447.986-1.86C3.536 16.225 4.252 16 5 16m0 2c-.357 0-.641.11-.814.24c-.123.092-.165.17-.18.218L4 18.5l.007.042c.014.048.056.126.179.219c.173.13.457.239.814.239c.357 0 .641-.11.814-.24c.123-.092.165-.17.18-.218L6 18.5l-.007-.042c-.014-.048-.056-.126-.179-.219C5.641 18.11 5.357 18 5 18m7.923-15.115c1.487 0 2.803.727 3.613 1.844a4.462 4.462 0 0 1 4.309 7.344a4.462 4.462 0 0 1-6.296 3.956a4.462 4.462 0 0 1-6.87-1.707A4.462 4.462 0 0 1 8.725 5.83a4.462 4.462 0 0 1 4.197-2.945m0 2a2.462 2.462 0 0 0-2.427 2.05a1 1 0 0 1-.888.83l-.146.004a2.462 2.462 0 0 0-.716 4.818a1 1 0 0 1 .667.667a2.463 2.463 0 0 0 4.224.889a1 1 0 0 1 1.333-.166a2.462 2.462 0 0 0 3.867-2.225a1 1 0 0 1 .333-.832a2.462 2.462 0 0 0-2.665-4.078a1 1 0 0 1-1.333-.5a2.462 2.462 0 0 0-2.249-1.457"/></g></svg>
              <MobileNavLink href="/contacte" className="">Contacte</MobileNavLink>
            </div>
            <div className="flex flex-row place-items-center hover:text-violet-500 max-w-[240px] mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" className='-mt-1'>
                <path fill="currentColor" d="M1 13.75v-2h4v2zM6.35 8.5L3.5 5.675l1.425-1.4L7.75 7.1zM6 19q-.525 0-.887-.363t-.363-.887q0-.525.363-.888T6 16.5q.525 0 .888.363t.362.887q0 .525-.363.888T6 19m1-5.25v-1q0-2.075 1.463-3.537T12 7.75q2.075 0 3.538 1.463T17 12.75v1h-2v-1q0-1.25-.875-2.125T12 9.75q-1.25 0-2.125.875T9 12.75v1zM9 23q-.525 0-.888-.363t-.362-.887q0-.525.363-.888T9 20.5q.525 0 .888.363t.362.887q0 .525-.363.888T9 23m3-4q-.525 0-.888-.363t-.362-.887q0-.525.363-.888T12 16.5q.525 0 .888.363t.362.887q0 .525-.363.888T12 19M11 5.75v-4h2v4zM15 23q-.525 0-.888-.363t-.362-.887q0-.525.363-.888T15 20.5q.525 0 .888.363t.362.887q0 .525-.363.888T15 23m2.65-14.5l-1.425-1.4l2.85-2.825l1.4 1.4zM18 19q-.525 0-.888-.363t-.362-.887q0-.525.363-.888T18 16.5q.525 0 .888.363t.362.887q0 .525-.363.888T18 19m1-5.25v-2h4v2zm-7 0"/>
              </svg>
              <MobileNavLink href="/contacte#traballinosaltres" className="">Treballi amb nosaltres</MobileNavLink>
            </div>
          </Popover.Panel> 
        </Transition.Child> 
      </Transition.Root> 
    </Popover> 
  ) 
} 
 
export function ContacteNavbar() {  
  return (  
      <header className="sticky top-0 z-50 py-8 xl:py-10 l:-mb-10 xl:px-8 sm:-mb-16 xl:-mb-16 xxl:-mb-10 bg-white dark:bg-slate-950 box-shadow-custom ">  
      <Container>  
          <nav className="relative z-50 flex justify-between text-slate-950 dark:text-white">  
            <div className="flex items-center md:gap-x-12 -mt-10 -mb-10">  
              <NavLink href="/" aria-label="Home">  
              <Image  
                className='hidden dark:block'  
                src={Logo}
                alt=""  
                width={200}  
                height={90}  
                unoptimized  
              />  
              <Image  
                className='dark:hidden mt-2'  
                src={LogoColor}  
                alt=""  
                width={200}  
                height={90}  
                unoptimized  
              />  
              </NavLink>  
            </div>  
            <div className="flex items-center gap-x-5 lg:gap-x-14 justify-center">  
              <div className="hidden lg:block">  
                <NavLink href="#introduccion"></NavLink>  
                <NavLink href="#introduccion"></NavLink>  
                <NavLink href="#mision"></NavLink>  
                <NavLink href="#nuestrosvalores"></NavLink>  
                <NavLink href="#mapaconceptual"></NavLink>  
              </div>  
              <div className="flex flex-row gap-5 lg:mr-7 items-center justify-center">  
                <LanguageMenuContacto /> 
                <SwitchToggle />

              </div>  
              <div className="-mr-1 lg:hidden">   
                <MobileNavigation />
              </div>  
            </div>  
          </nav>  
          </Container>  
      </header>  
  )  
}