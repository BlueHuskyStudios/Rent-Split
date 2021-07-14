
rm -r ./_site/

bundle check
bundleCheckStatus=$?

if [ 0 -ne $bundleCheckStatus ]; then
    printf "Updating Ruby gems...\n"
    source updateGems.sh
fi

# jekyll serve --trace --incremental
bundle exec jekyll serve --trace --incremental --safe
