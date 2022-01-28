import { gql } from 'apollo-server-express';

const typeDefs = gql`
  scalar Date

  type Field {
    id: ID!
    name: String
    symbol: String
    description: String
    digimons: [Digimon]
  }

  input FieldInput {
    id: ID
    name: String
    symbol: String
    description: String
    digimons: [DigimonInput]
  }

  type Rank {
    id: ID!
    name: String
    description: String
    digimons: [Digimon]
  }

  input RankInput {
    id: ID
    name: String
    description: String
    digimons: [DigimonInput]
  }

  type Attribute {
    id: ID!
    name: String
    symbol: String
    description: String
    strong: [Attribute]
    weak: [Attribute]
    digimons: [Digimon]
  }

  input AttributeInput {
    id: ID
    name: String
    symbol: String
    description: String
    strong: [AttributeInput]
    weak: [AttributeInput]
    digimons: [DigimonInput]
  }

  type Type {
    id: ID!
    name: String
    digimons: [Digimon]
  }

  input TypeInput {
    id: ID
    name: String
    digimons: [DigimonInput]
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
    otherNames: [DigimonName]
    prior: [Digimon]
    next: [Digimon]
    fields: [Field]
    series: [Series]
    episodes: [Episode]
    movies: [Movie]
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
    otherNames: [DigimonNameInput]
    prior: [DigimonInput]
    next: [DigimonInput]
    fields: [FieldInput]
    series: [SeriesInput]
    episodes: [EpisodeInput]
    movies: [MovieInput]
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
    universe: Universe
    crests: [Crest]
    digimentals: [Digimental]
    episodes: [Episode]
    digimons: [Digimon]
    digivices: [Digivice]
    characters: [Character]
  }

  input SeriesInput {
    id: ID
    title: String
    synopsis: String
    originalAirDate: Date
    universe: UniverseInput
    crests: [CrestInput]
    digimentals: [DigimentalInput]
    episodes: [EpisodeInput]
    digimons: [DigimonInput]
    digivices: [DigiviceInput]
    characters: [CharacterInput]
  }
  
  type Episode {
    id: ID!
    title: String
    synopsis: String
    originalAirDate: Date
    series: Series
    characters: [Character]
    digimons: [Digimon]
  }
  
  input EpisodeInput {
    id: ID
    title: String
    synopsis: String
    originalAirDate: Date
    series: SeriesInput
    characters: [CharacterInput]
    digimons: [DigimonInput]
  }
  
  type Movie {
    id: ID!
    title: String
    synopsis: String
    originalAirDate: Date
    universe: Universe
    characters: [Character]
    digimons: [Digimon]
    digivices: [Digivice]
    crests: [Crest]
    digimentals: [Digimental]
  }

  input MovieInput {
    id: ID
    title: String
    synopsis: String
    originalAirDate: Date
    universe: UniverseInput
    characters: [CharacterInput]
    digimons: [DigimonInput]
    digivices: [DigiviceInput]
    crests: [CrestInput]
    digimentals: [DigimentalInput]
  }
  
  type Character {
    id: ID!
    name: String
    isDigiDestined: Boolean
    crests: [Crest]
    digimentals: [Digimental]
    series: [Series]
    digivices: [Digivice]
    universes: [Universe]
    episodes: [Episode]
    movies: [Movie]
  }

  input CharacterInput {
    id: ID
    name: String
    isDigiDestined: Boolean
    crests: [CrestInput]
    digimentals: [DigimentalInput]
    series: [SeriesInput]
    digivices: [DigiviceInput]
    universes: [UniverseInput]
    episodes: [EpisodeInput]
    movies: [MovieInput]
  }
  
  type Digivice {
    id: ID!
    digiDestined: Character
    type: DigiviceType
    colors: [String]
    series: [Series]
    movies: [Movie]
  }

  input DigiviceInput {
    id: ID
    digiDestined: CharacterInput
    type: DigiviceType
    colors: [String]
    series: [SeriesInput]
    movies: [MovieInput]
  }
  
  enum DigiviceType {
    CLASSIC
    D_3
  }
  
  type Crest {
    id: ID!
    name: String
    description: String
    digimental: Digimental
    digiDestineds: [Character]
    series: [Series]
    movies: [Movie]
  }

  input CrestInput {
    id: ID
    name: String
    description: String
    digimental: DigimentalInput
    digiDestineds: [CharacterInput]
    series: [SeriesInput]
    movies: [MovieInput]
  }
  
  type Digimental {
    id: ID!
    name: String
    description: String
    digiDestineds: [Character]
    digimons: [Digimon]
    series: [Series]
    movies: [Movie]
    crest: Crest
  }

  input DigimentalInput {
    id: ID
    name: String
    description: String
    digiDestineds: [CharacterInput]
    digimons: [DigimonInput]
    series: [SeriesInput]
    movies: [MovieInput]
    crest: CrestInput
  }

  input OptionsInput {
    limit: Int
    offset: Int
    order: String
    orderBy: String
  }

  type Query {
    # Fields
    getFields(options: OptionsInput): [Field]
    getFieldById(id: Int!, options: OptionsInput): Field!
    getFieldByName(name: String!, options: OptionsInput): Field!
    # Ranks
    getRanks(options: OptionsInput): [Rank]
    getRankById(id: Int!, options: OptionsInput): Rank!
    getRankByName(name: String!, options: OptionsInput): Rank!
    # Attributes
    getAttributes(options: OptionsInput): [Attribute]
    getAttributeById(id: Int!, options: OptionsInput): Attribute!
    getAttributeByName(name: String!, options: OptionsInput): Attribute!
    # Types
    getTypes(options: OptionsInput): [Type]
    getTypeById(id: Int!, options: OptionsInput): Type!
    getTypeByName(name: String!, options: OptionsInput): Type!
    # Digimons
    getDigimons(options: OptionsInput): [Digimon]
    getDigimonById(id: Int!, options: OptionsInput): Digimon!
    getDigimonByName(name: String!, options: OptionsInput): Digimon!
    # Universes
    getUniverses(options: OptionsInput): [Universe]
    getUniverseById(id: Int!, options: OptionsInput): Universe!
    getUniverseByName(name: String!, options: OptionsInput): Universe!
    # Series
    getSeries(options: OptionsInput): [Series]
    getSeriesById(id: Int!, options: OptionsInput): Series!
    getSeriesByTitle(title: String!, options: OptionsInput): Series
    # Episodes
    getEpisodes(options: OptionsInput): [Episode]
    getEpisodeById(id: Int!, options: OptionsInput): Episode!
    getEpisodeByTitle(title: String!, options: OptionsInput): Episode
    # Movies
    getMovies(options: OptionsInput): [Movie]
    getMovieById(id: Int!, options: OptionsInput): Movie!
    getMovieByTitle(title: String!, options: OptionsInput): Movie
    # Characters
    getCharacters(options: OptionsInput): [Character]
    getCharacterById(id: Int!, options: OptionsInput): Character!
    getCharacterByName(name: String!, options: OptionsInput): Character!
    # Digivices
    getDigivices(options: OptionsInput): [Digivice]
    getDigiviceById(id: Int!, options: OptionsInput): Digivice!
    getDigivicesByType(type: DigiviceType!, options: OptionsInput): [Digivice]
    getDigiviceTypes(options: OptionsInput): [DigiviceType]
    # Crests
    getCrests(options: OptionsInput): [Crest]
    getCrestById(id: Int!, options: OptionsInput): Crest!
    getCrestByName(name: String!, options: OptionsInput): Crest!
    # Digimentals
    getDigimentals(options: OptionsInput): [Digimental]
    getDigimentalById(id: Int!, options: OptionsInput): Digimental!
    getDigimentalByName(name: String!, options: OptionsInput): Digimental!
  }

  type Mutation {
    createField(data: FieldInput!): Field!
    updateField(data: FieldInput!): Field!
    deleteField(id: Int!): Field!
    createRank(data: RankInput!): Rank!
    updateRank(data: RankInput!): Rank!
    deleteRank(id: Int!): Rank!
    createAttribute(data: AttributeInput!): Attribute!
    updateAttribute(data: AttributeInput!): Attribute!
    deleteAttribute(id: Int!): Attribute!
    createType(data: TypeInput!): Type!
    updateType(data: TypeInput!): Type!
    deleteType(id: Int!): Type!
    createDigimon(data: DigimonInput!): Digimon!
    updateDigimon(data: DigimonInput!): Digimon!
    deleteDigimon(id: Int!): Digimon!
    createDigimonName(data: DigimonNameInput!): DigimonName!
    updateDigimonName(data: DigimonNameInput!): DigimonName!
    deleteDigimonName(id: Int!): DigimonName!
    createUniverse(data: UniverseInput!): Universe!
    updateUniverse(data: UniverseInput!): Universe!
    deleteUniverse(id: Int!): Universe!
    createSeries(data: SeriesInput!): Series!
    updateSeries(data: SeriesInput!): Series!
    deleteSeries(id: Int!): Series!
    createEpisode(data: EpisodeInput!): Episode!
    updateEpisode(data: EpisodeInput!): Episode!
    deleteEpisode(id: Int!): Episode!
    createMovie(data: MovieInput!): Movie!
    updateMovie(data: MovieInput!): Movie!
    deleteMovie(id: Int!): Movie!
    createCharacter(data: CharacterInput!): Character!
    updateCharacter(data: CharacterInput!): Character!
    deleteCharacter(id: Int!): Character!
    createDigivice(data: DigiviceInput!): Digivice!
    updateDigivice(data: DigiviceInput!): Digivice!
    deleteDigivice(id: Int!): Digivice!
    createCrest(data: CrestInput!): Crest!
    updateCrest(data: CrestInput!): Crest!
    deleteCrest(id: Int!): Crest!
    createDigimental(data: DigimentalInput!): Digimental!
    updateDigimental(data: DigimentalInput!): Digimental!
    deleteDigimental(id: Int!): Digimental!
  }
`;

export default typeDefs