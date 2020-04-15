#!/bin/bash

# Path to this plugin
PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"

# Directory to write generated code to (.js and .d.ts files)
TS_OUT="./api"
JS_OUT="./generated/js"
mkdir -p $TS_OUT
mkdir -p $JS_OUT

# Look for proto files in back
PROTO_FILES=$(find ./api -name "*.proto")
echo "Generating proto files : "
echo "$PROTO_FILES"

protoc \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --js_out="import_style=commonjs,binary:${JS_OUT}" \
    --ts_out="${TS_OUT}" \
    --proto_path="./back" \
    "$PROTO_FILES"
