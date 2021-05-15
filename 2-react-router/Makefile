SRC_PATH=./src

build:
	yarn -s run webpack --mode development

server:
	yarn -s run webpack serve --mode development

server/ls:
	lsof -i :8080

static-analysis: eslint prettier

static-analysis-fix: eslint-fix prettier-fix

eslint:
	yarn -s run eslint ${ESLINT_OPTION} '${SRC_PATH}/js/**/*.js'

eslint-fix:
	make eslint ESLINT_OPTION=--fix

prettier:
	yarn -s run prettier -c ${ESLINT_OPTION} '${SRC_PATH}/js/**/*.js'

prettier-fix:
	make prettier ESLINT_OPTION=--write

