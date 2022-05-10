/*
csv = `location,date,variant,num_sequences,perc_sequences,num_sequences_total
Angola,2020-07-06,Alpha,0,0.0,3
Angola,2020-07-06,B.1.1.277,0,0.0,3
Angola,2020-07-06,B.1.1.302,0,0.0,3
Angola,2020-07-06,B.1.1.519,0,0.0,3
Angola,2020-07-06,B.1.160,0,0.0,3
Angola,2020-07-06,B.1.177,0,0.0,3`
*/

function csv2json(csv, sep = ','){
    let ar = []
    
    let cols = csv.split("\n")[0].split(sep)
    let lines = csv.split("\n").slice(1).map(e=>e.split(sep))
    
    function Merge(a,b){
        let obj = {}
        a.map((e,i)=>obj[e] = b[i]) 
        return obj
    }

    lines.forEach(line=> ar.push(Merge(cols, line)) )

    return ar
}


// console.log(csv2json(csv))


export default csv2json
