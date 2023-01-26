import csvtoarray from './csvtoarray.js'

let csv = `location,date,variant,num_sequences,perc_sequences,num_sequences_total
Angola,2020-07-06,Alpha,0,0.0,3
Angola,2020-07-06,B.1.1.277,0,0.0,3`

console.log(csvtoarray(csv))