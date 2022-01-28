-- CreateTable
CREATE TABLE "DigimonGroup" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "DigimonGroup_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "_DigimonToDigimonGroup" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_DigimonToDigimonGroup_AB_unique" ON "_DigimonToDigimonGroup"("A", "B");

-- CreateIndex
CREATE INDEX "_DigimonToDigimonGroup_B_index" ON "_DigimonToDigimonGroup"("B");

-- AddForeignKey
ALTER TABLE "CharacterName" ADD CONSTRAINT "CharacterName_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DigimonToDigimonGroup" ADD FOREIGN KEY ("A") REFERENCES "Digimon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DigimonToDigimonGroup" ADD FOREIGN KEY ("B") REFERENCES "DigimonGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;
