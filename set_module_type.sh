#!/bin/bash

# Create package.json in CJS output directory
cat >dist/cjs/package.json <<EOF
{
  "type": "commonjs"
}
EOF

# Create package.json in ESM output directory
cat >dist/esm/package.json <<EOF
{
  "type": "module"
}
EOF

echo "Module type files created successfully"
