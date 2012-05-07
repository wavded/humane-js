project=humane

all: tmux

watch:
	@echo "Notice: Stylus + Nib + Canvas Required: npm install -g stylus nib canvas"
	@stylus -u nib -w theme-src/*.styl -o themes/

build:
	@echo "Notice: UglifyJS Required: npm install -g uglify-js"
	@uglifyjs humane.js > humane.min.js
	@echo "Built uglified JS - humane.min.js"

tmux_setup:
	@tmux new-session   -s ${project} -d -n workspace
	@tmux split-window  -t ${project} -h
	@tmux split-window  -t ${project} -v
	@tmux select-pane   -t ${project}:1.0
	@tmux select-pane   -t ${project}:1.1
	@tmux resize-pane   -t ${project} -D 2
	@tmux select-layout -t ${project} main-vertical
	@tmux send-keys     -t ${project}:1.0 'vim' C-m
	@tmux send-keys     -t ${project}:1.1 'make watch' C-m
	@tmux select-pane   -t ${project}:1.0
	@tmux resize-pane   -t ${project} -R 40

tmux:
	@if ! tmux has-session -t ${project}; then exec make tmux_setup; fi
	@tmux attach -t ${project}
