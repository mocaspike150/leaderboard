const fs = require('fs')
const src = `data/json`
const files = fs.readdirSync(src).filter(fn => fn.endsWith('.json'))
const stringify = require("json-stringify-pretty-compact");

let output = {}

for (const file of files) {
  const fn = `${src}/${file}`
  const id = file.replace(/\.json/, '')
  const data = JSON.parse(fs.readFileSync(fn, 'utf8'))
  output[id] = data
}

fs.writeFile('data/leaderboard.json', stringify(output), (err) => { if (err) { throw err }; console.log(output); })
