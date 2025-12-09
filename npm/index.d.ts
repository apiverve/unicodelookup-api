declare module '@apiverve/unicodelookup' {
  export interface unicodelookupOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface unicodelookupResponse {
    status: string;
    error: string | null;
    data: UnicodeCharacterLookupData;
    code?: number;
  }


  interface UnicodeCharacterLookupData {
      character: string;
      codepoint: string;
      decimal:   number;
      hex:       string;
      utf16:     string;
      category:  string;
      name:      null;
  }

  export default class unicodelookupWrapper {
    constructor(options: unicodelookupOptions);

    execute(callback: (error: any, data: unicodelookupResponse | null) => void): Promise<unicodelookupResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: unicodelookupResponse | null) => void): Promise<unicodelookupResponse>;
    execute(query?: Record<string, any>): Promise<unicodelookupResponse>;
  }
}
