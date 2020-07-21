#!/bin/bash
dirs=(
	"server"
	"web"
	"mobile"
)
for i in ${!dirs[*]}
do
	cd  ${dirs[i]}
	yarn upgrade
	cd ..
done
