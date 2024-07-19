export interface BlogData extends BlogMatterData {
  creationTime: Date;
}

export interface BlogMatterData {
  slug: string;
  title: string;
  heroImage: {
    src: string;
    alt: string;
  };
}
