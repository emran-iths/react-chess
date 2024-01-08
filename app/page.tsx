'use client'

import Image from 'next/image'
import ChessPiece from './ChessPiece'
import ChessSquare from './ChessSquare'
import ChessBoard from './ChessBoard'
import ChessGames from './ChessGames'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ChessGames />
    </main>
  )
}
