import csvtoarray from './csvtoarray.mjs'
import querystrintoobj from './querystrintoobj.mjs'
// let csvtoarray = require('./csvtoarray.js')
// let csvtoarray = require('./csvtoarray')

// csvtoarray
let csv = `location,date,variant,num_sequences,perc_sequences,num_sequences_total
Angola,2020-07-06,Alpha,0,0.0,3
Angola,2020-07-06,B.1.1.277,0,0.0,3`

console.log('test 1 - csvtoarray')

console.log(csvtoarray(csv))

// querystrintoobj
console.log('teste 2 - querystrintoobj')
let str = "q=earthbound&tbm=isch&ved=12312331dasdasd6EQ2-cCegQIABAA&oq=earth&gs_l=CgNpAYUBUBiAGFAAuUBiAGFAd3cy13aXotaW1nwAEB&sclient=img&ei=j1DIY8F20fbWxA_i2IyICg&bih=697&biw=1304"
console.log(querystrintoobj(str))