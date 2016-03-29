# ohministries.github.io

Ouachita Hills Ministries Jekyll site

## First-time install

```
git clone https://github.com/ohministries/ohministries.github.io.git
cd ohministries.github.io
sudo gem install jekyll
jekyll serve --watch
```

Open `http://localhost:4000/` in a browser.

## Launching website any other time

1. `cd` into `ohministries.github.io` folder
2. Run `jekyll serve --watch`. (Long build times getting you down? Try adding the `--incremental` option.)
3. Open `http://localhost:4000/` in a browser.

## Dev Dependencies

- Git
- Jekyll

## Content Editing Documentation

### Page and Post Frontmatter

Frontmatter is the information between the two `---` at the beggining of a page's `.md` file. Frontmatter for posts
and pages includes:

* `title`
* `sort` - allows you to specify an integer for use when sorting pages in navigation
* `hero-image` - url of the image to be placed at the top of the page
* `hero-position` - number between 0 and 100 specifying how the hero image should be positioned in its frame
* `thumbnail` - url to small image to be used as thumbnail in listings