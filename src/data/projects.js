// TODO Add a couple lines about each project
const data = [
  {
    id: 'balltracking',
    title: 'Câmera automática/Ball Tracking',
    subtitle: 'Computer vision | Sport analytics',
    image: '/images/projects/ball-tracking.png',
    link: 'https://vimeo.com/640142052',
    date: '2023-01-01',
    desc:
      'A solução desenvolvida soma a tecnologia de detecção de objetos em tempo real combinadas a tenologias de análise de movimento e espaço '
      + 'a fim de automatizar o processamento de vídeos esportivos para melhorar a experiência do telespectador.',
  },
  {
    id: 'customersegmentation',
    title: 'Segmentação de clientes',
    subtitle: 'Data Science | Business inteligence',
    image: 'images/projects/customersegmentation.png',
    link: '',
    date: '2022-09-01',
    desc:
      'Segmentação de clientes utilizando dados de vendas (CRM) '
      + 'a fim de prever demanda a partir da jornada do cliente.',
  },
  {
    id: 'finops',
    title: 'FinOps ETL',
    subtitle: 'Engenharia de dados para operações financeiras',
    link: '',
    image: '/images/projects/finops.png',
    date: '2021-12-01',
    desc:
      'Um pipeline completo de engenharia de dados para operações financeiras, garantindo confiança e segurança nas transações. '
      + 'Como resultado foi feita a migração de todo o sistema transacional que era on-promisses no mongodb e após se tornou '
      + 'um sistema de transação armazenado e gerenciado em cloud (AWS)',
  },
  {
    id: 'cropsegmentation',
    title: 'Segmentação de talhões',
    subtitle: 'Computer Vision | Segmentação de imagens de sattélite',
    link: '',
    image: '/images/projects/crop_segmentation.png',
    date: '2020-09-20',
    desc:
      'Faz parte de uma solução de monitoramento a baixo custo'
      + 'onde o objetivo foi melhorar a segmentação de talhões a partir de imagens de satélite para um monitoramento mais detalhado de plantações. '
      + 'Foi entregue um modelo de deep learning treinado alcançando uma acurácia total de 85%, 7% de melhoria comparado ao processo anterior.',
  },
];

export default data;
