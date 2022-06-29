type Author = {
  id: number;
  name: string;
  avatar: string;
};
type Taxanomy = {
  id: number;
  name: string;
  slug: string;
};
type Category = {
  id: number;
  name: string;
  slug: string;
};
type Tag = {
  id: number;
  name: string;
  slug: string;
};
type Post = {
  id: number;
  title: string;
  content: React.ReactNode;
  image: {
    src: string;
    alt: string;
  };
  images: string[];
  excerpt: string;
  slug: string;
  author: Author;
  tags: Tag[];
  categories: Category[] | string[];
  createdAt: string;
  updatedAt: string;
};
