import Image from "next/image"
import React, { useState, useEffect, useLayoutEffect } from "react"
import dynamic from 'next/dynamic'
import { useWindowSize } from "../../CustomHooks/UseWindowSize"
import styles from './Nav.module.css'


const ThemeToggle = dynamic(
	() => import('../../elements/ThemeToggle/ThemeToggle'),
	{
		ssr: false,
	}
)

const ScrollPage = (id : number) => {
    const target = document.getElementById(`${id}`)
    const view = window.matchMedia('(max-width: 1024px)')
    target?.scrollIntoView({ behavior: 'smooth' })
    if (view.matches) {
      handleClick()
    }
}

const handleClick = () => {
  const btn = document.getElementById('hamBtn')
  const svgs = Array.from(btn!.querySelectorAll('.svg'))
  const drawer = document.getElementById('navDrawer')
  const cls = [
		'hidden',
		'flex',
		'flex-col',
	]
  setTimeout(() => svgs.map((svg) => svg.classList.toggle('hidden')), 100)
  setTimeout(() => cls.map((c) => drawer?.classList.toggle(c)), 120)
  
  btn?.classList.toggle(`${styles.hamBtnRotate}`)
}

const Nav = () => {

  return (
		<div
			className={`${styles.nav} relative flex justify-center items-center pt-4 px-[5%] lg:px-[10%]`}>
			<div
				className={`${styles.logo} font-title leading-none tracking-wider cursor-default`}>
				RAY MAGNER
			</div>
			<button
				id='hamBtn'
				className={`${styles.hamBtn} p-4 ml-2 order-4 lg:hidden`}
				onClick={() => handleClick()}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='svg h-10 w-10'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
					strokeWidth={2}>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M4 6h16M4 12h16M4 18h16'
					/>
				</svg>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='svg hidden h-10 w-10'
					viewBox='0 0 20 20'
					fill='currentColor'>
					<path
						fillRule='evenodd'
						d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
						clipRule='evenodd'
					/>
				</svg>
			</button>
			<div
				id='navDrawer'
				className={`${styles.navDrawer} hidden absolute top-[100%] right-0 py-[5%] px-[10%] justify-center items-center shadow-md shadow-primary lg:shadow-none lg:px-[5%] lg:py-0 lg:static lg:flex lg:space-x-[5%]`}>
				<button onClick={() => ScrollPage(1)} className={styles.btn}>
					Home
				</button>
				<button onClick={() => ScrollPage(2)} className={styles.btn}>
					About
				</button>
				<button onClick={() => ScrollPage(3)} className={styles.btn}>
					Contact
				</button>
			</div>
			<div className='ml-auto'>
				<ThemeToggle />
			</div>
		</div>
	)
}

export default Nav