const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

export function downToUpDisappearAnimation(divId:string):void{
    const div = document.getElementById(divId)
    div?.classList.remove('upToDown')
    div?.classList.add('downToUpDisappear')
}

export function upToDownDisappearAnimation(divId:string):void{
    const div = document.getElementById(divId)
    div?.classList.remove('downToUp')
    div?.classList.add('upToDownDisappear')
}

export async function renderMap(origin:{latitude:string,longitude:string},destination:{latitude:string,longitude:string}){
    const map =  await fetch(`https://maps.googleapis.com/maps/api/staticmap?size={500}x{400}&path?path=color:0xff0000ff%7weight:5%7${origin.latitude},${origin.longitude}%7${destination.latitude},${destination.longitude}&key=${apiKey}`)
    return await map.json()
}