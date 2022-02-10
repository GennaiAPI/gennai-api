import { gql } from 'apollo-server-express';

const typeDefs = gql`
  scalar Date

  type Field {
    id: ID!
    name: String
    symbol: String
    description: String
    digimon: [Digimon]
  }

  input FieldInput {
    id: ID
    name: String
    symbol: String
    description: String
    digimon: [DigimonInput]
  }

  type Rank {
    id: ID!
    name: String
    description: String
    digimon: [Digimon]
  }

  input RankInput {
    id: ID
    name: String
    description: String
    digimon: [DigimonInput]
  }

  type Attribute {
    id: ID!
    name: String
    symbol: String
    description: String
    strong: [Attribute]
    weak: [Attribute]
    digimon: [Digimon]
  }

  input AttributeInput {
    id: ID
    name: String
    symbol: String
    description: String
    strong: [AttributeInput]
    weak: [AttributeInput]
    digimon: [DigimonInput]
  }

  type Type {
    id: ID!
    name: String
    digimon: [Digimon]
  }

  input TypeInput {
    id: ID
    name: String
    digimon: [DigimonInput]
  }
  
  type Digimon {
    id: ID!
    slug: String
    name: String
    isJogress: Boolean
    hasXAntibody: Boolean
    rank: Rank
    attribute: Attribute
    type: Type
    digimental: Digimental
    movies: [Movie]
    series: [Series]
    episodes: [Episode]
    fields: [Field]
    spirits: [Spirit]
    partners: [Character]
    previous: [Digimon]
    next: [Digimon]
    groups: [DigimonGroup]
    otherNames: [DigimonName]
  }

  input DigimonInput {
    id: ID
    slug: String
    name: String
    isJogress: Boolean
    hasXAntibody: Boolean
    rank: RankInput
    attribute: AttributeInput
    type: TypeInput
    digimental: DigimentalInput
    movies: [MovieInput]
    series: [SeriesInput]
    episodes: [EpisodeInput]
    fields: [FieldInput]
    spirits: [SpiritInput]
    partners: [CharacterInput]
    previous: [DigimonInput]
    next: [DigimonInput]
    groups: [DigimonGroupInput]
    otherNames: [DigimonNameInput]
  }

  type DigimonName {
    id: ID!
    lang: String
    name: String
    digimon: Digimon
  }
  
  input DigimonNameInput {
    id: ID
    lang: String
    name: String
    digimon: DigimonInput
  }

  type DigimonGroup {
    id: ID!
    name: String
    description: String
    digimon: [Digimon]
  }
  
  input DigimonGroupInput {
    id: ID
    name: String
    description: String
    digimon: [DigimonInput]
  }
  
  type Universe {
    id: ID!
    name: String
    series: [Series]
    movies: [Movie]
    characters: [Character]
  }

  input UniverseInput {
    id: ID
    name: String
    series: [SeriesInput]
    movies: [MovieInput]
    characters: [CharacterInput]
  }
  
  type Series {
    id: ID!
    title: String
    synopsis: String
    originalAirDate: Date
    episodes: [Episode]
    digimon: [Digimon]
    characters: [Character]
    universe: Universe
  }

  input SeriesInput {
    id: ID
    title: String
    synopsis: String
    originalAirDate: Date
    episodes: [EpisodeInput]
    digimon: [DigimonInput]
    characters: [CharacterInput]
    universe: UniverseInput
  }
  
  type Episode {
    id: ID!
    title: String
    synopsis: String
    originalAirDate: Date
    digimon: [Digimon]
    characters: [Character]
    series: Series
  }
  
  input EpisodeInput {
    id: ID
    title: String
    synopsis: String
    originalAirDate: Date
    digimon: [DigimonInput]
    characters: [CharacterInput]
    series: SeriesInput
  }
  
  type Movie {
    id: ID!
    title: String
    synopsis: String
    originalAirDate: Date
    digimon: [Digimon]
    characters: [Character]
    universe: Universe
  }

  input MovieInput {
    id: ID
    title: String
    synopsis: String
    originalAirDate: Date
    digimon: [DigimonInput]
    characters: [CharacterInput]
    universe: UniverseInput
  }
  
  type Character {
    id: ID!
    name: String
    isDigiDestined: Boolean
    movies: [Movie]
    series: [Series]
    episodes: [Episode]
    crests: [Crest]
    spirits: [Spirit]
    digivices: [Digivice]
    digimentals: [Digimental]
    partners: [Digimon]
    universes: [Universe]
    otherNames: [CharacterName]
  }

  input CharacterInput {
    id: ID
    name: String
    isDigiDestined: Boolean
    movies: [MovieInput]
    series: [SeriesInput]
    episodes: [EpisodeInput]
    crests: [CrestInput]
    spirits: [SpiritInput]
    digivices: [DigiviceInput]
    digimentals: [DigimentalInput]
    partners: [DigimonInput]
    universes: [UniverseInput]
    otherNames: [CharacterNameInput]
  }

  type CharacterName {
    id: ID!
    lang: String
    name: String
    character: Character
  }
  
  input CharacterNameInput {
    id: ID
    lang: String
    name: String
    character: CharacterInput
  }
  
  type Digivice {
    id: ID!
    digiDestined: Character
    colors: [String]
    type: DigiviceType
  }

  input DigiviceInput {
    id: ID
    digiDestined: CharacterInput
    colors: [String]
    type: DigiviceType
  }
  
  enum DigiviceType {
    CLASSIC
    D_3
    D_ARK
    D_SCANNER
    IC
    BURST
    DARK
    BIO_HYBRID
  }
  
  type Crest {
    id: ID!
    name: String
    description: String
    digiDestineds: [Character]
    digimental: Digimental
  }

  input CrestInput {
    id: ID
    name: String
    description: String
    digiDestineds: [CharacterInput]
    digimental: DigimentalInput
  }
  
  type Digimental {
    id: ID!
    name: String
    description: String
    attribute: String
    digiDestined: Character
    digimon: [Digimon]
    crest: Crest
  }

  input DigimentalInput {
    id: ID
    name: String
    description: String
    attribute: String
    digiDestined: CharacterInput
    digimon: [DigimonInput]
    crest: CrestInput
  }

  type Spirit {
    id: ID
    element: SpiritElement
    isHuman: Boolean
    digiDestined: Character
    digimon: Digimon
  }

  input SpiritInput {
    id: ID
    element: SpiritElement
    isHuman: Boolean
    digiDestined: CharacterInput
    digimon: DigimonInput
  }

  enum SpiritElement {
    FLAME
    LIGHT
    ICE
    WIND
    THUNDER
    EARTH
    WOOD
    WATER
    STEEL
    DARKNESS
  }

  input OptionsInput {
    limit: Int
    offset: Int
    order: String
    orderBy: String
  }

  type Query {
    # Field
    getFields(options: OptionsInput): [Field]
    getFieldById(id: Int!, options: OptionsInput): Field!
    getFieldByName(name: String!, options: OptionsInput): Field!
    # Rank
    getRanks(options: OptionsInput): [Rank]
    getRankById(id: Int!, options: OptionsInput): Rank!
    getRankByName(name: String!, options: OptionsInput): Rank!
    # Attribute
    getAttributes(options: OptionsInput): [Attribute]
    getAttributeById(id: Int!, options: OptionsInput): Attribute!
    getAttributeByName(name: String!, options: OptionsInput): Attribute!
    # Type
    getTypes(options: OptionsInput): [Type]
    getTypeById(id: Int!, options: OptionsInput): Type!
    getTypeByName(name: String!, options: OptionsInput): Type!
    # Digimo
    getDigimon(options: OptionsInput): [Digimon]
    getDigimonById(id: Int!, options: OptionsInput): Digimon!
    getDigimonByName(name: String!, options: OptionsInput): Digimon!
    # DigimonGroup
    getDigimonGroups(options: OptionsInput): [DigimonGroup]
    getDigimonGroupById(id: Int!, options: OptionsInput): DigimonGroup!
    getDigimonGroupByName(name: String!, options: OptionsInput): DigimonGroup!
    # Universe
    getUniverses(options: OptionsInput): [Universe]
    getUniverseById(id: Int!, options: OptionsInput): Universe!
    getUniverseByName(name: String!, options: OptionsInput): Universe!
    # Serie
    getSeries(options: OptionsInput): [Series]
    getSeriesById(id: Int!, options: OptionsInput): Series!
    getSeriesByTitle(title: String!, options: OptionsInput): Series
    # Episode
    getEpisodes(options: OptionsInput): [Episode]
    getEpisodeById(id: Int!, options: OptionsInput): Episode!
    getEpisodeByTitle(title: String!, options: OptionsInput): Episode
    # Movie
    getMovies(options: OptionsInput): [Movie]
    getMovieById(id: Int!, options: OptionsInput): Movie!
    getMovieByTitle(title: String!, options: OptionsInput): Movie
    # Character
    getCharacters(options: OptionsInput): [Character]
    getCharacterById(id: Int!, options: OptionsInput): Character!
    getCharacterByName(name: String!, options: OptionsInput): Character!
    # Digivice
    getDigivices(options: OptionsInput): [Digivice]
    getDigiviceById(id: Int!, options: OptionsInput): Digivice!
    getDigivicesByType(type: DigiviceType!, options: OptionsInput): [Digivice]
    getDigiviceTypes(options: OptionsInput): [DigiviceType]
    # Crest
    getCrests(options: OptionsInput): [Crest]
    getCrestById(id: Int!, options: OptionsInput): Crest!
    getCrestByName(name: String!, options: OptionsInput): Crest!
    # Digimental
    getDigimentals(options: OptionsInput): [Digimental]
    getDigimentalById(id: Int!, options: OptionsInput): Digimental!
    getDigimentalByName(name: String!, options: OptionsInput): Digimental!
    # Spirit
    getSpirits(options: OptionsInput): [Spirit]
    getSpiritById(id: Int!, options: OptionsInput): Spirit!
    getSpiritsByElement(element: SpiritElement!, options: OptionsInput): [Spirit]
    getSpiritElements(options: OptionsInput): [SpiritElement]
  }

  type Mutation {
    # Field
    createField(data: FieldInput!): Field!
    updateField(data: FieldInput!): Field!
    deleteField(id: Int!): Field!
    # Rank
    createRank(data: RankInput!): Rank!
    updateRank(data: RankInput!): Rank!
    deleteRank(id: Int!): Rank!
    # Attribute
    createAttribute(data: AttributeInput!): Attribute!
    updateAttribute(data: AttributeInput!): Attribute!
    deleteAttribute(id: Int!): Attribute!
    # Type
    createType(data: TypeInput!): Type!
    updateType(data: TypeInput!): Type!
    deleteType(id: Int!): Type!
    # Digimo
    createDigimon(data: DigimonInput!): Digimon!
    updateDigimon(data: DigimonInput!): Digimon!
    deleteDigimon(id: Int!): Digimon!
    createDigimonName(data: DigimonNameInput!): DigimonName!
    updateDigimonName(data: DigimonNameInput!): DigimonName!
    deleteDigimonName(id: Int!): DigimonName!
    # DigimonGroup
    createDigimonGroup(data: DigimonGroupInput!): DigimonGroup!
    updateDigimonGroup(data: DigimonGroupInput!): DigimonGroup!
    deleteDigimonGroup(id: Int!): DigimonGroup!
    # Universe
    createUniverse(data: UniverseInput!): Universe!
    updateUniverse(data: UniverseInput!): Universe!
    deleteUniverse(id: Int!): Universe!
    # Serie
    createSeries(data: SeriesInput!): Series!
    updateSeries(data: SeriesInput!): Series!
    deleteSeries(id: Int!): Series!
    # Episode
    createEpisode(data: EpisodeInput!): Episode!
    updateEpisode(data: EpisodeInput!): Episode!
    deleteEpisode(id: Int!): Episode!
    # Movie
    createMovie(data: MovieInput!): Movie!
    updateMovie(data: MovieInput!): Movie!
    deleteMovie(id: Int!): Movie!
    # Character
    createCharacter(data: CharacterInput!): Character!
    updateCharacter(data: CharacterInput!): Character!
    deleteCharacter(id: Int!): Character!
    createCharacterName(data: CharacterNameInput!): CharacterName!
    updateCharacterName(data: CharacterNameInput!): CharacterName!
    deleteCharacterName(id: Int!): CharacterName!
    # Digivice
    createDigivice(data: DigiviceInput!): Digivice!
    updateDigivice(data: DigiviceInput!): Digivice!
    deleteDigivice(id: Int!): Digivice!
    # Crest
    createCrest(data: CrestInput!): Crest!
    updateCrest(data: CrestInput!): Crest!
    deleteCrest(id: Int!): Crest!
    # Digimental
    createDigimental(data: DigimentalInput!): Digimental!
    updateDigimental(data: DigimentalInput!): Digimental!
    deleteDigimental(id: Int!): Digimental!
    # Spirit
    createSpirit(data: SpiritInput!): Spirit!
    updateSpirit(data: SpiritInput!): Spirit!
    deleteSpirit(id: Int!): Spirit!
  }
`;

export default typeDefs