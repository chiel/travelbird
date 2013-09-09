#!/bin/bash
mkdir -p ./public
./node_modules/wrapup/bin/wrup.js -r ./src/js/main.js -o ./public/main.js

