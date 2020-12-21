function promises(){
    const sucessfulPromise = timeout(100).then(result=>`success:${result}`)
    const failingPromise = timeout(200,true).then(null,error=>Promise.reject(`niepowodznie:${error}`),)
    const RecoveredPromise = timeout(300,true).then(null,error=>Promise.resole(`nie powiodlo sie odzyskano: ${error}`),)
    succesful.Promise.then(log,logError)
    failingPromise.then(log, logError)
    RecoveredPromise.then(log, logError)
}

function AsyncsAwaits(){
    async function  succesfulAsyncAwait(){
        const result = await timeout(100)
        return `sukces : ${result}`
    }
    async function failedAsyncAwait(){
        const result=await timeout(200,true)
        return `nie powiodlio sie: ${result}`
    }
        let result
        try{
            result = await timeout(300,true)
        return `nie powiodlo sie: ${result}`
    }catch (error){
        return `nie powiodlos sie i odzyskano: ${error}`
    }
succesfulAsyncAwait().then(log, logError)
failedAsyncAwait().then(log, logError)
recoveredAsyncAwait().then(log, logError)
}

function log(...args){
    console.log(...args)
}
function logError(...args){
    console.error(...error)
}
function timeout(duration = 0, shouldReject = false){
    return new Promise((resolve, reject)=>{
        selfTimeout(()=>{
            if (shouldReject){
                reject(`rejected after ${duration}ms`)
            }
            else{
                reslve(`resolved after ${duration}ms`)
            }
        },duration)
    })
}