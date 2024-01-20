import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { LanguageIcon } from '@heroicons/react/20/solid'
import Link from "next/link";


export default function LanguageMenu() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button className="active:ring-0">
          <LanguageIcon className="h-5 w-5 text-blue-950 dark:text-white" strokeWidth={3} aria-hidden="true" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu 
        className="from-slate-300 to-slate-100 shadow-md shadow-slate-100 dark:shadow-black dark:from-slate-950 dark:to-blue-950 bg-gradient-to-t rounded-md py-1 p-1 h-26 w-26 hover:outline-0 hover:ring-0"
      >
        <DropdownItem key="castellano" className="px-4 py-1 text-center text-slate-950 dark:text-white hover:bg-slate-300 hover:ring-0 dark:hover:bg-slate-700 rounded-md">
          <Link href="/">Castellano</Link></DropdownItem>
        <DropdownItem key="Català" className="px-4 py-1 text-center text-slate-950 dark:text-white hover:bg-slate-300 dark:hover:bg-slate-700 rounded-md">
          <Link href="/catala" className="">Català</Link>
        </DropdownItem>
        <DropdownItem key="english" className="px-4 py-1 text-center text-slate-950 dark:text-white hover:bg-slate-300 dark:hover:bg-slate-700 rounded-md">
          <Link href="/english">English</Link>
        </DropdownItem>
      
        </DropdownMenu>
    </Dropdown>
  );
}

export function LanguageMenuContacto() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button className="active:ring-0">
          <LanguageIcon className="h-5 w-5 text-blue-950 dark:text-white" strokeWidth={3} aria-hidden="true" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu 
        className="from-slate-300 to-slate-100 shadow-md shadow-slate-100 dark:shadow-black dark:from-slate-950 dark:to-blue-950 bg-gradient-to-t rounded-md py-1 p-1 h-26 w-26 hover:outline-0 hover:ring-0"
      >
        <DropdownItem key="castellano" className="px-4 py-1 text-center text-slate-950 dark:text-white hover:bg-slate-300 hover:ring-0 dark:hover:bg-slate-700 rounded-md">
          <Link href="/contacto">Castellano</Link></DropdownItem>
        <DropdownItem key="Català" className="px-4 py-1 text-center text-slate-950 dark:text-white hover:bg-slate-300 dark:hover:bg-slate-700 rounded-md">
          <Link href="/contacte" className="">Català</Link>
        </DropdownItem>
        <DropdownItem key="english" className="px-4 py-1 text-center text-slate-950 dark:text-white hover:bg-slate-300 dark:hover:bg-slate-700 rounded-md">
          <Link href="/contact">English</Link>
        </DropdownItem>
      
        </DropdownMenu>
    </Dropdown>
  );
}

