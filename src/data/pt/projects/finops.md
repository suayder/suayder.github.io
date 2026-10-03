<img src='/images/projects/finops.png' />

#### Contextualização

O cliente é do ramo de operações financeiras, basicamente eles intermediam as operações financeiras oferencendo vários facilitadores. A empresa em crescimento estava trabalhando na atualização dos sistemas então utilizados pois os mesmo geravam muitos problemas que acarretavam na falta de confiança da relação cliente-empresa.

#### O problema

Todas as operações estavam armazenadas e funcionavam em um ambiente com o banco de dados MongoDB, o qual continha dados muito bagunçados no sentido de que no decorrer do tempo houveram atualizações no schema dos dados então foi necessário refazer toda a estrutura de armazenamento. Então desafios de transformação de dados e garantir a não perda destes dados em nenhum momento e a rastreabilidade dos mesmos, bem como suportar a carga diária de transações.

#### A solução

Foi feito toda a migração de dados utilizando ambiente AWS o qual nos permitiu o uso de ferramentas como spark para garantir a escalabilidade de processamento de transações.

#### Resultados

O novo sistema, totalmente utilizando os serviços cloud é capaz de aguentar altas demandas de processamento em batch e garantido a confiança na tranção.

**Stacks:** Python, PySpark, AWS (s3, ec2, redshift, glue).