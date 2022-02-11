import { getConnectAndDisconnect, getOptions } from './utils.js'

import Prisma from '@prisma/client/index.js'
import { dateScalar } from '../schema/customScalars.js';

const { PrismaClient, DigiviceType, SpiritElement } = Prisma

const prisma = new PrismaClient()

const resolvers = {
  Query: {
    // Field
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
    // Rank
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
    // Attribute
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
    // Type
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
    // Digimo
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
    // DigimonGroup
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
    // Universe
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
    // Serie
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
    // Episode
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
    // Movie
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
    // Character
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
    // Digivice
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
    // Crest
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
    // Digimental
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
    // Spirit
    getSpirits: (prt, args, ctx, info) => prisma.spirit.findMany({
      ...getOptions(args?.options)
    }),
    getSpiritById: (prt, args, ctx, info) => prisma.spirit.findUnique({
      where: {
        id: args.id
      }
    }),
    getSpiritsByElement: (prt, args, ctx, info) => prisma.spirit.findMany({
      ...getOptions(args?.options),
      where: {
        element: args.element
      }
    }),
    getSpiritElements: (prt, args, ctx, info) => Object.values(SpiritElement),
  },
  Mutation: {
    // Field
    createField: (parent, args, ctx, info) => prisma.field.create({
      data: {
        ...args.data,
        digimon: {
          connect: args?.data?.digimon?.map(d => {
            return {
              id: parseInt(d.id)
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
              id: parseInt(d.id)
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
        rank: {
          connect: {
            id: parseInt(args?.data?.rank?.id)
          }
        },
        attribute: {
          connect: {
            id: parseInt(args?.data?.attribute?.id)
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
        movies: {
          connect: args?.data?.movies?.map(m => {
            return {
              id: parseInt(m.id)
            }
          })
        },
        series: {
          connect: args?.data?.series?.map(a => {
            return {
              id: parseInt(a.id)
            }
          })
        },
        episodes: {
          connect: args?.data?.episodes?.map(e => {
            return {
              id: parseInt(e.id)
            }
          })
        },
        fields: {
          connect: args?.data?.fields?.map(f => {
            return {
              id: parseInt(f.id)
            }
          })
        },
        spirits: {
          connect: args?.data?.spirits?.map(s => {
            return {
              id: parseInt(s.id)
            }
          })
        },
        partners: {
          connect: args?.data?.partners?.map(p => {
            return {
              id: parseInt(p.id)
            }
          })
        },
        previous: {
          connect: args?.data?.previous?.map(p => {
            return {
              id: parseInt(p.id)
            }
          })
        },
        next: {
          connect: args?.data?.next?.map(n => {
            return {
              id: parseInt(n.id)
            }
          })
        },
        groups: {
          connect: args?.data?.groups?.map(g => {
            return {
              id: parseInt(g.id)
            }
          })
        },
        otherNames: {
          create: args?.data?.otherNames
        }
      }
    }),
    updateDigimon: async (parent, args, ctx, info) => {
      const currentDigimon = prisma.digimon.findUnique({
        where: {
          id: parseInt(args.data.id)
        }
      })
      const oRank = await currentDigimon.rank()
      const oAttribute = await currentDigimon.attribute()
      const oType = await currentDigimon.type()
      const oDigimental = await currentDigimon.digimental()
      const oMovies = await currentDigimon.movies()
      const oSeries = await currentDigimon.series()
      const oEpisodes = await currentDigimon.episodes()
      const oFields = await currentDigimon.fields()
      const oSpirits = await currentDigimon.spirits()
      const oPartners = await currentDigimon.partners()
      const oPrevious = await currentDigimon.previous()
      const oNext = await currentDigimon.next()
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
          ...getConnectAndDisconnect(oMovies, args.data.movies, 'movies'),
          ...getConnectAndDisconnect(oSeries, args.data.series, 'series'),
          ...getConnectAndDisconnect(oEpisodes, args.data.episodes, 'episodes'),
          ...getConnectAndDisconnect(oFields, args.data.fields, 'fields'),
          ...getConnectAndDisconnect(oSpirits, args.data.spirits, 'spirits'),
          ...getConnectAndDisconnect(oPartners, args.data.partners, 'partners'),
          ...getConnectAndDisconnect(oPrevious, args.data.previous, 'previous'),
          ...getConnectAndDisconnect(oNext, args.data.next, 'next'),
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
              id: parseInt(d.id)
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
        digimon: {
          connect: args?.data?.digimon?.map(d => {
            return {
              id: parseInt(d.id)
            }
          })
        },
        characters: {
          connect: args?.data?.characters?.map(c => {
            return {
              id: parseInt(c.id)
            }
          })
        },
        universe: {
          connect: {
            id: parseInt(args?.data?.universe?.id)
          }
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
      const oCharacters = await currentSeries.characters()
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
          ...getConnectAndDisconnect(oCharacters, args.data.characters, 'characters'),
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
        digimon: {
          connect: args?.data?.digimon?.map(d => {
            return {
              id: parseInt(d.id)
            }
          })
        },
        characters: {
          connect: args?.data?.characters?.map(c => {
            return {
              id: parseInt(c.id)
            }
          })
        },
        series: {
          connect: {
            id: parseInt(args?.data?.universe?.id)
          }
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
      const oDigimon = await currentEpisode.digimon()
      const oCharacters = await currentEpisode.characters()
      return prisma.episode.update({
        where: {
          id: parseInt(args.data.id)
        },
        data: {
          title: args?.data?.title,
          synopsis: args?.data?.synopsis,
          originalAirDate: args?.data?.originalAirDate,
          seriesId: args?.data?.series?.id ? parseInt(args.data.series.id) : oSeries.id,
          ...getConnectAndDisconnect(oDigimon, args.data.digimon, 'digimon'),
          ...getConnectAndDisconnect(oCharacters, args.data.characters, 'characters'),
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
        digimon: {
          connect: args?.data?.digimon?.map(d => {
            return {
              id: parseInt(d.id)
            }
          })
        },
        characters: {
          connect: args?.data?.characters?.map(c => {
            return {
              id: parseInt(c.id)
            }
          })
        },
        universe: {
          connect: {
            id: parseInt(args?.data?.universe?.id)
          }
        }
      }
    }),
    updateMovie: async (parent, args, ctx, info) => {
      const currentMovie = prisma.movie.findUnique({
        where: {
          id: parseInt(args.data.id)
        }
      })
      const oUniverse = await currentMovie.universe()
      const oDigimon = await currentMovie.digimon()
      const oCharacters = await currentMovie.characters()
      return prisma.movie.update({
        where: {
          id: parseInt(args.data.id)
        },
        data: {
          title: args?.data?.title,
          synopsis: args?.data?.synopsis,
          originalAirDate: args?.data?.originalAirDate,
          universeId: args?.data?.universe?.id ? parseInt(args.data.universe.id) : oUniverse.id,
          ...getConnectAndDisconnect(oDigimon, args.data.digimon, 'digimon'),
          ...getConnectAndDisconnect(oCharacters, args.data.characters, 'characters'),
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
        movies: {
          connect: args?.data?.movies?.map(m => {
            return {
              id: parseInt(m.id)
            }
          })
        },
        series: {
          connect: args?.data?.series?.map(a => {
            return {
              id: parseInt(a.id)
            }
          })
        },
        episodes: {
          connect: args?.data?.episodes?.map(e => {
            return {
              id: parseInt(e.id)
            }
          })
        },
        crests: {
          connect: args?.data?.crests?.map(c => {
            return {
              id: parseInt(c.id)
            }
          })
        },
        spirits: {
          connect: args?.data?.spirits?.map(s => {
            return {
              id: parseInt(s.id)
            }
          })
        },
        digivices: {
          connect: args?.data?.digivices?.map(d => {
            return {
              id: parseInt(d.id)
            }
          })
        },
        digimentals: {
          connect: args?.data?.digimentals?.map(d => {
            return {
              id: parseInt(d.id)
            }
          })
        },
        partners: {
          connect: args?.data?.partners?.map(p => {
            return {
              id: parseInt(p.id)
            }
          })
        },
        universes: {
          connect: args?.data?.universes?.map(u => {
            return {
              id: parseInt(u.id)
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
      const oMovies = await currentCharacter.movies()
      const oSeries = await currentCharacter.series()
      const oEpisodes = await currentCharacter.episodes()
      const oCrests = await currentCharacter.crests()
      const oSpirits = await currentCharacter.spirits()
      const oDigivices = await currentCharacter.digivices()
      const oDigimentals = await currentCharacter.digimentals()
      const oPartners = await currentCharacter.partners()
      const oUniverses = await currentCharacter.universes()
      return prisma.character.update({
        where: {
          id: parseInt(args.data.id)
        },
        data: {
          name: args?.data?.name,
          isDigiDestined: args?.data?.isDigiDestined,
          ...getConnectAndDisconnect(oMovies, args.data.movies, 'movies'),
          ...getConnectAndDisconnect(oSeries, args.data.series, 'series'),
          ...getConnectAndDisconnect(oEpisodes, args.data.episodes, 'episodes'),
          ...getConnectAndDisconnect(oCrests, args.data.crests, 'crests'),
          ...getConnectAndDisconnect(oSpirits, args.data.spirits, 'spirits'),
          ...getConnectAndDisconnect(oDigivices, args.data.digivices, 'digivices'),
          ...getConnectAndDisconnect(oDigimentals, args.data.digimentals, 'digimentals'),
          ...getConnectAndDisconnect(oPartners, args.data.partners, 'partners'),
          ...getConnectAndDisconnect(oUniverses, args.data.universes, 'universes'),
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
        }
      }
    }),
    updateDigivice: async (parent, args, ctx, info) => {
      const oDigiDestined = await prisma.digivice.findUnique({
        where: {
          id: parseInt(args.data.id)
        }
      }).digiDestined()
      return prisma.digivice.update({
        where: {
          id: parseInt(args.data.id)
        },
        data: {
          digiDestinedId: args?.data?.digiDestined?.id ? parseInt(args.data.digiDestined.id) : oDigiDestined.id,
          colors: args?.data?.colors,
          type: DigiviceType[args?.data?.type],
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
              id: parseInt(d.id)
            }
          })
        },
        digimental: {
          connect: {
            id: parseInt(args?.data?.digimental?.id)
          }
        }
      }
    }),
    updateCrest: async (parent, args, ctx, info) => {
      const currentCrest = prisma.crest.findUnique({
        where: {
          id: parseInt(args.data.id)
        }
      })
      const oDigiDestineds = await currentCrest.digiDestineds()
      const oDigimental = await currentCrest.digimental()
      return prisma.crest.update({
        where: {
          id: parseInt(args.data.id)
        },
        data: {
          name: args?.data?.name,
          description: args?.data?.description,
          digimentalId: args?.data?.digimental?.id ? parseInt(args.data.digimental.id) : oDigimental.id,
          ...getConnectAndDisconnect(oDigiDestineds, args.data.digiDestineds, 'digiDestineds')
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
        digiDestined: {
          connect: {
            id: parseInt(args?.data?.digiDestined?.id)
          }
        },
        digimon: {
          connect: args?.data?.digimon?.map(d => {
            return {
              id: parseInt(d.id)
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
      const oDigiDestined = await currentDigimental.digiDestined()
      const oDigimon = await currentDigimental.digimon()
      return prisma.digimental.update({
        where: {
          id: parseInt(args.data.id)
        },
        data: {
          name: args?.data?.name,
          description: args?.data?.description,
          attribute: args?.data?.attribute,
          digiDestinedId: args?.data?.digiDestined?.id ? parseInt(args.data.digiDestined.id) : oDigiDestined.id,
          ...getConnectAndDisconnect(oDigimon, args.data.digimon, 'digimon')
        }
      })
    },
    deleteDigimental: (parent, args, ctx, info) => prisma.digimental.delete({
      where: {
        id: args.id
      }
    }),
    // Spirit
    createSpirit: (parent, args, ctx, info) => prisma.digivice.create({
      data: {
        ...args.data,
        digiDestined: {
          connect: {
            id: parseInt(args?.data?.digiDestined?.id)
          }
        },
        digimon: {
          connect: {
            id: parseInt(args?.data?.digimon?.id)
          }
        }
      }
    }),
    updateSpirit: async (parent, args, ctx, info) => {
      const currentSpirit = prisma.spirit.findUnique({
        where: {
          id: parseInt(args.data.id)
        }
      })
      const oDigiDestined = await currentSpirit.digiDestined()
      const oDigimon = await currentSpirit.digimon()
      return prisma.spirit.update({
        where: {
          id: parseInt(args.data.id)
        },
        data: {
          element: SpiritElement[args?.data?.element],
          isHuman: args?.data?.isHuman,
          digiDestinedId: args?.data?.digiDestined?.id ? parseInt(args.data.digiDestined.id) : oDigiDestined.id,
          digimonId: args?.data?.digimon?.id ? parseInt(args.data.digimon.id) : oDigimon.id,
        }
      })
    },
    deleteSpirit: (parent, args, ctx, info) => prisma.digivice.delete({
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
    digimental: (parent, args, ctx, info) => prisma.digimon.findUnique({
      where: {
        id: parent.id
      }
    }).digimental(),
    movies: (parent, args, ctx, info) => prisma.digimon.findUnique({
      where: {
        id: parent.id
      }
    }).movies(),
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
    fields: (parent, args, ctx, info) => prisma.digimon.findUnique({
      where: {
        id: parent.id
      }
    }).fields(),
    spirits: (parent, args, ctx, info) => prisma.digimon.findUnique({
      where: {
        id: parent.id
      }
    }).spirits(),
    partners: (parent, args, ctx, info) => prisma.digimon.findUnique({
      where: {
        id: parent.id
      }
    }).partners(),
    previous: (parent, args, ctx, info) => prisma.digimon.findUnique({
      where: {
        id: parent.id
      }
    }).previous(),
    next: (parent, args, ctx, info) => prisma.digimon.findUnique({
      where: {
        id: parent.id
      }
    }).next(),
    groups: (parent, args, ctx, info) => prisma.digimon.findUnique({
      where: {
        id: parent.id
      }
    }).groups(),
    otherNames: (parent, args, ctx, info) => prisma.digimon.findUnique({
      where: {
        id: parent.id
      }
    }).otherNames(),
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
    characters: (parent, args, ctx, info) => prisma.series.findUnique({
      where: {
        id: parent.id
      }
    }).characters(),
    universe: (parent, args, ctx, info) => prisma.series.findUnique({
      where: {
        id: parent.id
      }
    }).universe(),
  },
  Episode: {
    digimon: (parent, args, ctx, info) => prisma.episode.findUnique({
      where: {
        id: parent.id
      }
    }).digimon(),
    characters: (parent, args, ctx, info) => prisma.episode.findUnique({
      where: {
        id: parent.id
      }
    }).characters(),
    series: (parent, args, ctx, info) => prisma.episode.findUnique({
      where: {
        id: parent.id
      }
    }).series(),
  },
  Movie: {
    digimon: (parent, args, ctx, info) => prisma.movie.findUnique({
      where: {
        id: parent.id
      }
    }).digimon(),
    characters: (parent, args, ctx, info) => prisma.movie.findUnique({
      where: {
        id: parent.id
      }
    }).characters(),
    universe: (parent, args, ctx, info) => prisma.movie.findUnique({
      where: {
        id: parent.id
      }
    }).universe(),
  },
  Character: {
    movies: (parent, args, ctx, info) => prisma.character.findUnique({
      where: {
        id: parent.id
      }
    }).movies(),
    series: (parent, args, ctx, info) => prisma.character.findUnique({
      where: {
        id: parent.id
      }
    }).series(),
    episodes: (parent, args, ctx, info) => prisma.character.findUnique({
      where: {
        id: parent.id
      }
    }).episodes(),
    crests: (parent, args, ctx, info) => prisma.character.findUnique({
      where: {
        id: parent.id
      }
    }).crests(),
    spirits: (parent, args, ctx, info) => prisma.character.findUnique({
      where: {
        id: parent.id
      }
    }).spirits(),
    digivices: (parent, args, ctx, info) => prisma.character.findUnique({
      where: {
        id: parent.id
      }
    }).digivices(),
    digimentals: (parent, args, ctx, info) => prisma.character.findUnique({
      where: {
        id: parent.id
      }
    }).digimentals(),
    partners: (parent, args, ctx, info) => prisma.character.findUnique({
      where: {
        id: parent.id
      }
    }).partners(),
    otherNames: (parent, args, ctx, info) => prisma.character.findUnique({
      where: {
        id: parent.id
      }
    }).otherNames(),
    universes: (parent, args, ctx, info) => prisma.character.findUnique({
      where: {
        id: parent.id
      }
    }).universes(),
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
  },
  Crest: {
    digiDestineds: (parent, args, ctx, info) => prisma.crest.findUnique({
      where: {
        id: parent.id
      }
    }).digiDestineds(),
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
    digimon: (parent, args, ctx, info) => prisma.digimental.findUnique({
      where: {
        id: parent.id
      }
    }).digimon(),
    crest: (parent, args, ctx, info) => prisma.digimental.findUnique({
      where: {
        id: parent.id
      }
    }).crest(),
  },
  Spirit: {
    element: (parent, args, ctx, info) => SpiritElement[parent.element],
    digiDestined: (parent, args, ctx, info) => prisma.spirit.findUnique({
      where: {
        id: parent.id
      }
    }).digiDestined(),
    digimon: (parent, args, ctx, info) => prisma.spirit.findUnique({
      where: {
        id: parent.id
      }
    }).digimon(),
  },
  Date: dateScalar
};

export default resolvers