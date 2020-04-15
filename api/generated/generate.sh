#!/bin/bash

# Path to this plugin
PROTOC_GEN_TS_PATH="../node_modules/.bin/protoc-gen-ts"

# Directory to write generated code to (.js and .d.ts files)
TS_OUT="../src"
JS_OUT="./js/src"
mkdir -p $TS_OUT
mkdir -p $JS_OUT

# Look for proto files in back
PROTO_FILES=$(find ${TS_OUT} -name "*.proto" | xargs echo )
echo "Generating proto files : "
echo "$PROTO_FILES"

protoc \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --js_out="import_style=commonjs,binary:${JS_OUT}" \
    --ts_out="${TS_OUT}" \
    --proto_path="${TS_OUT}" \
    $PROTO_FILES