-- CreateEnum
CREATE TYPE "DigiviceType" AS ENUM ('CLASSIC', 'D_3', 'D_ARK', 'D_SCANNER', 'IC', 'BURST', 'DARK', 'BIO_HYBRID');

-- CreateEnum
CREATE TYPE "SpiritElement" AS ENUM ('FLAME', 'LIGHT', 'ICE', 'WIND', 'THUNDER', 'EARTH', 'WOOD', 'WATER', 'STEEL', 'DARKNESS');

-- CreateTable
CREATE TABLE "Field" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "symbol" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Field_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "Type" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Digimon" (
    "id" SERIAL NOT NULL,
    "slug" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "isJogress" BOOLEAN NOT NULL DEFAULT false,
    "hasXAntibody" BOOLEAN NOT NULL DEFAULT false,
    "rankId" INTEGER NOT NULL,
    "attributeId" INTEGER NOT NULL,
    "typeId" INTEGER,
    "digimentalId" INTEGER,

    CONSTRAINT "Digimon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DigimonName" (
    "id" SERIAL NOT NULL,
    "lang" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "digimonId" INTEGER NOT NULL,

    CONSTRAINT "DigimonName_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DigimonGroup" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "DigimonGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Universe" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Universe_pkey" PRIMARY KEY ("id")
);

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
CREATE TABLE "Episode" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "synopsis" TEXT NOT NULL,
    "originalAirDate" TIMESTAMP(3) NOT NULL,
    "seriesId" INTEGER NOT NULL,

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
CREATE TABLE "CharacterName" (
    "id" SERIAL NOT NULL,
    "lang" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "characterId" INTEGER NOT NULL,

    CONSTRAINT "CharacterName_pkey" PRIMARY KEY ("id")
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
    "digimentalId" INTEGER NOT NULL,

    CONSTRAINT "Crest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Digimental" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "attribute" TEXT NOT NULL,
    "digiDestinedId" INTEGER NOT NULL,

    CONSTRAINT "Digimental_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Spirit" (
    "id" SERIAL NOT NULL,
    "element" "SpiritElement" NOT NULL,
    "isHuman" BOOLEAN NOT NULL,
    "digiDestinedId" INTEGER NOT NULL,
    "digimonId" INTEGER NOT NULL,

    CONSTRAINT "Spirit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_DigimonToField" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_AttrWeakStrong" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_DigimonToMovie" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_DigimonToSeries" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_DigimonToEpisode" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_CharacterToDigimon" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_PreviousNext" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_DigimonToDigimonGroup" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_CharacterToUniverse" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_CharacterToSeries" (
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
CREATE TABLE "_CharacterToCrest" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Field_name_key" ON "Field"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Rank_name_key" ON "Rank"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Attribute_name_key" ON "Attribute"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Type_name_key" ON "Type"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Digimon_slug_key" ON "Digimon"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Digimon_name_key" ON "Digimon"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Universe_name_key" ON "Universe"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Series_title_key" ON "Series"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Episode_title_key" ON "Episode"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Movie_title_key" ON "Movie"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Character_name_key" ON "Character"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Crest_name_key" ON "Crest"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Crest_digimentalId_key" ON "Crest"("digimentalId");

-- CreateIndex
CREATE UNIQUE INDEX "Digimental_name_key" ON "Digimental"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_DigimonToField_AB_unique" ON "_DigimonToField"("A", "B");

-- CreateIndex
CREATE INDEX "_DigimonToField_B_index" ON "_DigimonToField"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AttrWeakStrong_AB_unique" ON "_AttrWeakStrong"("A", "B");

-- CreateIndex
CREATE INDEX "_AttrWeakStrong_B_index" ON "_AttrWeakStrong"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DigimonToMovie_AB_unique" ON "_DigimonToMovie"("A", "B");

-- CreateIndex
CREATE INDEX "_DigimonToMovie_B_index" ON "_DigimonToMovie"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DigimonToSeries_AB_unique" ON "_DigimonToSeries"("A", "B");

-- CreateIndex
CREATE INDEX "_DigimonToSeries_B_index" ON "_DigimonToSeries"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DigimonToEpisode_AB_unique" ON "_DigimonToEpisode"("A", "B");

-- CreateIndex
CREATE INDEX "_DigimonToEpisode_B_index" ON "_DigimonToEpisode"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CharacterToDigimon_AB_unique" ON "_CharacterToDigimon"("A", "B");

-- CreateIndex
CREATE INDEX "_CharacterToDigimon_B_index" ON "_CharacterToDigimon"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PreviousNext_AB_unique" ON "_PreviousNext"("A", "B");

-- CreateIndex
CREATE INDEX "_PreviousNext_B_index" ON "_PreviousNext"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DigimonToDigimonGroup_AB_unique" ON "_DigimonToDigimonGroup"("A", "B");

-- CreateIndex
CREATE INDEX "_DigimonToDigimonGroup_B_index" ON "_DigimonToDigimonGroup"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CharacterToUniverse_AB_unique" ON "_CharacterToUniverse"("A", "B");

-- CreateIndex
CREATE INDEX "_CharacterToUniverse_B_index" ON "_CharacterToUniverse"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CharacterToSeries_AB_unique" ON "_CharacterToSeries"("A", "B");

-- CreateIndex
CREATE INDEX "_CharacterToSeries_B_index" ON "_CharacterToSeries"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CharacterToEpisode_AB_unique" ON "_CharacterToEpisode"("A", "B");

-- CreateIndex
CREATE INDEX "_CharacterToEpisode_B_index" ON "_CharacterToEpisode"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CharacterToMovie_AB_unique" ON "_CharacterToMovie"("A", "B");

-- CreateIndex
CREATE INDEX "_CharacterToMovie_B_index" ON "_CharacterToMovie"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CharacterToCrest_AB_unique" ON "_CharacterToCrest"("A", "B");

-- CreateIndex
CREATE INDEX "_CharacterToCrest_B_index" ON "_CharacterToCrest"("B");

-- AddForeignKey
ALTER TABLE "Digimon" ADD CONSTRAINT "Digimon_rankId_fkey" FOREIGN KEY ("rankId") REFERENCES "Rank"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Digimon" ADD CONSTRAINT "Digimon_attributeId_fkey" FOREIGN KEY ("attributeId") REFERENCES "Attribute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Digimon" ADD CONSTRAINT "Digimon_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Type"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Digimon" ADD CONSTRAINT "Digimon_digimentalId_fkey" FOREIGN KEY ("digimentalId") REFERENCES "Digimental"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DigimonName" ADD CONSTRAINT "DigimonName_digimonId_fkey" FOREIGN KEY ("digimonId") REFERENCES "Digimon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Series" ADD CONSTRAINT "Series_universeId_fkey" FOREIGN KEY ("universeId") REFERENCES "Universe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Episode" ADD CONSTRAINT "Episode_seriesId_fkey" FOREIGN KEY ("seriesId") REFERENCES "Series"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Movie" ADD CONSTRAINT "Movie_universeId_fkey" FOREIGN KEY ("universeId") REFERENCES "Universe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterName" ADD CONSTRAINT "CharacterName_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Digivice" ADD CONSTRAINT "Digivice_digiDestinedId_fkey" FOREIGN KEY ("digiDestinedId") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Crest" ADD CONSTRAINT "Crest_digimentalId_fkey" FOREIGN KEY ("digimentalId") REFERENCES "Digimental"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Digimental" ADD CONSTRAINT "Digimental_digiDestinedId_fkey" FOREIGN KEY ("digiDestinedId") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Spirit" ADD CONSTRAINT "Spirit_digiDestinedId_fkey" FOREIGN KEY ("digiDestinedId") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Spirit" ADD CONSTRAINT "Spirit_digimonId_fkey" FOREIGN KEY ("digimonId") REFERENCES "Digimon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DigimonToField" ADD FOREIGN KEY ("A") REFERENCES "Digimon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DigimonToField" ADD FOREIGN KEY ("B") REFERENCES "Field"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AttrWeakStrong" ADD FOREIGN KEY ("A") REFERENCES "Attribute"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AttrWeakStrong" ADD FOREIGN KEY ("B") REFERENCES "Attribute"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DigimonToMovie" ADD FOREIGN KEY ("A") REFERENCES "Digimon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DigimonToMovie" ADD FOREIGN KEY ("B") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DigimonToSeries" ADD FOREIGN KEY ("A") REFERENCES "Digimon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DigimonToSeries" ADD FOREIGN KEY ("B") REFERENCES "Series"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DigimonToEpisode" ADD FOREIGN KEY ("A") REFERENCES "Digimon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DigimonToEpisode" ADD FOREIGN KEY ("B") REFERENCES "Episode"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterToDigimon" ADD FOREIGN KEY ("A") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterToDigimon" ADD FOREIGN KEY ("B") REFERENCES "Digimon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PreviousNext" ADD FOREIGN KEY ("A") REFERENCES "Digimon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PreviousNext" ADD FOREIGN KEY ("B") REFERENCES "Digimon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DigimonToDigimonGroup" ADD FOREIGN KEY ("A") REFERENCES "Digimon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DigimonToDigimonGroup" ADD FOREIGN KEY ("B") REFERENCES "DigimonGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterToUniverse" ADD FOREIGN KEY ("A") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterToUniverse" ADD FOREIGN KEY ("B") REFERENCES "Universe"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterToSeries" ADD FOREIGN KEY ("A") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterToSeries" ADD FOREIGN KEY ("B") REFERENCES "Series"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterToEpisode" ADD FOREIGN KEY ("A") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterToEpisode" ADD FOREIGN KEY ("B") REFERENCES "Episode"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterToMovie" ADD FOREIGN KEY ("A") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterToMovie" ADD FOREIGN KEY ("B") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterToCrest" ADD FOREIGN KEY ("A") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterToCrest" ADD FOREIGN KEY ("B") REFERENCES "Crest"("id") ON DELETE CASCADE ON UPDATE CASCADE;
