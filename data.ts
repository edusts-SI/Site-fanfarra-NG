import { TeamMember, TimelineEvent } from './types';

// ==========================================
// DICA PARA DESENVOLVEDORES (PRODUÇÃO):
// ==========================================
// Atualmente estamos usando links externos (URLs) porque este ambiente 
// não permite upload de arquivos de imagem físicos pela IA.
//
// QUANDO VOCÊ BAIXAR O PROJETO:
// 1. Crie uma pasta chamada 'images' dentro da pasta 'public'.
// 2. Baixe as fotos e salve lá.
// 3. Troque os links abaixo pelo caminho local. 
//    Exemplo: troque 'https://drive...' por '/images/foto-hero.jpg'
// ==========================================

// ==========================================
// ÁREA DE LINKS EXTERNOS - COLOQUE SEUS LINKS AQUI
// ==========================================
export const externalLinks = {
  // Link para o Formulário de Inscrição (Google Forms)
  inscricao: 'https://forms.google.com/your-form-link-here',
  
  // Link para Doação (Pode ser um link de Pagamento, Whatsapp ou instrução)
  doacao: 'https://wa.me/5579000000000?text=Gostaria%20de%20fazer%20uma%20doacao',
};

// ==========================================
// ÁREA DE IMAGENS
// ==========================================
export const siteImages = {
  // Logo / Escudo (Canto superior esquerdo)
  logo: 'public/escudo_refeito-removebg-preview.png', // Link direto temporário ou base64 seria ideal, mas URL funciona para preview

  // Imagem grande do topo (Hero)
  heroBackground: 'public/carira 2025 (2).jpg',
  
  // Imagem lateral da seção "Sobre Nós"
  aboutSection: 'public/marita 2025.jpg',
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
    image: 'public/inicio.jpg'
  },
  {
    year: '2022',
    title: 'Primeira Fronteira Cruzada',
    location: 'Coronel João Sá (BA)',
    description: 'Nossa música cruzou a primeira fronteira. O nervosismo da estreia deu lugar ao orgulho de levar nossa arte para um novo público fora do estado.',
    image: 'public/cjs 2022.jpg'
  },
  {
    year: '2023',
    title: 'Evolução Constante',
    location: 'Nossa Senhora de Fátima (BA)',
    description: 'Mais fortes e experientes. A alegria de retornar à Bahia e mostrar nossa evolução técnica e visual.',
    image: 'public/fatima 2023 01.jpg'
  },
  {
    year: '2023',
    title: 'Novos Horizontes',
    location: 'Povoado Marita (BA)',
    description: 'Nosso som ecoou pela primeira vez em Marita. A cada aplauso, a certeza de que nosso projeto estava no caminho certo.',
    image: 'public/marita 2023.png'
  },
  {
    year: '2024',
    title: 'Abertura dos Jogos',
    location: 'Aracaju (SE)',
    description: 'Levando o nome de Carira para a capital! Nossa apresentação na Abertura dos Jogos Escolares em Aracaju marcou nossa história.',
    image: 'public/jogos escolares aju.jpg'
  },
  {
    year: '2024',
    title: 'Momento Histórico',
    location: 'Carira (SE)',
    description: 'Apresentação na cerimônia de inauguração da nova prefeitura de Carira, unindo arte, civismo e educação.',
    image: 'public/inaguraçao da prefeitura .jpg'
  },
];