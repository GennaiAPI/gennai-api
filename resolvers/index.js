import Prisma from '@prisma/client/index.js'
import { dateScalar } from '../schema/customScalars.js';
import { getOptions } from './utils.js'

const { PrismaClient, DigiviceType } = Prisma

const prisma = new PrismaClient()

const resolvers = {
  Query: {
    getFamilies: (prt, args, ctx, info) => prisma.family.findMany({
      ...getOptions(args?.options)
    }),
    getFamilyById: (prt, args, ctx, info) => prisma.family.findUnique({
      where: {
        id: args.id
      }
    }),
    getFamilyByName: (prt, args, ctx, info) => prisma.family.findUnique({
      where: {
        name: args.name
      }
    }),
    getRanks: (prt, args, ctx, info) => prisma.rank.findMany({
      ...getOptions(args?.options)
    }),
    getRankById: (prt, args, ctx, info) => prisma.rank.findUnique({
      where: {
        id: args.id
      }
    }),
    getRankByName: (prt, args, ctx, info) => prisma.rank.findUnique({
      where: {
        name: args.name
      }
    }),
    getAttributes: (prt, args, ctx, info) => prisma.attribute.findMany({
      ...getOptions(args?.options)
    }),
    getAttributeById: (prt, args, ctx, info) => prisma.attribute.findUnique({
      where: {
        id: args.id
      }
    }),
    getAttributeByName: (prt, args, ctx, info) => prisma.attribute.findUnique({
      where: {
        name: args.name
      }
    }),
    getTypes: (prt, args, ctx, info) => prisma.type.findMany({
      ...getOptions(args?.options)
    }),
    getTypeById: (prt, args, ctx, info) => prisma.type.findUnique({
      where: {
        id: args.id
      }
    }),
    getTypeByName: (prt, args, ctx, info) => prisma.type.findUnique({
      where: {
        name: args.name
      }
    }),
    getDigimons: (prt, args, ctx, info) => prisma.digimon.findMany({
      ...getOptions(args?.options)
    }),
    getDigimonById: (prt, args, ctx, info) => prisma.digimon.findUnique({
      where: {
        id: args.id
      }
    }),
    getDigimonByName: (prt, args, ctx, info) => prisma.digimon.findUnique({
      where: {
        name: args.name
      }
    }),
    getUniverses: (prt, args, ctx, info) => prisma.universe.findMany({
      ...getOptions(args?.options)
    }),
    getUniverseById: (prt, args, ctx, info) => prisma.universe.findUnique({
      where: {
        id: args.id
      }
    }),
    getUniverseByName: (prt, args, ctx, info) => prisma.universe.findUnique({
      where: {
        name: args.name
      }
    }),
    getAnimes: (prt, args, ctx, info) => prisma.anime.findMany({
      ...getOptions(args?.options)
    }),
    getAnimeById: (prt, args, ctx, info) => prisma.anime.findUnique({
      where: {
        id: args.id
      }
    }),
    getAnimeByTitle: (prt, args, ctx, info) => prisma.anime.findUnique({
      where: {
        title: args.title
      }
    }),
    getEpisodes: (prt, args, ctx, info) => prisma.episode.findMany({
      ...getOptions(args?.options)
    }),
    getEpisodeById: (prt, args, ctx, info) => prisma.episode.findUnique({
      where: {
        id: args.id
      }
    }),
    getEpisodeByTitle: (prt, args, ctx, info) => prisma.episode.findUnique({
      where: {
        title: args.title
      }
    }),
    getMovies: (prt, args, ctx, info) => prisma.movie.findMany({
      ...getOptions(args?.options)
    }),
    getMovieById: (prt, args, ctx, info) => prisma.movie.findUnique({
      where: {
        id: args.id
      }
    }),
    getMovieByTitle: (prt, args, ctx, info) => prisma.movie.findUnique({
      where: {
        title: args.title
      }
    }),
    getCharacters: (prt, args, ctx, info) => prisma.character.findMany({
      ...getOptions(args?.options)
    }),
    getCharacterById: (prt, args, ctx, info) => prisma.character.findUnique({
      where: {
        id: args.id
      }
    }),
    getCharacterByName: (prt, args, ctx, info) => prisma.character.findUnique({
      where: {
        name: args.name
      }
    }),
    getDigivices: (prt, args, ctx, info) => prisma.digivice.findMany({
      ...getOptions(args?.options)
    }),
    getDigiviceById: (prt, args, ctx, info) => prisma.digivice.findUnique({
      where: {
        id: args.id
      }
    }),
    getDigivicesByType: (prt, args, ctx, info) => prisma.digivice.findMany({
      ...getOptions(args?.options),
      where: {
        type: args.type
      }
    }),
    getDigiviceTypes: (prt, args, ctx, info) => Object.values(DigiviceType),
    getCrests: (prt, args, ctx, info) => prisma.crest.findMany({
      ...getOptions(args?.options)
    }),
    getCrestById: (prt, args, ctx, info) => prisma.crest.findUnique({
      where: {
        id: args.id
      }
    }),
    getCrestByName: (prt, args, ctx, info) => prisma.crest.findUnique({
      where: {
        name: args.name
      }
    }),
    getDigimentals: (prt, args, ctx, info) => prisma.digimental.findMany({
      ...getOptions(args?.options)
    }),
    getDigimentalById: (prt, args, ctx, info) => prisma.digimental.findUnique({
      where: {
        id: args.id
      }
    }),
    getDigimentalByName: (prt, args, ctx, info) => prisma.digimental.findUnique({
      where: {
        name: args.name
      }
    }),
  },
  Mutation: {
    createDigimon: (parent, args, ctx, info) =>
      prisma.digimon.create({
        data: {
          ...args.data,
          attribute: {
            connect: {
              id: parseInt(args?.data?.attribute?.id)
            }
          },
          rank: {
            connect: {
              id: parseInt(args?.data?.rank?.id)
            }
          },
          prior: {
            connect: args?.data?.prior?.map(p => {
              return {
                where: {
                  id: parseInt(p.id)
                }
              }
            })
          },
          next: {
            connect: args?.data?.next?.map(n => {
              return {
                where: {
                  id: parseInt(n.id)
                }
              }
            })
          },
          families: {
            connect: args?.data?.families?.map(f => {
              return {
                where: {
                  id: parseInt(f.id)
                }
              }
            })
          },
          animes: {
            connect: args?.data?.animes?.map(a => {
              return {
                where: {
                  id: parseInt(a.id)
                }
              }
            })
          },
          episodes: {
            connect: args?.data?.episodes?.map(e => {
              return {
                where: {
                  id: parseInt(e.id)
                }
              }
            })
          },
          movies: {
            connect: args?.data?.movies?.map(m => {
              return {
                where: {
                  id: parseInt(m.id)
                }
              }
            })
          },
        },
        include: {
          prior: true,
          next: true,
          families: true,
          animes: true,
          episodes: true,
          movies: true
        }
      }),
    updateDigimon: (parent, args, ctx, info) => {
      return prisma.digimon.update({
        where: {
          id: parseInt(args.data.id)
        },
        data: {
          ...args.data,
          // rank: {
          //   connect: {
          //     id: parseInt(args.data.rank.id)
          //   }
          // }
          // prior: {
          //   disconnect: old?.prior.
          //   connect: args?.data?.prior?.map(d => {
          //     return {
          //       id: d.id
          //     }
          //   })
          // },
          // next: {
          //   connect: args?.data?.next?.map(d => {
          //     return {
          //       id: d.id
          //     }
          //   })
          // }
        },
        include: {
          prior: true,
          next: true,
          families: true
        }
      })
    },
    createFamily: (parent, args, ctx, info) => prisma.family.create({
      data: {
        ...args.data,
      }
    }),
    createRank: (parent, args, ctx, info) => prisma.rank.create({
      data: {
        ...args.data
      }
    }),
    createAttribute: (parent, args, ctx, info) => prisma.attribute.create({
      data: {
        ...args.data
      }
    }),
    createType: (parent, args, ctx, info) => prisma.type.create({
      data: {
        ...args.data
      }
    }),
    createUniverse: (parent, args, ctx, info) => prisma.universe.create({
      data: {
        ...args.data
      }
    }),
    createAnime: (parent, args, ctx, info) => prisma.anime.create({
      data: {
        ...args.data,
        universe: {
          connect: {
            id: parseInt(args?.data?.universe?.id)
          }
        },
      }
    }),
    createMovie: (parent, args, ctx, info) => prisma.movie.create({
      data: {
        ...args.data,
        universe: {
          connect: {
            id: parseInt(args?.data?.universe?.id)
          }
        },
      }
    }),
    createCharacter: (parent, args, ctx, info) => prisma.character.create({
      data: {
        ...args.data
      }
    }),
    createDigivice: (parent, args, ctx, info) => prisma.digivice.create({
      data: {
        ...args.data,
        digiDestined: {
          connect: {
            id: parseInt(args?.data?.digiDestined?.id)
          }
        },
      }
    }),
    createCrest: (parent, args, ctx, info) => prisma.crest.create({
      data: {
        ...args.data,
        digiDestined: {
          connect: {
            id: parseInt(args?.data?.digiDestined?.id)
          }
        },
        digimental: {
          connect: {
            id: parseInt(args?.data?.digimental?.id)
          }
        },
      }
    }),
    createDigimental: (parent, args, ctx, info) => prisma.digimental.create({
      data: {
        ...args.data,
        digiDestined: {
          connect: {
            id: parseInt(args?.data?.digiDestined?.id)
          }
        },
      }
    }),
  },
  Family: {
    digimons: (parent, args, ctx, info) => prisma.family.findUnique({
      where: {
        id: parent.id
      }
    }).digimons(),
  },
  Rank: {
    digimons: (parent, args, ctx, info) => prisma.rank.findUnique({
      where: {
        id: parent.id
      }
    }).digimons(),
  },
  Attribute: {
    strong: (parent, args, ctx, info) => prisma.attribute.findUnique({
      where: {
        id: parent.id
      }
    }).strong(),
    weak: (parent, args, ctx, info) => prisma.attribute.findUnique({
      where: {
        id: parent.id
      }
    }).weak(),
    digimons: (parent, args, ctx, info) => prisma.attribute.findUnique({
      where: {
        id: parent.id
      }
    }).digimons()
  },
  Type: {
    digimons: (parent, args, ctx, info) => prisma.type.findUnique({
      where: {
        id: parent.id
      }
    }).digimons(),
  },
  Digimon: {
    otherNames: (parent, args, ctx, info) => prisma.digimon.findUnique({
      where: {
        id: parent.id
      }
    }).otherNames(),
    prior: (parent, args, ctx, info) => prisma.digimon.findUnique({
      where: {
        id: parent.id
      }
    }).prior(),
    next: (parent, args, ctx, info) => prisma.digimon.findUnique({
      where: {
        id: parent.id
      }
    }).next(),
    rank: (parent, args, ctx, info) => prisma.digimon.findUnique({
      where: {
        id: parent.id
      }
    }).rank(),
    attribute: (parent, args, ctx, info) => prisma.digimon.findUnique({
      where: {
        id: parent.id
      }
    }).attribute(),
    type: (parent, args, ctx, info) => prisma.digimon.findUnique({
      where: {
        id: parent.id
      }
    }).type(),
    families: (parent, args, ctx, info) => prisma.digimon.findUnique({
      where: {
        id: parent.id
      }
    }).families(),
    animes: (parent, args, ctx, info) => prisma.digimon.findUnique({
      where: {
        id: parent.id
      }
    }).animes(),
    episodes: (parent, args, ctx, info) => prisma.digimon.findUnique({
      where: {
        id: parent.id
      }
    }).episodes(),
    movies: (parent, args, ctx, info) => prisma.digimon.findUnique({
      where: {
        id: parent.id
      }
    }).movies(),
    digimental: (parent, args, ctx, info) => prisma.digimon.findUnique({
      where: {
        id: parent.id
      }
    }).digimental(),
  },
  DigimonName: {
    digimon: (parent, args, ctx, info) => prisma.digimonName.findUnique({
      where: {
        id: parent.id
      }
    }).digimon(),
  },
  Universe: {
    animes: (parent, args, ctx, info) => prisma.universe.findUnique({
      where: {
        id: parent.id
      }
    }).animes(),
    movies: (parent, args, ctx, info) => prisma.universe.findUnique({
      where: {
        id: parent.id
      }
    }).movies(),
    characters: (parent, args, ctx, info) => prisma.universe.findUnique({
      where: {
        id: parent.id
      }
    }).characters(),
  },
  Anime: {
    episodes: (parent, args, ctx, info) => prisma.anime.findUnique({
      where: {
        id: parent.id
      }
    }).episodes(),
    digimons: (parent, args, ctx, info) => prisma.anime.findUnique({
      where: {
        id: parent.id
      }
    }).digimons(),
    digivices: (parent, args, ctx, info) => prisma.anime.findUnique({
      where: {
        id: parent.id
      }
    }).digivices(),
    characters: (parent, args, ctx, info) => prisma.anime.findUnique({
      where: {
        id: parent.id
      }
    }).characters(),
    crests: (parent, args, ctx, info) => prisma.anime.findUnique({
      where: {
        id: parent.id
      }
    }).crests(),
    universe: (parent, args, ctx, info) => prisma.anime.findUnique({
      where: {
        id: parent.id
      }
    }).universe(),
  },
  Episode: {
    anime: (parent, args, ctx, info) => prisma.episode.findUnique({
      where: {
        id: parent.id
      }
    }).anime(),
    characters: (parent, args, ctx, info) => prisma.episode.findUnique({
      where: {
        id: parent.id
      }
    }).characters(),
    digimons: (parent, args, ctx, info) => prisma.episode.findUnique({
      where: {
        id: parent.id
      }
    }).digimons(),
  },
  Movie: {
    universe: (parent, args, ctx, info) => prisma.movie.findUnique({
      where: {
        id: parent.id
      }
    }).universe(),
    characters: (parent, args, ctx, info) => prisma.movie.findUnique({
      where: {
        id: parent.id
      }
    }).characters(),
    digimons: (parent, args, ctx, info) => prisma.movie.findUnique({
      where: {
        id: parent.id
      }
    }).digimons(),
    digivices: (parent, args, ctx, info) => prisma.movie.findUnique({
      where: {
        id: parent.id
      }
    }).digivices(),
  },
  Character: {
    animes: (parent, args, ctx, info) => prisma.character.findUnique({
      where: {
        id: parent.id
      }
    }).animes(),
    digivices: (parent, args, ctx, info) => prisma.character.findUnique({
      where: {
        id: parent.id
      }
    }).digivices(),
    crest: (parent, args, ctx, info) => prisma.character.findUnique({
      where: {
        id: parent.id
      }
    }).crest(),
    digimental: (parent, args, ctx, info) => prisma.character.findUnique({
      where: {
        id: parent.id
      }
    }).digimental(),
    universes: (parent, args, ctx, info) => prisma.character.findUnique({
      where: {
        id: parent.id
      }
    }).universes(),
    episodes: (parent, args, ctx, info) => prisma.character.findUnique({
      where: {
        id: parent.id
      }
    }).episodes(),
    movies: (parent, args, ctx, info) => prisma.character.findUnique({
      where: {
        id: parent.id
      }
    }).movies(),
  },
  Digivice: {
    type: (parent, args, ctx, info) => DigiviceType[parent.type],
    animes: (parent, args, ctx, info) => prisma.digivice.findUnique({
      where: {
        id: parent.id
      }
    }).animes(),
    movies: (parent, args, ctx, info) => prisma.digivice.findUnique({
      where: {
        id: parent.id
      }
    }).movies(),
  },
  Crest: {
    digiDestined: (parent, args, ctx, info) => prisma.crest.findUnique({
      where: {
        id: parent.id
      }
    }).digiDestined(),
    animes: (parent, args, ctx, info) => prisma.crest.findUnique({
      where: {
        id: parent.id
      }
    }).animes(),
    digimental: (parent, args, ctx, info) => prisma.crest.findUnique({
      where: {
        id: parent.id
      }
    }).digimental(),
  },
  Digimental: {
    digiDestined: (parent, args, ctx, info) => prisma.digimental.findUnique({
      where: {
        id: parent.id
      }
    }).digiDestined(),
    digimons: (parent, args, ctx, info) => prisma.digimental.findUnique({
      where: {
        id: parent.id
      }
    }).digimons(),
    crest: (parent, args, ctx, info) => prisma.digimental.findUnique({
      where: {
        id: parent.id
      }
    }).crest(),
  },
  Date: dateScalar
};

export default resolvers