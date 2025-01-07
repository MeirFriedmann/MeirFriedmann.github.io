#!/bin/bash
PID=$(lsof -t -i :$5000)
if [ -z "$PID" ]; then
echo "No process found running on port"
else
echo "Killing process $PID running on port..."
kill -9 $PID
echo "Process $PID has been terminated."
fi
rm -rf ./MeirFriedmann.github.io/
git clone https://github.com/meirfriedmann/MeirFriedmann.github.io.git
node ./MeirFriedmann.github.io/backend/server.js
