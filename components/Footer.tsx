import React from 'react'
import Link from 'next/link'

const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <footer className='border-t border-slate-950 h-[150px] flex flex-wrap justify-between items-center text-white/50 p-8 cursor-default'>
      <Link href='https://github.com/greybirbroman/todos_ts' target='_blank' className='hover:text-cyan-700 duration-300'>Roman Fedorov &copy; {date}</Link>
      <p>My Todo's App</p>
      <span>Next.js | TailwindCSS | TypeScript</span>
    </footer>
  )
}

export default Footer
