export interface IStorage {
  setItem<T>(key: string, item: T): T;
  getItem<T>(key: string): T;
}
