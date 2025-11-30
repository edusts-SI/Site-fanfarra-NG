export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  location?: string;
  icon?: 'map' | 'music' | 'trophy' | 'star'; // Tipo de ícone para variar o visual
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