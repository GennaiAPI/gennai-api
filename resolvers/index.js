import { getConnectAndDisconnect, getOptions } from './utils.js'

import Prisma from '@prisma/client/index.js'
import { dateScalar } from '../schema/customScalars.js';

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
    // Family
    createFamily: (parent, args, ctx, info) => prisma.family.create({
      data: {
        ...args.data,
        digimons: {
          connect: args?.data?.digimons?.map(d => {
            return {
              where: {
                id: parseInt(d.id)
              }
            }
          })
        }
      }
    }),
    updateFamily: async (parent, args, ctx, info) => {
      const oDigimons = await prisma.family.findUnique({
        where: {
          id: parseInt(args.data.id)
        }
      }).digimons()

      return prisma.family.update({
        where: {
          id: parseInt(args.data.id)
        },
        data: {
          name: args.data.name,
          symbol: args.data.symbol,
          description: args.data.description,
          ...getConnectAndDisconnect(oDigimons, args.data.digimons, 'digimons')
        }
      })
    },
    deleteFamily: (parent, args, ctx, info) => prisma.family.delete({
      where: {
        id: args.id
      }
    }),
    // Rank
    // Não pode adicionar: 'digimons'
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
    // Não pode adicionar: 'digimons'
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
    // Não pode adicionar: 'digimons'
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
      }
    }),
    updateDigimon: (parent, args, ctx, info) => {
      const currentDigimon = prisma.digimon.findUnique({
        where: {
          id: parseInt(args.data.id)
        }
      })
      const oRank = currentDigimon.rank()
      const oAttribute = currentDigimon.attribute()
      const oType = currentDigimon.type()
      const oDigimental = currentDigimon.digimental()
      const oPrior = currentDigimon.prior()
      const oNext = currentDigimon.next()
      const oFamilies = currentDigimon.families()
      const oAnimes = currentDigimon.animes()
      const oEpisodes = currentDigimon.episodes()
      const oMovies = currentDigimon.movies()

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
          ...getConnectAndDisconnect(oFamilies, args.data.families, 'families'),
          ...getConnectAndDisconnect(oAnimes, args.data.animes, 'animes'),
          ...getConnectAndDisconnect(oEpisodes, args.data.episodes, 'episodes'),
          ...getConnectAndDisconnect(oMovies, args.data.movies, 'movies'),
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
    // Universe
    // Não pode adicionar: 'animes', 'movies'
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
    // Anime
    // Não pode adicionar: 'episodes'
    createAnime: (parent, args, ctx, info) => prisma.anime.create({
      data: {
        ...args.data,
        universe: {
          connect: {
            id: parseInt(args?.data?.universe?.id)
          }
        },
        digimons: {
          connect: args?.data?.digimons?.map(d => {
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
    updateAnime: async (parent, args, ctx, info) => {
      const currentAnime = prisma.anime.findUnique({
        where: {
          id: parseInt(args.data.id)
        }
      })
      const oDigimons = await currentAnime.digimons()
      const oDigivices = await currentAnime.digivices()
      const oCharacters = await currentAnime.characters()
      const oCrests = await currentAnime.crests()
      const oUniverse = await currentAnime.universe()

      return prisma.anime.update({
        where: {
          id: parseInt(args.data.id)
        },
        data: {
          title: args?.data?.title,
          synopsis: args?.data?.synopsis,
          originalAirDate: args?.data?.originalAirDate,
          universeId: args?.data?.universe?.id ? parseInt(args.data.universe.id) : oUniverse.id,
          ...getConnectAndDisconnect(oDigimons, args.data.digimons, 'digimons'),
          ...getConnectAndDisconnect(oDigivices, args.data.digivices, 'digivices'),
          ...getConnectAndDisconnect(oCharacters, args.data.characters, 'characters'),
          ...getConnectAndDisconnect(oCrests, args.data.crests, 'crests'),
        }
      })
    },
    deleteAnime: (parent, args, ctx, info) => prisma.anime.delete({
      where: {
        id: args.id
      }
    }),
    // Episode
    createEpisode: (parent, args, ctx, info) => prisma.episode.create({
      data: {
        ...args.data,
        anime: {
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
        digimons: {
          connect: args?.data?.digimons?.map(d => {
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
      const oAnime = await currentEpisode.anime()
      const oCharacters = await currentEpisode.characters()
      const oDigimons = await currentEpisode.digimons()
      return prisma.anime.update({
        where: {
          id: parseInt(args.data.id)
        },
        data: {
          title: args?.data?.title,
          synopsis: args?.data?.synopsis,
          originalAirDate: args?.data?.originalAirDate,
          animeId: args?.data?.anime?.id ? parseInt(args.data.anime.id) : oAnime.id,
          ...getConnectAndDisconnect(oCharacters, args.data.characters, 'characters'),
          ...getConnectAndDisconnect(oDigimons, args.data.digimons, 'digimons'),
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
        digimons: {
          connect: args?.data?.digimons?.map(d => {
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
      const oDigimons = await currentMovie.digimons()
      const oDigivices = await currentMovie.digivices()
      return prisma.anime.update({
        where: {
          id: parseInt(args.data.id)
        },
        data: {
          title: args?.data?.title,
          synopsis: args?.data?.synopsis,
          originalAirDate: args?.data?.originalAirDate,
          universeId: args?.data?.universe?.id ? parseInt(args.data.universe.id) : oUniverse.id,
          ...getConnectAndDisconnect(oCharacters, args.data.characters, 'characters'),
          ...getConnectAndDisconnect(oDigimons, args.data.digimons, 'digimons'),
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
        animes: {
          connect: args?.data?.animes?.map(a => {
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
      }
    }),
    updateCharacter: async (parent, args, ctx, info) => {
      const currentCharacter = prisma.character.findUnique({
        where: {
          id: parseInt(args.data.id)
        }
      })
      const oAnimes = await currentCharacter.animes()
      const oUniverses = await currentCharacter.universes()
      const oEpisodes = await currentCharacter.episodes()
      const oMovies = await currentCharacter.movies()
      const oCrests = await currentCharacter.crests()
      const oDigimentals = await currentCharacter.digimentals()
      return prisma.anime.update({
        where: {
          id: parseInt(args.data.id)
        },
        data: {
          name: args?.data?.name,
          isDigiDestined: args?.data?.isDigiDestined,
          ...getConnectAndDisconnect(oAnimes, args.data.animes, 'animes'),
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
    // Digivice
    createDigivice: (parent, args, ctx, info) => prisma.digivice.create({
      data: {
        ...args.data,
        digiDestined: {
          connect: {
            id: parseInt(args?.data?.digiDestined?.id)
          }
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
      const oAnimes = await currentDigivice.animes()
      const oDigiDestined = await currentDigivice.digiDestined()
      const oMovies = await currentDigivice.movies()
      return prisma.anime.update({
        where: {
          id: parseInt(args.data.id)
        },
        data: {
          digiDestinedId: args?.data?.digiDestined?.id ? parseInt(args.data.digiDestined.id) : oDigiDestined.id,
          colors: args?.data?.colors,
          type: DigiviceType[args?.data?.type],
          ...getConnectAndDisconnect(oAnimes, args.data.animes, 'animes'),
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
        animes: {
          connect: args?.data?.animes?.map(a => {
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
      const oAnimes = await currentCrest.animes()
      const oDigiDestineds = await currentCrest.digiDestineds()
      const oDigimental = await currentCrest.digimental()
      const oMovies = await currentCrest.movies()
      return prisma.anime.update({
        where: {
          id: parseInt(args.data.id)
        },
        data: {
          name: args?.data?.name,
          description: args?.data?.description,
          digimentalId: args?.data?.digimental?.id ? parseInt(args.data.digimental.id) : oDigimental.id,
          ...getConnectAndDisconnect(oDigiDestineds, args.data.digiDestineds, 'digiDestineds'),
          ...getConnectAndDisconnect(oAnimes, args.data.animes, 'animes'),
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
        digimons: {
          connect: args?.data?.digimons?.map(d => {
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
      const oAnimes = await currentDigimental.animes()
      const oDigiDestineds = await currentDigimental.digiDestineds()
      const oDigimental = await currentDigimental.digimental()
      const oDigimons = await currentDigimental.digimons()
      const oMovies = await currentDigimental.movies()
      return prisma.anime.update({
        where: {
          id: parseInt(args.data.id)
        },
        data: {
          name: args?.data?.name,
          description: args?.data?.description,
          digimentalId: args?.data?.digimental?.id ? parseInt(args.data.digimental.id) : oDigimental.id,
          ...getConnectAndDisconnect(oDigiDestineds, args.data.digiDestineds, 'digiDestineds'),
          ...getConnectAndDisconnect(oDigimons, args.data.digimons, 'digimons'),
          ...getConnectAndDisconnect(oAnimes, args.data.animes, 'animes'),
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
    digimentals: (parent, args, ctx, info) => prisma.anime.findUnique({
      where: {
        id: parent.id
      }
    }).digimentals(),
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
    digiDestineds: (parent, args, ctx, info) => prisma.crest.findUnique({
      where: {
        id: parent.id
      }
    }).digiDestineds(),
    animes: (parent, args, ctx, info) => prisma.crest.findUnique({
      where: {
        id: parent.id
      }
    }).animes(),
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
    digimons: (parent, args, ctx, info) => prisma.digimental.findUnique({
      where: {
        id: parent.id
      }
    }).digimons(),
    animes: (parent, args, ctx, info) => prisma.digimental.findUnique({
      where: {
        id: parent.id
      }
    }).animes(),
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