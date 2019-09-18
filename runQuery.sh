#/bin/bash

odasa runQuery --verbose --query ../AsyncAnalysis/refactoring.ql --snapshot ~/Documents/odasa/projects/testsuite/rev* --select $1
