// --- Copy-pasted from internet
function concatTypedArrays(a, b) {
    var c = new (a.constructor)(a.length + b.length);
    c.set(a, 0);
    c.set(b, a.length);
    return c;
}
// ---

function gameStream(gameId, callback)
{
        let url = "https://lichess.org/api/bot/game/stream/"+gameId;

        fetch(
                url,
                { headers:{"Authorization": `Bearer ${process.env.NEXT_PUBLIC_LICHESS_TOKEN}`} }
        )
        .then((response) => {
                let chunks = new Uint8Array();

                const reader = response.body.getReader();
                reader.read().then(function pump({ done, value }) {
                        if (done) {
                                return;
                        }
                        chunks = concatTypedArrays(chunks, value);
                        var string = new TextDecoder().decode(value);
                        callback(string);
                        return reader.read().then(pump);
                });
        })
        .catch((err) => console.error(err));

}

export default gameStream

