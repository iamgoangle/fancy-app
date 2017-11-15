#!/bin/bash

echo "currency collection has been imported"
mongoimport --db dbName --collection collectionName --file fileName.json --jsonArray

echo "timezone collection has been imported"
mongoimport --db dbName --collection collectionName --file fileName.json --jsonArray

echo "language collection has been imported"
mongoimport --db dbName --collection collectionName --file fileName.json --jsonArray

echo "use collection has been imported"
mongoimport --db dbName --collection collectionName --file fileName.json --jsonArray