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
