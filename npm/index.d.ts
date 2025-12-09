declare module '@apiverve/textsimilarity' {
  export interface textsimilarityOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface textsimilarityResponse {
    status: string;
    error: string | null;
    data: TextSimilarityData;
    code?: number;
  }


  interface TextSimilarityData {
      simiarity:               number;
      similarityCaseSensitive: number;
      difference:              Difference;
  }
  
  interface Difference {
      count:      number;
      percentage: number;
  }

  export default class textsimilarityWrapper {
    constructor(options: textsimilarityOptions);

    execute(callback: (error: any, data: textsimilarityResponse | null) => void): Promise<textsimilarityResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: textsimilarityResponse | null) => void): Promise<textsimilarityResponse>;
    execute(query?: Record<string, any>): Promise<textsimilarityResponse>;
  }
}
