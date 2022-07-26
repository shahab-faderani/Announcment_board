const {PrismaClient} = require("@prisma/client");
const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3001;
const bodyParser = require("body-parser");
const uuid = require("uuid");
const cors = require("cors");
const api_route = "/api/v1";
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
const prisma = new PrismaClient();

//get all announcements
app.get(api_route + "/announcements", async (req, res) => {
    try {
        const announcements = await prisma.announcements.findMany();
        res.status(200).json({
            status: "success",
            length: announcements.length,
            data: {
                announcements: announcements
            }
        });
    } catch(err) {
        console.log(err);
    }
});

//make an announcement
app.post(api_route + "/announcements", async (req, res) => {
    

    try {
        const announcement = await prisma.announcements.create({
            data: {
                uuid: uuid.v4(),
                content: req.body.content,
                username: req.body.username,
                date: req.body.date
            }

        });
        
        res.status(201).json({
            status: "success",
            data: {
                announcement: announcement
            }
        });
    } catch (err) {
        console.log(err);
    }
});

//delete an announcement
app.delete(api_route + "/announcements/:id", async (req, res) => {
    try {
        const announcement = await prisma.announcements.delete({
            where: {
                uuid: req.params.id
            }
        });
        res.status(203).json({
            status: "success",
            uuid: announcement.uuid
        });
        
    } catch (err) {
        console.log(err);
    }
});

app.listen(port, () => {
    console.log(`Server is up and listening on port ${port}`);
});
