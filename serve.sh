#!/bin/bash
docker run \
  -v="/$PWD:/srv/jekyll" \
  -p 35729:35729 -p 4000:4000 \
  -it jekyll/builder:3.3.0 \
  jekyll serve --watch --force_polling --incremental