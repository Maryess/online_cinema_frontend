export const onlyText = (string:string, limit:null | number = null) => {
    let result = string
    .replace(/(<((?!br)[^>]+)>)/ig, '')

    if(limit) result = result.slice(0, limit) + '...'
}