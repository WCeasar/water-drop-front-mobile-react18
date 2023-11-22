/* eslint-disable  */
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { addMocksToSchema } from '@graphql-tools/mock';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { faker } from '@faker-js/faker/locale/zh_CN';

const typeDefs = `#graphql
   type UserType {
    """昵称"""
    name: String!

    """描述"""
    desc: String!

    """手机号码"""
    tel: String!

    """id"""
    id: String!

    """password"""
    password: String!

    """account"""
    account: String!
  }

  type Query {
    """使用 ID 查询用户"""
    find(id: String!): UserType!
  }

  type Mutation {
    """新增用户"""
    create(params: UserInputType!): Boolean!

    """修改用户"""
    update(id: String!, params: UserInputType!): Boolean!
  }

  input UserInputType {
    """昵称"""
    name: String!

    """描述"""
    desc: String!
  }
`;

const resolvers = {
  UserType: {
    name: () => faker.name.lastName() + faker.name.firstName(),
  },
};

const mocks = {
  Int: () => 6,
  Float: () => 22.1,
  String: () => 'HELLO',
};

const server = new ApolloServer({
  schema: addMocksToSchema({
    schema: makeExecutableSchema({ typeDefs, resolvers }),
    mocks,
    preserveResolvers: true,
  }),
});

await startStandaloneServer(server, { listen: { port: 8888 } });
