SRC_PATH=./src

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
