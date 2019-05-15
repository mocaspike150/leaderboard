FETCH=/usr/local/bin/node bin/fetch.js
CONVERT=/usr/local/bin/node bin/convert.js

all: fetch convert

fetch: 128445 72363 301632 523430 302045

128445:
	$(FETCH) week01 128445

72363:
	$(FETCH) week01 72363

301632:
	$(FETCH) week01 301632

523430:
	$(FETCH) week01 523430

302045:
	$(FETCH) week01 302045

convert:
	$(CONVERT) week01 128445
	$(CONVERT) week01 72363
	$(CONVERT) week01 301632
	$(CONVERT) week01 523430
	$(CONVERT) week01 302045

