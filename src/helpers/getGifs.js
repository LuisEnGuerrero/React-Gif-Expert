

export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category )}&limit=12&api_key=BpM9C3ZSqlkkXyNZHFJ5YWWvO47dbCwa`
    const resp = await fetch(url)
    const { data } = await resp.json()

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.original.url
        }
    })
    console.log(gifs)
    return gifs
}

