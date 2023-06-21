import { invariant } from '../../utilities/globals';
import * as React from 'react';
import type { ApolloClient } from '../../core';
import { getApolloContext } from '../context';

export function useApolloClient(
  override?: ApolloClient<object>,
): ApolloClient<object> {
  const context = React.useContext(getApolloContext());
  const client = override || context.client;
  invariant(
    !!client,
    'Could not find "client" in the context or passed in as an option. ' +
    'Wrap the root component in an <ApolloProvider>, or pass an ApolloClient ' +
    'instance in via options.',
  );

  return client;
}
