const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

export function disappearAnimation(divId:string,oldClass:string,animation:string):void{
    const div = document.getElementById(divId)
    div?.classList.remove(oldClass)
    div?.classList.add(animation)
    const bodyHeight = document.body.scrollHeight;
    const body = document.getElementsByTagName('body')[0]
    body.style.height= `${bodyHeight}px`
    setTimeout(() => {
        body.style.height='100%'
    }, 510);
}

export function renderMap(polyline:string){
    const encodedPolyline = encodeURIComponent(polyline);
    const map = `https://maps.googleapis.com/maps/api/staticmap?size=600x400&path=weight:3%7Ccolor:orange%7Cenc:${encodedPolyline}&key=${apiKey}`;
    return map;
}