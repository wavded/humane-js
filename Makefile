all:build

watch:
	@echo "Notice: Stylus + Nib + Canvas Required: npm install -g stylus nib canvas"
	@stylus -u nib -w theme-src/*.styl -o themes/

build:
	@echo "Notice: UglifyJS Required: npm install -g uglify-js"
	@uglifyjs humane.js > humane.min.js
	@echo "Built uglified JS - humane.min.js"
