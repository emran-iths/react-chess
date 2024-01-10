'use client'

import React, {
    Component,
} from 'react'

import gameStream from './GameStream'

import ChessPiece from './ChessPiece'
/*
import Image from 'next/image'
import ChessSquare from './ChessSquare'
import ChessBoard from './ChessBoard'
import ChessGames from './ChessGames'
*/

/*
<ChessGames gamesIds = {["generic-game-id"]}/>
*/

// TEST APP to test game stream
class App extends Component<{}, { log: Array<String> }> {
  constructor(props : any) {
    super(props);
    this.state = {
      log: []
    };
  }

  componentDidMount() {
     let self = this;
     gameStream("CKOtPFwB6Xip", (data) => {
        self.setState({ log: self.state.log.concat(data) });

     })
  }

  render() {
    return (
	<ul>{this.state.log.map( (x,i) => {  return <li key={i}>{x}</li>  }  )}</ul>
    );
  }
}



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
	<App/>
	<ChessPiece type="w-knight"/>
    </main>
  )
}
