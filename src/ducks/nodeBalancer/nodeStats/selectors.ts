import { RootState } from '@src/ducks';
import { getNodeBalancer } from '@src/ducks/nodeBalancer/selectors';

export const getNodeStats = (state: RootState) => getNodeBalancer(state).nodes;

export const getNodeStatsById = (state: RootState, id: string) =>
  getNodeStats(state)[id];
