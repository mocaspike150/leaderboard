// https://observablehq.com/d/e6ee54aaaa161b2b@64
export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer("table")).define("table", ["d3"], function(d3){return(
(id) => {
  const base = `https://www.mocaspike150.org/leaderboard/week01`
  const text = d3.text(`${base}/${id}.html`)
  return text
}
)});
  main.variable(observer()).define(["html","t128445","t72363","t301632","t523430","t302045"], function(html,t128445,t72363,t301632,t523430,t302045){return(
html`
<style>
img { display: none; }
</style>
<h1>Leaderboard</h1>
<h2>128445</h2>
${t128445}
<h2>72363</h2>
${t72363}
<h2>301632</h2>
${t301632}
<h2>523430</h2>
${t523430}
<h2>302045</h2>
${t302045}
`
)});
  main.variable(observer("t128445")).define("t128445", ["table"], function(table){return(
table(128445)
)});
  main.variable(observer("t72363")).define("t72363", ["table"], function(table){return(
table(72363)
)});
  main.variable(observer("t301632")).define("t301632", ["table"], function(table){return(
table(301632)
)});
  main.variable(observer("t523430")).define("t523430", ["table"], function(table){return(
table(523430)
)});
  main.variable(observer("t302045")).define("t302045", ["table"], function(table){return(
table(302045)
)});
  main.variable(observer()).define(["d3"], function(d3){return(
d3.json('https://www.mocaspike150.org/leaderboard/week01/128445.json')
)});
  main.variable(observer("d3")).define("d3", ["require"], function(require){return(
require('d3@5')
)});
  return main;
}
