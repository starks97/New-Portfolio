export interface IBlogProps {
  children?: React.ReactNode;
  title: string;
  description: string;
  author: string;
  category: string;
  imageAuthor?: string;
  publishDate?: string;
  images?: string;
}
export interface IPostsCardsMobileProps
  extends Pick<
    IBlogProps,
    "title" | "author" | "imageAuthor" | "publishDate" | "images" | "category"
  > {}

export interface IPostsCardsDesktopProps
  extends Pick<
    IBlogProps,
    | "author"
    | "category"
    | "children"
    | "description"
    | "title"
    | "publishDate"
    | "images"
  > {}
