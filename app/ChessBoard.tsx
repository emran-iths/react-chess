import React, {
    Component
} from 'react'
import ChessSquare, {
    letters,
    numbers
} from './ChessSquare'
import PropTypes from 'prop-types'
import ErrorBoundary from './ErrorBoundary'

const squares = numbers.reverse().map((i, d) => {
    return letters.map((a, b) => {
        return a + i
    })
})

const initial_state = {
    "a1": "w-rook",
    "h1": "w-rook",
    "a8": "b-rook",
    "h8": "b-rook",
    "b1": "w-knight",
    "g1": "w-knight",
    "b8": "b-knight",
    "g8": "b-knight",
    "c1": "w-bishop",
    "f1": "w-bishop",
    "c8": "b-bishop",
    "f8": "b-bishop",
    "d1": "w-queen",
    "d8": "b-queen",
    "e1": "w-king",
    "e8": "b-king",
    "a2": "w-pawn",
    "b2": "w-pawn",
    "c2": "w-pawn",
    "d2": "w-pawn",
    "e2": "w-pawn",
    "f2": "w-pawn",
    "g2": "w-pawn",
    "h2": "w-pawn",
    "a7": "b-pawn",
    "b7": "b-pawn",
    "c7": "b-pawn",
    "d7": "b-pawn",
    "e7": "b-pawn",
    "f7": "b-pawn",
    "g7": "b-pawn",
    "h7": "b-pawn",
}




class Inner extends Component {

    constructor(props) {
        super(props);

        /* stream NOT IMPLEMENTED YET
        let self = this;
        stream(this.props.gameId, function(data){self.props.moves = data['state']['moves'];})*/
    }

    getMoves() {
        return this.props.moves;
    }

    getSquaresPieces() {
        //make a copy since we do not want to modify the original state
        let state = JSON.parse(JSON.stringify(initial_state));

        this.getMoves().split(" ").forEach((a, b) => {

            const from = a.substring(0, 2)
            const to = a.substring(2, 4)

            const pieceType = state[from];
            delete state[from];
            state[to] = pieceType;


        })


        return state;

    }


    render() {

            const sp = this.getSquaresPieces();


            return ( <
                div >
                <
                h2 > {
                    this.props.gameId
                } < /h2> <
                table cellspacing = "0" > {
                    squares.map((a, i) => {
                        return < tr key = {i}> {
                            a.map((b, l) => {
                                return < ChessSquare piece = {
                                    sp[b]
                                }

				key = { i + "," + l}

                                name = {
                                    b
                                } > < /ChessSquare>   
                            })
                        } < /tr> } )
                    } < /table></div > );

                }

}


const ChessBoardError = (props) => {

	return (
		<div><b>Error:</b> {JSON.stringify(props)}</div>
	)
}

const ChessBoard = (props) => {
	return <ErrorBoundary errorUI={<ChessBoardError {...props}/>}><Inner {...props}/></ErrorBoundary>
}


export default ChessBoard;
