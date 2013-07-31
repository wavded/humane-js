project=humane

watch:
	@node_modules/.bin/stylus -u nib -w theme-src/*.styl -o themes/

build:
	@node_modules/.bin/uglifyjs humane.js -m -c -v > humane.min.js

server:
	@python -m SimpleHTTPServer
