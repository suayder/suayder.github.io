<img src='/images/projects/ball-tracking.png' />

#### Contextualização

Isportistics é uma empresa focada em interpretação de vídeo e marcação de conteúdo esportivo por meio de IA.
Uma das soluções consiste na cobertura do jogo através de uma câmera autônoma, transformando de uma visão panorâmica em uma visão broadcast dos jogos (<a href="https://vimeo.com/640142052">veja aqui um exemplo</a>).

#### O problema

Fazer o tracking e detecção de ponto focal é bastante desafiador pois as soluções tinham o desafio de serem agnosticas [tanto quanto se consiga] a tipos de esportes, cada esporte tem sua particularidade e o cenário real era muito diferente do cenário de treinamento. Já existia um produto rodando porém muito limitado a poucos esportes e limitado a certos cenários.

#### A solução

A ideia da solução foca em esportes que contém bola, pois representam uma parcela significativa dos clientes da empresa. A hipótese é que a bola é o ponto de concentração dos jogadores, então o jogo ocorre ao entorno dela.

A solução desenvolvida adiciona redes neurais de detecção de objetos em tempo real combinadas com algoritmos de análise de movimento e espaço. Em resumo, um modelo de aprendizado de máquina para visão computacional foi treinado para detecção de objetos, uso de métodos de fluxo óptico e análise de movimento para otimizar o ponto focal de interesse da cena, criando assim uma exibição de transmissão com foco no local certo do jogo.

#### Resultados

O aumento da qualidade e precisão na transmissão de jogos fazendo o trabalho semelhante ao do camera man. 3x mais esportes puderam ser cobertos com o mesmo core de solução possibilitando a empresa oferecer o produto para mais clientes e gerando valor agregado ao produto devido a nova solução.

**Stacks:** Python, PyTorch, OpenCV, AWS (s3, ec2), GCP (computer engine ).