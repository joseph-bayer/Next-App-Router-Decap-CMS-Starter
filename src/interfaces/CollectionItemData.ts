export interface CollectionItemData extends CollectionItemMatterData {
  creationTime: Date;
}

export interface CollectionItemMatterData {
  slug: string;
  title: string;
  heroImage: {
    src: string;
    alt: string;
  };
}
