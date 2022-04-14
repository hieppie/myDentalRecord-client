#!/bin/bash

# sh curl-scripts/treatment/create.sh 

TOKEN="5df5407a373cacc9b97a7649e49d9401"
NAME="Root Canal"
TOOTH="15"
RADIOGRAPH="Panoramic"
DATE="April 11, 2020"

API="http://localhost:4741"
URL_PATH="/treatments"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "treatment": {
      "name": "'"${NAME}"'",
      "tooth": "'"${TOOTH}"'",
       "radiograph": "'"${RADIOGRAPH}"'",
      "date": "'"${DATE}"'"
    }
  }'

echo
