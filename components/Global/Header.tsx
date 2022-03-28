/* This example requires Tailwind CSS v2.0+ */
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Fragment } from 'react'

export const Header = () => {
  return (
    <Popover className="relative bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6">
        <div className="flex justify-between items-center py-6 border-b-2 border-gray-100 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:flex-1 lg:w-0">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <img
                className="w-auto h-8 sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt=""
              />
            </a>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex justify-center items-center p-2 text-gray-400 hover:text-gray-500 bg-white hover:bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="w-6 h-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <a
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Home
            </a>
            <a
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Anime List
            </a>
            <a
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              New Seasons
            </a>
            <a
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Movies
            </a>
            <a
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Popular
            </a>
          </Popover.Group>
          <div className="hidden justify-end items-center md:flex md:flex-1 lg:w-0">
            <a
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900 whitespace-nowrap"
            >
              Sign in
            </a>
            <a
              href="#"
              className="inline-flex justify-center items-center py-2 px-4 ml-8 text-base font-medium text-white whitespace-nowrap bg-primary hover:bg-indigo-500 rounded-md border border-transparent shadow-sm"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 p-2 transition origin-top-right md:hidden"
        >
          <div className="bg-white rounded-lg divide-y-2 divide-gray-50 ring-1 ring-black shadow-lg ring-opacity-4">
            <div className="px-5 pt-5 pb-6">
              <div className="flex justify-between items-center">
                <div>
                  <img
                    className="w-auto h-8"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex justify-center items-center p-2 text-gray-400 hover:text-gray-500 bg-white hover:bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="w-6 h-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                <a
                  href="#"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Anime List
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  New Seasons
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Movies
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Popular
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="flex justify-center items-center py-2 px-4 w-full text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md border border-transparent shadow-sm"
                >
                  Sign up
                </a>
                <p className="mt-6 text-base font-medium text-center text-gray-500">
                  Existing customer?{' '}
                  <a href="#" className="text-indigo-600 hover:text-indigo-500">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
