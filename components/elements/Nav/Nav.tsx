import Image from "next/image"
import Link from "next/link"
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


const MobileMask = () => {
	return (
		<div id="mobileMask" className={`${styles.mobileMask} hidden`}></div>
	)
}

/* const ScrollPage = (id : number) => {
    const target = document.getElementById(`${id}`)
    const view = window.matchMedia('(max-width: 1024px)')
    target?.scrollIntoView({ behavior: 'smooth' })
    if (view.matches) {
      handleClick(100, 120)
    }
} */

const handleClick = (t1 : number, t2 : number) => {
  const btn = document.getElementById('hamBtn')
  const svgs = Array.from(btn!.querySelectorAll('.svg'))
  const drawer = document.getElementById('navDrawer')
	const mask = document.getElementById('mobileMask') ? document.getElementById('mobileMask') : null
  const cls = [
		'hidden',
		'flex',
		'flex-col',
	]
  setTimeout(() => svgs.map((svg) => svg.classList.toggle('hidden')), t1)
  setTimeout(() => cls.map((c) => drawer?.classList.toggle(c)), t2)

  btn?.classList.toggle(`${styles.hamBtnRotate}`)
	mask ? mask.classList.toggle('hidden') : ''
}

/**
 * Basic Function that closes mobile navigation if browser is resized
 * larger than 1024px (see logic in Nav component)
 */
const closeNavResize = () => {
	const drawer = document.getElementById('navDrawer')

	if (!drawer?.classList.contains('hidden')) {
		handleClick(0, 0)
	}
}

const Nav = () => {

	const [mobile, setMobile] = useState(false)

	const width = useWindowSize().width

	if (width! < 1024) {
		mobile ? '' : setMobile(true)
	} else {
		!mobile ? '' : setMobile(false)
	}

	useEffect(() => {
		if (!mobile) {
			closeNavResize()
		} else if (mobile) {
			const mask = document.getElementById('mobileMask')
				? document.getElementById('mobileMask')
				: null

			mask?.addEventListener('click', () => {
				handleClick(100, 120)
			})
		}
	}, [mobile])

  return (
		<div className={styles.navShadow}>
			<nav
				className={`${styles.nav} relative flex justify-center items-center max-w-[1800px] pt-4 px-[5%] lg:px-[10%]`}
			>
				<Link href="/" passHref>
					<div
						className={`${styles.logo} font-logo leading-none tracking-wider cursor-pointer`}
					>
						<span className="hidden md:block">RAY MAGNER</span>
						<span className="md:hidden">RM</span>
					</div>
				</Link>
				<button
					id="hamBtn"
					className={`${styles.hamBtn} p-4 order-4 lg:hidden`}
					onClick={() => handleClick(100, 120)}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="svg h-10 w-10"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={2}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="svg hidden h-10 w-10"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
							clipRule="evenodd"
						/>
					</svg>
				</button>
				<div
					id="navDrawer"
					className={`${styles.navDrawer} hidden absolute top-[100%] right-4 py-[5%] px-[10%] justify-center items-center shadow-md shadow-primary lg:shadow-none lg:px-[5%] lg:py-0 lg:static lg:flex lg:space-x-[5%]`}
				>
					<Link href="/">
						<a className={styles.btn}>Home</a>
					</Link>
					<Link href="/aboutme">
						<a className={styles.btn}>About</a>
					</Link>
					<a className={`${styles.btn} hover:line-through cursor-pointer`}>
						Blog
					</a>
				</div>
				<div className="ml-auto p-4">
					<ThemeToggle />
				</div>
			</nav>
			<div className={`${styles.navBorder} w-full h-[6px]`}></div>
			<div className="bg-accent w-full h-[6px]"></div>
			<div className="bg-accent-blue w-full h-[6px]"></div>
			{mobile ? <MobileMask /> : ''}
		</div>
	)
}

export default Nav