import { getConnectAndDisconnect, getOptions } from './utils.js'

import Prisma from '@prisma/client/index.js'
import { dateScalar } from '../schema/customScalars.js';

const { PrismaClient, DigiviceType } = Prisma

const prisma = new PrismaClient()

const resolvers = {
  Query: {
    getFields: (prt, args, ctx, info) => prisma.field.findMany({
      ...getOptions(args?.options)
    }),
    getFieldById: (prt, args, ctx, info) => prisma.field.findUnique({
      where: {
        id: args.id
      }
    }),
    getFieldByName: (prt, args, ctx, info) => prisma.field.findUnique({
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
    getDigimon: (prt, args, ctx, info) => prisma.digimon.findMany({
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
    getDigimonGroups: (prt, args, ctx, info) => prisma.digimonGroup.findMany({
      ...getOptions(args?.options)
    }),
    getDigimonGroupById: (prt, args, ctx, info) => prisma.digimonGroup.findUnique({
      where: {
        id: args.id
      }
    }),
    getDigimonGroupByName: (prt, args, ctx, info) => prisma.digimonGroup.findUnique({
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
    getSeries: (prt, args, ctx, info) => prisma.series.findMany({
      ...getOptions(args?.options)
    }),
    getSeriesById: (prt, args, ctx, info) => prisma.series.findUnique({
      where: {
        id: args.id
      }
    }),
    getSeriesByTitle: (prt, args, ctx, info) => prisma.series.findUnique({
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
    // Field
    createField: (parent, args, ctx, info) => prisma.field.create({
      data: {
        ...args.data,
        digimon: {
          connect: args?.data?.digimon?.map(d => {
            return {
              where: {
                id: parseInt(d.id)
              }
            }
          })
        }
      }
    }),
    updateField: async (parent, args, ctx, info) => {
      const oDigimon = await prisma.field.findUnique({
        where: {
          id: parseInt(args.data.id)
        }
      }).digimon()

      return prisma.field.update({
        where: {
          id: parseInt(args.data.id)
        },
        data: {
          name: args.data.name,
          symbol: args.data.symbol,
          description: args.data.description,
          ...getConnectAndDisconnect(oDigimon, args.data.digimon, 'digimon')
        }
      })
    },
    deleteField: (parent, args, ctx, info) => prisma.field.delete({
      where: {
        id: args.id
      }
    }),
    // Rank
    // Não pode adicionar: 'digimon'
    createRank: (parent, args, ctx, info) => prisma.rank.create({
      data: {
        ...args.data
      }
    }),
    updateRank: async (parent, args, ctx, info) => prisma.rank.update({
      where: {
        id: parseInt(args.data.id)
      },
      data: {
        name: args.data.name,
        description: args.data.description,
      }
    }),
    deleteRank: (parent, args, ctx, info) => prisma.rank.delete({
      where: {
        id: args.id
      }
    }),
    // Attribute
    // Não pode adicionar: 'digimon'
    createAttribute: (parent, args, ctx, info) => prisma.attribute.create({
      data: {
        ...args.data,
        strong: {
          connect: args?.data?.strong?.map(d => {
            return {
              where: {
                id: parseInt(d.id)
              }
            }
          })
        },
        weak: {
          connect: args?.data?.weak?.map(d => {
            return {
              where: {
                id: parseInt(d.id)
              }
            }
          })
        }
      }
    }),
    updateAttribute: async (parent, args, ctx, info) => {
      const currentAttribute = prisma.attribute.findUnique({
        where: {
          id: parseInt(args.data.id)
        }
      })
      const oStrong = await currentAttribute.strong()
      const oWeak = await currentAttribute.weak()
      return prisma.attribute.update({
        where: {
          id: parseInt(args.data.id)
        },
        data: {
          name: args.data.name,
          symbol: args.data.symbol,
          description: args.data.description,
          ...getConnectAndDisconnect(oStrong, args.data.strong, 'strong'),
          ...getConnectAndDisconnect(oWeak, args.data.weak, 'weak')
        }
      })
    },
    deleteAttribute: (parent, args, ctx, info) => prisma.attribute.delete({
      where: {
        id: args.id
      }
    }),
    // Type
    // Não pode adicionar: 'digimon'
    createType: (parent, args, ctx, info) => prisma.type.create({
      data: {
        ...args.data
      }
    }),
    updateType: async (parent, args, ctx, info) => prisma.attribute.update({
      where: {
        id: parseInt(args.data.id)
      },
      data: {
        name: args.data.name,
      }
    }),
    deleteType: (parent, args, ctx, info) => prisma.type.delete({
      where: {
        id: args.id
      }
    }),
    // Digimon
    createDigimon: (parent, args, ctx, info) => prisma.digimon.create({
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
        type: {
          connect: {
            id: parseInt(args?.data?.type?.id)
          }
        },
        digimental: {
          connect: {
            id: parseInt(args?.data?.digimental?.id)
          }
        },
        otherNames: {
          create: args?.data?.otherNames
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
        fields: {
          connect: args?.data?.fields?.map(f => {
            return {
              where: {
                id: parseInt(f.id)
              }
            }
          })
        },
        series: {
          connect: args?.data?.series?.map(a => {
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
        groups: {
          connect: args?.data?.groups?.map(g => {
            return {
              where: {
                id: parseInt(g.id)
              }
            }
          })
        }
      }
    }),
    updateDigimon: (parent, args, ctx, info) => {
      const currentDigimon = prisma.digimon.findUnique({
        where: {
          id: parseInt(args.data.id)
        }
      })
      const oRank = await currentDigimon.rank()
      const oAttribute = await currentDigimon.attribute()
      const oType = await currentDigimon.type()
      const oDigimental = await currentDigimon.digimental()
      const oPrior = await currentDigimon.prior()
      const oNext = await currentDigimon.next()
      const oFields = await currentDigimon.fields()
      const oSeries = await currentDigimon.series()
      const oEpisodes = await currentDigimon.episodes()
      const oMovies = await currentDigimon.movies()
      const oGroups = await currentDigimon.groups()
      return prisma.digimon.update({
        where: {
          id: parseInt(args.data.id)
        },
        data: {
          name: args.data.name,
          slug: args.data.slug,
          isJogress: args.data.isJogress,
          hasXAntibody: args.data.hasXAntibody,
          rankId: args?.data?.rank?.id ? parseInt(args.data.rank.id) : oRank.id,
          attributeId: args?.data?.attribute?.id ? parseInt(args.data.attribute.id) : oAttribute.id,
          typeId: args?.data?.type?.id ? parseInt(args.data.type.id) : oType.id,
          digimentalId: args?.data?.digimental?.id ? parseInt(args.data.digimental.id) : oDigimental.id,
          ...getConnectAndDisconnect(oPrior, args.data.prior, 'prior'),
          ...getConnectAndDisconnect(oNext, args.data.next, 'next'),
          ...getConnectAndDisconnect(oFields, args.data.fields, 'fields'),
          ...getConnectAndDisconnect(oSeries, args.data.series, 'series'),
          ...getConnectAndDisconnect(oEpisodes, args.data.episodes, 'episodes'),
          ...getConnectAndDisconnect(oMovies, args.data.movies, 'movies'),
          ...getConnectAndDisconnect(oGroups, args.data.groups, 'groups'),
        }
      })
    },
    deleteDigimon: (parent, args, ctx, info) => prisma.digimon.delete({
      where: {
        id: args.id
      }
    }),
    // DigimonName
    createDigimonName: (parent, args, ctx, info) => prisma.digimonName.create({
      data: {
        ...args.data,
        digimon: {
          connect: {
            id: parseInt(args?.data?.digimon?.id)
          }
        },
      }
    }),
    updateDigimonName: async (parent, args, ctx, info) => {
      const oDigimon = await prisma.digimonName.findUnique({
        where: {
          id: parseInt(args.data.id)
        }
      }).digimon()
      return prisma.digimonName.update({
        where: {
          id: parseInt(args.data.id)
        },
        data: {
          name: args.data.name,
          lang: args.data.lang,
          digimonId: args?.data?.digimon?.id ? parseInt(args.data.digimon.id) : oDigimon
        }
      })
    },
    deleteDigimonName: (parent, args, ctx, info) => prisma.digimonName.delete({
      where: {
        id: args.id
      }
    }),
    // DigimonGroup
    createDigimonGroup: (parent, args, ctx, info) => prisma.digimonGroup.create({
      data: {
        ...args.data,
        digimon: {
          connect: args?.data?.digimon?.map(d => {
            return {
              where: {
                id: parseInt(d.id)
              }
            }
          })
        },
      }
    }),
    updateDigimonGroup: async (parent, args, ctx, info) => {
      const oDigimon = await prisma.digimonGroup.findUnique({
        where: {
          id: parseInt(args.data.id)
        }
      }).digimon()
      return prisma.digimonGroup.update({
        where: {
          id: parseInt(args.data.id)
        },
        data: {
          name: args.data.name,
          description: args.data.description,
          ...getConnectAndDisconnect(oDigimon, args.data.digimon, 'digimon'),
        }
      })
    },
    deleteDigimonGroup: (parent, args, ctx, info) => prisma.digimonGroup.delete({
      where: {
        id: args.id
      }
    }),
    // Universe
    // Não pode adicionar: 'series', 'movies'
    createUniverse: (parent, args, ctx, info) => prisma.universe.create({
      data: {
        ...args.data
      }
    }),
    updateUniverse: (parent, args, ctx, info) => prisma.universe.update({
      where: {
        id: parseInt(args.data.id)
      },
      data: {
        name: args.data.name,
      }
    }),
    deleteUniverse: (parent, args, ctx, info) => prisma.universe.delete({
      where: {
        id: args.id
      }
    }),
    // Series
    // Não pode adicionar: 'episodes'
    createSeries: (parent, args, ctx, info) => prisma.series.create({
      data: {
        ...args.data,
        universe: {
          connect: {
            id: parseInt(args?.data?.universe?.id)
          }
        },
        digimon: {
          connect: args?.data?.digimon?.map(d => {
            return {
              where: {
                id: parseInt(d.id)
              }
            }
          })
        },
        digivices: {
          connect: args?.data?.digivices?.map(d => {
            return {
              where: {
                id: parseInt(d.id)
              }
            }
          })
        },
        characters: {
          connect: args?.data?.characters?.map(c => {
            return {
              where: {
                id: parseInt(c.id)
              }
            }
          })
        },
        crests: {
          connect: args?.data?.crests?.map(c => {
            return {
              where: {
                id: parseInt(c.id)
              }
            }
          })
        },
      }
    }),
    updateSeries: async (parent, args, ctx, info) => {
      const currentSeries = prisma.series.findUnique({
        where: {
          id: parseInt(args.data.id)
        }
      })
      const oDigimon = await currentSeries.digimon()
      const oDigivices = await currentSeries.digivices()
      const oCharacters = await currentSeries.characters()
      const oCrests = await currentSeries.crests()
      const oUniverse = await currentSeries.universe()

      return prisma.series.update({
        where: {
          id: parseInt(args.data.id)
        },
        data: {
          title: args?.data?.title,
          synopsis: args?.data?.synopsis,
          originalAirDate: args?.data?.originalAirDate,
          universeId: args?.data?.universe?.id ? parseInt(args.data.universe.id) : oUniverse.id,
          ...getConnectAndDisconnect(oDigimon, args.data.digimon, 'digimon'),
          ...getConnectAndDisconnect(oDigivices, args.data.digivices, 'digivices'),
          ...getConnectAndDisconnect(oCharacters, args.data.characters, 'characters'),
          ...getConnectAndDisconnect(oCrests, args.data.crests, 'crests'),
        }
      })
    },
    deleteSeries: (parent, args, ctx, info) => prisma.series.delete({
      where: {
        id: args.id
      }
    }),
    // Episode
    createEpisode: (parent, args, ctx, info) => prisma.episode.create({
      data: {
        ...args.data,
        series: {
          connect: {
            id: parseInt(args?.data?.universe?.id)
          }
        },
        characters: {
          connect: args?.data?.characters?.map(c => {
            return {
              where: {
                id: parseInt(c.id)
              }
            }
          })
        },
        digimon: {
          connect: args?.data?.digimon?.map(d => {
            return {
              where: {
                id: parseInt(d.id)
              }
            }
          })
        },
      }
    }),
    updateEpisode: async (parent, args, ctx, info) => {
      const currentEpisode = prisma.episode.findUnique({
        where: {
          id: parseInt(args.data.id)
        }
      })
      const oSeries = await currentEpisode.series()
      const oCharacters = await currentEpisode.characters()
      const oDigimon = await currentEpisode.digimon()
      return prisma.series.update({
        where: {
          id: parseInt(args.data.id)
        },
        data: {
          title: args?.data?.title,
          synopsis: args?.data?.synopsis,
          originalAirDate: args?.data?.originalAirDate,
          seriesId: args?.data?.series?.id ? parseInt(args.data.series.id) : oSeries.id,
          ...getConnectAndDisconnect(oCharacters, args.data.characters, 'characters'),
          ...getConnectAndDisconnect(oDigimon, args.data.digimon, 'digimon'),
        }
      })
    },
    deleteEpisode: (parent, args, ctx, info) => prisma.episode.delete({
      where: {
        id: args.id
      }
    }),
    // Movie
    createMovie: (parent, args, ctx, info) => prisma.movie.create({
      data: {
        ...args.data,
        universe: {
          connect: {
            id: parseInt(args?.data?.universe?.id)
          }
        },
        characters: {
          connect: args?.data?.characters?.map(c => {
            return {
              where: {
                id: parseInt(c.id)
              }
            }
          })
        },
        digimon: {
          connect: args?.data?.digimon?.map(d => {
            return {
              where: {
                id: parseInt(d.id)
              }
            }
          })
        },
        digivices: {
          connect: args?.data?.digivices?.map(d => {
            return {
              where: {
                id: parseInt(d.id)
              }
            }
          })
        },
      }
    }),
    updateMovie: async (parent, args, ctx, info) => {
      const currentMovie = prisma.movie.findUnique({
        where: {
          id: parseInt(args.data.id)
        }
      })
      const oUniverse = await currentMovie.universe()
      const oCharacters = await currentMovie.characters()
      const oDigimon = await currentMovie.digimon()
      const oDigivices = await currentMovie.digivices()
      return prisma.series.update({
        where: {
          id: parseInt(args.data.id)
        },
        data: {
          title: args?.data?.title,
          synopsis: args?.data?.synopsis,
          originalAirDate: args?.data?.originalAirDate,
          universeId: args?.data?.universe?.id ? parseInt(args.data.universe.id) : oUniverse.id,
          ...getConnectAndDisconnect(oCharacters, args.data.characters, 'characters'),
          ...getConnectAndDisconnect(oDigimon, args.data.digimon, 'digimon'),
          ...getConnectAndDisconnect(oDigivices, args.data.digivices, 'digivices'),
        }
      })
    },
    deleteMovie: (parent, args, ctx, info) => prisma.movie.delete({
      where: {
        id: args.id
      }
    }),
    // Character
    createCharacter: (parent, args, ctx, info) => prisma.character.create({
      data: {
        ...args.data,
        crests: {
          connect: args?.data?.crests?.map(c => {
            return {
              where: {
                id: parseInt(c.id)
              }
            }
          })
        },
        digimentals: {
          connect: args?.data?.digimentals?.map(d => {
            return {
              where: {
                id: parseInt(d.id)
              }
            }
          })
        },
        series: {
          connect: args?.data?.series?.map(a => {
            return {
              where: {
                id: parseInt(a.id)
              }
            }
          })
        },
        digivices: {
          connect: args?.data?.digivices?.map(d => {
            return {
              where: {
                id: parseInt(d.id)
              }
            }
          })
        },
        universes: {
          connect: args?.data?.universes?.map(u => {
            return {
              where: {
                id: parseInt(u.id)
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
        otherNames: {
          create: args?.data?.otherNames
        },
      }
    }),
    updateCharacter: async (parent, args, ctx, info) => {
      const currentCharacter = prisma.character.findUnique({
        where: {
          id: parseInt(args.data.id)
        }
      })
      const oSeries = await currentCharacter.series()
      const oUniverses = await currentCharacter.universes()
      const oEpisodes = await currentCharacter.episodes()
      const oMovies = await currentCharacter.movies()
      const oCrests = await currentCharacter.crests()
      const oDigimentals = await currentCharacter.digimentals()
      return prisma.series.update({
        where: {
          id: parseInt(args.data.id)
        },
        data: {
          name: args?.data?.name,
          isDigiDestined: args?.data?.isDigiDestined,
          ...getConnectAndDisconnect(oSeries, args.data.series, 'series'),
          ...getConnectAndDisconnect(oUniverses, args.data.universes, 'universes'),
          ...getConnectAndDisconnect(oEpisodes, args.data.episodes, 'episodes'),
          ...getConnectAndDisconnect(oMovies, args.data.movies, 'movies'),
          ...getConnectAndDisconnect(oCrests, args.data.crests, 'crests'),
          ...getConnectAndDisconnect(oDigimentals, args.data.digimentals, 'digimentals'),
        }
      })
    },
    deleteCharacter: (parent, args, ctx, info) => prisma.character.delete({
      where: {
        id: args.id
      }
    }),
    // CharacterName
    createCharacterName: (parent, args, ctx, info) => prisma.characterName.create({
      data: {
        ...args.data,
        character: {
          connect: {
            id: parseInt(args?.data?.character?.id)
          }
        },
      }
    }),
    updateCharacterName: async (parent, args, ctx, info) => {
      const oCharacter = await prisma.characterName.findUnique({
        where: {
          id: parseInt(args.data.id)
        }
      }).character()
      return prisma.characterName.update({
        where: {
          id: parseInt(args.data.id)
        },
        data: {
          name: args.data.name,
          lang: args.data.lang,
          characterId: args?.data?.character?.id ? parseInt(args.data.character.id) : oCharacter
        }
      })
    },
    deleteCharacterName: (parent, args, ctx, info) => prisma.characterName.delete({
      where: {
        id: args.id
      }
    }),
    // Digivice
    createDigivice: (parent, args, ctx, info) => prisma.digivice.create({
      data: {
        ...args.data,
        digiDestined: {
          connect: {
            id: parseInt(args?.data?.digiDestined?.id)
          }
        },
        series: {
          connect: args?.data?.series?.map(a => {
            return {
              where: {
                id: parseInt(a.id)
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
        }
      }
    }),
    updateDigivice: async (parent, args, ctx, info) => {
      const currentDigivice = prisma.digivice.findUnique({
        where: {
          id: parseInt(args.data.id)
        }
      })
      const oSeries = await currentDigivice.series()
      const oDigiDestined = await currentDigivice.digiDestined()
      const oMovies = await currentDigivice.movies()
      return prisma.series.update({
        where: {
          id: parseInt(args.data.id)
        },
        data: {
          digiDestinedId: args?.data?.digiDestined?.id ? parseInt(args.data.digiDestined.id) : oDigiDestined.id,
          colors: args?.data?.colors,
          type: DigiviceType[args?.data?.type],
          ...getConnectAndDisconnect(oSeries, args.data.series, 'series'),
          ...getConnectAndDisconnect(oMovies, args.data.movies, 'movies'),
        }
      })
    },
    deleteDigivice: (parent, args, ctx, info) => prisma.digivice.delete({
      where: {
        id: args.id
      }
    }),
    // Crest
    createCrest: (parent, args, ctx, info) => prisma.crest.create({
      data: {
        ...args.data,
        digiDestineds: {
          connect: args?.data?.digiDestineds?.map(d => {
            return {
              where: {
                id: parseInt(d.id)
              }
            }
          })
        },
        digimental: {
          connect: {
            id: parseInt(args?.data?.digimental?.id)
          }
        },
        series: {
          connect: args?.data?.series?.map(a => {
            return {
              where: {
                id: parseInt(a.id)
              }
            }
          })
        }
      }
    }),
    updateCrest: async (parent, args, ctx, info) => {
      const currentCrest = prisma.crest.findUnique({
        where: {
          id: parseInt(args.data.id)
        }
      })
      const oSeries = await currentCrest.series()
      const oDigiDestineds = await currentCrest.digiDestineds()
      const oDigimental = await currentCrest.digimental()
      const oMovies = await currentCrest.movies()
      return prisma.series.update({
        where: {
          id: parseInt(args.data.id)
        },
        data: {
          name: args?.data?.name,
          description: args?.data?.description,
          digimentalId: args?.data?.digimental?.id ? parseInt(args.data.digimental.id) : oDigimental.id,
          ...getConnectAndDisconnect(oDigiDestineds, args.data.digiDestineds, 'digiDestineds'),
          ...getConnectAndDisconnect(oSeries, args.data.series, 'series'),
          ...getConnectAndDisconnect(oMovies, args.data.movies, 'movies'),
        }
      })
    },
    deleteCrest: (parent, args, ctx, info) => prisma.crest.delete({
      where: {
        id: args.id
      }
    }),
    // Digimental
    // Não pode adicionar: 'crest'
    createDigimental: (parent, args, ctx, info) => prisma.digimental.create({
      data: {
        ...args.data,
        digiDestineds: {
          connect: args?.data?.digiDestineds?.map(d => {
            return {
              where: {
                id: parseInt(d.id)
              }
            }
          })
        },
        digimon: {
          connect: args?.data?.digimon?.map(d => {
            return {
              where: {
                id: parseInt(d.id)
              }
            }
          })
        }
      }
    }),
    updateDigimental: async (parent, args, ctx, info) => {
      const currentDigimental = prisma.digimental.findUnique({
        where: {
          id: parseInt(args.data.id)
        }
      })
      const oSeries = await currentDigimental.series()
      const oDigiDestineds = await currentDigimental.digiDestineds()
      const oDigimental = await currentDigimental.digimental()
      const oDigimon = await currentDigimental.digimon()
      const oMovies = await currentDigimental.movies()
      return prisma.series.update({
        where: {
          id: parseInt(args.data.id)
        },
        data: {
          name: args?.data?.name,
          description: args?.data?.description,
          digimentalId: args?.data?.digimental?.id ? parseInt(args.data.digimental.id) : oDigimental.id,
          ...getConnectAndDisconnect(oDigiDestineds, args.data.digiDestineds, 'digiDestineds'),
          ...getConnectAndDisconnect(oDigimon, args.data.digimon, 'digimon'),
          ...getConnectAndDisconnect(oSeries, args.data.series, 'series'),
          ...getConnectAndDisconnect(oMovies, args.data.movies, 'movies'),
        }
      })
    },
    deleteDigimental: (parent, args, ctx, info) => prisma.digimental.delete({
      where: {
        id: args.id
      }
    }),
  },
  Field: {
    digimon: (parent, args, ctx, info) => prisma.field.findUnique({
      where: {
        id: parent.id
      }
    }).digimon(),
  },
  Rank: {
    digimon: (parent, args, ctx, info) => prisma.rank.findUnique({
      where: {
        id: parent.id
      }
    }).digimon(),
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
    digimon: (parent, args, ctx, info) => prisma.attribute.findUnique({
      where: {
        id: parent.id
      }
    }).digimon()
  },
  Type: {
    digimon: (parent, args, ctx, info) => prisma.type.findUnique({
      where: {
        id: parent.id
      }
    }).digimon(),
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
    fields: (parent, args, ctx, info) => prisma.digimon.findUnique({
      where: {
        id: parent.id
      }
    }).fields(),
    series: (parent, args, ctx, info) => prisma.digimon.findUnique({
      where: {
        id: parent.id
      }
    }).series(),
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
    groups: (parent, args, ctx, info) => prisma.digimon.findUnique({
      where: {
        id: parent.id
      }
    }).groups(),
  },
  DigimonName: {
    digimon: (parent, args, ctx, info) => prisma.digimonName.findUnique({
      where: {
        id: parent.id
      }
    }).digimon(),
  },
  DigimonGroup: {
    digimon: (parent, args, ctx, info) => prisma.digimonGroup.findUnique({
      where: {
        id: parent.id
      }
    }).digimon(),
  },
  Universe: {
    series: (parent, args, ctx, info) => prisma.universe.findUnique({
      where: {
        id: parent.id
      }
    }).series(),
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
  Series: {
    episodes: (parent, args, ctx, info) => prisma.series.findUnique({
      where: {
        id: parent.id
      }
    }).episodes(),
    digimon: (parent, args, ctx, info) => prisma.series.findUnique({
      where: {
        id: parent.id
      }
    }).digimon(),
    digivices: (parent, args, ctx, info) => prisma.series.findUnique({
      where: {
        id: parent.id
      }
    }).digivices(),
    characters: (parent, args, ctx, info) => prisma.series.findUnique({
      where: {
        id: parent.id
      }
    }).characters(),
    digimentals: (parent, args, ctx, info) => prisma.series.findUnique({
      where: {
        id: parent.id
      }
    }).digimentals(),
    crests: (parent, args, ctx, info) => prisma.series.findUnique({
      where: {
        id: parent.id
      }
    }).crests(),
    universe: (parent, args, ctx, info) => prisma.series.findUnique({
      where: {
        id: parent.id
      }
    }).universe(),
  },
  Episode: {
    series: (parent, args, ctx, info) => prisma.episode.findUnique({
      where: {
        id: parent.id
      }
    }).series(),
    characters: (parent, args, ctx, info) => prisma.episode.findUnique({
      where: {
        id: parent.id
      }
    }).characters(),
    digimon: (parent, args, ctx, info) => prisma.episode.findUnique({
      where: {
        id: parent.id
      }
    }).digimon(),
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
    digimon: (parent, args, ctx, info) => prisma.movie.findUnique({
      where: {
        id: parent.id
      }
    }).digimon(),
    digivices: (parent, args, ctx, info) => prisma.movie.findUnique({
      where: {
        id: parent.id
      }
    }).digivices(),
    digimentals: (parent, args, ctx, info) => prisma.movie.findUnique({
      where: {
        id: parent.id
      }
    }).digimentals(),
    crests: (parent, args, ctx, info) => prisma.movie.findUnique({
      where: {
        id: parent.id
      }
    }).crests(),
  },
  Character: {
    series: (parent, args, ctx, info) => prisma.character.findUnique({
      where: {
        id: parent.id
      }
    }).series(),
    digivices: (parent, args, ctx, info) => prisma.character.findUnique({
      where: {
        id: parent.id
      }
    }).digivices(),
    crests: (parent, args, ctx, info) => prisma.character.findUnique({
      where: {
        id: parent.id
      }
    }).crests(),
    digimentals: (parent, args, ctx, info) => prisma.character.findUnique({
      where: {
        id: parent.id
      }
    }).digimentals(),
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
  CharacterName: {
    character: (parent, args, ctx, info) => prisma.characterName.findUnique({
      where: {
        id: parent.id
      }
    }).character(),
  },
  Digivice: {
    type: (parent, args, ctx, info) => DigiviceType[parent.type],
    series: (parent, args, ctx, info) => prisma.digivice.findUnique({
      where: {
        id: parent.id
      }
    }).series(),
    movies: (parent, args, ctx, info) => prisma.digivice.findUnique({
      where: {
        id: parent.id
      }
    }).movies(),
  },
  Crest: {
    digiDestineds: (parent, args, ctx, info) => prisma.crest.findUnique({
      where: {
        id: parent.id
      }
    }).digiDestineds(),
    series: (parent, args, ctx, info) => prisma.crest.findUnique({
      where: {
        id: parent.id
      }
    }).series(),
    movies: (parent, args, ctx, info) => prisma.crest.findUnique({
      where: {
        id: parent.id
      }
    }).movies(),
    digimental: (parent, args, ctx, info) => prisma.crest.findUnique({
      where: {
        id: parent.id
      }
    }).digimental(),
  },
  Digimental: {
    digiDestineds: (parent, args, ctx, info) => prisma.digimental.findUnique({
      where: {
        id: parent.id
      }
    }).digiDestineds(),
    digimon: (parent, args, ctx, info) => prisma.digimental.findUnique({
      where: {
        id: parent.id
      }
    }).digimon(),
    series: (parent, args, ctx, info) => prisma.digimental.findUnique({
      where: {
        id: parent.id
      }
    }).series(),
    movies: (parent, args, ctx, info) => prisma.digimental.findUnique({
      where: {
        id: parent.id
      }
    }).movies(),
    crest: (parent, args, ctx, info) => prisma.digimental.findUnique({
      where: {
        id: parent.id
      }
    }).crest(),
  },
  Date: dateScalar
};

export default resolvers