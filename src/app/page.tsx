import React from 'react'
import Image from 'next/image'

export default function HomePage() {
  return (
    <section className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="text-lg text-muted-foreground mb-6">
        I’m a software engineer specializing in building exceptional digital experiences.
      </p>
      <Image
        src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2a74d481-67ef-4b91-8b3c-1a782e6ead4f.png"
        alt="Portfolio Hero Image"
        width={800}
        height={400}
        className="mx-auto rounded-lg"
      />
    </section>
  )
}
