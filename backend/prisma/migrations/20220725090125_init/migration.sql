-- CreateTable
CREATE TABLE "announcements" (
    "uuid" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "announcements_uuid_key" ON "announcements"("uuid");
