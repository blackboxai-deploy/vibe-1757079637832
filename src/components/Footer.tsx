import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-muted text-muted-foreground py-4 mt-auto">
      <div className="container mx-auto px-4 text-center text-sm">
        &copy; {year} My Portfolio. All rights reserved.
      </div>
    </footer>
  )
}
