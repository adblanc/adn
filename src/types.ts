export namespace ADN {
  export enum Diffusion {
    Simulcast = "simulcast",
    Download = "download",
    Free = "free",
  }

  export enum Order {
    Popular = "popular",
    Alpha = "alpha",
  }

  export enum Age {
    Plus0 = "0+",
    Plus10 = "10+",
    Plus12 = "12+",
    Plus16 = "16+",
  }

  export enum Language {
    Vf = "vf",
    Vostf = "vostf",
  }

  export enum Quality {
    Fhd = "fhd",
    HD = "hd",
    Mobile = "mobile",
    SD = "sd",
  }

  export enum Type {
    Eps = "EPS",
    Ova = "OAV",
    Movie = "MOV",
  }

  export type Genres =
    | []
    | [
        | "arts_martiaux"
        | "aventure--action"
        | "comedie"
        | "drame"
        | "ecchi--fan_service"
        | "fantastique--science-fiction"
        | "heroic_fantasy"
        | "historique"
        | "jeunesse"
        | "josei"
        | "mecha"
        | "musical"
        | "nostalgie"
        | "policier--thriller"
        | "psychologie"
        | "romance"
        | "scolaire"
        | "seinen"
        | "shojo"
        | "shonen"
        | "sport"
        | "violence"
      ];

  export interface Catalog {
    shows: Show[];
  }

  export interface Show {
    id: number;
    title: string;
    type: Type;
    originalTitle: null | string;
    shortTitle: null | string;
    reference: string;
    age: Age | null;
    languages: Language[];
    summary: null | string;
    image: string;
    image2x: string;
    url: string;
    urlPath: string;
    episodeCount: number;
    genres: string[];
    copyright: null | string;
    rating: number;
    ratingsCount: number;
    commentsCount: number;
    qualities: Quality[];
    simulcast: boolean;
    free: boolean;
    download: boolean;
    nextVideoReleaseDate: null | string;
  }

  export interface Calendar {
    videos: Episode[];
  }

  export interface Episodes {
    videos: Episode[];
  }

  export interface Episode {
    id: number;
    name: string;
    number: string;
    shortNumber: string;
    season: string;
    reference: string;
    type: Type;
    order: number;
    image: string;
    image2x: string;
    summary: string;
    releaseDate: string;
    duration: number;
    url: string;
    urlPath: string;
    embeddedUrl: string;
    languages: Language[];
    qualities: Quality[];
    rating: number;
    ratingsCount: number;
    commentsCount: number;
    available: boolean;
    download: boolean;
    free: boolean;
    freeWithAds: boolean;
    show: Show;
  }

  export interface CatalogOptions {
    offset?: number;
    limit?: number;
    diffusion?: Diffusion | [];
    type?: Type | "";
    language?: Language | "";
    quality?: Quality | "";
    age?: Age | "";
    genres?: Genres | "";
    search?: string;
    order?: Order | "";
  }
}
