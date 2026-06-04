export const VOTE_AVERAGE_FILTERS = [
  "all",
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
] as const;

export type VoteAverageFilter = (typeof VOTE_AVERAGE_FILTERS)[number];
