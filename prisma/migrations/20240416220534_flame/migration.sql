/*
  Warnings:

  - Added the required column `room` to the `flame` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "flame" ADD COLUMN     "room" INTEGER NOT NULL;
