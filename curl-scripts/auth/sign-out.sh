#!/bin/bash
# sh curl-scripts/auth/sign-out.sh

TOKEN="e9036e120095734f57f86cc4d38a7371"

API="http://localhost:4741"
URL_PATH="/sign-out"

curl "${API}${URL_PATH}/" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}"

echo
