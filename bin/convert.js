const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const fs = require('fs');

const convert = (week, id) => {
  const base = `data/${week}`;
  const input = `${base}/${id}.html`;
  const output = `${base}/${id}.json`;

  JSDOM.fromFile(input, {}).then(dom => {
    const table = dom.window.document.querySelector('table');
    const html =  table.innerHTML;
    const text =  table.textContent;
    const lines = text.split('\n').filter((d) => (d.length > 0));

    let data = [[], [], [], [], [], [], []];
    let count = -6;
    for (let line of lines) {
      if(count > 0) {
        for (let i of [1, 2, 3, 4, 5, 6]) {
          if(count % 7 == i) {
            data[i - 1].push(line);
          }
        }
        if(count %7 == 0) {
          data[6].push(line);
        }
      }
      count++;
    }

    let leaderboard = [];

    let c = 0;
    for( let i in data[0] ) {
      let tmp = [];
      for( let j in [1, 2, 3, 4, 5, 6, 7] ) {
        tmp.push(data[j][c]);
      }
      leaderboard.push(tmp);
      c++;
    }
    fs.writeFile(output, JSON.stringify(leaderboard), (err) => { if (err) throw err; console.log(output); })
  });
};

convert(process.argv[2], process.argv[3])
