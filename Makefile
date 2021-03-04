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
				npx -n --experimental-vm-modules jest --no-warnings

gendiff:
				node bin/gendiff.js