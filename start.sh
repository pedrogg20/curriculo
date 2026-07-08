#!/bin/bash

cd "$(dirname "$0")/src"

echo "Iniciando servidor local..."
echo "Acesse: http://localhost:8080"
echo ""
python3 -m http.server 8080
