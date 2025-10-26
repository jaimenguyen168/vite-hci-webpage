#!/bin/bash
if [[ "$VERCEL_GIT_COMMIT_AUTHOR_LOGIN" == "tina-cloud-app[bot]" ]] || [[ "$VERCEL_GIT_COMMIT_MESSAGE" == *"TinaCMS content update"* ]]; then
  echo "Ignoring TinaCMS commit"
  exit 0
fi
echo "Proceeding with build"
exit 1