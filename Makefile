WEBPACK_COMMAND=yarn -s run webpack

build:
	${WEBPACK_COMMAND} --mode development

server:
	${WEBPACK_COMMAND} serve --mode development
