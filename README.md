# metalsmith-rss [![Travis Build Status](https://travis-ci.org/MoOx/metalsmith-rss.svg)](https://travis-ci.org/MoOx/metalsmith-rss)

> Metalsmith plugin to generate rss feed

<a target='_blank' rel='nofollow' href='https://app.codesponsor.io/link/6RNUx3a3Vj2k5iApeppsc9L9/MoOx/metalsmith-rss'>
  <img alt='Sponsor' width='888' height='68' src='https://app.codesponsor.io/embed/6RNUx3a3Vj2k5iApeppsc9L9/MoOx/metalsmith-rss.svg' />
</a>

## Installation

```console
$ npm install metalsmith-rss
```

## Usage

```js
import Metalsmith from "metalsmith"
import collections from "metalsmith-collections"
import rss from "metalsmith-rss"

new Metalsmith("./")
  .use(
    collections({
      //...
    })
  )
  .use(
    rss({
      feedOptions: {
        title: "test",
        site_url: "http://test.test",
      },
    })
  )
  .build(err => {if (err) {throw err}})
```

### Options

#### `feedOptions`

[RSS options](https://github.com/dylang/node-rss)

`site_url` is mandatory.

#### `collection` (default: `"posts"`)

Collection to use

#### `limit` (default: `20`)

Limit of items to put in the rss feed

#### `encoding` (default: `"utf8"`)

RSS encoding

### `destination` (default: `"rss.xml"`)

Destination of the rss feed


## [Changelog](CHANGELOG.md)

## [License](LICENSE)
