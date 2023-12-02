import { useState } from 'react'
import styles from './BurgerMenuIconSecond.module.css'
import cn from 'classnames'

export const BurgerMenuIconSecond = () => {
	const [opened, setOpened] = useState(false)

	return (
		<div
			className={cn(styles['burger-icon'], {
				[styles['burger-icon--opened']]: opened
			})}
			onClick={() => setOpened(opened => !opened)}
		>
			<div className={cn(styles['burger-icon__line--1'])}>
				<div
					className={cn(
						styles['burger-icon__line'],
						styles['burger-icon__line--1-1']
					)}
				></div>
				<div
					className={cn(
						styles['burger-icon__line'],
						styles['burger-icon__line--1-2']
					)}
				></div>
			</div>

			<div className={cn(styles['burger-icon__line--2'])}>
				<div
					className={cn(
						styles['burger-icon__line'],
						styles['burger-icon__line--2-1']
					)}
				></div>
				<div
					className={cn(
						styles['burger-icon__line'],
						styles['burger-icon__line--2-2']
					)}
				></div>
			</div>

			<div className={cn(styles['burger-icon__line--3'])}>
				<div
					className={cn(
						styles['burger-icon__line'],
						styles['burger-icon__line--3-1']
					)}
				></div>
				<div
					className={cn(
						styles['burger-icon__line'],
						styles['burger-icon__line--3-2']
					)}
				></div>
			</div>

			{/* <div className="burger-icon__line burger-icon__line--2-1"></div>
			<div className="burger-icon__line burger-icon__line--2-2"></div>
			<div className="burger-icon__line burger-icon__line--3-1"></div>
			<div className="burger-icon__line burger-icon__line--3-2"></div> */}
		</div>
	)
}
