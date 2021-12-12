# Laisee.org front page 

## A statically generated blog example using Next.js and Markdown

This example showcases Next.js's [Static Generation](https://nextjs.org/docs/basic-features/pages) feature using Markdown files as the data source.

The blog posts are stored in `/_posts` as Markdown files with front matter support. Adding a new Markdown file in there will create a new blog post.

To create the blog posts we use [`remark`](https://github.com/remarkjs/remark) and [`remark-html`](https://github.com/remarkjs/remark-html) to convert the Markdown files into an HTML string, and then send it down as a prop to the page. The metadata of every post is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter) and also sent in props to the page.

## Lightning Addresses

Lightning addresses are dynamically added by external script to `public/.well-known/lnurlp` directory

An example address: `user@laisee.org`

**PLEASE BE AWARE THAT ANY CHANGES TO FILES IN THIS DIRECTORY 
COULD ADVERSELY AFFECT TG USER ACCOUNTS, 
AS DATA IS NOT SYNCED WITH LNBITS OR POSTGRES**

## Demo

[https://laisee-frontpage.vercel.app/](https://laisee-frontpage.vercel.app/)


## How to run

```
git clone https://github.com/bitkarrot/laisee-frontpage
cd laisee-frontpage
npm i
npm run dev 
```

Your blog should be up and running on [http://localhost:3000](http://localhost:3000)! If it doesn't work, post on [GitHub discussions](https://github.com/vercel/next.js/discussions).

> **Pushing to this repo will auto deploy with Vercel**

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

## Preview

Preview the example live on [StackBlitz](http://stackblitz.com/):

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/bitkarrot/laisee-frontpage)



# Notes

This blog-starter uses [Tailwind CSS](https://tailwindcss.com). To control the generated stylesheet's filesize, this example uses Tailwind CSS' v2.0 [`purge` option](https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css) to remove unused CSS.
