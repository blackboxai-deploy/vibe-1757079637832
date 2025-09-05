import React from 'react'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/lib/projects'

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            url={project.url}
          />
        ))}
      </div>
    </section>
  )
}
