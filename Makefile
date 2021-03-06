install:
	npm install

publish:
	npm publish ./ --dry-run

link:
	npm link

unlink:
	npm unlink

lint:
	npx eslint .

test:
	npm test

test-coverage:
	npm run test-coverage

gendiff:
	node bin/gendiff.js
