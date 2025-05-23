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
  bigint: { input: any; output: any; }
  jsonb: { input: any; output: any; }
  timestamp: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "application_link" */
export type Application_Link = {
  __typename?: 'application_link';
  application: Scalars['String']['output'];
  creation_time: Scalars['timestamp']['output'];
  expiration_time: Scalars['timestamp']['output'];
  /** An object relationship */
  oracle_request?: Maybe<Application_Link_Oracle_Request>;
  /** An object relationship */
  profile?: Maybe<Profile>;
  result?: Maybe<Scalars['jsonb']['output']>;
  state: Scalars['String']['output'];
  user_address: Scalars['String']['output'];
  username: Scalars['String']['output'];
};


/** columns and relationships of "application_link" */
export type Application_LinkResultArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** order by aggregate values of table "application_link" */
export type Application_Link_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Application_Link_Max_Order_By>;
  min?: InputMaybe<Application_Link_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "application_link". All fields are combined with a logical 'AND'. */
export type Application_Link_Bool_Exp = {
  _and?: InputMaybe<Array<Application_Link_Bool_Exp>>;
  _not?: InputMaybe<Application_Link_Bool_Exp>;
  _or?: InputMaybe<Array<Application_Link_Bool_Exp>>;
  application?: InputMaybe<String_Comparison_Exp>;
  creation_time?: InputMaybe<Timestamp_Comparison_Exp>;
  expiration_time?: InputMaybe<Timestamp_Comparison_Exp>;
  oracle_request?: InputMaybe<Application_Link_Oracle_Request_Bool_Exp>;
  profile?: InputMaybe<Profile_Bool_Exp>;
  result?: InputMaybe<Jsonb_Comparison_Exp>;
  state?: InputMaybe<String_Comparison_Exp>;
  user_address?: InputMaybe<String_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "application_link" */
export type Application_Link_Max_Order_By = {
  application?: InputMaybe<Order_By>;
  creation_time?: InputMaybe<Order_By>;
  expiration_time?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  user_address?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "application_link" */
export type Application_Link_Min_Order_By = {
  application?: InputMaybe<Order_By>;
  creation_time?: InputMaybe<Order_By>;
  expiration_time?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  user_address?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** columns and relationships of "application_link_oracle_request" */
export type Application_Link_Oracle_Request = {
  __typename?: 'application_link_oracle_request';
  call_data: Scalars['jsonb']['output'];
  client_id: Scalars['String']['output'];
  request_id: Scalars['bigint']['output'];
  script_id: Scalars['bigint']['output'];
};


/** columns and relationships of "application_link_oracle_request" */
export type Application_Link_Oracle_RequestCall_DataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to filter rows from the table "application_link_oracle_request". All fields are combined with a logical 'AND'. */
export type Application_Link_Oracle_Request_Bool_Exp = {
  _and?: InputMaybe<Array<Application_Link_Oracle_Request_Bool_Exp>>;
  _not?: InputMaybe<Application_Link_Oracle_Request_Bool_Exp>;
  _or?: InputMaybe<Array<Application_Link_Oracle_Request_Bool_Exp>>;
  call_data?: InputMaybe<Jsonb_Comparison_Exp>;
  client_id?: InputMaybe<String_Comparison_Exp>;
  request_id?: InputMaybe<Bigint_Comparison_Exp>;
  script_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** Ordering options when selecting data from "application_link_oracle_request". */
export type Application_Link_Oracle_Request_Order_By = {
  call_data?: InputMaybe<Order_By>;
  client_id?: InputMaybe<Order_By>;
  request_id?: InputMaybe<Order_By>;
  script_id?: InputMaybe<Order_By>;
};

/** select columns of table "application_link_oracle_request" */
export enum Application_Link_Oracle_Request_Select_Column {
  /** column name */
  CallData = 'call_data',
  /** column name */
  ClientId = 'client_id',
  /** column name */
  RequestId = 'request_id',
  /** column name */
  ScriptId = 'script_id'
}

/** Ordering options when selecting data from "application_link". */
export type Application_Link_Order_By = {
  application?: InputMaybe<Order_By>;
  creation_time?: InputMaybe<Order_By>;
  expiration_time?: InputMaybe<Order_By>;
  oracle_request?: InputMaybe<Application_Link_Oracle_Request_Order_By>;
  profile?: InputMaybe<Profile_Order_By>;
  result?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  user_address?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** columns and relationships of "application_link_score" */
export type Application_Link_Score = {
  __typename?: 'application_link_score';
  details: Scalars['jsonb']['output'];
  score: Scalars['Int']['output'];
  timestamp: Scalars['timestamp']['output'];
};


/** columns and relationships of "application_link_score" */
export type Application_Link_ScoreDetailsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to filter rows from the table "application_link_score". All fields are combined with a logical 'AND'. */
export type Application_Link_Score_Bool_Exp = {
  _and?: InputMaybe<Array<Application_Link_Score_Bool_Exp>>;
  _not?: InputMaybe<Application_Link_Score_Bool_Exp>;
  _or?: InputMaybe<Array<Application_Link_Score_Bool_Exp>>;
  details?: InputMaybe<Jsonb_Comparison_Exp>;
  score?: InputMaybe<Int_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** Ordering options when selecting data from "application_link_score". */
export type Application_Link_Score_Order_By = {
  details?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
};

/** select columns of table "application_link_score" */
export enum Application_Link_Score_Select_Column {
  /** column name */
  Details = 'details',
  /** column name */
  Score = 'score',
  /** column name */
  Timestamp = 'timestamp'
}

/** select columns of table "application_link" */
export enum Application_Link_Select_Column {
  /** column name */
  Application = 'application',
  /** column name */
  CreationTime = 'creation_time',
  /** column name */
  ExpirationTime = 'expiration_time',
  /** column name */
  Result = 'result',
  /** column name */
  State = 'state',
  /** column name */
  UserAddress = 'user_address',
  /** column name */
  Username = 'username'
}

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']['input']>;
  _gt?: InputMaybe<Scalars['bigint']['input']>;
  _gte?: InputMaybe<Scalars['bigint']['input']>;
  _in?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bigint']['input']>;
  _lte?: InputMaybe<Scalars['bigint']['input']>;
  _neq?: InputMaybe<Scalars['bigint']['input']>;
  _nin?: InputMaybe<Array<Scalars['bigint']['input']>>;
};

/** columns and relationships of "chain_link" */
export type Chain_Link = {
  __typename?: 'chain_link';
  /** An object relationship */
  chain_config: Chain_Link_Chain_Config;
  /** An array relationship */
  chain_link_proofs: Array<Chain_Link_Proof>;
  creation_time: Scalars['timestamp']['output'];
  external_address: Scalars['String']['output'];
  height: Scalars['bigint']['output'];
  /** An object relationship */
  profile?: Maybe<Profile>;
  /** An object relationship */
  proof?: Maybe<Chain_Link_Proof>;
  user_address: Scalars['String']['output'];
};


/** columns and relationships of "chain_link" */
export type Chain_LinkChain_Link_ProofsArgs = {
  distinct_on?: InputMaybe<Array<Chain_Link_Proof_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Chain_Link_Proof_Order_By>>;
  where?: InputMaybe<Chain_Link_Proof_Bool_Exp>;
};

/** order by aggregate values of table "chain_link" */
export type Chain_Link_Aggregate_Order_By = {
  avg?: InputMaybe<Chain_Link_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Chain_Link_Max_Order_By>;
  min?: InputMaybe<Chain_Link_Min_Order_By>;
  stddev?: InputMaybe<Chain_Link_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Chain_Link_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Chain_Link_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Chain_Link_Sum_Order_By>;
  var_pop?: InputMaybe<Chain_Link_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Chain_Link_Var_Samp_Order_By>;
  variance?: InputMaybe<Chain_Link_Variance_Order_By>;
};

/** order by avg() on columns of table "chain_link" */
export type Chain_Link_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "chain_link". All fields are combined with a logical 'AND'. */
export type Chain_Link_Bool_Exp = {
  _and?: InputMaybe<Array<Chain_Link_Bool_Exp>>;
  _not?: InputMaybe<Chain_Link_Bool_Exp>;
  _or?: InputMaybe<Array<Chain_Link_Bool_Exp>>;
  chain_config?: InputMaybe<Chain_Link_Chain_Config_Bool_Exp>;
  chain_link_proofs?: InputMaybe<Chain_Link_Proof_Bool_Exp>;
  creation_time?: InputMaybe<Timestamp_Comparison_Exp>;
  external_address?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  profile?: InputMaybe<Profile_Bool_Exp>;
  proof?: InputMaybe<Chain_Link_Proof_Bool_Exp>;
  user_address?: InputMaybe<String_Comparison_Exp>;
};

/** columns and relationships of "chain_link_chain_config" */
export type Chain_Link_Chain_Config = {
  __typename?: 'chain_link_chain_config';
  /** An array relationship */
  chain_links: Array<Chain_Link>;
  name: Scalars['String']['output'];
};


/** columns and relationships of "chain_link_chain_config" */
export type Chain_Link_Chain_ConfigChain_LinksArgs = {
  distinct_on?: InputMaybe<Array<Chain_Link_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Chain_Link_Order_By>>;
  where?: InputMaybe<Chain_Link_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "chain_link_chain_config". All fields are combined with a logical 'AND'. */
export type Chain_Link_Chain_Config_Bool_Exp = {
  _and?: InputMaybe<Array<Chain_Link_Chain_Config_Bool_Exp>>;
  _not?: InputMaybe<Chain_Link_Chain_Config_Bool_Exp>;
  _or?: InputMaybe<Array<Chain_Link_Chain_Config_Bool_Exp>>;
  chain_links?: InputMaybe<Chain_Link_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "chain_link_chain_config". */
export type Chain_Link_Chain_Config_Order_By = {
  chain_links_aggregate?: InputMaybe<Chain_Link_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
};

/** select columns of table "chain_link_chain_config" */
export enum Chain_Link_Chain_Config_Select_Column {
  /** column name */
  Name = 'name'
}

/** order by max() on columns of table "chain_link" */
export type Chain_Link_Max_Order_By = {
  creation_time?: InputMaybe<Order_By>;
  external_address?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  user_address?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "chain_link" */
export type Chain_Link_Min_Order_By = {
  creation_time?: InputMaybe<Order_By>;
  external_address?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  user_address?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "chain_link". */
export type Chain_Link_Order_By = {
  chain_config?: InputMaybe<Chain_Link_Chain_Config_Order_By>;
  chain_link_proofs_aggregate?: InputMaybe<Chain_Link_Proof_Aggregate_Order_By>;
  creation_time?: InputMaybe<Order_By>;
  external_address?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  profile?: InputMaybe<Profile_Order_By>;
  proof?: InputMaybe<Chain_Link_Proof_Order_By>;
  user_address?: InputMaybe<Order_By>;
};

/** columns and relationships of "chain_link_proof" */
export type Chain_Link_Proof = {
  __typename?: 'chain_link_proof';
  /** An object relationship */
  chain_link: Chain_Link;
  plain_text: Scalars['String']['output'];
  public_key: Scalars['jsonb']['output'];
  signature: Scalars['String']['output'];
};


/** columns and relationships of "chain_link_proof" */
export type Chain_Link_ProofPublic_KeyArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** order by aggregate values of table "chain_link_proof" */
export type Chain_Link_Proof_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Chain_Link_Proof_Max_Order_By>;
  min?: InputMaybe<Chain_Link_Proof_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "chain_link_proof". All fields are combined with a logical 'AND'. */
export type Chain_Link_Proof_Bool_Exp = {
  _and?: InputMaybe<Array<Chain_Link_Proof_Bool_Exp>>;
  _not?: InputMaybe<Chain_Link_Proof_Bool_Exp>;
  _or?: InputMaybe<Array<Chain_Link_Proof_Bool_Exp>>;
  chain_link?: InputMaybe<Chain_Link_Bool_Exp>;
  plain_text?: InputMaybe<String_Comparison_Exp>;
  public_key?: InputMaybe<Jsonb_Comparison_Exp>;
  signature?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "chain_link_proof" */
export type Chain_Link_Proof_Max_Order_By = {
  plain_text?: InputMaybe<Order_By>;
  signature?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "chain_link_proof" */
export type Chain_Link_Proof_Min_Order_By = {
  plain_text?: InputMaybe<Order_By>;
  signature?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "chain_link_proof". */
export type Chain_Link_Proof_Order_By = {
  chain_link?: InputMaybe<Chain_Link_Order_By>;
  plain_text?: InputMaybe<Order_By>;
  public_key?: InputMaybe<Order_By>;
  signature?: InputMaybe<Order_By>;
};

/** select columns of table "chain_link_proof" */
export enum Chain_Link_Proof_Select_Column {
  /** column name */
  PlainText = 'plain_text',
  /** column name */
  PublicKey = 'public_key',
  /** column name */
  Signature = 'signature'
}

/** select columns of table "chain_link" */
export enum Chain_Link_Select_Column {
  /** column name */
  CreationTime = 'creation_time',
  /** column name */
  ExternalAddress = 'external_address',
  /** column name */
  Height = 'height',
  /** column name */
  UserAddress = 'user_address'
}

/** order by stddev() on columns of table "chain_link" */
export type Chain_Link_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "chain_link" */
export type Chain_Link_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "chain_link" */
export type Chain_Link_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** order by sum() on columns of table "chain_link" */
export type Chain_Link_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "chain_link" */
export type Chain_Link_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "chain_link" */
export type Chain_Link_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "chain_link" */
export type Chain_Link_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** columns and relationships of "dtag_transfer_requests" */
export type Dtag_Transfer_Requests = {
  __typename?: 'dtag_transfer_requests';
  /** An object relationship */
  receiver?: Maybe<Profile>;
  receiver_address: Scalars['String']['output'];
  /** An object relationship */
  sender?: Maybe<Profile>;
  sender_address: Scalars['String']['output'];
};

/** order by aggregate values of table "dtag_transfer_requests" */
export type Dtag_Transfer_Requests_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Dtag_Transfer_Requests_Max_Order_By>;
  min?: InputMaybe<Dtag_Transfer_Requests_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "dtag_transfer_requests". All fields are combined with a logical 'AND'. */
export type Dtag_Transfer_Requests_Bool_Exp = {
  _and?: InputMaybe<Array<Dtag_Transfer_Requests_Bool_Exp>>;
  _not?: InputMaybe<Dtag_Transfer_Requests_Bool_Exp>;
  _or?: InputMaybe<Array<Dtag_Transfer_Requests_Bool_Exp>>;
  receiver?: InputMaybe<Profile_Bool_Exp>;
  receiver_address?: InputMaybe<String_Comparison_Exp>;
  sender?: InputMaybe<Profile_Bool_Exp>;
  sender_address?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "dtag_transfer_requests" */
export type Dtag_Transfer_Requests_Max_Order_By = {
  receiver_address?: InputMaybe<Order_By>;
  sender_address?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "dtag_transfer_requests" */
export type Dtag_Transfer_Requests_Min_Order_By = {
  receiver_address?: InputMaybe<Order_By>;
  sender_address?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "dtag_transfer_requests". */
export type Dtag_Transfer_Requests_Order_By = {
  receiver?: InputMaybe<Profile_Order_By>;
  receiver_address?: InputMaybe<Order_By>;
  sender?: InputMaybe<Profile_Order_By>;
  sender_address?: InputMaybe<Order_By>;
};

/** select columns of table "dtag_transfer_requests" */
export enum Dtag_Transfer_Requests_Select_Column {
  /** column name */
  ReceiverAddress = 'receiver_address',
  /** column name */
  SenderAddress = 'sender_address'
}

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']['input']>;
  _eq?: InputMaybe<Scalars['jsonb']['input']>;
  _gt?: InputMaybe<Scalars['jsonb']['input']>;
  _gte?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']['input']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['jsonb']['input']>;
  _lte?: InputMaybe<Scalars['jsonb']['input']>;
  _neq?: InputMaybe<Scalars['jsonb']['input']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']['input']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "profile" */
export type Profile = {
  __typename?: 'profile';
  address: Scalars['String']['output'];
  /** An array relationship */
  applications_links: Array<Application_Link>;
  bio: Scalars['String']['output'];
  /** An array relationship */
  chain_links: Array<Chain_Link>;
  /** An object relationship */
  counters?: Maybe<Profile_Counters>;
  cover_pic: Scalars['String']['output'];
  creation_time: Scalars['timestamp']['output'];
  dtag: Scalars['String']['output'];
  /** Computed field that tells whether the current Hasura user has blocked this profile */
  has_user_blocked?: Maybe<Scalars['Boolean']['output']>;
  /** An array relationship */
  incoming_dtag_transfer_requests: Array<Dtag_Transfer_Requests>;
  /** Computed field that tells whether the given profile has blocked the current Hasura user */
  is_user_blocked_by?: Maybe<Scalars['Boolean']['output']>;
  /** A computed field that tells whether the given Hasura user is followed by this profile */
  is_user_followed_by?: Maybe<Scalars['Boolean']['output']>;
  /** A computed field that tells whether the current Hasura user is following this profile */
  is_user_following?: Maybe<Scalars['Boolean']['output']>;
  nickname: Scalars['String']['output'];
  /** An array relationship */
  outgoing_dtag_transfer_requests: Array<Dtag_Transfer_Requests>;
  profile_pic: Scalars['String']['output'];
};


/** columns and relationships of "profile" */
export type ProfileApplications_LinksArgs = {
  distinct_on?: InputMaybe<Array<Application_Link_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Application_Link_Order_By>>;
  where?: InputMaybe<Application_Link_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfileChain_LinksArgs = {
  distinct_on?: InputMaybe<Array<Chain_Link_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Chain_Link_Order_By>>;
  where?: InputMaybe<Chain_Link_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfileIncoming_Dtag_Transfer_RequestsArgs = {
  distinct_on?: InputMaybe<Array<Dtag_Transfer_Requests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dtag_Transfer_Requests_Order_By>>;
  where?: InputMaybe<Dtag_Transfer_Requests_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfileOutgoing_Dtag_Transfer_RequestsArgs = {
  distinct_on?: InputMaybe<Array<Dtag_Transfer_Requests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dtag_Transfer_Requests_Order_By>>;
  where?: InputMaybe<Dtag_Transfer_Requests_Bool_Exp>;
};

/** aggregated selection of "profile" */
export type Profile_Aggregate = {
  __typename?: 'profile_aggregate';
  aggregate?: Maybe<Profile_Aggregate_Fields>;
  nodes: Array<Profile>;
};

/** aggregate fields of "profile" */
export type Profile_Aggregate_Fields = {
  __typename?: 'profile_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Profile_Max_Fields>;
  min?: Maybe<Profile_Min_Fields>;
};


/** aggregate fields of "profile" */
export type Profile_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Profile_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "profile". All fields are combined with a logical 'AND'. */
export type Profile_Bool_Exp = {
  _and?: InputMaybe<Array<Profile_Bool_Exp>>;
  _not?: InputMaybe<Profile_Bool_Exp>;
  _or?: InputMaybe<Array<Profile_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  applications_links?: InputMaybe<Application_Link_Bool_Exp>;
  bio?: InputMaybe<String_Comparison_Exp>;
  chain_links?: InputMaybe<Chain_Link_Bool_Exp>;
  counters?: InputMaybe<Profile_Counters_Bool_Exp>;
  cover_pic?: InputMaybe<String_Comparison_Exp>;
  creation_time?: InputMaybe<Timestamp_Comparison_Exp>;
  dtag?: InputMaybe<String_Comparison_Exp>;
  has_user_blocked?: InputMaybe<Boolean_Comparison_Exp>;
  incoming_dtag_transfer_requests?: InputMaybe<Dtag_Transfer_Requests_Bool_Exp>;
  is_user_blocked_by?: InputMaybe<Boolean_Comparison_Exp>;
  is_user_followed_by?: InputMaybe<Boolean_Comparison_Exp>;
  is_user_following?: InputMaybe<Boolean_Comparison_Exp>;
  nickname?: InputMaybe<String_Comparison_Exp>;
  outgoing_dtag_transfer_requests?: InputMaybe<Dtag_Transfer_Requests_Bool_Exp>;
  profile_pic?: InputMaybe<String_Comparison_Exp>;
};

/** columns and relationships of "profile_counters" */
export type Profile_Counters = {
  __typename?: 'profile_counters';
  application_links_count: Scalars['bigint']['output'];
  blocks_count: Scalars['bigint']['output'];
  chain_links_count: Scalars['bigint']['output'];
  profile_address: Scalars['String']['output'];
  relationships_count: Scalars['bigint']['output'];
};

/** Boolean expression to filter rows from the table "profile_counters". All fields are combined with a logical 'AND'. */
export type Profile_Counters_Bool_Exp = {
  _and?: InputMaybe<Array<Profile_Counters_Bool_Exp>>;
  _not?: InputMaybe<Profile_Counters_Bool_Exp>;
  _or?: InputMaybe<Array<Profile_Counters_Bool_Exp>>;
  application_links_count?: InputMaybe<Bigint_Comparison_Exp>;
  blocks_count?: InputMaybe<Bigint_Comparison_Exp>;
  chain_links_count?: InputMaybe<Bigint_Comparison_Exp>;
  profile_address?: InputMaybe<String_Comparison_Exp>;
  relationships_count?: InputMaybe<Bigint_Comparison_Exp>;
};

/** Ordering options when selecting data from "profile_counters". */
export type Profile_Counters_Order_By = {
  application_links_count?: InputMaybe<Order_By>;
  blocks_count?: InputMaybe<Order_By>;
  chain_links_count?: InputMaybe<Order_By>;
  profile_address?: InputMaybe<Order_By>;
  relationships_count?: InputMaybe<Order_By>;
};

/** select columns of table "profile_counters" */
export enum Profile_Counters_Select_Column {
  /** column name */
  ApplicationLinksCount = 'application_links_count',
  /** column name */
  BlocksCount = 'blocks_count',
  /** column name */
  ChainLinksCount = 'chain_links_count',
  /** column name */
  ProfileAddress = 'profile_address',
  /** column name */
  RelationshipsCount = 'relationships_count'
}

/** aggregate max on columns */
export type Profile_Max_Fields = {
  __typename?: 'profile_max_fields';
  address?: Maybe<Scalars['String']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  cover_pic?: Maybe<Scalars['String']['output']>;
  creation_time?: Maybe<Scalars['timestamp']['output']>;
  dtag?: Maybe<Scalars['String']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
  profile_pic?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Profile_Min_Fields = {
  __typename?: 'profile_min_fields';
  address?: Maybe<Scalars['String']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  cover_pic?: Maybe<Scalars['String']['output']>;
  creation_time?: Maybe<Scalars['timestamp']['output']>;
  dtag?: Maybe<Scalars['String']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
  profile_pic?: Maybe<Scalars['String']['output']>;
};

/** Ordering options when selecting data from "profile". */
export type Profile_Order_By = {
  address?: InputMaybe<Order_By>;
  applications_links_aggregate?: InputMaybe<Application_Link_Aggregate_Order_By>;
  bio?: InputMaybe<Order_By>;
  chain_links_aggregate?: InputMaybe<Chain_Link_Aggregate_Order_By>;
  counters?: InputMaybe<Profile_Counters_Order_By>;
  cover_pic?: InputMaybe<Order_By>;
  creation_time?: InputMaybe<Order_By>;
  dtag?: InputMaybe<Order_By>;
  has_user_blocked?: InputMaybe<Order_By>;
  incoming_dtag_transfer_requests_aggregate?: InputMaybe<Dtag_Transfer_Requests_Aggregate_Order_By>;
  is_user_blocked_by?: InputMaybe<Order_By>;
  is_user_followed_by?: InputMaybe<Order_By>;
  is_user_following?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  outgoing_dtag_transfer_requests_aggregate?: InputMaybe<Dtag_Transfer_Requests_Aggregate_Order_By>;
  profile_pic?: InputMaybe<Order_By>;
};

/** select columns of table "profile" */
export enum Profile_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Bio = 'bio',
  /** column name */
  CoverPic = 'cover_pic',
  /** column name */
  CreationTime = 'creation_time',
  /** column name */
  Dtag = 'dtag',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  ProfilePic = 'profile_pic'
}

/** columns and relationships of "profiles_params" */
export type Profiles_Params = {
  __typename?: 'profiles_params';
  params: Scalars['jsonb']['output'];
};


/** columns and relationships of "profiles_params" */
export type Profiles_ParamsParamsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to filter rows from the table "profiles_params". All fields are combined with a logical 'AND'. */
export type Profiles_Params_Bool_Exp = {
  _and?: InputMaybe<Array<Profiles_Params_Bool_Exp>>;
  _not?: InputMaybe<Profiles_Params_Bool_Exp>;
  _or?: InputMaybe<Array<Profiles_Params_Bool_Exp>>;
  params?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** Ordering options when selecting data from "profiles_params". */
export type Profiles_Params_Order_By = {
  params?: InputMaybe<Order_By>;
};

/** select columns of table "profiles_params" */
export enum Profiles_Params_Select_Column {
  /** column name */
  Params = 'params'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "application_link" */
  application_link: Array<Application_Link>;
  /** fetch data from the table: "application_link_oracle_request" */
  application_link_oracle_request: Array<Application_Link_Oracle_Request>;
  /** fetch data from the table: "application_link_score" */
  application_link_score: Array<Application_Link_Score>;
  /** fetch data from the table: "chain_link" */
  chain_link: Array<Chain_Link>;
  /** fetch data from the table: "chain_link_chain_config" */
  chain_link_chain_config: Array<Chain_Link_Chain_Config>;
  /** fetch data from the table: "chain_link_proof" */
  chain_link_proof: Array<Chain_Link_Proof>;
  /** fetch data from the table: "dtag_transfer_requests" */
  dtag_transfer_requests: Array<Dtag_Transfer_Requests>;
  /** fetch data from the table: "profile" */
  profile: Array<Profile>;
  /** fetch aggregated fields from the table: "profile" */
  profile_aggregate: Profile_Aggregate;
  /** fetch data from the table: "profile" using primary key columns */
  profile_by_pk?: Maybe<Profile>;
  /** fetch data from the table: "profile_counters" */
  profile_counters: Array<Profile_Counters>;
  /** fetch data from the table: "profiles_params" */
  profiles_params: Array<Profiles_Params>;
  /** fetch data from the table: "user_block" */
  user_block: Array<User_Block>;
  /** fetch data from the table: "user_relationship" */
  user_relationship: Array<User_Relationship>;
  /** fetch aggregated fields from the table: "user_relationship" */
  user_relationship_aggregate: User_Relationship_Aggregate;
};


export type Query_RootApplication_LinkArgs = {
  distinct_on?: InputMaybe<Array<Application_Link_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Application_Link_Order_By>>;
  where?: InputMaybe<Application_Link_Bool_Exp>;
};


export type Query_RootApplication_Link_Oracle_RequestArgs = {
  distinct_on?: InputMaybe<Array<Application_Link_Oracle_Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Application_Link_Oracle_Request_Order_By>>;
  where?: InputMaybe<Application_Link_Oracle_Request_Bool_Exp>;
};


export type Query_RootApplication_Link_ScoreArgs = {
  distinct_on?: InputMaybe<Array<Application_Link_Score_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Application_Link_Score_Order_By>>;
  where?: InputMaybe<Application_Link_Score_Bool_Exp>;
};


export type Query_RootChain_LinkArgs = {
  distinct_on?: InputMaybe<Array<Chain_Link_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Chain_Link_Order_By>>;
  where?: InputMaybe<Chain_Link_Bool_Exp>;
};


export type Query_RootChain_Link_Chain_ConfigArgs = {
  distinct_on?: InputMaybe<Array<Chain_Link_Chain_Config_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Chain_Link_Chain_Config_Order_By>>;
  where?: InputMaybe<Chain_Link_Chain_Config_Bool_Exp>;
};


export type Query_RootChain_Link_ProofArgs = {
  distinct_on?: InputMaybe<Array<Chain_Link_Proof_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Chain_Link_Proof_Order_By>>;
  where?: InputMaybe<Chain_Link_Proof_Bool_Exp>;
};


export type Query_RootDtag_Transfer_RequestsArgs = {
  distinct_on?: InputMaybe<Array<Dtag_Transfer_Requests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dtag_Transfer_Requests_Order_By>>;
  where?: InputMaybe<Dtag_Transfer_Requests_Bool_Exp>;
};


export type Query_RootProfileArgs = {
  distinct_on?: InputMaybe<Array<Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Profile_Order_By>>;
  where?: InputMaybe<Profile_Bool_Exp>;
};


export type Query_RootProfile_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Profile_Order_By>>;
  where?: InputMaybe<Profile_Bool_Exp>;
};


export type Query_RootProfile_By_PkArgs = {
  address: Scalars['String']['input'];
};


export type Query_RootProfile_CountersArgs = {
  distinct_on?: InputMaybe<Array<Profile_Counters_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Profile_Counters_Order_By>>;
  where?: InputMaybe<Profile_Counters_Bool_Exp>;
};


export type Query_RootProfiles_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Profiles_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Profiles_Params_Order_By>>;
  where?: InputMaybe<Profiles_Params_Bool_Exp>;
};


export type Query_RootUser_BlockArgs = {
  distinct_on?: InputMaybe<Array<User_Block_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Block_Order_By>>;
  where?: InputMaybe<User_Block_Bool_Exp>;
};


export type Query_RootUser_RelationshipArgs = {
  distinct_on?: InputMaybe<Array<User_Relationship_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Relationship_Order_By>>;
  where?: InputMaybe<User_Relationship_Bool_Exp>;
};


export type Query_RootUser_Relationship_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Relationship_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Relationship_Order_By>>;
  where?: InputMaybe<User_Relationship_Bool_Exp>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "application_link" */
  application_link: Array<Application_Link>;
  /** fetch data from the table: "application_link_oracle_request" */
  application_link_oracle_request: Array<Application_Link_Oracle_Request>;
  /** fetch data from the table: "application_link_score" */
  application_link_score: Array<Application_Link_Score>;
  /** fetch data from the table: "chain_link" */
  chain_link: Array<Chain_Link>;
  /** fetch data from the table: "chain_link_chain_config" */
  chain_link_chain_config: Array<Chain_Link_Chain_Config>;
  /** fetch data from the table: "chain_link_proof" */
  chain_link_proof: Array<Chain_Link_Proof>;
  /** fetch data from the table: "dtag_transfer_requests" */
  dtag_transfer_requests: Array<Dtag_Transfer_Requests>;
  /** fetch data from the table: "profile" */
  profile: Array<Profile>;
  /** fetch aggregated fields from the table: "profile" */
  profile_aggregate: Profile_Aggregate;
  /** fetch data from the table: "profile" using primary key columns */
  profile_by_pk?: Maybe<Profile>;
  /** fetch data from the table: "profile_counters" */
  profile_counters: Array<Profile_Counters>;
  /** fetch data from the table: "profiles_params" */
  profiles_params: Array<Profiles_Params>;
  /** fetch data from the table: "user_block" */
  user_block: Array<User_Block>;
  /** fetch data from the table: "user_relationship" */
  user_relationship: Array<User_Relationship>;
  /** fetch aggregated fields from the table: "user_relationship" */
  user_relationship_aggregate: User_Relationship_Aggregate;
};


export type Subscription_RootApplication_LinkArgs = {
  distinct_on?: InputMaybe<Array<Application_Link_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Application_Link_Order_By>>;
  where?: InputMaybe<Application_Link_Bool_Exp>;
};


export type Subscription_RootApplication_Link_Oracle_RequestArgs = {
  distinct_on?: InputMaybe<Array<Application_Link_Oracle_Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Application_Link_Oracle_Request_Order_By>>;
  where?: InputMaybe<Application_Link_Oracle_Request_Bool_Exp>;
};


export type Subscription_RootApplication_Link_ScoreArgs = {
  distinct_on?: InputMaybe<Array<Application_Link_Score_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Application_Link_Score_Order_By>>;
  where?: InputMaybe<Application_Link_Score_Bool_Exp>;
};


export type Subscription_RootChain_LinkArgs = {
  distinct_on?: InputMaybe<Array<Chain_Link_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Chain_Link_Order_By>>;
  where?: InputMaybe<Chain_Link_Bool_Exp>;
};


export type Subscription_RootChain_Link_Chain_ConfigArgs = {
  distinct_on?: InputMaybe<Array<Chain_Link_Chain_Config_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Chain_Link_Chain_Config_Order_By>>;
  where?: InputMaybe<Chain_Link_Chain_Config_Bool_Exp>;
};


export type Subscription_RootChain_Link_ProofArgs = {
  distinct_on?: InputMaybe<Array<Chain_Link_Proof_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Chain_Link_Proof_Order_By>>;
  where?: InputMaybe<Chain_Link_Proof_Bool_Exp>;
};


export type Subscription_RootDtag_Transfer_RequestsArgs = {
  distinct_on?: InputMaybe<Array<Dtag_Transfer_Requests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dtag_Transfer_Requests_Order_By>>;
  where?: InputMaybe<Dtag_Transfer_Requests_Bool_Exp>;
};


export type Subscription_RootProfileArgs = {
  distinct_on?: InputMaybe<Array<Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Profile_Order_By>>;
  where?: InputMaybe<Profile_Bool_Exp>;
};


export type Subscription_RootProfile_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Profile_Order_By>>;
  where?: InputMaybe<Profile_Bool_Exp>;
};


export type Subscription_RootProfile_By_PkArgs = {
  address: Scalars['String']['input'];
};


export type Subscription_RootProfile_CountersArgs = {
  distinct_on?: InputMaybe<Array<Profile_Counters_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Profile_Counters_Order_By>>;
  where?: InputMaybe<Profile_Counters_Bool_Exp>;
};


export type Subscription_RootProfiles_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Profiles_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Profiles_Params_Order_By>>;
  where?: InputMaybe<Profiles_Params_Bool_Exp>;
};


export type Subscription_RootUser_BlockArgs = {
  distinct_on?: InputMaybe<Array<User_Block_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Block_Order_By>>;
  where?: InputMaybe<User_Block_Bool_Exp>;
};


export type Subscription_RootUser_RelationshipArgs = {
  distinct_on?: InputMaybe<Array<User_Relationship_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Relationship_Order_By>>;
  where?: InputMaybe<User_Relationship_Bool_Exp>;
};


export type Subscription_RootUser_Relationship_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Relationship_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Relationship_Order_By>>;
  where?: InputMaybe<User_Relationship_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']['input']>;
  _gt?: InputMaybe<Scalars['timestamp']['input']>;
  _gte?: InputMaybe<Scalars['timestamp']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamp']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamp']['input']>;
  _lte?: InputMaybe<Scalars['timestamp']['input']>;
  _neq?: InputMaybe<Scalars['timestamp']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']['input']>>;
};

/** columns and relationships of "user_block" */
export type User_Block = {
  __typename?: 'user_block';
  /** An object relationship */
  blocked?: Maybe<Profile>;
  blocked_address?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  blocker?: Maybe<Profile>;
  blocker_address?: Maybe<Scalars['String']['output']>;
  reason?: Maybe<Scalars['String']['output']>;
  subspace_id: Scalars['bigint']['output'];
};

/** Boolean expression to filter rows from the table "user_block". All fields are combined with a logical 'AND'. */
export type User_Block_Bool_Exp = {
  _and?: InputMaybe<Array<User_Block_Bool_Exp>>;
  _not?: InputMaybe<User_Block_Bool_Exp>;
  _or?: InputMaybe<Array<User_Block_Bool_Exp>>;
  blocked?: InputMaybe<Profile_Bool_Exp>;
  blocked_address?: InputMaybe<String_Comparison_Exp>;
  blocker?: InputMaybe<Profile_Bool_Exp>;
  blocker_address?: InputMaybe<String_Comparison_Exp>;
  reason?: InputMaybe<String_Comparison_Exp>;
  subspace_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** Ordering options when selecting data from "user_block". */
export type User_Block_Order_By = {
  blocked?: InputMaybe<Profile_Order_By>;
  blocked_address?: InputMaybe<Order_By>;
  blocker?: InputMaybe<Profile_Order_By>;
  blocker_address?: InputMaybe<Order_By>;
  reason?: InputMaybe<Order_By>;
  subspace_id?: InputMaybe<Order_By>;
};

/** select columns of table "user_block" */
export enum User_Block_Select_Column {
  /** column name */
  BlockedAddress = 'blocked_address',
  /** column name */
  BlockerAddress = 'blocker_address',
  /** column name */
  Reason = 'reason',
  /** column name */
  SubspaceId = 'subspace_id'
}

/** columns and relationships of "user_relationship" */
export type User_Relationship = {
  __typename?: 'user_relationship';
  /** An object relationship */
  counterparty?: Maybe<Profile>;
  counterparty_address: Scalars['String']['output'];
  /** An object relationship */
  creator?: Maybe<Profile>;
  creator_address: Scalars['String']['output'];
  subspace_id: Scalars['bigint']['output'];
};

/** aggregated selection of "user_relationship" */
export type User_Relationship_Aggregate = {
  __typename?: 'user_relationship_aggregate';
  aggregate?: Maybe<User_Relationship_Aggregate_Fields>;
  nodes: Array<User_Relationship>;
};

/** aggregate fields of "user_relationship" */
export type User_Relationship_Aggregate_Fields = {
  __typename?: 'user_relationship_aggregate_fields';
  avg?: Maybe<User_Relationship_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<User_Relationship_Max_Fields>;
  min?: Maybe<User_Relationship_Min_Fields>;
  stddev?: Maybe<User_Relationship_Stddev_Fields>;
  stddev_pop?: Maybe<User_Relationship_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Relationship_Stddev_Samp_Fields>;
  sum?: Maybe<User_Relationship_Sum_Fields>;
  var_pop?: Maybe<User_Relationship_Var_Pop_Fields>;
  var_samp?: Maybe<User_Relationship_Var_Samp_Fields>;
  variance?: Maybe<User_Relationship_Variance_Fields>;
};


/** aggregate fields of "user_relationship" */
export type User_Relationship_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Relationship_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type User_Relationship_Avg_Fields = {
  __typename?: 'user_relationship_avg_fields';
  subspace_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "user_relationship". All fields are combined with a logical 'AND'. */
export type User_Relationship_Bool_Exp = {
  _and?: InputMaybe<Array<User_Relationship_Bool_Exp>>;
  _not?: InputMaybe<User_Relationship_Bool_Exp>;
  _or?: InputMaybe<Array<User_Relationship_Bool_Exp>>;
  counterparty?: InputMaybe<Profile_Bool_Exp>;
  counterparty_address?: InputMaybe<String_Comparison_Exp>;
  creator?: InputMaybe<Profile_Bool_Exp>;
  creator_address?: InputMaybe<String_Comparison_Exp>;
  subspace_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type User_Relationship_Max_Fields = {
  __typename?: 'user_relationship_max_fields';
  counterparty_address?: Maybe<Scalars['String']['output']>;
  creator_address?: Maybe<Scalars['String']['output']>;
  subspace_id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type User_Relationship_Min_Fields = {
  __typename?: 'user_relationship_min_fields';
  counterparty_address?: Maybe<Scalars['String']['output']>;
  creator_address?: Maybe<Scalars['String']['output']>;
  subspace_id?: Maybe<Scalars['bigint']['output']>;
};

/** Ordering options when selecting data from "user_relationship". */
export type User_Relationship_Order_By = {
  counterparty?: InputMaybe<Profile_Order_By>;
  counterparty_address?: InputMaybe<Order_By>;
  creator?: InputMaybe<Profile_Order_By>;
  creator_address?: InputMaybe<Order_By>;
  subspace_id?: InputMaybe<Order_By>;
};

/** select columns of table "user_relationship" */
export enum User_Relationship_Select_Column {
  /** column name */
  CounterpartyAddress = 'counterparty_address',
  /** column name */
  CreatorAddress = 'creator_address',
  /** column name */
  SubspaceId = 'subspace_id'
}

/** aggregate stddev on columns */
export type User_Relationship_Stddev_Fields = {
  __typename?: 'user_relationship_stddev_fields';
  subspace_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type User_Relationship_Stddev_Pop_Fields = {
  __typename?: 'user_relationship_stddev_pop_fields';
  subspace_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type User_Relationship_Stddev_Samp_Fields = {
  __typename?: 'user_relationship_stddev_samp_fields';
  subspace_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate sum on columns */
export type User_Relationship_Sum_Fields = {
  __typename?: 'user_relationship_sum_fields';
  subspace_id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type User_Relationship_Var_Pop_Fields = {
  __typename?: 'user_relationship_var_pop_fields';
  subspace_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type User_Relationship_Var_Samp_Fields = {
  __typename?: 'user_relationship_var_samp_fields';
  subspace_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type User_Relationship_Variance_Fields = {
  __typename?: 'user_relationship_variance_fields';
  subspace_id?: Maybe<Scalars['Float']['output']>;
};

export type DesmosProfileQueryVariables = Exact<{
  addresses?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;


export type DesmosProfileQuery = { profile: Array<{ __typename?: 'profile', address: string, bio: string, dtag: string, nickname: string, profilePic: string, coverPic: string, creationTime: any, chainLinks: Array<{ __typename?: 'chain_link', creationTime: any, externalAddress: string, chainConfig: { __typename?: 'chain_link_chain_config', name: string } }>, applicationLinks: Array<{ __typename?: 'application_link', username: string, application: string, creationTime: any }> }> };

export type DesmosProfileLinkQueryVariables = Exact<{
  addresses?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;


export type DesmosProfileLinkQuery = { profile: Array<{ __typename?: 'profile', address: string, bio: string, dtag: string, nickname: string, profilePic: string, coverPic: string, creationTime: any, chainLinks: Array<{ __typename?: 'chain_link', creationTime: any, externalAddress: string, chainConfig: { __typename?: 'chain_link_chain_config', name: string } }>, applicationLinks: Array<{ __typename?: 'application_link', username: string, application: string, creationTime: any }> }> };

export type DesmosProfileDtagQueryVariables = Exact<{
  dtag?: InputMaybe<Scalars['String']['input']>;
}>;


export type DesmosProfileDtagQuery = { profile: Array<{ __typename?: 'profile', address: string, bio: string, dtag: string, nickname: string, profilePic: string, coverPic: string, creationTime: any, chainLinks: Array<{ __typename?: 'chain_link', creationTime: any, externalAddress: string, chainConfig: { __typename?: 'chain_link_chain_config', name: string } }>, applicationLinks: Array<{ __typename?: 'application_link', username: string, application: string, creationTime: any }> }> };


export const DesmosProfileDocument = gql`
    query DesmosProfile($addresses: [String!]) {
  profile(where: {address: {_in: $addresses}}, limit: 20) {
    address
    bio
    dtag
    nickname
    profilePic: profile_pic
    coverPic: cover_pic
    chainLinks: chain_links {
      creationTime: creation_time
      externalAddress: external_address
      chainConfig: chain_config {
        name
      }
    }
    applicationLinks: applications_links(
      where: {state: {_eq: "APPLICATION_LINK_STATE_VERIFICATION_SUCCESS"}}
    ) {
      username
      creationTime: creation_time
      application
    }
    creationTime: creation_time
  }
}
    `;

/**
 * __useDesmosProfileQuery__
 *
 * To run a query within a React component, call `useDesmosProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useDesmosProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDesmosProfileQuery({
 *   variables: {
 *      addresses: // value for 'addresses'
 *   },
 * });
 */
export function useDesmosProfileQuery(baseOptions?: Apollo.QueryHookOptions<DesmosProfileQuery, DesmosProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DesmosProfileQuery, DesmosProfileQueryVariables>(DesmosProfileDocument, options);
      }
export function useDesmosProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DesmosProfileQuery, DesmosProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DesmosProfileQuery, DesmosProfileQueryVariables>(DesmosProfileDocument, options);
        }
export function useDesmosProfileSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<DesmosProfileQuery, DesmosProfileQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<DesmosProfileQuery, DesmosProfileQueryVariables>(DesmosProfileDocument, options);
        }
export type DesmosProfileQueryHookResult = ReturnType<typeof useDesmosProfileQuery>;
export type DesmosProfileLazyQueryHookResult = ReturnType<typeof useDesmosProfileLazyQuery>;
export type DesmosProfileSuspenseQueryHookResult = ReturnType<typeof useDesmosProfileSuspenseQuery>;
export type DesmosProfileQueryResult = Apollo.QueryResult<DesmosProfileQuery, DesmosProfileQueryVariables>;
export const DesmosProfileLinkDocument = gql`
    query DesmosProfileLink($addresses: [String!]) {
  profile(where: {chain_links: {external_address: {_in: $addresses}}}) {
    address
    bio
    dtag
    nickname
    profilePic: profile_pic
    coverPic: cover_pic
    chainLinks: chain_links {
      creationTime: creation_time
      externalAddress: external_address
      chainConfig: chain_config {
        name
      }
    }
    applicationLinks: applications_links(
      where: {state: {_eq: "APPLICATION_LINK_STATE_VERIFICATION_SUCCESS"}}
    ) {
      username
      creationTime: creation_time
      application
    }
    creationTime: creation_time
  }
}
    `;

/**
 * __useDesmosProfileLinkQuery__
 *
 * To run a query within a React component, call `useDesmosProfileLinkQuery` and pass it any options that fit your needs.
 * When your component renders, `useDesmosProfileLinkQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDesmosProfileLinkQuery({
 *   variables: {
 *      addresses: // value for 'addresses'
 *   },
 * });
 */
export function useDesmosProfileLinkQuery(baseOptions?: Apollo.QueryHookOptions<DesmosProfileLinkQuery, DesmosProfileLinkQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DesmosProfileLinkQuery, DesmosProfileLinkQueryVariables>(DesmosProfileLinkDocument, options);
      }
export function useDesmosProfileLinkLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DesmosProfileLinkQuery, DesmosProfileLinkQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DesmosProfileLinkQuery, DesmosProfileLinkQueryVariables>(DesmosProfileLinkDocument, options);
        }
export function useDesmosProfileLinkSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<DesmosProfileLinkQuery, DesmosProfileLinkQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<DesmosProfileLinkQuery, DesmosProfileLinkQueryVariables>(DesmosProfileLinkDocument, options);
        }
export type DesmosProfileLinkQueryHookResult = ReturnType<typeof useDesmosProfileLinkQuery>;
export type DesmosProfileLinkLazyQueryHookResult = ReturnType<typeof useDesmosProfileLinkLazyQuery>;
export type DesmosProfileLinkSuspenseQueryHookResult = ReturnType<typeof useDesmosProfileLinkSuspenseQuery>;
export type DesmosProfileLinkQueryResult = Apollo.QueryResult<DesmosProfileLinkQuery, DesmosProfileLinkQueryVariables>;
export const DesmosProfileDtagDocument = gql`
    query DesmosProfileDtag($dtag: String) {
  profile(where: {dtag: {_ilike: $dtag}}, limit: 20) {
    address
    bio
    dtag
    nickname
    profilePic: profile_pic
    coverPic: cover_pic
    chainLinks: chain_links {
      creationTime: creation_time
      externalAddress: external_address
      chainConfig: chain_config {
        name
      }
    }
    applicationLinks: applications_links(
      where: {state: {_eq: "APPLICATION_LINK_STATE_VERIFICATION_SUCCESS"}}
    ) {
      username
      creationTime: creation_time
      application
    }
    creationTime: creation_time
  }
}
    `;

/**
 * __useDesmosProfileDtagQuery__
 *
 * To run a query within a React component, call `useDesmosProfileDtagQuery` and pass it any options that fit your needs.
 * When your component renders, `useDesmosProfileDtagQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDesmosProfileDtagQuery({
 *   variables: {
 *      dtag: // value for 'dtag'
 *   },
 * });
 */
export function useDesmosProfileDtagQuery(baseOptions?: Apollo.QueryHookOptions<DesmosProfileDtagQuery, DesmosProfileDtagQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DesmosProfileDtagQuery, DesmosProfileDtagQueryVariables>(DesmosProfileDtagDocument, options);
      }
export function useDesmosProfileDtagLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DesmosProfileDtagQuery, DesmosProfileDtagQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DesmosProfileDtagQuery, DesmosProfileDtagQueryVariables>(DesmosProfileDtagDocument, options);
        }
export function useDesmosProfileDtagSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<DesmosProfileDtagQuery, DesmosProfileDtagQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<DesmosProfileDtagQuery, DesmosProfileDtagQueryVariables>(DesmosProfileDtagDocument, options);
        }
export type DesmosProfileDtagQueryHookResult = ReturnType<typeof useDesmosProfileDtagQuery>;
export type DesmosProfileDtagLazyQueryHookResult = ReturnType<typeof useDesmosProfileDtagLazyQuery>;
export type DesmosProfileDtagSuspenseQueryHookResult = ReturnType<typeof useDesmosProfileDtagSuspenseQuery>;
export type DesmosProfileDtagQueryResult = Apollo.QueryResult<DesmosProfileDtagQuery, DesmosProfileDtagQueryVariables>;