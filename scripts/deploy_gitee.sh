rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "deploy" &&
git remote add origin git@gitee.com:Eva_L/coriander-ui-website.git &&
git push -f -u origin master &&
cd -
echo https://eva_l.gitee.io/coriander-ui-website/index.html#/