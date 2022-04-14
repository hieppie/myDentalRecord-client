#!/bin/sh

# sh curl-scripts/treatment/index.sh 

TOKEN="5cd283f8ee82b0a20c58c69a12bb285c"

API="http://localhost:4741"
URL_PATH="/treatments"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
