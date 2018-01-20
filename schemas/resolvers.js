import rp from 'request-promise';
import { GraphQLError } from 'graphql/error';

const services = [{
    id: 1,
    name: 'soccer',
    address: 'ws://'
  }, {
    id: 2,
    name: 'baseball',
    address: 'gql://'
}];

export const resolvers = {

  Query: {
    services: (root, args, context) => {

      // 'context' is optional parameter passed to graphqlHTTP middleware.
      // According to express-graphql GitHub repository documentation (https://github.com/graphql/express-graphql#options)
      // this parameter is arbitrary value passed to resolvers.
      // The most important part of this invokation is following statement:
      // "If <i>context<i> is nor provided, the <i>request</i> object is passed as the context.
      //
      // So because we din't touched 'context' object on Express, we get it here as the request
      // parameter - named context
      return services;
    },
    service: (root, {name}) => {
        const serice = services.find(service => service.name == name);
        return serice;
    }
  }

}
