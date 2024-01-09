import React, {
    Component,
    useState
} from 'react'
import ChessBoard from './ChessBoard'
import PropTypes from 'prop-types'

function ChessGames(props) {

    const [gamesIds, setGamesIds] = useState(props.gamesIds);
    const [inputGameId, setInputGameId] = useState("");

    return < div >

        <
        input value = {
            inputGameId
        }
    onChange = {
        (e) => {
            setInputGameId(e.target.value)
        }
    }
    /> <
    button onClick = {
            () => {
                setGamesIds(gamesIds.concat([inputGameId]));
                setInputGameId("")
            }
        } > Add game < /button> {
            gamesIds.map((a, i) => {
                        return < ChessBoard moves = ""
                        gameId = {
                            a
                        }

			key = {i}

                        /> }) }   

                        <
                        /div>
}

export default ChessGames;
