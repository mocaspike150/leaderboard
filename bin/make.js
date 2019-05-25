global.fetch = require('node-fetch');
const fs = require('fs');
const d3 = require('d3');

const error = (e) => {
  console.log(e);
}

let Makefile = `NODE=/usr/local/bin/node
update: pull build
	git add data
	git commit -m 'update by Makefile' | true
	git push

pull:
	git pull

build:
`

const make = (d) => {
  for(const id in d) {
    Makefile += `	$(NODE) bin/collect.js ${id}
`
    Makefile += `	$(NODE) bin/convert.js ${id}
`
  }
  Makefile += `	$(NODE) bin/total.js |tee data/leaderboard.json`
  fs.writeFile('Makefile', Makefile, (err) => { if (err) throw err; console.log(Makefile); })
}

d3.json('https://www.mocaspike150.org/api/club/profile.json')
  .then(make)
  .catch(error); 
