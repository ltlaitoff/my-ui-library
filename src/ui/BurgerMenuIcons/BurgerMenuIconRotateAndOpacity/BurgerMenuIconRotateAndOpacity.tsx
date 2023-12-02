import { useState } from 'react'
import styles from './BurgerMenuIconRotateAndOpacity.module.css'

import cn from 'classnames'

export const BurgerMenuIconRotateAndOpacity = () => {
	const [opened, setOpened] = useState(false)

	return (
		<div
			className={cn(styles['burger-icon'], {
				[styles['burger-icon--opened']]: opened
			})}
			onClick={() => setOpened(opened => !opened)}
		>
			<div
				className={cn(
					styles['burger-icon__line'],
					styles['burger-icon__line--1']
				)}
			></div>
			<div
				className={cn(
					styles['burger-icon__line'],
					styles['burger-icon__line--2']
				)}
			></div>
			<div
				className={cn(
					styles['burger-icon__line'],
					styles['burger-icon__line--3']
				)}
			></div>
		</div>
	)
}
