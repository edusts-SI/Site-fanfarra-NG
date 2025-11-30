export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  image?: string;
  location?: string;
}

export interface TeamMember {
  role: string;
  name: string;
  subRole?: string;
}

export interface NavItem {
  label: string;
  href: string;
}