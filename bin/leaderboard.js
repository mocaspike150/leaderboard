const fs = require('fs');
const puppeteer = require('puppeteer');

const leaderboard = (week, id) => {
  const base = `docs/${week}`;

  if(id) {
    const url = `https://www.strava.com/clubs/${id}`;
    const output = `${base}/${id}.html`;

    (async () => {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      page.setDefaultTimeout(60000);

      await page.goto(url, {waitUntil: 'networkidle2'});
      const html = await page.evaluate(() => document.body.querySelector('.leaderboard').innerHTML);
      fs.writeFile(output, html, (err) => { if (err) { throw err }; console.log(output); })
      await browser.close()
   })()
  }
}

leaderboard(process.argv[2], process.argv[3])
