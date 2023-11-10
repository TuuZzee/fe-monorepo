import React, { FC, Fragment, useState } from 'react';

import { Dialog, Menu, Transition } from '@headlessui/react';

import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { Bars3BottomLeftIcon, HomeIcon, XMarkIcon } from '@heroicons/react/24/outline';

const sidebarNavigation = [{ name: 'Home', href: '/', icon: HomeIcon, current: true }];
const userNavigation = [
  // { name: 'Your Profile', href: '#' },
  { name: 'Sign out', href: '#' },
];

const Example: FC = function () {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-full">
      {/* Narrow sidebar */}
      <div className="hidden w-28 overflow-y-auto bg-indigo-700 md:block">
        <div className="flex w-full flex-col items-center py-6">
          <div className="mt-6 w-full flex-1 space-y-1 px-2">
            {sidebarNavigation.map(item => (
              <a
                aria-current={item.current ? 'page' : undefined}
                href={item.href}
                key={item.name}
                className={`${
                  item.current
                    ? 'bg-indigo-800 text-white'
                    : 'text-indigo-100 hover:bg-indigo-800 hover:text-white'
                } group flex w-full flex-col items-center rounded-md p-3 text-xs font-medium`}
              >
                <item.icon
                  aria-hidden="true"
                  className={`${
                    item.current ? 'text-white' : 'text-indigo-300 group-hover:text-white'
                  } h-6 w-6`}
                />
                <span className="mt-2">{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <Transition.Root as={Fragment} show={mobileMenuOpen}>
        <Dialog as="div" className="relative z-20 md:hidden" onClose={setMobileMenuOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-600/75" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-indigo-700 pb-4 pt-5">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute right-0 top-1 -mr-14 p-1">
                    <button
                      className="flex h-12 w-12 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-white"
                      onClick={() => setMobileMenuOpen(false)}
                      type="button"
                    >
                      <XMarkIcon aria-hidden="true" className="h-6 w-6 text-white" />
                      <span className="sr-only">Close sidebar</span>
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex shrink-0 items-center px-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt="Your Company"
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=white"
                  />
                </div>
                <div className="mt-5 h-0 flex-1 overflow-y-auto px-2">
                  <nav className="flex h-full flex-col">
                    <div className="space-y-1">
                      {sidebarNavigation.map(item => (
                        <a
                          aria-current={item.current ? 'page' : undefined}
                          href={item.href}
                          key={item.name}
                          className={`${
                            item.current
                              ? 'bg-indigo-800 text-white'
                              : 'text-indigo-100 hover:bg-indigo-800 hover:text-white'
                          } group flex items-center rounded-md px-3 py-2 text-sm font-medium`}
                        >
                          <item.icon
                            aria-hidden="true"
                            className={`${
                              item.current ? 'text-white' : 'text-indigo-300 group-hover:text-white'
                            } mr-3 h-6 w-6`}
                          />
                          <span>{item.name}</span>
                        </a>
                      ))}
                    </div>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
            <div aria-hidden="true" className="w-14 shrink-0">
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Content area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="w-full">
          <div className="relative z-10 flex h-16 shrink-0 border-b border-gray-200 bg-white shadow-sm">
            <button
              className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
              onClick={() => setMobileMenuOpen(true)}
              type="button"
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3BottomLeftIcon aria-hidden="true" className="h-6 w-6" />
            </button>
            <div className="flex flex-1 justify-between px-4 sm:px-6">
              <div className="flex flex-1">
                <form action="#" className="flex w-full md:ml-0" method="GET">
                  <label className="sr-only" htmlFor="search-field">
                    Search all files
                    <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                        <MagnifyingGlassIcon aria-hidden="true" className="h-5 w-5 shrink-0" />
                      </div>
                      <input
                        className="h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder:text-gray-500 focus:border-transparent focus:outline-none focus:ring-0 focus:placeholder:text-gray-400"
                        id="search-field"
                        name="search-field"
                        placeholder="Search"
                        type="search"
                      />
                    </div>
                  </label>
                </form>
              </div>
              <div className="ml-2 flex items-center space-x-4 sm:ml-6 sm:space-x-6">
                {/* Profile dropdown */}
                <Menu as="div" className="relative shrink-0">
                  <div>
                    <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      <span className="sr-only">Open user menu</span>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        alt=""
                        className="h-8 w-8 rounded-full"
                        // eslint-disable-next-line no-secrets/no-secrets
                        src="https://avatars.githubusercontent.com/u/5528922?s=400&u=5c885e007c58fda08e127723e965f716ceef790d&v=4"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
                      {userNavigation.map(item => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <a
                              href={item.href}
                              className={`${
                                active ? 'bg-gray-100' : ''
                              } block px-4 py-2 text-sm text-gray-700
                              `}
                            >
                              {item.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Example;
