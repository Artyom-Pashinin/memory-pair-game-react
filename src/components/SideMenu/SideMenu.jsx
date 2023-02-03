import React from 'react'
import "./sideMenu.scss"
import { configurations } from '../../scritps/config'

export default function SideMenu() {
	return (
		<div className="side-menu">
			<p className="side-menu__title">Memory game</p>
			<button className="side-menu__new-game-btn btn btn__accent">New game</button>
			<hr/>
			<p className="side-menu__label">Pick layout:</p>
			<div className="sidemenu__layout-btns">
				{configurations.layouts.map((layout) => {
					return (
						<div className="btn side-menu__layout-option-btn" key={ layout.id }>
							{ layout.name }
      			</div>
					)
				})}
			</div>
		</div>
	)
}
