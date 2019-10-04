global.fetch = require('node-fetch')
const fs = require('fs')
const api = 'https://www.mocaspike150.org/api/relay/week.json'
const start = new Date('2019-05-13T04:00:00')
const now = new Date()
const weeks_since_start = Math.floor((now - start) / (3600 * 1000 * 24 * 7)) 
let current_miles = {}
let current_runners = {}
let name = {}
fetch(api).then(res => res.text())
  .then(json => {
     const data = JSON.parse(json)
     for(let i = 1; i < weeks_since_start + 1; i++) {
       let key = i < 10 ? `0${i}` : `${i}`
       for(const team of data[key].teams) {
         current_miles[team.id] = 0
         current_runners[team.id] = 0
         name[team.id] = team.name
       }
     }
     for(let i = 1; i < weeks_since_start + 1; i++) {
       let key = i < 10 ? `0${i}` : `${i}`
       for(const team of data[key].teams) {
         current_miles[team.id] += team.mile
         current_runners[team.id] += team.runners
       }
     }
     console.log(current_miles)
     team_ranking = Object.keys(current_miles).map(
       (k) => [k, name[k], current_miles[k], current_runners[k], current_miles[k] / current_runners[k]]
     ).sort((x,y) => (x[4] < y[4] ? 1 : -1))
     console.log(`"Rank","ID","Name","Total miles","Total runners", "Miles per Runner"`)
     let rank = 1
     for(const team of team_ranking) {
        console.log(`${rank},"${team[0]}","${team[1]}",${team[2]}, ${team[3]}, ${team[4].toFixed(2)}`)
        rank++;
     }
  })

  .catch( err => { console.log(err) })
