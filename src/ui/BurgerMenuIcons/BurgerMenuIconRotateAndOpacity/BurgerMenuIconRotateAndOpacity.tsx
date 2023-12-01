import { useState } from 'react'
import './BurgerMenuIconRotateAndOpacity.css'

export const BurgerMenuIconRotateAndOpacity = () => {
	const [opened, setOpened] = useState(false)

	return (
		<div
			className={`burger-icon ${opened ? 'burger-icon--opened' : ''}`}
			onClick={() => setOpened(opened => !opened)}
		>
			<div className="burger-icon__line burger-icon__line--1"></div>
			<div className="burger-icon__line burger-icon__line--2"></div>
			<div className="burger-icon__line burger-icon__line--3"></div>
		</div>
	)
}
