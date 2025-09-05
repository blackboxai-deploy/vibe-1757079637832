"use client"

import Link from 'next/link'
import { useState } from 'react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold">
          <Link href="/">My Portfolio</Link>
        </div>
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:underline">
              {link.label}
            </Link>
          ))}
        </div>
        <button
          className="md:hidden"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="block w-6 h-0.5 bg-primary-foreground mb-1"></span>
          <span className="block w-6 h-0.5 bg-primary-foreground mb-1"></span>
          <span className="block w-6 h-0.5 bg-primary-foreground"></span>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-primary">
          <ul className="flex flex-col p-4 space-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="block hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
