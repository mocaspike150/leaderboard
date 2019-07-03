NODE=/usr/local/bin/node
update: pull total 

pull:
	git pull

strava:
	$(NODE) bin/strava-leaderboard.js 72363
	$(NODE) bin/strava-leaderboard.js 128445
	$(NODE) bin/strava-leaderboard.js 142275
	$(NODE) bin/strava-leaderboard.js 147066
	$(NODE) bin/strava-leaderboard.js 155681
	$(NODE) bin/strava-leaderboard.js 157594
	$(NODE) bin/strava-leaderboard.js 175314
	$(NODE) bin/strava-leaderboard.js 176328
	$(NODE) bin/strava-leaderboard.js 183643
	$(NODE) bin/strava-leaderboard.js 187897
	$(NODE) bin/strava-leaderboard.js 196102
	$(NODE) bin/strava-leaderboard.js 197462
	$(NODE) bin/strava-leaderboard.js 204946
	$(NODE) bin/strava-leaderboard.js 229749
	$(NODE) bin/strava-leaderboard.js 234023
	$(NODE) bin/strava-leaderboard.js 236304
	$(NODE) bin/strava-leaderboard.js 241951
	$(NODE) bin/strava-leaderboard.js 299365
	$(NODE) bin/strava-leaderboard.js 301632
	$(NODE) bin/strava-leaderboard.js 302045
	$(NODE) bin/strava-leaderboard.js 327007
	$(NODE) bin/strava-leaderboard.js 330129
	$(NODE) bin/strava-leaderboard.js 438046
	$(NODE) bin/strava-leaderboard.js 439808
	$(NODE) bin/strava-leaderboard.js 452045
	$(NODE) bin/strava-leaderboard.js 464836
	$(NODE) bin/strava-leaderboard.js 479503
	$(NODE) bin/strava-leaderboard.js 481356
	$(NODE) bin/strava-leaderboard.js 484248
	$(NODE) bin/strava-leaderboard.js 513442
	$(NODE) bin/strava-leaderboard.js 516025
	$(NODE) bin/strava-leaderboard.js 519388
	$(NODE) bin/strava-leaderboard.js 523430
	$(NODE) bin/strava-leaderboard.js 523602

	git add data/collected_html
	git commit -m 'strava-leaderboard html by Makefile' | true
	git push
latest: strava
	$(NODE) bin/latest.js 72363
	$(NODE) bin/latest.js 128445
	$(NODE) bin/latest.js 142275
	$(NODE) bin/latest.js 147066
	$(NODE) bin/latest.js 155681
	$(NODE) bin/latest.js 157594
	$(NODE) bin/latest.js 175314
	$(NODE) bin/latest.js 176328
	$(NODE) bin/latest.js 183643
	$(NODE) bin/latest.js 187897
	$(NODE) bin/latest.js 196102
	$(NODE) bin/latest.js 197462
	$(NODE) bin/latest.js 204946
	$(NODE) bin/latest.js 229749
	$(NODE) bin/latest.js 234023
	$(NODE) bin/latest.js 236304
	$(NODE) bin/latest.js 241951
	$(NODE) bin/latest.js 299365
	$(NODE) bin/latest.js 301632
	$(NODE) bin/latest.js 302045
	$(NODE) bin/latest.js 327007
	$(NODE) bin/latest.js 330129
	$(NODE) bin/latest.js 438046
	$(NODE) bin/latest.js 439808
	$(NODE) bin/latest.js 452045
	$(NODE) bin/latest.js 464836
	$(NODE) bin/latest.js 479503
	$(NODE) bin/latest.js 481356
	$(NODE) bin/latest.js 484248
	$(NODE) bin/latest.js 513442
	$(NODE) bin/latest.js 516025
	$(NODE) bin/latest.js 519388
	$(NODE) bin/latest.js 523430
	$(NODE) bin/latest.js 523602

	git add data/html
	git commit -m 'update latest html by Makefile' | true
	git push
convert: latest
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
	date > data/update_time.txt
	git add data/leaderboard.json
	git add data/update_time.txt
	git commit -m 'update total by Makefile' | true
	git push
