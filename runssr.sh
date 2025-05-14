#!/bin/sh
# ./runssr.sh

rm -rf public_landing
rm -rf public_ssr_landing
# npm run build
# npm run ssrbuild:win
# npm run ssr:win

npm run landing:build
npm run landing:ssrbuild:win
npm run landing:ssr:win