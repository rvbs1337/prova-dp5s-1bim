import md5 from "md5"

const baseUrl = 'http://gateway.marvel.com/v1/public/'
const publicKey = '793a827803dee2b7cbfba13a9a0df9b7'
const privateKey = '7fd321a20734163495e26a71e14aa441218dc51c'
const ts = Number(new Date())

const hash = md5(ts + privateKey + publicKey)

const finalUrl = `?&ts=${ts}&apikey=${publicKey}&hash=${hash}`

function createUrlApiMarvel(endpoint: string){
    return baseUrl + endpoint + finalUrl;
}

export default createUrlApiMarvel;