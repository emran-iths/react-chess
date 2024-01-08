import React, {
    Component,
    useState
} from 'react'
import ChessBoard from './ChessBoard'
import PropTypes from 'prop-types'

function ChessGames() {
    const [gamesIds, setGamesIds] = useState([])
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
                        /> }) }   

                        <
                        /div>
}

export default ChessGames;
