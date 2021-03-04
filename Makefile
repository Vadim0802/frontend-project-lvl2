install:
  npm install

publish:
  npm publish --dry-run

link:
	npm link

unlink:
	npm unlink

lint:
  npx eslint

gendiff:
	node src/bin/gendiff.js