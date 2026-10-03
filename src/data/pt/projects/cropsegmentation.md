<img src='/images/projects/crop_segmentation.png' />

#### Contextualização

A empresa, uma startup em ascenção desenvolvia soluções para monitoramento de safra e estimativa de riscos a fim de fornecer crédito agrário com segurança. A principal tecnologia consiste em uma plataforma de monitoramento onde são utilizadas tecnologias de IA para analisar imagens de satélite e gerar estimativas de locais de interesse.

#### O problema

O primeiro passo para uma boa análise consiste em uma boa tratativa dos talhões pois isto afeta os processos futuros que consideram tais áreas como referência. Há vários desafios envolvidos, desde desafios computacionais em lidar com grandes imagens e fazer algoritmos otimizados para tais e disponibilizar estes modelos para serem usados a desafios de domínio para saber discernir e interpretar os resultados do ponto de vista de sensoriamento remoto e de negócio.


#### A solução

O projeto consistia em extrair informações da safra de soja apenas por meio de imagens de satélite usando de modelos de deep machine learning. O primeiro passo é uma segmentação semântica através de métodos de deep learning para extrair as diferentes áreas de cultivo (parcelas), com essas informações em mãos foi possível analisar dados históricos de cada área para desenvolvimento de modelos de análise de produtividade e previsão de produção.


#### Resultados

Tudo isso é de grande valor para o negócio e para o cliente e com muito impacto nas decisões, na confiança que a empresa gera/gerou. Em termos computacionais o modelo de segmentação alcançou uma melhoria de 7% comparado aos métodos até então usados, isto é um avanço significativo dado que as melhores tecnologias já eram usadas e a base de dados consistiam em vários gigas de dados, ou seja, uma grande amostra foi utilizada para os testes o que implica na confiança dos resultados.


**Stacks:** Python, TensorFlow, scikit-image, OpenCV, gdal, rasterio, scikit-learn, AWS (s3, ec2).