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
    name: String
    symbol: String
    description: String
    strong: [AttributeInput]
    weak: [AttributeInput]
    digimons: [DigimonInput]
  }

  type Element {
    id: ID!
    name: String
    strong: [Element]
    weak: [Element]
    digimons: [Digimon]
  }

  input ElementInput {
    name: String
    strong: [ElementInput]
    weak: [ElementInput]
    digimons: [DigimonInput]
  }
  
  type Digimon {
    id: ID!
    name: String
    prior: [Digimon]
    next: [Digimon]
    rank: Rank
    rankId: Int
    attribute: Attribute
    attributeId: Int
    families: [Family]
    element: Element
    elementId: Int
    animes: [Anime]
    episodes: [Episode]
    movies: [Movie]
    digimental: Digimental
    digimentalId: Int
  }

  input DigimonInput {
    name: String
    prior: [DigimonInput]
    next: [DigimonInput]
    rank: RankInput
    rankId: Int
    attribute: AttributeInput
    attributeId: Int
    families: [FamilyInput]
    element: ElementInput
    elementId: Int
    animes: [AnimeInput]
    episodes: [EpisodeInput]
    movies: [MovieInput]
    digimental: DigimentalInput
    digimentalId: Int
  }

  type Universe {
    id: ID!
    name: String
    animes: [Anime]
    movies: [Movie]
    characters: [Character]
  }

  input UniverseInput {
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
    universeId: Int
  }

  input AnimeInput {
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
    animeId: Int
    characters: [Character]
    digimons: [Digimon]
  }
  
  input EpisodeInput {
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
    universeId: Int
    characters: [Character]
    digimons: [Digimon]
    digivices: [Digivice]
  }

  input MovieInput {
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
    digiDestinedId: Int
    colors: [String]
    type: DigiviceType
    animes: [Anime]
    movies: [Movie]
  }

  input DigiviceInput {
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
    digiDestinedId: Int
    animes: [Anime]
    digimental: Digimental
    digimentalId: Int
  }

  input CrestInput {
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
    digiDestinedId: Int
    digimons: [Digimon]
    crest: Crest
  }

  input DigimentalInput {
    name: String
    description: String
    digiDestined: CharacterInput
    digimons: [DigimonInput]
    crest: CrestInput
  }


  type Query {
    getDigimons: [Digimon]
    getDigimon(name: String): Digimon
    getFamilies: [Family]
    getFamily(name: String): Family
    getRanks: [Rank]
    getRank(name: String): Rank
    getAttributes: [Attribute]
    getAttribute(name: String): Attribute
    getElements: [Element]
    getElement(name: String): Element
  }

  type Mutation {
    newDigimon(data: DigimonInput!): Digimon!
    addDigimonPriorNext(actualDigimon: String!, priorDigimons: [String!]!, nextDigimons: [String!]!): Digimon!
    removeDigimonPriorNext(actualDigimon: String!, priorDigimons: [String!]!, nextDigimons: [String!]!): Digimon!
    newFamily(data: FamilyInput!): Family!
    newRank(data: RankInput!): Rank!
    newAttribute(data: AttributeInput!): Attribute!
    newElement(data: ElementInput!): Element!
  }
`;

export default typeDefs