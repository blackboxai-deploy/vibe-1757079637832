import React from 'react'
import Link from 'next/link'

export interface Project {
  title: string
  description: string
  url: string
}

export default function ProjectCard({ title, description, url }: Project) {
  return (
    <div className="border border-border rounded-lg p-4 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-2">
        <Link href={url} target="_blank" rel="noopener noreferrer" className="hover:underline">
          {title}
        </Link>
      </h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}
