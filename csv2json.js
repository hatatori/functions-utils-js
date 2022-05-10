function csv2json(txt){
    let ar = []
    let obj = {}
    let sep = ","

    let cols = txt.split("\n")[0].split(sep)
    let lines = txt.split("\n").slice(1).map(e=>e.split(sep))

    function Merge(a,b){
        a.map((e,i)=>obj[e] = b[i]) 
        return obj
    }

    lines.forEach(line=> ar.push(Merge(cols, line)) )

    return ar
}

export default csv2json;