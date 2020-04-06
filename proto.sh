#!/bin/bash

# Path to this plugin
PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"

# Directory to write generated code to (.js and .d.ts files)
TS_OUT="./back"
JS_OUT="./build/js/back"

# Look for proto files in back
PROTO_FILES=$(find ./back -name "*.proto")
echo "Generating all proto files ... "

protoc \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --js_out="import_style=commonjs,binary:${JS_OUT}" \
    --ts_out="${TS_OUT}" \
    --proto_path="./back" \
    $PROTO_FILES

echo "Done !"
