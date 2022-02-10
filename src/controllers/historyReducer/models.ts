// Interfaces
import { Pages } from '../../routing/schema';

export type IHistoryState = Array<IHistoryStep>;

export interface IHistoryStep {
  link: string;
  name: Pages;
  additionalParameter?: string;
}
