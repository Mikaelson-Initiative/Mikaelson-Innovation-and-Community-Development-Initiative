export interface User {
  id: string;
  username: string;
  uniqueName: string;
  email: string;
  clerkId: string;
  bio?: string;
  profileImage?: string;
  coverImage?: string;
  createdAt: Date;
  updatedAt: Date;
  Post: Post[];
  Follower: any[];
  Like: any[];
}

export interface Post {
  id: string;
  post?: string;
  files: string[];
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  challengeId?: string;
  repostOfId?: string;
  views: number;
  user: User;
  Like: any[];
  Comment: any[];
  challenge: Challenge;
  reposts: any[];
}

export interface Challenge {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  challenge: string;
  days: number | null;
}
