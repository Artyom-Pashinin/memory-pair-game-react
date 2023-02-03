import React from 'react'
import Board from '../Board/Board'
import Statistics from '../Statistics/Statistics'
import "./game.scss"

export default function Game() {
	return (
		<div className="game-wrapper">
			<Board />
			<Statistics />
		</div>
	)
}
