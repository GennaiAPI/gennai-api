-- CreateEnum
CREATE TYPE "DigiviceType" AS ENUM ('CLASSIC', 'D_3');

-- CreateTable
CREATE TABLE "Family" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "symbol" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Family_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rank" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Rank_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Attribute" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "symbol" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Attribute_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Element" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Element_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Digimon" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "rankId" INTEGER NOT NULL,
    "attributeId" INTEGER NOT NULL,
    "elementId" INTEGER,
    "digimentalId" INTEGER,

    CONSTRAINT "Digimon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Universe" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Universe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Anime" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "synopsis" TEXT NOT NULL,
    "originalAirDate" TIMESTAMP(3) NOT NULL,
    "universeId" INTEGER NOT NULL,

    CONSTRAINT "Anime_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Episode" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "synopsis" TEXT NOT NULL,
    "originalAirDate" TIMESTAMP(3) NOT NULL,
    "animeId" INTEGER NOT NULL,

    CONSTRAINT "Episode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Movie" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "synopsis" TEXT NOT NULL,
    "originalAirDate" TIMESTAMP(3) NOT NULL,
    "universeId" INTEGER NOT NULL,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Character" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "isDigiDestined" BOOLEAN NOT NULL,

    CONSTRAINT "Character_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Digivice" (
    "id" SERIAL NOT NULL,
    "digiDestinedId" INTEGER NOT NULL,
    "colors" VARCHAR(255)[],
    "type" "DigiviceType" NOT NULL,

    CONSTRAINT "Digivice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Crest" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "digiDestinedId" INTEGER NOT NULL,
    "digimentalId" INTEGER NOT NULL,

    CONSTRAINT "Crest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Digimental" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "digiDestinedId" INTEGER NOT NULL,

    CONSTRAINT "Digimental_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_DigimonToFamily" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_AttrWeakStrong" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ElemWeakStrong" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_PriorNext" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_AnimeToDigimon" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_DigimonToEpisode" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_DigimonToMovie" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_CharacterToUniverse" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_AnimeToDigivice" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_AnimeToCharacter" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_AnimeToCrest" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_CharacterToEpisode" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_CharacterToMovie" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_DigiviceToMovie" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Family_name_key" ON "Family"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Digimon_name_key" ON "Digimon"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Crest_digiDestinedId_key" ON "Crest"("digiDestinedId");

-- CreateIndex
CREATE UNIQUE INDEX "Crest_digimentalId_key" ON "Crest"("digimentalId");

-- CreateIndex
CREATE UNIQUE INDEX "Digimental_digiDestinedId_key" ON "Digimental"("digiDestinedId");

-- CreateIndex
CREATE UNIQUE INDEX "_DigimonToFamily_AB_unique" ON "_DigimonToFamily"("A", "B");

-- CreateIndex
CREATE INDEX "_DigimonToFamily_B_index" ON "_DigimonToFamily"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AttrWeakStrong_AB_unique" ON "_AttrWeakStrong"("A", "B");

-- CreateIndex
CREATE INDEX "_AttrWeakStrong_B_index" ON "_AttrWeakStrong"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ElemWeakStrong_AB_unique" ON "_ElemWeakStrong"("A", "B");

-- CreateIndex
CREATE INDEX "_ElemWeakStrong_B_index" ON "_ElemWeakStrong"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PriorNext_AB_unique" ON "_PriorNext"("A", "B");

-- CreateIndex
CREATE INDEX "_PriorNext_B_index" ON "_PriorNext"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AnimeToDigimon_AB_unique" ON "_AnimeToDigimon"("A", "B");

-- CreateIndex
CREATE INDEX "_AnimeToDigimon_B_index" ON "_AnimeToDigimon"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DigimonToEpisode_AB_unique" ON "_DigimonToEpisode"("A", "B");

-- CreateIndex
CREATE INDEX "_DigimonToEpisode_B_index" ON "_DigimonToEpisode"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DigimonToMovie_AB_unique" ON "_DigimonToMovie"("A", "B");

-- CreateIndex
CREATE INDEX "_DigimonToMovie_B_index" ON "_DigimonToMovie"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CharacterToUniverse_AB_unique" ON "_CharacterToUniverse"("A", "B");

-- CreateIndex
CREATE INDEX "_CharacterToUniverse_B_index" ON "_CharacterToUniverse"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AnimeToDigivice_AB_unique" ON "_AnimeToDigivice"("A", "B");

-- CreateIndex
CREATE INDEX "_AnimeToDigivice_B_index" ON "_AnimeToDigivice"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AnimeToCharacter_AB_unique" ON "_AnimeToCharacter"("A", "B");

-- CreateIndex
CREATE INDEX "_AnimeToCharacter_B_index" ON "_AnimeToCharacter"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AnimeToCrest_AB_unique" ON "_AnimeToCrest"("A", "B");

-- CreateIndex
CREATE INDEX "_AnimeToCrest_B_index" ON "_AnimeToCrest"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CharacterToEpisode_AB_unique" ON "_CharacterToEpisode"("A", "B");

-- CreateIndex
CREATE INDEX "_CharacterToEpisode_B_index" ON "_CharacterToEpisode"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CharacterToMovie_AB_unique" ON "_CharacterToMovie"("A", "B");

-- CreateIndex
CREATE INDEX "_CharacterToMovie_B_index" ON "_CharacterToMovie"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DigiviceToMovie_AB_unique" ON "_DigiviceToMovie"("A", "B");

-- CreateIndex
CREATE INDEX "_DigiviceToMovie_B_index" ON "_DigiviceToMovie"("B");

-- AddForeignKey
ALTER TABLE "Digimon" ADD CONSTRAINT "Digimon_rankId_fkey" FOREIGN KEY ("rankId") REFERENCES "Rank"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Digimon" ADD CONSTRAINT "Digimon_attributeId_fkey" FOREIGN KEY ("attributeId") REFERENCES "Attribute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Digimon" ADD CONSTRAINT "Digimon_elementId_fkey" FOREIGN KEY ("elementId") REFERENCES "Element"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Digimon" ADD CONSTRAINT "Digimon_digimentalId_fkey" FOREIGN KEY ("digimentalId") REFERENCES "Digimental"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Anime" ADD CONSTRAINT "Anime_universeId_fkey" FOREIGN KEY ("universeId") REFERENCES "Universe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Episode" ADD CONSTRAINT "Episode_animeId_fkey" FOREIGN KEY ("animeId") REFERENCES "Anime"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Movie" ADD CONSTRAINT "Movie_universeId_fkey" FOREIGN KEY ("universeId") REFERENCES "Universe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Digivice" ADD CONSTRAINT "Digivice_digiDestinedId_fkey" FOREIGN KEY ("digiDestinedId") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Crest" ADD CONSTRAINT "Crest_digiDestinedId_fkey" FOREIGN KEY ("digiDestinedId") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Crest" ADD CONSTRAINT "Crest_digimentalId_fkey" FOREIGN KEY ("digimentalId") REFERENCES "Digimental"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Digimental" ADD CONSTRAINT "Digimental_digiDestinedId_fkey" FOREIGN KEY ("digiDestinedId") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DigimonToFamily" ADD FOREIGN KEY ("A") REFERENCES "Digimon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DigimonToFamily" ADD FOREIGN KEY ("B") REFERENCES "Family"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AttrWeakStrong" ADD FOREIGN KEY ("A") REFERENCES "Attribute"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AttrWeakStrong" ADD FOREIGN KEY ("B") REFERENCES "Attribute"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ElemWeakStrong" ADD FOREIGN KEY ("A") REFERENCES "Element"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ElemWeakStrong" ADD FOREIGN KEY ("B") REFERENCES "Element"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PriorNext" ADD FOREIGN KEY ("A") REFERENCES "Digimon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PriorNext" ADD FOREIGN KEY ("B") REFERENCES "Digimon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AnimeToDigimon" ADD FOREIGN KEY ("A") REFERENCES "Anime"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AnimeToDigimon" ADD FOREIGN KEY ("B") REFERENCES "Digimon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DigimonToEpisode" ADD FOREIGN KEY ("A") REFERENCES "Digimon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DigimonToEpisode" ADD FOREIGN KEY ("B") REFERENCES "Episode"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DigimonToMovie" ADD FOREIGN KEY ("A") REFERENCES "Digimon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DigimonToMovie" ADD FOREIGN KEY ("B") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterToUniverse" ADD FOREIGN KEY ("A") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterToUniverse" ADD FOREIGN KEY ("B") REFERENCES "Universe"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AnimeToDigivice" ADD FOREIGN KEY ("A") REFERENCES "Anime"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AnimeToDigivice" ADD FOREIGN KEY ("B") REFERENCES "Digivice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AnimeToCharacter" ADD FOREIGN KEY ("A") REFERENCES "Anime"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AnimeToCharacter" ADD FOREIGN KEY ("B") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AnimeToCrest" ADD FOREIGN KEY ("A") REFERENCES "Anime"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AnimeToCrest" ADD FOREIGN KEY ("B") REFERENCES "Crest"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterToEpisode" ADD FOREIGN KEY ("A") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterToEpisode" ADD FOREIGN KEY ("B") REFERENCES "Episode"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterToMovie" ADD FOREIGN KEY ("A") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterToMovie" ADD FOREIGN KEY ("B") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DigiviceToMovie" ADD FOREIGN KEY ("A") REFERENCES "Digivice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DigiviceToMovie" ADD FOREIGN KEY ("B") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;
