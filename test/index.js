const test = require("tap").test

const Metalsmith = require("metalsmith")
const rss = require("../lib")

test("metalsmith-rss", t => {
  new Metalsmith(__dirname)
    .use((files, metalsmith) => {
      metalsmith.metadata().collections = {
        posts: [{}],
      }
    })
    .use(
      rss({
        feedOptions: {
          title: "test",
          site_url: "http://test.test",
        },
      }),
    )
    .use(files => {
      t.ok(
        Object.keys(files).indexOf("rss.xml") > -1,
        "should create an rss file",
      )
      t.end()
    })
    .build(err => {
      if (err) {
        throw err
      }
    })
})
