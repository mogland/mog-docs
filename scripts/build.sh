# in doc
pnpm run build
mkdir -p dist
cp -r src/.vitepress/dist/* dist/
echo 'mog.js.org' > dist/CNAME
rm -rf dist/index.html # 移除 vitepress 生成的 index.html

# in index page
git clone https://github.com/mogland/mog.js.org.git
cd mog.js.org
pnpm i
pnpm run build
cd ..
cp -r mog.js.org/out/* dist/

rm -rf mog.js.org

# in blog
git clone https://github.com/mogland/blog.git
cd blog
pnpm i
pnpm run build
cd ..
mkdir -p dist/blog
cp -r blog/.vitepress/dist/* dist/blog/
cp -r dist/blog/assets dist/assets/

rm -rf blog