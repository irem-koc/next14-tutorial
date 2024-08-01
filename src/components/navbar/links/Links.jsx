import Link from 'next/link'
import React from 'react'

const Links = () => {
    const links = [
        { path: '/', title: 'Home' },
        { path: '/about', title: 'About' },
        { path: '/contact', title: 'Contact' },
        { path: '/blog', title: 'Blog' },
    ]
  return (
    <div>
        {links.map((link, index) => (<Link key={index} href={link.path}>{link.title}</Link>))}
    </div>
  )
}

export default Links