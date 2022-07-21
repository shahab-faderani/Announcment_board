const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3001;
const bodyParser = require("body-parser");
const uuid = require("uuid");
const cors = require("cors");
const db = require("./db");
const api_route = "/api/v1";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//get all announcements
app.get(api_route + "/announcements", async (req, res) => {
    try {
        const announcementsFromDB = await db.query(
           "SELECT * FROM announcements;" 
        );

        res.status(200).json({
            status: "success",
            results: announcementsFromDB.rows.length,
            data: {
                announcements: announcementsFromDB.rows
            }
        });
    } catch(err) {
        console.log(err);
    }
});

//make an announcement
app.post(api_route + "/announcements", async (req, res) => {
    console.log(req.body);

    try {
        const announcementsFromDB = await db.query(
            "INSERT INTO announcements (content, date, userName, uuid) VALUES ($1, $2, $3) RETURNING *;",
            [req.body.content, req.body.date, req.body.userName, uuid.v4()]
        );
        console.log(announcementsFromDB);
        res.status(201).json({
            status: "success",
            data: {
                announcement: announcementsFromDB.rows[0]
            }
        });
    } catch (err) {
        console.log(err);
    }
});

//delete an announcement
app.delete(api_route + "/announcements/:id", async (req, res) => {
    try {
        const announcementsFromDB = await db.query(
            "DELETE FROM announcements where id = $1 RETURNING *;",
            req.params.id
        );
        console.log(announcementsFromDB);
        res.status(204).json({
            status: "success",
            data: {
                announcements: announcementsFromDB.rows
            }
        });
    } catch (err) {
        console.log(err);
    }
});

app.listen(port, () => {
    console.log(`Server is up and listening on port ${port}`);
});
