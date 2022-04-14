#!/bin/sh

# sh curl-scripts/treatment/show.sh 

TOKEN="5cd283f8ee82b0a20c58c69a12bb285c"
ID="62576f288fd35a0af6b7998d"

API="http://localhost:4741"
URL_PATH="/treatments"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
