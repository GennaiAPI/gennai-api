import { gql } from 'apollo-server-express';

const typeDefs = gql`
  scalar Date

  type Family {
    id: ID!
    name: String
    symbol: String
    description: String
    digimons: [Digimon]
  }

  input FamilyInput {
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

  type DigiType {
    id: ID!
    name: String
    digimons: [Digimon]
  }

  input DigiTypeInput {
    id: ID
    name: String
    digimons: [DigimonInput]
  }
  
  type Digimon {
    id: ID!
    slug: String
    name: String
    otherNames: [DigimonName]
    isJogress: Boolean
    hasXAntibody: Boolean
    prior: [Digimon]
    next: [Digimon]
    rank: Rank
    # rankId: Int
    attribute: Attribute
    # attributeId: Int
    type: DigiType
    families: [Family]
    # elementId: Int
    animes: [Anime]
    episodes: [Episode]
    movies: [Movie]
    digimental: Digimental
    # digimentalId: Int
  }

  input DigimonInput {
    id: ID
    slug: String
    name: String
    otherNames: [DigimonNameInput]
    isJogress: Boolean
    hasXAntibody: Boolean
    prior: [DigimonInput]
    next: [DigimonInput]
    rank: RankInput
    # rankId: Int
    attribute: AttributeInput
    # attributeId: Int
    type: DigiTypeInput
    families: [FamilyInput]
    # elementId: Int
    animes: [AnimeInput]
    episodes: [EpisodeInput]
    movies: [MovieInput]
    digimental: DigimentalInput
    # digimentalId: Int
  }

  input DigimonNameInput {
    id: ID
    lang: String
    name: String
    digimon: DigimonInput
  }

  type DigimonName {
    id: ID!
    lang: String
    name: String
    digimon: Digimon
  }
  
  type Universe {
    id: ID!
    name: String
    animes: [Anime]
    movies: [Movie]
    characters: [Character]
  }

  input UniverseInput {
    id: ID
    name: String
    animes: [AnimeInput]
    movies: [MovieInput]
    characters: [CharacterInput]
  }
  
  type Anime {
    id: ID!
    title: String
    synopsis: String
    originalAirDate: Date
    episodes: [Episode]
    digimons: [Digimon]
    digivices: [Digivice]
    characters: [Character]
    crests: [Crest]
    universe: Universe
    # universeId: Int
  }

  input AnimeInput {
    id: ID
    title: String
    synopsis: String
    originalAirDate: Date
    episodes: [EpisodeInput]
    digimons: [DigimonInput]
    digivices: [DigiviceInput]
    characters: [CharacterInput]
    crests: [CrestInput]
    universe: UniverseInput
  }
  
  type Episode {
    id: ID!
    title: String
    synopsis: String
    originalAirDate: Date
    anime: Anime
    # animeId: Int
    characters: [Character]
    digimons: [Digimon]
  }
  
  input EpisodeInput {
    id: ID
    title: String
    synopsis: String
    originalAirDate: Date
    anime: AnimeInput
    characters: [CharacterInput]
    digimons: [DigimonInput]
  }
  
  type Movie {
    id: ID!
    title: String
    synopsis: String
    originalAirDate: Date
    universe: Universe
    # universeId: Int
    characters: [Character]
    digimons: [Digimon]
    digivices: [Digivice]
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
  }
  
  type Character {
    id: ID!
    name: String
    isDigiDestined: Boolean
    animes: [Anime]
    digivices: [Digivice]
    crest: Crest
    digimental: Digimental
    universes: [Universe]
    episodes: [Episode]
    movies: [Movie]
  }

  input CharacterInput {
    id: ID
    name: String
    isDigiDestined: Boolean
    animes: [AnimeInput]
    digivices: [DigiviceInput]
    crest: CrestInput
    digimental: DigimentalInput
    universes: [UniverseInput]
    episodes: [EpisodeInput]
    movies: [MovieInput]
  }
  
  type Digivice {
    id: ID!
    digiDestined: Character
    # digiDestinedId: Int
    colors: [String]
    type: DigiviceType
    animes: [Anime]
    movies: [Movie]
  }

  input DigiviceInput {
    id: ID
    digiDestined: CharacterInput
    colors: [String]
    type: DigiviceType
    animes: [AnimeInput]
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
    digiDestined: Character
    # digiDestinedId: Int
    animes: [Anime]
    digimental: Digimental
    # digimentalId: Int
  }

  input CrestInput {
    id: ID
    name: String
    description: String
    digiDestined: CharacterInput
    animes: [AnimeInput]
    digimental: DigimentalInput
  }
  
  type Digimental {
    id: ID!
    name: String
    description: String
    digiDestined: Character
    # digiDestinedId: Int
    digimons: [Digimon]
    crest: Crest
  }

  input DigimentalInput {
    id: ID
    name: String
    description: String
    digiDestined: CharacterInput
    digimons: [DigimonInput]
    crest: CrestInput
  }

  input OptionsInput {
    limit: Int
    offset: Int
    order: String
    orderBy: String
  }

  type Query {
    # Families
    getFamilies(options: OptionsInput): [Family]
    getFamilyById(id: Int!, options: OptionsInput): Family!
    getFamilyByName(name: String!, options: OptionsInput): Family!
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
    # Animes
    getAnimes(options: OptionsInput): [Anime]
    getAnimeById(id: Int!, options: OptionsInput): Anime!
    getAnimeByTitle(title: String!, options: OptionsInput): Anime
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
    createDigimon(data: DigimonInput!): Digimon!
    updateDigimon(data: DigimonInput!): Digimon!
    # removeDigimonPriorNext(actualDigimon: String!, priorDigimons: [String!]!, nextDigimons: [String!]!): Digimon!
    createFamily(data: FamilyInput!): Family!
    createRank(data: RankInput!): Rank!
    createAttribute(data: AttributeInput!): Attribute!
    createType(data: TypeInput!): Type!
  }
`;

export default typeDefs