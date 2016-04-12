[![Travis CI status](https://travis-ci.org/ohministries/ohministries.github.io.svg?branch=master)](https://travis-ci.org/ohministries/ohministries.github.io)

# ohministries.github.io

Ouachita Hills Ministries Jekyll site

## Setting Up Local Development Environment

### First-time install

Clone the repo onto your computer, `cd` into that directory in terminal, and then run the following commands:

```
sudo gem install jekyll
sudo gem install jekyll-sitemap
jekyll serve --watch
```

Open `http://localhost:4000/` in a browser.

### Launching website any other time

1. `cd` into `ohministries.github.io` folder
2. Run `jekyll serve --watch`. (Long build times getting you down? Try adding the `--incremental` option.)
3. Open `http://localhost:4000/` in a browser.

### Work Flow Best Practices

If possible, work locally using the 
[feature branch workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/centralized-workflow).

### Dev Dependencies

- Git
- Jekyll
- `jekyll-sitemap` gem

## Editing Content

### Navigation and Page Hierarchy

Tier | Contains                                                    | Notes
-----|-------------------------------------------------------------|-------
1    | Academy and College section homes; generic Ministries pages |
2    | Section subpages                                            | Content of a subpage with children is inaccessible
3    | Section grandchildren                                       | Exposed in in-page navigation
4    | Section grandchildren tabs                                  | Exposed in in-page tabbed interface

### Page and Post Frontmatter

Frontmatter is the information between the two `---` at the beggining of a page's `.md` file. Frontmatter for posts
and pages includes:

* `title`
* `sort` - allows you to specify an integer for use when sorting pages in navigation
* `hero-image` - url of the image to be placed at the top of the page
* `hero-position` - number between 0 and 100 specifying how the hero image should be positioned in its frame
* `thumbnail` - url to small image to be used as thumbnail in listings
* `exclude-from-nav` - Bool. If set to true, page is hidden from navigation, but is still otherwise accessible.
* `images` - list of image urls to be pulled into an image gallery on the page
* `redirect` - url page should instantly redirect to

## Resources

### Markdown

- [Markdown syntax](http://daringfireball.net/projects/markdown/syntax)
- [Markdown tables syntax](https://help.github.com/articles/organizing-information-with-tables/)

### GIT

- [GIT Book](https://git-scm.com/book/en/v2)