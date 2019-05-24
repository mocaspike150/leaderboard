global.fetch = require('node-fetch')
const d3 = require('d3')
const fs = require('fs')

const get = (data) => {
  console.log(data)
}

const error = (e) => {
  console.log(e)
}

const url = 'https://www.mocaspike150.org/api/relay/week.json'
d3.json(url)
  .then(get)
  .catch(error)

