export interface BannerList {
  bannerList: Contentlet[];
}

export interface Contentlet {
  hostName: string;
  modDate: string;
  link?: string; 
  publishDate: string;
  caption: string;
  title: string;
  baseType: string;
  inode: string;
  archived: boolean;
  ownerName: string;
  host: string;
  working: boolean;
  locked: boolean;
  stInode: string;
  contentType: string;
  live: boolean;
  owner: string;
  identifier: string;
  buttonText?: string; 
  image: string;
  publishUserName: string;
  publishUser: string;
  languageId: number;
  creationDate: string;
  textColor: string;
  shortyId: string;
  url: string;
  tags?: string; 
  layout: string;
  titleImage: string;
  modUserName: string;
  hasLiveVersion: boolean;
  folder: string;
  hasTitleImage: boolean;
  sortOrder: number;
  modUser: string;
  __icon__: string;
  contentTypeIcon: string;
  variant: string;
}