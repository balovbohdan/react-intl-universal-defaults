#!/bin/sh

# Exit on CI
[ -n "$CI" ] && exit 0

husky install
