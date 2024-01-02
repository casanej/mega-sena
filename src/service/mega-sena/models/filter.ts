export type MSFilterOrderType = 'asc' | 'desc';

export interface MSFilter {
  order?: {
    value: MSFilterOrderType;
  }
}