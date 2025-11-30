import { TeamMember, TimelineEvent } from './types';

// ==========================================
// CONFIGURAÇÃO DE IMAGENS LOCAIS (PASTA PUBLIC)
// ==========================================
// Como seus arquivos estão na pasta 'public', referenciamos eles com uma barra '/' no início.
// Certifique-se de que os nomes dos arquivos na pasta public correspondam EXATAMENTE aos nomes abaixo.

export const externalLinks = {
  // Link para o Formulário de Inscrição (Google Forms)
  inscricao: 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform', // Substitua pelo seu link real
  
  // Link para Doação 
  doacao: 'https://wa.me/5579000000000?text=Ola,%20gostaria%20de%20fazer%20uma%20doacao%20para%20a%20Fanfarra!',
};

// ==========================================
// ÁREA DE IMAGENS
// ==========================================
export const siteImages = {
  // Renomeie seu arquivo de logo na pasta public para: logo.png (ou ajuste a extensão aqui se for .jpg)
  logo: 'https://drive.google.com/file/d/1O14TbO1acvFTbqKe85RoOfsbi9TFY7ew/view?usp=sharing',

  // Renomeie a imagem grande do topo para: hero.jpg
  heroBackground: 'hero.jpg',
  
  // Renomeie a imagem lateral do sobre para: sobre.jpg
  aboutSection: 'sobre.jpg',
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
  { role: 'Auxiliar Coreógrafo', name: 'Junior Mota' },
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
    // Renomeie o arquivo na pasta public para: 2022-inicio.jpg
    image: '2022-inicio.jpg'
  },
  {
    year: '2022',
    title: 'Primeira Fronteira Cruzada',
    location: 'Coronel João Sá (BA)',
    description: 'Nossa música cruzou a primeira fronteira. O nervosismo da estreia deu lugar ao orgulho de levar nossa arte para um novo público fora do estado.',
    // Renomeie o arquivo na pasta public para: 2022-coronel.jpg
    image: '2022-coronel.jpg'
  },
  {
    year: '2023',
    title: 'Evolução Constante',
    location: 'Nossa Senhora de Fátima (BA)',
    description: 'Mais fortes e experientes. A alegria de retornar à Bahia e mostrar nossa evolução técnica e visual.',
    // Renomeie o arquivo na pasta public para: 2023-fatima.jpg
    image: '2023-fatima.jpg'
  },
  {
    year: '2023',
    title: 'Novos Horizontes',
    location: 'Povoado Marita (BA)',
    description: 'Nosso som ecoou pela primeira vez em Marita. A cada aplauso, a certeza de que nosso projeto estava no caminho certo.',
    // Renomeie o arquivo na pasta public para: 2023-marita.jpg
    image: '2023-marita.jpg'
  },
  {
    year: '2024',
    title: 'Abertura dos Jogos',
    location: 'Aracaju (SE)',
    description: 'Levando o nome de Carira para a capital! Nossa apresentação na Abertura dos Jogos Escolares em Aracaju marcou nossa história.',
    // Renomeie o arquivo na pasta public para: 2024-aracaju.jpg
    image: '2024-aracaju.jpg'
  },
  {
    year: '2024',
    title: 'Momento Histórico',
    location: 'Carira (SE)',
    description: 'Apresentação na cerimônia de inauguração da nova prefeitura de Carira, unindo arte, civismo e educação.',
    // Renomeie o arquivo na pasta public para: 2024-prefeitura.jpg
    image: '2024-prefeitura.jpg'
  },
];
