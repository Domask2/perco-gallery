export interface ImagesProps {
  id: number;
  alt_description: string | null;
  width: number;
  height: number;
  urls: { full: string; raw: string; regular: string; small: string; thumb: string };
  color: string | null;
  user: {
    instagram_username: string;
    name: string;
  };
}

export interface ImageProps {
  url: string;
  alt: string;
}

export interface CommentValue {
  value: string;
  id: string;
}