#!/bin/bash

# Define the file path
file="./node_modules/@sanity/types/lib/dts/src/index.d.ts"

# Define the sed command to remove the 'const' keyword from TType and TName variables
sed -i '' -e 's/const TType/   TType/' "$file"
sed -i '' -e 's/const TName/   TName/' "$file"

echo "Modifications applied successfully."