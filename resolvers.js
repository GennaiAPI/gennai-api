import { authors, books } from './db.js'

import Prisma from '@prisma/client/index.js'
import { dateScalar } from './schema/customScalars.js';

const { PrismaClient } = Prisma

const prisma = new PrismaClient()

const resolvers = {
  Query: {
    getDigimons: () => prisma.digimon.findMany(),
    getDigimon: (parent, args, ctx, info) => prisma.digimon.findUnique({
      where: {
        name: args.name
      }
    }),
    getFamilies: () => prisma.family.findMany(),
    getFamily: (parent, args, ctx, info) => prisma.family.findUnique({
      where: {
        name: args.name
      }
    }),
    getRanks: () => prisma.rank.findMany(),
    getRank: (parent, args, ctx, info) => prisma.rank.findUnique({
      where: {
        name: args.name
      }
    }),
    getAttributes: () => prisma.attribute.findMany(),
    getAttribute: (parent, args, ctx, info) => prisma.attribute.findUnique({
      where: {
        name: args.name
      }
    }),
    getElements: () => prisma.element.findMany(),
    getElement: (parent, args, ctx, info) => prisma.element.findUnique({
      where: {
        name: args.name
      }
    })
  },
  Mutation: {
    newDigimon: (parent, args, ctx, info) =>
      prisma.digimon.create({
        data: {
          ...args.data,
          prior: {
            connectOrCreate: args?.data?.prior?.map(f => {
              return {
                where: {
                  name: f.name
                },
                create: {
                  ...f
                }
              }
            })
          },
          next: {
            connectOrCreate: args?.data?.next?.map(f => {
              return {
                where: {
                  name: f.name
                },
                create: {
                  ...f
                }
              }
            })
          },
          family: {
            connectOrCreate: args?.data?.family?.map(f => {
              return {
                where: {
                  name: f.name
                },
                create: {
                  ...f
                }
              }
            })
          }
        },
        include: {
          prior: true,
          next: true,
          family: true
        }
      }),
    addDigimonPriorNext: (parent, args, ctx, info) => prisma.digimon.update({
      where: {
        name: args.actualDigimon
      },
      data: {
        prior: {
          connect: args?.priorDigimons?.map(d => {
            return {
              name: d
            }
          })
        },
        next: {
          connect: args?.nextDigimons?.map(d => {
            return {
              name: d
            }
          })
        }
      },
      include: {
        prior: true,
        next: true,
        family: true
      }
    }),
    removeDigimonPriorNext: (parent, args, ctx, info) => prisma.digimon.update({
      where: {
        name: args.actualDigimon
      },
      data: {
        prior: {
          disconnect: args?.priorDigimons?.map(d => {
            return {
              name: d
            }
          })
        },
        next: {
          disconnect: args?.nextDigimons?.map(d => {
            return {
              name: d
            }
          })
        }
      },
      include: {
        prior: true,
        next: true,
        family: true
      }
    }),
    newFamily: (parent, args, ctx, info) => prisma.family.create({
      data: {
        ...args.data
      }
    }),
    newRank: (parent, args, ctx, info) => prisma.rank.create({
      data: {
        ...args.data
      }
    }),
    newAttribute: (parent, args, ctx, info) => prisma.attribute.create({
      data: {
        ...args.data,
      }
    }),
    newElement: (parent, args, ctx, info) => prisma.element.create({
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
    // rank: (parent, args, ctx, info) => prisma.rank.findUnique({
    //   where: {

    //   }
    // }),
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