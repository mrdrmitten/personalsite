import styles from './Footer.module.css'

const Footer = () => {

  return (
		<div className={styles.footerShadow}>
			<div className={`${styles.footerBorder} w-full h-[6px]`}></div>
			<div className="bg-accent w-full h-[6px]"></div>
			<div className="bg-accent-blue w-full h-[6px]"></div>
			<footer></footer>
		</div>
	)
}

export default Footer