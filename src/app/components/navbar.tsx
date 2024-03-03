"use client";
import { Popover } from '@headlessui/react'
import {
  Bars3Icon
} from '@heroicons/react/24/outline'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Navbar() {

  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);


  return (
    <Popover className="navbar">
      <div className="mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className='flex space-x-2'>
              <Image src="/logo.svg" alt="" width={32} height={32} />
              <div className='text-xl font-bold'>REGEL GENERATOR</div>
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-none p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-200 outline-none transition">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
        </div>
      </div>
    </Popover>
  )
}
