"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "List",
    embedded: false
  },
  {
    name: "ListPlace",
    embedded: false
  },
  {
    name: "EmailSubscriber",
    embedded: false
  },
  {
    name: "Comment",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://us1.prisma.sh/tanner-gaucher/untrip-demo/dev`
});
exports.prisma = new exports.Prisma();
