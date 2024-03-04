import { useEffect, useState } from 'react'
import { Popover } from '@headlessui/react'
import { Bars3Icon, Cog6ToothIcon } from '@heroicons/react/24/outline'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import Image from 'next/image'
import { AdjustmentsHorizontalIcon } from '@heroicons/react/20/solid'
import { UpdateFileModal } from './updatefilemodal'

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);

  return (
    <Popover className="navbar">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className='flex space-x-2'>
              <Image src="/logo.svg" alt="" width={32} height={32} />
              <div className='text-xl font-bold'>REGEL GENERATOR</div>
            </Link>
          </div>
          <div className="items-center justify-end md:flex-1 md:flex lg:w-0">
            <button className='ml-2 px-4 py-2 inline-flex items-center rounded-none text-base font-medium hover:bg-gray-200 outline-none'
              onClick={() => {
                setShowModal(true)
              }}>
              <Cog6ToothIcon className="h-6 w-6" />
            </button>
            <div className="ml-4 flex-shrink-0 flex space-x-4">
              <UpdateFileModal open={showModal} setOpen={setShowModal} ></UpdateFileModal>
            </div>
          </div>
        </div>
      </div>
    </Popover>
  )
}