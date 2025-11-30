import { TeamMember, TimelineEvent } from './types';

// ==========================================
// CONFIGURAÇÃO DE LINKS EXTERNOS
// ==========================================
export const externalLinks = {
  inscricao: 'https://docs.google.com/forms/d/e/1FAIpQLSfcZjF_CnmIFJZResokql6xRvvmvEMXX4wJ6oYHCcnPUFHBEA/viewform?usp=dialog', 
  doacao: 'https://wa.me/5579000000000?text=Ola,%20gostaria%20de%20fazer%20uma%20doacao%20para%20a%20Fanfarra!',
  instagram: 'https://www.instagram.com/fanfarra_ng_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', 
  tiktok: 'https://www.tiktok.com/@_fanfarra_ng?_t=ZM-8wMYlmV22kv&_r=1&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn5NzwwhXCzF1yccxfWvJq7WGzdbm575I1CnPdIWvoBqpOi6wIv3IhIMXdh4Y_aem_jlzWCUvXsgmmB9pABr9LPw',
  historia: 'https://fanfarranova-geracao-iqoty9m.gamma.site', // <--- LINK DO BOTÃO CONHECER HISTÓRIA
};

// ==========================================
// MEMBROS DA EQUIPE
// ==========================================
export const teamMembers: TeamMember[] = [
  { role: 'Presidente e Maestra', name: 'Natália Alves' },
  { role: 'Vice-Presidente e Coreógrafo', name: 'Wagner Santos' },
  { role: 'Secretaria Administrativa Geral', name: 'Maria Eduarda' },
  { role: 'Coordenador', name: 'Eduardo Santos' },
  { role: 'Coordenador', name: 'Kauê Renan' },
  { role: 'Auxiliar Coreógrafo', name: 'Valdrike Ferreira' },
  { role: 'Supervisora Geral', name: 'Laryssa Andrade' },
];

// ==========================================
// LINHA DO TEMPO (TRAJETÓRIA)
// ==========================================
export const timelineEvents: TimelineEvent[] = [
  {
    year: '2022',
    title: 'O Início de um Sonho',
    location: 'Carira (SE)',
    description: '07 de Setembro: Nossa primeira apresentação em casa. O que era apenas uma ideia se tornou som, capturando o nascimento de um propósito no coração de Carira.',
    icon: 'star'
  },
  {
    year: '2022',
    title: 'Primeira Fronteira Cruzada',
    location: 'Coronel João Sá (BA)',
    description: 'Nossa música cruzou a primeira fronteira. O nervosismo da estreia deu lugar ao orgulho de levar nossa arte para um novo público fora do estado.',
    icon: 'map'
  },
  {
    year: '2023',
    title: 'Evolução Constante',
    location: 'Nossa Senhora de Fátima (BA)',
    description: 'Mais fortes e experientes. A alegria de retornar à Bahia e mostrar nossa evolução técnica e visual.',
    icon: 'music'
  },
  {
    year: '2023',
    title: 'Novos Horizontes',
    location: 'Povoado Marita (BA)',
    description: 'Nosso som ecoou pela primeira vez em Marita. A cada aplauso, a certeza de que nosso projeto estava no caminho certo.',
    icon: 'map'
  },
  {
    year: '2024',
    title: 'Abertura dos Jogos',
    location: 'Aracaju (SE)',
    description: 'Levando o nome de Carira para a capital! Nossa apresentação na Abertura dos Jogos Escolares em Aracaju marcou nossa história.',
    icon: 'trophy'
  },
  {
    year: '2024',
    title: 'Momento Histórico',
    location: 'Carira (SE)',
    description: 'Apresentação na cerimônia de inauguração da nova prefeitura de Carira, unindo arte, civismo e educação.',
    icon: 'star'
  },
];