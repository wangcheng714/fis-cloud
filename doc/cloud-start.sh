#!/usr/bin/env bash 

nohup fis-cloud start --port 8889 >server.log 2>&1 &
nohup mongod --port 8887 --dbpath=/home/wangcheng/dbdata >mongo.log 2>&1 &
