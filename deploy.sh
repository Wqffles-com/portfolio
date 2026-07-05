#!/bin/bash
set -e

bun run build
rsync -a --delete --exclude favicon.svg --exclude icons.svg dist/ /srv/wqffles/
