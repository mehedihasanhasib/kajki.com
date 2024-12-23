#!/bin/bash

# Navigate to the Laravel project root
PROJECT_DIR=$(dirname "$(dirname "$(readlink -f "$0")")")
cd "$PROJECT_DIR"

# Continuous monitoring for file changes
while true; do
    # Wait for any file change (modify, create, delete)
    FILE=$(inotifywait -r -e modify,create,delete --format '%w%f' .)

    # If a file change is detected, stage and commit it
    if [ -n "$FILE" ]; then
        git add "$FILE"
        git commit -m "Auto-commit: Detected change in $FILE"
        echo "Committed changes for $FILE"
    fi
done

