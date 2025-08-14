"use client"

import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { Button } from './ui/button';

function Header() {

    const path = usePathname();

    return (
        <header className='fixed top-6 left-1/2 transform -translate-x-1/2 z-50 text-nowrap'>
            <div className='backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-8 py-3 flex items-center justify-between gap-8'>
                <Link href='/' className="mr-10 md:mr-20">
                    <Image
                        src="/logo-text.png"
                        alt="Pixxel Logo"
                        className='min-w-24 object-cover'
                        width={96}
                        height={24}
                    />
                </Link>

                {path === '/' &&
                    <div className='hidden md:flex space-x-6'>
                        <Link
                            href="#features"
                            className='text-white font-medium transition-all duration-300 hover:text-cyan-400 cursor-pointer'
                        >
                            Features
                        </Link>
                        <Link
                            href="#features"
                            className='text-white font-medium transition-all duration-300 hover:text-cyan-400 cursor-pointer'
                        >
                            Pricing
                        </Link>
                        <Link
                            href="#features"
                            className='text-white font-medium transition-all duration-300 hover:text-cyan-400 cursor-pointer'
                        >
                            Contact
                        </Link>
                    </div>
                }

                <SignedOut>
                    <SignInButton>
                        <Button variant="glass" className='hidden sm:flex'>
                            Sign In
                        </Button>
                    </SignInButton>
                    <SignUpButton>
                        {/* <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                            Sign Up
                        </button> */}
                        <Button variant="primary">
                            Get Started
                        </Button>
                    </SignUpButton>
                </SignedOut>
                <SignedIn>
                    <UserButton
                        appearance={{
                            elements: {
                                avatarBox: "w-8 h-8"
                            }
                        }}
                    />
                </SignedIn>
            </div>
        </header>
    )
}

export default Header;