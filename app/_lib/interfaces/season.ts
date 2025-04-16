export interface ISeason {
  id: string;
  number: number;
  title: string;
  release: string;
  episodes: IEpisode[];
}

export interface IEpisode {
  id: string;
  number: number;
  title: string;
}
