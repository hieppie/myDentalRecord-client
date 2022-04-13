#!/bin/sh

# sh curl-scripts/treatment/index.sh 

TOKEN="938cb30715f34ea79b024f905cadc0c1"

API="http://localhost:4741"
URL_PATH="/treatments"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
