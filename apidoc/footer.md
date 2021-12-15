### Pre-commit hook

It is useful to use a pre-commit hook to make sure the code you are committing is error-free (as much as possible at least). For that start by renaming the file `.git/hooks/pre-commit.sample` to `.git/hooks/pre-commit`, and add this before the last "exec" line:

~~~bash
# test/linting pre-commit hook
reset="\e[0m"
red="\e[0;31m"
set -e
if ! npm run pre-commit
then
    printf "${red}error${reset} Pre-commit script found a problem!.\n"
    exit 1
fi
~~~

### i18n

Language files are located in `template/locales`.
