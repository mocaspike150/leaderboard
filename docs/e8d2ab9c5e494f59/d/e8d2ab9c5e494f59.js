// https://observablehq.com/d/e8d2ab9c5e494f59@124
export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], function(md){return(
md`# leaderboard viewer`
)});
  main.variable(observer("sha")).define("sha", ["d3","commits"], function(d3,commits){return(
d3.json(commits)
)});
  main.variable(observer("commits")).define("commits", ["github"], function(github){return(
github.commits_url.replace(/\{\/sha\}/, '')
)});
  main.variable(observer("github")).define("github", ["d3"], function(d3){return(
d3.json('https://api.github.com/repos/mocaspike150/leaderboard')
)});
  main.variable(observer("club")).define("club", function(){return(
'128445'
)});
  main.variable(observer("commit")).define("commit", ["sha"], function(sha){return(
sha[0].sha
)});
  main.variable(observer("date")).define("date", ["sha"], function(sha){return(
new Date(sha[0].commit.committer.date)
)});
  main.variable(observer()).define(["cleanup","table"], function(cleanup,table){return(
cleanup(table).node()
)});
  main.variable(observer("cleanup")).define("cleanup", ["d3","DOM","date"], function(d3,DOM,date){return(
(html) => {
  let output = d3.select(DOM.element('div'))
  output.append('h1').html('Leaderboard')
  output.append('div').html(date)
  let table = output.append('table').html(html)
  return output
}
)});
  main.variable(observer("table")).define("table", ["d3","commit","club"], function(d3,commit,club){return(
d3.text(`https://raw.githubusercontent.com/mocaspike150/leaderboard/${commit}/docs/week01/${club}.html`)
)});
  main.variable(observer("d3")).define("d3", ["require"], function(require){return(
require('d3')
)});
  return main;
}
