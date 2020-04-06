#!/bin/bash

# Path to this plugin
PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"

# Directory to write generated code to (.js and .d.ts files)
OUT_DIR="./back"
mkdir -p $OUT_DIR

# Look for proto files in back
PROTO_FILES=$(find ./back -name "*.proto")
echo "Generating following proto files :"

protoc \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --js_out="import_style=commonjs,binary:${OUT_DIR}" \
    --ts_out="${OUT_DIR}" \
    --proto_path="./back" \
    $PROTO_FILES
