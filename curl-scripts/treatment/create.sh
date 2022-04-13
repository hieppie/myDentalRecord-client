#!/bin/bash

# sh curl-scripts/treatment/create.sh 

TOKEN="938cb30715f34ea79b024f905cadc0c1"
NAME="fill"
TOOTH="14"
RADIOGRAPH="Pas"
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
