const fs = require('fs');

const latest = (id) => {
  if(id) {
    if(id === '204946') {
     console.log(`Skip ${id}`);
    } 
    else {
      const input = `data/collected_html/${id}.html`;
      const output = `data/html/${id}.html`;
      const html = fs.readFileSync(input, 'utf8');
      fs.writeFile(output, html, (err) => { if (err) throw err; console.log(output); })
    }
  }
}

latest(process.argv[2])
