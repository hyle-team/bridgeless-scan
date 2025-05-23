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
  ActionCoin: { input: any; output: any; }
  ActionDelegation: { input: any; output: any; }
  ActionPagination: { input: any; output: any; }
  ActionRedelegation: { input: any; output: any; }
  ActionUnbondingDelegation: { input: any; output: any; }
  _coin: { input: any; output: any; }
  _dec_coin: { input: any; output: any; }
  _text: { input: any; output: any; }
  bigint: { input: any; output: any; }
  jsonb: { input: any; output: any; }
  numeric: { input: any; output: any; }
  smallint: { input: any; output: any; }
  timestamp: { input: any; output: any; }
};

export type ActionAddress = {
  __typename?: 'ActionAddress';
  address: Scalars['String']['output'];
};

export type ActionBalance = {
  __typename?: 'ActionBalance';
  coins?: Maybe<Array<Maybe<Scalars['ActionCoin']['output']>>>;
};

export type ActionDelegationResponse = {
  __typename?: 'ActionDelegationResponse';
  delegations?: Maybe<Array<Maybe<Scalars['ActionDelegation']['output']>>>;
  pagination?: Maybe<Scalars['ActionPagination']['output']>;
};

export type ActionDelegationReward = {
  __typename?: 'ActionDelegationReward';
  coins?: Maybe<Array<Maybe<Scalars['ActionCoin']['output']>>>;
  validator_address: Scalars['String']['output'];
};

export type ActionRedelegationResponse = {
  __typename?: 'ActionRedelegationResponse';
  pagination?: Maybe<Scalars['ActionPagination']['output']>;
  redelegations?: Maybe<Array<Maybe<Scalars['ActionRedelegation']['output']>>>;
};

export type ActionUnbondingDelegationResponse = {
  __typename?: 'ActionUnbondingDelegationResponse';
  pagination?: Maybe<Scalars['ActionPagination']['output']>;
  unbonding_delegations?: Maybe<Array<Maybe<Scalars['ActionUnbondingDelegation']['output']>>>;
};

export type ActionValidatorCommissionAmount = {
  __typename?: 'ActionValidatorCommissionAmount';
  coins?: Maybe<Array<Maybe<Scalars['ActionCoin']['output']>>>;
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

/** Boolean expression to compare columns of type "_coin". All fields are combined with logical 'AND'. */
export type _Coin_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['_coin']['input']>;
  _gt?: InputMaybe<Scalars['_coin']['input']>;
  _gte?: InputMaybe<Scalars['_coin']['input']>;
  _in?: InputMaybe<Array<Scalars['_coin']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['_coin']['input']>;
  _lte?: InputMaybe<Scalars['_coin']['input']>;
  _neq?: InputMaybe<Scalars['_coin']['input']>;
  _nin?: InputMaybe<Array<Scalars['_coin']['input']>>;
};

/** Boolean expression to compare columns of type "_dec_coin". All fields are combined with logical 'AND'. */
export type _Dec_Coin_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['_dec_coin']['input']>;
  _gt?: InputMaybe<Scalars['_dec_coin']['input']>;
  _gte?: InputMaybe<Scalars['_dec_coin']['input']>;
  _in?: InputMaybe<Array<Scalars['_dec_coin']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['_dec_coin']['input']>;
  _lte?: InputMaybe<Scalars['_dec_coin']['input']>;
  _neq?: InputMaybe<Scalars['_dec_coin']['input']>;
  _nin?: InputMaybe<Array<Scalars['_dec_coin']['input']>>;
};

/** Boolean expression to compare columns of type "_text". All fields are combined with logical 'AND'. */
export type _Text_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['_text']['input']>;
  _gt?: InputMaybe<Scalars['_text']['input']>;
  _gte?: InputMaybe<Scalars['_text']['input']>;
  _in?: InputMaybe<Array<Scalars['_text']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['_text']['input']>;
  _lte?: InputMaybe<Scalars['_text']['input']>;
  _neq?: InputMaybe<Scalars['_text']['input']>;
  _nin?: InputMaybe<Array<Scalars['_text']['input']>>;
};

/** columns and relationships of "account" */
export type Account = {
  __typename?: 'account';
  address: Scalars['String']['output'];
  /** An array relationship */
  feeGrantAllowancesByGranterAddress: Array<Fee_Grant_Allowance>;
  /** An array relationship */
  fee_grant_allowances: Array<Fee_Grant_Allowance>;
  /** An array relationship */
  multisig_proposal_votes: Array<Multisig_Proposal_Vote>;
  /** An aggregate relationship */
  multisig_proposal_votes_aggregate: Multisig_Proposal_Vote_Aggregate;
  /** An array relationship */
  multisig_proposals: Array<Multisig_Proposal>;
  /** An aggregate relationship */
  multisig_proposals_aggregate: Multisig_Proposal_Aggregate;
  /** An array relationship */
  proposal_deposits: Array<Proposal_Deposit>;
  /** An array relationship */
  proposal_votes: Array<Proposal_Vote>;
  /** An array relationship */
  proposals: Array<Proposal>;
  /** An aggregate relationship */
  proposals_aggregate: Proposal_Aggregate;
  /** An array relationship */
  validator_infos: Array<Validator_Info>;
  /** An object relationship */
  vesting_account?: Maybe<Vesting_Account>;
  /** An array relationship */
  vesting_accounts: Array<Vesting_Account>;
};


/** columns and relationships of "account" */
export type AccountFeeGrantAllowancesByGranterAddressArgs = {
  distinct_on?: InputMaybe<Array<Fee_Grant_Allowance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fee_Grant_Allowance_Order_By>>;
  where?: InputMaybe<Fee_Grant_Allowance_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountFee_Grant_AllowancesArgs = {
  distinct_on?: InputMaybe<Array<Fee_Grant_Allowance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fee_Grant_Allowance_Order_By>>;
  where?: InputMaybe<Fee_Grant_Allowance_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountMultisig_Proposal_VotesArgs = {
  distinct_on?: InputMaybe<Array<Multisig_Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Multisig_Proposal_Vote_Order_By>>;
  where?: InputMaybe<Multisig_Proposal_Vote_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountMultisig_Proposal_Votes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Multisig_Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Multisig_Proposal_Vote_Order_By>>;
  where?: InputMaybe<Multisig_Proposal_Vote_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountMultisig_ProposalsArgs = {
  distinct_on?: InputMaybe<Array<Multisig_Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Multisig_Proposal_Order_By>>;
  where?: InputMaybe<Multisig_Proposal_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountMultisig_Proposals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Multisig_Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Multisig_Proposal_Order_By>>;
  where?: InputMaybe<Multisig_Proposal_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountProposal_DepositsArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Deposit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Deposit_Order_By>>;
  where?: InputMaybe<Proposal_Deposit_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountProposal_VotesArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Vote_Order_By>>;
  where?: InputMaybe<Proposal_Vote_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountProposalsArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Order_By>>;
  where?: InputMaybe<Proposal_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountProposals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Order_By>>;
  where?: InputMaybe<Proposal_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountValidator_InfosArgs = {
  distinct_on?: InputMaybe<Array<Validator_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Info_Order_By>>;
  where?: InputMaybe<Validator_Info_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountVesting_AccountsArgs = {
  distinct_on?: InputMaybe<Array<Vesting_Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vesting_Account_Order_By>>;
  where?: InputMaybe<Vesting_Account_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "account". All fields are combined with a logical 'AND'. */
export type Account_Bool_Exp = {
  _and?: InputMaybe<Array<Account_Bool_Exp>>;
  _not?: InputMaybe<Account_Bool_Exp>;
  _or?: InputMaybe<Array<Account_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  feeGrantAllowancesByGranterAddress?: InputMaybe<Fee_Grant_Allowance_Bool_Exp>;
  fee_grant_allowances?: InputMaybe<Fee_Grant_Allowance_Bool_Exp>;
  multisig_proposal_votes?: InputMaybe<Multisig_Proposal_Vote_Bool_Exp>;
  multisig_proposal_votes_aggregate?: InputMaybe<Multisig_Proposal_Vote_Aggregate_Bool_Exp>;
  multisig_proposals?: InputMaybe<Multisig_Proposal_Bool_Exp>;
  multisig_proposals_aggregate?: InputMaybe<Multisig_Proposal_Aggregate_Bool_Exp>;
  proposal_deposits?: InputMaybe<Proposal_Deposit_Bool_Exp>;
  proposal_votes?: InputMaybe<Proposal_Vote_Bool_Exp>;
  proposals?: InputMaybe<Proposal_Bool_Exp>;
  proposals_aggregate?: InputMaybe<Proposal_Aggregate_Bool_Exp>;
  validator_infos?: InputMaybe<Validator_Info_Bool_Exp>;
  vesting_account?: InputMaybe<Vesting_Account_Bool_Exp>;
  vesting_accounts?: InputMaybe<Vesting_Account_Bool_Exp>;
};

/** Ordering options when selecting data from "account". */
export type Account_Order_By = {
  address?: InputMaybe<Order_By>;
  feeGrantAllowancesByGranterAddress_aggregate?: InputMaybe<Fee_Grant_Allowance_Aggregate_Order_By>;
  fee_grant_allowances_aggregate?: InputMaybe<Fee_Grant_Allowance_Aggregate_Order_By>;
  multisig_proposal_votes_aggregate?: InputMaybe<Multisig_Proposal_Vote_Aggregate_Order_By>;
  multisig_proposals_aggregate?: InputMaybe<Multisig_Proposal_Aggregate_Order_By>;
  proposal_deposits_aggregate?: InputMaybe<Proposal_Deposit_Aggregate_Order_By>;
  proposal_votes_aggregate?: InputMaybe<Proposal_Vote_Aggregate_Order_By>;
  proposals_aggregate?: InputMaybe<Proposal_Aggregate_Order_By>;
  validator_infos_aggregate?: InputMaybe<Validator_Info_Aggregate_Order_By>;
  vesting_account?: InputMaybe<Vesting_Account_Order_By>;
  vesting_accounts_aggregate?: InputMaybe<Vesting_Account_Aggregate_Order_By>;
};

/** select columns of table "account" */
export enum Account_Select_Column {
  /** column name */
  Address = 'address'
}

/** Streaming cursor of the table "account" */
export type Account_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Account_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Account_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "accumulator_params" */
export type Accumulator_Params = {
  __typename?: 'accumulator_params';
  params: Scalars['jsonb']['output'];
};


/** columns and relationships of "accumulator_params" */
export type Accumulator_ParamsParamsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to filter rows from the table "accumulator_params". All fields are combined with a logical 'AND'. */
export type Accumulator_Params_Bool_Exp = {
  _and?: InputMaybe<Array<Accumulator_Params_Bool_Exp>>;
  _not?: InputMaybe<Accumulator_Params_Bool_Exp>;
  _or?: InputMaybe<Array<Accumulator_Params_Bool_Exp>>;
  params?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** Ordering options when selecting data from "accumulator_params". */
export type Accumulator_Params_Order_By = {
  params?: InputMaybe<Order_By>;
};

/** select columns of table "accumulator_params" */
export enum Accumulator_Params_Select_Column {
  /** column name */
  Params = 'params'
}

/** Streaming cursor of the table "accumulator_params" */
export type Accumulator_Params_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Accumulator_Params_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Accumulator_Params_Stream_Cursor_Value_Input = {
  params?: InputMaybe<Scalars['jsonb']['input']>;
};

/** columns and relationships of "admins_vesting" */
export type Admins_Vesting = {
  __typename?: 'admins_vesting';
  address: Scalars['String']['output'];
  denom?: Maybe<Scalars['String']['output']>;
  last_vesting_time?: Maybe<Scalars['Int']['output']>;
  reward_per_period: Scalars['_coin']['output'];
  vesting_counter?: Maybe<Scalars['smallint']['output']>;
  vesting_period?: Maybe<Scalars['Int']['output']>;
};

/** Boolean expression to filter rows from the table "admins_vesting". All fields are combined with a logical 'AND'. */
export type Admins_Vesting_Bool_Exp = {
  _and?: InputMaybe<Array<Admins_Vesting_Bool_Exp>>;
  _not?: InputMaybe<Admins_Vesting_Bool_Exp>;
  _or?: InputMaybe<Array<Admins_Vesting_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  denom?: InputMaybe<String_Comparison_Exp>;
  last_vesting_time?: InputMaybe<Int_Comparison_Exp>;
  reward_per_period?: InputMaybe<_Coin_Comparison_Exp>;
  vesting_counter?: InputMaybe<Smallint_Comparison_Exp>;
  vesting_period?: InputMaybe<Int_Comparison_Exp>;
};

/** Ordering options when selecting data from "admins_vesting". */
export type Admins_Vesting_Order_By = {
  address?: InputMaybe<Order_By>;
  denom?: InputMaybe<Order_By>;
  last_vesting_time?: InputMaybe<Order_By>;
  reward_per_period?: InputMaybe<Order_By>;
  vesting_counter?: InputMaybe<Order_By>;
  vesting_period?: InputMaybe<Order_By>;
};

/** select columns of table "admins_vesting" */
export enum Admins_Vesting_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Denom = 'denom',
  /** column name */
  LastVestingTime = 'last_vesting_time',
  /** column name */
  RewardPerPeriod = 'reward_per_period',
  /** column name */
  VestingCounter = 'vesting_counter',
  /** column name */
  VestingPeriod = 'vesting_period'
}

/** Streaming cursor of the table "admins_vesting" */
export type Admins_Vesting_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Admins_Vesting_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Admins_Vesting_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  denom?: InputMaybe<Scalars['String']['input']>;
  last_vesting_time?: InputMaybe<Scalars['Int']['input']>;
  reward_per_period?: InputMaybe<Scalars['_coin']['input']>;
  vesting_counter?: InputMaybe<Scalars['smallint']['input']>;
  vesting_period?: InputMaybe<Scalars['Int']['input']>;
};

/** columns and relationships of "average_block_time_from_genesis" */
export type Average_Block_Time_From_Genesis = {
  __typename?: 'average_block_time_from_genesis';
  average_time: Scalars['numeric']['output'];
  height: Scalars['bigint']['output'];
};

/** Boolean expression to filter rows from the table "average_block_time_from_genesis". All fields are combined with a logical 'AND'. */
export type Average_Block_Time_From_Genesis_Bool_Exp = {
  _and?: InputMaybe<Array<Average_Block_Time_From_Genesis_Bool_Exp>>;
  _not?: InputMaybe<Average_Block_Time_From_Genesis_Bool_Exp>;
  _or?: InputMaybe<Array<Average_Block_Time_From_Genesis_Bool_Exp>>;
  average_time?: InputMaybe<Numeric_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
};

/** Ordering options when selecting data from "average_block_time_from_genesis". */
export type Average_Block_Time_From_Genesis_Order_By = {
  average_time?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** select columns of table "average_block_time_from_genesis" */
export enum Average_Block_Time_From_Genesis_Select_Column {
  /** column name */
  AverageTime = 'average_time',
  /** column name */
  Height = 'height'
}

/** Streaming cursor of the table "average_block_time_from_genesis" */
export type Average_Block_Time_From_Genesis_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Average_Block_Time_From_Genesis_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Average_Block_Time_From_Genesis_Stream_Cursor_Value_Input = {
  average_time?: InputMaybe<Scalars['numeric']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
};

/** columns and relationships of "average_block_time_per_day" */
export type Average_Block_Time_Per_Day = {
  __typename?: 'average_block_time_per_day';
  average_time: Scalars['numeric']['output'];
  height: Scalars['bigint']['output'];
};

/** Boolean expression to filter rows from the table "average_block_time_per_day". All fields are combined with a logical 'AND'. */
export type Average_Block_Time_Per_Day_Bool_Exp = {
  _and?: InputMaybe<Array<Average_Block_Time_Per_Day_Bool_Exp>>;
  _not?: InputMaybe<Average_Block_Time_Per_Day_Bool_Exp>;
  _or?: InputMaybe<Array<Average_Block_Time_Per_Day_Bool_Exp>>;
  average_time?: InputMaybe<Numeric_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
};

/** Ordering options when selecting data from "average_block_time_per_day". */
export type Average_Block_Time_Per_Day_Order_By = {
  average_time?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** select columns of table "average_block_time_per_day" */
export enum Average_Block_Time_Per_Day_Select_Column {
  /** column name */
  AverageTime = 'average_time',
  /** column name */
  Height = 'height'
}

/** Streaming cursor of the table "average_block_time_per_day" */
export type Average_Block_Time_Per_Day_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Average_Block_Time_Per_Day_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Average_Block_Time_Per_Day_Stream_Cursor_Value_Input = {
  average_time?: InputMaybe<Scalars['numeric']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
};

/** columns and relationships of "average_block_time_per_hour" */
export type Average_Block_Time_Per_Hour = {
  __typename?: 'average_block_time_per_hour';
  average_time: Scalars['numeric']['output'];
  height: Scalars['bigint']['output'];
};

/** Boolean expression to filter rows from the table "average_block_time_per_hour". All fields are combined with a logical 'AND'. */
export type Average_Block_Time_Per_Hour_Bool_Exp = {
  _and?: InputMaybe<Array<Average_Block_Time_Per_Hour_Bool_Exp>>;
  _not?: InputMaybe<Average_Block_Time_Per_Hour_Bool_Exp>;
  _or?: InputMaybe<Array<Average_Block_Time_Per_Hour_Bool_Exp>>;
  average_time?: InputMaybe<Numeric_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
};

/** Ordering options when selecting data from "average_block_time_per_hour". */
export type Average_Block_Time_Per_Hour_Order_By = {
  average_time?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** select columns of table "average_block_time_per_hour" */
export enum Average_Block_Time_Per_Hour_Select_Column {
  /** column name */
  AverageTime = 'average_time',
  /** column name */
  Height = 'height'
}

/** Streaming cursor of the table "average_block_time_per_hour" */
export type Average_Block_Time_Per_Hour_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Average_Block_Time_Per_Hour_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Average_Block_Time_Per_Hour_Stream_Cursor_Value_Input = {
  average_time?: InputMaybe<Scalars['numeric']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
};

/** columns and relationships of "average_block_time_per_minute" */
export type Average_Block_Time_Per_Minute = {
  __typename?: 'average_block_time_per_minute';
  average_time: Scalars['numeric']['output'];
  height: Scalars['bigint']['output'];
};

/** Boolean expression to filter rows from the table "average_block_time_per_minute". All fields are combined with a logical 'AND'. */
export type Average_Block_Time_Per_Minute_Bool_Exp = {
  _and?: InputMaybe<Array<Average_Block_Time_Per_Minute_Bool_Exp>>;
  _not?: InputMaybe<Average_Block_Time_Per_Minute_Bool_Exp>;
  _or?: InputMaybe<Array<Average_Block_Time_Per_Minute_Bool_Exp>>;
  average_time?: InputMaybe<Numeric_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
};

/** Ordering options when selecting data from "average_block_time_per_minute". */
export type Average_Block_Time_Per_Minute_Order_By = {
  average_time?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** select columns of table "average_block_time_per_minute" */
export enum Average_Block_Time_Per_Minute_Select_Column {
  /** column name */
  AverageTime = 'average_time',
  /** column name */
  Height = 'height'
}

/** Streaming cursor of the table "average_block_time_per_minute" */
export type Average_Block_Time_Per_Minute_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Average_Block_Time_Per_Minute_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Average_Block_Time_Per_Minute_Stream_Cursor_Value_Input = {
  average_time?: InputMaybe<Scalars['numeric']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
};

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

/** columns and relationships of "block" */
export type Block = {
  __typename?: 'block';
  hash: Scalars['String']['output'];
  height: Scalars['bigint']['output'];
  num_txs?: Maybe<Scalars['Int']['output']>;
  /** An array relationship */
  pre_commits: Array<Pre_Commit>;
  /** An aggregate relationship */
  pre_commits_aggregate: Pre_Commit_Aggregate;
  /** An array relationship */
  proposal_deposits: Array<Proposal_Deposit>;
  /** An array relationship */
  proposal_votes: Array<Proposal_Vote>;
  proposer_address?: Maybe<Scalars['String']['output']>;
  timestamp: Scalars['timestamp']['output'];
  total_gas?: Maybe<Scalars['bigint']['output']>;
  /** An array relationship */
  transactions: Array<Transaction>;
  /** An object relationship */
  validator?: Maybe<Validator>;
  /** An array relationship */
  validator_voting_powers: Array<Validator_Voting_Power>;
  /** An aggregate relationship */
  validator_voting_powers_aggregate: Validator_Voting_Power_Aggregate;
};


/** columns and relationships of "block" */
export type BlockPre_CommitsArgs = {
  distinct_on?: InputMaybe<Array<Pre_Commit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pre_Commit_Order_By>>;
  where?: InputMaybe<Pre_Commit_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockPre_Commits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pre_Commit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pre_Commit_Order_By>>;
  where?: InputMaybe<Pre_Commit_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockProposal_DepositsArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Deposit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Deposit_Order_By>>;
  where?: InputMaybe<Proposal_Deposit_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockProposal_VotesArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Vote_Order_By>>;
  where?: InputMaybe<Proposal_Vote_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockTransactionsArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockValidator_Voting_PowersArgs = {
  distinct_on?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Voting_Power_Order_By>>;
  where?: InputMaybe<Validator_Voting_Power_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockValidator_Voting_Powers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Voting_Power_Order_By>>;
  where?: InputMaybe<Validator_Voting_Power_Bool_Exp>;
};

/** order by aggregate values of table "block" */
export type Block_Aggregate_Order_By = {
  avg?: InputMaybe<Block_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Block_Max_Order_By>;
  min?: InputMaybe<Block_Min_Order_By>;
  stddev?: InputMaybe<Block_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Block_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Block_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Block_Sum_Order_By>;
  var_pop?: InputMaybe<Block_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Block_Var_Samp_Order_By>;
  variance?: InputMaybe<Block_Variance_Order_By>;
};

/** order by avg() on columns of table "block" */
export type Block_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "block". All fields are combined with a logical 'AND'. */
export type Block_Bool_Exp = {
  _and?: InputMaybe<Array<Block_Bool_Exp>>;
  _not?: InputMaybe<Block_Bool_Exp>;
  _or?: InputMaybe<Array<Block_Bool_Exp>>;
  hash?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  num_txs?: InputMaybe<Int_Comparison_Exp>;
  pre_commits?: InputMaybe<Pre_Commit_Bool_Exp>;
  pre_commits_aggregate?: InputMaybe<Pre_Commit_Aggregate_Bool_Exp>;
  proposal_deposits?: InputMaybe<Proposal_Deposit_Bool_Exp>;
  proposal_votes?: InputMaybe<Proposal_Vote_Bool_Exp>;
  proposer_address?: InputMaybe<String_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamp_Comparison_Exp>;
  total_gas?: InputMaybe<Bigint_Comparison_Exp>;
  transactions?: InputMaybe<Transaction_Bool_Exp>;
  validator?: InputMaybe<Validator_Bool_Exp>;
  validator_voting_powers?: InputMaybe<Validator_Voting_Power_Bool_Exp>;
  validator_voting_powers_aggregate?: InputMaybe<Validator_Voting_Power_Aggregate_Bool_Exp>;
};

/** order by max() on columns of table "block" */
export type Block_Max_Order_By = {
  hash?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  proposer_address?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "block" */
export type Block_Min_Order_By = {
  hash?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  proposer_address?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "block". */
export type Block_Order_By = {
  hash?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  pre_commits_aggregate?: InputMaybe<Pre_Commit_Aggregate_Order_By>;
  proposal_deposits_aggregate?: InputMaybe<Proposal_Deposit_Aggregate_Order_By>;
  proposal_votes_aggregate?: InputMaybe<Proposal_Vote_Aggregate_Order_By>;
  proposer_address?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
  transactions_aggregate?: InputMaybe<Transaction_Aggregate_Order_By>;
  validator?: InputMaybe<Validator_Order_By>;
  validator_voting_powers_aggregate?: InputMaybe<Validator_Voting_Power_Aggregate_Order_By>;
};

/** select columns of table "block" */
export enum Block_Select_Column {
  /** column name */
  Hash = 'hash',
  /** column name */
  Height = 'height',
  /** column name */
  NumTxs = 'num_txs',
  /** column name */
  ProposerAddress = 'proposer_address',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TotalGas = 'total_gas'
}

/** order by stddev() on columns of table "block" */
export type Block_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "block" */
export type Block_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "block" */
export type Block_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "block" */
export type Block_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Block_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Block_Stream_Cursor_Value_Input = {
  hash?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  num_txs?: InputMaybe<Scalars['Int']['input']>;
  proposer_address?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  total_gas?: InputMaybe<Scalars['bigint']['input']>;
};

/** order by sum() on columns of table "block" */
export type Block_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "block" */
export type Block_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "block" */
export type Block_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "block" */
export type Block_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** columns and relationships of "bridge_chains" */
export type Bridge_Chains = {
  __typename?: 'bridge_chains';
  bridge_address?: Maybe<Scalars['String']['output']>;
  chain_type?: Maybe<Scalars['smallint']['output']>;
  id: Scalars['String']['output'];
  operator?: Maybe<Scalars['String']['output']>;
};

/** Boolean expression to filter rows from the table "bridge_chains". All fields are combined with a logical 'AND'. */
export type Bridge_Chains_Bool_Exp = {
  _and?: InputMaybe<Array<Bridge_Chains_Bool_Exp>>;
  _not?: InputMaybe<Bridge_Chains_Bool_Exp>;
  _or?: InputMaybe<Array<Bridge_Chains_Bool_Exp>>;
  bridge_address?: InputMaybe<String_Comparison_Exp>;
  chain_type?: InputMaybe<Smallint_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  operator?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "bridge_chains". */
export type Bridge_Chains_Order_By = {
  bridge_address?: InputMaybe<Order_By>;
  chain_type?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  operator?: InputMaybe<Order_By>;
};

/** select columns of table "bridge_chains" */
export enum Bridge_Chains_Select_Column {
  /** column name */
  BridgeAddress = 'bridge_address',
  /** column name */
  ChainType = 'chain_type',
  /** column name */
  Id = 'id',
  /** column name */
  Operator = 'operator'
}

/** Streaming cursor of the table "bridge_chains" */
export type Bridge_Chains_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Bridge_Chains_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Bridge_Chains_Stream_Cursor_Value_Input = {
  bridge_address?: InputMaybe<Scalars['String']['input']>;
  chain_type?: InputMaybe<Scalars['smallint']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  operator?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "bridge_params" */
export type Bridge_Params = {
  __typename?: 'bridge_params';
  id: Scalars['Int']['output'];
  module_admin: Scalars['String']['output'];
  parties?: Maybe<Scalars['_text']['output']>;
  tss_threshold?: Maybe<Scalars['Int']['output']>;
};

/** Boolean expression to filter rows from the table "bridge_params". All fields are combined with a logical 'AND'. */
export type Bridge_Params_Bool_Exp = {
  _and?: InputMaybe<Array<Bridge_Params_Bool_Exp>>;
  _not?: InputMaybe<Bridge_Params_Bool_Exp>;
  _or?: InputMaybe<Array<Bridge_Params_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  module_admin?: InputMaybe<String_Comparison_Exp>;
  parties?: InputMaybe<_Text_Comparison_Exp>;
  tss_threshold?: InputMaybe<Int_Comparison_Exp>;
};

/** Ordering options when selecting data from "bridge_params". */
export type Bridge_Params_Order_By = {
  id?: InputMaybe<Order_By>;
  module_admin?: InputMaybe<Order_By>;
  parties?: InputMaybe<Order_By>;
  tss_threshold?: InputMaybe<Order_By>;
};

/** select columns of table "bridge_params" */
export enum Bridge_Params_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ModuleAdmin = 'module_admin',
  /** column name */
  Parties = 'parties',
  /** column name */
  TssThreshold = 'tss_threshold'
}

/** Streaming cursor of the table "bridge_params" */
export type Bridge_Params_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Bridge_Params_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Bridge_Params_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  module_admin?: InputMaybe<Scalars['String']['input']>;
  parties?: InputMaybe<Scalars['_text']['input']>;
  tss_threshold?: InputMaybe<Scalars['Int']['input']>;
};

/** columns and relationships of "bridge_token_metadata" */
export type Bridge_Token_Metadata = {
  __typename?: 'bridge_token_metadata';
  /** An array relationship */
  bridge_tokens: Array<Bridge_Tokens>;
  name: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
  token_id: Scalars['String']['output'];
  uri?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "bridge_token_metadata" */
export type Bridge_Token_MetadataBridge_TokensArgs = {
  distinct_on?: InputMaybe<Array<Bridge_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bridge_Tokens_Order_By>>;
  where?: InputMaybe<Bridge_Tokens_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "bridge_token_metadata". All fields are combined with a logical 'AND'. */
export type Bridge_Token_Metadata_Bool_Exp = {
  _and?: InputMaybe<Array<Bridge_Token_Metadata_Bool_Exp>>;
  _not?: InputMaybe<Bridge_Token_Metadata_Bool_Exp>;
  _or?: InputMaybe<Array<Bridge_Token_Metadata_Bool_Exp>>;
  bridge_tokens?: InputMaybe<Bridge_Tokens_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  symbol?: InputMaybe<String_Comparison_Exp>;
  token_id?: InputMaybe<String_Comparison_Exp>;
  uri?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "bridge_token_metadata". */
export type Bridge_Token_Metadata_Order_By = {
  bridge_tokens_aggregate?: InputMaybe<Bridge_Tokens_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  symbol?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
  uri?: InputMaybe<Order_By>;
};

/** select columns of table "bridge_token_metadata" */
export enum Bridge_Token_Metadata_Select_Column {
  /** column name */
  Name = 'name',
  /** column name */
  Symbol = 'symbol',
  /** column name */
  TokenId = 'token_id',
  /** column name */
  Uri = 'uri'
}

/** Streaming cursor of the table "bridge_token_metadata" */
export type Bridge_Token_Metadata_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Bridge_Token_Metadata_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Bridge_Token_Metadata_Stream_Cursor_Value_Input = {
  name?: InputMaybe<Scalars['String']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  token_id?: InputMaybe<Scalars['String']['input']>;
  uri?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "bridge_tokens" */
export type Bridge_Tokens = {
  __typename?: 'bridge_tokens';
  /** An object relationship */
  bridge_token_metadatum: Bridge_Token_Metadata;
  /** An object relationship */
  bridge_tokens_info: Bridge_Tokens_Info;
  commission_rate: Scalars['String']['output'];
  metadata_id: Scalars['String']['output'];
  tokens_info_id: Scalars['bigint']['output'];
};

/** order by aggregate values of table "bridge_tokens" */
export type Bridge_Tokens_Aggregate_Order_By = {
  avg?: InputMaybe<Bridge_Tokens_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Bridge_Tokens_Max_Order_By>;
  min?: InputMaybe<Bridge_Tokens_Min_Order_By>;
  stddev?: InputMaybe<Bridge_Tokens_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Bridge_Tokens_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Bridge_Tokens_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Bridge_Tokens_Sum_Order_By>;
  var_pop?: InputMaybe<Bridge_Tokens_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Bridge_Tokens_Var_Samp_Order_By>;
  variance?: InputMaybe<Bridge_Tokens_Variance_Order_By>;
};

/** order by avg() on columns of table "bridge_tokens" */
export type Bridge_Tokens_Avg_Order_By = {
  tokens_info_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "bridge_tokens". All fields are combined with a logical 'AND'. */
export type Bridge_Tokens_Bool_Exp = {
  _and?: InputMaybe<Array<Bridge_Tokens_Bool_Exp>>;
  _not?: InputMaybe<Bridge_Tokens_Bool_Exp>;
  _or?: InputMaybe<Array<Bridge_Tokens_Bool_Exp>>;
  bridge_token_metadatum?: InputMaybe<Bridge_Token_Metadata_Bool_Exp>;
  bridge_tokens_info?: InputMaybe<Bridge_Tokens_Info_Bool_Exp>;
  commission_rate?: InputMaybe<String_Comparison_Exp>;
  metadata_id?: InputMaybe<String_Comparison_Exp>;
  tokens_info_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** columns and relationships of "bridge_tokens_info" */
export type Bridge_Tokens_Info = {
  __typename?: 'bridge_tokens_info';
  address: Scalars['String']['output'];
  /** An array relationship */
  bridge_tokens: Array<Bridge_Tokens>;
  chain_id: Scalars['String']['output'];
  decimals: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  is_wrapped: Scalars['Boolean']['output'];
  token_id: Scalars['Int']['output'];
};


/** columns and relationships of "bridge_tokens_info" */
export type Bridge_Tokens_InfoBridge_TokensArgs = {
  distinct_on?: InputMaybe<Array<Bridge_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bridge_Tokens_Order_By>>;
  where?: InputMaybe<Bridge_Tokens_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "bridge_tokens_info". All fields are combined with a logical 'AND'. */
export type Bridge_Tokens_Info_Bool_Exp = {
  _and?: InputMaybe<Array<Bridge_Tokens_Info_Bool_Exp>>;
  _not?: InputMaybe<Bridge_Tokens_Info_Bool_Exp>;
  _or?: InputMaybe<Array<Bridge_Tokens_Info_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  bridge_tokens?: InputMaybe<Bridge_Tokens_Bool_Exp>;
  chain_id?: InputMaybe<String_Comparison_Exp>;
  decimals?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  is_wrapped?: InputMaybe<Boolean_Comparison_Exp>;
  token_id?: InputMaybe<Int_Comparison_Exp>;
};

/** Ordering options when selecting data from "bridge_tokens_info". */
export type Bridge_Tokens_Info_Order_By = {
  address?: InputMaybe<Order_By>;
  bridge_tokens_aggregate?: InputMaybe<Bridge_Tokens_Aggregate_Order_By>;
  chain_id?: InputMaybe<Order_By>;
  decimals?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_wrapped?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** select columns of table "bridge_tokens_info" */
export enum Bridge_Tokens_Info_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  ChainId = 'chain_id',
  /** column name */
  Decimals = 'decimals',
  /** column name */
  Id = 'id',
  /** column name */
  IsWrapped = 'is_wrapped',
  /** column name */
  TokenId = 'token_id'
}

/** Streaming cursor of the table "bridge_tokens_info" */
export type Bridge_Tokens_Info_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Bridge_Tokens_Info_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Bridge_Tokens_Info_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  chain_id?: InputMaybe<Scalars['String']['input']>;
  decimals?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  is_wrapped?: InputMaybe<Scalars['Boolean']['input']>;
  token_id?: InputMaybe<Scalars['Int']['input']>;
};

/** order by max() on columns of table "bridge_tokens" */
export type Bridge_Tokens_Max_Order_By = {
  commission_rate?: InputMaybe<Order_By>;
  metadata_id?: InputMaybe<Order_By>;
  tokens_info_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "bridge_tokens" */
export type Bridge_Tokens_Min_Order_By = {
  commission_rate?: InputMaybe<Order_By>;
  metadata_id?: InputMaybe<Order_By>;
  tokens_info_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "bridge_tokens". */
export type Bridge_Tokens_Order_By = {
  bridge_token_metadatum?: InputMaybe<Bridge_Token_Metadata_Order_By>;
  bridge_tokens_info?: InputMaybe<Bridge_Tokens_Info_Order_By>;
  commission_rate?: InputMaybe<Order_By>;
  metadata_id?: InputMaybe<Order_By>;
  tokens_info_id?: InputMaybe<Order_By>;
};

/** select columns of table "bridge_tokens" */
export enum Bridge_Tokens_Select_Column {
  /** column name */
  CommissionRate = 'commission_rate',
  /** column name */
  MetadataId = 'metadata_id',
  /** column name */
  TokensInfoId = 'tokens_info_id'
}

/** order by stddev() on columns of table "bridge_tokens" */
export type Bridge_Tokens_Stddev_Order_By = {
  tokens_info_id?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "bridge_tokens" */
export type Bridge_Tokens_Stddev_Pop_Order_By = {
  tokens_info_id?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "bridge_tokens" */
export type Bridge_Tokens_Stddev_Samp_Order_By = {
  tokens_info_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "bridge_tokens" */
export type Bridge_Tokens_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Bridge_Tokens_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Bridge_Tokens_Stream_Cursor_Value_Input = {
  commission_rate?: InputMaybe<Scalars['String']['input']>;
  metadata_id?: InputMaybe<Scalars['String']['input']>;
  tokens_info_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** order by sum() on columns of table "bridge_tokens" */
export type Bridge_Tokens_Sum_Order_By = {
  tokens_info_id?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "bridge_tokens" */
export type Bridge_Tokens_Var_Pop_Order_By = {
  tokens_info_id?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "bridge_tokens" */
export type Bridge_Tokens_Var_Samp_Order_By = {
  tokens_info_id?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "bridge_tokens" */
export type Bridge_Tokens_Variance_Order_By = {
  tokens_info_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "bridge_transaction_submissions" */
export type Bridge_Transaction_Submissions = {
  __typename?: 'bridge_transaction_submissions';
  submitters?: Maybe<Scalars['_text']['output']>;
  tx_hash: Scalars['String']['output'];
};

/** Boolean expression to filter rows from the table "bridge_transaction_submissions". All fields are combined with a logical 'AND'. */
export type Bridge_Transaction_Submissions_Bool_Exp = {
  _and?: InputMaybe<Array<Bridge_Transaction_Submissions_Bool_Exp>>;
  _not?: InputMaybe<Bridge_Transaction_Submissions_Bool_Exp>;
  _or?: InputMaybe<Array<Bridge_Transaction_Submissions_Bool_Exp>>;
  submitters?: InputMaybe<_Text_Comparison_Exp>;
  tx_hash?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "bridge_transaction_submissions". */
export type Bridge_Transaction_Submissions_Order_By = {
  submitters?: InputMaybe<Order_By>;
  tx_hash?: InputMaybe<Order_By>;
};

/** select columns of table "bridge_transaction_submissions" */
export enum Bridge_Transaction_Submissions_Select_Column {
  /** column name */
  Submitters = 'submitters',
  /** column name */
  TxHash = 'tx_hash'
}

/** Streaming cursor of the table "bridge_transaction_submissions" */
export type Bridge_Transaction_Submissions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Bridge_Transaction_Submissions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Bridge_Transaction_Submissions_Stream_Cursor_Value_Input = {
  submitters?: InputMaybe<Scalars['_text']['input']>;
  tx_hash?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "bridge_transactions" */
export type Bridge_Transactions = {
  __typename?: 'bridge_transactions';
  commission_amount: Scalars['bigint']['output'];
  deposit_amount: Scalars['bigint']['output'];
  deposit_block: Scalars['bigint']['output'];
  deposit_chain_id: Scalars['String']['output'];
  deposit_token: Scalars['String']['output'];
  deposit_tx_hash: Scalars['String']['output'];
  deposit_tx_index: Scalars['bigint']['output'];
  depositor: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  is_wrapped: Scalars['Boolean']['output'];
  receiver: Scalars['String']['output'];
  signature?: Maybe<Scalars['String']['output']>;
  tx_data: Scalars['String']['output'];
  withdrawal_amount: Scalars['bigint']['output'];
  withdrawal_chain_id?: Maybe<Scalars['String']['output']>;
  withdrawal_token?: Maybe<Scalars['String']['output']>;
  withdrawal_tx_hash?: Maybe<Scalars['String']['output']>;
};

/** Boolean expression to filter rows from the table "bridge_transactions". All fields are combined with a logical 'AND'. */
export type Bridge_Transactions_Bool_Exp = {
  _and?: InputMaybe<Array<Bridge_Transactions_Bool_Exp>>;
  _not?: InputMaybe<Bridge_Transactions_Bool_Exp>;
  _or?: InputMaybe<Array<Bridge_Transactions_Bool_Exp>>;
  commission_amount?: InputMaybe<Bigint_Comparison_Exp>;
  deposit_amount?: InputMaybe<Bigint_Comparison_Exp>;
  deposit_block?: InputMaybe<Bigint_Comparison_Exp>;
  deposit_chain_id?: InputMaybe<String_Comparison_Exp>;
  deposit_token?: InputMaybe<String_Comparison_Exp>;
  deposit_tx_hash?: InputMaybe<String_Comparison_Exp>;
  deposit_tx_index?: InputMaybe<Bigint_Comparison_Exp>;
  depositor?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  is_wrapped?: InputMaybe<Boolean_Comparison_Exp>;
  receiver?: InputMaybe<String_Comparison_Exp>;
  signature?: InputMaybe<String_Comparison_Exp>;
  tx_data?: InputMaybe<String_Comparison_Exp>;
  withdrawal_amount?: InputMaybe<Bigint_Comparison_Exp>;
  withdrawal_chain_id?: InputMaybe<String_Comparison_Exp>;
  withdrawal_token?: InputMaybe<String_Comparison_Exp>;
  withdrawal_tx_hash?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "bridge_transactions". */
export type Bridge_Transactions_Order_By = {
  commission_amount?: InputMaybe<Order_By>;
  deposit_amount?: InputMaybe<Order_By>;
  deposit_block?: InputMaybe<Order_By>;
  deposit_chain_id?: InputMaybe<Order_By>;
  deposit_token?: InputMaybe<Order_By>;
  deposit_tx_hash?: InputMaybe<Order_By>;
  deposit_tx_index?: InputMaybe<Order_By>;
  depositor?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_wrapped?: InputMaybe<Order_By>;
  receiver?: InputMaybe<Order_By>;
  signature?: InputMaybe<Order_By>;
  tx_data?: InputMaybe<Order_By>;
  withdrawal_amount?: InputMaybe<Order_By>;
  withdrawal_chain_id?: InputMaybe<Order_By>;
  withdrawal_token?: InputMaybe<Order_By>;
  withdrawal_tx_hash?: InputMaybe<Order_By>;
};

/** select columns of table "bridge_transactions" */
export enum Bridge_Transactions_Select_Column {
  /** column name */
  CommissionAmount = 'commission_amount',
  /** column name */
  DepositAmount = 'deposit_amount',
  /** column name */
  DepositBlock = 'deposit_block',
  /** column name */
  DepositChainId = 'deposit_chain_id',
  /** column name */
  DepositToken = 'deposit_token',
  /** column name */
  DepositTxHash = 'deposit_tx_hash',
  /** column name */
  DepositTxIndex = 'deposit_tx_index',
  /** column name */
  Depositor = 'depositor',
  /** column name */
  Id = 'id',
  /** column name */
  IsWrapped = 'is_wrapped',
  /** column name */
  Receiver = 'receiver',
  /** column name */
  Signature = 'signature',
  /** column name */
  TxData = 'tx_data',
  /** column name */
  WithdrawalAmount = 'withdrawal_amount',
  /** column name */
  WithdrawalChainId = 'withdrawal_chain_id',
  /** column name */
  WithdrawalToken = 'withdrawal_token',
  /** column name */
  WithdrawalTxHash = 'withdrawal_tx_hash'
}

/** Streaming cursor of the table "bridge_transactions" */
export type Bridge_Transactions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Bridge_Transactions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Bridge_Transactions_Stream_Cursor_Value_Input = {
  commission_amount?: InputMaybe<Scalars['bigint']['input']>;
  deposit_amount?: InputMaybe<Scalars['bigint']['input']>;
  deposit_block?: InputMaybe<Scalars['bigint']['input']>;
  deposit_chain_id?: InputMaybe<Scalars['String']['input']>;
  deposit_token?: InputMaybe<Scalars['String']['input']>;
  deposit_tx_hash?: InputMaybe<Scalars['String']['input']>;
  deposit_tx_index?: InputMaybe<Scalars['bigint']['input']>;
  depositor?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  is_wrapped?: InputMaybe<Scalars['Boolean']['input']>;
  receiver?: InputMaybe<Scalars['String']['input']>;
  signature?: InputMaybe<Scalars['String']['input']>;
  tx_data?: InputMaybe<Scalars['String']['input']>;
  withdrawal_amount?: InputMaybe<Scalars['bigint']['input']>;
  withdrawal_chain_id?: InputMaybe<Scalars['String']['input']>;
  withdrawal_token?: InputMaybe<Scalars['String']['input']>;
  withdrawal_tx_hash?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "community_pool" */
export type Community_Pool = {
  __typename?: 'community_pool';
  coins: Scalars['_dec_coin']['output'];
  height: Scalars['bigint']['output'];
};

/** Boolean expression to filter rows from the table "community_pool". All fields are combined with a logical 'AND'. */
export type Community_Pool_Bool_Exp = {
  _and?: InputMaybe<Array<Community_Pool_Bool_Exp>>;
  _not?: InputMaybe<Community_Pool_Bool_Exp>;
  _or?: InputMaybe<Array<Community_Pool_Bool_Exp>>;
  coins?: InputMaybe<_Dec_Coin_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
};

/** Ordering options when selecting data from "community_pool". */
export type Community_Pool_Order_By = {
  coins?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** select columns of table "community_pool" */
export enum Community_Pool_Select_Column {
  /** column name */
  Coins = 'coins',
  /** column name */
  Height = 'height'
}

/** Streaming cursor of the table "community_pool" */
export type Community_Pool_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Community_Pool_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Community_Pool_Stream_Cursor_Value_Input = {
  coins?: InputMaybe<Scalars['_dec_coin']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "distribution_params" */
export type Distribution_Params = {
  __typename?: 'distribution_params';
  height: Scalars['bigint']['output'];
  params: Scalars['jsonb']['output'];
};


/** columns and relationships of "distribution_params" */
export type Distribution_ParamsParamsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to filter rows from the table "distribution_params". All fields are combined with a logical 'AND'. */
export type Distribution_Params_Bool_Exp = {
  _and?: InputMaybe<Array<Distribution_Params_Bool_Exp>>;
  _not?: InputMaybe<Distribution_Params_Bool_Exp>;
  _or?: InputMaybe<Array<Distribution_Params_Bool_Exp>>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  params?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** Ordering options when selecting data from "distribution_params". */
export type Distribution_Params_Order_By = {
  height?: InputMaybe<Order_By>;
  params?: InputMaybe<Order_By>;
};

/** select columns of table "distribution_params" */
export enum Distribution_Params_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Params = 'params'
}

/** Streaming cursor of the table "distribution_params" */
export type Distribution_Params_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Distribution_Params_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Distribution_Params_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
  params?: InputMaybe<Scalars['jsonb']['input']>;
};

/** columns and relationships of "double_sign_evidence" */
export type Double_Sign_Evidence = {
  __typename?: 'double_sign_evidence';
  /** An object relationship */
  doubleSignVoteByVoteAId: Double_Sign_Vote;
  /** An object relationship */
  double_sign_vote: Double_Sign_Vote;
  height: Scalars['bigint']['output'];
  vote_a_id: Scalars['bigint']['output'];
  vote_b_id: Scalars['bigint']['output'];
};

/** order by aggregate values of table "double_sign_evidence" */
export type Double_Sign_Evidence_Aggregate_Order_By = {
  avg?: InputMaybe<Double_Sign_Evidence_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Double_Sign_Evidence_Max_Order_By>;
  min?: InputMaybe<Double_Sign_Evidence_Min_Order_By>;
  stddev?: InputMaybe<Double_Sign_Evidence_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Double_Sign_Evidence_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Double_Sign_Evidence_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Double_Sign_Evidence_Sum_Order_By>;
  var_pop?: InputMaybe<Double_Sign_Evidence_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Double_Sign_Evidence_Var_Samp_Order_By>;
  variance?: InputMaybe<Double_Sign_Evidence_Variance_Order_By>;
};

/** order by avg() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  vote_a_id?: InputMaybe<Order_By>;
  vote_b_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "double_sign_evidence". All fields are combined with a logical 'AND'. */
export type Double_Sign_Evidence_Bool_Exp = {
  _and?: InputMaybe<Array<Double_Sign_Evidence_Bool_Exp>>;
  _not?: InputMaybe<Double_Sign_Evidence_Bool_Exp>;
  _or?: InputMaybe<Array<Double_Sign_Evidence_Bool_Exp>>;
  doubleSignVoteByVoteAId?: InputMaybe<Double_Sign_Vote_Bool_Exp>;
  double_sign_vote?: InputMaybe<Double_Sign_Vote_Bool_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  vote_a_id?: InputMaybe<Bigint_Comparison_Exp>;
  vote_b_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** order by max() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Max_Order_By = {
  height?: InputMaybe<Order_By>;
  vote_a_id?: InputMaybe<Order_By>;
  vote_b_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Min_Order_By = {
  height?: InputMaybe<Order_By>;
  vote_a_id?: InputMaybe<Order_By>;
  vote_b_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "double_sign_evidence". */
export type Double_Sign_Evidence_Order_By = {
  doubleSignVoteByVoteAId?: InputMaybe<Double_Sign_Vote_Order_By>;
  double_sign_vote?: InputMaybe<Double_Sign_Vote_Order_By>;
  height?: InputMaybe<Order_By>;
  vote_a_id?: InputMaybe<Order_By>;
  vote_b_id?: InputMaybe<Order_By>;
};

/** select columns of table "double_sign_evidence" */
export enum Double_Sign_Evidence_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  VoteAId = 'vote_a_id',
  /** column name */
  VoteBId = 'vote_b_id'
}

/** order by stddev() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  vote_a_id?: InputMaybe<Order_By>;
  vote_b_id?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  vote_a_id?: InputMaybe<Order_By>;
  vote_b_id?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  vote_a_id?: InputMaybe<Order_By>;
  vote_b_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "double_sign_evidence" */
export type Double_Sign_Evidence_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Double_Sign_Evidence_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Double_Sign_Evidence_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
  vote_a_id?: InputMaybe<Scalars['bigint']['input']>;
  vote_b_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** order by sum() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  vote_a_id?: InputMaybe<Order_By>;
  vote_b_id?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  vote_a_id?: InputMaybe<Order_By>;
  vote_b_id?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  vote_a_id?: InputMaybe<Order_By>;
  vote_b_id?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  vote_a_id?: InputMaybe<Order_By>;
  vote_b_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "double_sign_vote" */
export type Double_Sign_Vote = {
  __typename?: 'double_sign_vote';
  block_id: Scalars['String']['output'];
  /** An array relationship */
  doubleSignEvidencesByVoteBId: Array<Double_Sign_Evidence>;
  /** An array relationship */
  double_sign_evidences: Array<Double_Sign_Evidence>;
  height: Scalars['bigint']['output'];
  round: Scalars['Int']['output'];
  signature: Scalars['String']['output'];
  type: Scalars['smallint']['output'];
  /** An object relationship */
  validator: Validator;
  validator_address: Scalars['String']['output'];
  validator_index: Scalars['Int']['output'];
};


/** columns and relationships of "double_sign_vote" */
export type Double_Sign_VoteDoubleSignEvidencesByVoteBIdArgs = {
  distinct_on?: InputMaybe<Array<Double_Sign_Evidence_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Double_Sign_Evidence_Order_By>>;
  where?: InputMaybe<Double_Sign_Evidence_Bool_Exp>;
};


/** columns and relationships of "double_sign_vote" */
export type Double_Sign_VoteDouble_Sign_EvidencesArgs = {
  distinct_on?: InputMaybe<Array<Double_Sign_Evidence_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Double_Sign_Evidence_Order_By>>;
  where?: InputMaybe<Double_Sign_Evidence_Bool_Exp>;
};

/** order by aggregate values of table "double_sign_vote" */
export type Double_Sign_Vote_Aggregate_Order_By = {
  avg?: InputMaybe<Double_Sign_Vote_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Double_Sign_Vote_Max_Order_By>;
  min?: InputMaybe<Double_Sign_Vote_Min_Order_By>;
  stddev?: InputMaybe<Double_Sign_Vote_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Double_Sign_Vote_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Double_Sign_Vote_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Double_Sign_Vote_Sum_Order_By>;
  var_pop?: InputMaybe<Double_Sign_Vote_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Double_Sign_Vote_Var_Samp_Order_By>;
  variance?: InputMaybe<Double_Sign_Vote_Variance_Order_By>;
};

/** order by avg() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  round?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  validator_index?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "double_sign_vote". All fields are combined with a logical 'AND'. */
export type Double_Sign_Vote_Bool_Exp = {
  _and?: InputMaybe<Array<Double_Sign_Vote_Bool_Exp>>;
  _not?: InputMaybe<Double_Sign_Vote_Bool_Exp>;
  _or?: InputMaybe<Array<Double_Sign_Vote_Bool_Exp>>;
  block_id?: InputMaybe<String_Comparison_Exp>;
  doubleSignEvidencesByVoteBId?: InputMaybe<Double_Sign_Evidence_Bool_Exp>;
  double_sign_evidences?: InputMaybe<Double_Sign_Evidence_Bool_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  round?: InputMaybe<Int_Comparison_Exp>;
  signature?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<Smallint_Comparison_Exp>;
  validator?: InputMaybe<Validator_Bool_Exp>;
  validator_address?: InputMaybe<String_Comparison_Exp>;
  validator_index?: InputMaybe<Int_Comparison_Exp>;
};

/** order by max() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Max_Order_By = {
  block_id?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  round?: InputMaybe<Order_By>;
  signature?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  validator_index?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Min_Order_By = {
  block_id?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  round?: InputMaybe<Order_By>;
  signature?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  validator_index?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "double_sign_vote". */
export type Double_Sign_Vote_Order_By = {
  block_id?: InputMaybe<Order_By>;
  doubleSignEvidencesByVoteBId_aggregate?: InputMaybe<Double_Sign_Evidence_Aggregate_Order_By>;
  double_sign_evidences_aggregate?: InputMaybe<Double_Sign_Evidence_Aggregate_Order_By>;
  height?: InputMaybe<Order_By>;
  round?: InputMaybe<Order_By>;
  signature?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  validator?: InputMaybe<Validator_Order_By>;
  validator_address?: InputMaybe<Order_By>;
  validator_index?: InputMaybe<Order_By>;
};

/** select columns of table "double_sign_vote" */
export enum Double_Sign_Vote_Select_Column {
  /** column name */
  BlockId = 'block_id',
  /** column name */
  Height = 'height',
  /** column name */
  Round = 'round',
  /** column name */
  Signature = 'signature',
  /** column name */
  Type = 'type',
  /** column name */
  ValidatorAddress = 'validator_address',
  /** column name */
  ValidatorIndex = 'validator_index'
}

/** order by stddev() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  round?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  validator_index?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  round?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  validator_index?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  round?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  validator_index?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "double_sign_vote" */
export type Double_Sign_Vote_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Double_Sign_Vote_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Double_Sign_Vote_Stream_Cursor_Value_Input = {
  block_id?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  round?: InputMaybe<Scalars['Int']['input']>;
  signature?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['smallint']['input']>;
  validator_address?: InputMaybe<Scalars['String']['input']>;
  validator_index?: InputMaybe<Scalars['Int']['input']>;
};

/** order by sum() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  round?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  validator_index?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  round?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  validator_index?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  round?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  validator_index?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  round?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  validator_index?: InputMaybe<Order_By>;
};

/** columns and relationships of "fee_grant_allowance" */
export type Fee_Grant_Allowance = {
  __typename?: 'fee_grant_allowance';
  allowance: Scalars['jsonb']['output'];
  /** An object relationship */
  grantee: Account;
  grantee_address: Scalars['String']['output'];
  /** An object relationship */
  granter: Account;
  granter_address: Scalars['String']['output'];
  height: Scalars['bigint']['output'];
};


/** columns and relationships of "fee_grant_allowance" */
export type Fee_Grant_AllowanceAllowanceArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** order by aggregate values of table "fee_grant_allowance" */
export type Fee_Grant_Allowance_Aggregate_Order_By = {
  avg?: InputMaybe<Fee_Grant_Allowance_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Fee_Grant_Allowance_Max_Order_By>;
  min?: InputMaybe<Fee_Grant_Allowance_Min_Order_By>;
  stddev?: InputMaybe<Fee_Grant_Allowance_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Fee_Grant_Allowance_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Fee_Grant_Allowance_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Fee_Grant_Allowance_Sum_Order_By>;
  var_pop?: InputMaybe<Fee_Grant_Allowance_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Fee_Grant_Allowance_Var_Samp_Order_By>;
  variance?: InputMaybe<Fee_Grant_Allowance_Variance_Order_By>;
};

/** order by avg() on columns of table "fee_grant_allowance" */
export type Fee_Grant_Allowance_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "fee_grant_allowance". All fields are combined with a logical 'AND'. */
export type Fee_Grant_Allowance_Bool_Exp = {
  _and?: InputMaybe<Array<Fee_Grant_Allowance_Bool_Exp>>;
  _not?: InputMaybe<Fee_Grant_Allowance_Bool_Exp>;
  _or?: InputMaybe<Array<Fee_Grant_Allowance_Bool_Exp>>;
  allowance?: InputMaybe<Jsonb_Comparison_Exp>;
  grantee?: InputMaybe<Account_Bool_Exp>;
  grantee_address?: InputMaybe<String_Comparison_Exp>;
  granter?: InputMaybe<Account_Bool_Exp>;
  granter_address?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
};

/** order by max() on columns of table "fee_grant_allowance" */
export type Fee_Grant_Allowance_Max_Order_By = {
  grantee_address?: InputMaybe<Order_By>;
  granter_address?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "fee_grant_allowance" */
export type Fee_Grant_Allowance_Min_Order_By = {
  grantee_address?: InputMaybe<Order_By>;
  granter_address?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "fee_grant_allowance". */
export type Fee_Grant_Allowance_Order_By = {
  allowance?: InputMaybe<Order_By>;
  grantee?: InputMaybe<Account_Order_By>;
  grantee_address?: InputMaybe<Order_By>;
  granter?: InputMaybe<Account_Order_By>;
  granter_address?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** select columns of table "fee_grant_allowance" */
export enum Fee_Grant_Allowance_Select_Column {
  /** column name */
  Allowance = 'allowance',
  /** column name */
  GranteeAddress = 'grantee_address',
  /** column name */
  GranterAddress = 'granter_address',
  /** column name */
  Height = 'height'
}

/** order by stddev() on columns of table "fee_grant_allowance" */
export type Fee_Grant_Allowance_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "fee_grant_allowance" */
export type Fee_Grant_Allowance_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "fee_grant_allowance" */
export type Fee_Grant_Allowance_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "fee_grant_allowance" */
export type Fee_Grant_Allowance_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Fee_Grant_Allowance_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Fee_Grant_Allowance_Stream_Cursor_Value_Input = {
  allowance?: InputMaybe<Scalars['jsonb']['input']>;
  grantee_address?: InputMaybe<Scalars['String']['input']>;
  granter_address?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
};

/** order by sum() on columns of table "fee_grant_allowance" */
export type Fee_Grant_Allowance_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "fee_grant_allowance" */
export type Fee_Grant_Allowance_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "fee_grant_allowance" */
export type Fee_Grant_Allowance_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "fee_grant_allowance" */
export type Fee_Grant_Allowance_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** columns and relationships of "genesis" */
export type Genesis = {
  __typename?: 'genesis';
  chain_id: Scalars['String']['output'];
  initial_height: Scalars['bigint']['output'];
  time: Scalars['timestamp']['output'];
};

/** Boolean expression to filter rows from the table "genesis". All fields are combined with a logical 'AND'. */
export type Genesis_Bool_Exp = {
  _and?: InputMaybe<Array<Genesis_Bool_Exp>>;
  _not?: InputMaybe<Genesis_Bool_Exp>;
  _or?: InputMaybe<Array<Genesis_Bool_Exp>>;
  chain_id?: InputMaybe<String_Comparison_Exp>;
  initial_height?: InputMaybe<Bigint_Comparison_Exp>;
  time?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** Ordering options when selecting data from "genesis". */
export type Genesis_Order_By = {
  chain_id?: InputMaybe<Order_By>;
  initial_height?: InputMaybe<Order_By>;
  time?: InputMaybe<Order_By>;
};

/** select columns of table "genesis" */
export enum Genesis_Select_Column {
  /** column name */
  ChainId = 'chain_id',
  /** column name */
  InitialHeight = 'initial_height',
  /** column name */
  Time = 'time'
}

/** Streaming cursor of the table "genesis" */
export type Genesis_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Genesis_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Genesis_Stream_Cursor_Value_Input = {
  chain_id?: InputMaybe<Scalars['String']['input']>;
  initial_height?: InputMaybe<Scalars['bigint']['input']>;
  time?: InputMaybe<Scalars['timestamp']['input']>;
};

/** columns and relationships of "gov_params" */
export type Gov_Params = {
  __typename?: 'gov_params';
  deposit_params: Scalars['jsonb']['output'];
  height: Scalars['bigint']['output'];
  tally_params: Scalars['jsonb']['output'];
  voting_params: Scalars['jsonb']['output'];
};


/** columns and relationships of "gov_params" */
export type Gov_ParamsDeposit_ParamsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "gov_params" */
export type Gov_ParamsTally_ParamsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "gov_params" */
export type Gov_ParamsVoting_ParamsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to filter rows from the table "gov_params". All fields are combined with a logical 'AND'. */
export type Gov_Params_Bool_Exp = {
  _and?: InputMaybe<Array<Gov_Params_Bool_Exp>>;
  _not?: InputMaybe<Gov_Params_Bool_Exp>;
  _or?: InputMaybe<Array<Gov_Params_Bool_Exp>>;
  deposit_params?: InputMaybe<Jsonb_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  tally_params?: InputMaybe<Jsonb_Comparison_Exp>;
  voting_params?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** Ordering options when selecting data from "gov_params". */
export type Gov_Params_Order_By = {
  deposit_params?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  tally_params?: InputMaybe<Order_By>;
  voting_params?: InputMaybe<Order_By>;
};

/** select columns of table "gov_params" */
export enum Gov_Params_Select_Column {
  /** column name */
  DepositParams = 'deposit_params',
  /** column name */
  Height = 'height',
  /** column name */
  TallyParams = 'tally_params',
  /** column name */
  VotingParams = 'voting_params'
}

/** Streaming cursor of the table "gov_params" */
export type Gov_Params_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Gov_Params_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Gov_Params_Stream_Cursor_Value_Input = {
  deposit_params?: InputMaybe<Scalars['jsonb']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  tally_params?: InputMaybe<Scalars['jsonb']['input']>;
  voting_params?: InputMaybe<Scalars['jsonb']['input']>;
};

/** columns and relationships of "group" */
export type Group = {
  __typename?: 'group';
  account: Scalars['String']['output'];
  /** An object relationship */
  group_account?: Maybe<Account>;
  members: Scalars['_text']['output'];
  /** An array relationship */
  multisig_proposals: Array<Multisig_Proposal>;
  /** An aggregate relationship */
  multisig_proposals_aggregate: Multisig_Proposal_Aggregate;
  threshold: Scalars['Int']['output'];
};


/** columns and relationships of "group" */
export type GroupMultisig_ProposalsArgs = {
  distinct_on?: InputMaybe<Array<Multisig_Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Multisig_Proposal_Order_By>>;
  where?: InputMaybe<Multisig_Proposal_Bool_Exp>;
};


/** columns and relationships of "group" */
export type GroupMultisig_Proposals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Multisig_Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Multisig_Proposal_Order_By>>;
  where?: InputMaybe<Multisig_Proposal_Bool_Exp>;
};

/** aggregated selection of "group" */
export type Group_Aggregate = {
  __typename?: 'group_aggregate';
  aggregate?: Maybe<Group_Aggregate_Fields>;
  nodes: Array<Group>;
};

/** aggregate fields of "group" */
export type Group_Aggregate_Fields = {
  __typename?: 'group_aggregate_fields';
  avg?: Maybe<Group_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Group_Max_Fields>;
  min?: Maybe<Group_Min_Fields>;
  stddev?: Maybe<Group_Stddev_Fields>;
  stddev_pop?: Maybe<Group_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Group_Stddev_Samp_Fields>;
  sum?: Maybe<Group_Sum_Fields>;
  var_pop?: Maybe<Group_Var_Pop_Fields>;
  var_samp?: Maybe<Group_Var_Samp_Fields>;
  variance?: Maybe<Group_Variance_Fields>;
};


/** aggregate fields of "group" */
export type Group_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Group_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Group_Avg_Fields = {
  __typename?: 'group_avg_fields';
  threshold?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "group". All fields are combined with a logical 'AND'. */
export type Group_Bool_Exp = {
  _and?: InputMaybe<Array<Group_Bool_Exp>>;
  _not?: InputMaybe<Group_Bool_Exp>;
  _or?: InputMaybe<Array<Group_Bool_Exp>>;
  account?: InputMaybe<String_Comparison_Exp>;
  group_account?: InputMaybe<Account_Bool_Exp>;
  members?: InputMaybe<_Text_Comparison_Exp>;
  multisig_proposals?: InputMaybe<Multisig_Proposal_Bool_Exp>;
  multisig_proposals_aggregate?: InputMaybe<Multisig_Proposal_Aggregate_Bool_Exp>;
  threshold?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Group_Max_Fields = {
  __typename?: 'group_max_fields';
  account?: Maybe<Scalars['String']['output']>;
  threshold?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Group_Min_Fields = {
  __typename?: 'group_min_fields';
  account?: Maybe<Scalars['String']['output']>;
  threshold?: Maybe<Scalars['Int']['output']>;
};

/** Ordering options when selecting data from "group". */
export type Group_Order_By = {
  account?: InputMaybe<Order_By>;
  group_account?: InputMaybe<Account_Order_By>;
  members?: InputMaybe<Order_By>;
  multisig_proposals_aggregate?: InputMaybe<Multisig_Proposal_Aggregate_Order_By>;
  threshold?: InputMaybe<Order_By>;
};

/** select columns of table "group" */
export enum Group_Select_Column {
  /** column name */
  Account = 'account',
  /** column name */
  Members = 'members',
  /** column name */
  Threshold = 'threshold'
}

/** aggregate stddev on columns */
export type Group_Stddev_Fields = {
  __typename?: 'group_stddev_fields';
  threshold?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Group_Stddev_Pop_Fields = {
  __typename?: 'group_stddev_pop_fields';
  threshold?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Group_Stddev_Samp_Fields = {
  __typename?: 'group_stddev_samp_fields';
  threshold?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "group" */
export type Group_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Group_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Group_Stream_Cursor_Value_Input = {
  account?: InputMaybe<Scalars['String']['input']>;
  members?: InputMaybe<Scalars['_text']['input']>;
  threshold?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Group_Sum_Fields = {
  __typename?: 'group_sum_fields';
  threshold?: Maybe<Scalars['Int']['output']>;
};

/** aggregate var_pop on columns */
export type Group_Var_Pop_Fields = {
  __typename?: 'group_var_pop_fields';
  threshold?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Group_Var_Samp_Fields = {
  __typename?: 'group_var_samp_fields';
  threshold?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Group_Variance_Fields = {
  __typename?: 'group_variance_fields';
  threshold?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "inflation" */
export type Inflation = {
  __typename?: 'inflation';
  height: Scalars['bigint']['output'];
  value: Scalars['numeric']['output'];
};

/** Boolean expression to filter rows from the table "inflation". All fields are combined with a logical 'AND'. */
export type Inflation_Bool_Exp = {
  _and?: InputMaybe<Array<Inflation_Bool_Exp>>;
  _not?: InputMaybe<Inflation_Bool_Exp>;
  _or?: InputMaybe<Array<Inflation_Bool_Exp>>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  value?: InputMaybe<Numeric_Comparison_Exp>;
};

/** Ordering options when selecting data from "inflation". */
export type Inflation_Order_By = {
  height?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** select columns of table "inflation" */
export enum Inflation_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Value = 'value'
}

/** Streaming cursor of the table "inflation" */
export type Inflation_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Inflation_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Inflation_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
  value?: InputMaybe<Scalars['numeric']['input']>;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
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

/** columns and relationships of "message" */
export type Message = {
  __typename?: 'message';
  height: Scalars['bigint']['output'];
  index: Scalars['bigint']['output'];
  involved_accounts_addresses: Scalars['_text']['output'];
  /** An object relationship */
  transaction?: Maybe<Transaction>;
  /** An object relationship */
  transactionByPartitionIdTransactionHash?: Maybe<Transaction>;
  transaction_hash: Scalars['String']['output'];
  type: Scalars['String']['output'];
  value: Scalars['jsonb']['output'];
};


/** columns and relationships of "message" */
export type MessageValueArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** order by aggregate values of table "message" */
export type Message_Aggregate_Order_By = {
  avg?: InputMaybe<Message_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Message_Max_Order_By>;
  min?: InputMaybe<Message_Min_Order_By>;
  stddev?: InputMaybe<Message_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Message_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Message_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Message_Sum_Order_By>;
  var_pop?: InputMaybe<Message_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Message_Var_Samp_Order_By>;
  variance?: InputMaybe<Message_Variance_Order_By>;
};

/** order by avg() on columns of table "message" */
export type Message_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "message". All fields are combined with a logical 'AND'. */
export type Message_Bool_Exp = {
  _and?: InputMaybe<Array<Message_Bool_Exp>>;
  _not?: InputMaybe<Message_Bool_Exp>;
  _or?: InputMaybe<Array<Message_Bool_Exp>>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  index?: InputMaybe<Bigint_Comparison_Exp>;
  involved_accounts_addresses?: InputMaybe<_Text_Comparison_Exp>;
  transaction?: InputMaybe<Transaction_Bool_Exp>;
  transactionByPartitionIdTransactionHash?: InputMaybe<Transaction_Bool_Exp>;
  transaction_hash?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** order by max() on columns of table "message" */
export type Message_Max_Order_By = {
  height?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "message" */
export type Message_Min_Order_By = {
  height?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "message". */
export type Message_Order_By = {
  height?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  involved_accounts_addresses?: InputMaybe<Order_By>;
  transaction?: InputMaybe<Transaction_Order_By>;
  transactionByPartitionIdTransactionHash?: InputMaybe<Transaction_Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** select columns of table "message" */
export enum Message_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Index = 'index',
  /** column name */
  InvolvedAccountsAddresses = 'involved_accounts_addresses',
  /** column name */
  TransactionHash = 'transaction_hash',
  /** column name */
  Type = 'type',
  /** column name */
  Value = 'value'
}

/** order by stddev() on columns of table "message" */
export type Message_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "message" */
export type Message_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "message" */
export type Message_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "message" */
export type Message_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Message_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Message_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
  index?: InputMaybe<Scalars['bigint']['input']>;
  involved_accounts_addresses?: InputMaybe<Scalars['_text']['input']>;
  transaction_hash?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['jsonb']['input']>;
};

/** order by sum() on columns of table "message" */
export type Message_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "message" */
export type Message_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "message" */
export type Message_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "message" */
export type Message_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
};

export type Messages_By_Address_Args = {
  addresses?: InputMaybe<Scalars['_text']['input']>;
  limit?: InputMaybe<Scalars['bigint']['input']>;
  offset?: InputMaybe<Scalars['bigint']['input']>;
  types?: InputMaybe<Scalars['_text']['input']>;
};

export type Messages_By_Type_Args = {
  limit?: InputMaybe<Scalars['bigint']['input']>;
  offset?: InputMaybe<Scalars['bigint']['input']>;
  types?: InputMaybe<Scalars['_text']['input']>;
};

/** columns and relationships of "mint_params" */
export type Mint_Params = {
  __typename?: 'mint_params';
  height: Scalars['bigint']['output'];
  params: Scalars['jsonb']['output'];
};


/** columns and relationships of "mint_params" */
export type Mint_ParamsParamsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to filter rows from the table "mint_params". All fields are combined with a logical 'AND'. */
export type Mint_Params_Bool_Exp = {
  _and?: InputMaybe<Array<Mint_Params_Bool_Exp>>;
  _not?: InputMaybe<Mint_Params_Bool_Exp>;
  _or?: InputMaybe<Array<Mint_Params_Bool_Exp>>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  params?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** Ordering options when selecting data from "mint_params". */
export type Mint_Params_Order_By = {
  height?: InputMaybe<Order_By>;
  params?: InputMaybe<Order_By>;
};

/** select columns of table "mint_params" */
export enum Mint_Params_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Params = 'params'
}

/** Streaming cursor of the table "mint_params" */
export type Mint_Params_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Mint_Params_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Mint_Params_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
  params?: InputMaybe<Scalars['jsonb']['input']>;
};

/** columns and relationships of "modules" */
export type Modules = {
  __typename?: 'modules';
  module_name: Scalars['String']['output'];
};

/** Boolean expression to filter rows from the table "modules". All fields are combined with a logical 'AND'. */
export type Modules_Bool_Exp = {
  _and?: InputMaybe<Array<Modules_Bool_Exp>>;
  _not?: InputMaybe<Modules_Bool_Exp>;
  _or?: InputMaybe<Array<Modules_Bool_Exp>>;
  module_name?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "modules". */
export type Modules_Order_By = {
  module_name?: InputMaybe<Order_By>;
};

/** select columns of table "modules" */
export enum Modules_Select_Column {
  /** column name */
  ModuleName = 'module_name'
}

/** Streaming cursor of the table "modules" */
export type Modules_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Modules_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Modules_Stream_Cursor_Value_Input = {
  module_name?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "multisig_params" */
export type Multisig_Params = {
  __typename?: 'multisig_params';
  group_sequence: Scalars['Int']['output'];
  height: Scalars['bigint']['output'];
  one_row_id: Scalars['Boolean']['output'];
  proposal_sequence: Scalars['Int']['output'];
  prune_period: Scalars['Int']['output'];
  voting_period: Scalars['String']['output'];
};

/** aggregated selection of "multisig_params" */
export type Multisig_Params_Aggregate = {
  __typename?: 'multisig_params_aggregate';
  aggregate?: Maybe<Multisig_Params_Aggregate_Fields>;
  nodes: Array<Multisig_Params>;
};

/** aggregate fields of "multisig_params" */
export type Multisig_Params_Aggregate_Fields = {
  __typename?: 'multisig_params_aggregate_fields';
  avg?: Maybe<Multisig_Params_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Multisig_Params_Max_Fields>;
  min?: Maybe<Multisig_Params_Min_Fields>;
  stddev?: Maybe<Multisig_Params_Stddev_Fields>;
  stddev_pop?: Maybe<Multisig_Params_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Multisig_Params_Stddev_Samp_Fields>;
  sum?: Maybe<Multisig_Params_Sum_Fields>;
  var_pop?: Maybe<Multisig_Params_Var_Pop_Fields>;
  var_samp?: Maybe<Multisig_Params_Var_Samp_Fields>;
  variance?: Maybe<Multisig_Params_Variance_Fields>;
};


/** aggregate fields of "multisig_params" */
export type Multisig_Params_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Multisig_Params_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Multisig_Params_Avg_Fields = {
  __typename?: 'multisig_params_avg_fields';
  group_sequence?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  proposal_sequence?: Maybe<Scalars['Float']['output']>;
  prune_period?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "multisig_params". All fields are combined with a logical 'AND'. */
export type Multisig_Params_Bool_Exp = {
  _and?: InputMaybe<Array<Multisig_Params_Bool_Exp>>;
  _not?: InputMaybe<Multisig_Params_Bool_Exp>;
  _or?: InputMaybe<Array<Multisig_Params_Bool_Exp>>;
  group_sequence?: InputMaybe<Int_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  one_row_id?: InputMaybe<Boolean_Comparison_Exp>;
  proposal_sequence?: InputMaybe<Int_Comparison_Exp>;
  prune_period?: InputMaybe<Int_Comparison_Exp>;
  voting_period?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Multisig_Params_Max_Fields = {
  __typename?: 'multisig_params_max_fields';
  group_sequence?: Maybe<Scalars['Int']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
  proposal_sequence?: Maybe<Scalars['Int']['output']>;
  prune_period?: Maybe<Scalars['Int']['output']>;
  voting_period?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Multisig_Params_Min_Fields = {
  __typename?: 'multisig_params_min_fields';
  group_sequence?: Maybe<Scalars['Int']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
  proposal_sequence?: Maybe<Scalars['Int']['output']>;
  prune_period?: Maybe<Scalars['Int']['output']>;
  voting_period?: Maybe<Scalars['String']['output']>;
};

/** Ordering options when selecting data from "multisig_params". */
export type Multisig_Params_Order_By = {
  group_sequence?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  one_row_id?: InputMaybe<Order_By>;
  proposal_sequence?: InputMaybe<Order_By>;
  prune_period?: InputMaybe<Order_By>;
  voting_period?: InputMaybe<Order_By>;
};

/** select columns of table "multisig_params" */
export enum Multisig_Params_Select_Column {
  /** column name */
  GroupSequence = 'group_sequence',
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id',
  /** column name */
  ProposalSequence = 'proposal_sequence',
  /** column name */
  PrunePeriod = 'prune_period',
  /** column name */
  VotingPeriod = 'voting_period'
}

/** aggregate stddev on columns */
export type Multisig_Params_Stddev_Fields = {
  __typename?: 'multisig_params_stddev_fields';
  group_sequence?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  proposal_sequence?: Maybe<Scalars['Float']['output']>;
  prune_period?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Multisig_Params_Stddev_Pop_Fields = {
  __typename?: 'multisig_params_stddev_pop_fields';
  group_sequence?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  proposal_sequence?: Maybe<Scalars['Float']['output']>;
  prune_period?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Multisig_Params_Stddev_Samp_Fields = {
  __typename?: 'multisig_params_stddev_samp_fields';
  group_sequence?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  proposal_sequence?: Maybe<Scalars['Float']['output']>;
  prune_period?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "multisig_params" */
export type Multisig_Params_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Multisig_Params_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Multisig_Params_Stream_Cursor_Value_Input = {
  group_sequence?: InputMaybe<Scalars['Int']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  one_row_id?: InputMaybe<Scalars['Boolean']['input']>;
  proposal_sequence?: InputMaybe<Scalars['Int']['input']>;
  prune_period?: InputMaybe<Scalars['Int']['input']>;
  voting_period?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Multisig_Params_Sum_Fields = {
  __typename?: 'multisig_params_sum_fields';
  group_sequence?: Maybe<Scalars['Int']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
  proposal_sequence?: Maybe<Scalars['Int']['output']>;
  prune_period?: Maybe<Scalars['Int']['output']>;
};

/** aggregate var_pop on columns */
export type Multisig_Params_Var_Pop_Fields = {
  __typename?: 'multisig_params_var_pop_fields';
  group_sequence?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  proposal_sequence?: Maybe<Scalars['Float']['output']>;
  prune_period?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Multisig_Params_Var_Samp_Fields = {
  __typename?: 'multisig_params_var_samp_fields';
  group_sequence?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  proposal_sequence?: Maybe<Scalars['Float']['output']>;
  prune_period?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Multisig_Params_Variance_Fields = {
  __typename?: 'multisig_params_variance_fields';
  group_sequence?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  proposal_sequence?: Maybe<Scalars['Float']['output']>;
  prune_period?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "multisig_proposal" */
export type Multisig_Proposal = {
  __typename?: 'multisig_proposal';
  final_tally_result: Scalars['jsonb']['output'];
  group: Scalars['String']['output'];
  /** An object relationship */
  group_account?: Maybe<Account>;
  id: Scalars['Int']['output'];
  messages: Scalars['jsonb']['output'];
  /** An array relationship */
  multisig_proposal_votes: Array<Multisig_Proposal_Vote>;
  /** An aggregate relationship */
  multisig_proposal_votes_aggregate: Multisig_Proposal_Vote_Aggregate;
  proposer: Scalars['String']['output'];
  /** An object relationship */
  proposer_account?: Maybe<Account>;
  status: Scalars['String']['output'];
  submit_block: Scalars['bigint']['output'];
  voting_end_block: Scalars['bigint']['output'];
};


/** columns and relationships of "multisig_proposal" */
export type Multisig_ProposalFinal_Tally_ResultArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "multisig_proposal" */
export type Multisig_ProposalMessagesArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "multisig_proposal" */
export type Multisig_ProposalMultisig_Proposal_VotesArgs = {
  distinct_on?: InputMaybe<Array<Multisig_Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Multisig_Proposal_Vote_Order_By>>;
  where?: InputMaybe<Multisig_Proposal_Vote_Bool_Exp>;
};


/** columns and relationships of "multisig_proposal" */
export type Multisig_ProposalMultisig_Proposal_Votes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Multisig_Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Multisig_Proposal_Vote_Order_By>>;
  where?: InputMaybe<Multisig_Proposal_Vote_Bool_Exp>;
};

/** aggregated selection of "multisig_proposal" */
export type Multisig_Proposal_Aggregate = {
  __typename?: 'multisig_proposal_aggregate';
  aggregate?: Maybe<Multisig_Proposal_Aggregate_Fields>;
  nodes: Array<Multisig_Proposal>;
};

export type Multisig_Proposal_Aggregate_Bool_Exp = {
  count?: InputMaybe<Multisig_Proposal_Aggregate_Bool_Exp_Count>;
};

export type Multisig_Proposal_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Multisig_Proposal_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Multisig_Proposal_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "multisig_proposal" */
export type Multisig_Proposal_Aggregate_Fields = {
  __typename?: 'multisig_proposal_aggregate_fields';
  avg?: Maybe<Multisig_Proposal_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Multisig_Proposal_Max_Fields>;
  min?: Maybe<Multisig_Proposal_Min_Fields>;
  stddev?: Maybe<Multisig_Proposal_Stddev_Fields>;
  stddev_pop?: Maybe<Multisig_Proposal_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Multisig_Proposal_Stddev_Samp_Fields>;
  sum?: Maybe<Multisig_Proposal_Sum_Fields>;
  var_pop?: Maybe<Multisig_Proposal_Var_Pop_Fields>;
  var_samp?: Maybe<Multisig_Proposal_Var_Samp_Fields>;
  variance?: Maybe<Multisig_Proposal_Variance_Fields>;
};


/** aggregate fields of "multisig_proposal" */
export type Multisig_Proposal_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Multisig_Proposal_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "multisig_proposal" */
export type Multisig_Proposal_Aggregate_Order_By = {
  avg?: InputMaybe<Multisig_Proposal_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Multisig_Proposal_Max_Order_By>;
  min?: InputMaybe<Multisig_Proposal_Min_Order_By>;
  stddev?: InputMaybe<Multisig_Proposal_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Multisig_Proposal_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Multisig_Proposal_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Multisig_Proposal_Sum_Order_By>;
  var_pop?: InputMaybe<Multisig_Proposal_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Multisig_Proposal_Var_Samp_Order_By>;
  variance?: InputMaybe<Multisig_Proposal_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Multisig_Proposal_Avg_Fields = {
  __typename?: 'multisig_proposal_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  submit_block?: Maybe<Scalars['Float']['output']>;
  voting_end_block?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "multisig_proposal" */
export type Multisig_Proposal_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  submit_block?: InputMaybe<Order_By>;
  voting_end_block?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "multisig_proposal". All fields are combined with a logical 'AND'. */
export type Multisig_Proposal_Bool_Exp = {
  _and?: InputMaybe<Array<Multisig_Proposal_Bool_Exp>>;
  _not?: InputMaybe<Multisig_Proposal_Bool_Exp>;
  _or?: InputMaybe<Array<Multisig_Proposal_Bool_Exp>>;
  final_tally_result?: InputMaybe<Jsonb_Comparison_Exp>;
  group?: InputMaybe<String_Comparison_Exp>;
  group_account?: InputMaybe<Account_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  messages?: InputMaybe<Jsonb_Comparison_Exp>;
  multisig_proposal_votes?: InputMaybe<Multisig_Proposal_Vote_Bool_Exp>;
  multisig_proposal_votes_aggregate?: InputMaybe<Multisig_Proposal_Vote_Aggregate_Bool_Exp>;
  proposer?: InputMaybe<String_Comparison_Exp>;
  proposer_account?: InputMaybe<Account_Bool_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  submit_block?: InputMaybe<Bigint_Comparison_Exp>;
  voting_end_block?: InputMaybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Multisig_Proposal_Max_Fields = {
  __typename?: 'multisig_proposal_max_fields';
  group?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  proposer?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  submit_block?: Maybe<Scalars['bigint']['output']>;
  voting_end_block?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "multisig_proposal" */
export type Multisig_Proposal_Max_Order_By = {
  group?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  proposer?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  submit_block?: InputMaybe<Order_By>;
  voting_end_block?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Multisig_Proposal_Min_Fields = {
  __typename?: 'multisig_proposal_min_fields';
  group?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  proposer?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  submit_block?: Maybe<Scalars['bigint']['output']>;
  voting_end_block?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "multisig_proposal" */
export type Multisig_Proposal_Min_Order_By = {
  group?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  proposer?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  submit_block?: InputMaybe<Order_By>;
  voting_end_block?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "multisig_proposal". */
export type Multisig_Proposal_Order_By = {
  final_tally_result?: InputMaybe<Order_By>;
  group?: InputMaybe<Order_By>;
  group_account?: InputMaybe<Account_Order_By>;
  id?: InputMaybe<Order_By>;
  messages?: InputMaybe<Order_By>;
  multisig_proposal_votes_aggregate?: InputMaybe<Multisig_Proposal_Vote_Aggregate_Order_By>;
  proposer?: InputMaybe<Order_By>;
  proposer_account?: InputMaybe<Account_Order_By>;
  status?: InputMaybe<Order_By>;
  submit_block?: InputMaybe<Order_By>;
  voting_end_block?: InputMaybe<Order_By>;
};

/** select columns of table "multisig_proposal" */
export enum Multisig_Proposal_Select_Column {
  /** column name */
  FinalTallyResult = 'final_tally_result',
  /** column name */
  Group = 'group',
  /** column name */
  Id = 'id',
  /** column name */
  Messages = 'messages',
  /** column name */
  Proposer = 'proposer',
  /** column name */
  Status = 'status',
  /** column name */
  SubmitBlock = 'submit_block',
  /** column name */
  VotingEndBlock = 'voting_end_block'
}

/** aggregate stddev on columns */
export type Multisig_Proposal_Stddev_Fields = {
  __typename?: 'multisig_proposal_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  submit_block?: Maybe<Scalars['Float']['output']>;
  voting_end_block?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "multisig_proposal" */
export type Multisig_Proposal_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  submit_block?: InputMaybe<Order_By>;
  voting_end_block?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Multisig_Proposal_Stddev_Pop_Fields = {
  __typename?: 'multisig_proposal_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  submit_block?: Maybe<Scalars['Float']['output']>;
  voting_end_block?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "multisig_proposal" */
export type Multisig_Proposal_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  submit_block?: InputMaybe<Order_By>;
  voting_end_block?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Multisig_Proposal_Stddev_Samp_Fields = {
  __typename?: 'multisig_proposal_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  submit_block?: Maybe<Scalars['Float']['output']>;
  voting_end_block?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "multisig_proposal" */
export type Multisig_Proposal_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  submit_block?: InputMaybe<Order_By>;
  voting_end_block?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "multisig_proposal" */
export type Multisig_Proposal_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Multisig_Proposal_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Multisig_Proposal_Stream_Cursor_Value_Input = {
  final_tally_result?: InputMaybe<Scalars['jsonb']['input']>;
  group?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  messages?: InputMaybe<Scalars['jsonb']['input']>;
  proposer?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  submit_block?: InputMaybe<Scalars['bigint']['input']>;
  voting_end_block?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Multisig_Proposal_Sum_Fields = {
  __typename?: 'multisig_proposal_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  submit_block?: Maybe<Scalars['bigint']['output']>;
  voting_end_block?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "multisig_proposal" */
export type Multisig_Proposal_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  submit_block?: InputMaybe<Order_By>;
  voting_end_block?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Multisig_Proposal_Var_Pop_Fields = {
  __typename?: 'multisig_proposal_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  submit_block?: Maybe<Scalars['Float']['output']>;
  voting_end_block?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "multisig_proposal" */
export type Multisig_Proposal_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  submit_block?: InputMaybe<Order_By>;
  voting_end_block?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Multisig_Proposal_Var_Samp_Fields = {
  __typename?: 'multisig_proposal_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  submit_block?: Maybe<Scalars['Float']['output']>;
  voting_end_block?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "multisig_proposal" */
export type Multisig_Proposal_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  submit_block?: InputMaybe<Order_By>;
  voting_end_block?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Multisig_Proposal_Variance_Fields = {
  __typename?: 'multisig_proposal_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  submit_block?: Maybe<Scalars['Float']['output']>;
  voting_end_block?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "multisig_proposal" */
export type Multisig_Proposal_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  submit_block?: InputMaybe<Order_By>;
  voting_end_block?: InputMaybe<Order_By>;
};

/** columns and relationships of "multisig_proposal_vote" */
export type Multisig_Proposal_Vote = {
  __typename?: 'multisig_proposal_vote';
  /** An object relationship */
  block?: Maybe<Block>;
  index: Scalars['String']['output'];
  option: Scalars['Int']['output'];
  /** An object relationship */
  proposal?: Maybe<Multisig_Proposal>;
  proposal_id: Scalars['Int']['output'];
  /** An object relationship */
  proposer_account?: Maybe<Account>;
  submit_block: Scalars['bigint']['output'];
  voter: Scalars['String']['output'];
};

/** aggregated selection of "multisig_proposal_vote" */
export type Multisig_Proposal_Vote_Aggregate = {
  __typename?: 'multisig_proposal_vote_aggregate';
  aggregate?: Maybe<Multisig_Proposal_Vote_Aggregate_Fields>;
  nodes: Array<Multisig_Proposal_Vote>;
};

export type Multisig_Proposal_Vote_Aggregate_Bool_Exp = {
  count?: InputMaybe<Multisig_Proposal_Vote_Aggregate_Bool_Exp_Count>;
};

export type Multisig_Proposal_Vote_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Multisig_Proposal_Vote_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Multisig_Proposal_Vote_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "multisig_proposal_vote" */
export type Multisig_Proposal_Vote_Aggregate_Fields = {
  __typename?: 'multisig_proposal_vote_aggregate_fields';
  avg?: Maybe<Multisig_Proposal_Vote_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Multisig_Proposal_Vote_Max_Fields>;
  min?: Maybe<Multisig_Proposal_Vote_Min_Fields>;
  stddev?: Maybe<Multisig_Proposal_Vote_Stddev_Fields>;
  stddev_pop?: Maybe<Multisig_Proposal_Vote_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Multisig_Proposal_Vote_Stddev_Samp_Fields>;
  sum?: Maybe<Multisig_Proposal_Vote_Sum_Fields>;
  var_pop?: Maybe<Multisig_Proposal_Vote_Var_Pop_Fields>;
  var_samp?: Maybe<Multisig_Proposal_Vote_Var_Samp_Fields>;
  variance?: Maybe<Multisig_Proposal_Vote_Variance_Fields>;
};


/** aggregate fields of "multisig_proposal_vote" */
export type Multisig_Proposal_Vote_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Multisig_Proposal_Vote_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "multisig_proposal_vote" */
export type Multisig_Proposal_Vote_Aggregate_Order_By = {
  avg?: InputMaybe<Multisig_Proposal_Vote_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Multisig_Proposal_Vote_Max_Order_By>;
  min?: InputMaybe<Multisig_Proposal_Vote_Min_Order_By>;
  stddev?: InputMaybe<Multisig_Proposal_Vote_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Multisig_Proposal_Vote_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Multisig_Proposal_Vote_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Multisig_Proposal_Vote_Sum_Order_By>;
  var_pop?: InputMaybe<Multisig_Proposal_Vote_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Multisig_Proposal_Vote_Var_Samp_Order_By>;
  variance?: InputMaybe<Multisig_Proposal_Vote_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Multisig_Proposal_Vote_Avg_Fields = {
  __typename?: 'multisig_proposal_vote_avg_fields';
  option?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
  submit_block?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "multisig_proposal_vote" */
export type Multisig_Proposal_Vote_Avg_Order_By = {
  option?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  submit_block?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "multisig_proposal_vote". All fields are combined with a logical 'AND'. */
export type Multisig_Proposal_Vote_Bool_Exp = {
  _and?: InputMaybe<Array<Multisig_Proposal_Vote_Bool_Exp>>;
  _not?: InputMaybe<Multisig_Proposal_Vote_Bool_Exp>;
  _or?: InputMaybe<Array<Multisig_Proposal_Vote_Bool_Exp>>;
  block?: InputMaybe<Block_Bool_Exp>;
  index?: InputMaybe<String_Comparison_Exp>;
  option?: InputMaybe<Int_Comparison_Exp>;
  proposal?: InputMaybe<Multisig_Proposal_Bool_Exp>;
  proposal_id?: InputMaybe<Int_Comparison_Exp>;
  proposer_account?: InputMaybe<Account_Bool_Exp>;
  submit_block?: InputMaybe<Bigint_Comparison_Exp>;
  voter?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Multisig_Proposal_Vote_Max_Fields = {
  __typename?: 'multisig_proposal_vote_max_fields';
  index?: Maybe<Scalars['String']['output']>;
  option?: Maybe<Scalars['Int']['output']>;
  proposal_id?: Maybe<Scalars['Int']['output']>;
  submit_block?: Maybe<Scalars['bigint']['output']>;
  voter?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "multisig_proposal_vote" */
export type Multisig_Proposal_Vote_Max_Order_By = {
  index?: InputMaybe<Order_By>;
  option?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  submit_block?: InputMaybe<Order_By>;
  voter?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Multisig_Proposal_Vote_Min_Fields = {
  __typename?: 'multisig_proposal_vote_min_fields';
  index?: Maybe<Scalars['String']['output']>;
  option?: Maybe<Scalars['Int']['output']>;
  proposal_id?: Maybe<Scalars['Int']['output']>;
  submit_block?: Maybe<Scalars['bigint']['output']>;
  voter?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "multisig_proposal_vote" */
export type Multisig_Proposal_Vote_Min_Order_By = {
  index?: InputMaybe<Order_By>;
  option?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  submit_block?: InputMaybe<Order_By>;
  voter?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "multisig_proposal_vote". */
export type Multisig_Proposal_Vote_Order_By = {
  block?: InputMaybe<Block_Order_By>;
  index?: InputMaybe<Order_By>;
  option?: InputMaybe<Order_By>;
  proposal?: InputMaybe<Multisig_Proposal_Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  proposer_account?: InputMaybe<Account_Order_By>;
  submit_block?: InputMaybe<Order_By>;
  voter?: InputMaybe<Order_By>;
};

/** select columns of table "multisig_proposal_vote" */
export enum Multisig_Proposal_Vote_Select_Column {
  /** column name */
  Index = 'index',
  /** column name */
  Option = 'option',
  /** column name */
  ProposalId = 'proposal_id',
  /** column name */
  SubmitBlock = 'submit_block',
  /** column name */
  Voter = 'voter'
}

/** aggregate stddev on columns */
export type Multisig_Proposal_Vote_Stddev_Fields = {
  __typename?: 'multisig_proposal_vote_stddev_fields';
  option?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
  submit_block?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "multisig_proposal_vote" */
export type Multisig_Proposal_Vote_Stddev_Order_By = {
  option?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  submit_block?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Multisig_Proposal_Vote_Stddev_Pop_Fields = {
  __typename?: 'multisig_proposal_vote_stddev_pop_fields';
  option?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
  submit_block?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "multisig_proposal_vote" */
export type Multisig_Proposal_Vote_Stddev_Pop_Order_By = {
  option?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  submit_block?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Multisig_Proposal_Vote_Stddev_Samp_Fields = {
  __typename?: 'multisig_proposal_vote_stddev_samp_fields';
  option?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
  submit_block?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "multisig_proposal_vote" */
export type Multisig_Proposal_Vote_Stddev_Samp_Order_By = {
  option?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  submit_block?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "multisig_proposal_vote" */
export type Multisig_Proposal_Vote_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Multisig_Proposal_Vote_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Multisig_Proposal_Vote_Stream_Cursor_Value_Input = {
  index?: InputMaybe<Scalars['String']['input']>;
  option?: InputMaybe<Scalars['Int']['input']>;
  proposal_id?: InputMaybe<Scalars['Int']['input']>;
  submit_block?: InputMaybe<Scalars['bigint']['input']>;
  voter?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Multisig_Proposal_Vote_Sum_Fields = {
  __typename?: 'multisig_proposal_vote_sum_fields';
  option?: Maybe<Scalars['Int']['output']>;
  proposal_id?: Maybe<Scalars['Int']['output']>;
  submit_block?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "multisig_proposal_vote" */
export type Multisig_Proposal_Vote_Sum_Order_By = {
  option?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  submit_block?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Multisig_Proposal_Vote_Var_Pop_Fields = {
  __typename?: 'multisig_proposal_vote_var_pop_fields';
  option?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
  submit_block?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "multisig_proposal_vote" */
export type Multisig_Proposal_Vote_Var_Pop_Order_By = {
  option?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  submit_block?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Multisig_Proposal_Vote_Var_Samp_Fields = {
  __typename?: 'multisig_proposal_vote_var_samp_fields';
  option?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
  submit_block?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "multisig_proposal_vote" */
export type Multisig_Proposal_Vote_Var_Samp_Order_By = {
  option?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  submit_block?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Multisig_Proposal_Vote_Variance_Fields = {
  __typename?: 'multisig_proposal_vote_variance_fields';
  option?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
  submit_block?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "multisig_proposal_vote" */
export type Multisig_Proposal_Vote_Variance_Order_By = {
  option?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  submit_block?: InputMaybe<Order_By>;
};

/** columns and relationships of "nft_events" */
export type Nft_Events = {
  __typename?: 'nft_events';
  amount: Scalars['_coin']['output'];
  event_type: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  new_owner?: Maybe<Scalars['String']['output']>;
  new_validator?: Maybe<Scalars['String']['output']>;
  nft_address: Scalars['String']['output'];
  owner: Scalars['String']['output'];
  validator?: Maybe<Scalars['String']['output']>;
};

/** Boolean expression to filter rows from the table "nft_events". All fields are combined with a logical 'AND'. */
export type Nft_Events_Bool_Exp = {
  _and?: InputMaybe<Array<Nft_Events_Bool_Exp>>;
  _not?: InputMaybe<Nft_Events_Bool_Exp>;
  _or?: InputMaybe<Array<Nft_Events_Bool_Exp>>;
  amount?: InputMaybe<_Coin_Comparison_Exp>;
  event_type?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  new_owner?: InputMaybe<String_Comparison_Exp>;
  new_validator?: InputMaybe<String_Comparison_Exp>;
  nft_address?: InputMaybe<String_Comparison_Exp>;
  owner?: InputMaybe<String_Comparison_Exp>;
  validator?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "nft_events". */
export type Nft_Events_Order_By = {
  amount?: InputMaybe<Order_By>;
  event_type?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  new_owner?: InputMaybe<Order_By>;
  new_validator?: InputMaybe<Order_By>;
  nft_address?: InputMaybe<Order_By>;
  owner?: InputMaybe<Order_By>;
  validator?: InputMaybe<Order_By>;
};

/** select columns of table "nft_events" */
export enum Nft_Events_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  EventType = 'event_type',
  /** column name */
  Id = 'id',
  /** column name */
  NewOwner = 'new_owner',
  /** column name */
  NewValidator = 'new_validator',
  /** column name */
  NftAddress = 'nft_address',
  /** column name */
  Owner = 'owner',
  /** column name */
  Validator = 'validator'
}

/** Streaming cursor of the table "nft_events" */
export type Nft_Events_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Nft_Events_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Nft_Events_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['_coin']['input']>;
  event_type?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  new_owner?: InputMaybe<Scalars['String']['input']>;
  new_validator?: InputMaybe<Scalars['String']['input']>;
  nft_address?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  validator?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "nfts" */
export type Nfts = {
  __typename?: 'nfts';
  address: Scalars['String']['output'];
  available_amount: Scalars['_coin']['output'];
  denom?: Maybe<Scalars['String']['output']>;
  last_vesting_time?: Maybe<Scalars['Int']['output']>;
  owner: Scalars['String']['output'];
  reward_per_period: Scalars['_coin']['output'];
  vesting_counter?: Maybe<Scalars['smallint']['output']>;
  vesting_period?: Maybe<Scalars['Int']['output']>;
};

/** Boolean expression to filter rows from the table "nfts". All fields are combined with a logical 'AND'. */
export type Nfts_Bool_Exp = {
  _and?: InputMaybe<Array<Nfts_Bool_Exp>>;
  _not?: InputMaybe<Nfts_Bool_Exp>;
  _or?: InputMaybe<Array<Nfts_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  available_amount?: InputMaybe<_Coin_Comparison_Exp>;
  denom?: InputMaybe<String_Comparison_Exp>;
  last_vesting_time?: InputMaybe<Int_Comparison_Exp>;
  owner?: InputMaybe<String_Comparison_Exp>;
  reward_per_period?: InputMaybe<_Coin_Comparison_Exp>;
  vesting_counter?: InputMaybe<Smallint_Comparison_Exp>;
  vesting_period?: InputMaybe<Int_Comparison_Exp>;
};

/** Ordering options when selecting data from "nfts". */
export type Nfts_Order_By = {
  address?: InputMaybe<Order_By>;
  available_amount?: InputMaybe<Order_By>;
  denom?: InputMaybe<Order_By>;
  last_vesting_time?: InputMaybe<Order_By>;
  owner?: InputMaybe<Order_By>;
  reward_per_period?: InputMaybe<Order_By>;
  vesting_counter?: InputMaybe<Order_By>;
  vesting_period?: InputMaybe<Order_By>;
};

/** select columns of table "nfts" */
export enum Nfts_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  AvailableAmount = 'available_amount',
  /** column name */
  Denom = 'denom',
  /** column name */
  LastVestingTime = 'last_vesting_time',
  /** column name */
  Owner = 'owner',
  /** column name */
  RewardPerPeriod = 'reward_per_period',
  /** column name */
  VestingCounter = 'vesting_counter',
  /** column name */
  VestingPeriod = 'vesting_period'
}

/** Streaming cursor of the table "nfts" */
export type Nfts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Nfts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Nfts_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  available_amount?: InputMaybe<Scalars['_coin']['input']>;
  denom?: InputMaybe<Scalars['String']['input']>;
  last_vesting_time?: InputMaybe<Scalars['Int']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  reward_per_period?: InputMaybe<Scalars['_coin']['input']>;
  vesting_counter?: InputMaybe<Scalars['smallint']['input']>;
  vesting_period?: InputMaybe<Scalars['Int']['input']>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
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

/** columns and relationships of "pre_commit" */
export type Pre_Commit = {
  __typename?: 'pre_commit';
  height: Scalars['bigint']['output'];
  proposer_priority: Scalars['bigint']['output'];
  timestamp: Scalars['timestamp']['output'];
  /** An object relationship */
  validator: Validator;
  validator_address: Scalars['String']['output'];
  voting_power: Scalars['bigint']['output'];
};

/** aggregated selection of "pre_commit" */
export type Pre_Commit_Aggregate = {
  __typename?: 'pre_commit_aggregate';
  aggregate?: Maybe<Pre_Commit_Aggregate_Fields>;
  nodes: Array<Pre_Commit>;
};

export type Pre_Commit_Aggregate_Bool_Exp = {
  count?: InputMaybe<Pre_Commit_Aggregate_Bool_Exp_Count>;
};

export type Pre_Commit_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Pre_Commit_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Pre_Commit_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "pre_commit" */
export type Pre_Commit_Aggregate_Fields = {
  __typename?: 'pre_commit_aggregate_fields';
  avg?: Maybe<Pre_Commit_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Pre_Commit_Max_Fields>;
  min?: Maybe<Pre_Commit_Min_Fields>;
  stddev?: Maybe<Pre_Commit_Stddev_Fields>;
  stddev_pop?: Maybe<Pre_Commit_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Pre_Commit_Stddev_Samp_Fields>;
  sum?: Maybe<Pre_Commit_Sum_Fields>;
  var_pop?: Maybe<Pre_Commit_Var_Pop_Fields>;
  var_samp?: Maybe<Pre_Commit_Var_Samp_Fields>;
  variance?: Maybe<Pre_Commit_Variance_Fields>;
};


/** aggregate fields of "pre_commit" */
export type Pre_Commit_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Pre_Commit_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "pre_commit" */
export type Pre_Commit_Aggregate_Order_By = {
  avg?: InputMaybe<Pre_Commit_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Pre_Commit_Max_Order_By>;
  min?: InputMaybe<Pre_Commit_Min_Order_By>;
  stddev?: InputMaybe<Pre_Commit_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Pre_Commit_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Pre_Commit_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Pre_Commit_Sum_Order_By>;
  var_pop?: InputMaybe<Pre_Commit_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Pre_Commit_Var_Samp_Order_By>;
  variance?: InputMaybe<Pre_Commit_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Pre_Commit_Avg_Fields = {
  __typename?: 'pre_commit_avg_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposer_priority?: Maybe<Scalars['Float']['output']>;
  voting_power?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "pre_commit" */
export type Pre_Commit_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  proposer_priority?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "pre_commit". All fields are combined with a logical 'AND'. */
export type Pre_Commit_Bool_Exp = {
  _and?: InputMaybe<Array<Pre_Commit_Bool_Exp>>;
  _not?: InputMaybe<Pre_Commit_Bool_Exp>;
  _or?: InputMaybe<Array<Pre_Commit_Bool_Exp>>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  proposer_priority?: InputMaybe<Bigint_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamp_Comparison_Exp>;
  validator?: InputMaybe<Validator_Bool_Exp>;
  validator_address?: InputMaybe<String_Comparison_Exp>;
  voting_power?: InputMaybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Pre_Commit_Max_Fields = {
  __typename?: 'pre_commit_max_fields';
  height?: Maybe<Scalars['bigint']['output']>;
  proposer_priority?: Maybe<Scalars['bigint']['output']>;
  timestamp?: Maybe<Scalars['timestamp']['output']>;
  validator_address?: Maybe<Scalars['String']['output']>;
  voting_power?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "pre_commit" */
export type Pre_Commit_Max_Order_By = {
  height?: InputMaybe<Order_By>;
  proposer_priority?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Pre_Commit_Min_Fields = {
  __typename?: 'pre_commit_min_fields';
  height?: Maybe<Scalars['bigint']['output']>;
  proposer_priority?: Maybe<Scalars['bigint']['output']>;
  timestamp?: Maybe<Scalars['timestamp']['output']>;
  validator_address?: Maybe<Scalars['String']['output']>;
  voting_power?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "pre_commit" */
export type Pre_Commit_Min_Order_By = {
  height?: InputMaybe<Order_By>;
  proposer_priority?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "pre_commit". */
export type Pre_Commit_Order_By = {
  height?: InputMaybe<Order_By>;
  proposer_priority?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  validator?: InputMaybe<Validator_Order_By>;
  validator_address?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** select columns of table "pre_commit" */
export enum Pre_Commit_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  ProposerPriority = 'proposer_priority',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  ValidatorAddress = 'validator_address',
  /** column name */
  VotingPower = 'voting_power'
}

/** aggregate stddev on columns */
export type Pre_Commit_Stddev_Fields = {
  __typename?: 'pre_commit_stddev_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposer_priority?: Maybe<Scalars['Float']['output']>;
  voting_power?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "pre_commit" */
export type Pre_Commit_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  proposer_priority?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Pre_Commit_Stddev_Pop_Fields = {
  __typename?: 'pre_commit_stddev_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposer_priority?: Maybe<Scalars['Float']['output']>;
  voting_power?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "pre_commit" */
export type Pre_Commit_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  proposer_priority?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Pre_Commit_Stddev_Samp_Fields = {
  __typename?: 'pre_commit_stddev_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposer_priority?: Maybe<Scalars['Float']['output']>;
  voting_power?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "pre_commit" */
export type Pre_Commit_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  proposer_priority?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "pre_commit" */
export type Pre_Commit_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Pre_Commit_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Pre_Commit_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
  proposer_priority?: InputMaybe<Scalars['bigint']['input']>;
  timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  validator_address?: InputMaybe<Scalars['String']['input']>;
  voting_power?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Pre_Commit_Sum_Fields = {
  __typename?: 'pre_commit_sum_fields';
  height?: Maybe<Scalars['bigint']['output']>;
  proposer_priority?: Maybe<Scalars['bigint']['output']>;
  voting_power?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "pre_commit" */
export type Pre_Commit_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  proposer_priority?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Pre_Commit_Var_Pop_Fields = {
  __typename?: 'pre_commit_var_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposer_priority?: Maybe<Scalars['Float']['output']>;
  voting_power?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "pre_commit" */
export type Pre_Commit_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  proposer_priority?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Pre_Commit_Var_Samp_Fields = {
  __typename?: 'pre_commit_var_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposer_priority?: Maybe<Scalars['Float']['output']>;
  voting_power?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "pre_commit" */
export type Pre_Commit_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  proposer_priority?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Pre_Commit_Variance_Fields = {
  __typename?: 'pre_commit_variance_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposer_priority?: Maybe<Scalars['Float']['output']>;
  voting_power?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "pre_commit" */
export type Pre_Commit_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  proposer_priority?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** columns and relationships of "proposal" */
export type Proposal = {
  __typename?: 'proposal';
  content: Scalars['jsonb']['output'];
  deposit_end_time?: Maybe<Scalars['timestamp']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  /** An array relationship */
  proposal_deposits: Array<Proposal_Deposit>;
  proposal_route: Scalars['String']['output'];
  /** An object relationship */
  proposal_tally_result?: Maybe<Proposal_Tally_Result>;
  /** An array relationship */
  proposal_tally_results: Array<Proposal_Tally_Result>;
  proposal_type: Scalars['String']['output'];
  /** An array relationship */
  proposal_votes: Array<Proposal_Vote>;
  /** An object relationship */
  proposer: Account;
  proposer_address: Scalars['String']['output'];
  /** An object relationship */
  staking_pool_snapshot?: Maybe<Proposal_Staking_Pool_Snapshot>;
  status?: Maybe<Scalars['String']['output']>;
  submit_time: Scalars['timestamp']['output'];
  title: Scalars['String']['output'];
  /** An array relationship */
  validator_status_snapshots: Array<Proposal_Validator_Status_Snapshot>;
  voting_end_time?: Maybe<Scalars['timestamp']['output']>;
  voting_start_time?: Maybe<Scalars['timestamp']['output']>;
};


/** columns and relationships of "proposal" */
export type ProposalContentArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "proposal" */
export type ProposalProposal_DepositsArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Deposit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Deposit_Order_By>>;
  where?: InputMaybe<Proposal_Deposit_Bool_Exp>;
};


/** columns and relationships of "proposal" */
export type ProposalProposal_Tally_ResultsArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Tally_Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Tally_Result_Order_By>>;
  where?: InputMaybe<Proposal_Tally_Result_Bool_Exp>;
};


/** columns and relationships of "proposal" */
export type ProposalProposal_VotesArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Vote_Order_By>>;
  where?: InputMaybe<Proposal_Vote_Bool_Exp>;
};


/** columns and relationships of "proposal" */
export type ProposalValidator_Status_SnapshotsArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Order_By>>;
  where?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
};

/** aggregated selection of "proposal" */
export type Proposal_Aggregate = {
  __typename?: 'proposal_aggregate';
  aggregate?: Maybe<Proposal_Aggregate_Fields>;
  nodes: Array<Proposal>;
};

export type Proposal_Aggregate_Bool_Exp = {
  count?: InputMaybe<Proposal_Aggregate_Bool_Exp_Count>;
};

export type Proposal_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Proposal_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Proposal_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "proposal" */
export type Proposal_Aggregate_Fields = {
  __typename?: 'proposal_aggregate_fields';
  avg?: Maybe<Proposal_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Proposal_Max_Fields>;
  min?: Maybe<Proposal_Min_Fields>;
  stddev?: Maybe<Proposal_Stddev_Fields>;
  stddev_pop?: Maybe<Proposal_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Proposal_Stddev_Samp_Fields>;
  sum?: Maybe<Proposal_Sum_Fields>;
  var_pop?: Maybe<Proposal_Var_Pop_Fields>;
  var_samp?: Maybe<Proposal_Var_Samp_Fields>;
  variance?: Maybe<Proposal_Variance_Fields>;
};


/** aggregate fields of "proposal" */
export type Proposal_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Proposal_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "proposal" */
export type Proposal_Aggregate_Order_By = {
  avg?: InputMaybe<Proposal_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Proposal_Max_Order_By>;
  min?: InputMaybe<Proposal_Min_Order_By>;
  stddev?: InputMaybe<Proposal_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Proposal_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Proposal_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Proposal_Sum_Order_By>;
  var_pop?: InputMaybe<Proposal_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Proposal_Var_Samp_Order_By>;
  variance?: InputMaybe<Proposal_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Proposal_Avg_Fields = {
  __typename?: 'proposal_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "proposal" */
export type Proposal_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "proposal". All fields are combined with a logical 'AND'. */
export type Proposal_Bool_Exp = {
  _and?: InputMaybe<Array<Proposal_Bool_Exp>>;
  _not?: InputMaybe<Proposal_Bool_Exp>;
  _or?: InputMaybe<Array<Proposal_Bool_Exp>>;
  content?: InputMaybe<Jsonb_Comparison_Exp>;
  deposit_end_time?: InputMaybe<Timestamp_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  proposal_deposits?: InputMaybe<Proposal_Deposit_Bool_Exp>;
  proposal_route?: InputMaybe<String_Comparison_Exp>;
  proposal_tally_result?: InputMaybe<Proposal_Tally_Result_Bool_Exp>;
  proposal_tally_results?: InputMaybe<Proposal_Tally_Result_Bool_Exp>;
  proposal_type?: InputMaybe<String_Comparison_Exp>;
  proposal_votes?: InputMaybe<Proposal_Vote_Bool_Exp>;
  proposer?: InputMaybe<Account_Bool_Exp>;
  proposer_address?: InputMaybe<String_Comparison_Exp>;
  staking_pool_snapshot?: InputMaybe<Proposal_Staking_Pool_Snapshot_Bool_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  submit_time?: InputMaybe<Timestamp_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  validator_status_snapshots?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
  voting_end_time?: InputMaybe<Timestamp_Comparison_Exp>;
  voting_start_time?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** columns and relationships of "proposal_deposit" */
export type Proposal_Deposit = {
  __typename?: 'proposal_deposit';
  amount?: Maybe<Scalars['_coin']['output']>;
  /** An object relationship */
  block?: Maybe<Block>;
  /** An object relationship */
  depositor?: Maybe<Account>;
  depositor_address?: Maybe<Scalars['String']['output']>;
  height: Scalars['bigint']['output'];
  /** An object relationship */
  proposal: Proposal;
  proposal_id: Scalars['Int']['output'];
  timestamp?: Maybe<Scalars['timestamp']['output']>;
};

/** order by aggregate values of table "proposal_deposit" */
export type Proposal_Deposit_Aggregate_Order_By = {
  avg?: InputMaybe<Proposal_Deposit_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Proposal_Deposit_Max_Order_By>;
  min?: InputMaybe<Proposal_Deposit_Min_Order_By>;
  stddev?: InputMaybe<Proposal_Deposit_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Proposal_Deposit_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Proposal_Deposit_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Proposal_Deposit_Sum_Order_By>;
  var_pop?: InputMaybe<Proposal_Deposit_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Proposal_Deposit_Var_Samp_Order_By>;
  variance?: InputMaybe<Proposal_Deposit_Variance_Order_By>;
};

/** order by avg() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "proposal_deposit". All fields are combined with a logical 'AND'. */
export type Proposal_Deposit_Bool_Exp = {
  _and?: InputMaybe<Array<Proposal_Deposit_Bool_Exp>>;
  _not?: InputMaybe<Proposal_Deposit_Bool_Exp>;
  _or?: InputMaybe<Array<Proposal_Deposit_Bool_Exp>>;
  amount?: InputMaybe<_Coin_Comparison_Exp>;
  block?: InputMaybe<Block_Bool_Exp>;
  depositor?: InputMaybe<Account_Bool_Exp>;
  depositor_address?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  proposal?: InputMaybe<Proposal_Bool_Exp>;
  proposal_id?: InputMaybe<Int_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** order by max() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Max_Order_By = {
  depositor_address?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Min_Order_By = {
  depositor_address?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "proposal_deposit". */
export type Proposal_Deposit_Order_By = {
  amount?: InputMaybe<Order_By>;
  block?: InputMaybe<Block_Order_By>;
  depositor?: InputMaybe<Account_Order_By>;
  depositor_address?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  proposal?: InputMaybe<Proposal_Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
};

/** select columns of table "proposal_deposit" */
export enum Proposal_Deposit_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  DepositorAddress = 'depositor_address',
  /** column name */
  Height = 'height',
  /** column name */
  ProposalId = 'proposal_id',
  /** column name */
  Timestamp = 'timestamp'
}

/** order by stddev() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "proposal_deposit" */
export type Proposal_Deposit_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Proposal_Deposit_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Proposal_Deposit_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['_coin']['input']>;
  depositor_address?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  proposal_id?: InputMaybe<Scalars['Int']['input']>;
  timestamp?: InputMaybe<Scalars['timestamp']['input']>;
};

/** order by sum() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate max on columns */
export type Proposal_Max_Fields = {
  __typename?: 'proposal_max_fields';
  deposit_end_time?: Maybe<Scalars['timestamp']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  proposal_route?: Maybe<Scalars['String']['output']>;
  proposal_type?: Maybe<Scalars['String']['output']>;
  proposer_address?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  submit_time?: Maybe<Scalars['timestamp']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  voting_end_time?: Maybe<Scalars['timestamp']['output']>;
  voting_start_time?: Maybe<Scalars['timestamp']['output']>;
};

/** order by max() on columns of table "proposal" */
export type Proposal_Max_Order_By = {
  deposit_end_time?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  proposal_route?: InputMaybe<Order_By>;
  proposal_type?: InputMaybe<Order_By>;
  proposer_address?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  submit_time?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  voting_end_time?: InputMaybe<Order_By>;
  voting_start_time?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Proposal_Min_Fields = {
  __typename?: 'proposal_min_fields';
  deposit_end_time?: Maybe<Scalars['timestamp']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  proposal_route?: Maybe<Scalars['String']['output']>;
  proposal_type?: Maybe<Scalars['String']['output']>;
  proposer_address?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  submit_time?: Maybe<Scalars['timestamp']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  voting_end_time?: Maybe<Scalars['timestamp']['output']>;
  voting_start_time?: Maybe<Scalars['timestamp']['output']>;
};

/** order by min() on columns of table "proposal" */
export type Proposal_Min_Order_By = {
  deposit_end_time?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  proposal_route?: InputMaybe<Order_By>;
  proposal_type?: InputMaybe<Order_By>;
  proposer_address?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  submit_time?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  voting_end_time?: InputMaybe<Order_By>;
  voting_start_time?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "proposal". */
export type Proposal_Order_By = {
  content?: InputMaybe<Order_By>;
  deposit_end_time?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  proposal_deposits_aggregate?: InputMaybe<Proposal_Deposit_Aggregate_Order_By>;
  proposal_route?: InputMaybe<Order_By>;
  proposal_tally_result?: InputMaybe<Proposal_Tally_Result_Order_By>;
  proposal_tally_results_aggregate?: InputMaybe<Proposal_Tally_Result_Aggregate_Order_By>;
  proposal_type?: InputMaybe<Order_By>;
  proposal_votes_aggregate?: InputMaybe<Proposal_Vote_Aggregate_Order_By>;
  proposer?: InputMaybe<Account_Order_By>;
  proposer_address?: InputMaybe<Order_By>;
  staking_pool_snapshot?: InputMaybe<Proposal_Staking_Pool_Snapshot_Order_By>;
  status?: InputMaybe<Order_By>;
  submit_time?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  validator_status_snapshots_aggregate?: InputMaybe<Proposal_Validator_Status_Snapshot_Aggregate_Order_By>;
  voting_end_time?: InputMaybe<Order_By>;
  voting_start_time?: InputMaybe<Order_By>;
};

/** select columns of table "proposal" */
export enum Proposal_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  DepositEndTime = 'deposit_end_time',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ProposalRoute = 'proposal_route',
  /** column name */
  ProposalType = 'proposal_type',
  /** column name */
  ProposerAddress = 'proposer_address',
  /** column name */
  Status = 'status',
  /** column name */
  SubmitTime = 'submit_time',
  /** column name */
  Title = 'title',
  /** column name */
  VotingEndTime = 'voting_end_time',
  /** column name */
  VotingStartTime = 'voting_start_time'
}

/** columns and relationships of "proposal_staking_pool_snapshot" */
export type Proposal_Staking_Pool_Snapshot = {
  __typename?: 'proposal_staking_pool_snapshot';
  bonded_tokens: Scalars['String']['output'];
  height: Scalars['bigint']['output'];
  not_bonded_tokens: Scalars['String']['output'];
  /** An object relationship */
  proposal: Proposal;
  proposal_id: Scalars['Int']['output'];
};

/** Boolean expression to filter rows from the table "proposal_staking_pool_snapshot". All fields are combined with a logical 'AND'. */
export type Proposal_Staking_Pool_Snapshot_Bool_Exp = {
  _and?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Bool_Exp>>;
  _not?: InputMaybe<Proposal_Staking_Pool_Snapshot_Bool_Exp>;
  _or?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Bool_Exp>>;
  bonded_tokens?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  not_bonded_tokens?: InputMaybe<String_Comparison_Exp>;
  proposal?: InputMaybe<Proposal_Bool_Exp>;
  proposal_id?: InputMaybe<Int_Comparison_Exp>;
};

/** Ordering options when selecting data from "proposal_staking_pool_snapshot". */
export type Proposal_Staking_Pool_Snapshot_Order_By = {
  bonded_tokens?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  not_bonded_tokens?: InputMaybe<Order_By>;
  proposal?: InputMaybe<Proposal_Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** select columns of table "proposal_staking_pool_snapshot" */
export enum Proposal_Staking_Pool_Snapshot_Select_Column {
  /** column name */
  BondedTokens = 'bonded_tokens',
  /** column name */
  Height = 'height',
  /** column name */
  NotBondedTokens = 'not_bonded_tokens',
  /** column name */
  ProposalId = 'proposal_id'
}

/** Streaming cursor of the table "proposal_staking_pool_snapshot" */
export type Proposal_Staking_Pool_Snapshot_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Proposal_Staking_Pool_Snapshot_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Proposal_Staking_Pool_Snapshot_Stream_Cursor_Value_Input = {
  bonded_tokens?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  not_bonded_tokens?: InputMaybe<Scalars['String']['input']>;
  proposal_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Proposal_Stddev_Fields = {
  __typename?: 'proposal_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "proposal" */
export type Proposal_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Proposal_Stddev_Pop_Fields = {
  __typename?: 'proposal_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "proposal" */
export type Proposal_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Proposal_Stddev_Samp_Fields = {
  __typename?: 'proposal_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "proposal" */
export type Proposal_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "proposal" */
export type Proposal_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Proposal_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Proposal_Stream_Cursor_Value_Input = {
  content?: InputMaybe<Scalars['jsonb']['input']>;
  deposit_end_time?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  proposal_route?: InputMaybe<Scalars['String']['input']>;
  proposal_type?: InputMaybe<Scalars['String']['input']>;
  proposer_address?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  submit_time?: InputMaybe<Scalars['timestamp']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  voting_end_time?: InputMaybe<Scalars['timestamp']['input']>;
  voting_start_time?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate sum on columns */
export type Proposal_Sum_Fields = {
  __typename?: 'proposal_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "proposal" */
export type Proposal_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "proposal_tally_result" */
export type Proposal_Tally_Result = {
  __typename?: 'proposal_tally_result';
  abstain: Scalars['String']['output'];
  height: Scalars['bigint']['output'];
  no: Scalars['String']['output'];
  no_with_veto: Scalars['String']['output'];
  /** An object relationship */
  proposal: Proposal;
  proposal_id: Scalars['Int']['output'];
  yes: Scalars['String']['output'];
};

/** order by aggregate values of table "proposal_tally_result" */
export type Proposal_Tally_Result_Aggregate_Order_By = {
  avg?: InputMaybe<Proposal_Tally_Result_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Proposal_Tally_Result_Max_Order_By>;
  min?: InputMaybe<Proposal_Tally_Result_Min_Order_By>;
  stddev?: InputMaybe<Proposal_Tally_Result_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Proposal_Tally_Result_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Proposal_Tally_Result_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Proposal_Tally_Result_Sum_Order_By>;
  var_pop?: InputMaybe<Proposal_Tally_Result_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Proposal_Tally_Result_Var_Samp_Order_By>;
  variance?: InputMaybe<Proposal_Tally_Result_Variance_Order_By>;
};

/** order by avg() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "proposal_tally_result". All fields are combined with a logical 'AND'. */
export type Proposal_Tally_Result_Bool_Exp = {
  _and?: InputMaybe<Array<Proposal_Tally_Result_Bool_Exp>>;
  _not?: InputMaybe<Proposal_Tally_Result_Bool_Exp>;
  _or?: InputMaybe<Array<Proposal_Tally_Result_Bool_Exp>>;
  abstain?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  no?: InputMaybe<String_Comparison_Exp>;
  no_with_veto?: InputMaybe<String_Comparison_Exp>;
  proposal?: InputMaybe<Proposal_Bool_Exp>;
  proposal_id?: InputMaybe<Int_Comparison_Exp>;
  yes?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Max_Order_By = {
  abstain?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  no?: InputMaybe<Order_By>;
  no_with_veto?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  yes?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Min_Order_By = {
  abstain?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  no?: InputMaybe<Order_By>;
  no_with_veto?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  yes?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "proposal_tally_result". */
export type Proposal_Tally_Result_Order_By = {
  abstain?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  no?: InputMaybe<Order_By>;
  no_with_veto?: InputMaybe<Order_By>;
  proposal?: InputMaybe<Proposal_Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  yes?: InputMaybe<Order_By>;
};

/** select columns of table "proposal_tally_result" */
export enum Proposal_Tally_Result_Select_Column {
  /** column name */
  Abstain = 'abstain',
  /** column name */
  Height = 'height',
  /** column name */
  No = 'no',
  /** column name */
  NoWithVeto = 'no_with_veto',
  /** column name */
  ProposalId = 'proposal_id',
  /** column name */
  Yes = 'yes'
}

/** order by stddev() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "proposal_tally_result" */
export type Proposal_Tally_Result_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Proposal_Tally_Result_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Proposal_Tally_Result_Stream_Cursor_Value_Input = {
  abstain?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  no?: InputMaybe<Scalars['String']['input']>;
  no_with_veto?: InputMaybe<Scalars['String']['input']>;
  proposal_id?: InputMaybe<Scalars['Int']['input']>;
  yes?: InputMaybe<Scalars['String']['input']>;
};

/** order by sum() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot = {
  __typename?: 'proposal_validator_status_snapshot';
  height: Scalars['bigint']['output'];
  jailed: Scalars['Boolean']['output'];
  /** An object relationship */
  proposal?: Maybe<Proposal>;
  proposal_id?: Maybe<Scalars['Int']['output']>;
  status: Scalars['Int']['output'];
  /** An object relationship */
  validator: Validator;
  validator_address: Scalars['String']['output'];
  voting_power: Scalars['bigint']['output'];
};

/** order by aggregate values of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Aggregate_Order_By = {
  avg?: InputMaybe<Proposal_Validator_Status_Snapshot_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Proposal_Validator_Status_Snapshot_Max_Order_By>;
  min?: InputMaybe<Proposal_Validator_Status_Snapshot_Min_Order_By>;
  stddev?: InputMaybe<Proposal_Validator_Status_Snapshot_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Proposal_Validator_Status_Snapshot_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Proposal_Validator_Status_Snapshot_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Proposal_Validator_Status_Snapshot_Sum_Order_By>;
  var_pop?: InputMaybe<Proposal_Validator_Status_Snapshot_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Proposal_Validator_Status_Snapshot_Var_Samp_Order_By>;
  variance?: InputMaybe<Proposal_Validator_Status_Snapshot_Variance_Order_By>;
};

/** order by avg() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "proposal_validator_status_snapshot". All fields are combined with a logical 'AND'. */
export type Proposal_Validator_Status_Snapshot_Bool_Exp = {
  _and?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Bool_Exp>>;
  _not?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
  _or?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Bool_Exp>>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  jailed?: InputMaybe<Boolean_Comparison_Exp>;
  proposal?: InputMaybe<Proposal_Bool_Exp>;
  proposal_id?: InputMaybe<Int_Comparison_Exp>;
  status?: InputMaybe<Int_Comparison_Exp>;
  validator?: InputMaybe<Validator_Bool_Exp>;
  validator_address?: InputMaybe<String_Comparison_Exp>;
  voting_power?: InputMaybe<Bigint_Comparison_Exp>;
};

/** order by max() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Max_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Min_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "proposal_validator_status_snapshot". */
export type Proposal_Validator_Status_Snapshot_Order_By = {
  height?: InputMaybe<Order_By>;
  jailed?: InputMaybe<Order_By>;
  proposal?: InputMaybe<Proposal_Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  validator?: InputMaybe<Validator_Order_By>;
  validator_address?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** select columns of table "proposal_validator_status_snapshot" */
export enum Proposal_Validator_Status_Snapshot_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Jailed = 'jailed',
  /** column name */
  ProposalId = 'proposal_id',
  /** column name */
  Status = 'status',
  /** column name */
  ValidatorAddress = 'validator_address',
  /** column name */
  VotingPower = 'voting_power'
}

/** order by stddev() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Proposal_Validator_Status_Snapshot_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Proposal_Validator_Status_Snapshot_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
  jailed?: InputMaybe<Scalars['Boolean']['input']>;
  proposal_id?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  validator_address?: InputMaybe<Scalars['String']['input']>;
  voting_power?: InputMaybe<Scalars['bigint']['input']>;
};

/** order by sum() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Proposal_Var_Pop_Fields = {
  __typename?: 'proposal_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "proposal" */
export type Proposal_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Proposal_Var_Samp_Fields = {
  __typename?: 'proposal_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "proposal" */
export type Proposal_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Proposal_Variance_Fields = {
  __typename?: 'proposal_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "proposal" */
export type Proposal_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "proposal_vote" */
export type Proposal_Vote = {
  __typename?: 'proposal_vote';
  /** An object relationship */
  account: Account;
  /** An object relationship */
  block?: Maybe<Block>;
  height: Scalars['bigint']['output'];
  option: Scalars['String']['output'];
  /** An object relationship */
  proposal: Proposal;
  proposal_id: Scalars['Int']['output'];
  timestamp?: Maybe<Scalars['timestamp']['output']>;
  voter_address: Scalars['String']['output'];
};

/** order by aggregate values of table "proposal_vote" */
export type Proposal_Vote_Aggregate_Order_By = {
  avg?: InputMaybe<Proposal_Vote_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Proposal_Vote_Max_Order_By>;
  min?: InputMaybe<Proposal_Vote_Min_Order_By>;
  stddev?: InputMaybe<Proposal_Vote_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Proposal_Vote_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Proposal_Vote_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Proposal_Vote_Sum_Order_By>;
  var_pop?: InputMaybe<Proposal_Vote_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Proposal_Vote_Var_Samp_Order_By>;
  variance?: InputMaybe<Proposal_Vote_Variance_Order_By>;
};

/** order by avg() on columns of table "proposal_vote" */
export type Proposal_Vote_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "proposal_vote". All fields are combined with a logical 'AND'. */
export type Proposal_Vote_Bool_Exp = {
  _and?: InputMaybe<Array<Proposal_Vote_Bool_Exp>>;
  _not?: InputMaybe<Proposal_Vote_Bool_Exp>;
  _or?: InputMaybe<Array<Proposal_Vote_Bool_Exp>>;
  account?: InputMaybe<Account_Bool_Exp>;
  block?: InputMaybe<Block_Bool_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  option?: InputMaybe<String_Comparison_Exp>;
  proposal?: InputMaybe<Proposal_Bool_Exp>;
  proposal_id?: InputMaybe<Int_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamp_Comparison_Exp>;
  voter_address?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "proposal_vote" */
export type Proposal_Vote_Max_Order_By = {
  height?: InputMaybe<Order_By>;
  option?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  voter_address?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "proposal_vote" */
export type Proposal_Vote_Min_Order_By = {
  height?: InputMaybe<Order_By>;
  option?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  voter_address?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "proposal_vote". */
export type Proposal_Vote_Order_By = {
  account?: InputMaybe<Account_Order_By>;
  block?: InputMaybe<Block_Order_By>;
  height?: InputMaybe<Order_By>;
  option?: InputMaybe<Order_By>;
  proposal?: InputMaybe<Proposal_Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  voter_address?: InputMaybe<Order_By>;
};

/** select columns of table "proposal_vote" */
export enum Proposal_Vote_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Option = 'option',
  /** column name */
  ProposalId = 'proposal_id',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  VoterAddress = 'voter_address'
}

/** order by stddev() on columns of table "proposal_vote" */
export type Proposal_Vote_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "proposal_vote" */
export type Proposal_Vote_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "proposal_vote" */
export type Proposal_Vote_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "proposal_vote" */
export type Proposal_Vote_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Proposal_Vote_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Proposal_Vote_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
  option?: InputMaybe<Scalars['String']['input']>;
  proposal_id?: InputMaybe<Scalars['Int']['input']>;
  timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  voter_address?: InputMaybe<Scalars['String']['input']>;
};

/** order by sum() on columns of table "proposal_vote" */
export type Proposal_Vote_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "proposal_vote" */
export type Proposal_Vote_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "proposal_vote" */
export type Proposal_Vote_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "proposal_vote" */
export type Proposal_Vote_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "account" */
  account: Array<Account>;
  /** fetch data from the table: "account" using primary key columns */
  account_by_pk?: Maybe<Account>;
  /** fetch data from the table: "accumulator_params" */
  accumulator_params: Array<Accumulator_Params>;
  action_account_balance?: Maybe<ActionBalance>;
  action_delegation?: Maybe<ActionDelegationResponse>;
  action_delegation_reward?: Maybe<Array<Maybe<ActionDelegationReward>>>;
  action_delegation_total?: Maybe<ActionBalance>;
  action_delegator_withdraw_address: ActionAddress;
  action_redelegation?: Maybe<ActionRedelegationResponse>;
  action_unbonding_delegation?: Maybe<ActionUnbondingDelegationResponse>;
  action_unbonding_delegation_total?: Maybe<ActionBalance>;
  action_validator_commission_amount?: Maybe<ActionValidatorCommissionAmount>;
  action_validator_delegations?: Maybe<ActionDelegationResponse>;
  action_validator_redelegations_from?: Maybe<ActionRedelegationResponse>;
  action_validator_unbonding_delegations?: Maybe<ActionUnbondingDelegationResponse>;
  /** fetch data from the table: "admins_vesting" */
  admins_vesting: Array<Admins_Vesting>;
  /** fetch data from the table: "admins_vesting" using primary key columns */
  admins_vesting_by_pk?: Maybe<Admins_Vesting>;
  /** fetch data from the table: "average_block_time_from_genesis" */
  average_block_time_from_genesis: Array<Average_Block_Time_From_Genesis>;
  /** fetch data from the table: "average_block_time_per_day" */
  average_block_time_per_day: Array<Average_Block_Time_Per_Day>;
  /** fetch data from the table: "average_block_time_per_hour" */
  average_block_time_per_hour: Array<Average_Block_Time_Per_Hour>;
  /** fetch data from the table: "average_block_time_per_minute" */
  average_block_time_per_minute: Array<Average_Block_Time_Per_Minute>;
  /** fetch data from the table: "block" */
  block: Array<Block>;
  /** fetch data from the table: "block" using primary key columns */
  block_by_pk?: Maybe<Block>;
  /** fetch data from the table: "bridge_chains" */
  bridge_chains: Array<Bridge_Chains>;
  /** fetch data from the table: "bridge_chains" using primary key columns */
  bridge_chains_by_pk?: Maybe<Bridge_Chains>;
  /** fetch data from the table: "bridge_params" */
  bridge_params: Array<Bridge_Params>;
  /** fetch data from the table: "bridge_params" using primary key columns */
  bridge_params_by_pk?: Maybe<Bridge_Params>;
  /** fetch data from the table: "bridge_token_metadata" */
  bridge_token_metadata: Array<Bridge_Token_Metadata>;
  /** fetch data from the table: "bridge_token_metadata" using primary key columns */
  bridge_token_metadata_by_pk?: Maybe<Bridge_Token_Metadata>;
  /** An array relationship */
  bridge_tokens: Array<Bridge_Tokens>;
  /** fetch data from the table: "bridge_tokens" using primary key columns */
  bridge_tokens_by_pk?: Maybe<Bridge_Tokens>;
  /** fetch data from the table: "bridge_tokens_info" */
  bridge_tokens_info: Array<Bridge_Tokens_Info>;
  /** fetch data from the table: "bridge_tokens_info" using primary key columns */
  bridge_tokens_info_by_pk?: Maybe<Bridge_Tokens_Info>;
  /** fetch data from the table: "bridge_transaction_submissions" */
  bridge_transaction_submissions: Array<Bridge_Transaction_Submissions>;
  /** fetch data from the table: "bridge_transaction_submissions" using primary key columns */
  bridge_transaction_submissions_by_pk?: Maybe<Bridge_Transaction_Submissions>;
  /** fetch data from the table: "bridge_transactions" */
  bridge_transactions: Array<Bridge_Transactions>;
  /** fetch data from the table: "bridge_transactions" using primary key columns */
  bridge_transactions_by_pk?: Maybe<Bridge_Transactions>;
  /** fetch data from the table: "community_pool" */
  community_pool: Array<Community_Pool>;
  /** fetch data from the table: "distribution_params" */
  distribution_params: Array<Distribution_Params>;
  /** fetch data from the table: "double_sign_evidence" */
  double_sign_evidence: Array<Double_Sign_Evidence>;
  /** fetch data from the table: "double_sign_vote" */
  double_sign_vote: Array<Double_Sign_Vote>;
  /** fetch data from the table: "fee_grant_allowance" */
  fee_grant_allowance: Array<Fee_Grant_Allowance>;
  /** fetch data from the table: "genesis" */
  genesis: Array<Genesis>;
  /** fetch data from the table: "gov_params" */
  gov_params: Array<Gov_Params>;
  /** fetch data from the table: "group" */
  group: Array<Group>;
  /** fetch aggregated fields from the table: "group" */
  group_aggregate: Group_Aggregate;
  /** fetch data from the table: "group" using primary key columns */
  group_by_pk?: Maybe<Group>;
  /** fetch data from the table: "inflation" */
  inflation: Array<Inflation>;
  /** fetch data from the table: "message" */
  message: Array<Message>;
  /** execute function "messages_by_address" which returns "message" */
  messages_by_address: Array<Message>;
  /** execute function "messages_by_type" which returns "message" */
  messages_by_type: Array<Message>;
  /** fetch data from the table: "mint_params" */
  mint_params: Array<Mint_Params>;
  /** fetch data from the table: "modules" */
  modules: Array<Modules>;
  /** fetch data from the table: "modules" using primary key columns */
  modules_by_pk?: Maybe<Modules>;
  /** fetch data from the table: "multisig_params" */
  multisig_params: Array<Multisig_Params>;
  /** fetch aggregated fields from the table: "multisig_params" */
  multisig_params_aggregate: Multisig_Params_Aggregate;
  /** fetch data from the table: "multisig_params" using primary key columns */
  multisig_params_by_pk?: Maybe<Multisig_Params>;
  /** fetch data from the table: "multisig_proposal" */
  multisig_proposal: Array<Multisig_Proposal>;
  /** fetch aggregated fields from the table: "multisig_proposal" */
  multisig_proposal_aggregate: Multisig_Proposal_Aggregate;
  /** fetch data from the table: "multisig_proposal" using primary key columns */
  multisig_proposal_by_pk?: Maybe<Multisig_Proposal>;
  /** fetch data from the table: "multisig_proposal_vote" */
  multisig_proposal_vote: Array<Multisig_Proposal_Vote>;
  /** fetch aggregated fields from the table: "multisig_proposal_vote" */
  multisig_proposal_vote_aggregate: Multisig_Proposal_Vote_Aggregate;
  /** fetch data from the table: "multisig_proposal_vote" using primary key columns */
  multisig_proposal_vote_by_pk?: Maybe<Multisig_Proposal_Vote>;
  /** fetch data from the table: "nft_events" */
  nft_events: Array<Nft_Events>;
  /** fetch data from the table: "nfts" */
  nfts: Array<Nfts>;
  /** fetch data from the table: "pre_commit" */
  pre_commit: Array<Pre_Commit>;
  /** fetch aggregated fields from the table: "pre_commit" */
  pre_commit_aggregate: Pre_Commit_Aggregate;
  /** fetch data from the table: "proposal" */
  proposal: Array<Proposal>;
  /** fetch aggregated fields from the table: "proposal" */
  proposal_aggregate: Proposal_Aggregate;
  /** fetch data from the table: "proposal" using primary key columns */
  proposal_by_pk?: Maybe<Proposal>;
  /** fetch data from the table: "proposal_deposit" */
  proposal_deposit: Array<Proposal_Deposit>;
  /** fetch data from the table: "proposal_staking_pool_snapshot" */
  proposal_staking_pool_snapshot: Array<Proposal_Staking_Pool_Snapshot>;
  /** fetch data from the table: "proposal_staking_pool_snapshot" using primary key columns */
  proposal_staking_pool_snapshot_by_pk?: Maybe<Proposal_Staking_Pool_Snapshot>;
  /** fetch data from the table: "proposal_tally_result" */
  proposal_tally_result: Array<Proposal_Tally_Result>;
  /** fetch data from the table: "proposal_tally_result" using primary key columns */
  proposal_tally_result_by_pk?: Maybe<Proposal_Tally_Result>;
  /** fetch data from the table: "proposal_validator_status_snapshot" */
  proposal_validator_status_snapshot: Array<Proposal_Validator_Status_Snapshot>;
  /** fetch data from the table: "proposal_vote" */
  proposal_vote: Array<Proposal_Vote>;
  /** fetch data from the table: "slashing_params" */
  slashing_params: Array<Slashing_Params>;
  /** fetch data from the table: "software_upgrade_plan" */
  software_upgrade_plan: Array<Software_Upgrade_Plan>;
  /** fetch aggregated fields from the table: "software_upgrade_plan" */
  software_upgrade_plan_aggregate: Software_Upgrade_Plan_Aggregate;
  /** fetch data from the table: "staking_params" */
  staking_params: Array<Staking_Params>;
  /** fetch data from the table: "staking_pool" */
  staking_pool: Array<Staking_Pool>;
  /** fetch data from the table: "supply" */
  supply: Array<Supply>;
  /** fetch data from the table: "token" */
  token: Array<Token>;
  /** fetch data from the table: "token_price" */
  token_price: Array<Token_Price>;
  /** fetch data from the table: "token_price_history" */
  token_price_history: Array<Token_Price_History>;
  /** fetch data from the table: "token_unit" */
  token_unit: Array<Token_Unit>;
  /** fetch data from the table: "transaction" */
  transaction: Array<Transaction>;
  /** fetch data from the table: "validator" */
  validator: Array<Validator>;
  /** fetch data from the table: "validator" using primary key columns */
  validator_by_pk?: Maybe<Validator>;
  /** fetch data from the table: "validator_commission" */
  validator_commission: Array<Validator_Commission>;
  /** fetch data from the table: "validator_commission" using primary key columns */
  validator_commission_by_pk?: Maybe<Validator_Commission>;
  /** fetch data from the table: "validator_description" */
  validator_description: Array<Validator_Description>;
  /** fetch data from the table: "validator_description" using primary key columns */
  validator_description_by_pk?: Maybe<Validator_Description>;
  /** fetch data from the table: "validator_info" */
  validator_info: Array<Validator_Info>;
  /** fetch data from the table: "validator_info" using primary key columns */
  validator_info_by_pk?: Maybe<Validator_Info>;
  /** fetch data from the table: "validator_signing_info" */
  validator_signing_info: Array<Validator_Signing_Info>;
  /** fetch data from the table: "validator_signing_info" using primary key columns */
  validator_signing_info_by_pk?: Maybe<Validator_Signing_Info>;
  /** fetch data from the table: "validator_status" */
  validator_status: Array<Validator_Status>;
  /** fetch aggregated fields from the table: "validator_status" */
  validator_status_aggregate: Validator_Status_Aggregate;
  /** fetch data from the table: "validator_status" using primary key columns */
  validator_status_by_pk?: Maybe<Validator_Status>;
  /** fetch data from the table: "validator_voting_power" */
  validator_voting_power: Array<Validator_Voting_Power>;
  /** fetch aggregated fields from the table: "validator_voting_power" */
  validator_voting_power_aggregate: Validator_Voting_Power_Aggregate;
  /** fetch data from the table: "validator_voting_power" using primary key columns */
  validator_voting_power_by_pk?: Maybe<Validator_Voting_Power>;
  /** fetch data from the table: "vesting_account" */
  vesting_account: Array<Vesting_Account>;
  /** fetch data from the table: "vesting_period" */
  vesting_period: Array<Vesting_Period>;
};


export type Query_RootAccountArgs = {
  distinct_on?: InputMaybe<Array<Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Account_Order_By>>;
  where?: InputMaybe<Account_Bool_Exp>;
};


export type Query_RootAccount_By_PkArgs = {
  address: Scalars['String']['input'];
};


export type Query_RootAccumulator_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Accumulator_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Accumulator_Params_Order_By>>;
  where?: InputMaybe<Accumulator_Params_Bool_Exp>;
};


export type Query_RootAction_Account_BalanceArgs = {
  address: Scalars['String']['input'];
  height?: InputMaybe<Scalars['Int']['input']>;
};


export type Query_RootAction_DelegationArgs = {
  address: Scalars['String']['input'];
  count_total?: InputMaybe<Scalars['Boolean']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type Query_RootAction_Delegation_RewardArgs = {
  address: Scalars['String']['input'];
  height?: InputMaybe<Scalars['Int']['input']>;
};


export type Query_RootAction_Delegation_TotalArgs = {
  address: Scalars['String']['input'];
  height?: InputMaybe<Scalars['Int']['input']>;
};


export type Query_RootAction_Delegator_Withdraw_AddressArgs = {
  address: Scalars['String']['input'];
};


export type Query_RootAction_RedelegationArgs = {
  address: Scalars['String']['input'];
  count_total?: InputMaybe<Scalars['Boolean']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type Query_RootAction_Unbonding_DelegationArgs = {
  address: Scalars['String']['input'];
  count_total?: InputMaybe<Scalars['Boolean']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type Query_RootAction_Unbonding_Delegation_TotalArgs = {
  address: Scalars['String']['input'];
  height?: InputMaybe<Scalars['Int']['input']>;
};


export type Query_RootAction_Validator_Commission_AmountArgs = {
  address: Scalars['String']['input'];
};


export type Query_RootAction_Validator_DelegationsArgs = {
  address: Scalars['String']['input'];
  count_total?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type Query_RootAction_Validator_Redelegations_FromArgs = {
  address: Scalars['String']['input'];
  count_total?: InputMaybe<Scalars['Boolean']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type Query_RootAction_Validator_Unbonding_DelegationsArgs = {
  address: Scalars['String']['input'];
  count_total?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type Query_RootAdmins_VestingArgs = {
  distinct_on?: InputMaybe<Array<Admins_Vesting_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Admins_Vesting_Order_By>>;
  where?: InputMaybe<Admins_Vesting_Bool_Exp>;
};


export type Query_RootAdmins_Vesting_By_PkArgs = {
  address: Scalars['String']['input'];
};


export type Query_RootAverage_Block_Time_From_GenesisArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_From_Genesis_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Average_Block_Time_From_Genesis_Order_By>>;
  where?: InputMaybe<Average_Block_Time_From_Genesis_Bool_Exp>;
};


export type Query_RootAverage_Block_Time_Per_DayArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Day_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Day_Order_By>>;
  where?: InputMaybe<Average_Block_Time_Per_Day_Bool_Exp>;
};


export type Query_RootAverage_Block_Time_Per_HourArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Hour_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Hour_Order_By>>;
  where?: InputMaybe<Average_Block_Time_Per_Hour_Bool_Exp>;
};


export type Query_RootAverage_Block_Time_Per_MinuteArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Minute_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Minute_Order_By>>;
  where?: InputMaybe<Average_Block_Time_Per_Minute_Bool_Exp>;
};


export type Query_RootBlockArgs = {
  distinct_on?: InputMaybe<Array<Block_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Block_Order_By>>;
  where?: InputMaybe<Block_Bool_Exp>;
};


export type Query_RootBlock_By_PkArgs = {
  height: Scalars['bigint']['input'];
};


export type Query_RootBridge_ChainsArgs = {
  distinct_on?: InputMaybe<Array<Bridge_Chains_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bridge_Chains_Order_By>>;
  where?: InputMaybe<Bridge_Chains_Bool_Exp>;
};


export type Query_RootBridge_Chains_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootBridge_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Bridge_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bridge_Params_Order_By>>;
  where?: InputMaybe<Bridge_Params_Bool_Exp>;
};


export type Query_RootBridge_Params_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootBridge_Token_MetadataArgs = {
  distinct_on?: InputMaybe<Array<Bridge_Token_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bridge_Token_Metadata_Order_By>>;
  where?: InputMaybe<Bridge_Token_Metadata_Bool_Exp>;
};


export type Query_RootBridge_Token_Metadata_By_PkArgs = {
  token_id: Scalars['String']['input'];
};


export type Query_RootBridge_TokensArgs = {
  distinct_on?: InputMaybe<Array<Bridge_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bridge_Tokens_Order_By>>;
  where?: InputMaybe<Bridge_Tokens_Bool_Exp>;
};


export type Query_RootBridge_Tokens_By_PkArgs = {
  metadata_id: Scalars['String']['input'];
  tokens_info_id: Scalars['bigint']['input'];
};


export type Query_RootBridge_Tokens_InfoArgs = {
  distinct_on?: InputMaybe<Array<Bridge_Tokens_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bridge_Tokens_Info_Order_By>>;
  where?: InputMaybe<Bridge_Tokens_Info_Bool_Exp>;
};


export type Query_RootBridge_Tokens_Info_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootBridge_Transaction_SubmissionsArgs = {
  distinct_on?: InputMaybe<Array<Bridge_Transaction_Submissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bridge_Transaction_Submissions_Order_By>>;
  where?: InputMaybe<Bridge_Transaction_Submissions_Bool_Exp>;
};


export type Query_RootBridge_Transaction_Submissions_By_PkArgs = {
  tx_hash: Scalars['String']['input'];
};


export type Query_RootBridge_TransactionsArgs = {
  distinct_on?: InputMaybe<Array<Bridge_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bridge_Transactions_Order_By>>;
  where?: InputMaybe<Bridge_Transactions_Bool_Exp>;
};


export type Query_RootBridge_Transactions_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootCommunity_PoolArgs = {
  distinct_on?: InputMaybe<Array<Community_Pool_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Community_Pool_Order_By>>;
  where?: InputMaybe<Community_Pool_Bool_Exp>;
};


export type Query_RootDistribution_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Distribution_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Distribution_Params_Order_By>>;
  where?: InputMaybe<Distribution_Params_Bool_Exp>;
};


export type Query_RootDouble_Sign_EvidenceArgs = {
  distinct_on?: InputMaybe<Array<Double_Sign_Evidence_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Double_Sign_Evidence_Order_By>>;
  where?: InputMaybe<Double_Sign_Evidence_Bool_Exp>;
};


export type Query_RootDouble_Sign_VoteArgs = {
  distinct_on?: InputMaybe<Array<Double_Sign_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Double_Sign_Vote_Order_By>>;
  where?: InputMaybe<Double_Sign_Vote_Bool_Exp>;
};


export type Query_RootFee_Grant_AllowanceArgs = {
  distinct_on?: InputMaybe<Array<Fee_Grant_Allowance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fee_Grant_Allowance_Order_By>>;
  where?: InputMaybe<Fee_Grant_Allowance_Bool_Exp>;
};


export type Query_RootGenesisArgs = {
  distinct_on?: InputMaybe<Array<Genesis_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Genesis_Order_By>>;
  where?: InputMaybe<Genesis_Bool_Exp>;
};


export type Query_RootGov_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Gov_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Gov_Params_Order_By>>;
  where?: InputMaybe<Gov_Params_Bool_Exp>;
};


export type Query_RootGroupArgs = {
  distinct_on?: InputMaybe<Array<Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Group_Order_By>>;
  where?: InputMaybe<Group_Bool_Exp>;
};


export type Query_RootGroup_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Group_Order_By>>;
  where?: InputMaybe<Group_Bool_Exp>;
};


export type Query_RootGroup_By_PkArgs = {
  account: Scalars['String']['input'];
};


export type Query_RootInflationArgs = {
  distinct_on?: InputMaybe<Array<Inflation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Inflation_Order_By>>;
  where?: InputMaybe<Inflation_Bool_Exp>;
};


export type Query_RootMessageArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Query_RootMessages_By_AddressArgs = {
  args: Messages_By_Address_Args;
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Query_RootMessages_By_TypeArgs = {
  args: Messages_By_Type_Args;
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Query_RootMint_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Mint_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mint_Params_Order_By>>;
  where?: InputMaybe<Mint_Params_Bool_Exp>;
};


export type Query_RootModulesArgs = {
  distinct_on?: InputMaybe<Array<Modules_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Modules_Order_By>>;
  where?: InputMaybe<Modules_Bool_Exp>;
};


export type Query_RootModules_By_PkArgs = {
  module_name: Scalars['String']['input'];
};


export type Query_RootMultisig_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Multisig_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Multisig_Params_Order_By>>;
  where?: InputMaybe<Multisig_Params_Bool_Exp>;
};


export type Query_RootMultisig_Params_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Multisig_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Multisig_Params_Order_By>>;
  where?: InputMaybe<Multisig_Params_Bool_Exp>;
};


export type Query_RootMultisig_Params_By_PkArgs = {
  one_row_id: Scalars['Boolean']['input'];
};


export type Query_RootMultisig_ProposalArgs = {
  distinct_on?: InputMaybe<Array<Multisig_Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Multisig_Proposal_Order_By>>;
  where?: InputMaybe<Multisig_Proposal_Bool_Exp>;
};


export type Query_RootMultisig_Proposal_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Multisig_Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Multisig_Proposal_Order_By>>;
  where?: InputMaybe<Multisig_Proposal_Bool_Exp>;
};


export type Query_RootMultisig_Proposal_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootMultisig_Proposal_VoteArgs = {
  distinct_on?: InputMaybe<Array<Multisig_Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Multisig_Proposal_Vote_Order_By>>;
  where?: InputMaybe<Multisig_Proposal_Vote_Bool_Exp>;
};


export type Query_RootMultisig_Proposal_Vote_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Multisig_Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Multisig_Proposal_Vote_Order_By>>;
  where?: InputMaybe<Multisig_Proposal_Vote_Bool_Exp>;
};


export type Query_RootMultisig_Proposal_Vote_By_PkArgs = {
  index: Scalars['String']['input'];
};


export type Query_RootNft_EventsArgs = {
  distinct_on?: InputMaybe<Array<Nft_Events_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Events_Order_By>>;
  where?: InputMaybe<Nft_Events_Bool_Exp>;
};


export type Query_RootNftsArgs = {
  distinct_on?: InputMaybe<Array<Nfts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nfts_Order_By>>;
  where?: InputMaybe<Nfts_Bool_Exp>;
};


export type Query_RootPre_CommitArgs = {
  distinct_on?: InputMaybe<Array<Pre_Commit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pre_Commit_Order_By>>;
  where?: InputMaybe<Pre_Commit_Bool_Exp>;
};


export type Query_RootPre_Commit_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pre_Commit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pre_Commit_Order_By>>;
  where?: InputMaybe<Pre_Commit_Bool_Exp>;
};


export type Query_RootProposalArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Order_By>>;
  where?: InputMaybe<Proposal_Bool_Exp>;
};


export type Query_RootProposal_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Order_By>>;
  where?: InputMaybe<Proposal_Bool_Exp>;
};


export type Query_RootProposal_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootProposal_DepositArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Deposit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Deposit_Order_By>>;
  where?: InputMaybe<Proposal_Deposit_Bool_Exp>;
};


export type Query_RootProposal_Staking_Pool_SnapshotArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Order_By>>;
  where?: InputMaybe<Proposal_Staking_Pool_Snapshot_Bool_Exp>;
};


export type Query_RootProposal_Staking_Pool_Snapshot_By_PkArgs = {
  proposal_id: Scalars['Int']['input'];
};


export type Query_RootProposal_Tally_ResultArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Tally_Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Tally_Result_Order_By>>;
  where?: InputMaybe<Proposal_Tally_Result_Bool_Exp>;
};


export type Query_RootProposal_Tally_Result_By_PkArgs = {
  proposal_id: Scalars['Int']['input'];
};


export type Query_RootProposal_Validator_Status_SnapshotArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Order_By>>;
  where?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
};


export type Query_RootProposal_VoteArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Vote_Order_By>>;
  where?: InputMaybe<Proposal_Vote_Bool_Exp>;
};


export type Query_RootSlashing_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Slashing_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Slashing_Params_Order_By>>;
  where?: InputMaybe<Slashing_Params_Bool_Exp>;
};


export type Query_RootSoftware_Upgrade_PlanArgs = {
  distinct_on?: InputMaybe<Array<Software_Upgrade_Plan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Software_Upgrade_Plan_Order_By>>;
  where?: InputMaybe<Software_Upgrade_Plan_Bool_Exp>;
};


export type Query_RootSoftware_Upgrade_Plan_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Software_Upgrade_Plan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Software_Upgrade_Plan_Order_By>>;
  where?: InputMaybe<Software_Upgrade_Plan_Bool_Exp>;
};


export type Query_RootStaking_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Staking_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staking_Params_Order_By>>;
  where?: InputMaybe<Staking_Params_Bool_Exp>;
};


export type Query_RootStaking_PoolArgs = {
  distinct_on?: InputMaybe<Array<Staking_Pool_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staking_Pool_Order_By>>;
  where?: InputMaybe<Staking_Pool_Bool_Exp>;
};


export type Query_RootSupplyArgs = {
  distinct_on?: InputMaybe<Array<Supply_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Supply_Order_By>>;
  where?: InputMaybe<Supply_Bool_Exp>;
};


export type Query_RootTokenArgs = {
  distinct_on?: InputMaybe<Array<Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Token_Order_By>>;
  where?: InputMaybe<Token_Bool_Exp>;
};


export type Query_RootToken_PriceArgs = {
  distinct_on?: InputMaybe<Array<Token_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Token_Price_Order_By>>;
  where?: InputMaybe<Token_Price_Bool_Exp>;
};


export type Query_RootToken_Price_HistoryArgs = {
  distinct_on?: InputMaybe<Array<Token_Price_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Token_Price_History_Order_By>>;
  where?: InputMaybe<Token_Price_History_Bool_Exp>;
};


export type Query_RootToken_UnitArgs = {
  distinct_on?: InputMaybe<Array<Token_Unit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Token_Unit_Order_By>>;
  where?: InputMaybe<Token_Unit_Bool_Exp>;
};


export type Query_RootTransactionArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Query_RootValidatorArgs = {
  distinct_on?: InputMaybe<Array<Validator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Order_By>>;
  where?: InputMaybe<Validator_Bool_Exp>;
};


export type Query_RootValidator_By_PkArgs = {
  consensus_address: Scalars['String']['input'];
};


export type Query_RootValidator_CommissionArgs = {
  distinct_on?: InputMaybe<Array<Validator_Commission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Commission_Order_By>>;
  where?: InputMaybe<Validator_Commission_Bool_Exp>;
};


export type Query_RootValidator_Commission_By_PkArgs = {
  validator_address: Scalars['String']['input'];
};


export type Query_RootValidator_DescriptionArgs = {
  distinct_on?: InputMaybe<Array<Validator_Description_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Description_Order_By>>;
  where?: InputMaybe<Validator_Description_Bool_Exp>;
};


export type Query_RootValidator_Description_By_PkArgs = {
  validator_address: Scalars['String']['input'];
};


export type Query_RootValidator_InfoArgs = {
  distinct_on?: InputMaybe<Array<Validator_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Info_Order_By>>;
  where?: InputMaybe<Validator_Info_Bool_Exp>;
};


export type Query_RootValidator_Info_By_PkArgs = {
  consensus_address: Scalars['String']['input'];
};


export type Query_RootValidator_Signing_InfoArgs = {
  distinct_on?: InputMaybe<Array<Validator_Signing_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Signing_Info_Order_By>>;
  where?: InputMaybe<Validator_Signing_Info_Bool_Exp>;
};


export type Query_RootValidator_Signing_Info_By_PkArgs = {
  validator_address: Scalars['String']['input'];
};


export type Query_RootValidator_StatusArgs = {
  distinct_on?: InputMaybe<Array<Validator_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Status_Order_By>>;
  where?: InputMaybe<Validator_Status_Bool_Exp>;
};


export type Query_RootValidator_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Status_Order_By>>;
  where?: InputMaybe<Validator_Status_Bool_Exp>;
};


export type Query_RootValidator_Status_By_PkArgs = {
  validator_address: Scalars['String']['input'];
};


export type Query_RootValidator_Voting_PowerArgs = {
  distinct_on?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Voting_Power_Order_By>>;
  where?: InputMaybe<Validator_Voting_Power_Bool_Exp>;
};


export type Query_RootValidator_Voting_Power_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Voting_Power_Order_By>>;
  where?: InputMaybe<Validator_Voting_Power_Bool_Exp>;
};


export type Query_RootValidator_Voting_Power_By_PkArgs = {
  validator_address: Scalars['String']['input'];
};


export type Query_RootVesting_AccountArgs = {
  distinct_on?: InputMaybe<Array<Vesting_Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vesting_Account_Order_By>>;
  where?: InputMaybe<Vesting_Account_Bool_Exp>;
};


export type Query_RootVesting_PeriodArgs = {
  distinct_on?: InputMaybe<Array<Vesting_Period_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vesting_Period_Order_By>>;
  where?: InputMaybe<Vesting_Period_Bool_Exp>;
};

/** columns and relationships of "slashing_params" */
export type Slashing_Params = {
  __typename?: 'slashing_params';
  height: Scalars['bigint']['output'];
  params: Scalars['jsonb']['output'];
};


/** columns and relationships of "slashing_params" */
export type Slashing_ParamsParamsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to filter rows from the table "slashing_params". All fields are combined with a logical 'AND'. */
export type Slashing_Params_Bool_Exp = {
  _and?: InputMaybe<Array<Slashing_Params_Bool_Exp>>;
  _not?: InputMaybe<Slashing_Params_Bool_Exp>;
  _or?: InputMaybe<Array<Slashing_Params_Bool_Exp>>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  params?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** Ordering options when selecting data from "slashing_params". */
export type Slashing_Params_Order_By = {
  height?: InputMaybe<Order_By>;
  params?: InputMaybe<Order_By>;
};

/** select columns of table "slashing_params" */
export enum Slashing_Params_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Params = 'params'
}

/** Streaming cursor of the table "slashing_params" */
export type Slashing_Params_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Slashing_Params_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Slashing_Params_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
  params?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export type Smallint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['smallint']['input']>;
  _gt?: InputMaybe<Scalars['smallint']['input']>;
  _gte?: InputMaybe<Scalars['smallint']['input']>;
  _in?: InputMaybe<Array<Scalars['smallint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['smallint']['input']>;
  _lte?: InputMaybe<Scalars['smallint']['input']>;
  _neq?: InputMaybe<Scalars['smallint']['input']>;
  _nin?: InputMaybe<Array<Scalars['smallint']['input']>>;
};

/** columns and relationships of "software_upgrade_plan" */
export type Software_Upgrade_Plan = {
  __typename?: 'software_upgrade_plan';
  height: Scalars['bigint']['output'];
  info: Scalars['String']['output'];
  plan_name: Scalars['String']['output'];
  /** An object relationship */
  proposal?: Maybe<Proposal>;
  proposal_id?: Maybe<Scalars['Int']['output']>;
  upgrade_height: Scalars['bigint']['output'];
};

/** aggregated selection of "software_upgrade_plan" */
export type Software_Upgrade_Plan_Aggregate = {
  __typename?: 'software_upgrade_plan_aggregate';
  aggregate?: Maybe<Software_Upgrade_Plan_Aggregate_Fields>;
  nodes: Array<Software_Upgrade_Plan>;
};

/** aggregate fields of "software_upgrade_plan" */
export type Software_Upgrade_Plan_Aggregate_Fields = {
  __typename?: 'software_upgrade_plan_aggregate_fields';
  avg?: Maybe<Software_Upgrade_Plan_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Software_Upgrade_Plan_Max_Fields>;
  min?: Maybe<Software_Upgrade_Plan_Min_Fields>;
  stddev?: Maybe<Software_Upgrade_Plan_Stddev_Fields>;
  stddev_pop?: Maybe<Software_Upgrade_Plan_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Software_Upgrade_Plan_Stddev_Samp_Fields>;
  sum?: Maybe<Software_Upgrade_Plan_Sum_Fields>;
  var_pop?: Maybe<Software_Upgrade_Plan_Var_Pop_Fields>;
  var_samp?: Maybe<Software_Upgrade_Plan_Var_Samp_Fields>;
  variance?: Maybe<Software_Upgrade_Plan_Variance_Fields>;
};


/** aggregate fields of "software_upgrade_plan" */
export type Software_Upgrade_Plan_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Software_Upgrade_Plan_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Software_Upgrade_Plan_Avg_Fields = {
  __typename?: 'software_upgrade_plan_avg_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
  upgrade_height?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "software_upgrade_plan". All fields are combined with a logical 'AND'. */
export type Software_Upgrade_Plan_Bool_Exp = {
  _and?: InputMaybe<Array<Software_Upgrade_Plan_Bool_Exp>>;
  _not?: InputMaybe<Software_Upgrade_Plan_Bool_Exp>;
  _or?: InputMaybe<Array<Software_Upgrade_Plan_Bool_Exp>>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  info?: InputMaybe<String_Comparison_Exp>;
  plan_name?: InputMaybe<String_Comparison_Exp>;
  proposal?: InputMaybe<Proposal_Bool_Exp>;
  proposal_id?: InputMaybe<Int_Comparison_Exp>;
  upgrade_height?: InputMaybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Software_Upgrade_Plan_Max_Fields = {
  __typename?: 'software_upgrade_plan_max_fields';
  height?: Maybe<Scalars['bigint']['output']>;
  info?: Maybe<Scalars['String']['output']>;
  plan_name?: Maybe<Scalars['String']['output']>;
  proposal_id?: Maybe<Scalars['Int']['output']>;
  upgrade_height?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type Software_Upgrade_Plan_Min_Fields = {
  __typename?: 'software_upgrade_plan_min_fields';
  height?: Maybe<Scalars['bigint']['output']>;
  info?: Maybe<Scalars['String']['output']>;
  plan_name?: Maybe<Scalars['String']['output']>;
  proposal_id?: Maybe<Scalars['Int']['output']>;
  upgrade_height?: Maybe<Scalars['bigint']['output']>;
};

/** Ordering options when selecting data from "software_upgrade_plan". */
export type Software_Upgrade_Plan_Order_By = {
  height?: InputMaybe<Order_By>;
  info?: InputMaybe<Order_By>;
  plan_name?: InputMaybe<Order_By>;
  proposal?: InputMaybe<Proposal_Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  upgrade_height?: InputMaybe<Order_By>;
};

/** select columns of table "software_upgrade_plan" */
export enum Software_Upgrade_Plan_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Info = 'info',
  /** column name */
  PlanName = 'plan_name',
  /** column name */
  ProposalId = 'proposal_id',
  /** column name */
  UpgradeHeight = 'upgrade_height'
}

/** aggregate stddev on columns */
export type Software_Upgrade_Plan_Stddev_Fields = {
  __typename?: 'software_upgrade_plan_stddev_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
  upgrade_height?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Software_Upgrade_Plan_Stddev_Pop_Fields = {
  __typename?: 'software_upgrade_plan_stddev_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
  upgrade_height?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Software_Upgrade_Plan_Stddev_Samp_Fields = {
  __typename?: 'software_upgrade_plan_stddev_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
  upgrade_height?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "software_upgrade_plan" */
export type Software_Upgrade_Plan_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Software_Upgrade_Plan_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Software_Upgrade_Plan_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
  info?: InputMaybe<Scalars['String']['input']>;
  plan_name?: InputMaybe<Scalars['String']['input']>;
  proposal_id?: InputMaybe<Scalars['Int']['input']>;
  upgrade_height?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Software_Upgrade_Plan_Sum_Fields = {
  __typename?: 'software_upgrade_plan_sum_fields';
  height?: Maybe<Scalars['bigint']['output']>;
  proposal_id?: Maybe<Scalars['Int']['output']>;
  upgrade_height?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type Software_Upgrade_Plan_Var_Pop_Fields = {
  __typename?: 'software_upgrade_plan_var_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
  upgrade_height?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Software_Upgrade_Plan_Var_Samp_Fields = {
  __typename?: 'software_upgrade_plan_var_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
  upgrade_height?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Software_Upgrade_Plan_Variance_Fields = {
  __typename?: 'software_upgrade_plan_variance_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
  upgrade_height?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "staking_params" */
export type Staking_Params = {
  __typename?: 'staking_params';
  height: Scalars['bigint']['output'];
  params: Scalars['jsonb']['output'];
};


/** columns and relationships of "staking_params" */
export type Staking_ParamsParamsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to filter rows from the table "staking_params". All fields are combined with a logical 'AND'. */
export type Staking_Params_Bool_Exp = {
  _and?: InputMaybe<Array<Staking_Params_Bool_Exp>>;
  _not?: InputMaybe<Staking_Params_Bool_Exp>;
  _or?: InputMaybe<Array<Staking_Params_Bool_Exp>>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  params?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** Ordering options when selecting data from "staking_params". */
export type Staking_Params_Order_By = {
  height?: InputMaybe<Order_By>;
  params?: InputMaybe<Order_By>;
};

/** select columns of table "staking_params" */
export enum Staking_Params_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Params = 'params'
}

/** Streaming cursor of the table "staking_params" */
export type Staking_Params_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Staking_Params_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Staking_Params_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
  params?: InputMaybe<Scalars['jsonb']['input']>;
};

/** columns and relationships of "staking_pool" */
export type Staking_Pool = {
  __typename?: 'staking_pool';
  bonded_tokens: Scalars['String']['output'];
  height: Scalars['bigint']['output'];
  not_bonded_tokens: Scalars['String']['output'];
  staked_not_bonded_tokens: Scalars['String']['output'];
  unbonding_tokens: Scalars['String']['output'];
};

/** Boolean expression to filter rows from the table "staking_pool". All fields are combined with a logical 'AND'. */
export type Staking_Pool_Bool_Exp = {
  _and?: InputMaybe<Array<Staking_Pool_Bool_Exp>>;
  _not?: InputMaybe<Staking_Pool_Bool_Exp>;
  _or?: InputMaybe<Array<Staking_Pool_Bool_Exp>>;
  bonded_tokens?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  not_bonded_tokens?: InputMaybe<String_Comparison_Exp>;
  staked_not_bonded_tokens?: InputMaybe<String_Comparison_Exp>;
  unbonding_tokens?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "staking_pool". */
export type Staking_Pool_Order_By = {
  bonded_tokens?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  not_bonded_tokens?: InputMaybe<Order_By>;
  staked_not_bonded_tokens?: InputMaybe<Order_By>;
  unbonding_tokens?: InputMaybe<Order_By>;
};

/** select columns of table "staking_pool" */
export enum Staking_Pool_Select_Column {
  /** column name */
  BondedTokens = 'bonded_tokens',
  /** column name */
  Height = 'height',
  /** column name */
  NotBondedTokens = 'not_bonded_tokens',
  /** column name */
  StakedNotBondedTokens = 'staked_not_bonded_tokens',
  /** column name */
  UnbondingTokens = 'unbonding_tokens'
}

/** Streaming cursor of the table "staking_pool" */
export type Staking_Pool_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Staking_Pool_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Staking_Pool_Stream_Cursor_Value_Input = {
  bonded_tokens?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  not_bonded_tokens?: InputMaybe<Scalars['String']['input']>;
  staked_not_bonded_tokens?: InputMaybe<Scalars['String']['input']>;
  unbonding_tokens?: InputMaybe<Scalars['String']['input']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "account" */
  account: Array<Account>;
  /** fetch data from the table: "account" using primary key columns */
  account_by_pk?: Maybe<Account>;
  /** fetch data from the table in a streaming manner: "account" */
  account_stream: Array<Account>;
  /** fetch data from the table: "accumulator_params" */
  accumulator_params: Array<Accumulator_Params>;
  /** fetch data from the table in a streaming manner: "accumulator_params" */
  accumulator_params_stream: Array<Accumulator_Params>;
  /** fetch data from the table: "admins_vesting" */
  admins_vesting: Array<Admins_Vesting>;
  /** fetch data from the table: "admins_vesting" using primary key columns */
  admins_vesting_by_pk?: Maybe<Admins_Vesting>;
  /** fetch data from the table in a streaming manner: "admins_vesting" */
  admins_vesting_stream: Array<Admins_Vesting>;
  /** fetch data from the table: "average_block_time_from_genesis" */
  average_block_time_from_genesis: Array<Average_Block_Time_From_Genesis>;
  /** fetch data from the table in a streaming manner: "average_block_time_from_genesis" */
  average_block_time_from_genesis_stream: Array<Average_Block_Time_From_Genesis>;
  /** fetch data from the table: "average_block_time_per_day" */
  average_block_time_per_day: Array<Average_Block_Time_Per_Day>;
  /** fetch data from the table in a streaming manner: "average_block_time_per_day" */
  average_block_time_per_day_stream: Array<Average_Block_Time_Per_Day>;
  /** fetch data from the table: "average_block_time_per_hour" */
  average_block_time_per_hour: Array<Average_Block_Time_Per_Hour>;
  /** fetch data from the table in a streaming manner: "average_block_time_per_hour" */
  average_block_time_per_hour_stream: Array<Average_Block_Time_Per_Hour>;
  /** fetch data from the table: "average_block_time_per_minute" */
  average_block_time_per_minute: Array<Average_Block_Time_Per_Minute>;
  /** fetch data from the table in a streaming manner: "average_block_time_per_minute" */
  average_block_time_per_minute_stream: Array<Average_Block_Time_Per_Minute>;
  /** fetch data from the table: "block" */
  block: Array<Block>;
  /** fetch data from the table: "block" using primary key columns */
  block_by_pk?: Maybe<Block>;
  /** fetch data from the table in a streaming manner: "block" */
  block_stream: Array<Block>;
  /** fetch data from the table: "bridge_chains" */
  bridge_chains: Array<Bridge_Chains>;
  /** fetch data from the table: "bridge_chains" using primary key columns */
  bridge_chains_by_pk?: Maybe<Bridge_Chains>;
  /** fetch data from the table in a streaming manner: "bridge_chains" */
  bridge_chains_stream: Array<Bridge_Chains>;
  /** fetch data from the table: "bridge_params" */
  bridge_params: Array<Bridge_Params>;
  /** fetch data from the table: "bridge_params" using primary key columns */
  bridge_params_by_pk?: Maybe<Bridge_Params>;
  /** fetch data from the table in a streaming manner: "bridge_params" */
  bridge_params_stream: Array<Bridge_Params>;
  /** fetch data from the table: "bridge_token_metadata" */
  bridge_token_metadata: Array<Bridge_Token_Metadata>;
  /** fetch data from the table: "bridge_token_metadata" using primary key columns */
  bridge_token_metadata_by_pk?: Maybe<Bridge_Token_Metadata>;
  /** fetch data from the table in a streaming manner: "bridge_token_metadata" */
  bridge_token_metadata_stream: Array<Bridge_Token_Metadata>;
  /** An array relationship */
  bridge_tokens: Array<Bridge_Tokens>;
  /** fetch data from the table: "bridge_tokens" using primary key columns */
  bridge_tokens_by_pk?: Maybe<Bridge_Tokens>;
  /** fetch data from the table: "bridge_tokens_info" */
  bridge_tokens_info: Array<Bridge_Tokens_Info>;
  /** fetch data from the table: "bridge_tokens_info" using primary key columns */
  bridge_tokens_info_by_pk?: Maybe<Bridge_Tokens_Info>;
  /** fetch data from the table in a streaming manner: "bridge_tokens_info" */
  bridge_tokens_info_stream: Array<Bridge_Tokens_Info>;
  /** fetch data from the table in a streaming manner: "bridge_tokens" */
  bridge_tokens_stream: Array<Bridge_Tokens>;
  /** fetch data from the table: "bridge_transaction_submissions" */
  bridge_transaction_submissions: Array<Bridge_Transaction_Submissions>;
  /** fetch data from the table: "bridge_transaction_submissions" using primary key columns */
  bridge_transaction_submissions_by_pk?: Maybe<Bridge_Transaction_Submissions>;
  /** fetch data from the table in a streaming manner: "bridge_transaction_submissions" */
  bridge_transaction_submissions_stream: Array<Bridge_Transaction_Submissions>;
  /** fetch data from the table: "bridge_transactions" */
  bridge_transactions: Array<Bridge_Transactions>;
  /** fetch data from the table: "bridge_transactions" using primary key columns */
  bridge_transactions_by_pk?: Maybe<Bridge_Transactions>;
  /** fetch data from the table in a streaming manner: "bridge_transactions" */
  bridge_transactions_stream: Array<Bridge_Transactions>;
  /** fetch data from the table: "community_pool" */
  community_pool: Array<Community_Pool>;
  /** fetch data from the table in a streaming manner: "community_pool" */
  community_pool_stream: Array<Community_Pool>;
  /** fetch data from the table: "distribution_params" */
  distribution_params: Array<Distribution_Params>;
  /** fetch data from the table in a streaming manner: "distribution_params" */
  distribution_params_stream: Array<Distribution_Params>;
  /** fetch data from the table: "double_sign_evidence" */
  double_sign_evidence: Array<Double_Sign_Evidence>;
  /** fetch data from the table in a streaming manner: "double_sign_evidence" */
  double_sign_evidence_stream: Array<Double_Sign_Evidence>;
  /** fetch data from the table: "double_sign_vote" */
  double_sign_vote: Array<Double_Sign_Vote>;
  /** fetch data from the table in a streaming manner: "double_sign_vote" */
  double_sign_vote_stream: Array<Double_Sign_Vote>;
  /** fetch data from the table: "fee_grant_allowance" */
  fee_grant_allowance: Array<Fee_Grant_Allowance>;
  /** fetch data from the table in a streaming manner: "fee_grant_allowance" */
  fee_grant_allowance_stream: Array<Fee_Grant_Allowance>;
  /** fetch data from the table: "genesis" */
  genesis: Array<Genesis>;
  /** fetch data from the table in a streaming manner: "genesis" */
  genesis_stream: Array<Genesis>;
  /** fetch data from the table: "gov_params" */
  gov_params: Array<Gov_Params>;
  /** fetch data from the table in a streaming manner: "gov_params" */
  gov_params_stream: Array<Gov_Params>;
  /** fetch data from the table: "group" */
  group: Array<Group>;
  /** fetch aggregated fields from the table: "group" */
  group_aggregate: Group_Aggregate;
  /** fetch data from the table: "group" using primary key columns */
  group_by_pk?: Maybe<Group>;
  /** fetch data from the table in a streaming manner: "group" */
  group_stream: Array<Group>;
  /** fetch data from the table: "inflation" */
  inflation: Array<Inflation>;
  /** fetch data from the table in a streaming manner: "inflation" */
  inflation_stream: Array<Inflation>;
  /** fetch data from the table: "message" */
  message: Array<Message>;
  /** fetch data from the table in a streaming manner: "message" */
  message_stream: Array<Message>;
  /** execute function "messages_by_address" which returns "message" */
  messages_by_address: Array<Message>;
  /** execute function "messages_by_type" which returns "message" */
  messages_by_type: Array<Message>;
  /** fetch data from the table: "mint_params" */
  mint_params: Array<Mint_Params>;
  /** fetch data from the table in a streaming manner: "mint_params" */
  mint_params_stream: Array<Mint_Params>;
  /** fetch data from the table: "modules" */
  modules: Array<Modules>;
  /** fetch data from the table: "modules" using primary key columns */
  modules_by_pk?: Maybe<Modules>;
  /** fetch data from the table in a streaming manner: "modules" */
  modules_stream: Array<Modules>;
  /** fetch data from the table: "multisig_params" */
  multisig_params: Array<Multisig_Params>;
  /** fetch aggregated fields from the table: "multisig_params" */
  multisig_params_aggregate: Multisig_Params_Aggregate;
  /** fetch data from the table: "multisig_params" using primary key columns */
  multisig_params_by_pk?: Maybe<Multisig_Params>;
  /** fetch data from the table in a streaming manner: "multisig_params" */
  multisig_params_stream: Array<Multisig_Params>;
  /** fetch data from the table: "multisig_proposal" */
  multisig_proposal: Array<Multisig_Proposal>;
  /** fetch aggregated fields from the table: "multisig_proposal" */
  multisig_proposal_aggregate: Multisig_Proposal_Aggregate;
  /** fetch data from the table: "multisig_proposal" using primary key columns */
  multisig_proposal_by_pk?: Maybe<Multisig_Proposal>;
  /** fetch data from the table in a streaming manner: "multisig_proposal" */
  multisig_proposal_stream: Array<Multisig_Proposal>;
  /** fetch data from the table: "multisig_proposal_vote" */
  multisig_proposal_vote: Array<Multisig_Proposal_Vote>;
  /** fetch aggregated fields from the table: "multisig_proposal_vote" */
  multisig_proposal_vote_aggregate: Multisig_Proposal_Vote_Aggregate;
  /** fetch data from the table: "multisig_proposal_vote" using primary key columns */
  multisig_proposal_vote_by_pk?: Maybe<Multisig_Proposal_Vote>;
  /** fetch data from the table in a streaming manner: "multisig_proposal_vote" */
  multisig_proposal_vote_stream: Array<Multisig_Proposal_Vote>;
  /** fetch data from the table: "nft_events" */
  nft_events: Array<Nft_Events>;
  /** fetch data from the table in a streaming manner: "nft_events" */
  nft_events_stream: Array<Nft_Events>;
  /** fetch data from the table: "nfts" */
  nfts: Array<Nfts>;
  /** fetch data from the table in a streaming manner: "nfts" */
  nfts_stream: Array<Nfts>;
  /** fetch data from the table: "pre_commit" */
  pre_commit: Array<Pre_Commit>;
  /** fetch aggregated fields from the table: "pre_commit" */
  pre_commit_aggregate: Pre_Commit_Aggregate;
  /** fetch data from the table in a streaming manner: "pre_commit" */
  pre_commit_stream: Array<Pre_Commit>;
  /** fetch data from the table: "proposal" */
  proposal: Array<Proposal>;
  /** fetch aggregated fields from the table: "proposal" */
  proposal_aggregate: Proposal_Aggregate;
  /** fetch data from the table: "proposal" using primary key columns */
  proposal_by_pk?: Maybe<Proposal>;
  /** fetch data from the table: "proposal_deposit" */
  proposal_deposit: Array<Proposal_Deposit>;
  /** fetch data from the table in a streaming manner: "proposal_deposit" */
  proposal_deposit_stream: Array<Proposal_Deposit>;
  /** fetch data from the table: "proposal_staking_pool_snapshot" */
  proposal_staking_pool_snapshot: Array<Proposal_Staking_Pool_Snapshot>;
  /** fetch data from the table: "proposal_staking_pool_snapshot" using primary key columns */
  proposal_staking_pool_snapshot_by_pk?: Maybe<Proposal_Staking_Pool_Snapshot>;
  /** fetch data from the table in a streaming manner: "proposal_staking_pool_snapshot" */
  proposal_staking_pool_snapshot_stream: Array<Proposal_Staking_Pool_Snapshot>;
  /** fetch data from the table in a streaming manner: "proposal" */
  proposal_stream: Array<Proposal>;
  /** fetch data from the table: "proposal_tally_result" */
  proposal_tally_result: Array<Proposal_Tally_Result>;
  /** fetch data from the table: "proposal_tally_result" using primary key columns */
  proposal_tally_result_by_pk?: Maybe<Proposal_Tally_Result>;
  /** fetch data from the table in a streaming manner: "proposal_tally_result" */
  proposal_tally_result_stream: Array<Proposal_Tally_Result>;
  /** fetch data from the table: "proposal_validator_status_snapshot" */
  proposal_validator_status_snapshot: Array<Proposal_Validator_Status_Snapshot>;
  /** fetch data from the table in a streaming manner: "proposal_validator_status_snapshot" */
  proposal_validator_status_snapshot_stream: Array<Proposal_Validator_Status_Snapshot>;
  /** fetch data from the table: "proposal_vote" */
  proposal_vote: Array<Proposal_Vote>;
  /** fetch data from the table in a streaming manner: "proposal_vote" */
  proposal_vote_stream: Array<Proposal_Vote>;
  /** fetch data from the table: "slashing_params" */
  slashing_params: Array<Slashing_Params>;
  /** fetch data from the table in a streaming manner: "slashing_params" */
  slashing_params_stream: Array<Slashing_Params>;
  /** fetch data from the table: "software_upgrade_plan" */
  software_upgrade_plan: Array<Software_Upgrade_Plan>;
  /** fetch aggregated fields from the table: "software_upgrade_plan" */
  software_upgrade_plan_aggregate: Software_Upgrade_Plan_Aggregate;
  /** fetch data from the table in a streaming manner: "software_upgrade_plan" */
  software_upgrade_plan_stream: Array<Software_Upgrade_Plan>;
  /** fetch data from the table: "staking_params" */
  staking_params: Array<Staking_Params>;
  /** fetch data from the table in a streaming manner: "staking_params" */
  staking_params_stream: Array<Staking_Params>;
  /** fetch data from the table: "staking_pool" */
  staking_pool: Array<Staking_Pool>;
  /** fetch data from the table in a streaming manner: "staking_pool" */
  staking_pool_stream: Array<Staking_Pool>;
  /** fetch data from the table: "supply" */
  supply: Array<Supply>;
  /** fetch data from the table in a streaming manner: "supply" */
  supply_stream: Array<Supply>;
  /** fetch data from the table: "token" */
  token: Array<Token>;
  /** fetch data from the table: "token_price" */
  token_price: Array<Token_Price>;
  /** fetch data from the table: "token_price_history" */
  token_price_history: Array<Token_Price_History>;
  /** fetch data from the table in a streaming manner: "token_price_history" */
  token_price_history_stream: Array<Token_Price_History>;
  /** fetch data from the table in a streaming manner: "token_price" */
  token_price_stream: Array<Token_Price>;
  /** fetch data from the table in a streaming manner: "token" */
  token_stream: Array<Token>;
  /** fetch data from the table: "token_unit" */
  token_unit: Array<Token_Unit>;
  /** fetch data from the table in a streaming manner: "token_unit" */
  token_unit_stream: Array<Token_Unit>;
  /** fetch data from the table: "transaction" */
  transaction: Array<Transaction>;
  /** fetch data from the table in a streaming manner: "transaction" */
  transaction_stream: Array<Transaction>;
  /** fetch data from the table: "validator" */
  validator: Array<Validator>;
  /** fetch data from the table: "validator" using primary key columns */
  validator_by_pk?: Maybe<Validator>;
  /** fetch data from the table: "validator_commission" */
  validator_commission: Array<Validator_Commission>;
  /** fetch data from the table: "validator_commission" using primary key columns */
  validator_commission_by_pk?: Maybe<Validator_Commission>;
  /** fetch data from the table in a streaming manner: "validator_commission" */
  validator_commission_stream: Array<Validator_Commission>;
  /** fetch data from the table: "validator_description" */
  validator_description: Array<Validator_Description>;
  /** fetch data from the table: "validator_description" using primary key columns */
  validator_description_by_pk?: Maybe<Validator_Description>;
  /** fetch data from the table in a streaming manner: "validator_description" */
  validator_description_stream: Array<Validator_Description>;
  /** fetch data from the table: "validator_info" */
  validator_info: Array<Validator_Info>;
  /** fetch data from the table: "validator_info" using primary key columns */
  validator_info_by_pk?: Maybe<Validator_Info>;
  /** fetch data from the table in a streaming manner: "validator_info" */
  validator_info_stream: Array<Validator_Info>;
  /** fetch data from the table: "validator_signing_info" */
  validator_signing_info: Array<Validator_Signing_Info>;
  /** fetch data from the table: "validator_signing_info" using primary key columns */
  validator_signing_info_by_pk?: Maybe<Validator_Signing_Info>;
  /** fetch data from the table in a streaming manner: "validator_signing_info" */
  validator_signing_info_stream: Array<Validator_Signing_Info>;
  /** fetch data from the table: "validator_status" */
  validator_status: Array<Validator_Status>;
  /** fetch aggregated fields from the table: "validator_status" */
  validator_status_aggregate: Validator_Status_Aggregate;
  /** fetch data from the table: "validator_status" using primary key columns */
  validator_status_by_pk?: Maybe<Validator_Status>;
  /** fetch data from the table in a streaming manner: "validator_status" */
  validator_status_stream: Array<Validator_Status>;
  /** fetch data from the table in a streaming manner: "validator" */
  validator_stream: Array<Validator>;
  /** fetch data from the table: "validator_voting_power" */
  validator_voting_power: Array<Validator_Voting_Power>;
  /** fetch aggregated fields from the table: "validator_voting_power" */
  validator_voting_power_aggregate: Validator_Voting_Power_Aggregate;
  /** fetch data from the table: "validator_voting_power" using primary key columns */
  validator_voting_power_by_pk?: Maybe<Validator_Voting_Power>;
  /** fetch data from the table in a streaming manner: "validator_voting_power" */
  validator_voting_power_stream: Array<Validator_Voting_Power>;
  /** fetch data from the table: "vesting_account" */
  vesting_account: Array<Vesting_Account>;
  /** fetch data from the table in a streaming manner: "vesting_account" */
  vesting_account_stream: Array<Vesting_Account>;
  /** fetch data from the table: "vesting_period" */
  vesting_period: Array<Vesting_Period>;
  /** fetch data from the table in a streaming manner: "vesting_period" */
  vesting_period_stream: Array<Vesting_Period>;
};


export type Subscription_RootAccountArgs = {
  distinct_on?: InputMaybe<Array<Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Account_Order_By>>;
  where?: InputMaybe<Account_Bool_Exp>;
};


export type Subscription_RootAccount_By_PkArgs = {
  address: Scalars['String']['input'];
};


export type Subscription_RootAccount_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Account_Stream_Cursor_Input>>;
  where?: InputMaybe<Account_Bool_Exp>;
};


export type Subscription_RootAccumulator_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Accumulator_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Accumulator_Params_Order_By>>;
  where?: InputMaybe<Accumulator_Params_Bool_Exp>;
};


export type Subscription_RootAccumulator_Params_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Accumulator_Params_Stream_Cursor_Input>>;
  where?: InputMaybe<Accumulator_Params_Bool_Exp>;
};


export type Subscription_RootAdmins_VestingArgs = {
  distinct_on?: InputMaybe<Array<Admins_Vesting_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Admins_Vesting_Order_By>>;
  where?: InputMaybe<Admins_Vesting_Bool_Exp>;
};


export type Subscription_RootAdmins_Vesting_By_PkArgs = {
  address: Scalars['String']['input'];
};


export type Subscription_RootAdmins_Vesting_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Admins_Vesting_Stream_Cursor_Input>>;
  where?: InputMaybe<Admins_Vesting_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_From_GenesisArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_From_Genesis_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Average_Block_Time_From_Genesis_Order_By>>;
  where?: InputMaybe<Average_Block_Time_From_Genesis_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_From_Genesis_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Average_Block_Time_From_Genesis_Stream_Cursor_Input>>;
  where?: InputMaybe<Average_Block_Time_From_Genesis_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_Per_DayArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Day_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Day_Order_By>>;
  where?: InputMaybe<Average_Block_Time_Per_Day_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_Per_Day_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Average_Block_Time_Per_Day_Stream_Cursor_Input>>;
  where?: InputMaybe<Average_Block_Time_Per_Day_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_Per_HourArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Hour_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Hour_Order_By>>;
  where?: InputMaybe<Average_Block_Time_Per_Hour_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_Per_Hour_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Average_Block_Time_Per_Hour_Stream_Cursor_Input>>;
  where?: InputMaybe<Average_Block_Time_Per_Hour_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_Per_MinuteArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Minute_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Minute_Order_By>>;
  where?: InputMaybe<Average_Block_Time_Per_Minute_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_Per_Minute_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Average_Block_Time_Per_Minute_Stream_Cursor_Input>>;
  where?: InputMaybe<Average_Block_Time_Per_Minute_Bool_Exp>;
};


export type Subscription_RootBlockArgs = {
  distinct_on?: InputMaybe<Array<Block_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Block_Order_By>>;
  where?: InputMaybe<Block_Bool_Exp>;
};


export type Subscription_RootBlock_By_PkArgs = {
  height: Scalars['bigint']['input'];
};


export type Subscription_RootBlock_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Block_Stream_Cursor_Input>>;
  where?: InputMaybe<Block_Bool_Exp>;
};


export type Subscription_RootBridge_ChainsArgs = {
  distinct_on?: InputMaybe<Array<Bridge_Chains_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bridge_Chains_Order_By>>;
  where?: InputMaybe<Bridge_Chains_Bool_Exp>;
};


export type Subscription_RootBridge_Chains_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootBridge_Chains_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Bridge_Chains_Stream_Cursor_Input>>;
  where?: InputMaybe<Bridge_Chains_Bool_Exp>;
};


export type Subscription_RootBridge_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Bridge_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bridge_Params_Order_By>>;
  where?: InputMaybe<Bridge_Params_Bool_Exp>;
};


export type Subscription_RootBridge_Params_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootBridge_Params_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Bridge_Params_Stream_Cursor_Input>>;
  where?: InputMaybe<Bridge_Params_Bool_Exp>;
};


export type Subscription_RootBridge_Token_MetadataArgs = {
  distinct_on?: InputMaybe<Array<Bridge_Token_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bridge_Token_Metadata_Order_By>>;
  where?: InputMaybe<Bridge_Token_Metadata_Bool_Exp>;
};


export type Subscription_RootBridge_Token_Metadata_By_PkArgs = {
  token_id: Scalars['String']['input'];
};


export type Subscription_RootBridge_Token_Metadata_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Bridge_Token_Metadata_Stream_Cursor_Input>>;
  where?: InputMaybe<Bridge_Token_Metadata_Bool_Exp>;
};


export type Subscription_RootBridge_TokensArgs = {
  distinct_on?: InputMaybe<Array<Bridge_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bridge_Tokens_Order_By>>;
  where?: InputMaybe<Bridge_Tokens_Bool_Exp>;
};


export type Subscription_RootBridge_Tokens_By_PkArgs = {
  metadata_id: Scalars['String']['input'];
  tokens_info_id: Scalars['bigint']['input'];
};


export type Subscription_RootBridge_Tokens_InfoArgs = {
  distinct_on?: InputMaybe<Array<Bridge_Tokens_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bridge_Tokens_Info_Order_By>>;
  where?: InputMaybe<Bridge_Tokens_Info_Bool_Exp>;
};


export type Subscription_RootBridge_Tokens_Info_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootBridge_Tokens_Info_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Bridge_Tokens_Info_Stream_Cursor_Input>>;
  where?: InputMaybe<Bridge_Tokens_Info_Bool_Exp>;
};


export type Subscription_RootBridge_Tokens_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Bridge_Tokens_Stream_Cursor_Input>>;
  where?: InputMaybe<Bridge_Tokens_Bool_Exp>;
};


export type Subscription_RootBridge_Transaction_SubmissionsArgs = {
  distinct_on?: InputMaybe<Array<Bridge_Transaction_Submissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bridge_Transaction_Submissions_Order_By>>;
  where?: InputMaybe<Bridge_Transaction_Submissions_Bool_Exp>;
};


export type Subscription_RootBridge_Transaction_Submissions_By_PkArgs = {
  tx_hash: Scalars['String']['input'];
};


export type Subscription_RootBridge_Transaction_Submissions_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Bridge_Transaction_Submissions_Stream_Cursor_Input>>;
  where?: InputMaybe<Bridge_Transaction_Submissions_Bool_Exp>;
};


export type Subscription_RootBridge_TransactionsArgs = {
  distinct_on?: InputMaybe<Array<Bridge_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bridge_Transactions_Order_By>>;
  where?: InputMaybe<Bridge_Transactions_Bool_Exp>;
};


export type Subscription_RootBridge_Transactions_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootBridge_Transactions_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Bridge_Transactions_Stream_Cursor_Input>>;
  where?: InputMaybe<Bridge_Transactions_Bool_Exp>;
};


export type Subscription_RootCommunity_PoolArgs = {
  distinct_on?: InputMaybe<Array<Community_Pool_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Community_Pool_Order_By>>;
  where?: InputMaybe<Community_Pool_Bool_Exp>;
};


export type Subscription_RootCommunity_Pool_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Community_Pool_Stream_Cursor_Input>>;
  where?: InputMaybe<Community_Pool_Bool_Exp>;
};


export type Subscription_RootDistribution_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Distribution_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Distribution_Params_Order_By>>;
  where?: InputMaybe<Distribution_Params_Bool_Exp>;
};


export type Subscription_RootDistribution_Params_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Distribution_Params_Stream_Cursor_Input>>;
  where?: InputMaybe<Distribution_Params_Bool_Exp>;
};


export type Subscription_RootDouble_Sign_EvidenceArgs = {
  distinct_on?: InputMaybe<Array<Double_Sign_Evidence_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Double_Sign_Evidence_Order_By>>;
  where?: InputMaybe<Double_Sign_Evidence_Bool_Exp>;
};


export type Subscription_RootDouble_Sign_Evidence_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Double_Sign_Evidence_Stream_Cursor_Input>>;
  where?: InputMaybe<Double_Sign_Evidence_Bool_Exp>;
};


export type Subscription_RootDouble_Sign_VoteArgs = {
  distinct_on?: InputMaybe<Array<Double_Sign_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Double_Sign_Vote_Order_By>>;
  where?: InputMaybe<Double_Sign_Vote_Bool_Exp>;
};


export type Subscription_RootDouble_Sign_Vote_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Double_Sign_Vote_Stream_Cursor_Input>>;
  where?: InputMaybe<Double_Sign_Vote_Bool_Exp>;
};


export type Subscription_RootFee_Grant_AllowanceArgs = {
  distinct_on?: InputMaybe<Array<Fee_Grant_Allowance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fee_Grant_Allowance_Order_By>>;
  where?: InputMaybe<Fee_Grant_Allowance_Bool_Exp>;
};


export type Subscription_RootFee_Grant_Allowance_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Fee_Grant_Allowance_Stream_Cursor_Input>>;
  where?: InputMaybe<Fee_Grant_Allowance_Bool_Exp>;
};


export type Subscription_RootGenesisArgs = {
  distinct_on?: InputMaybe<Array<Genesis_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Genesis_Order_By>>;
  where?: InputMaybe<Genesis_Bool_Exp>;
};


export type Subscription_RootGenesis_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Genesis_Stream_Cursor_Input>>;
  where?: InputMaybe<Genesis_Bool_Exp>;
};


export type Subscription_RootGov_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Gov_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Gov_Params_Order_By>>;
  where?: InputMaybe<Gov_Params_Bool_Exp>;
};


export type Subscription_RootGov_Params_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Gov_Params_Stream_Cursor_Input>>;
  where?: InputMaybe<Gov_Params_Bool_Exp>;
};


export type Subscription_RootGroupArgs = {
  distinct_on?: InputMaybe<Array<Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Group_Order_By>>;
  where?: InputMaybe<Group_Bool_Exp>;
};


export type Subscription_RootGroup_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Group_Order_By>>;
  where?: InputMaybe<Group_Bool_Exp>;
};


export type Subscription_RootGroup_By_PkArgs = {
  account: Scalars['String']['input'];
};


export type Subscription_RootGroup_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Group_Stream_Cursor_Input>>;
  where?: InputMaybe<Group_Bool_Exp>;
};


export type Subscription_RootInflationArgs = {
  distinct_on?: InputMaybe<Array<Inflation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Inflation_Order_By>>;
  where?: InputMaybe<Inflation_Bool_Exp>;
};


export type Subscription_RootInflation_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Inflation_Stream_Cursor_Input>>;
  where?: InputMaybe<Inflation_Bool_Exp>;
};


export type Subscription_RootMessageArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Subscription_RootMessage_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Message_Stream_Cursor_Input>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Subscription_RootMessages_By_AddressArgs = {
  args: Messages_By_Address_Args;
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Subscription_RootMessages_By_TypeArgs = {
  args: Messages_By_Type_Args;
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Subscription_RootMint_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Mint_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mint_Params_Order_By>>;
  where?: InputMaybe<Mint_Params_Bool_Exp>;
};


export type Subscription_RootMint_Params_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Mint_Params_Stream_Cursor_Input>>;
  where?: InputMaybe<Mint_Params_Bool_Exp>;
};


export type Subscription_RootModulesArgs = {
  distinct_on?: InputMaybe<Array<Modules_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Modules_Order_By>>;
  where?: InputMaybe<Modules_Bool_Exp>;
};


export type Subscription_RootModules_By_PkArgs = {
  module_name: Scalars['String']['input'];
};


export type Subscription_RootModules_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Modules_Stream_Cursor_Input>>;
  where?: InputMaybe<Modules_Bool_Exp>;
};


export type Subscription_RootMultisig_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Multisig_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Multisig_Params_Order_By>>;
  where?: InputMaybe<Multisig_Params_Bool_Exp>;
};


export type Subscription_RootMultisig_Params_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Multisig_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Multisig_Params_Order_By>>;
  where?: InputMaybe<Multisig_Params_Bool_Exp>;
};


export type Subscription_RootMultisig_Params_By_PkArgs = {
  one_row_id: Scalars['Boolean']['input'];
};


export type Subscription_RootMultisig_Params_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Multisig_Params_Stream_Cursor_Input>>;
  where?: InputMaybe<Multisig_Params_Bool_Exp>;
};


export type Subscription_RootMultisig_ProposalArgs = {
  distinct_on?: InputMaybe<Array<Multisig_Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Multisig_Proposal_Order_By>>;
  where?: InputMaybe<Multisig_Proposal_Bool_Exp>;
};


export type Subscription_RootMultisig_Proposal_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Multisig_Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Multisig_Proposal_Order_By>>;
  where?: InputMaybe<Multisig_Proposal_Bool_Exp>;
};


export type Subscription_RootMultisig_Proposal_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootMultisig_Proposal_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Multisig_Proposal_Stream_Cursor_Input>>;
  where?: InputMaybe<Multisig_Proposal_Bool_Exp>;
};


export type Subscription_RootMultisig_Proposal_VoteArgs = {
  distinct_on?: InputMaybe<Array<Multisig_Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Multisig_Proposal_Vote_Order_By>>;
  where?: InputMaybe<Multisig_Proposal_Vote_Bool_Exp>;
};


export type Subscription_RootMultisig_Proposal_Vote_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Multisig_Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Multisig_Proposal_Vote_Order_By>>;
  where?: InputMaybe<Multisig_Proposal_Vote_Bool_Exp>;
};


export type Subscription_RootMultisig_Proposal_Vote_By_PkArgs = {
  index: Scalars['String']['input'];
};


export type Subscription_RootMultisig_Proposal_Vote_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Multisig_Proposal_Vote_Stream_Cursor_Input>>;
  where?: InputMaybe<Multisig_Proposal_Vote_Bool_Exp>;
};


export type Subscription_RootNft_EventsArgs = {
  distinct_on?: InputMaybe<Array<Nft_Events_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Events_Order_By>>;
  where?: InputMaybe<Nft_Events_Bool_Exp>;
};


export type Subscription_RootNft_Events_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Nft_Events_Stream_Cursor_Input>>;
  where?: InputMaybe<Nft_Events_Bool_Exp>;
};


export type Subscription_RootNftsArgs = {
  distinct_on?: InputMaybe<Array<Nfts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nfts_Order_By>>;
  where?: InputMaybe<Nfts_Bool_Exp>;
};


export type Subscription_RootNfts_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Nfts_Stream_Cursor_Input>>;
  where?: InputMaybe<Nfts_Bool_Exp>;
};


export type Subscription_RootPre_CommitArgs = {
  distinct_on?: InputMaybe<Array<Pre_Commit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pre_Commit_Order_By>>;
  where?: InputMaybe<Pre_Commit_Bool_Exp>;
};


export type Subscription_RootPre_Commit_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pre_Commit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pre_Commit_Order_By>>;
  where?: InputMaybe<Pre_Commit_Bool_Exp>;
};


export type Subscription_RootPre_Commit_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Pre_Commit_Stream_Cursor_Input>>;
  where?: InputMaybe<Pre_Commit_Bool_Exp>;
};


export type Subscription_RootProposalArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Order_By>>;
  where?: InputMaybe<Proposal_Bool_Exp>;
};


export type Subscription_RootProposal_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Order_By>>;
  where?: InputMaybe<Proposal_Bool_Exp>;
};


export type Subscription_RootProposal_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootProposal_DepositArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Deposit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Deposit_Order_By>>;
  where?: InputMaybe<Proposal_Deposit_Bool_Exp>;
};


export type Subscription_RootProposal_Deposit_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Proposal_Deposit_Stream_Cursor_Input>>;
  where?: InputMaybe<Proposal_Deposit_Bool_Exp>;
};


export type Subscription_RootProposal_Staking_Pool_SnapshotArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Order_By>>;
  where?: InputMaybe<Proposal_Staking_Pool_Snapshot_Bool_Exp>;
};


export type Subscription_RootProposal_Staking_Pool_Snapshot_By_PkArgs = {
  proposal_id: Scalars['Int']['input'];
};


export type Subscription_RootProposal_Staking_Pool_Snapshot_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Proposal_Staking_Pool_Snapshot_Stream_Cursor_Input>>;
  where?: InputMaybe<Proposal_Staking_Pool_Snapshot_Bool_Exp>;
};


export type Subscription_RootProposal_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Proposal_Stream_Cursor_Input>>;
  where?: InputMaybe<Proposal_Bool_Exp>;
};


export type Subscription_RootProposal_Tally_ResultArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Tally_Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Tally_Result_Order_By>>;
  where?: InputMaybe<Proposal_Tally_Result_Bool_Exp>;
};


export type Subscription_RootProposal_Tally_Result_By_PkArgs = {
  proposal_id: Scalars['Int']['input'];
};


export type Subscription_RootProposal_Tally_Result_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Proposal_Tally_Result_Stream_Cursor_Input>>;
  where?: InputMaybe<Proposal_Tally_Result_Bool_Exp>;
};


export type Subscription_RootProposal_Validator_Status_SnapshotArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Order_By>>;
  where?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
};


export type Subscription_RootProposal_Validator_Status_Snapshot_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Proposal_Validator_Status_Snapshot_Stream_Cursor_Input>>;
  where?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
};


export type Subscription_RootProposal_VoteArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Vote_Order_By>>;
  where?: InputMaybe<Proposal_Vote_Bool_Exp>;
};


export type Subscription_RootProposal_Vote_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Proposal_Vote_Stream_Cursor_Input>>;
  where?: InputMaybe<Proposal_Vote_Bool_Exp>;
};


export type Subscription_RootSlashing_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Slashing_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Slashing_Params_Order_By>>;
  where?: InputMaybe<Slashing_Params_Bool_Exp>;
};


export type Subscription_RootSlashing_Params_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Slashing_Params_Stream_Cursor_Input>>;
  where?: InputMaybe<Slashing_Params_Bool_Exp>;
};


export type Subscription_RootSoftware_Upgrade_PlanArgs = {
  distinct_on?: InputMaybe<Array<Software_Upgrade_Plan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Software_Upgrade_Plan_Order_By>>;
  where?: InputMaybe<Software_Upgrade_Plan_Bool_Exp>;
};


export type Subscription_RootSoftware_Upgrade_Plan_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Software_Upgrade_Plan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Software_Upgrade_Plan_Order_By>>;
  where?: InputMaybe<Software_Upgrade_Plan_Bool_Exp>;
};


export type Subscription_RootSoftware_Upgrade_Plan_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Software_Upgrade_Plan_Stream_Cursor_Input>>;
  where?: InputMaybe<Software_Upgrade_Plan_Bool_Exp>;
};


export type Subscription_RootStaking_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Staking_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staking_Params_Order_By>>;
  where?: InputMaybe<Staking_Params_Bool_Exp>;
};


export type Subscription_RootStaking_Params_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Staking_Params_Stream_Cursor_Input>>;
  where?: InputMaybe<Staking_Params_Bool_Exp>;
};


export type Subscription_RootStaking_PoolArgs = {
  distinct_on?: InputMaybe<Array<Staking_Pool_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staking_Pool_Order_By>>;
  where?: InputMaybe<Staking_Pool_Bool_Exp>;
};


export type Subscription_RootStaking_Pool_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Staking_Pool_Stream_Cursor_Input>>;
  where?: InputMaybe<Staking_Pool_Bool_Exp>;
};


export type Subscription_RootSupplyArgs = {
  distinct_on?: InputMaybe<Array<Supply_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Supply_Order_By>>;
  where?: InputMaybe<Supply_Bool_Exp>;
};


export type Subscription_RootSupply_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Supply_Stream_Cursor_Input>>;
  where?: InputMaybe<Supply_Bool_Exp>;
};


export type Subscription_RootTokenArgs = {
  distinct_on?: InputMaybe<Array<Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Token_Order_By>>;
  where?: InputMaybe<Token_Bool_Exp>;
};


export type Subscription_RootToken_PriceArgs = {
  distinct_on?: InputMaybe<Array<Token_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Token_Price_Order_By>>;
  where?: InputMaybe<Token_Price_Bool_Exp>;
};


export type Subscription_RootToken_Price_HistoryArgs = {
  distinct_on?: InputMaybe<Array<Token_Price_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Token_Price_History_Order_By>>;
  where?: InputMaybe<Token_Price_History_Bool_Exp>;
};


export type Subscription_RootToken_Price_History_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Token_Price_History_Stream_Cursor_Input>>;
  where?: InputMaybe<Token_Price_History_Bool_Exp>;
};


export type Subscription_RootToken_Price_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Token_Price_Stream_Cursor_Input>>;
  where?: InputMaybe<Token_Price_Bool_Exp>;
};


export type Subscription_RootToken_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Token_Stream_Cursor_Input>>;
  where?: InputMaybe<Token_Bool_Exp>;
};


export type Subscription_RootToken_UnitArgs = {
  distinct_on?: InputMaybe<Array<Token_Unit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Token_Unit_Order_By>>;
  where?: InputMaybe<Token_Unit_Bool_Exp>;
};


export type Subscription_RootToken_Unit_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Token_Unit_Stream_Cursor_Input>>;
  where?: InputMaybe<Token_Unit_Bool_Exp>;
};


export type Subscription_RootTransactionArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Subscription_RootTransaction_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Transaction_Stream_Cursor_Input>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Subscription_RootValidatorArgs = {
  distinct_on?: InputMaybe<Array<Validator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Order_By>>;
  where?: InputMaybe<Validator_Bool_Exp>;
};


export type Subscription_RootValidator_By_PkArgs = {
  consensus_address: Scalars['String']['input'];
};


export type Subscription_RootValidator_CommissionArgs = {
  distinct_on?: InputMaybe<Array<Validator_Commission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Commission_Order_By>>;
  where?: InputMaybe<Validator_Commission_Bool_Exp>;
};


export type Subscription_RootValidator_Commission_By_PkArgs = {
  validator_address: Scalars['String']['input'];
};


export type Subscription_RootValidator_Commission_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Validator_Commission_Stream_Cursor_Input>>;
  where?: InputMaybe<Validator_Commission_Bool_Exp>;
};


export type Subscription_RootValidator_DescriptionArgs = {
  distinct_on?: InputMaybe<Array<Validator_Description_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Description_Order_By>>;
  where?: InputMaybe<Validator_Description_Bool_Exp>;
};


export type Subscription_RootValidator_Description_By_PkArgs = {
  validator_address: Scalars['String']['input'];
};


export type Subscription_RootValidator_Description_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Validator_Description_Stream_Cursor_Input>>;
  where?: InputMaybe<Validator_Description_Bool_Exp>;
};


export type Subscription_RootValidator_InfoArgs = {
  distinct_on?: InputMaybe<Array<Validator_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Info_Order_By>>;
  where?: InputMaybe<Validator_Info_Bool_Exp>;
};


export type Subscription_RootValidator_Info_By_PkArgs = {
  consensus_address: Scalars['String']['input'];
};


export type Subscription_RootValidator_Info_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Validator_Info_Stream_Cursor_Input>>;
  where?: InputMaybe<Validator_Info_Bool_Exp>;
};


export type Subscription_RootValidator_Signing_InfoArgs = {
  distinct_on?: InputMaybe<Array<Validator_Signing_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Signing_Info_Order_By>>;
  where?: InputMaybe<Validator_Signing_Info_Bool_Exp>;
};


export type Subscription_RootValidator_Signing_Info_By_PkArgs = {
  validator_address: Scalars['String']['input'];
};


export type Subscription_RootValidator_Signing_Info_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Validator_Signing_Info_Stream_Cursor_Input>>;
  where?: InputMaybe<Validator_Signing_Info_Bool_Exp>;
};


export type Subscription_RootValidator_StatusArgs = {
  distinct_on?: InputMaybe<Array<Validator_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Status_Order_By>>;
  where?: InputMaybe<Validator_Status_Bool_Exp>;
};


export type Subscription_RootValidator_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Status_Order_By>>;
  where?: InputMaybe<Validator_Status_Bool_Exp>;
};


export type Subscription_RootValidator_Status_By_PkArgs = {
  validator_address: Scalars['String']['input'];
};


export type Subscription_RootValidator_Status_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Validator_Status_Stream_Cursor_Input>>;
  where?: InputMaybe<Validator_Status_Bool_Exp>;
};


export type Subscription_RootValidator_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Validator_Stream_Cursor_Input>>;
  where?: InputMaybe<Validator_Bool_Exp>;
};


export type Subscription_RootValidator_Voting_PowerArgs = {
  distinct_on?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Voting_Power_Order_By>>;
  where?: InputMaybe<Validator_Voting_Power_Bool_Exp>;
};


export type Subscription_RootValidator_Voting_Power_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Voting_Power_Order_By>>;
  where?: InputMaybe<Validator_Voting_Power_Bool_Exp>;
};


export type Subscription_RootValidator_Voting_Power_By_PkArgs = {
  validator_address: Scalars['String']['input'];
};


export type Subscription_RootValidator_Voting_Power_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Validator_Voting_Power_Stream_Cursor_Input>>;
  where?: InputMaybe<Validator_Voting_Power_Bool_Exp>;
};


export type Subscription_RootVesting_AccountArgs = {
  distinct_on?: InputMaybe<Array<Vesting_Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vesting_Account_Order_By>>;
  where?: InputMaybe<Vesting_Account_Bool_Exp>;
};


export type Subscription_RootVesting_Account_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Vesting_Account_Stream_Cursor_Input>>;
  where?: InputMaybe<Vesting_Account_Bool_Exp>;
};


export type Subscription_RootVesting_PeriodArgs = {
  distinct_on?: InputMaybe<Array<Vesting_Period_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vesting_Period_Order_By>>;
  where?: InputMaybe<Vesting_Period_Bool_Exp>;
};


export type Subscription_RootVesting_Period_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Vesting_Period_Stream_Cursor_Input>>;
  where?: InputMaybe<Vesting_Period_Bool_Exp>;
};

/** columns and relationships of "supply" */
export type Supply = {
  __typename?: 'supply';
  coins: Scalars['_coin']['output'];
  height: Scalars['bigint']['output'];
};

/** Boolean expression to filter rows from the table "supply". All fields are combined with a logical 'AND'. */
export type Supply_Bool_Exp = {
  _and?: InputMaybe<Array<Supply_Bool_Exp>>;
  _not?: InputMaybe<Supply_Bool_Exp>;
  _or?: InputMaybe<Array<Supply_Bool_Exp>>;
  coins?: InputMaybe<_Coin_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
};

/** Ordering options when selecting data from "supply". */
export type Supply_Order_By = {
  coins?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** select columns of table "supply" */
export enum Supply_Select_Column {
  /** column name */
  Coins = 'coins',
  /** column name */
  Height = 'height'
}

/** Streaming cursor of the table "supply" */
export type Supply_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Supply_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Supply_Stream_Cursor_Value_Input = {
  coins?: InputMaybe<Scalars['_coin']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
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

/** columns and relationships of "token" */
export type Token = {
  __typename?: 'token';
  name: Scalars['String']['output'];
  /** An array relationship */
  token_units: Array<Token_Unit>;
};


/** columns and relationships of "token" */
export type TokenToken_UnitsArgs = {
  distinct_on?: InputMaybe<Array<Token_Unit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Token_Unit_Order_By>>;
  where?: InputMaybe<Token_Unit_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "token". All fields are combined with a logical 'AND'. */
export type Token_Bool_Exp = {
  _and?: InputMaybe<Array<Token_Bool_Exp>>;
  _not?: InputMaybe<Token_Bool_Exp>;
  _or?: InputMaybe<Array<Token_Bool_Exp>>;
  name?: InputMaybe<String_Comparison_Exp>;
  token_units?: InputMaybe<Token_Unit_Bool_Exp>;
};

/** Ordering options when selecting data from "token". */
export type Token_Order_By = {
  name?: InputMaybe<Order_By>;
  token_units_aggregate?: InputMaybe<Token_Unit_Aggregate_Order_By>;
};

/** columns and relationships of "token_price" */
export type Token_Price = {
  __typename?: 'token_price';
  market_cap: Scalars['bigint']['output'];
  price: Scalars['numeric']['output'];
  timestamp: Scalars['timestamp']['output'];
  /** An object relationship */
  token_unit: Token_Unit;
  unit_name: Scalars['String']['output'];
};

/** order by aggregate values of table "token_price" */
export type Token_Price_Aggregate_Order_By = {
  avg?: InputMaybe<Token_Price_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Token_Price_Max_Order_By>;
  min?: InputMaybe<Token_Price_Min_Order_By>;
  stddev?: InputMaybe<Token_Price_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Token_Price_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Token_Price_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Token_Price_Sum_Order_By>;
  var_pop?: InputMaybe<Token_Price_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Token_Price_Var_Samp_Order_By>;
  variance?: InputMaybe<Token_Price_Variance_Order_By>;
};

/** order by avg() on columns of table "token_price" */
export type Token_Price_Avg_Order_By = {
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "token_price". All fields are combined with a logical 'AND'. */
export type Token_Price_Bool_Exp = {
  _and?: InputMaybe<Array<Token_Price_Bool_Exp>>;
  _not?: InputMaybe<Token_Price_Bool_Exp>;
  _or?: InputMaybe<Array<Token_Price_Bool_Exp>>;
  market_cap?: InputMaybe<Bigint_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamp_Comparison_Exp>;
  token_unit?: InputMaybe<Token_Unit_Bool_Exp>;
  unit_name?: InputMaybe<String_Comparison_Exp>;
};

/** columns and relationships of "token_price_history" */
export type Token_Price_History = {
  __typename?: 'token_price_history';
  market_cap: Scalars['bigint']['output'];
  price: Scalars['numeric']['output'];
  timestamp: Scalars['timestamp']['output'];
  /** An object relationship */
  token_unit: Token_Unit;
  unit_name: Scalars['String']['output'];
};

/** order by aggregate values of table "token_price_history" */
export type Token_Price_History_Aggregate_Order_By = {
  avg?: InputMaybe<Token_Price_History_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Token_Price_History_Max_Order_By>;
  min?: InputMaybe<Token_Price_History_Min_Order_By>;
  stddev?: InputMaybe<Token_Price_History_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Token_Price_History_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Token_Price_History_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Token_Price_History_Sum_Order_By>;
  var_pop?: InputMaybe<Token_Price_History_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Token_Price_History_Var_Samp_Order_By>;
  variance?: InputMaybe<Token_Price_History_Variance_Order_By>;
};

/** order by avg() on columns of table "token_price_history" */
export type Token_Price_History_Avg_Order_By = {
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "token_price_history". All fields are combined with a logical 'AND'. */
export type Token_Price_History_Bool_Exp = {
  _and?: InputMaybe<Array<Token_Price_History_Bool_Exp>>;
  _not?: InputMaybe<Token_Price_History_Bool_Exp>;
  _or?: InputMaybe<Array<Token_Price_History_Bool_Exp>>;
  market_cap?: InputMaybe<Bigint_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamp_Comparison_Exp>;
  token_unit?: InputMaybe<Token_Unit_Bool_Exp>;
  unit_name?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "token_price_history" */
export type Token_Price_History_Max_Order_By = {
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  unit_name?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "token_price_history" */
export type Token_Price_History_Min_Order_By = {
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  unit_name?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "token_price_history". */
export type Token_Price_History_Order_By = {
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  token_unit?: InputMaybe<Token_Unit_Order_By>;
  unit_name?: InputMaybe<Order_By>;
};

/** select columns of table "token_price_history" */
export enum Token_Price_History_Select_Column {
  /** column name */
  MarketCap = 'market_cap',
  /** column name */
  Price = 'price',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  UnitName = 'unit_name'
}

/** order by stddev() on columns of table "token_price_history" */
export type Token_Price_History_Stddev_Order_By = {
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "token_price_history" */
export type Token_Price_History_Stddev_Pop_Order_By = {
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "token_price_history" */
export type Token_Price_History_Stddev_Samp_Order_By = {
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "token_price_history" */
export type Token_Price_History_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Token_Price_History_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Token_Price_History_Stream_Cursor_Value_Input = {
  market_cap?: InputMaybe<Scalars['bigint']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  unit_name?: InputMaybe<Scalars['String']['input']>;
};

/** order by sum() on columns of table "token_price_history" */
export type Token_Price_History_Sum_Order_By = {
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "token_price_history" */
export type Token_Price_History_Var_Pop_Order_By = {
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "token_price_history" */
export type Token_Price_History_Var_Samp_Order_By = {
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "token_price_history" */
export type Token_Price_History_Variance_Order_By = {
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** order by max() on columns of table "token_price" */
export type Token_Price_Max_Order_By = {
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  unit_name?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "token_price" */
export type Token_Price_Min_Order_By = {
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  unit_name?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "token_price". */
export type Token_Price_Order_By = {
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  token_unit?: InputMaybe<Token_Unit_Order_By>;
  unit_name?: InputMaybe<Order_By>;
};

/** select columns of table "token_price" */
export enum Token_Price_Select_Column {
  /** column name */
  MarketCap = 'market_cap',
  /** column name */
  Price = 'price',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  UnitName = 'unit_name'
}

/** order by stddev() on columns of table "token_price" */
export type Token_Price_Stddev_Order_By = {
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "token_price" */
export type Token_Price_Stddev_Pop_Order_By = {
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "token_price" */
export type Token_Price_Stddev_Samp_Order_By = {
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "token_price" */
export type Token_Price_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Token_Price_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Token_Price_Stream_Cursor_Value_Input = {
  market_cap?: InputMaybe<Scalars['bigint']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  unit_name?: InputMaybe<Scalars['String']['input']>;
};

/** order by sum() on columns of table "token_price" */
export type Token_Price_Sum_Order_By = {
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "token_price" */
export type Token_Price_Var_Pop_Order_By = {
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "token_price" */
export type Token_Price_Var_Samp_Order_By = {
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "token_price" */
export type Token_Price_Variance_Order_By = {
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** select columns of table "token" */
export enum Token_Select_Column {
  /** column name */
  Name = 'name'
}

/** Streaming cursor of the table "token" */
export type Token_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Token_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Token_Stream_Cursor_Value_Input = {
  name?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "token_unit" */
export type Token_Unit = {
  __typename?: 'token_unit';
  aliases?: Maybe<Scalars['_text']['output']>;
  denom: Scalars['String']['output'];
  exponent: Scalars['Int']['output'];
  price_id?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  token: Token;
  token_name: Scalars['String']['output'];
  /** An object relationship */
  token_price?: Maybe<Token_Price>;
  /** An array relationship */
  token_price_histories: Array<Token_Price_History>;
  /** An array relationship */
  token_prices: Array<Token_Price>;
};


/** columns and relationships of "token_unit" */
export type Token_UnitToken_Price_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<Token_Price_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Token_Price_History_Order_By>>;
  where?: InputMaybe<Token_Price_History_Bool_Exp>;
};


/** columns and relationships of "token_unit" */
export type Token_UnitToken_PricesArgs = {
  distinct_on?: InputMaybe<Array<Token_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Token_Price_Order_By>>;
  where?: InputMaybe<Token_Price_Bool_Exp>;
};

/** order by aggregate values of table "token_unit" */
export type Token_Unit_Aggregate_Order_By = {
  avg?: InputMaybe<Token_Unit_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Token_Unit_Max_Order_By>;
  min?: InputMaybe<Token_Unit_Min_Order_By>;
  stddev?: InputMaybe<Token_Unit_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Token_Unit_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Token_Unit_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Token_Unit_Sum_Order_By>;
  var_pop?: InputMaybe<Token_Unit_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Token_Unit_Var_Samp_Order_By>;
  variance?: InputMaybe<Token_Unit_Variance_Order_By>;
};

/** order by avg() on columns of table "token_unit" */
export type Token_Unit_Avg_Order_By = {
  exponent?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "token_unit". All fields are combined with a logical 'AND'. */
export type Token_Unit_Bool_Exp = {
  _and?: InputMaybe<Array<Token_Unit_Bool_Exp>>;
  _not?: InputMaybe<Token_Unit_Bool_Exp>;
  _or?: InputMaybe<Array<Token_Unit_Bool_Exp>>;
  aliases?: InputMaybe<_Text_Comparison_Exp>;
  denom?: InputMaybe<String_Comparison_Exp>;
  exponent?: InputMaybe<Int_Comparison_Exp>;
  price_id?: InputMaybe<String_Comparison_Exp>;
  token?: InputMaybe<Token_Bool_Exp>;
  token_name?: InputMaybe<String_Comparison_Exp>;
  token_price?: InputMaybe<Token_Price_Bool_Exp>;
  token_price_histories?: InputMaybe<Token_Price_History_Bool_Exp>;
  token_prices?: InputMaybe<Token_Price_Bool_Exp>;
};

/** order by max() on columns of table "token_unit" */
export type Token_Unit_Max_Order_By = {
  denom?: InputMaybe<Order_By>;
  exponent?: InputMaybe<Order_By>;
  price_id?: InputMaybe<Order_By>;
  token_name?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "token_unit" */
export type Token_Unit_Min_Order_By = {
  denom?: InputMaybe<Order_By>;
  exponent?: InputMaybe<Order_By>;
  price_id?: InputMaybe<Order_By>;
  token_name?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "token_unit". */
export type Token_Unit_Order_By = {
  aliases?: InputMaybe<Order_By>;
  denom?: InputMaybe<Order_By>;
  exponent?: InputMaybe<Order_By>;
  price_id?: InputMaybe<Order_By>;
  token?: InputMaybe<Token_Order_By>;
  token_name?: InputMaybe<Order_By>;
  token_price?: InputMaybe<Token_Price_Order_By>;
  token_price_histories_aggregate?: InputMaybe<Token_Price_History_Aggregate_Order_By>;
  token_prices_aggregate?: InputMaybe<Token_Price_Aggregate_Order_By>;
};

/** select columns of table "token_unit" */
export enum Token_Unit_Select_Column {
  /** column name */
  Aliases = 'aliases',
  /** column name */
  Denom = 'denom',
  /** column name */
  Exponent = 'exponent',
  /** column name */
  PriceId = 'price_id',
  /** column name */
  TokenName = 'token_name'
}

/** order by stddev() on columns of table "token_unit" */
export type Token_Unit_Stddev_Order_By = {
  exponent?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "token_unit" */
export type Token_Unit_Stddev_Pop_Order_By = {
  exponent?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "token_unit" */
export type Token_Unit_Stddev_Samp_Order_By = {
  exponent?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "token_unit" */
export type Token_Unit_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Token_Unit_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Token_Unit_Stream_Cursor_Value_Input = {
  aliases?: InputMaybe<Scalars['_text']['input']>;
  denom?: InputMaybe<Scalars['String']['input']>;
  exponent?: InputMaybe<Scalars['Int']['input']>;
  price_id?: InputMaybe<Scalars['String']['input']>;
  token_name?: InputMaybe<Scalars['String']['input']>;
};

/** order by sum() on columns of table "token_unit" */
export type Token_Unit_Sum_Order_By = {
  exponent?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "token_unit" */
export type Token_Unit_Var_Pop_Order_By = {
  exponent?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "token_unit" */
export type Token_Unit_Var_Samp_Order_By = {
  exponent?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "token_unit" */
export type Token_Unit_Variance_Order_By = {
  exponent?: InputMaybe<Order_By>;
};

/** columns and relationships of "transaction" */
export type Transaction = {
  __typename?: 'transaction';
  /** An object relationship */
  block: Block;
  fee: Scalars['jsonb']['output'];
  gas_used?: Maybe<Scalars['bigint']['output']>;
  gas_wanted?: Maybe<Scalars['bigint']['output']>;
  hash: Scalars['String']['output'];
  height: Scalars['bigint']['output'];
  logs?: Maybe<Scalars['jsonb']['output']>;
  memo?: Maybe<Scalars['String']['output']>;
  messages: Scalars['jsonb']['output'];
  /** An array relationship */
  messagesByPartitionIdTransactionHash: Array<Message>;
  raw_log?: Maybe<Scalars['String']['output']>;
  signatures: Scalars['_text']['output'];
  signer_infos: Scalars['jsonb']['output'];
  success: Scalars['Boolean']['output'];
};


/** columns and relationships of "transaction" */
export type TransactionFeeArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "transaction" */
export type TransactionLogsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "transaction" */
export type TransactionMessagesArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "transaction" */
export type TransactionMessagesByPartitionIdTransactionHashArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


/** columns and relationships of "transaction" */
export type TransactionSigner_InfosArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** order by aggregate values of table "transaction" */
export type Transaction_Aggregate_Order_By = {
  avg?: InputMaybe<Transaction_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Transaction_Max_Order_By>;
  min?: InputMaybe<Transaction_Min_Order_By>;
  stddev?: InputMaybe<Transaction_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Transaction_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Transaction_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Transaction_Sum_Order_By>;
  var_pop?: InputMaybe<Transaction_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Transaction_Var_Samp_Order_By>;
  variance?: InputMaybe<Transaction_Variance_Order_By>;
};

/** order by avg() on columns of table "transaction" */
export type Transaction_Avg_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "transaction". All fields are combined with a logical 'AND'. */
export type Transaction_Bool_Exp = {
  _and?: InputMaybe<Array<Transaction_Bool_Exp>>;
  _not?: InputMaybe<Transaction_Bool_Exp>;
  _or?: InputMaybe<Array<Transaction_Bool_Exp>>;
  block?: InputMaybe<Block_Bool_Exp>;
  fee?: InputMaybe<Jsonb_Comparison_Exp>;
  gas_used?: InputMaybe<Bigint_Comparison_Exp>;
  gas_wanted?: InputMaybe<Bigint_Comparison_Exp>;
  hash?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  logs?: InputMaybe<Jsonb_Comparison_Exp>;
  memo?: InputMaybe<String_Comparison_Exp>;
  messages?: InputMaybe<Jsonb_Comparison_Exp>;
  messagesByPartitionIdTransactionHash?: InputMaybe<Message_Bool_Exp>;
  raw_log?: InputMaybe<String_Comparison_Exp>;
  signatures?: InputMaybe<_Text_Comparison_Exp>;
  signer_infos?: InputMaybe<Jsonb_Comparison_Exp>;
  success?: InputMaybe<Boolean_Comparison_Exp>;
};

/** order by max() on columns of table "transaction" */
export type Transaction_Max_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  memo?: InputMaybe<Order_By>;
  raw_log?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "transaction" */
export type Transaction_Min_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  memo?: InputMaybe<Order_By>;
  raw_log?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "transaction". */
export type Transaction_Order_By = {
  block?: InputMaybe<Block_Order_By>;
  fee?: InputMaybe<Order_By>;
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  logs?: InputMaybe<Order_By>;
  memo?: InputMaybe<Order_By>;
  messages?: InputMaybe<Order_By>;
  messagesByPartitionIdTransactionHash_aggregate?: InputMaybe<Message_Aggregate_Order_By>;
  raw_log?: InputMaybe<Order_By>;
  signatures?: InputMaybe<Order_By>;
  signer_infos?: InputMaybe<Order_By>;
  success?: InputMaybe<Order_By>;
};

/** select columns of table "transaction" */
export enum Transaction_Select_Column {
  /** column name */
  Fee = 'fee',
  /** column name */
  GasUsed = 'gas_used',
  /** column name */
  GasWanted = 'gas_wanted',
  /** column name */
  Hash = 'hash',
  /** column name */
  Height = 'height',
  /** column name */
  Logs = 'logs',
  /** column name */
  Memo = 'memo',
  /** column name */
  Messages = 'messages',
  /** column name */
  RawLog = 'raw_log',
  /** column name */
  Signatures = 'signatures',
  /** column name */
  SignerInfos = 'signer_infos',
  /** column name */
  Success = 'success'
}

/** order by stddev() on columns of table "transaction" */
export type Transaction_Stddev_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "transaction" */
export type Transaction_Stddev_Pop_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "transaction" */
export type Transaction_Stddev_Samp_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "transaction" */
export type Transaction_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Transaction_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Transaction_Stream_Cursor_Value_Input = {
  fee?: InputMaybe<Scalars['jsonb']['input']>;
  gas_used?: InputMaybe<Scalars['bigint']['input']>;
  gas_wanted?: InputMaybe<Scalars['bigint']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  logs?: InputMaybe<Scalars['jsonb']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  messages?: InputMaybe<Scalars['jsonb']['input']>;
  raw_log?: InputMaybe<Scalars['String']['input']>;
  signatures?: InputMaybe<Scalars['_text']['input']>;
  signer_infos?: InputMaybe<Scalars['jsonb']['input']>;
  success?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by sum() on columns of table "transaction" */
export type Transaction_Sum_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "transaction" */
export type Transaction_Var_Pop_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "transaction" */
export type Transaction_Var_Samp_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "transaction" */
export type Transaction_Variance_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** columns and relationships of "validator" */
export type Validator = {
  __typename?: 'validator';
  /** An array relationship */
  blocks: Array<Block>;
  consensus_address: Scalars['String']['output'];
  consensus_pubkey: Scalars['String']['output'];
  /** An array relationship */
  double_sign_votes: Array<Double_Sign_Vote>;
  /** An array relationship */
  pre_commits: Array<Pre_Commit>;
  /** An aggregate relationship */
  pre_commits_aggregate: Pre_Commit_Aggregate;
  /** An object relationship */
  proposal_validator_status_snapshot?: Maybe<Proposal_Validator_Status_Snapshot>;
  /** An array relationship */
  proposal_validator_status_snapshots: Array<Proposal_Validator_Status_Snapshot>;
  /** An array relationship */
  validator_commissions: Array<Validator_Commission>;
  /** An array relationship */
  validator_descriptions: Array<Validator_Description>;
  /** An object relationship */
  validator_info?: Maybe<Validator_Info>;
  /** An array relationship */
  validator_infos: Array<Validator_Info>;
  /** An array relationship */
  validator_signing_infos: Array<Validator_Signing_Info>;
  /** An array relationship */
  validator_statuses: Array<Validator_Status>;
  /** An aggregate relationship */
  validator_statuses_aggregate: Validator_Status_Aggregate;
  /** An array relationship */
  validator_voting_powers: Array<Validator_Voting_Power>;
  /** An aggregate relationship */
  validator_voting_powers_aggregate: Validator_Voting_Power_Aggregate;
};


/** columns and relationships of "validator" */
export type ValidatorBlocksArgs = {
  distinct_on?: InputMaybe<Array<Block_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Block_Order_By>>;
  where?: InputMaybe<Block_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorDouble_Sign_VotesArgs = {
  distinct_on?: InputMaybe<Array<Double_Sign_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Double_Sign_Vote_Order_By>>;
  where?: InputMaybe<Double_Sign_Vote_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorPre_CommitsArgs = {
  distinct_on?: InputMaybe<Array<Pre_Commit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pre_Commit_Order_By>>;
  where?: InputMaybe<Pre_Commit_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorPre_Commits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pre_Commit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pre_Commit_Order_By>>;
  where?: InputMaybe<Pre_Commit_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorProposal_Validator_Status_SnapshotsArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Order_By>>;
  where?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorValidator_CommissionsArgs = {
  distinct_on?: InputMaybe<Array<Validator_Commission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Commission_Order_By>>;
  where?: InputMaybe<Validator_Commission_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorValidator_DescriptionsArgs = {
  distinct_on?: InputMaybe<Array<Validator_Description_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Description_Order_By>>;
  where?: InputMaybe<Validator_Description_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorValidator_InfosArgs = {
  distinct_on?: InputMaybe<Array<Validator_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Info_Order_By>>;
  where?: InputMaybe<Validator_Info_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorValidator_Signing_InfosArgs = {
  distinct_on?: InputMaybe<Array<Validator_Signing_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Signing_Info_Order_By>>;
  where?: InputMaybe<Validator_Signing_Info_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorValidator_StatusesArgs = {
  distinct_on?: InputMaybe<Array<Validator_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Status_Order_By>>;
  where?: InputMaybe<Validator_Status_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorValidator_Statuses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Status_Order_By>>;
  where?: InputMaybe<Validator_Status_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorValidator_Voting_PowersArgs = {
  distinct_on?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Voting_Power_Order_By>>;
  where?: InputMaybe<Validator_Voting_Power_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorValidator_Voting_Powers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Voting_Power_Order_By>>;
  where?: InputMaybe<Validator_Voting_Power_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "validator". All fields are combined with a logical 'AND'. */
export type Validator_Bool_Exp = {
  _and?: InputMaybe<Array<Validator_Bool_Exp>>;
  _not?: InputMaybe<Validator_Bool_Exp>;
  _or?: InputMaybe<Array<Validator_Bool_Exp>>;
  blocks?: InputMaybe<Block_Bool_Exp>;
  consensus_address?: InputMaybe<String_Comparison_Exp>;
  consensus_pubkey?: InputMaybe<String_Comparison_Exp>;
  double_sign_votes?: InputMaybe<Double_Sign_Vote_Bool_Exp>;
  pre_commits?: InputMaybe<Pre_Commit_Bool_Exp>;
  pre_commits_aggregate?: InputMaybe<Pre_Commit_Aggregate_Bool_Exp>;
  proposal_validator_status_snapshot?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
  proposal_validator_status_snapshots?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
  validator_commissions?: InputMaybe<Validator_Commission_Bool_Exp>;
  validator_descriptions?: InputMaybe<Validator_Description_Bool_Exp>;
  validator_info?: InputMaybe<Validator_Info_Bool_Exp>;
  validator_infos?: InputMaybe<Validator_Info_Bool_Exp>;
  validator_signing_infos?: InputMaybe<Validator_Signing_Info_Bool_Exp>;
  validator_statuses?: InputMaybe<Validator_Status_Bool_Exp>;
  validator_statuses_aggregate?: InputMaybe<Validator_Status_Aggregate_Bool_Exp>;
  validator_voting_powers?: InputMaybe<Validator_Voting_Power_Bool_Exp>;
  validator_voting_powers_aggregate?: InputMaybe<Validator_Voting_Power_Aggregate_Bool_Exp>;
};

/** columns and relationships of "validator_commission" */
export type Validator_Commission = {
  __typename?: 'validator_commission';
  commission: Scalars['numeric']['output'];
  height: Scalars['bigint']['output'];
  min_self_delegation: Scalars['bigint']['output'];
  /** An object relationship */
  validator: Validator;
  validator_address: Scalars['String']['output'];
};

/** order by aggregate values of table "validator_commission" */
export type Validator_Commission_Aggregate_Order_By = {
  avg?: InputMaybe<Validator_Commission_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Validator_Commission_Max_Order_By>;
  min?: InputMaybe<Validator_Commission_Min_Order_By>;
  stddev?: InputMaybe<Validator_Commission_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Validator_Commission_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Validator_Commission_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Validator_Commission_Sum_Order_By>;
  var_pop?: InputMaybe<Validator_Commission_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Validator_Commission_Var_Samp_Order_By>;
  variance?: InputMaybe<Validator_Commission_Variance_Order_By>;
};

/** order by avg() on columns of table "validator_commission" */
export type Validator_Commission_Avg_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "validator_commission". All fields are combined with a logical 'AND'. */
export type Validator_Commission_Bool_Exp = {
  _and?: InputMaybe<Array<Validator_Commission_Bool_Exp>>;
  _not?: InputMaybe<Validator_Commission_Bool_Exp>;
  _or?: InputMaybe<Array<Validator_Commission_Bool_Exp>>;
  commission?: InputMaybe<Numeric_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  min_self_delegation?: InputMaybe<Bigint_Comparison_Exp>;
  validator?: InputMaybe<Validator_Bool_Exp>;
  validator_address?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "validator_commission" */
export type Validator_Commission_Max_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "validator_commission" */
export type Validator_Commission_Min_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "validator_commission". */
export type Validator_Commission_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
  validator?: InputMaybe<Validator_Order_By>;
  validator_address?: InputMaybe<Order_By>;
};

/** select columns of table "validator_commission" */
export enum Validator_Commission_Select_Column {
  /** column name */
  Commission = 'commission',
  /** column name */
  Height = 'height',
  /** column name */
  MinSelfDelegation = 'min_self_delegation',
  /** column name */
  ValidatorAddress = 'validator_address'
}

/** order by stddev() on columns of table "validator_commission" */
export type Validator_Commission_Stddev_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "validator_commission" */
export type Validator_Commission_Stddev_Pop_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "validator_commission" */
export type Validator_Commission_Stddev_Samp_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "validator_commission" */
export type Validator_Commission_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Validator_Commission_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Validator_Commission_Stream_Cursor_Value_Input = {
  commission?: InputMaybe<Scalars['numeric']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  min_self_delegation?: InputMaybe<Scalars['bigint']['input']>;
  validator_address?: InputMaybe<Scalars['String']['input']>;
};

/** order by sum() on columns of table "validator_commission" */
export type Validator_Commission_Sum_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "validator_commission" */
export type Validator_Commission_Var_Pop_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "validator_commission" */
export type Validator_Commission_Var_Samp_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "validator_commission" */
export type Validator_Commission_Variance_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
};

/** columns and relationships of "validator_description" */
export type Validator_Description = {
  __typename?: 'validator_description';
  avatar_url?: Maybe<Scalars['String']['output']>;
  details?: Maybe<Scalars['String']['output']>;
  height: Scalars['bigint']['output'];
  identity?: Maybe<Scalars['String']['output']>;
  moniker?: Maybe<Scalars['String']['output']>;
  security_contact?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  validator: Validator;
  validator_address: Scalars['String']['output'];
  website?: Maybe<Scalars['String']['output']>;
};

/** order by aggregate values of table "validator_description" */
export type Validator_Description_Aggregate_Order_By = {
  avg?: InputMaybe<Validator_Description_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Validator_Description_Max_Order_By>;
  min?: InputMaybe<Validator_Description_Min_Order_By>;
  stddev?: InputMaybe<Validator_Description_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Validator_Description_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Validator_Description_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Validator_Description_Sum_Order_By>;
  var_pop?: InputMaybe<Validator_Description_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Validator_Description_Var_Samp_Order_By>;
  variance?: InputMaybe<Validator_Description_Variance_Order_By>;
};

/** order by avg() on columns of table "validator_description" */
export type Validator_Description_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "validator_description". All fields are combined with a logical 'AND'. */
export type Validator_Description_Bool_Exp = {
  _and?: InputMaybe<Array<Validator_Description_Bool_Exp>>;
  _not?: InputMaybe<Validator_Description_Bool_Exp>;
  _or?: InputMaybe<Array<Validator_Description_Bool_Exp>>;
  avatar_url?: InputMaybe<String_Comparison_Exp>;
  details?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  identity?: InputMaybe<String_Comparison_Exp>;
  moniker?: InputMaybe<String_Comparison_Exp>;
  security_contact?: InputMaybe<String_Comparison_Exp>;
  validator?: InputMaybe<Validator_Bool_Exp>;
  validator_address?: InputMaybe<String_Comparison_Exp>;
  website?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "validator_description" */
export type Validator_Description_Max_Order_By = {
  avatar_url?: InputMaybe<Order_By>;
  details?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  identity?: InputMaybe<Order_By>;
  moniker?: InputMaybe<Order_By>;
  security_contact?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  website?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "validator_description" */
export type Validator_Description_Min_Order_By = {
  avatar_url?: InputMaybe<Order_By>;
  details?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  identity?: InputMaybe<Order_By>;
  moniker?: InputMaybe<Order_By>;
  security_contact?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  website?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "validator_description". */
export type Validator_Description_Order_By = {
  avatar_url?: InputMaybe<Order_By>;
  details?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  identity?: InputMaybe<Order_By>;
  moniker?: InputMaybe<Order_By>;
  security_contact?: InputMaybe<Order_By>;
  validator?: InputMaybe<Validator_Order_By>;
  validator_address?: InputMaybe<Order_By>;
  website?: InputMaybe<Order_By>;
};

/** select columns of table "validator_description" */
export enum Validator_Description_Select_Column {
  /** column name */
  AvatarUrl = 'avatar_url',
  /** column name */
  Details = 'details',
  /** column name */
  Height = 'height',
  /** column name */
  Identity = 'identity',
  /** column name */
  Moniker = 'moniker',
  /** column name */
  SecurityContact = 'security_contact',
  /** column name */
  ValidatorAddress = 'validator_address',
  /** column name */
  Website = 'website'
}

/** order by stddev() on columns of table "validator_description" */
export type Validator_Description_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "validator_description" */
export type Validator_Description_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "validator_description" */
export type Validator_Description_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "validator_description" */
export type Validator_Description_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Validator_Description_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Validator_Description_Stream_Cursor_Value_Input = {
  avatar_url?: InputMaybe<Scalars['String']['input']>;
  details?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  identity?: InputMaybe<Scalars['String']['input']>;
  moniker?: InputMaybe<Scalars['String']['input']>;
  security_contact?: InputMaybe<Scalars['String']['input']>;
  validator_address?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

/** order by sum() on columns of table "validator_description" */
export type Validator_Description_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "validator_description" */
export type Validator_Description_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "validator_description" */
export type Validator_Description_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "validator_description" */
export type Validator_Description_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** columns and relationships of "validator_info" */
export type Validator_Info = {
  __typename?: 'validator_info';
  /** An object relationship */
  account?: Maybe<Account>;
  consensus_address: Scalars['String']['output'];
  max_change_rate: Scalars['String']['output'];
  max_rate: Scalars['String']['output'];
  operator_address: Scalars['String']['output'];
  self_delegate_address?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  validator: Validator;
};

/** order by aggregate values of table "validator_info" */
export type Validator_Info_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Validator_Info_Max_Order_By>;
  min?: InputMaybe<Validator_Info_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "validator_info". All fields are combined with a logical 'AND'. */
export type Validator_Info_Bool_Exp = {
  _and?: InputMaybe<Array<Validator_Info_Bool_Exp>>;
  _not?: InputMaybe<Validator_Info_Bool_Exp>;
  _or?: InputMaybe<Array<Validator_Info_Bool_Exp>>;
  account?: InputMaybe<Account_Bool_Exp>;
  consensus_address?: InputMaybe<String_Comparison_Exp>;
  max_change_rate?: InputMaybe<String_Comparison_Exp>;
  max_rate?: InputMaybe<String_Comparison_Exp>;
  operator_address?: InputMaybe<String_Comparison_Exp>;
  self_delegate_address?: InputMaybe<String_Comparison_Exp>;
  validator?: InputMaybe<Validator_Bool_Exp>;
};

/** order by max() on columns of table "validator_info" */
export type Validator_Info_Max_Order_By = {
  consensus_address?: InputMaybe<Order_By>;
  max_change_rate?: InputMaybe<Order_By>;
  max_rate?: InputMaybe<Order_By>;
  operator_address?: InputMaybe<Order_By>;
  self_delegate_address?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "validator_info" */
export type Validator_Info_Min_Order_By = {
  consensus_address?: InputMaybe<Order_By>;
  max_change_rate?: InputMaybe<Order_By>;
  max_rate?: InputMaybe<Order_By>;
  operator_address?: InputMaybe<Order_By>;
  self_delegate_address?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "validator_info". */
export type Validator_Info_Order_By = {
  account?: InputMaybe<Account_Order_By>;
  consensus_address?: InputMaybe<Order_By>;
  max_change_rate?: InputMaybe<Order_By>;
  max_rate?: InputMaybe<Order_By>;
  operator_address?: InputMaybe<Order_By>;
  self_delegate_address?: InputMaybe<Order_By>;
  validator?: InputMaybe<Validator_Order_By>;
};

/** select columns of table "validator_info" */
export enum Validator_Info_Select_Column {
  /** column name */
  ConsensusAddress = 'consensus_address',
  /** column name */
  MaxChangeRate = 'max_change_rate',
  /** column name */
  MaxRate = 'max_rate',
  /** column name */
  OperatorAddress = 'operator_address',
  /** column name */
  SelfDelegateAddress = 'self_delegate_address'
}

/** Streaming cursor of the table "validator_info" */
export type Validator_Info_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Validator_Info_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Validator_Info_Stream_Cursor_Value_Input = {
  consensus_address?: InputMaybe<Scalars['String']['input']>;
  max_change_rate?: InputMaybe<Scalars['String']['input']>;
  max_rate?: InputMaybe<Scalars['String']['input']>;
  operator_address?: InputMaybe<Scalars['String']['input']>;
  self_delegate_address?: InputMaybe<Scalars['String']['input']>;
};

/** Ordering options when selecting data from "validator". */
export type Validator_Order_By = {
  blocks_aggregate?: InputMaybe<Block_Aggregate_Order_By>;
  consensus_address?: InputMaybe<Order_By>;
  consensus_pubkey?: InputMaybe<Order_By>;
  double_sign_votes_aggregate?: InputMaybe<Double_Sign_Vote_Aggregate_Order_By>;
  pre_commits_aggregate?: InputMaybe<Pre_Commit_Aggregate_Order_By>;
  proposal_validator_status_snapshot?: InputMaybe<Proposal_Validator_Status_Snapshot_Order_By>;
  proposal_validator_status_snapshots_aggregate?: InputMaybe<Proposal_Validator_Status_Snapshot_Aggregate_Order_By>;
  validator_commissions_aggregate?: InputMaybe<Validator_Commission_Aggregate_Order_By>;
  validator_descriptions_aggregate?: InputMaybe<Validator_Description_Aggregate_Order_By>;
  validator_info?: InputMaybe<Validator_Info_Order_By>;
  validator_infos_aggregate?: InputMaybe<Validator_Info_Aggregate_Order_By>;
  validator_signing_infos_aggregate?: InputMaybe<Validator_Signing_Info_Aggregate_Order_By>;
  validator_statuses_aggregate?: InputMaybe<Validator_Status_Aggregate_Order_By>;
  validator_voting_powers_aggregate?: InputMaybe<Validator_Voting_Power_Aggregate_Order_By>;
};

/** select columns of table "validator" */
export enum Validator_Select_Column {
  /** column name */
  ConsensusAddress = 'consensus_address',
  /** column name */
  ConsensusPubkey = 'consensus_pubkey'
}

/** columns and relationships of "validator_signing_info" */
export type Validator_Signing_Info = {
  __typename?: 'validator_signing_info';
  height: Scalars['bigint']['output'];
  index_offset: Scalars['bigint']['output'];
  jailed_until: Scalars['timestamp']['output'];
  missed_blocks_counter: Scalars['bigint']['output'];
  start_height: Scalars['bigint']['output'];
  tombstoned: Scalars['Boolean']['output'];
  validator_address: Scalars['String']['output'];
};

/** order by aggregate values of table "validator_signing_info" */
export type Validator_Signing_Info_Aggregate_Order_By = {
  avg?: InputMaybe<Validator_Signing_Info_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Validator_Signing_Info_Max_Order_By>;
  min?: InputMaybe<Validator_Signing_Info_Min_Order_By>;
  stddev?: InputMaybe<Validator_Signing_Info_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Validator_Signing_Info_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Validator_Signing_Info_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Validator_Signing_Info_Sum_Order_By>;
  var_pop?: InputMaybe<Validator_Signing_Info_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Validator_Signing_Info_Var_Samp_Order_By>;
  variance?: InputMaybe<Validator_Signing_Info_Variance_Order_By>;
};

/** order by avg() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  index_offset?: InputMaybe<Order_By>;
  missed_blocks_counter?: InputMaybe<Order_By>;
  start_height?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "validator_signing_info". All fields are combined with a logical 'AND'. */
export type Validator_Signing_Info_Bool_Exp = {
  _and?: InputMaybe<Array<Validator_Signing_Info_Bool_Exp>>;
  _not?: InputMaybe<Validator_Signing_Info_Bool_Exp>;
  _or?: InputMaybe<Array<Validator_Signing_Info_Bool_Exp>>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  index_offset?: InputMaybe<Bigint_Comparison_Exp>;
  jailed_until?: InputMaybe<Timestamp_Comparison_Exp>;
  missed_blocks_counter?: InputMaybe<Bigint_Comparison_Exp>;
  start_height?: InputMaybe<Bigint_Comparison_Exp>;
  tombstoned?: InputMaybe<Boolean_Comparison_Exp>;
  validator_address?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Max_Order_By = {
  height?: InputMaybe<Order_By>;
  index_offset?: InputMaybe<Order_By>;
  jailed_until?: InputMaybe<Order_By>;
  missed_blocks_counter?: InputMaybe<Order_By>;
  start_height?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Min_Order_By = {
  height?: InputMaybe<Order_By>;
  index_offset?: InputMaybe<Order_By>;
  jailed_until?: InputMaybe<Order_By>;
  missed_blocks_counter?: InputMaybe<Order_By>;
  start_height?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "validator_signing_info". */
export type Validator_Signing_Info_Order_By = {
  height?: InputMaybe<Order_By>;
  index_offset?: InputMaybe<Order_By>;
  jailed_until?: InputMaybe<Order_By>;
  missed_blocks_counter?: InputMaybe<Order_By>;
  start_height?: InputMaybe<Order_By>;
  tombstoned?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
};

/** select columns of table "validator_signing_info" */
export enum Validator_Signing_Info_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  IndexOffset = 'index_offset',
  /** column name */
  JailedUntil = 'jailed_until',
  /** column name */
  MissedBlocksCounter = 'missed_blocks_counter',
  /** column name */
  StartHeight = 'start_height',
  /** column name */
  Tombstoned = 'tombstoned',
  /** column name */
  ValidatorAddress = 'validator_address'
}

/** order by stddev() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  index_offset?: InputMaybe<Order_By>;
  missed_blocks_counter?: InputMaybe<Order_By>;
  start_height?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  index_offset?: InputMaybe<Order_By>;
  missed_blocks_counter?: InputMaybe<Order_By>;
  start_height?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  index_offset?: InputMaybe<Order_By>;
  missed_blocks_counter?: InputMaybe<Order_By>;
  start_height?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "validator_signing_info" */
export type Validator_Signing_Info_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Validator_Signing_Info_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Validator_Signing_Info_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
  index_offset?: InputMaybe<Scalars['bigint']['input']>;
  jailed_until?: InputMaybe<Scalars['timestamp']['input']>;
  missed_blocks_counter?: InputMaybe<Scalars['bigint']['input']>;
  start_height?: InputMaybe<Scalars['bigint']['input']>;
  tombstoned?: InputMaybe<Scalars['Boolean']['input']>;
  validator_address?: InputMaybe<Scalars['String']['input']>;
};

/** order by sum() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  index_offset?: InputMaybe<Order_By>;
  missed_blocks_counter?: InputMaybe<Order_By>;
  start_height?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  index_offset?: InputMaybe<Order_By>;
  missed_blocks_counter?: InputMaybe<Order_By>;
  start_height?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  index_offset?: InputMaybe<Order_By>;
  missed_blocks_counter?: InputMaybe<Order_By>;
  start_height?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  index_offset?: InputMaybe<Order_By>;
  missed_blocks_counter?: InputMaybe<Order_By>;
  start_height?: InputMaybe<Order_By>;
};

/** columns and relationships of "validator_status" */
export type Validator_Status = {
  __typename?: 'validator_status';
  height: Scalars['bigint']['output'];
  jailed: Scalars['Boolean']['output'];
  status: Scalars['Int']['output'];
  /** An object relationship */
  validator: Validator;
  validator_address: Scalars['String']['output'];
};

/** aggregated selection of "validator_status" */
export type Validator_Status_Aggregate = {
  __typename?: 'validator_status_aggregate';
  aggregate?: Maybe<Validator_Status_Aggregate_Fields>;
  nodes: Array<Validator_Status>;
};

export type Validator_Status_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Validator_Status_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Validator_Status_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Validator_Status_Aggregate_Bool_Exp_Count>;
};

export type Validator_Status_Aggregate_Bool_Exp_Bool_And = {
  arguments: Validator_Status_Select_Column_Validator_Status_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Validator_Status_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Validator_Status_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Validator_Status_Select_Column_Validator_Status_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Validator_Status_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Validator_Status_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Validator_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Validator_Status_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "validator_status" */
export type Validator_Status_Aggregate_Fields = {
  __typename?: 'validator_status_aggregate_fields';
  avg?: Maybe<Validator_Status_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Validator_Status_Max_Fields>;
  min?: Maybe<Validator_Status_Min_Fields>;
  stddev?: Maybe<Validator_Status_Stddev_Fields>;
  stddev_pop?: Maybe<Validator_Status_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Validator_Status_Stddev_Samp_Fields>;
  sum?: Maybe<Validator_Status_Sum_Fields>;
  var_pop?: Maybe<Validator_Status_Var_Pop_Fields>;
  var_samp?: Maybe<Validator_Status_Var_Samp_Fields>;
  variance?: Maybe<Validator_Status_Variance_Fields>;
};


/** aggregate fields of "validator_status" */
export type Validator_Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Validator_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "validator_status" */
export type Validator_Status_Aggregate_Order_By = {
  avg?: InputMaybe<Validator_Status_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Validator_Status_Max_Order_By>;
  min?: InputMaybe<Validator_Status_Min_Order_By>;
  stddev?: InputMaybe<Validator_Status_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Validator_Status_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Validator_Status_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Validator_Status_Sum_Order_By>;
  var_pop?: InputMaybe<Validator_Status_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Validator_Status_Var_Samp_Order_By>;
  variance?: InputMaybe<Validator_Status_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Validator_Status_Avg_Fields = {
  __typename?: 'validator_status_avg_fields';
  height?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "validator_status" */
export type Validator_Status_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "validator_status". All fields are combined with a logical 'AND'. */
export type Validator_Status_Bool_Exp = {
  _and?: InputMaybe<Array<Validator_Status_Bool_Exp>>;
  _not?: InputMaybe<Validator_Status_Bool_Exp>;
  _or?: InputMaybe<Array<Validator_Status_Bool_Exp>>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  jailed?: InputMaybe<Boolean_Comparison_Exp>;
  status?: InputMaybe<Int_Comparison_Exp>;
  validator?: InputMaybe<Validator_Bool_Exp>;
  validator_address?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Validator_Status_Max_Fields = {
  __typename?: 'validator_status_max_fields';
  height?: Maybe<Scalars['bigint']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  validator_address?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "validator_status" */
export type Validator_Status_Max_Order_By = {
  height?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Validator_Status_Min_Fields = {
  __typename?: 'validator_status_min_fields';
  height?: Maybe<Scalars['bigint']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  validator_address?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "validator_status" */
export type Validator_Status_Min_Order_By = {
  height?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "validator_status". */
export type Validator_Status_Order_By = {
  height?: InputMaybe<Order_By>;
  jailed?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  validator?: InputMaybe<Validator_Order_By>;
  validator_address?: InputMaybe<Order_By>;
};

/** select columns of table "validator_status" */
export enum Validator_Status_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Jailed = 'jailed',
  /** column name */
  Status = 'status',
  /** column name */
  ValidatorAddress = 'validator_address'
}

/** select "validator_status_aggregate_bool_exp_bool_and_arguments_columns" columns of table "validator_status" */
export enum Validator_Status_Select_Column_Validator_Status_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Jailed = 'jailed'
}

/** select "validator_status_aggregate_bool_exp_bool_or_arguments_columns" columns of table "validator_status" */
export enum Validator_Status_Select_Column_Validator_Status_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Jailed = 'jailed'
}

/** aggregate stddev on columns */
export type Validator_Status_Stddev_Fields = {
  __typename?: 'validator_status_stddev_fields';
  height?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "validator_status" */
export type Validator_Status_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Validator_Status_Stddev_Pop_Fields = {
  __typename?: 'validator_status_stddev_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "validator_status" */
export type Validator_Status_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Validator_Status_Stddev_Samp_Fields = {
  __typename?: 'validator_status_stddev_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "validator_status" */
export type Validator_Status_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "validator_status" */
export type Validator_Status_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Validator_Status_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Validator_Status_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
  jailed?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  validator_address?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Validator_Status_Sum_Fields = {
  __typename?: 'validator_status_sum_fields';
  height?: Maybe<Scalars['bigint']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "validator_status" */
export type Validator_Status_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Validator_Status_Var_Pop_Fields = {
  __typename?: 'validator_status_var_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "validator_status" */
export type Validator_Status_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Validator_Status_Var_Samp_Fields = {
  __typename?: 'validator_status_var_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "validator_status" */
export type Validator_Status_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Validator_Status_Variance_Fields = {
  __typename?: 'validator_status_variance_fields';
  height?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "validator_status" */
export type Validator_Status_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "validator" */
export type Validator_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Validator_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Validator_Stream_Cursor_Value_Input = {
  consensus_address?: InputMaybe<Scalars['String']['input']>;
  consensus_pubkey?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "validator_voting_power" */
export type Validator_Voting_Power = {
  __typename?: 'validator_voting_power';
  /** An object relationship */
  block: Block;
  height: Scalars['bigint']['output'];
  /** An object relationship */
  validator: Validator;
  validator_address: Scalars['String']['output'];
  voting_power: Scalars['bigint']['output'];
};

/** aggregated selection of "validator_voting_power" */
export type Validator_Voting_Power_Aggregate = {
  __typename?: 'validator_voting_power_aggregate';
  aggregate?: Maybe<Validator_Voting_Power_Aggregate_Fields>;
  nodes: Array<Validator_Voting_Power>;
};

export type Validator_Voting_Power_Aggregate_Bool_Exp = {
  count?: InputMaybe<Validator_Voting_Power_Aggregate_Bool_Exp_Count>;
};

export type Validator_Voting_Power_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Validator_Voting_Power_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "validator_voting_power" */
export type Validator_Voting_Power_Aggregate_Fields = {
  __typename?: 'validator_voting_power_aggregate_fields';
  avg?: Maybe<Validator_Voting_Power_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Validator_Voting_Power_Max_Fields>;
  min?: Maybe<Validator_Voting_Power_Min_Fields>;
  stddev?: Maybe<Validator_Voting_Power_Stddev_Fields>;
  stddev_pop?: Maybe<Validator_Voting_Power_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Validator_Voting_Power_Stddev_Samp_Fields>;
  sum?: Maybe<Validator_Voting_Power_Sum_Fields>;
  var_pop?: Maybe<Validator_Voting_Power_Var_Pop_Fields>;
  var_samp?: Maybe<Validator_Voting_Power_Var_Samp_Fields>;
  variance?: Maybe<Validator_Voting_Power_Variance_Fields>;
};


/** aggregate fields of "validator_voting_power" */
export type Validator_Voting_Power_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "validator_voting_power" */
export type Validator_Voting_Power_Aggregate_Order_By = {
  avg?: InputMaybe<Validator_Voting_Power_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Validator_Voting_Power_Max_Order_By>;
  min?: InputMaybe<Validator_Voting_Power_Min_Order_By>;
  stddev?: InputMaybe<Validator_Voting_Power_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Validator_Voting_Power_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Validator_Voting_Power_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Validator_Voting_Power_Sum_Order_By>;
  var_pop?: InputMaybe<Validator_Voting_Power_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Validator_Voting_Power_Var_Samp_Order_By>;
  variance?: InputMaybe<Validator_Voting_Power_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Validator_Voting_Power_Avg_Fields = {
  __typename?: 'validator_voting_power_avg_fields';
  height?: Maybe<Scalars['Float']['output']>;
  voting_power?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "validator_voting_power". All fields are combined with a logical 'AND'. */
export type Validator_Voting_Power_Bool_Exp = {
  _and?: InputMaybe<Array<Validator_Voting_Power_Bool_Exp>>;
  _not?: InputMaybe<Validator_Voting_Power_Bool_Exp>;
  _or?: InputMaybe<Array<Validator_Voting_Power_Bool_Exp>>;
  block?: InputMaybe<Block_Bool_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  validator?: InputMaybe<Validator_Bool_Exp>;
  validator_address?: InputMaybe<String_Comparison_Exp>;
  voting_power?: InputMaybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Validator_Voting_Power_Max_Fields = {
  __typename?: 'validator_voting_power_max_fields';
  height?: Maybe<Scalars['bigint']['output']>;
  validator_address?: Maybe<Scalars['String']['output']>;
  voting_power?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Max_Order_By = {
  height?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Validator_Voting_Power_Min_Fields = {
  __typename?: 'validator_voting_power_min_fields';
  height?: Maybe<Scalars['bigint']['output']>;
  validator_address?: Maybe<Scalars['String']['output']>;
  voting_power?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Min_Order_By = {
  height?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "validator_voting_power". */
export type Validator_Voting_Power_Order_By = {
  block?: InputMaybe<Block_Order_By>;
  height?: InputMaybe<Order_By>;
  validator?: InputMaybe<Validator_Order_By>;
  validator_address?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** select columns of table "validator_voting_power" */
export enum Validator_Voting_Power_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  ValidatorAddress = 'validator_address',
  /** column name */
  VotingPower = 'voting_power'
}

/** aggregate stddev on columns */
export type Validator_Voting_Power_Stddev_Fields = {
  __typename?: 'validator_voting_power_stddev_fields';
  height?: Maybe<Scalars['Float']['output']>;
  voting_power?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Validator_Voting_Power_Stddev_Pop_Fields = {
  __typename?: 'validator_voting_power_stddev_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
  voting_power?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Validator_Voting_Power_Stddev_Samp_Fields = {
  __typename?: 'validator_voting_power_stddev_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
  voting_power?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "validator_voting_power" */
export type Validator_Voting_Power_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Validator_Voting_Power_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Validator_Voting_Power_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
  validator_address?: InputMaybe<Scalars['String']['input']>;
  voting_power?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Validator_Voting_Power_Sum_Fields = {
  __typename?: 'validator_voting_power_sum_fields';
  height?: Maybe<Scalars['bigint']['output']>;
  voting_power?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Validator_Voting_Power_Var_Pop_Fields = {
  __typename?: 'validator_voting_power_var_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
  voting_power?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Validator_Voting_Power_Var_Samp_Fields = {
  __typename?: 'validator_voting_power_var_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
  voting_power?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Validator_Voting_Power_Variance_Fields = {
  __typename?: 'validator_voting_power_variance_fields';
  height?: Maybe<Scalars['Float']['output']>;
  voting_power?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** columns and relationships of "vesting_account" */
export type Vesting_Account = {
  __typename?: 'vesting_account';
  /** An object relationship */
  account: Account;
  address: Scalars['String']['output'];
  end_time: Scalars['timestamp']['output'];
  original_vesting: Scalars['_coin']['output'];
  start_time?: Maybe<Scalars['timestamp']['output']>;
  type: Scalars['String']['output'];
  /** An array relationship */
  vesting_periods: Array<Vesting_Period>;
};


/** columns and relationships of "vesting_account" */
export type Vesting_AccountVesting_PeriodsArgs = {
  distinct_on?: InputMaybe<Array<Vesting_Period_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vesting_Period_Order_By>>;
  where?: InputMaybe<Vesting_Period_Bool_Exp>;
};

/** order by aggregate values of table "vesting_account" */
export type Vesting_Account_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Vesting_Account_Max_Order_By>;
  min?: InputMaybe<Vesting_Account_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "vesting_account". All fields are combined with a logical 'AND'. */
export type Vesting_Account_Bool_Exp = {
  _and?: InputMaybe<Array<Vesting_Account_Bool_Exp>>;
  _not?: InputMaybe<Vesting_Account_Bool_Exp>;
  _or?: InputMaybe<Array<Vesting_Account_Bool_Exp>>;
  account?: InputMaybe<Account_Bool_Exp>;
  address?: InputMaybe<String_Comparison_Exp>;
  end_time?: InputMaybe<Timestamp_Comparison_Exp>;
  original_vesting?: InputMaybe<_Coin_Comparison_Exp>;
  start_time?: InputMaybe<Timestamp_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  vesting_periods?: InputMaybe<Vesting_Period_Bool_Exp>;
};

/** order by max() on columns of table "vesting_account" */
export type Vesting_Account_Max_Order_By = {
  address?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "vesting_account" */
export type Vesting_Account_Min_Order_By = {
  address?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "vesting_account". */
export type Vesting_Account_Order_By = {
  account?: InputMaybe<Account_Order_By>;
  address?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  original_vesting?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  vesting_periods_aggregate?: InputMaybe<Vesting_Period_Aggregate_Order_By>;
};

/** select columns of table "vesting_account" */
export enum Vesting_Account_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  EndTime = 'end_time',
  /** column name */
  OriginalVesting = 'original_vesting',
  /** column name */
  StartTime = 'start_time',
  /** column name */
  Type = 'type'
}

/** Streaming cursor of the table "vesting_account" */
export type Vesting_Account_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Vesting_Account_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Vesting_Account_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  end_time?: InputMaybe<Scalars['timestamp']['input']>;
  original_vesting?: InputMaybe<Scalars['_coin']['input']>;
  start_time?: InputMaybe<Scalars['timestamp']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "vesting_period" */
export type Vesting_Period = {
  __typename?: 'vesting_period';
  amount: Scalars['_coin']['output'];
  length: Scalars['bigint']['output'];
  period_order: Scalars['bigint']['output'];
  /** An object relationship */
  vesting_account: Vesting_Account;
};

/** order by aggregate values of table "vesting_period" */
export type Vesting_Period_Aggregate_Order_By = {
  avg?: InputMaybe<Vesting_Period_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Vesting_Period_Max_Order_By>;
  min?: InputMaybe<Vesting_Period_Min_Order_By>;
  stddev?: InputMaybe<Vesting_Period_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Vesting_Period_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Vesting_Period_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Vesting_Period_Sum_Order_By>;
  var_pop?: InputMaybe<Vesting_Period_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Vesting_Period_Var_Samp_Order_By>;
  variance?: InputMaybe<Vesting_Period_Variance_Order_By>;
};

/** order by avg() on columns of table "vesting_period" */
export type Vesting_Period_Avg_Order_By = {
  length?: InputMaybe<Order_By>;
  period_order?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "vesting_period". All fields are combined with a logical 'AND'. */
export type Vesting_Period_Bool_Exp = {
  _and?: InputMaybe<Array<Vesting_Period_Bool_Exp>>;
  _not?: InputMaybe<Vesting_Period_Bool_Exp>;
  _or?: InputMaybe<Array<Vesting_Period_Bool_Exp>>;
  amount?: InputMaybe<_Coin_Comparison_Exp>;
  length?: InputMaybe<Bigint_Comparison_Exp>;
  period_order?: InputMaybe<Bigint_Comparison_Exp>;
  vesting_account?: InputMaybe<Vesting_Account_Bool_Exp>;
};

/** order by max() on columns of table "vesting_period" */
export type Vesting_Period_Max_Order_By = {
  length?: InputMaybe<Order_By>;
  period_order?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "vesting_period" */
export type Vesting_Period_Min_Order_By = {
  length?: InputMaybe<Order_By>;
  period_order?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "vesting_period". */
export type Vesting_Period_Order_By = {
  amount?: InputMaybe<Order_By>;
  length?: InputMaybe<Order_By>;
  period_order?: InputMaybe<Order_By>;
  vesting_account?: InputMaybe<Vesting_Account_Order_By>;
};

/** select columns of table "vesting_period" */
export enum Vesting_Period_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Length = 'length',
  /** column name */
  PeriodOrder = 'period_order'
}

/** order by stddev() on columns of table "vesting_period" */
export type Vesting_Period_Stddev_Order_By = {
  length?: InputMaybe<Order_By>;
  period_order?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "vesting_period" */
export type Vesting_Period_Stddev_Pop_Order_By = {
  length?: InputMaybe<Order_By>;
  period_order?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "vesting_period" */
export type Vesting_Period_Stddev_Samp_Order_By = {
  length?: InputMaybe<Order_By>;
  period_order?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "vesting_period" */
export type Vesting_Period_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Vesting_Period_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Vesting_Period_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['_coin']['input']>;
  length?: InputMaybe<Scalars['bigint']['input']>;
  period_order?: InputMaybe<Scalars['bigint']['input']>;
};

/** order by sum() on columns of table "vesting_period" */
export type Vesting_Period_Sum_Order_By = {
  length?: InputMaybe<Order_By>;
  period_order?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "vesting_period" */
export type Vesting_Period_Var_Pop_Order_By = {
  length?: InputMaybe<Order_By>;
  period_order?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "vesting_period" */
export type Vesting_Period_Var_Samp_Order_By = {
  length?: InputMaybe<Order_By>;
  period_order?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "vesting_period" */
export type Vesting_Period_Variance_Order_By = {
  length?: InputMaybe<Order_By>;
  period_order?: InputMaybe<Order_By>;
};

export type AccountCommissionQueryVariables = Exact<{
  validatorAddress: Scalars['String']['input'];
}>;


export type AccountCommissionQuery = { __typename?: 'query_root', commission?: { __typename?: 'ActionValidatorCommissionAmount', coins?: Array<any | null> | null } | null };

export type AccountWithdrawalAddressQueryVariables = Exact<{
  address: Scalars['String']['input'];
}>;


export type AccountWithdrawalAddressQuery = { __typename?: 'query_root', withdrawalAddress: { __typename?: 'ActionAddress', address: string } };

export type AccountBalancesQueryVariables = Exact<{
  address: Scalars['String']['input'];
}>;


export type AccountBalancesQuery = { __typename?: 'query_root', accountBalances?: { __typename?: 'ActionBalance', coins?: Array<any | null> | null } | null };

export type AccountDelegationBalanceQueryVariables = Exact<{
  address: Scalars['String']['input'];
}>;


export type AccountDelegationBalanceQuery = { __typename?: 'query_root', delegationBalance?: { __typename?: 'ActionBalance', coins?: Array<any | null> | null } | null };

export type AccountUnbondingBalanceQueryVariables = Exact<{
  address: Scalars['String']['input'];
}>;


export type AccountUnbondingBalanceQuery = { __typename?: 'query_root', unbondingBalance?: { __typename?: 'ActionBalance', coins?: Array<any | null> | null } | null };

export type AccountDelegationRewardsQueryVariables = Exact<{
  address: Scalars['String']['input'];
}>;


export type AccountDelegationRewardsQuery = { __typename?: 'query_root', delegationRewards?: Array<{ __typename?: 'ActionDelegationReward', coins?: Array<any | null> | null, validatorAddress: string } | null> | null };

export type AccountDelegationsQueryVariables = Exact<{
  address: Scalars['String']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  pagination?: Scalars['Boolean']['input'];
}>;


export type AccountDelegationsQuery = { __typename?: 'query_root', delegations?: { __typename?: 'ActionDelegationResponse', delegations?: Array<any | null> | null, pagination?: any | null } | null };

export type AccountRedelegationsQueryVariables = Exact<{
  address: Scalars['String']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  pagination?: Scalars['Boolean']['input'];
}>;


export type AccountRedelegationsQuery = { __typename?: 'query_root', redelegations?: { __typename?: 'ActionRedelegationResponse', redelegations?: Array<any | null> | null, pagination?: any | null } | null };

export type AccountUndelegationsQueryVariables = Exact<{
  address: Scalars['String']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  pagination?: Scalars['Boolean']['input'];
}>;


export type AccountUndelegationsQuery = { __typename?: 'query_root', undelegations?: { __typename?: 'ActionUnbondingDelegationResponse', pagination?: any | null, undelegations?: Array<any | null> | null } | null };

export type ActiveValidatorCountQueryVariables = Exact<{ [key: string]: never; }>;


export type ActiveValidatorCountQuery = { __typename?: 'query_root', activeTotal: { __typename?: 'validator_status_aggregate', aggregate?: { __typename?: 'validator_status_aggregate_fields', count: number } | null }, inactiveTotal: { __typename?: 'validator_status_aggregate', aggregate?: { __typename?: 'validator_status_aggregate_fields', count: number } | null }, total: { __typename?: 'validator_status_aggregate', aggregate?: { __typename?: 'validator_status_aggregate_fields', count: number } | null } };

export type BlockDetailsQueryVariables = Exact<{
  height?: InputMaybe<Scalars['bigint']['input']>;
  signatureHeight?: InputMaybe<Scalars['bigint']['input']>;
}>;


export type BlockDetailsQuery = { __typename?: 'query_root', transaction: Array<{ __typename?: 'transaction', height: any, hash: string, messages: any, success: boolean, logs?: any | null }>, block: Array<{ __typename?: 'block', height: any, hash: string, timestamp: any, txs?: number | null, validator?: { __typename?: 'validator', validatorInfo?: { __typename?: 'validator_info', operatorAddress: string } | null } | null }>, preCommitsAggregate: { __typename?: 'pre_commit_aggregate', aggregate?: { __typename?: 'pre_commit_aggregate_fields', sum?: { __typename?: 'pre_commit_sum_fields', votingPower?: any | null } | null } | null }, preCommits: Array<{ __typename?: 'pre_commit', validator: { __typename?: 'validator', validatorInfo?: { __typename?: 'validator_info', operatorAddress: string } | null } }> };

export type LatestBlockHeightListenerSubscriptionVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type LatestBlockHeightListenerSubscription = { __typename?: 'subscription_root', height: Array<{ __typename?: 'block', height: any }> };

export type AverageBlockTimeQueryVariables = Exact<{ [key: string]: never; }>;


export type AverageBlockTimeQuery = { __typename?: 'query_root', averageBlockTime: Array<{ __typename?: 'average_block_time_per_hour', averageTime: any }> };

export type LatestBlockTimestampQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type LatestBlockTimestampQuery = { __typename?: 'query_root', block: Array<{ __typename?: 'block', timestamp: any }> };

export type BlocksListenerSubscriptionVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type BlocksListenerSubscription = { __typename?: 'subscription_root', blocks: Array<{ __typename?: 'block', height: any, hash: string, timestamp: any, txs?: number | null, validator?: { __typename?: 'validator', validatorInfo?: { __typename?: 'validator_info', operatorAddress: string } | null } | null }> };

export type BlocksQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type BlocksQuery = { __typename?: 'query_root', blocks: Array<{ __typename?: 'block', height: any, hash: string, timestamp: any, txs?: number | null, validator?: { __typename?: 'validator', validatorInfo?: { __typename?: 'validator_info', self_delegate_address?: string | null, operatorAddress: string } | null, validatorDescriptions: Array<{ __typename?: 'validator_description', moniker?: string | null, identity?: string | null }> } | null }> };

export type ChainIdQueryVariables = Exact<{ [key: string]: never; }>;


export type ChainIdQuery = { __typename?: 'query_root', genesis: Array<{ __typename?: 'genesis', time: any, chainId: string }> };

export type MarketDataQueryVariables = Exact<{
  denom?: InputMaybe<Scalars['String']['input']>;
}>;


export type MarketDataQuery = { __typename?: 'query_root', communityPool: Array<{ __typename?: 'community_pool', coins: any }>, inflation: Array<{ __typename?: 'inflation', value: any }>, tokenPrice: Array<{ __typename?: 'token_price', price: any, marketCap: any }>, supply: Array<{ __typename?: 'supply', coins: any }>, bondedTokens: Array<{ __typename?: 'staking_pool', bonded_tokens: string }>, distributionParams: Array<{ __typename?: 'distribution_params', params: any }> };

export type MessageTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type MessageTypesQuery = { __typename?: 'query_root', msgTypes: Array<{ __typename?: 'message', type: string }> };

export type MsgTypesByAddressQueryVariables = Exact<{
  addresses?: InputMaybe<Scalars['_text']['input']>;
}>;


export type MsgTypesByAddressQuery = { __typename?: 'query_root', msgTypes: Array<{ __typename?: 'message', height: any, index: any, involved_accounts_addresses: any }> };

export type MessagesByTypesListenerSubscriptionVariables = Exact<{
  types?: InputMaybe<Scalars['_text']['input']>;
  limit?: InputMaybe<Scalars['bigint']['input']>;
  offset?: InputMaybe<Scalars['bigint']['input']>;
}>;


export type MessagesByTypesListenerSubscription = { __typename?: 'subscription_root', messagesByTypes: Array<{ __typename?: 'message', transaction?: { __typename?: 'transaction', height: any, hash: string, success: boolean, messages: any, logs?: any | null, block: { __typename?: 'block', height: any, timestamp: any } } | null }> };

export type MessagesByTypesQueryVariables = Exact<{
  types?: InputMaybe<Scalars['_text']['input']>;
  limit?: InputMaybe<Scalars['bigint']['input']>;
  offset?: InputMaybe<Scalars['bigint']['input']>;
}>;


export type MessagesByTypesQuery = { __typename?: 'query_root', messagesByTypes: Array<{ __typename?: 'message', transaction?: { __typename?: 'transaction', height: any, hash: string, success: boolean, messages: any, logs?: any | null, block: { __typename?: 'block', height: any, timestamp: any } } | null }> };

export type GetMessagesByAddressQueryVariables = Exact<{
  address?: InputMaybe<Scalars['_text']['input']>;
  limit?: InputMaybe<Scalars['bigint']['input']>;
  offset?: InputMaybe<Scalars['bigint']['input']>;
  types?: InputMaybe<Scalars['_text']['input']>;
}>;


export type GetMessagesByAddressQuery = { __typename?: 'query_root', messagesByAddress: Array<{ __typename?: 'message', transaction?: { __typename?: 'transaction', height: any, hash: string, success: boolean, messages: any, logs?: any | null, block: { __typename?: 'block', height: any, timestamp: any } } | null }> };

export type GetTransactionsByAddressRegexQueryVariables = Exact<{
  _regex?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetTransactionsByAddressRegexQuery = { __typename?: 'query_root', transaction: Array<{ __typename?: 'transaction', hash: string, signatures: any, fee: any, gas_used?: any | null, gas_wanted?: any | null, logs?: any | null, height: any, messages: any, success: boolean, signer_infos: any, raw_log?: string | null }> };

export type OnlineVotingPowerQueryVariables = Exact<{ [key: string]: never; }>;


export type OnlineVotingPowerQuery = { __typename?: 'query_root', activeTotal: { __typename?: 'validator_status_aggregate', aggregate?: { __typename?: 'validator_status_aggregate_fields', count: number } | null }, validatorVotingPowerAggregate: { __typename?: 'validator_voting_power_aggregate', aggregate?: { __typename?: 'validator_voting_power_aggregate_fields', sum?: { __typename?: 'validator_voting_power_sum_fields', votingPower?: any | null } | null } | null }, stakingPool: Array<{ __typename?: 'staking_pool', bonded: string }>, stakingParams: Array<{ __typename?: 'staking_params', params: any }> };

export type ParamsQueryVariables = Exact<{ [key: string]: never; }>;


export type ParamsQuery = { __typename?: 'query_root', stakingParams: Array<{ __typename?: 'staking_params', params: any }>, slashingParams: Array<{ __typename?: 'slashing_params', params: any }>, mintParams: Array<{ __typename?: 'mint_params', params: any }>, distributionParams: Array<{ __typename?: 'distribution_params', params: any }>, govParams: Array<{ __typename?: 'gov_params', depositParams: any, tallyParams: any, votingParams: any }> };

export type ProposalDetailsQueryVariables = Exact<{
  proposalId?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ProposalDetailsQuery = { __typename?: 'query_root', proposal: Array<{ __typename?: 'proposal', title: string, description: string, status?: string | null, content: any, proposer: string, proposalId: number, submitTime: any, proposalType: string, depositEndTime?: any | null, votingStartTime?: any | null, votingEndTime?: any | null }> };

export type ProposalDetailsTallyQueryVariables = Exact<{
  proposalId?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ProposalDetailsTallyQuery = { __typename?: 'query_root', proposalTallyResult: Array<{ __typename?: 'proposal_tally_result', yes: string, no: string, abstain: string, noWithVeto: string }>, stakingPool: Array<{ __typename?: 'proposal_staking_pool_snapshot', bondedTokens: string }>, quorum: Array<{ __typename?: 'gov_params', tallyParams: any }> };

export type ProposalDetailsDepositsQueryVariables = Exact<{
  proposalId?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ProposalDetailsDepositsQuery = { __typename?: 'query_root', proposalDeposit: Array<{ __typename?: 'proposal_deposit', amount?: any | null, depositorAddress?: string | null, block?: { __typename?: 'block', timestamp: any } | null }> };

export type ProposalDetailsVotesQueryVariables = Exact<{
  proposalId?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ProposalDetailsVotesQuery = { __typename?: 'query_root', proposalVote: Array<{ __typename?: 'proposal_vote', option: string, voterAddress: string }>, validatorStatuses: Array<{ __typename?: 'proposal_validator_status_snapshot', validator: { __typename?: 'validator', validatorInfo?: { __typename?: 'validator_info', selfDelegateAddress?: string | null } | null } }> };

export type ProposalsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ProposalsQuery = { __typename?: 'query_root', proposals: Array<{ __typename?: 'proposal', title: string, status?: string | null, description: string, proposalId: number }>, total: { __typename?: 'proposal_aggregate', aggregate?: { __typename?: 'proposal_aggregate_fields', count: number } | null } };

export type TokenPriceListenerSubscriptionVariables = Exact<{
  denom?: InputMaybe<Scalars['String']['input']>;
}>;


export type TokenPriceListenerSubscription = { __typename?: 'subscription_root', tokenPrice: Array<{ __typename?: 'token_price', price: any, timestamp: any, marketCap: any, unitName: string }> };

export type TokenPriceHistoryQueryVariables = Exact<{
  denom?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type TokenPriceHistoryQuery = { __typename?: 'query_root', tokenPrice: Array<{ __typename?: 'token_price_history', price: any, timestamp: any }> };

export type TokenomicsQueryVariables = Exact<{ [key: string]: never; }>;


export type TokenomicsQuery = { __typename?: 'query_root', stakingParams: Array<{ __typename?: 'staking_params', params: any }>, stakingPool: Array<{ __typename?: 'staking_pool', bonded: string, unbonded: string }>, supply: Array<{ __typename?: 'supply', coins: any }> };

export type TransactionDetailsQueryVariables = Exact<{
  hash?: InputMaybe<Scalars['String']['input']>;
}>;


export type TransactionDetailsQuery = { __typename?: 'query_root', transaction: Array<{ __typename?: 'transaction', logs?: any | null, hash: string, height: any, fee: any, gasUsed?: any | null, gasWanted?: any | null, success: boolean, memo?: string | null, messages: any, rawLog?: string | null, block: { __typename?: 'block', timestamp: any } }> };

export type TransactionsListenerSubscriptionVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type TransactionsListenerSubscription = { __typename?: 'subscription_root', transactions: Array<{ __typename?: 'transaction', height: any, hash: string, success: boolean, messages: any, logs?: any | null, block: { __typename?: 'block', timestamp: any } }> };

export type TransactionsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type TransactionsQuery = { __typename?: 'query_root', transactions: Array<{ __typename?: 'transaction', height: any, hash: string, success: boolean, messages: any, logs?: any | null, block: { __typename?: 'block', timestamp: any } }> };

export type LastHundredBlocksSubscriptionVariables = Exact<{
  address?: InputMaybe<Scalars['String']['input']>;
}>;


export type LastHundredBlocksSubscription = { __typename?: 'subscription_root', block: Array<{ __typename?: 'block', height: any, validator?: { __typename?: 'validator', validatorInfo?: { __typename?: 'validator_info', operatorAddress: string } | null } | null, transactions: Array<{ __typename?: 'transaction', hash: string }>, precommits: Array<{ __typename?: 'pre_commit', validatorAddress: string }> }> };

export type ValidatorLastSeenListenerSubscriptionVariables = Exact<{
  address?: InputMaybe<Scalars['String']['input']>;
}>;


export type ValidatorLastSeenListenerSubscription = { __typename?: 'subscription_root', preCommit: Array<{ __typename?: 'pre_commit', height: any, timestamp: any }> };

export type ValidatorDescriptionQueryVariables = Exact<{
  address?: InputMaybe<Scalars['String']['input']>;
}>;


export type ValidatorDescriptionQuery = { __typename?: 'query_root', validator: Array<{ __typename?: 'validator', validatorDescriptions: Array<{ __typename?: 'validator_description', details?: string | null, website?: string | null }> }> };

export type ValidatorStatusesQueryVariables = Exact<{
  address?: InputMaybe<Scalars['String']['input']>;
}>;


export type ValidatorStatusesQuery = { __typename?: 'query_root', validator: Array<{ __typename?: 'validator', validatorStatuses: Array<{ __typename?: 'validator_status', status: number, jailed: boolean, height: any }> }>, slashingParams: Array<{ __typename?: 'slashing_params', params: any }> };

export type ValidatorSigningInfosQueryVariables = Exact<{
  address?: InputMaybe<Scalars['String']['input']>;
}>;


export type ValidatorSigningInfosQuery = { __typename?: 'query_root', validator: Array<{ __typename?: 'validator', validatorSigningInfos: Array<{ __typename?: 'validator_signing_info', tombstoned: boolean, missedBlocksCounter: any }> }> };

export type ValidatorInfoQueryVariables = Exact<{
  address?: InputMaybe<Scalars['String']['input']>;
}>;


export type ValidatorInfoQuery = { __typename?: 'query_root', validator: Array<{ __typename?: 'validator', validatorInfo?: { __typename?: 'validator_info', operatorAddress: string, selfDelegateAddress?: string | null, maxRate: string } | null, validatorDescriptions: Array<{ __typename?: 'validator_description', details?: string | null, website?: string | null }>, validatorStatuses: Array<{ __typename?: 'validator_status', status: number, jailed: boolean, height: any }>, validatorSigningInfos: Array<{ __typename?: 'validator_signing_info', tombstoned: boolean, missedBlocksCounter: any }>, validatorCommissions: Array<{ __typename?: 'validator_commission', commission: any }> }>, slashingParams: Array<{ __typename?: 'slashing_params', params: any }> };

export type ValidatorCommissionQueryVariables = Exact<{
  address?: InputMaybe<Scalars['String']['input']>;
}>;


export type ValidatorCommissionQuery = { __typename?: 'query_root', validator: Array<{ __typename?: 'validator', validatorCommissions: Array<{ __typename?: 'validator_commission', commission: any }> }> };

export type ValidatorVotingPowersQueryVariables = Exact<{
  address?: InputMaybe<Scalars['String']['input']>;
}>;


export type ValidatorVotingPowersQuery = { __typename?: 'query_root', validator: Array<{ __typename?: 'validator', validatorVotingPowers: Array<{ __typename?: 'validator_voting_power', height: any, votingPower: any }>, validatorStatuses: Array<{ __typename?: 'validator_status', status: number }> }>, stakingPool: Array<{ __typename?: 'staking_pool', height: any, bonded: string }> };

export type ValidatorAddressQueryVariables = Exact<{
  address?: InputMaybe<Scalars['String']['input']>;
}>;


export type ValidatorAddressQuery = { __typename?: 'query_root', validator: Array<{ __typename?: 'validator', validatorInfo?: { __typename?: 'validator_info', operatorAddress: string, selfDelegateAddress?: string | null } | null }> };

export type ValidatorDelegationsQueryVariables = Exact<{
  validatorAddress: Scalars['String']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  pagination?: Scalars['Boolean']['input'];
}>;


export type ValidatorDelegationsQuery = { __typename?: 'query_root', delegations?: { __typename?: 'ActionDelegationResponse', delegations?: Array<any | null> | null, pagination?: any | null } | null };

export type ValidatorRedelegationsQueryVariables = Exact<{
  validatorAddress: Scalars['String']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  pagination?: Scalars['Boolean']['input'];
}>;


export type ValidatorRedelegationsQuery = { __typename?: 'query_root', redelegations?: { __typename?: 'ActionRedelegationResponse', redelegations?: Array<any | null> | null, pagination?: any | null } | null };

export type ValidatorUndelegationsQueryVariables = Exact<{
  validatorAddress: Scalars['String']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  pagination?: Scalars['Boolean']['input'];
}>;


export type ValidatorUndelegationsQuery = { __typename?: 'query_root', undelegations?: { __typename?: 'ActionUnbondingDelegationResponse', pagination?: any | null, undelegations?: Array<any | null> | null } | null };

export type ValidatorsQueryVariables = Exact<{ [key: string]: never; }>;


export type ValidatorsQuery = { __typename?: 'query_root', stakingPool: Array<{ __typename?: 'staking_pool', bondedTokens: string }>, validator: Array<{ __typename?: 'validator', validatorStatuses: Array<{ __typename?: 'validator_status', status: number, jailed: boolean, height: any }>, validatorSigningInfos: Array<{ __typename?: 'validator_signing_info', tombstoned: boolean, missedBlocksCounter: any }>, validatorInfo?: { __typename?: 'validator_info', operatorAddress: string, selfDelegateAddress?: string | null } | null, validatorVotingPowers: Array<{ __typename?: 'validator_voting_power', votingPower: any }>, validatorCommissions: Array<{ __typename?: 'validator_commission', commission: any }> }>, slashingParams: Array<{ __typename?: 'slashing_params', params: any }> };

export type ValidatorAddressesQueryVariables = Exact<{ [key: string]: never; }>;


export type ValidatorAddressesQuery = { __typename?: 'query_root', validator: Array<{ __typename?: 'validator', validatorInfo?: { __typename?: 'validator_info', operatorAddress: string, selfDelegateAddress?: string | null, consensusAddress: string } | null, validatorDescriptions: Array<{ __typename?: 'validator_description', moniker?: string | null, avatarUrl?: string | null }> }> };


export const AccountCommissionDocument = gql`
    query AccountCommission($validatorAddress: String!) {
  commission: action_validator_commission_amount(address: $validatorAddress) {
    coins
  }
}
    `;

/**
 * __useAccountCommissionQuery__
 *
 * To run a query within a React component, call `useAccountCommissionQuery` and pass it any options that fit your needs.
 * When your component renders, `useAccountCommissionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAccountCommissionQuery({
 *   variables: {
 *      validatorAddress: // value for 'validatorAddress'
 *   },
 * });
 */
export function useAccountCommissionQuery(baseOptions: Apollo.QueryHookOptions<AccountCommissionQuery, AccountCommissionQueryVariables> & ({ variables: AccountCommissionQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AccountCommissionQuery, AccountCommissionQueryVariables>(AccountCommissionDocument, options);
      }
export function useAccountCommissionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AccountCommissionQuery, AccountCommissionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AccountCommissionQuery, AccountCommissionQueryVariables>(AccountCommissionDocument, options);
        }
export function useAccountCommissionSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<AccountCommissionQuery, AccountCommissionQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AccountCommissionQuery, AccountCommissionQueryVariables>(AccountCommissionDocument, options);
        }
export type AccountCommissionQueryHookResult = ReturnType<typeof useAccountCommissionQuery>;
export type AccountCommissionLazyQueryHookResult = ReturnType<typeof useAccountCommissionLazyQuery>;
export type AccountCommissionSuspenseQueryHookResult = ReturnType<typeof useAccountCommissionSuspenseQuery>;
export type AccountCommissionQueryResult = Apollo.QueryResult<AccountCommissionQuery, AccountCommissionQueryVariables>;
export const AccountWithdrawalAddressDocument = gql`
    query AccountWithdrawalAddress($address: String!) {
  withdrawalAddress: action_delegator_withdraw_address(address: $address) {
    address
  }
}
    `;

/**
 * __useAccountWithdrawalAddressQuery__
 *
 * To run a query within a React component, call `useAccountWithdrawalAddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useAccountWithdrawalAddressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAccountWithdrawalAddressQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useAccountWithdrawalAddressQuery(baseOptions: Apollo.QueryHookOptions<AccountWithdrawalAddressQuery, AccountWithdrawalAddressQueryVariables> & ({ variables: AccountWithdrawalAddressQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AccountWithdrawalAddressQuery, AccountWithdrawalAddressQueryVariables>(AccountWithdrawalAddressDocument, options);
      }
export function useAccountWithdrawalAddressLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AccountWithdrawalAddressQuery, AccountWithdrawalAddressQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AccountWithdrawalAddressQuery, AccountWithdrawalAddressQueryVariables>(AccountWithdrawalAddressDocument, options);
        }
export function useAccountWithdrawalAddressSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<AccountWithdrawalAddressQuery, AccountWithdrawalAddressQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AccountWithdrawalAddressQuery, AccountWithdrawalAddressQueryVariables>(AccountWithdrawalAddressDocument, options);
        }
export type AccountWithdrawalAddressQueryHookResult = ReturnType<typeof useAccountWithdrawalAddressQuery>;
export type AccountWithdrawalAddressLazyQueryHookResult = ReturnType<typeof useAccountWithdrawalAddressLazyQuery>;
export type AccountWithdrawalAddressSuspenseQueryHookResult = ReturnType<typeof useAccountWithdrawalAddressSuspenseQuery>;
export type AccountWithdrawalAddressQueryResult = Apollo.QueryResult<AccountWithdrawalAddressQuery, AccountWithdrawalAddressQueryVariables>;
export const AccountBalancesDocument = gql`
    query AccountBalances($address: String!) {
  accountBalances: action_account_balance(address: $address) {
    coins
  }
}
    `;

/**
 * __useAccountBalancesQuery__
 *
 * To run a query within a React component, call `useAccountBalancesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAccountBalancesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAccountBalancesQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useAccountBalancesQuery(baseOptions: Apollo.QueryHookOptions<AccountBalancesQuery, AccountBalancesQueryVariables> & ({ variables: AccountBalancesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AccountBalancesQuery, AccountBalancesQueryVariables>(AccountBalancesDocument, options);
      }
export function useAccountBalancesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AccountBalancesQuery, AccountBalancesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AccountBalancesQuery, AccountBalancesQueryVariables>(AccountBalancesDocument, options);
        }
export function useAccountBalancesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<AccountBalancesQuery, AccountBalancesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AccountBalancesQuery, AccountBalancesQueryVariables>(AccountBalancesDocument, options);
        }
export type AccountBalancesQueryHookResult = ReturnType<typeof useAccountBalancesQuery>;
export type AccountBalancesLazyQueryHookResult = ReturnType<typeof useAccountBalancesLazyQuery>;
export type AccountBalancesSuspenseQueryHookResult = ReturnType<typeof useAccountBalancesSuspenseQuery>;
export type AccountBalancesQueryResult = Apollo.QueryResult<AccountBalancesQuery, AccountBalancesQueryVariables>;
export const AccountDelegationBalanceDocument = gql`
    query AccountDelegationBalance($address: String!) {
  delegationBalance: action_delegation_total(address: $address) {
    coins
  }
}
    `;

/**
 * __useAccountDelegationBalanceQuery__
 *
 * To run a query within a React component, call `useAccountDelegationBalanceQuery` and pass it any options that fit your needs.
 * When your component renders, `useAccountDelegationBalanceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAccountDelegationBalanceQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useAccountDelegationBalanceQuery(baseOptions: Apollo.QueryHookOptions<AccountDelegationBalanceQuery, AccountDelegationBalanceQueryVariables> & ({ variables: AccountDelegationBalanceQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AccountDelegationBalanceQuery, AccountDelegationBalanceQueryVariables>(AccountDelegationBalanceDocument, options);
      }
export function useAccountDelegationBalanceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AccountDelegationBalanceQuery, AccountDelegationBalanceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AccountDelegationBalanceQuery, AccountDelegationBalanceQueryVariables>(AccountDelegationBalanceDocument, options);
        }
export function useAccountDelegationBalanceSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<AccountDelegationBalanceQuery, AccountDelegationBalanceQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AccountDelegationBalanceQuery, AccountDelegationBalanceQueryVariables>(AccountDelegationBalanceDocument, options);
        }
export type AccountDelegationBalanceQueryHookResult = ReturnType<typeof useAccountDelegationBalanceQuery>;
export type AccountDelegationBalanceLazyQueryHookResult = ReturnType<typeof useAccountDelegationBalanceLazyQuery>;
export type AccountDelegationBalanceSuspenseQueryHookResult = ReturnType<typeof useAccountDelegationBalanceSuspenseQuery>;
export type AccountDelegationBalanceQueryResult = Apollo.QueryResult<AccountDelegationBalanceQuery, AccountDelegationBalanceQueryVariables>;
export const AccountUnbondingBalanceDocument = gql`
    query AccountUnbondingBalance($address: String!) {
  unbondingBalance: action_unbonding_delegation_total(address: $address) {
    coins
  }
}
    `;

/**
 * __useAccountUnbondingBalanceQuery__
 *
 * To run a query within a React component, call `useAccountUnbondingBalanceQuery` and pass it any options that fit your needs.
 * When your component renders, `useAccountUnbondingBalanceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAccountUnbondingBalanceQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useAccountUnbondingBalanceQuery(baseOptions: Apollo.QueryHookOptions<AccountUnbondingBalanceQuery, AccountUnbondingBalanceQueryVariables> & ({ variables: AccountUnbondingBalanceQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AccountUnbondingBalanceQuery, AccountUnbondingBalanceQueryVariables>(AccountUnbondingBalanceDocument, options);
      }
export function useAccountUnbondingBalanceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AccountUnbondingBalanceQuery, AccountUnbondingBalanceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AccountUnbondingBalanceQuery, AccountUnbondingBalanceQueryVariables>(AccountUnbondingBalanceDocument, options);
        }
export function useAccountUnbondingBalanceSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<AccountUnbondingBalanceQuery, AccountUnbondingBalanceQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AccountUnbondingBalanceQuery, AccountUnbondingBalanceQueryVariables>(AccountUnbondingBalanceDocument, options);
        }
export type AccountUnbondingBalanceQueryHookResult = ReturnType<typeof useAccountUnbondingBalanceQuery>;
export type AccountUnbondingBalanceLazyQueryHookResult = ReturnType<typeof useAccountUnbondingBalanceLazyQuery>;
export type AccountUnbondingBalanceSuspenseQueryHookResult = ReturnType<typeof useAccountUnbondingBalanceSuspenseQuery>;
export type AccountUnbondingBalanceQueryResult = Apollo.QueryResult<AccountUnbondingBalanceQuery, AccountUnbondingBalanceQueryVariables>;
export const AccountDelegationRewardsDocument = gql`
    query AccountDelegationRewards($address: String!) {
  delegationRewards: action_delegation_reward(address: $address) {
    validatorAddress: validator_address
    coins
  }
}
    `;

/**
 * __useAccountDelegationRewardsQuery__
 *
 * To run a query within a React component, call `useAccountDelegationRewardsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAccountDelegationRewardsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAccountDelegationRewardsQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useAccountDelegationRewardsQuery(baseOptions: Apollo.QueryHookOptions<AccountDelegationRewardsQuery, AccountDelegationRewardsQueryVariables> & ({ variables: AccountDelegationRewardsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AccountDelegationRewardsQuery, AccountDelegationRewardsQueryVariables>(AccountDelegationRewardsDocument, options);
      }
export function useAccountDelegationRewardsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AccountDelegationRewardsQuery, AccountDelegationRewardsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AccountDelegationRewardsQuery, AccountDelegationRewardsQueryVariables>(AccountDelegationRewardsDocument, options);
        }
export function useAccountDelegationRewardsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<AccountDelegationRewardsQuery, AccountDelegationRewardsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AccountDelegationRewardsQuery, AccountDelegationRewardsQueryVariables>(AccountDelegationRewardsDocument, options);
        }
export type AccountDelegationRewardsQueryHookResult = ReturnType<typeof useAccountDelegationRewardsQuery>;
export type AccountDelegationRewardsLazyQueryHookResult = ReturnType<typeof useAccountDelegationRewardsLazyQuery>;
export type AccountDelegationRewardsSuspenseQueryHookResult = ReturnType<typeof useAccountDelegationRewardsSuspenseQuery>;
export type AccountDelegationRewardsQueryResult = Apollo.QueryResult<AccountDelegationRewardsQuery, AccountDelegationRewardsQueryVariables>;
export const AccountDelegationsDocument = gql`
    query AccountDelegations($address: String!, $offset: Int = 0, $limit: Int = 10, $pagination: Boolean! = true) {
  delegations: action_delegation(
    address: $address
    limit: $limit
    offset: $offset
    count_total: $pagination
  ) {
    delegations
    pagination
  }
}
    `;

/**
 * __useAccountDelegationsQuery__
 *
 * To run a query within a React component, call `useAccountDelegationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAccountDelegationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAccountDelegationsQuery({
 *   variables: {
 *      address: // value for 'address'
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useAccountDelegationsQuery(baseOptions: Apollo.QueryHookOptions<AccountDelegationsQuery, AccountDelegationsQueryVariables> & ({ variables: AccountDelegationsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AccountDelegationsQuery, AccountDelegationsQueryVariables>(AccountDelegationsDocument, options);
      }
export function useAccountDelegationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AccountDelegationsQuery, AccountDelegationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AccountDelegationsQuery, AccountDelegationsQueryVariables>(AccountDelegationsDocument, options);
        }
export function useAccountDelegationsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<AccountDelegationsQuery, AccountDelegationsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AccountDelegationsQuery, AccountDelegationsQueryVariables>(AccountDelegationsDocument, options);
        }
export type AccountDelegationsQueryHookResult = ReturnType<typeof useAccountDelegationsQuery>;
export type AccountDelegationsLazyQueryHookResult = ReturnType<typeof useAccountDelegationsLazyQuery>;
export type AccountDelegationsSuspenseQueryHookResult = ReturnType<typeof useAccountDelegationsSuspenseQuery>;
export type AccountDelegationsQueryResult = Apollo.QueryResult<AccountDelegationsQuery, AccountDelegationsQueryVariables>;
export const AccountRedelegationsDocument = gql`
    query AccountRedelegations($address: String!, $offset: Int = 0, $limit: Int = 10, $pagination: Boolean! = true) {
  redelegations: action_redelegation(
    address: $address
    limit: $limit
    offset: $offset
    count_total: $pagination
  ) {
    redelegations
    pagination
  }
}
    `;

/**
 * __useAccountRedelegationsQuery__
 *
 * To run a query within a React component, call `useAccountRedelegationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAccountRedelegationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAccountRedelegationsQuery({
 *   variables: {
 *      address: // value for 'address'
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useAccountRedelegationsQuery(baseOptions: Apollo.QueryHookOptions<AccountRedelegationsQuery, AccountRedelegationsQueryVariables> & ({ variables: AccountRedelegationsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AccountRedelegationsQuery, AccountRedelegationsQueryVariables>(AccountRedelegationsDocument, options);
      }
export function useAccountRedelegationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AccountRedelegationsQuery, AccountRedelegationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AccountRedelegationsQuery, AccountRedelegationsQueryVariables>(AccountRedelegationsDocument, options);
        }
export function useAccountRedelegationsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<AccountRedelegationsQuery, AccountRedelegationsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AccountRedelegationsQuery, AccountRedelegationsQueryVariables>(AccountRedelegationsDocument, options);
        }
export type AccountRedelegationsQueryHookResult = ReturnType<typeof useAccountRedelegationsQuery>;
export type AccountRedelegationsLazyQueryHookResult = ReturnType<typeof useAccountRedelegationsLazyQuery>;
export type AccountRedelegationsSuspenseQueryHookResult = ReturnType<typeof useAccountRedelegationsSuspenseQuery>;
export type AccountRedelegationsQueryResult = Apollo.QueryResult<AccountRedelegationsQuery, AccountRedelegationsQueryVariables>;
export const AccountUndelegationsDocument = gql`
    query AccountUndelegations($address: String!, $offset: Int = 0, $limit: Int = 10, $pagination: Boolean! = true) {
  undelegations: action_unbonding_delegation(
    address: $address
    limit: $limit
    offset: $offset
    count_total: $pagination
  ) {
    undelegations: unbonding_delegations
    pagination
  }
}
    `;

/**
 * __useAccountUndelegationsQuery__
 *
 * To run a query within a React component, call `useAccountUndelegationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAccountUndelegationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAccountUndelegationsQuery({
 *   variables: {
 *      address: // value for 'address'
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useAccountUndelegationsQuery(baseOptions: Apollo.QueryHookOptions<AccountUndelegationsQuery, AccountUndelegationsQueryVariables> & ({ variables: AccountUndelegationsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AccountUndelegationsQuery, AccountUndelegationsQueryVariables>(AccountUndelegationsDocument, options);
      }
export function useAccountUndelegationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AccountUndelegationsQuery, AccountUndelegationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AccountUndelegationsQuery, AccountUndelegationsQueryVariables>(AccountUndelegationsDocument, options);
        }
export function useAccountUndelegationsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<AccountUndelegationsQuery, AccountUndelegationsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AccountUndelegationsQuery, AccountUndelegationsQueryVariables>(AccountUndelegationsDocument, options);
        }
export type AccountUndelegationsQueryHookResult = ReturnType<typeof useAccountUndelegationsQuery>;
export type AccountUndelegationsLazyQueryHookResult = ReturnType<typeof useAccountUndelegationsLazyQuery>;
export type AccountUndelegationsSuspenseQueryHookResult = ReturnType<typeof useAccountUndelegationsSuspenseQuery>;
export type AccountUndelegationsQueryResult = Apollo.QueryResult<AccountUndelegationsQuery, AccountUndelegationsQueryVariables>;
export const ActiveValidatorCountDocument = gql`
    query ActiveValidatorCount {
  activeTotal: validator_status_aggregate(where: {status: {_eq: 3}}) {
    aggregate {
      count
    }
  }
  inactiveTotal: validator_status_aggregate(where: {status: {_neq: 3}}) {
    aggregate {
      count
    }
  }
  total: validator_status_aggregate {
    aggregate {
      count
    }
  }
}
    `;

/**
 * __useActiveValidatorCountQuery__
 *
 * To run a query within a React component, call `useActiveValidatorCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useActiveValidatorCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useActiveValidatorCountQuery({
 *   variables: {
 *   },
 * });
 */
export function useActiveValidatorCountQuery(baseOptions?: Apollo.QueryHookOptions<ActiveValidatorCountQuery, ActiveValidatorCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ActiveValidatorCountQuery, ActiveValidatorCountQueryVariables>(ActiveValidatorCountDocument, options);
      }
export function useActiveValidatorCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ActiveValidatorCountQuery, ActiveValidatorCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ActiveValidatorCountQuery, ActiveValidatorCountQueryVariables>(ActiveValidatorCountDocument, options);
        }
export function useActiveValidatorCountSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ActiveValidatorCountQuery, ActiveValidatorCountQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ActiveValidatorCountQuery, ActiveValidatorCountQueryVariables>(ActiveValidatorCountDocument, options);
        }
export type ActiveValidatorCountQueryHookResult = ReturnType<typeof useActiveValidatorCountQuery>;
export type ActiveValidatorCountLazyQueryHookResult = ReturnType<typeof useActiveValidatorCountLazyQuery>;
export type ActiveValidatorCountSuspenseQueryHookResult = ReturnType<typeof useActiveValidatorCountSuspenseQuery>;
export type ActiveValidatorCountQueryResult = Apollo.QueryResult<ActiveValidatorCountQuery, ActiveValidatorCountQueryVariables>;
export const BlockDetailsDocument = gql`
    query BlockDetails($height: bigint, $signatureHeight: bigint) {
  transaction(where: {height: {_eq: $height}}) {
    height
    hash
    messages
    success
    logs
  }
  block(limit: 1, where: {height: {_eq: $height}}) {
    height
    hash
    timestamp
    txs: num_txs
    validator {
      validatorInfo: validator_info {
        operatorAddress: operator_address
      }
    }
  }
  preCommitsAggregate: pre_commit_aggregate(
    where: {height: {_eq: $signatureHeight}}
  ) {
    aggregate {
      sum {
        votingPower: voting_power
      }
    }
  }
  preCommits: pre_commit(where: {height: {_eq: $signatureHeight}}) {
    validator {
      validatorInfo: validator_info {
        operatorAddress: operator_address
      }
    }
  }
}
    `;

/**
 * __useBlockDetailsQuery__
 *
 * To run a query within a React component, call `useBlockDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlockDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlockDetailsQuery({
 *   variables: {
 *      height: // value for 'height'
 *      signatureHeight: // value for 'signatureHeight'
 *   },
 * });
 */
export function useBlockDetailsQuery(baseOptions?: Apollo.QueryHookOptions<BlockDetailsQuery, BlockDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BlockDetailsQuery, BlockDetailsQueryVariables>(BlockDetailsDocument, options);
      }
export function useBlockDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BlockDetailsQuery, BlockDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BlockDetailsQuery, BlockDetailsQueryVariables>(BlockDetailsDocument, options);
        }
export function useBlockDetailsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<BlockDetailsQuery, BlockDetailsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<BlockDetailsQuery, BlockDetailsQueryVariables>(BlockDetailsDocument, options);
        }
export type BlockDetailsQueryHookResult = ReturnType<typeof useBlockDetailsQuery>;
export type BlockDetailsLazyQueryHookResult = ReturnType<typeof useBlockDetailsLazyQuery>;
export type BlockDetailsSuspenseQueryHookResult = ReturnType<typeof useBlockDetailsSuspenseQuery>;
export type BlockDetailsQueryResult = Apollo.QueryResult<BlockDetailsQuery, BlockDetailsQueryVariables>;
export const LatestBlockHeightListenerDocument = gql`
    subscription LatestBlockHeightListener($offset: Int = 0) {
  height: block(order_by: {height: desc}, limit: 1, offset: $offset) {
    height
  }
}
    `;

/**
 * __useLatestBlockHeightListenerSubscription__
 *
 * To run a query within a React component, call `useLatestBlockHeightListenerSubscription` and pass it any options that fit your needs.
 * When your component renders, `useLatestBlockHeightListenerSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLatestBlockHeightListenerSubscription({
 *   variables: {
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useLatestBlockHeightListenerSubscription(baseOptions?: Apollo.SubscriptionHookOptions<LatestBlockHeightListenerSubscription, LatestBlockHeightListenerSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<LatestBlockHeightListenerSubscription, LatestBlockHeightListenerSubscriptionVariables>(LatestBlockHeightListenerDocument, options);
      }
export type LatestBlockHeightListenerSubscriptionHookResult = ReturnType<typeof useLatestBlockHeightListenerSubscription>;
export type LatestBlockHeightListenerSubscriptionResult = Apollo.SubscriptionResult<LatestBlockHeightListenerSubscription>;
export const AverageBlockTimeDocument = gql`
    query AverageBlockTime {
  averageBlockTime: average_block_time_per_hour(
    limit: 1
    order_by: {height: desc}
  ) {
    averageTime: average_time
  }
}
    `;

/**
 * __useAverageBlockTimeQuery__
 *
 * To run a query within a React component, call `useAverageBlockTimeQuery` and pass it any options that fit your needs.
 * When your component renders, `useAverageBlockTimeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAverageBlockTimeQuery({
 *   variables: {
 *   },
 * });
 */
export function useAverageBlockTimeQuery(baseOptions?: Apollo.QueryHookOptions<AverageBlockTimeQuery, AverageBlockTimeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AverageBlockTimeQuery, AverageBlockTimeQueryVariables>(AverageBlockTimeDocument, options);
      }
export function useAverageBlockTimeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AverageBlockTimeQuery, AverageBlockTimeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AverageBlockTimeQuery, AverageBlockTimeQueryVariables>(AverageBlockTimeDocument, options);
        }
export function useAverageBlockTimeSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<AverageBlockTimeQuery, AverageBlockTimeQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AverageBlockTimeQuery, AverageBlockTimeQueryVariables>(AverageBlockTimeDocument, options);
        }
export type AverageBlockTimeQueryHookResult = ReturnType<typeof useAverageBlockTimeQuery>;
export type AverageBlockTimeLazyQueryHookResult = ReturnType<typeof useAverageBlockTimeLazyQuery>;
export type AverageBlockTimeSuspenseQueryHookResult = ReturnType<typeof useAverageBlockTimeSuspenseQuery>;
export type AverageBlockTimeQueryResult = Apollo.QueryResult<AverageBlockTimeQuery, AverageBlockTimeQueryVariables>;
export const LatestBlockTimestampDocument = gql`
    query LatestBlockTimestamp($offset: Int = 0) {
  block: block(order_by: {height: desc}, limit: 1, offset: $offset) {
    timestamp
  }
}
    `;

/**
 * __useLatestBlockTimestampQuery__
 *
 * To run a query within a React component, call `useLatestBlockTimestampQuery` and pass it any options that fit your needs.
 * When your component renders, `useLatestBlockTimestampQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLatestBlockTimestampQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useLatestBlockTimestampQuery(baseOptions?: Apollo.QueryHookOptions<LatestBlockTimestampQuery, LatestBlockTimestampQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LatestBlockTimestampQuery, LatestBlockTimestampQueryVariables>(LatestBlockTimestampDocument, options);
      }
export function useLatestBlockTimestampLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LatestBlockTimestampQuery, LatestBlockTimestampQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LatestBlockTimestampQuery, LatestBlockTimestampQueryVariables>(LatestBlockTimestampDocument, options);
        }
export function useLatestBlockTimestampSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<LatestBlockTimestampQuery, LatestBlockTimestampQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<LatestBlockTimestampQuery, LatestBlockTimestampQueryVariables>(LatestBlockTimestampDocument, options);
        }
export type LatestBlockTimestampQueryHookResult = ReturnType<typeof useLatestBlockTimestampQuery>;
export type LatestBlockTimestampLazyQueryHookResult = ReturnType<typeof useLatestBlockTimestampLazyQuery>;
export type LatestBlockTimestampSuspenseQueryHookResult = ReturnType<typeof useLatestBlockTimestampSuspenseQuery>;
export type LatestBlockTimestampQueryResult = Apollo.QueryResult<LatestBlockTimestampQuery, LatestBlockTimestampQueryVariables>;
export const BlocksListenerDocument = gql`
    subscription BlocksListener($limit: Int = 7, $offset: Int = 0) {
  blocks: block(limit: $limit, offset: $offset, order_by: {height: desc}) {
    height
    txs: num_txs
    hash
    timestamp
    validator {
      validatorInfo: validator_info {
        operatorAddress: operator_address
      }
    }
  }
}
    `;

/**
 * __useBlocksListenerSubscription__
 *
 * To run a query within a React component, call `useBlocksListenerSubscription` and pass it any options that fit your needs.
 * When your component renders, `useBlocksListenerSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlocksListenerSubscription({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useBlocksListenerSubscription(baseOptions?: Apollo.SubscriptionHookOptions<BlocksListenerSubscription, BlocksListenerSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<BlocksListenerSubscription, BlocksListenerSubscriptionVariables>(BlocksListenerDocument, options);
      }
export type BlocksListenerSubscriptionHookResult = ReturnType<typeof useBlocksListenerSubscription>;
export type BlocksListenerSubscriptionResult = Apollo.SubscriptionResult<BlocksListenerSubscription>;
export const BlocksDocument = gql`
    query Blocks($limit: Int = 7, $offset: Int = 0) {
  blocks: block(limit: $limit, offset: $offset, order_by: {height: desc}) {
    height
    txs: num_txs
    hash
    timestamp
    validator {
      validatorInfo: validator_info {
        operatorAddress: operator_address
        self_delegate_address
      }
      validatorDescriptions: validator_descriptions(
        limit: 1
        order_by: {height: desc}
      ) {
        moniker
        identity
      }
    }
  }
}
    `;

/**
 * __useBlocksQuery__
 *
 * To run a query within a React component, call `useBlocksQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlocksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlocksQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useBlocksQuery(baseOptions?: Apollo.QueryHookOptions<BlocksQuery, BlocksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BlocksQuery, BlocksQueryVariables>(BlocksDocument, options);
      }
export function useBlocksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BlocksQuery, BlocksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BlocksQuery, BlocksQueryVariables>(BlocksDocument, options);
        }
export function useBlocksSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<BlocksQuery, BlocksQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<BlocksQuery, BlocksQueryVariables>(BlocksDocument, options);
        }
export type BlocksQueryHookResult = ReturnType<typeof useBlocksQuery>;
export type BlocksLazyQueryHookResult = ReturnType<typeof useBlocksLazyQuery>;
export type BlocksSuspenseQueryHookResult = ReturnType<typeof useBlocksSuspenseQuery>;
export type BlocksQueryResult = Apollo.QueryResult<BlocksQuery, BlocksQueryVariables>;
export const ChainIdDocument = gql`
    query ChainId {
  genesis(limit: 1, order_by: {time: desc}) {
    chainId: chain_id
    time
  }
}
    `;

/**
 * __useChainIdQuery__
 *
 * To run a query within a React component, call `useChainIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useChainIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChainIdQuery({
 *   variables: {
 *   },
 * });
 */
export function useChainIdQuery(baseOptions?: Apollo.QueryHookOptions<ChainIdQuery, ChainIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ChainIdQuery, ChainIdQueryVariables>(ChainIdDocument, options);
      }
export function useChainIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChainIdQuery, ChainIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ChainIdQuery, ChainIdQueryVariables>(ChainIdDocument, options);
        }
export function useChainIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ChainIdQuery, ChainIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ChainIdQuery, ChainIdQueryVariables>(ChainIdDocument, options);
        }
export type ChainIdQueryHookResult = ReturnType<typeof useChainIdQuery>;
export type ChainIdLazyQueryHookResult = ReturnType<typeof useChainIdLazyQuery>;
export type ChainIdSuspenseQueryHookResult = ReturnType<typeof useChainIdSuspenseQuery>;
export type ChainIdQueryResult = Apollo.QueryResult<ChainIdQuery, ChainIdQueryVariables>;
export const MarketDataDocument = gql`
    query MarketData($denom: String) {
  communityPool: community_pool(order_by: {height: desc}, limit: 1) {
    coins
  }
  inflation: inflation(order_by: {height: desc}, limit: 1) {
    value
  }
  tokenPrice: token_price(where: {unit_name: {_eq: $denom}}) {
    marketCap: market_cap
    price
  }
  supply {
    coins
  }
  bondedTokens: staking_pool(order_by: {height: desc}, limit: 1) {
    bonded_tokens
  }
  distributionParams: distribution_params {
    params
  }
}
    `;

/**
 * __useMarketDataQuery__
 *
 * To run a query within a React component, call `useMarketDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useMarketDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMarketDataQuery({
 *   variables: {
 *      denom: // value for 'denom'
 *   },
 * });
 */
export function useMarketDataQuery(baseOptions?: Apollo.QueryHookOptions<MarketDataQuery, MarketDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MarketDataQuery, MarketDataQueryVariables>(MarketDataDocument, options);
      }
export function useMarketDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MarketDataQuery, MarketDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MarketDataQuery, MarketDataQueryVariables>(MarketDataDocument, options);
        }
export function useMarketDataSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<MarketDataQuery, MarketDataQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<MarketDataQuery, MarketDataQueryVariables>(MarketDataDocument, options);
        }
export type MarketDataQueryHookResult = ReturnType<typeof useMarketDataQuery>;
export type MarketDataLazyQueryHookResult = ReturnType<typeof useMarketDataLazyQuery>;
export type MarketDataSuspenseQueryHookResult = ReturnType<typeof useMarketDataSuspenseQuery>;
export type MarketDataQueryResult = Apollo.QueryResult<MarketDataQuery, MarketDataQueryVariables>;
export const MessageTypesDocument = gql`
    query MessageTypes {
  msgTypes: message {
    type
  }
}
    `;

/**
 * __useMessageTypesQuery__
 *
 * To run a query within a React component, call `useMessageTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMessageTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMessageTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useMessageTypesQuery(baseOptions?: Apollo.QueryHookOptions<MessageTypesQuery, MessageTypesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MessageTypesQuery, MessageTypesQueryVariables>(MessageTypesDocument, options);
      }
export function useMessageTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MessageTypesQuery, MessageTypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MessageTypesQuery, MessageTypesQueryVariables>(MessageTypesDocument, options);
        }
export function useMessageTypesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<MessageTypesQuery, MessageTypesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<MessageTypesQuery, MessageTypesQueryVariables>(MessageTypesDocument, options);
        }
export type MessageTypesQueryHookResult = ReturnType<typeof useMessageTypesQuery>;
export type MessageTypesLazyQueryHookResult = ReturnType<typeof useMessageTypesLazyQuery>;
export type MessageTypesSuspenseQueryHookResult = ReturnType<typeof useMessageTypesSuspenseQuery>;
export type MessageTypesQueryResult = Apollo.QueryResult<MessageTypesQuery, MessageTypesQueryVariables>;
export const MsgTypesByAddressDocument = gql`
    query MsgTypesByAddress($addresses: _text = "{}") {
  msgTypes: messages_by_address(args: {addresses: $addresses}) {
    height
    index
    involved_accounts_addresses
  }
}
    `;

/**
 * __useMsgTypesByAddressQuery__
 *
 * To run a query within a React component, call `useMsgTypesByAddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useMsgTypesByAddressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMsgTypesByAddressQuery({
 *   variables: {
 *      addresses: // value for 'addresses'
 *   },
 * });
 */
export function useMsgTypesByAddressQuery(baseOptions?: Apollo.QueryHookOptions<MsgTypesByAddressQuery, MsgTypesByAddressQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MsgTypesByAddressQuery, MsgTypesByAddressQueryVariables>(MsgTypesByAddressDocument, options);
      }
export function useMsgTypesByAddressLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MsgTypesByAddressQuery, MsgTypesByAddressQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MsgTypesByAddressQuery, MsgTypesByAddressQueryVariables>(MsgTypesByAddressDocument, options);
        }
export function useMsgTypesByAddressSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<MsgTypesByAddressQuery, MsgTypesByAddressQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<MsgTypesByAddressQuery, MsgTypesByAddressQueryVariables>(MsgTypesByAddressDocument, options);
        }
export type MsgTypesByAddressQueryHookResult = ReturnType<typeof useMsgTypesByAddressQuery>;
export type MsgTypesByAddressLazyQueryHookResult = ReturnType<typeof useMsgTypesByAddressLazyQuery>;
export type MsgTypesByAddressSuspenseQueryHookResult = ReturnType<typeof useMsgTypesByAddressSuspenseQuery>;
export type MsgTypesByAddressQueryResult = Apollo.QueryResult<MsgTypesByAddressQuery, MsgTypesByAddressQueryVariables>;
export const MessagesByTypesListenerDocument = gql`
    subscription MessagesByTypesListener($types: _text = "{}", $limit: bigint = 7, $offset: bigint = 0) {
  messagesByTypes: messages_by_type(
    args: {types: $types, limit: $limit, offset: $offset}
  ) {
    transaction {
      height
      hash
      success
      messages
      logs
      block {
        height
        timestamp
      }
    }
  }
}
    `;

/**
 * __useMessagesByTypesListenerSubscription__
 *
 * To run a query within a React component, call `useMessagesByTypesListenerSubscription` and pass it any options that fit your needs.
 * When your component renders, `useMessagesByTypesListenerSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMessagesByTypesListenerSubscription({
 *   variables: {
 *      types: // value for 'types'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useMessagesByTypesListenerSubscription(baseOptions?: Apollo.SubscriptionHookOptions<MessagesByTypesListenerSubscription, MessagesByTypesListenerSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<MessagesByTypesListenerSubscription, MessagesByTypesListenerSubscriptionVariables>(MessagesByTypesListenerDocument, options);
      }
export type MessagesByTypesListenerSubscriptionHookResult = ReturnType<typeof useMessagesByTypesListenerSubscription>;
export type MessagesByTypesListenerSubscriptionResult = Apollo.SubscriptionResult<MessagesByTypesListenerSubscription>;
export const MessagesByTypesDocument = gql`
    query MessagesByTypes($types: _text = "{}", $limit: bigint = 7, $offset: bigint = 0) {
  messagesByTypes: messages_by_type(
    args: {types: $types, limit: $limit, offset: $offset}
  ) {
    transaction {
      height
      hash
      success
      messages
      logs
      block {
        height
        timestamp
      }
    }
  }
}
    `;

/**
 * __useMessagesByTypesQuery__
 *
 * To run a query within a React component, call `useMessagesByTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMessagesByTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMessagesByTypesQuery({
 *   variables: {
 *      types: // value for 'types'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useMessagesByTypesQuery(baseOptions?: Apollo.QueryHookOptions<MessagesByTypesQuery, MessagesByTypesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MessagesByTypesQuery, MessagesByTypesQueryVariables>(MessagesByTypesDocument, options);
      }
export function useMessagesByTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MessagesByTypesQuery, MessagesByTypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MessagesByTypesQuery, MessagesByTypesQueryVariables>(MessagesByTypesDocument, options);
        }
export function useMessagesByTypesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<MessagesByTypesQuery, MessagesByTypesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<MessagesByTypesQuery, MessagesByTypesQueryVariables>(MessagesByTypesDocument, options);
        }
export type MessagesByTypesQueryHookResult = ReturnType<typeof useMessagesByTypesQuery>;
export type MessagesByTypesLazyQueryHookResult = ReturnType<typeof useMessagesByTypesLazyQuery>;
export type MessagesByTypesSuspenseQueryHookResult = ReturnType<typeof useMessagesByTypesSuspenseQuery>;
export type MessagesByTypesQueryResult = Apollo.QueryResult<MessagesByTypesQuery, MessagesByTypesQueryVariables>;
export const GetMessagesByAddressDocument = gql`
    query GetMessagesByAddress($address: _text, $limit: bigint = 50, $offset: bigint = 0, $types: _text = "{}") {
  messagesByAddress: messages_by_address(
    args: {addresses: $address, types: $types, limit: $limit, offset: $offset}
  ) {
    transaction {
      height
      hash
      success
      messages
      logs
      block {
        height
        timestamp
      }
    }
  }
}
    `;

/**
 * __useGetMessagesByAddressQuery__
 *
 * To run a query within a React component, call `useGetMessagesByAddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMessagesByAddressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMessagesByAddressQuery({
 *   variables: {
 *      address: // value for 'address'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      types: // value for 'types'
 *   },
 * });
 */
export function useGetMessagesByAddressQuery(baseOptions?: Apollo.QueryHookOptions<GetMessagesByAddressQuery, GetMessagesByAddressQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMessagesByAddressQuery, GetMessagesByAddressQueryVariables>(GetMessagesByAddressDocument, options);
      }
export function useGetMessagesByAddressLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMessagesByAddressQuery, GetMessagesByAddressQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMessagesByAddressQuery, GetMessagesByAddressQueryVariables>(GetMessagesByAddressDocument, options);
        }
export function useGetMessagesByAddressSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetMessagesByAddressQuery, GetMessagesByAddressQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMessagesByAddressQuery, GetMessagesByAddressQueryVariables>(GetMessagesByAddressDocument, options);
        }
export type GetMessagesByAddressQueryHookResult = ReturnType<typeof useGetMessagesByAddressQuery>;
export type GetMessagesByAddressLazyQueryHookResult = ReturnType<typeof useGetMessagesByAddressLazyQuery>;
export type GetMessagesByAddressSuspenseQueryHookResult = ReturnType<typeof useGetMessagesByAddressSuspenseQuery>;
export type GetMessagesByAddressQueryResult = Apollo.QueryResult<GetMessagesByAddressQuery, GetMessagesByAddressQueryVariables>;
export const GetTransactionsByAddressRegexDocument = gql`
    query GetTransactionsByAddressRegex($_regex: String, $offset: Int = 0, $limit: Int = 10) {
  transaction(
    where: {signer_infos: {_cast: {String: {_regex: $_regex}}}}
    offset: $offset
    limit: $limit
  ) {
    hash
    signatures
    fee
    gas_used
    gas_wanted
    logs
    height
    messages
    success
    signer_infos
    raw_log
  }
}
    `;

/**
 * __useGetTransactionsByAddressRegexQuery__
 *
 * To run a query within a React component, call `useGetTransactionsByAddressRegexQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTransactionsByAddressRegexQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTransactionsByAddressRegexQuery({
 *   variables: {
 *      _regex: // value for '_regex'
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetTransactionsByAddressRegexQuery(baseOptions?: Apollo.QueryHookOptions<GetTransactionsByAddressRegexQuery, GetTransactionsByAddressRegexQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTransactionsByAddressRegexQuery, GetTransactionsByAddressRegexQueryVariables>(GetTransactionsByAddressRegexDocument, options);
      }
export function useGetTransactionsByAddressRegexLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTransactionsByAddressRegexQuery, GetTransactionsByAddressRegexQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTransactionsByAddressRegexQuery, GetTransactionsByAddressRegexQueryVariables>(GetTransactionsByAddressRegexDocument, options);
        }
export function useGetTransactionsByAddressRegexSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetTransactionsByAddressRegexQuery, GetTransactionsByAddressRegexQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTransactionsByAddressRegexQuery, GetTransactionsByAddressRegexQueryVariables>(GetTransactionsByAddressRegexDocument, options);
        }
export type GetTransactionsByAddressRegexQueryHookResult = ReturnType<typeof useGetTransactionsByAddressRegexQuery>;
export type GetTransactionsByAddressRegexLazyQueryHookResult = ReturnType<typeof useGetTransactionsByAddressRegexLazyQuery>;
export type GetTransactionsByAddressRegexSuspenseQueryHookResult = ReturnType<typeof useGetTransactionsByAddressRegexSuspenseQuery>;
export type GetTransactionsByAddressRegexQueryResult = Apollo.QueryResult<GetTransactionsByAddressRegexQuery, GetTransactionsByAddressRegexQueryVariables>;
export const OnlineVotingPowerDocument = gql`
    query OnlineVotingPower {
  activeTotal: validator_status_aggregate(where: {status: {_eq: 3}}) {
    aggregate {
      count
    }
  }
  validatorVotingPowerAggregate: validator_voting_power_aggregate(
    where: {validator: {validator_statuses: {status: {_eq: 3}}}}
  ) {
    aggregate {
      sum {
        votingPower: voting_power
      }
    }
  }
  stakingPool: staking_pool(order_by: {height: desc}, limit: 1) {
    bonded: bonded_tokens
  }
  stakingParams: staking_params(limit: 1) {
    params
  }
}
    `;

/**
 * __useOnlineVotingPowerQuery__
 *
 * To run a query within a React component, call `useOnlineVotingPowerQuery` and pass it any options that fit your needs.
 * When your component renders, `useOnlineVotingPowerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnlineVotingPowerQuery({
 *   variables: {
 *   },
 * });
 */
export function useOnlineVotingPowerQuery(baseOptions?: Apollo.QueryHookOptions<OnlineVotingPowerQuery, OnlineVotingPowerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OnlineVotingPowerQuery, OnlineVotingPowerQueryVariables>(OnlineVotingPowerDocument, options);
      }
export function useOnlineVotingPowerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OnlineVotingPowerQuery, OnlineVotingPowerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OnlineVotingPowerQuery, OnlineVotingPowerQueryVariables>(OnlineVotingPowerDocument, options);
        }
export function useOnlineVotingPowerSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<OnlineVotingPowerQuery, OnlineVotingPowerQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<OnlineVotingPowerQuery, OnlineVotingPowerQueryVariables>(OnlineVotingPowerDocument, options);
        }
export type OnlineVotingPowerQueryHookResult = ReturnType<typeof useOnlineVotingPowerQuery>;
export type OnlineVotingPowerLazyQueryHookResult = ReturnType<typeof useOnlineVotingPowerLazyQuery>;
export type OnlineVotingPowerSuspenseQueryHookResult = ReturnType<typeof useOnlineVotingPowerSuspenseQuery>;
export type OnlineVotingPowerQueryResult = Apollo.QueryResult<OnlineVotingPowerQuery, OnlineVotingPowerQueryVariables>;
export const ParamsDocument = gql`
    query Params {
  stakingParams: staking_params(limit: 1, order_by: {height: desc}) {
    params
  }
  slashingParams: slashing_params(limit: 1, order_by: {height: desc}) {
    params
  }
  mintParams: mint_params(limit: 1, order_by: {height: desc}) {
    params
  }
  distributionParams: distribution_params(limit: 1, order_by: {height: desc}) {
    params
  }
  govParams: gov_params(limit: 1, order_by: {height: desc}) {
    depositParams: deposit_params
    tallyParams: tally_params
    votingParams: voting_params
  }
}
    `;

/**
 * __useParamsQuery__
 *
 * To run a query within a React component, call `useParamsQuery` and pass it any options that fit your needs.
 * When your component renders, `useParamsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useParamsQuery({
 *   variables: {
 *   },
 * });
 */
export function useParamsQuery(baseOptions?: Apollo.QueryHookOptions<ParamsQuery, ParamsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ParamsQuery, ParamsQueryVariables>(ParamsDocument, options);
      }
export function useParamsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ParamsQuery, ParamsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ParamsQuery, ParamsQueryVariables>(ParamsDocument, options);
        }
export function useParamsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ParamsQuery, ParamsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ParamsQuery, ParamsQueryVariables>(ParamsDocument, options);
        }
export type ParamsQueryHookResult = ReturnType<typeof useParamsQuery>;
export type ParamsLazyQueryHookResult = ReturnType<typeof useParamsLazyQuery>;
export type ParamsSuspenseQueryHookResult = ReturnType<typeof useParamsSuspenseQuery>;
export type ParamsQueryResult = Apollo.QueryResult<ParamsQuery, ParamsQueryVariables>;
export const ProposalDetailsDocument = gql`
    query ProposalDetails($proposalId: Int) {
  proposal(where: {id: {_eq: $proposalId}}) {
    proposer: proposer_address
    title
    description
    status
    content
    proposalId: id
    submitTime: submit_time
    proposalType: proposal_type
    depositEndTime: deposit_end_time
    votingStartTime: voting_start_time
    votingEndTime: voting_end_time
  }
}
    `;

/**
 * __useProposalDetailsQuery__
 *
 * To run a query within a React component, call `useProposalDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProposalDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProposalDetailsQuery({
 *   variables: {
 *      proposalId: // value for 'proposalId'
 *   },
 * });
 */
export function useProposalDetailsQuery(baseOptions?: Apollo.QueryHookOptions<ProposalDetailsQuery, ProposalDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProposalDetailsQuery, ProposalDetailsQueryVariables>(ProposalDetailsDocument, options);
      }
export function useProposalDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProposalDetailsQuery, ProposalDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProposalDetailsQuery, ProposalDetailsQueryVariables>(ProposalDetailsDocument, options);
        }
export function useProposalDetailsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ProposalDetailsQuery, ProposalDetailsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProposalDetailsQuery, ProposalDetailsQueryVariables>(ProposalDetailsDocument, options);
        }
export type ProposalDetailsQueryHookResult = ReturnType<typeof useProposalDetailsQuery>;
export type ProposalDetailsLazyQueryHookResult = ReturnType<typeof useProposalDetailsLazyQuery>;
export type ProposalDetailsSuspenseQueryHookResult = ReturnType<typeof useProposalDetailsSuspenseQuery>;
export type ProposalDetailsQueryResult = Apollo.QueryResult<ProposalDetailsQuery, ProposalDetailsQueryVariables>;
export const ProposalDetailsTallyDocument = gql`
    query ProposalDetailsTally($proposalId: Int) {
  proposalTallyResult: proposal_tally_result(
    where: {proposal_id: {_eq: $proposalId}}
  ) {
    yes
    no
    noWithVeto: no_with_veto
    abstain
  }
  stakingPool: proposal_staking_pool_snapshot(
    where: {proposal_id: {_eq: $proposalId}}
  ) {
    bondedTokens: bonded_tokens
  }
  quorum: gov_params(limit: 1, order_by: {height: desc}) {
    tallyParams: tally_params
  }
}
    `;

/**
 * __useProposalDetailsTallyQuery__
 *
 * To run a query within a React component, call `useProposalDetailsTallyQuery` and pass it any options that fit your needs.
 * When your component renders, `useProposalDetailsTallyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProposalDetailsTallyQuery({
 *   variables: {
 *      proposalId: // value for 'proposalId'
 *   },
 * });
 */
export function useProposalDetailsTallyQuery(baseOptions?: Apollo.QueryHookOptions<ProposalDetailsTallyQuery, ProposalDetailsTallyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProposalDetailsTallyQuery, ProposalDetailsTallyQueryVariables>(ProposalDetailsTallyDocument, options);
      }
export function useProposalDetailsTallyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProposalDetailsTallyQuery, ProposalDetailsTallyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProposalDetailsTallyQuery, ProposalDetailsTallyQueryVariables>(ProposalDetailsTallyDocument, options);
        }
export function useProposalDetailsTallySuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ProposalDetailsTallyQuery, ProposalDetailsTallyQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProposalDetailsTallyQuery, ProposalDetailsTallyQueryVariables>(ProposalDetailsTallyDocument, options);
        }
export type ProposalDetailsTallyQueryHookResult = ReturnType<typeof useProposalDetailsTallyQuery>;
export type ProposalDetailsTallyLazyQueryHookResult = ReturnType<typeof useProposalDetailsTallyLazyQuery>;
export type ProposalDetailsTallySuspenseQueryHookResult = ReturnType<typeof useProposalDetailsTallySuspenseQuery>;
export type ProposalDetailsTallyQueryResult = Apollo.QueryResult<ProposalDetailsTallyQuery, ProposalDetailsTallyQueryVariables>;
export const ProposalDetailsDepositsDocument = gql`
    query ProposalDetailsDeposits($proposalId: Int) {
  proposalDeposit: proposal_deposit(
    where: {proposal_id: {_eq: $proposalId}}
    order_by: {height: desc}
  ) {
    amount
    depositorAddress: depositor_address
    block {
      timestamp
    }
  }
}
    `;

/**
 * __useProposalDetailsDepositsQuery__
 *
 * To run a query within a React component, call `useProposalDetailsDepositsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProposalDetailsDepositsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProposalDetailsDepositsQuery({
 *   variables: {
 *      proposalId: // value for 'proposalId'
 *   },
 * });
 */
export function useProposalDetailsDepositsQuery(baseOptions?: Apollo.QueryHookOptions<ProposalDetailsDepositsQuery, ProposalDetailsDepositsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProposalDetailsDepositsQuery, ProposalDetailsDepositsQueryVariables>(ProposalDetailsDepositsDocument, options);
      }
export function useProposalDetailsDepositsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProposalDetailsDepositsQuery, ProposalDetailsDepositsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProposalDetailsDepositsQuery, ProposalDetailsDepositsQueryVariables>(ProposalDetailsDepositsDocument, options);
        }
export function useProposalDetailsDepositsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ProposalDetailsDepositsQuery, ProposalDetailsDepositsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProposalDetailsDepositsQuery, ProposalDetailsDepositsQueryVariables>(ProposalDetailsDepositsDocument, options);
        }
export type ProposalDetailsDepositsQueryHookResult = ReturnType<typeof useProposalDetailsDepositsQuery>;
export type ProposalDetailsDepositsLazyQueryHookResult = ReturnType<typeof useProposalDetailsDepositsLazyQuery>;
export type ProposalDetailsDepositsSuspenseQueryHookResult = ReturnType<typeof useProposalDetailsDepositsSuspenseQuery>;
export type ProposalDetailsDepositsQueryResult = Apollo.QueryResult<ProposalDetailsDepositsQuery, ProposalDetailsDepositsQueryVariables>;
export const ProposalDetailsVotesDocument = gql`
    query ProposalDetailsVotes($proposalId: Int) {
  proposalVote: proposal_vote(
    where: {proposal_id: {_eq: $proposalId}}
    order_by: {height: desc}
  ) {
    option
    voterAddress: voter_address
  }
  validatorStatuses: proposal_validator_status_snapshot(
    where: {proposal_id: {_eq: $proposalId}, status: {_eq: 3}}
  ) {
    validator {
      validatorInfo: validator_info {
        selfDelegateAddress: self_delegate_address
      }
    }
  }
}
    `;

/**
 * __useProposalDetailsVotesQuery__
 *
 * To run a query within a React component, call `useProposalDetailsVotesQuery` and pass it any options that fit your needs.
 * When your component renders, `useProposalDetailsVotesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProposalDetailsVotesQuery({
 *   variables: {
 *      proposalId: // value for 'proposalId'
 *   },
 * });
 */
export function useProposalDetailsVotesQuery(baseOptions?: Apollo.QueryHookOptions<ProposalDetailsVotesQuery, ProposalDetailsVotesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProposalDetailsVotesQuery, ProposalDetailsVotesQueryVariables>(ProposalDetailsVotesDocument, options);
      }
export function useProposalDetailsVotesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProposalDetailsVotesQuery, ProposalDetailsVotesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProposalDetailsVotesQuery, ProposalDetailsVotesQueryVariables>(ProposalDetailsVotesDocument, options);
        }
export function useProposalDetailsVotesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ProposalDetailsVotesQuery, ProposalDetailsVotesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProposalDetailsVotesQuery, ProposalDetailsVotesQueryVariables>(ProposalDetailsVotesDocument, options);
        }
export type ProposalDetailsVotesQueryHookResult = ReturnType<typeof useProposalDetailsVotesQuery>;
export type ProposalDetailsVotesLazyQueryHookResult = ReturnType<typeof useProposalDetailsVotesLazyQuery>;
export type ProposalDetailsVotesSuspenseQueryHookResult = ReturnType<typeof useProposalDetailsVotesSuspenseQuery>;
export type ProposalDetailsVotesQueryResult = Apollo.QueryResult<ProposalDetailsVotesQuery, ProposalDetailsVotesQueryVariables>;
export const ProposalsDocument = gql`
    query Proposals($limit: Int = 7, $offset: Int = 0) {
  proposals: proposal(limit: $limit, offset: $offset, order_by: {id: desc}) {
    title
    proposalId: id
    status
    description
  }
  total: proposal_aggregate {
    aggregate {
      count
    }
  }
}
    `;

/**
 * __useProposalsQuery__
 *
 * To run a query within a React component, call `useProposalsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProposalsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProposalsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useProposalsQuery(baseOptions?: Apollo.QueryHookOptions<ProposalsQuery, ProposalsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProposalsQuery, ProposalsQueryVariables>(ProposalsDocument, options);
      }
export function useProposalsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProposalsQuery, ProposalsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProposalsQuery, ProposalsQueryVariables>(ProposalsDocument, options);
        }
export function useProposalsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ProposalsQuery, ProposalsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProposalsQuery, ProposalsQueryVariables>(ProposalsDocument, options);
        }
export type ProposalsQueryHookResult = ReturnType<typeof useProposalsQuery>;
export type ProposalsLazyQueryHookResult = ReturnType<typeof useProposalsLazyQuery>;
export type ProposalsSuspenseQueryHookResult = ReturnType<typeof useProposalsSuspenseQuery>;
export type ProposalsQueryResult = Apollo.QueryResult<ProposalsQuery, ProposalsQueryVariables>;
export const TokenPriceListenerDocument = gql`
    subscription TokenPriceListener($denom: String) {
  tokenPrice: token_price(where: {unit_name: {_eq: $denom}}) {
    price
    timestamp
    marketCap: market_cap
    unitName: unit_name
  }
}
    `;

/**
 * __useTokenPriceListenerSubscription__
 *
 * To run a query within a React component, call `useTokenPriceListenerSubscription` and pass it any options that fit your needs.
 * When your component renders, `useTokenPriceListenerSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTokenPriceListenerSubscription({
 *   variables: {
 *      denom: // value for 'denom'
 *   },
 * });
 */
export function useTokenPriceListenerSubscription(baseOptions?: Apollo.SubscriptionHookOptions<TokenPriceListenerSubscription, TokenPriceListenerSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<TokenPriceListenerSubscription, TokenPriceListenerSubscriptionVariables>(TokenPriceListenerDocument, options);
      }
export type TokenPriceListenerSubscriptionHookResult = ReturnType<typeof useTokenPriceListenerSubscription>;
export type TokenPriceListenerSubscriptionResult = Apollo.SubscriptionResult<TokenPriceListenerSubscription>;
export const TokenPriceHistoryDocument = gql`
    query TokenPriceHistory($denom: String, $limit: Int = 10) {
  tokenPrice: token_price_history(
    where: {unit_name: {_eq: $denom}}
    limit: $limit
    order_by: {timestamp: desc}
  ) {
    price
    timestamp
  }
}
    `;

/**
 * __useTokenPriceHistoryQuery__
 *
 * To run a query within a React component, call `useTokenPriceHistoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useTokenPriceHistoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTokenPriceHistoryQuery({
 *   variables: {
 *      denom: // value for 'denom'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useTokenPriceHistoryQuery(baseOptions?: Apollo.QueryHookOptions<TokenPriceHistoryQuery, TokenPriceHistoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TokenPriceHistoryQuery, TokenPriceHistoryQueryVariables>(TokenPriceHistoryDocument, options);
      }
export function useTokenPriceHistoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TokenPriceHistoryQuery, TokenPriceHistoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TokenPriceHistoryQuery, TokenPriceHistoryQueryVariables>(TokenPriceHistoryDocument, options);
        }
export function useTokenPriceHistorySuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<TokenPriceHistoryQuery, TokenPriceHistoryQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<TokenPriceHistoryQuery, TokenPriceHistoryQueryVariables>(TokenPriceHistoryDocument, options);
        }
export type TokenPriceHistoryQueryHookResult = ReturnType<typeof useTokenPriceHistoryQuery>;
export type TokenPriceHistoryLazyQueryHookResult = ReturnType<typeof useTokenPriceHistoryLazyQuery>;
export type TokenPriceHistorySuspenseQueryHookResult = ReturnType<typeof useTokenPriceHistorySuspenseQuery>;
export type TokenPriceHistoryQueryResult = Apollo.QueryResult<TokenPriceHistoryQuery, TokenPriceHistoryQueryVariables>;
export const TokenomicsDocument = gql`
    query Tokenomics {
  stakingParams: staking_params(limit: 1) {
    params
  }
  stakingPool: staking_pool(order_by: {height: desc}, limit: 1) {
    bonded: bonded_tokens
    unbonded: not_bonded_tokens
  }
  supply: supply(order_by: {height: desc}, limit: 1) {
    coins
  }
}
    `;

/**
 * __useTokenomicsQuery__
 *
 * To run a query within a React component, call `useTokenomicsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTokenomicsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTokenomicsQuery({
 *   variables: {
 *   },
 * });
 */
export function useTokenomicsQuery(baseOptions?: Apollo.QueryHookOptions<TokenomicsQuery, TokenomicsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TokenomicsQuery, TokenomicsQueryVariables>(TokenomicsDocument, options);
      }
export function useTokenomicsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TokenomicsQuery, TokenomicsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TokenomicsQuery, TokenomicsQueryVariables>(TokenomicsDocument, options);
        }
export function useTokenomicsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<TokenomicsQuery, TokenomicsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<TokenomicsQuery, TokenomicsQueryVariables>(TokenomicsDocument, options);
        }
export type TokenomicsQueryHookResult = ReturnType<typeof useTokenomicsQuery>;
export type TokenomicsLazyQueryHookResult = ReturnType<typeof useTokenomicsLazyQuery>;
export type TokenomicsSuspenseQueryHookResult = ReturnType<typeof useTokenomicsSuspenseQuery>;
export type TokenomicsQueryResult = Apollo.QueryResult<TokenomicsQuery, TokenomicsQueryVariables>;
export const TransactionDetailsDocument = gql`
    query TransactionDetails($hash: String) {
  transaction(where: {hash: {_eq: $hash}}, limit: 1) {
    hash: hash
    height: height
    block: block {
      timestamp: timestamp
    }
    fee: fee
    gasUsed: gas_used
    gasWanted: gas_wanted
    success: success
    memo: memo
    messages: messages
    logs
    rawLog: raw_log
  }
}
    `;

/**
 * __useTransactionDetailsQuery__
 *
 * To run a query within a React component, call `useTransactionDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTransactionDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTransactionDetailsQuery({
 *   variables: {
 *      hash: // value for 'hash'
 *   },
 * });
 */
export function useTransactionDetailsQuery(baseOptions?: Apollo.QueryHookOptions<TransactionDetailsQuery, TransactionDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TransactionDetailsQuery, TransactionDetailsQueryVariables>(TransactionDetailsDocument, options);
      }
export function useTransactionDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TransactionDetailsQuery, TransactionDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TransactionDetailsQuery, TransactionDetailsQueryVariables>(TransactionDetailsDocument, options);
        }
export function useTransactionDetailsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<TransactionDetailsQuery, TransactionDetailsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<TransactionDetailsQuery, TransactionDetailsQueryVariables>(TransactionDetailsDocument, options);
        }
export type TransactionDetailsQueryHookResult = ReturnType<typeof useTransactionDetailsQuery>;
export type TransactionDetailsLazyQueryHookResult = ReturnType<typeof useTransactionDetailsLazyQuery>;
export type TransactionDetailsSuspenseQueryHookResult = ReturnType<typeof useTransactionDetailsSuspenseQuery>;
export type TransactionDetailsQueryResult = Apollo.QueryResult<TransactionDetailsQuery, TransactionDetailsQueryVariables>;
export const TransactionsListenerDocument = gql`
    subscription TransactionsListener($limit: Int = 7, $offset: Int = 0) {
  transactions: transaction(
    limit: $limit
    offset: $offset
    order_by: {height: desc}
  ) {
    height
    hash
    success
    block {
      timestamp
    }
    messages
    logs
  }
}
    `;

/**
 * __useTransactionsListenerSubscription__
 *
 * To run a query within a React component, call `useTransactionsListenerSubscription` and pass it any options that fit your needs.
 * When your component renders, `useTransactionsListenerSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTransactionsListenerSubscription({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useTransactionsListenerSubscription(baseOptions?: Apollo.SubscriptionHookOptions<TransactionsListenerSubscription, TransactionsListenerSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<TransactionsListenerSubscription, TransactionsListenerSubscriptionVariables>(TransactionsListenerDocument, options);
      }
export type TransactionsListenerSubscriptionHookResult = ReturnType<typeof useTransactionsListenerSubscription>;
export type TransactionsListenerSubscriptionResult = Apollo.SubscriptionResult<TransactionsListenerSubscription>;
export const TransactionsDocument = gql`
    query Transactions($limit: Int = 7, $offset: Int = 0) {
  transactions: transaction(
    limit: $limit
    offset: $offset
    order_by: {height: desc}
  ) {
    height
    hash
    success
    block {
      timestamp
    }
    messages
    logs
  }
}
    `;

/**
 * __useTransactionsQuery__
 *
 * To run a query within a React component, call `useTransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTransactionsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useTransactionsQuery(baseOptions?: Apollo.QueryHookOptions<TransactionsQuery, TransactionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TransactionsQuery, TransactionsQueryVariables>(TransactionsDocument, options);
      }
export function useTransactionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TransactionsQuery, TransactionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TransactionsQuery, TransactionsQueryVariables>(TransactionsDocument, options);
        }
export function useTransactionsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<TransactionsQuery, TransactionsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<TransactionsQuery, TransactionsQueryVariables>(TransactionsDocument, options);
        }
export type TransactionsQueryHookResult = ReturnType<typeof useTransactionsQuery>;
export type TransactionsLazyQueryHookResult = ReturnType<typeof useTransactionsLazyQuery>;
export type TransactionsSuspenseQueryHookResult = ReturnType<typeof useTransactionsSuspenseQuery>;
export type TransactionsQueryResult = Apollo.QueryResult<TransactionsQuery, TransactionsQueryVariables>;
export const LastHundredBlocksDocument = gql`
    subscription LastHundredBlocks($address: String) {
  block(offset: 1, order_by: {height: desc}, limit: 100) {
    height
    validator {
      validatorInfo: validator_info {
        operatorAddress: operator_address
      }
    }
    transactions {
      hash
    }
    precommits: pre_commits(
      where: {validator: {validator_info: {operator_address: {_eq: $address}}}}
    ) {
      validatorAddress: validator_address
    }
  }
}
    `;

/**
 * __useLastHundredBlocksSubscription__
 *
 * To run a query within a React component, call `useLastHundredBlocksSubscription` and pass it any options that fit your needs.
 * When your component renders, `useLastHundredBlocksSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLastHundredBlocksSubscription({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useLastHundredBlocksSubscription(baseOptions?: Apollo.SubscriptionHookOptions<LastHundredBlocksSubscription, LastHundredBlocksSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<LastHundredBlocksSubscription, LastHundredBlocksSubscriptionVariables>(LastHundredBlocksDocument, options);
      }
export type LastHundredBlocksSubscriptionHookResult = ReturnType<typeof useLastHundredBlocksSubscription>;
export type LastHundredBlocksSubscriptionResult = Apollo.SubscriptionResult<LastHundredBlocksSubscription>;
export const ValidatorLastSeenListenerDocument = gql`
    subscription ValidatorLastSeenListener($address: String) {
  preCommit: pre_commit(
    limit: 1
    where: {validator: {validator_info: {operator_address: {_eq: $address}}}}
    order_by: {height: desc}
  ) {
    height
    timestamp
  }
}
    `;

/**
 * __useValidatorLastSeenListenerSubscription__
 *
 * To run a query within a React component, call `useValidatorLastSeenListenerSubscription` and pass it any options that fit your needs.
 * When your component renders, `useValidatorLastSeenListenerSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useValidatorLastSeenListenerSubscription({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useValidatorLastSeenListenerSubscription(baseOptions?: Apollo.SubscriptionHookOptions<ValidatorLastSeenListenerSubscription, ValidatorLastSeenListenerSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<ValidatorLastSeenListenerSubscription, ValidatorLastSeenListenerSubscriptionVariables>(ValidatorLastSeenListenerDocument, options);
      }
export type ValidatorLastSeenListenerSubscriptionHookResult = ReturnType<typeof useValidatorLastSeenListenerSubscription>;
export type ValidatorLastSeenListenerSubscriptionResult = Apollo.SubscriptionResult<ValidatorLastSeenListenerSubscription>;
export const ValidatorDescriptionDocument = gql`
    query ValidatorDescription($address: String) {
  validator(where: {validator_info: {operator_address: {_eq: $address}}}) {
    validatorDescriptions: validator_descriptions(
      order_by: {height: desc}
      limit: 1
    ) {
      details
      website
    }
  }
}
    `;

/**
 * __useValidatorDescriptionQuery__
 *
 * To run a query within a React component, call `useValidatorDescriptionQuery` and pass it any options that fit your needs.
 * When your component renders, `useValidatorDescriptionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useValidatorDescriptionQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useValidatorDescriptionQuery(baseOptions?: Apollo.QueryHookOptions<ValidatorDescriptionQuery, ValidatorDescriptionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ValidatorDescriptionQuery, ValidatorDescriptionQueryVariables>(ValidatorDescriptionDocument, options);
      }
export function useValidatorDescriptionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ValidatorDescriptionQuery, ValidatorDescriptionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ValidatorDescriptionQuery, ValidatorDescriptionQueryVariables>(ValidatorDescriptionDocument, options);
        }
export function useValidatorDescriptionSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ValidatorDescriptionQuery, ValidatorDescriptionQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ValidatorDescriptionQuery, ValidatorDescriptionQueryVariables>(ValidatorDescriptionDocument, options);
        }
export type ValidatorDescriptionQueryHookResult = ReturnType<typeof useValidatorDescriptionQuery>;
export type ValidatorDescriptionLazyQueryHookResult = ReturnType<typeof useValidatorDescriptionLazyQuery>;
export type ValidatorDescriptionSuspenseQueryHookResult = ReturnType<typeof useValidatorDescriptionSuspenseQuery>;
export type ValidatorDescriptionQueryResult = Apollo.QueryResult<ValidatorDescriptionQuery, ValidatorDescriptionQueryVariables>;
export const ValidatorStatusesDocument = gql`
    query ValidatorStatuses($address: String) {
  validator(where: {validator_info: {operator_address: {_eq: $address}}}) {
    validatorStatuses: validator_statuses(order_by: {height: desc}, limit: 1) {
      status
      jailed
      height
    }
  }
  slashingParams: slashing_params(order_by: {height: desc}, limit: 1) {
    params
  }
}
    `;

/**
 * __useValidatorStatusesQuery__
 *
 * To run a query within a React component, call `useValidatorStatusesQuery` and pass it any options that fit your needs.
 * When your component renders, `useValidatorStatusesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useValidatorStatusesQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useValidatorStatusesQuery(baseOptions?: Apollo.QueryHookOptions<ValidatorStatusesQuery, ValidatorStatusesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ValidatorStatusesQuery, ValidatorStatusesQueryVariables>(ValidatorStatusesDocument, options);
      }
export function useValidatorStatusesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ValidatorStatusesQuery, ValidatorStatusesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ValidatorStatusesQuery, ValidatorStatusesQueryVariables>(ValidatorStatusesDocument, options);
        }
export function useValidatorStatusesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ValidatorStatusesQuery, ValidatorStatusesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ValidatorStatusesQuery, ValidatorStatusesQueryVariables>(ValidatorStatusesDocument, options);
        }
export type ValidatorStatusesQueryHookResult = ReturnType<typeof useValidatorStatusesQuery>;
export type ValidatorStatusesLazyQueryHookResult = ReturnType<typeof useValidatorStatusesLazyQuery>;
export type ValidatorStatusesSuspenseQueryHookResult = ReturnType<typeof useValidatorStatusesSuspenseQuery>;
export type ValidatorStatusesQueryResult = Apollo.QueryResult<ValidatorStatusesQuery, ValidatorStatusesQueryVariables>;
export const ValidatorSigningInfosDocument = gql`
    query ValidatorSigningInfos($address: String) {
  validator(where: {validator_info: {operator_address: {_eq: $address}}}) {
    validatorSigningInfos: validator_signing_infos(
      order_by: {height: desc}
      limit: 1
    ) {
      missedBlocksCounter: missed_blocks_counter
      tombstoned
    }
  }
}
    `;

/**
 * __useValidatorSigningInfosQuery__
 *
 * To run a query within a React component, call `useValidatorSigningInfosQuery` and pass it any options that fit your needs.
 * When your component renders, `useValidatorSigningInfosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useValidatorSigningInfosQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useValidatorSigningInfosQuery(baseOptions?: Apollo.QueryHookOptions<ValidatorSigningInfosQuery, ValidatorSigningInfosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ValidatorSigningInfosQuery, ValidatorSigningInfosQueryVariables>(ValidatorSigningInfosDocument, options);
      }
export function useValidatorSigningInfosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ValidatorSigningInfosQuery, ValidatorSigningInfosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ValidatorSigningInfosQuery, ValidatorSigningInfosQueryVariables>(ValidatorSigningInfosDocument, options);
        }
export function useValidatorSigningInfosSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ValidatorSigningInfosQuery, ValidatorSigningInfosQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ValidatorSigningInfosQuery, ValidatorSigningInfosQueryVariables>(ValidatorSigningInfosDocument, options);
        }
export type ValidatorSigningInfosQueryHookResult = ReturnType<typeof useValidatorSigningInfosQuery>;
export type ValidatorSigningInfosLazyQueryHookResult = ReturnType<typeof useValidatorSigningInfosLazyQuery>;
export type ValidatorSigningInfosSuspenseQueryHookResult = ReturnType<typeof useValidatorSigningInfosSuspenseQuery>;
export type ValidatorSigningInfosQueryResult = Apollo.QueryResult<ValidatorSigningInfosQuery, ValidatorSigningInfosQueryVariables>;
export const ValidatorInfoDocument = gql`
    query ValidatorInfo($address: String) {
  validator(where: {validator_info: {operator_address: {_eq: $address}}}) {
    validatorInfo: validator_info {
      operatorAddress: operator_address
      selfDelegateAddress: self_delegate_address
      maxRate: max_rate
    }
    validatorDescriptions: validator_descriptions(
      order_by: {height: desc}
      limit: 1
    ) {
      details
      website
    }
    validatorStatuses: validator_statuses(order_by: {height: desc}, limit: 1) {
      status
      jailed
      height
    }
    validatorSigningInfos: validator_signing_infos(
      order_by: {height: desc}
      limit: 1
    ) {
      missedBlocksCounter: missed_blocks_counter
      tombstoned
    }
    validatorCommissions: validator_commissions(order_by: {height: desc}, limit: 1) {
      commission
    }
  }
  slashingParams: slashing_params(order_by: {height: desc}, limit: 1) {
    params
  }
}
    `;

/**
 * __useValidatorInfoQuery__
 *
 * To run a query within a React component, call `useValidatorInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useValidatorInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useValidatorInfoQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useValidatorInfoQuery(baseOptions?: Apollo.QueryHookOptions<ValidatorInfoQuery, ValidatorInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ValidatorInfoQuery, ValidatorInfoQueryVariables>(ValidatorInfoDocument, options);
      }
export function useValidatorInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ValidatorInfoQuery, ValidatorInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ValidatorInfoQuery, ValidatorInfoQueryVariables>(ValidatorInfoDocument, options);
        }
export function useValidatorInfoSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ValidatorInfoQuery, ValidatorInfoQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ValidatorInfoQuery, ValidatorInfoQueryVariables>(ValidatorInfoDocument, options);
        }
export type ValidatorInfoQueryHookResult = ReturnType<typeof useValidatorInfoQuery>;
export type ValidatorInfoLazyQueryHookResult = ReturnType<typeof useValidatorInfoLazyQuery>;
export type ValidatorInfoSuspenseQueryHookResult = ReturnType<typeof useValidatorInfoSuspenseQuery>;
export type ValidatorInfoQueryResult = Apollo.QueryResult<ValidatorInfoQuery, ValidatorInfoQueryVariables>;
export const ValidatorCommissionDocument = gql`
    query ValidatorCommission($address: String) {
  validator(where: {validator_info: {operator_address: {_eq: $address}}}) {
    validatorCommissions: validator_commissions(order_by: {height: desc}, limit: 1) {
      commission
    }
  }
}
    `;

/**
 * __useValidatorCommissionQuery__
 *
 * To run a query within a React component, call `useValidatorCommissionQuery` and pass it any options that fit your needs.
 * When your component renders, `useValidatorCommissionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useValidatorCommissionQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useValidatorCommissionQuery(baseOptions?: Apollo.QueryHookOptions<ValidatorCommissionQuery, ValidatorCommissionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ValidatorCommissionQuery, ValidatorCommissionQueryVariables>(ValidatorCommissionDocument, options);
      }
export function useValidatorCommissionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ValidatorCommissionQuery, ValidatorCommissionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ValidatorCommissionQuery, ValidatorCommissionQueryVariables>(ValidatorCommissionDocument, options);
        }
export function useValidatorCommissionSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ValidatorCommissionQuery, ValidatorCommissionQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ValidatorCommissionQuery, ValidatorCommissionQueryVariables>(ValidatorCommissionDocument, options);
        }
export type ValidatorCommissionQueryHookResult = ReturnType<typeof useValidatorCommissionQuery>;
export type ValidatorCommissionLazyQueryHookResult = ReturnType<typeof useValidatorCommissionLazyQuery>;
export type ValidatorCommissionSuspenseQueryHookResult = ReturnType<typeof useValidatorCommissionSuspenseQuery>;
export type ValidatorCommissionQueryResult = Apollo.QueryResult<ValidatorCommissionQuery, ValidatorCommissionQueryVariables>;
export const ValidatorVotingPowersDocument = gql`
    query ValidatorVotingPowers($address: String) {
  validator(where: {validator_info: {operator_address: {_eq: $address}}}) {
    validatorVotingPowers: validator_voting_powers(
      offset: 0
      limit: 1
      order_by: {height: desc}
    ) {
      height
      votingPower: voting_power
    }
    validatorStatuses: validator_statuses(order_by: {height: desc}, limit: 1) {
      status
    }
  }
  stakingPool: staking_pool(order_by: {height: desc}, limit: 1, offset: 0) {
    height
    bonded: bonded_tokens
  }
}
    `;

/**
 * __useValidatorVotingPowersQuery__
 *
 * To run a query within a React component, call `useValidatorVotingPowersQuery` and pass it any options that fit your needs.
 * When your component renders, `useValidatorVotingPowersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useValidatorVotingPowersQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useValidatorVotingPowersQuery(baseOptions?: Apollo.QueryHookOptions<ValidatorVotingPowersQuery, ValidatorVotingPowersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ValidatorVotingPowersQuery, ValidatorVotingPowersQueryVariables>(ValidatorVotingPowersDocument, options);
      }
export function useValidatorVotingPowersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ValidatorVotingPowersQuery, ValidatorVotingPowersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ValidatorVotingPowersQuery, ValidatorVotingPowersQueryVariables>(ValidatorVotingPowersDocument, options);
        }
export function useValidatorVotingPowersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ValidatorVotingPowersQuery, ValidatorVotingPowersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ValidatorVotingPowersQuery, ValidatorVotingPowersQueryVariables>(ValidatorVotingPowersDocument, options);
        }
export type ValidatorVotingPowersQueryHookResult = ReturnType<typeof useValidatorVotingPowersQuery>;
export type ValidatorVotingPowersLazyQueryHookResult = ReturnType<typeof useValidatorVotingPowersLazyQuery>;
export type ValidatorVotingPowersSuspenseQueryHookResult = ReturnType<typeof useValidatorVotingPowersSuspenseQuery>;
export type ValidatorVotingPowersQueryResult = Apollo.QueryResult<ValidatorVotingPowersQuery, ValidatorVotingPowersQueryVariables>;
export const ValidatorAddressDocument = gql`
    query ValidatorAddress($address: String) {
  validator(where: {validator_info: {operator_address: {_eq: $address}}}) {
    validatorInfo: validator_info {
      operatorAddress: operator_address
      selfDelegateAddress: self_delegate_address
    }
  }
}
    `;

/**
 * __useValidatorAddressQuery__
 *
 * To run a query within a React component, call `useValidatorAddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useValidatorAddressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useValidatorAddressQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useValidatorAddressQuery(baseOptions?: Apollo.QueryHookOptions<ValidatorAddressQuery, ValidatorAddressQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ValidatorAddressQuery, ValidatorAddressQueryVariables>(ValidatorAddressDocument, options);
      }
export function useValidatorAddressLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ValidatorAddressQuery, ValidatorAddressQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ValidatorAddressQuery, ValidatorAddressQueryVariables>(ValidatorAddressDocument, options);
        }
export function useValidatorAddressSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ValidatorAddressQuery, ValidatorAddressQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ValidatorAddressQuery, ValidatorAddressQueryVariables>(ValidatorAddressDocument, options);
        }
export type ValidatorAddressQueryHookResult = ReturnType<typeof useValidatorAddressQuery>;
export type ValidatorAddressLazyQueryHookResult = ReturnType<typeof useValidatorAddressLazyQuery>;
export type ValidatorAddressSuspenseQueryHookResult = ReturnType<typeof useValidatorAddressSuspenseQuery>;
export type ValidatorAddressQueryResult = Apollo.QueryResult<ValidatorAddressQuery, ValidatorAddressQueryVariables>;
export const ValidatorDelegationsDocument = gql`
    query ValidatorDelegations($validatorAddress: String!, $offset: Int = 0, $limit: Int = 10, $pagination: Boolean! = true) {
  delegations: action_validator_delegations(
    address: $validatorAddress
    limit: $limit
    offset: $offset
    count_total: $pagination
  ) {
    delegations
    pagination
  }
}
    `;

/**
 * __useValidatorDelegationsQuery__
 *
 * To run a query within a React component, call `useValidatorDelegationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useValidatorDelegationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useValidatorDelegationsQuery({
 *   variables: {
 *      validatorAddress: // value for 'validatorAddress'
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useValidatorDelegationsQuery(baseOptions: Apollo.QueryHookOptions<ValidatorDelegationsQuery, ValidatorDelegationsQueryVariables> & ({ variables: ValidatorDelegationsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ValidatorDelegationsQuery, ValidatorDelegationsQueryVariables>(ValidatorDelegationsDocument, options);
      }
export function useValidatorDelegationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ValidatorDelegationsQuery, ValidatorDelegationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ValidatorDelegationsQuery, ValidatorDelegationsQueryVariables>(ValidatorDelegationsDocument, options);
        }
export function useValidatorDelegationsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ValidatorDelegationsQuery, ValidatorDelegationsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ValidatorDelegationsQuery, ValidatorDelegationsQueryVariables>(ValidatorDelegationsDocument, options);
        }
export type ValidatorDelegationsQueryHookResult = ReturnType<typeof useValidatorDelegationsQuery>;
export type ValidatorDelegationsLazyQueryHookResult = ReturnType<typeof useValidatorDelegationsLazyQuery>;
export type ValidatorDelegationsSuspenseQueryHookResult = ReturnType<typeof useValidatorDelegationsSuspenseQuery>;
export type ValidatorDelegationsQueryResult = Apollo.QueryResult<ValidatorDelegationsQuery, ValidatorDelegationsQueryVariables>;
export const ValidatorRedelegationsDocument = gql`
    query ValidatorRedelegations($validatorAddress: String!, $offset: Int = 0, $limit: Int = 10, $pagination: Boolean! = true) {
  redelegations: action_validator_redelegations_from(
    address: $validatorAddress
    limit: $limit
    offset: $offset
    count_total: $pagination
  ) {
    redelegations
    pagination
  }
}
    `;

/**
 * __useValidatorRedelegationsQuery__
 *
 * To run a query within a React component, call `useValidatorRedelegationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useValidatorRedelegationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useValidatorRedelegationsQuery({
 *   variables: {
 *      validatorAddress: // value for 'validatorAddress'
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useValidatorRedelegationsQuery(baseOptions: Apollo.QueryHookOptions<ValidatorRedelegationsQuery, ValidatorRedelegationsQueryVariables> & ({ variables: ValidatorRedelegationsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ValidatorRedelegationsQuery, ValidatorRedelegationsQueryVariables>(ValidatorRedelegationsDocument, options);
      }
export function useValidatorRedelegationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ValidatorRedelegationsQuery, ValidatorRedelegationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ValidatorRedelegationsQuery, ValidatorRedelegationsQueryVariables>(ValidatorRedelegationsDocument, options);
        }
export function useValidatorRedelegationsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ValidatorRedelegationsQuery, ValidatorRedelegationsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ValidatorRedelegationsQuery, ValidatorRedelegationsQueryVariables>(ValidatorRedelegationsDocument, options);
        }
export type ValidatorRedelegationsQueryHookResult = ReturnType<typeof useValidatorRedelegationsQuery>;
export type ValidatorRedelegationsLazyQueryHookResult = ReturnType<typeof useValidatorRedelegationsLazyQuery>;
export type ValidatorRedelegationsSuspenseQueryHookResult = ReturnType<typeof useValidatorRedelegationsSuspenseQuery>;
export type ValidatorRedelegationsQueryResult = Apollo.QueryResult<ValidatorRedelegationsQuery, ValidatorRedelegationsQueryVariables>;
export const ValidatorUndelegationsDocument = gql`
    query ValidatorUndelegations($validatorAddress: String!, $offset: Int = 0, $limit: Int = 10, $pagination: Boolean! = true) {
  undelegations: action_validator_unbonding_delegations(
    address: $validatorAddress
    limit: $limit
    offset: $offset
    count_total: $pagination
  ) {
    undelegations: unbonding_delegations
    pagination
  }
}
    `;

/**
 * __useValidatorUndelegationsQuery__
 *
 * To run a query within a React component, call `useValidatorUndelegationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useValidatorUndelegationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useValidatorUndelegationsQuery({
 *   variables: {
 *      validatorAddress: // value for 'validatorAddress'
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useValidatorUndelegationsQuery(baseOptions: Apollo.QueryHookOptions<ValidatorUndelegationsQuery, ValidatorUndelegationsQueryVariables> & ({ variables: ValidatorUndelegationsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ValidatorUndelegationsQuery, ValidatorUndelegationsQueryVariables>(ValidatorUndelegationsDocument, options);
      }
export function useValidatorUndelegationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ValidatorUndelegationsQuery, ValidatorUndelegationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ValidatorUndelegationsQuery, ValidatorUndelegationsQueryVariables>(ValidatorUndelegationsDocument, options);
        }
export function useValidatorUndelegationsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ValidatorUndelegationsQuery, ValidatorUndelegationsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ValidatorUndelegationsQuery, ValidatorUndelegationsQueryVariables>(ValidatorUndelegationsDocument, options);
        }
export type ValidatorUndelegationsQueryHookResult = ReturnType<typeof useValidatorUndelegationsQuery>;
export type ValidatorUndelegationsLazyQueryHookResult = ReturnType<typeof useValidatorUndelegationsLazyQuery>;
export type ValidatorUndelegationsSuspenseQueryHookResult = ReturnType<typeof useValidatorUndelegationsSuspenseQuery>;
export type ValidatorUndelegationsQueryResult = Apollo.QueryResult<ValidatorUndelegationsQuery, ValidatorUndelegationsQueryVariables>;
export const ValidatorsDocument = gql`
    query Validators {
  stakingPool: staking_pool(limit: 1, order_by: {height: desc}) {
    bondedTokens: bonded_tokens
  }
  validator {
    validatorStatuses: validator_statuses(order_by: {height: desc}, limit: 1) {
      status
      jailed
      height
    }
    validatorSigningInfos: validator_signing_infos(
      order_by: {height: desc}
      limit: 1
    ) {
      missedBlocksCounter: missed_blocks_counter
      tombstoned
    }
    validatorInfo: validator_info {
      operatorAddress: operator_address
      selfDelegateAddress: self_delegate_address
    }
    validatorVotingPowers: validator_voting_powers(
      offset: 0
      limit: 1
      order_by: {height: desc}
    ) {
      votingPower: voting_power
    }
    validatorCommissions: validator_commissions(order_by: {height: desc}, limit: 1) {
      commission
    }
    validatorSigningInfos: validator_signing_infos(
      order_by: {height: desc}
      limit: 1
    ) {
      missedBlocksCounter: missed_blocks_counter
    }
  }
  slashingParams: slashing_params(order_by: {height: desc}, limit: 1) {
    params
  }
}
    `;

/**
 * __useValidatorsQuery__
 *
 * To run a query within a React component, call `useValidatorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useValidatorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useValidatorsQuery({
 *   variables: {
 *   },
 * });
 */
export function useValidatorsQuery(baseOptions?: Apollo.QueryHookOptions<ValidatorsQuery, ValidatorsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ValidatorsQuery, ValidatorsQueryVariables>(ValidatorsDocument, options);
      }
export function useValidatorsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ValidatorsQuery, ValidatorsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ValidatorsQuery, ValidatorsQueryVariables>(ValidatorsDocument, options);
        }
export function useValidatorsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ValidatorsQuery, ValidatorsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ValidatorsQuery, ValidatorsQueryVariables>(ValidatorsDocument, options);
        }
export type ValidatorsQueryHookResult = ReturnType<typeof useValidatorsQuery>;
export type ValidatorsLazyQueryHookResult = ReturnType<typeof useValidatorsLazyQuery>;
export type ValidatorsSuspenseQueryHookResult = ReturnType<typeof useValidatorsSuspenseQuery>;
export type ValidatorsQueryResult = Apollo.QueryResult<ValidatorsQuery, ValidatorsQueryVariables>;
export const ValidatorAddressesDocument = gql`
    query ValidatorAddresses {
  validator(
    where: {validator_info: {operator_address: {_is_null: false}, consensus_address: {_is_null: false}, self_delegate_address: {_is_null: false}}}
  ) {
    validatorInfo: validator_info {
      operatorAddress: operator_address
      selfDelegateAddress: self_delegate_address
      consensusAddress: consensus_address
    }
    validatorDescriptions: validator_descriptions(
      limit: 1
      order_by: {height: desc}
    ) {
      moniker
      avatarUrl: avatar_url
    }
  }
}
    `;

/**
 * __useValidatorAddressesQuery__
 *
 * To run a query within a React component, call `useValidatorAddressesQuery` and pass it any options that fit your needs.
 * When your component renders, `useValidatorAddressesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useValidatorAddressesQuery({
 *   variables: {
 *   },
 * });
 */
export function useValidatorAddressesQuery(baseOptions?: Apollo.QueryHookOptions<ValidatorAddressesQuery, ValidatorAddressesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ValidatorAddressesQuery, ValidatorAddressesQueryVariables>(ValidatorAddressesDocument, options);
      }
export function useValidatorAddressesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ValidatorAddressesQuery, ValidatorAddressesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ValidatorAddressesQuery, ValidatorAddressesQueryVariables>(ValidatorAddressesDocument, options);
        }
export function useValidatorAddressesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ValidatorAddressesQuery, ValidatorAddressesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ValidatorAddressesQuery, ValidatorAddressesQueryVariables>(ValidatorAddressesDocument, options);
        }
export type ValidatorAddressesQueryHookResult = ReturnType<typeof useValidatorAddressesQuery>;
export type ValidatorAddressesLazyQueryHookResult = ReturnType<typeof useValidatorAddressesLazyQuery>;
export type ValidatorAddressesSuspenseQueryHookResult = ReturnType<typeof useValidatorAddressesSuspenseQuery>;
export type ValidatorAddressesQueryResult = Apollo.QueryResult<ValidatorAddressesQuery, ValidatorAddressesQueryVariables>;