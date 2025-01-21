'use client';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

export function Providers({ children }: { children: any }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
