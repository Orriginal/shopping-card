import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Item = {
  __typename?: 'Item';
  id: Scalars['ID']['output'];
  pictureUri: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  stockAmount: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createItem: Item;
  deleteItem: Scalars['ID']['output'];
  updateItem: Item;
};


export type MutationCreateItemArgs = {
  pictureUri?: InputMaybe<Scalars['String']['input']>;
  price: Scalars['Float']['input'];
  stockAmount: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};


export type MutationDeleteItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateItemArgs = {
  id: Scalars['ID']['input'];
  pictureUri?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  stockAmount?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  getItem?: Maybe<Item>;
  getItems: Array<Item>;
};


export type QueryGetItemArgs = {
  id: Scalars['ID']['input'];
};

export type StoreItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type StoreItemsQuery = { __typename?: 'Query', getItems: Array<{ __typename?: 'Item', id: string, title: string, price: number, pictureUri: string, stockAmount: number }> };


export const StoreItemsDocument = gql`
    query StoreItems {
  getItems {
    id
    title
    price
    pictureUri
    stockAmount
  }
}
    `;

/**
 * __useStoreItemsQuery__
 *
 * To run a query within a React component, call `useStoreItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useStoreItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStoreItemsQuery({
 *   variables: {
 *   },
 * });
 */
export function useStoreItemsQuery(baseOptions?: Apollo.QueryHookOptions<StoreItemsQuery, StoreItemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StoreItemsQuery, StoreItemsQueryVariables>(StoreItemsDocument, options);
      }
export function useStoreItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StoreItemsQuery, StoreItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StoreItemsQuery, StoreItemsQueryVariables>(StoreItemsDocument, options);
        }
export function useStoreItemsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<StoreItemsQuery, StoreItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<StoreItemsQuery, StoreItemsQueryVariables>(StoreItemsDocument, options);
        }
export type StoreItemsQueryHookResult = ReturnType<typeof useStoreItemsQuery>;
export type StoreItemsLazyQueryHookResult = ReturnType<typeof useStoreItemsLazyQuery>;
export type StoreItemsSuspenseQueryHookResult = ReturnType<typeof useStoreItemsSuspenseQuery>;
export type StoreItemsQueryResult = Apollo.QueryResult<StoreItemsQuery, StoreItemsQueryVariables>;