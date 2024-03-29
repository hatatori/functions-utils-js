// let csv = `location,date,variant,num_sequences,perc_sequences,num_sequences_total
// Angola,2020-07-06,Alpha,0,0.0,3
// Angola,2020-07-06,B.1.1.277,0,0.0,3`

function csvtoarray(csv, sep=","){
    function arToObj(array1, array2){
        let c = {}
        array1.map((e,i)=> c[array1[i]] = array2[i] )
        return c
    }

    let csv2 = csv
    let colunas = csv2.split("\n").shift().split(sep)
    let linhas = csv2.split("\n")
    let lista = []

    for(let i of linhas) {
        let linha_array = i.split(sep)
        let ob = arToObj(colunas, linha_array)
        delete ob['\r']
        lista.push(ob)
    }
    return lista
}

export default csvtoarray
