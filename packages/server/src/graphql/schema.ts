import { GraphQLSchema } from 'graphql';
import fs from 'fs';
import { gql } from 'apollo-server-express';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { resolvers } from './resolvers';

const typeDefs = gql`
  ${fs.readFileSync(__dirname.concat('/schema.graphql'), 'utf8')}
`;
const schema: GraphQLSchema = makeExecutableSchema({ typeDefs, resolvers });

export { schema };
