#!/bin/bash

file_name=$1

echo "const myState = {"
while read line
do
    [ -z "$line" ] && continue                                                  # skip if line empty
    echo $line|awk -F'='  '{ print " "$1": `"$2"`,"}'|grep -iv '^#'
done < $file_name

if [[ ! -z "$line" ]]; then
    echo $line|awk -F'='  '{ print " "$1": `"$2"`,"}'|grep -iv '^#'
fi

echo "};"