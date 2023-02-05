import React from 'react'
import "./sideMenu.scss"
import { configurations } from '../../scritps/config'
import { useState } from 'react'

export default function SideMenu() {

	const [name, setName] = useState('testVar1');

	function handleMenuItemClick() {
		setName('testVar2');
	}

	return (
		<div className="side-menu">
			<p className="side-menu__title">Memory game</p>
			<button className="side-menu__new-game-btn btn btn__accent">New game</button>
			<hr/>
			<p className="side-menu__label">Pick layout:</p>
			<div className="side-menu__layout-btns">
				{configurations.layouts.map((layout) => {
					return (
						<div onClick={ handleMenuItemClick } className="btn side-menu__layout-option-btn" key={ layout.id }>
							{ layout.name }
      			</div>
					)
				})}
			</div>
		</div>
	)
}
