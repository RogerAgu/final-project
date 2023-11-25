/*
  Warnings:

  - You are about to drop the column `countryId` on the `holaday` table. All the data in the column will be lost.
  - Added the required column `countryName` to the `holaday` table without a default value. This is not possible if the table is not empty.
  - Added the required column `holadayDate` to the `holaday` table without a default value. This is not possible if the table is not empty.
  - Added the required column `holadayName` to the `holaday` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `holaday` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "holaday" DROP COLUMN "countryId",
ADD COLUMN     "countryName" TEXT NOT NULL,
ADD COLUMN     "holadayDate" TEXT NOT NULL,
ADD COLUMN     "holadayName" TEXT NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL;
