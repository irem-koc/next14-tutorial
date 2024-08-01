import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div>
        <h2>Not Found</h2>
        <p>Sorry, the page you are looking for doesnt exist</p>
        <Link href="/">Go back to home</Link>
    </div>
  )
}

export default NotFound
