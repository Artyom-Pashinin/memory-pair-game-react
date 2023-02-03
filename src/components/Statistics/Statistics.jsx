import React from 'react'
import "./statistics.scss"

export default function Statistics() {
	return (
		<div className="game-stat">
			<div className="game-stat__moves-counter">
				Moves: <span data-moves-counter></span>
			</div>
			<div className="game-stat__remaining-time">
				Time: <span data-time></span>
			</div>
			<div className="game-stat__points">
				Score: <span data-points></span>
			</div>
    </div>
	)
}
