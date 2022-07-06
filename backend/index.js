const express = require("express");
const app = express();
const port = 3001;
const bodyParser = require("body-parser");
const uuid = require("uuid");
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//for testing purposes I initiate the server with some announcements already in it. 

let announcements = [{
    "content": "Hello lovely neighbours :) does someone of you all have a ladder to lend?",
    "date": "2022-06-17T07:23:41.640Z",
    "userName": "Hasan ",
    "uuid": "8cd0c90e-8d7f-4421-9262-fafaf8e2c80a"
}, {
    "content": "You will face many defeats in life, but never let yourself be defeated!",
    "date": "2022-06-15T07:25:49.842Z",
    "userName": "Maya",
    "uuid": "9e3634ad-4347-4ea6-9f79-6beaa2b549ff"
}, {
    "content": "My dog stepped on a bee :'(",
    "date": "2022-06-02T07:26:17.792Z",
    "userName": "Amber",
    "uuid": "3e5a8d47-6a7d-4ec8-9abd-242f15b4f66e"
}, {
    "content": "Ask Not What Your Country Can Do For You!",
    "date": "2022-01-14T07:27:29.453Z",
    "userName": "John",
    "uuid": "677a47e4-8c1b-4f68-b986-a07a869a2c5a"
}, {
    "content": "I feel that I'm very blessed!",
    "date": "2021-12-14T07:29:24.047Z",
    "userName": "Kanye",
    "uuid": "42080ead-ba7a-4a9a-a401-1483a8a4f5fb"
}, {
    "content": "You wanna know 'ow I make diz country bettah? Iz simple, two words: keep it real!",
    "date": "2021-09-02T07:30:47.865Z",
    "userName": "Ali G",
    "uuid": "44ea3c02-2e9a-4742-bfe2-d2a7e36b22bb"
}, {
    "content": "I don't believe in violence.",
    "date": "2020-04-15T07:32:09.057Z",
    "userName": "Will",
    "uuid": "c7177d8e-e883-4fd3-bdbb-cdca9336f4b1"
}, {
    "content": "I think if this country gets any kinder or gentler, it's literally going to cease to exist.",
    "date": "2018-01-10T07:33:34.292Z",
    "userName": "Donald Jr",
    "uuid": "53aa8c7e-ca63-45e1-8eb2-a34ccb090c47"
}, {
    "content": "They misunderestimated me!!!",
    "date": "2011-02-11T07:35:30.213Z",
    "userName": "George",
    "uuid": "83ce2b43-e1de-4a7a-a296-c7aa1783738a"
}, {
    "content": "You have to adress the fact that what youre saying has been said a million times before.",
    "date": "2010-07-05T07:37:05.599Z",
    "userName": "Hasan",
    "uuid": "9bb63b57-00d4-47d2-b0df-4f6fb11f7bf6"
}, {
    "content": "I don't like to lose.",
    "date": "2010-05-14T07:38:05.937Z",
    "userName": "Serena",
    "uuid": "924d88a4-9a0c-4362-af1c-80557d7e577d"
}, {
    "content": "It's just like, damn - I'm competing with myself.",
    "date": "2008-06-17T07:38:48.319Z",
    "userName": "Cardi B",
    "uuid": "e2cbb5c1-a8f8-4d3c-a85a-e5861fa4b4a0"
}].reverse();

app.get("/announcements", (req, res) => {
  res.send(announcements);
});

app.post("/announcements", (req, res) => {
  if (req.body && req.body.content && req.body.userName && req.body.date)
    {let announcement = req.body;
    announcement.uuid = uuid.v4();
    announcements.push(announcement);
    res.json(announcements);
  } else {
    res.sendStatus(400)
    }
});

app.delete("/announcements/:id", (req, res) => {
  announcements = announcements.filter(({ uuid }) => uuid !== req.params.id);
  res.json(announcements);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
