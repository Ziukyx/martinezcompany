import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import Link from "next/link";


export default function LanguageMenu() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button aria-label="Idiomas" className="active:ring-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20" className="h-5 w-5 text-blue-950 dark:text-white">
            <g fill="currentColor">
              <path d="M7.75 2.75a.75.75 0 0 0-1.5 0v1.258a32.987 32.987 0 0 0-3.599.278a.75.75 0 1 0 .198 1.487A31.545 31.545 0 0 1 8.7 5.545A19.381 19.381 0 0 1 7 9.56a19.418 19.418 0 0 1-1.002-2.05a.75.75 0 0 0-1.384.577a20.935 20.935 0 0 0 1.492 2.91a19.613 19.613 0 0 1-3.828 4.154a.75.75 0 1 0 .945 1.164A21.116 21.116 0 0 0 7 12.331c.095.132.192.262.29.391a.75.75 0 0 0 1.194-.91a18.97 18.97 0 0 1-.59-.815a20.888 20.888 0 0 0 2.333-5.332c.31.031.618.068.924.108a.75.75 0 0 0 .198-1.487a32.832 32.832 0 0 0-3.599-.278z"/>
              <path fillRule="evenodd" d="M13 8a.75.75 0 0 1 .671.415l4.25 8.5a.75.75 0 1 1-1.342.67L15.787 16h-5.573l-.793 1.585a.75.75 0 1 1-1.342-.67l4.25-8.5A.75.75 0 0 1 13 8m2.037 6.5L13 10.427L10.964 14.5z" clipRule="evenodd"/>
            </g>
          </svg>
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
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20" className="h-5 w-5 text-blue-950 dark:text-white">
            <g fill="currentColor">
              <path d="M7.75 2.75a.75.75 0 0 0-1.5 0v1.258a32.987 32.987 0 0 0-3.599.278a.75.75 0 1 0 .198 1.487A31.545 31.545 0 0 1 8.7 5.545A19.381 19.381 0 0 1 7 9.56a19.418 19.418 0 0 1-1.002-2.05a.75.75 0 0 0-1.384.577a20.935 20.935 0 0 0 1.492 2.91a19.613 19.613 0 0 1-3.828 4.154a.75.75 0 1 0 .945 1.164A21.116 21.116 0 0 0 7 12.331c.095.132.192.262.29.391a.75.75 0 0 0 1.194-.91a18.97 18.97 0 0 1-.59-.815a20.888 20.888 0 0 0 2.333-5.332c.31.031.618.068.924.108a.75.75 0 0 0 .198-1.487a32.832 32.832 0 0 0-3.599-.278z"/>
              <path fillRule="evenodd" d="M13 8a.75.75 0 0 1 .671.415l4.25 8.5a.75.75 0 1 1-1.342.67L15.787 16h-5.573l-.793 1.585a.75.75 0 1 1-1.342-.67l4.25-8.5A.75.75 0 0 1 13 8m2.037 6.5L13 10.427L10.964 14.5z" clipRule="evenodd"/>
            </g>
          </svg>
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

