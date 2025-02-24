export interface BlogContent {
    type: string;
    content: BlogContentItem[];
  }
  
  export interface BlogContentItem {
    type: string;
    attrs?: {
      textAlign?: string;
      data?: Record<string, any>;
    };
    content?: BlogTextContent[];
  }
  
  export interface BlogTextContent {
    type: string;
    text?: string;
    marks?: Array<{ type: string }>;
  }
  
  export interface BlogEntry {
    pageTitle: string;
    ogTitle: string;
    publishDate: string; 
    postingDate: string; 
    metaDescription: string;
    ogType: string;
    inode: string;
    host: string;
    locked: boolean;
    stInode: string;
    contentType: string;
    sitemap: string;
    identifier: string;
    image: string;
    urlTitle: string;
    publishUserName: string;
    publishUser: string;
    creationDate: string; 
    tags: string;
    sitemapImportance: string;
    folder: string;
    hasTitleImage: boolean;
    sortOrder: number;
    hostName: string;
    modDate: string; 
    searchEngineIndex: string;
    blogContent: BlogContent;
    title: string;
    baseType: string;
    archived: boolean;
    ownerName: string;
    working: boolean;
    live: boolean;
    owner: string;
    languageId: number;
    URL_MAP_FOR_CONTENT: string;
    ogDescription: string;
    shortyId: string;
    url: string;
    titleImage: string;
    modUserName: string;
    urlMap: string;
    hasLiveVersion: boolean;
    modUser: string;
    teaser: string;
    __icon__: string;
    contentTypeIcon: string;
    variant: string;
  }
  