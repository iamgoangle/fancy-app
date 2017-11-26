#!/bin/bash

echo "currency collection has been imported"
mongoimport --db fancy-app --collection currencies --file ./collections/currencies.json --jsonArray

echo "timezone collection has been imported"
mongoimport --db fancy-app --collection timezones --file ./collections/timezones.json --jsonArray

echo "languages collection has been imported"
mongoimport --db fancy-app --collection languages --file ./collections/languages.json --jsonArray

echo "users collection has been imported"
mongoimport --db fancy-app --collection users --file ./collections/users.json --jsonArray