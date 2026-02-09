import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Button, ButtonBase } from '@mui/material'

import react from '../../assets/react.svg'
import { NavLink, Link } from 'react-router-dom'

const navigation = [
    { name: 'Home', to: '/', current: true },
    { name: 'Working', to: '/working', current: false },
    { name: 'Contact', to: '/contact', current: false },
    { name: 'About', to: '/about', current: false },
]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    return (
        <Disclosure as="nav" className="relative bg-[white] border-b-2 border-gray-200">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-center">
                    <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                        </DisclosureButton>
                    </div>
                    {/* Logo */}
                    <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-start">
                        <div className="flex shrink-0 items-center">
                            <img
                                alt="Your Company"
                                src={react}
                                className="h-8 w-auto"
                            />
                        </div>
                        {/* Large screen view */}
                        <div className="hidden w-full sm:mx-6 sm:flex">
                            <div className="flex space-x-12 items-center">
                                {navigation.map((item) => (
                                    <NavLink
                                        key={item.name}
                                        to={item.to}
                                        viewTransition
                                        className={({ isActive, isPending, isTransitioning }) =>
                                            [
                                                isActive ? "bg-gray-900 rounded-sm px-2.5 text-white" : "text-gray-500 px-2 hover:text-gray-900",
                                                isPending ? "opacity-50 cursor-wait italic" : "",
                                                isTransitioning ? "animate-pulse" : "",
                                            ].join(" ")
                                        }
                                    >
                                        {item.name}
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                        {/* Talk Button */}
                        <div className="hidden sm:ml-6 sm:flex sm:items-center">
                            <ButtonBase 
                            variant="contained" 
                            sx={{ width: 100, 
                            backgroundColor: '#000000',
                            color: '#ffffff',
                            height: 35,
                            borderRadius: 2,
                            '&:hover': {
                                backgroundColor: '#ffffff',
                                color: '#000000',
                                border: '1px solid #000000',
                                transition: 'all 0.3s ease',
                            },
                            }}
                            component={Link}
                            to="/contact"
                            >Let's Talk</ButtonBase>
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile menu panel */}
            <DisclosurePanel className="h-screen sm:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as={NavLink}
                            to={item.to}
                            viewTransition
                            className={({ isActive, isPending, isTransitioning }) =>
                                [
                                    'block rounded-md px-3 py-2 text-base font-medium',
                                    isActive ? "bg-gray-900 rounded-sm px-2.5 text-white" : "text-gray-900 hover:bg-black/5",
                                    isPending ? "opacity-50 cursor-wait italic" : "",
                                    isTransitioning ? "animate-pulse" : "",
                                ].join(" ")
                            }
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}
