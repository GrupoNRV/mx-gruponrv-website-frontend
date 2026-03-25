export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface Client {
  id: number;
  name: string;
  logo: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bg: string;
}
