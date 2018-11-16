#!/bin/bash
## chmod u+x deploy.sh

# clean out previous generated files
rm generated/*.vue

# run the generator
node getComponents

## The vue cli run prettier. This next call runs prettier on our generated file so we can checkin a file
## that is exactly what the vue cli wants.
node ../client/node_modules/\@vue/eslint-config-prettier/node_modules/.bin/prettier --write --no-semi --single-quote=true routes/insideRoutes.js

# place the generated content into the client
cp generated/*.vue ../client/src/inside/views/
cp routes/menuList.json ../client/src/
cp routes/insideRoutes.js ../client/src/
