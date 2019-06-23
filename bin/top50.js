const fs = require('fs')

const weekdata = (leaderboard) => {
  let output = [];
  for (let id in leaderboard){
    let club = leaderboard[id]
    for (let c of club){
      const mile = c[2]
      if(mile) {
      let entry = {
        club_id : id,
        name : c[1],
        mile : (c[2] ? parseFloat(c[2])*0.621371 : 0),
        count : c[3]
      }
      output.push(entry)
      }
    }
  }
  return output
}

const by_mile_and_name =  (a, b) => {  
  if(b.mile < a.mile) {
    return -1
  }
  if(b.mile > a.mile ) {
    return 1
  }
  return b.name <= a.name ? 1 : -1
}

const uniq = (input) => {
  let previous = input[0]
  let output = [previous]
  for (const i of input) {
    if (i.name != previous.name || i.mile != previous.mile  ) {
      previous = i
      output.push(i)
    }
  }
  return output
}

const top50 = (weekid) => {
  const path = `data/leaderboard/week${weekid}/`
  const club_ids = JSON.parse(fs.readFileSync(`${path}/club_ids.json`, 'utf8'))
  const all_leaderboard = JSON.parse(fs.readFileSync(`${path}/leaderboard.json`, 'utf8'))

  let leaderboard = {}
  for( let id of club_ids) {
    leaderboard[id] = all_leaderboard[id]
  }

  let output = uniq(weekdata(leaderboard).sort(by_mile_and_name)).slice(0, 50)
  fs.writeFile(`${path}/top50.json`, JSON.stringify(output, null, 2), (err) => { if (err) { throw err }; console.log(output); })
}

top50('06')


