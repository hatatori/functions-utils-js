import arraytocsv from './arraytocsv.js'

let list = [
  {
    location: 'location',
    date: 'date',
    variant: 'variant',
    num_sequences: 'num_sequences',
    perc_sequences: 'perc_sequences',
    num_sequences_total: 'num_sequences_total'
  },
  {
    location: 'Angola',
    date: '2020-07-06',
    variant: 'Alpha',
    num_sequences: '0',
    perc_sequences: '0.0',
    num_sequences_total: '3'
  },
  {
    location: 'Angola',
    date: '2020-07-06',
    variant: 'B.1.1.277',
    num_sequences: '0',
    perc_sequences: '0.0',
    num_sequences_total: '3'
  }
]

console.log(arraytocsv(list))