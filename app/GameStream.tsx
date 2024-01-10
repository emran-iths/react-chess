// --- Copy-pasted from internet (except I had to make it type-script)
function concatTypedArrays(a: Uint8Array, b : Uint8Array) {
    var c = new Uint8Array(a.length + b.length);
    c.set(a, 0);
    c.set(b, a.length);
    return c;
}
// ---

function gameStream(gameId: String, callback: ( arg0: String) => any)
{
        let url = "https://lichess.org/api/bot/game/stream/"+gameId;

        fetch(
                url,
                { headers:{"Authorization": `Bearer ${process.env.NEXT_PUBLIC_LICHESS_TOKEN}`} }
        )
        .then((response) => {
                let chunks = new Uint8Array();

                const reader = response.body!.getReader();
                reader.read().then(function pump({ done, value }) : any {
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

