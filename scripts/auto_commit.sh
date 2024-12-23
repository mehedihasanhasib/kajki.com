#!/bin/bash

# Navigate to the Laravel project root
PROJECT_DIR=$(dirname "$(dirname "$(readlink -f "$0")")")
cd "$PROJECT_DIR"

# Watch for file changes in the Laravel project
inotifywait -m -r -e modify,create,delete --format '%w%f' . | while read FILE
do
    git add "$FILE"
    git commit -m "Auto-commit: Updated $FILE"
done

