CREATE TABLE announcments (
    uuid BIGSERIAL NOT NULL PRIMARY KEY,
    userName VARCHAR(80) NOT NULL,
    content TEXT NOT NULL,
    date TEXT
);

INSERT INTO announcments (
    content,
    date,
    userName,
    uuid
)
VALUES
    ( 
        "It's just like, damn - I'm competing with myself.",
        "2008-06-17T073848.319Z",
        "Cardi B",
        "e2cbb5c1-a8f8-4d3c-a85a-e5861fa4b4a0"
    ), 
    (
        "I don't like to lose.",
        "2010-05-14T073805.937Z",
        "Serena",
        "924d88a4-9a0c-4362-af1c-80557d7e577d"
    ), 
    (
        "You have to adress the fact that what youre saying has been said a million times before.",
        "2010-07-05T073705.599Z",
        "Hasan",
        "9bb63b57-00d4-47d2-b0df-4f6fb11f7bf6"
    ), 
    (
        "They misunderestimated me!!!",
        "2011-02-11T073530.213Z",
        "George",
        "83ce2b43-e1de-4a7a-a296-c7aa1783738a"
    ), 
    (
        "I think if this country gets any kinder or gentler, it's literally going to cease to exist.",
        "2018-01-10T073334.292Z",
        "Donald Jr",
        "53aa8c7e-ca63-45e1-8eb2-a34ccb090c47"
    ), 
    (
        "I don't believe in violence.",
        "2020-04-15T073209.057Z",
        "Will",
        "c7177d8e-e883-4fd3-bdbb-cdca9336f4b1"
    ), 
    (
        "You wanna know 'ow I make diz country bettah? Iz simple, two words keep it real!",
        "2021-09-02T073047.865Z",
        "Ali G",
        "44ea3c02-2e9a-4742-bfe2-d2a7e36b22bb"
    ), 
    (
        "I feel that I'm very blessed!",
        "2021-12-14T072924.047Z",
        "Kanye",
        "42080ead-ba7a-4a9a-a401-1483a8a4f5fb"
    ), 
    (
        "Ask Not What Your Country Can Do For You!",
        "2022-01-14T072729.453Z",
        "John",
        "677a47e4-8c1b-4f68-b986-a07a869a2c5a"
    ), 
    (
        "My dog stepped on a bee '(",
        "2022-06-02T072617.792Z",
        "Amber",
        "3e5a8d47-6a7d-4ec8-9abd-242f15b4f66e"

    ), 
    (
        "You will face many defeats in life, but never let yourself be defeated!",
        "2022-06-15T072549.842Z",
        "Maya",
        "9e3634ad-4347-4ea6-9f79-6beaa2b549ff",

    ), 
    (
        "Hello lovely neighbours ) does someone of you all have a ladder to lend?",
        "2022-06-17T072341.640Z",
        "Hasan ",
        "8cd0c90e-8d7f-4421-9262-fafaf8e2c80a"
    ); 