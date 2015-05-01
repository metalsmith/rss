import tape from "tape"

import Metalsmith from "metalsmith"
import rss from "../src"

tape("metalsmith-rss", t => {
  new Metalsmith(__dirname)
    .use(
      (files, metalsmith) => {
        metalsmith.metadata().collections = {
          "posts": [{}],
        }
      }
    )
    .use(
      rss({
        feedOptions: {
          title: "test",
          site_url: "http://test.test",
        },
      })
    )
    .use(files => {
      t.ok(Object.keys(files).indexOf("rss.xml") > -1, "should create an rss file")
      t.end()
    })
    .build(err => {if (err) {throw err}})
})
