declare module '@apiverve/unicodelookup' {
  export interface unicodelookupOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface unicodelookupResponse {
    status: string;
    error: string | null;
    data: UnicodeCharacterLookupData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface UnicodeCharacterLookupData {
      character: null | string;
      codepoint: null | string;
      decimal:   number | null;
      hex:       null | string;
      utf16:     null | string;
      category:  null | string;
      name:      null;
  }

  export default class unicodelookupWrapper {
    constructor(options: unicodelookupOptions);

    execute(callback: (error: any, data: unicodelookupResponse | null) => void): Promise<unicodelookupResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: unicodelookupResponse | null) => void): Promise<unicodelookupResponse>;
    execute(query?: Record<string, any>): Promise<unicodelookupResponse>;
  }
}
