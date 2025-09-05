import React from 'react'

export default function ContactPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <p className="text-lg text-muted-foreground mb-4">
        Feel free to reach out via email or connect with me on LinkedIn.
      </p>
      <ul className="list-disc ml-6">
        <li>Email: <a href="mailto:me@example.com" className="text-primary hover:underline">me@example.com</a></li>
        <li>
          LinkedIn:{' '}
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            linkedin.com/in/yourprofile
          </a>
        </li>
      </ul>
    </section>
  )
}
