export interface OnlineUser {
  name: string;
  role: string;
}

export interface ActivityItem {
  icon: React.ElementType;
  label: string;
  value: string;
  highlight?: boolean;
}

export interface NewsItem {
  author: string;
  date: string;
  content: string[];
}
