/*
  Warnings:

  - You are about to drop the column `animeId` on the `Episode` table. All the data in the column will be lost.
  - You are about to drop the `_AnimeToCharacter` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_AnimeToCrest` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_AnimeToDigimental` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_AnimeToDigimon` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_AnimeToDigivice` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Anime` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `seriesId` to the `Episode` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_AnimeToCharacter" DROP CONSTRAINT "_AnimeToCharacter_A_fkey";

-- DropForeignKey
ALTER TABLE "_AnimeToCharacter" DROP CONSTRAINT "_AnimeToCharacter_B_fkey";

-- DropForeignKey
ALTER TABLE "_AnimeToCrest" DROP CONSTRAINT "_AnimeToCrest_A_fkey";

-- DropForeignKey
ALTER TABLE "_AnimeToCrest" DROP CONSTRAINT "_AnimeToCrest_B_fkey";

-- DropForeignKey
ALTER TABLE "_AnimeToDigimental" DROP CONSTRAINT "_AnimeToDigimental_A_fkey";

-- DropForeignKey
ALTER TABLE "_AnimeToDigimental" DROP CONSTRAINT "_AnimeToDigimental_B_fkey";

-- DropForeignKey
ALTER TABLE "_AnimeToDigimon" DROP CONSTRAINT "_AnimeToDigimon_A_fkey";

-- DropForeignKey
ALTER TABLE "_AnimeToDigimon" DROP CONSTRAINT "_AnimeToDigimon_B_fkey";

-- DropForeignKey
ALTER TABLE "_AnimeToDigivice" DROP CONSTRAINT "_AnimeToDigivice_A_fkey";

-- DropForeignKey
ALTER TABLE "_AnimeToDigivice" DROP CONSTRAINT "_AnimeToDigivice_B_fkey";

-- DropForeignKey
ALTER TABLE "Anime" DROP CONSTRAINT "Anime_universeId_fkey";

-- DropForeignKey
ALTER TABLE "Episode" DROP CONSTRAINT "Episode_animeId_fkey";

-- AlterTable
ALTER TABLE "Episode" DROP COLUMN "animeId",
ADD COLUMN     "seriesId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_AnimeToCharacter";

-- DropTable
DROP TABLE "_AnimeToCrest";

-- DropTable
DROP TABLE "_AnimeToDigimental";

-- DropTable
DROP TABLE "_AnimeToDigimon";

-- DropTable
DROP TABLE "_AnimeToDigivice";

-- DropTable
DROP TABLE "Anime";

-- CreateTable
CREATE TABLE "Series" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "synopsis" TEXT NOT NULL,
    "originalAirDate" TIMESTAMP(3) NOT NULL,
    "universeId" INTEGER NOT NULL,

    CONSTRAINT "Series_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_DigimonToSeries" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_DigiviceToSeries" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_CharacterToSeries" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_DigimentalToSeries" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_CrestToSeries" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_DigimonToSeries_AB_unique" ON "_DigimonToSeries"("A", "B");

-- CreateIndex
CREATE INDEX "_DigimonToSeries_B_index" ON "_DigimonToSeries"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DigiviceToSeries_AB_unique" ON "_DigiviceToSeries"("A", "B");

-- CreateIndex
CREATE INDEX "_DigiviceToSeries_B_index" ON "_DigiviceToSeries"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CharacterToSeries_AB_unique" ON "_CharacterToSeries"("A", "B");

-- CreateIndex
CREATE INDEX "_CharacterToSeries_B_index" ON "_CharacterToSeries"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DigimentalToSeries_AB_unique" ON "_DigimentalToSeries"("A", "B");

-- CreateIndex
CREATE INDEX "_DigimentalToSeries_B_index" ON "_DigimentalToSeries"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CrestToSeries_AB_unique" ON "_CrestToSeries"("A", "B");

-- CreateIndex
CREATE INDEX "_CrestToSeries_B_index" ON "_CrestToSeries"("B");

-- AddForeignKey
ALTER TABLE "Series" ADD CONSTRAINT "Series_universeId_fkey" FOREIGN KEY ("universeId") REFERENCES "Universe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Episode" ADD CONSTRAINT "Episode_seriesId_fkey" FOREIGN KEY ("seriesId") REFERENCES "Series"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DigimonToSeries" ADD FOREIGN KEY ("A") REFERENCES "Digimon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DigimonToSeries" ADD FOREIGN KEY ("B") REFERENCES "Series"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DigiviceToSeries" ADD FOREIGN KEY ("A") REFERENCES "Digivice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DigiviceToSeries" ADD FOREIGN KEY ("B") REFERENCES "Series"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterToSeries" ADD FOREIGN KEY ("A") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterToSeries" ADD FOREIGN KEY ("B") REFERENCES "Series"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DigimentalToSeries" ADD FOREIGN KEY ("A") REFERENCES "Digimental"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DigimentalToSeries" ADD FOREIGN KEY ("B") REFERENCES "Series"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CrestToSeries" ADD FOREIGN KEY ("A") REFERENCES "Crest"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CrestToSeries" ADD FOREIGN KEY ("B") REFERENCES "Series"("id") ON DELETE CASCADE ON UPDATE CASCADE;
