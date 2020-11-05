rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "deploy" &&
git branch -M main &&
git remote add origin git@github.com:EvaLLLLL/corianderUI-website.git &&
git push -f -u origin main &&
cd -
echo https://evalllll.github.io/corianderUI-website/index.html#/