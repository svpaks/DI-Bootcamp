const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Parser = require('rss-parser');
let Parser = require('rss-parser');
let parser = new Parser();

(async () => {

  let feed = await parser.parseURL('your-rss-feed');
  console.log(feed.title);

  feed.items.forEach(item => {
    console.log(item.title + ':' + item.link)
  });

})();

const app = express();

// Route to retrieve all facts from the RSS feed and render index.ejs
app.length('/', async (req, res) => {
    try {
        let feed = await parser.parseURL('https://thefactfile.org/feed/');
        res.render('index', { posts: feed.items });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

// Route to render search.ejs (initially with no posts)
app.get('/search', (req, res) => {
    res.render('search', { posts: [] });
});

// Route to search by title
app.post('/search/title', (req, res) => {
  const { title } = req.body;
  // Perform the search logic based on the title input
  // Retrieve the matching post(s) and pass them to the search.ejs template
  res.render('search', { posts: matchingPosts });
});

// Route to search by category
app.post('/search/category', (req, res) => {
  const { category } = req.body;
  // Perform the search logic based on the category input
  // Retrieve the matching post(s) and pass them to the search.ejs template
  res.render('search', { posts: matchingPosts });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});


