declare module '@apiverve/textsimilarity' {
  export interface textsimilarityOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface textsimilarityResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class textsimilarityWrapper {
    constructor(options: textsimilarityOptions);

    execute(callback: (error: any, data: textsimilarityResponse | null) => void): Promise<textsimilarityResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: textsimilarityResponse | null) => void): Promise<textsimilarityResponse>;
    execute(query?: Record<string, any>): Promise<textsimilarityResponse>;
  }
}
