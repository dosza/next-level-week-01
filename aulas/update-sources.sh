#!/bin/bash
dirs=(
	"server"
	"web"
	"mobile"
)
start_dir=$PWD
for i in ${!dirs[*]}
do
	cd  ${dirs[i]}
	yarn upgrade
	cd ..
done

cd $start_dir
