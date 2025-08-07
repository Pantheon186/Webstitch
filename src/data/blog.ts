export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  tags: string[];
  image?: string;
}

export const blogPosts: BlogPost[] = [];