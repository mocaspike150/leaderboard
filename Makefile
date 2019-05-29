NODE=/usr/local/bin/node
update: pull total 

pull:
	git pull

collect:
	$(NODE) bin/collect.js 72363
	$(NODE) bin/collect.js 128445
	$(NODE) bin/collect.js 142275
	$(NODE) bin/collect.js 147066
	$(NODE) bin/collect.js 155681
	$(NODE) bin/collect.js 157594
	$(NODE) bin/collect.js 175314
	$(NODE) bin/collect.js 176328
	$(NODE) bin/collect.js 183643
	$(NODE) bin/collect.js 187897
	$(NODE) bin/collect.js 196102
	$(NODE) bin/collect.js 197462
	$(NODE) bin/collect.js 204946
	$(NODE) bin/collect.js 229749
	$(NODE) bin/collect.js 234023
	$(NODE) bin/collect.js 236304
	$(NODE) bin/collect.js 241951
	$(NODE) bin/collect.js 299365
	$(NODE) bin/collect.js 301632
	$(NODE) bin/collect.js 302045
	$(NODE) bin/collect.js 327007
	$(NODE) bin/collect.js 330129
	$(NODE) bin/collect.js 438046
	$(NODE) bin/collect.js 439808
	$(NODE) bin/collect.js 452045
	$(NODE) bin/collect.js 464836
	$(NODE) bin/collect.js 479503
	$(NODE) bin/collect.js 481356
	$(NODE) bin/collect.js 484248
	$(NODE) bin/collect.js 513442
	$(NODE) bin/collect.js 516025
	$(NODE) bin/collect.js 519388
	$(NODE) bin/collect.js 523430
	$(NODE) bin/collect.js 523602

	git add data/html
	git commit -m 'update html by Makefile' | true
	git push
convert: collect
	$(NODE) bin/convert.js 72363
	$(NODE) bin/convert.js 128445
	$(NODE) bin/convert.js 142275
	$(NODE) bin/convert.js 147066
	$(NODE) bin/convert.js 155681
	$(NODE) bin/convert.js 157594
	$(NODE) bin/convert.js 175314
	$(NODE) bin/convert.js 176328
	$(NODE) bin/convert.js 183643
	$(NODE) bin/convert.js 187897
	$(NODE) bin/convert.js 196102
	$(NODE) bin/convert.js 197462
	$(NODE) bin/convert.js 204946
	$(NODE) bin/convert.js 229749
	$(NODE) bin/convert.js 234023
	$(NODE) bin/convert.js 236304
	$(NODE) bin/convert.js 241951
	$(NODE) bin/convert.js 299365
	$(NODE) bin/convert.js 301632
	$(NODE) bin/convert.js 302045
	$(NODE) bin/convert.js 327007
	$(NODE) bin/convert.js 330129
	$(NODE) bin/convert.js 438046
	$(NODE) bin/convert.js 439808
	$(NODE) bin/convert.js 452045
	$(NODE) bin/convert.js 464836
	$(NODE) bin/convert.js 479503
	$(NODE) bin/convert.js 481356
	$(NODE) bin/convert.js 484248
	$(NODE) bin/convert.js 513442
	$(NODE) bin/convert.js 516025
	$(NODE) bin/convert.js 519388
	$(NODE) bin/convert.js 523430
	$(NODE) bin/convert.js 523602

	git add data/json
	git commit -m 'update json by Makefile' | true
	git push
total: convert
	$(NODE) bin/total.js 
	git add data/leaderboard.json
	git commit -m 'update total by Makefile' | true
	git push
