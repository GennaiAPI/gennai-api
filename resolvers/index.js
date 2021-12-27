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
    getElements: (prt, args, ctx, info) => prisma.element.findMany({
      ...getOptions(args?.options)
    }),
    getElementById: (prt, args, ctx, info) => prisma.element.findUnique({
      where: {
        id: args.id
      }
    }),
    getElementByName: (prt, args, ctx, info) => prisma.element.findUnique({
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
                  id: p.id
                }
              }
            })
          },
          next: {
            connect: args?.data?.next?.map(n => {
              return {
                where: {
                  id: n.id
                }
              }
            })
          },
          families: {
            connect: args?.data?.families?.map(f => {
              return {
                where: {
                  id: f.id
                }
              }
            })
          },
          animes: {
            connect: args?.data?.animes?.map(a => {
              return {
                where: {
                  id: a.id
                }
              }
            })
          },
          episodes: {
            connect: args?.data?.episodes?.map(e => {
              return {
                where: {
                  id: e.id
                }
              }
            })
          },
          movies: {
            connect: args?.data?.movies?.map(m => {
              return {
                where: {
                  id: m.id
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
    // removeDigimonPriorNext: (parent, args, ctx, info) => prisma.digimon.update({
    //   where: {
    //     name: args.actualDigimon
    //   },
    //   data: {
    //     prior: {
    //       disconnect: args?.priorDigimons?.map(d => {
    //         return {
    //           name: d
    //         }
    //       })
    //     },
    //     next: {
    //       disconnect: args?.nextDigimons?.map(d => {
    //         return {
    //           name: d
    //         }
    //       })
    //     }
    //   },
    //   include: {
    //     prior: true,
    //     next: true,
    //     family: true
    //   }
    // }),
    createFamily: (parent, args, ctx, info) => prisma.family.create({
      data: {
        ...args.data
      }
    }),
    createRank: (parent, args, ctx, info) => prisma.rank.create({
      data: {
        ...args.data
      }
    }),
    createAttribute: (parent, args, ctx, info) => prisma.attribute.create({
      data: {
        ...args.data,
      }
    }),
    createElement: (parent, args, ctx, info) => prisma.element.create({
      data: {
        ...args.data
      }
    }),
  },
  Digimon: {
    prior: (parent, args, ctx, info) => prisma.digimon.findMany({
      where: {
        next: {
          some: {
            id: parent.id
          }
        }
      }
    }),
    next: (parent, args, ctx, info) => prisma.digimon.findMany({
      where: {
        prior: {
          some: {
            id: parent.id
          }
        }
      }
    }),
    rank: (parent, args, ctx, info) => prisma.rank.findUnique({
      where: {
        id: parent?.rank?.id
      }
    }),
    families: (parent, args, ctx, info) => prisma.family.findMany({
      where: {
        digimons: {
          some: {
            id: parent.id
          }
        }
      }
    }),
  },
  Family: {
    digimons: (parent, args, ctx, info) => prisma.digimon.findMany({
      where: {
        family: {
          some: {
            id: parent.id
          }
        }
      }
    })
  },
  Date: dateScalar
};

export default resolvers