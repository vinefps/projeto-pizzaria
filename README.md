# Pizzaria Project 
Descrição
Este projeto é uma aplicação simples que simula uma pizzaria online. Ele permite que os usuários visualizem diferentes tipos de pizzas, vejam detalhes sobre cada uma delas e adicionem quantidades desejadas ao carrinho de compras.

# Funcionalidades Principais
Listagem de Pizzas: As pizzas são carregadas dinamicamente a partir de um arquivo JSON (assumindo a existência de uma variável pizzaJson).
Modal de Detalhes: Ao clicar em uma pizza ou no botão "Mais" (representado como .more), um modal é exibido com detalhes da pizza selecionada.
Controle de Quantidade: Dentro do modal, os usuários podem ajustar a quantidade desejada de pizzas utilizando botões "+" e "-".
Adição ao Carrinho: Após definir a quantidade desejada, os usuários podem adicionar a pizza ao carrinho. Se a pizza já estiver no carrinho, a quantidade é atualizada; caso contrário, uma nova entrada é adicionada ao carrinho.

# Estrutura do Código
Variáveis Globais
pizzaTotalArea: Seleciona a área onde todas as pizzas serão renderizadas.
pizzaEachArea: Seleciona o modelo de pizza individual.
modalArea: Área do modal que será exibido ao clicar em uma pizza.
closeModal: Botão para fechar o modal.
key: Chave para identificar a pizza selecionada.
qtItem: Quantidade de pizzas selecionadas.
carrinhoLista: Lista que armazena pizzas adicionadas ao carrinho.

# Funcionalidades
Renderização de Pizzas: Utiliza o método map para iterar sobre um array de pizzas (pizzaJson) e renderizar cada pizza na área designada.
Modal: Mostra os detalhes da pizza quando clicado em "Mais" ou na imagem da pizza.
Controle de Quantidade: Permite aos usuários aumentar ou diminuir a quantidade de pizzas dentro do modal.
Adição ao Carrinho: Atualiza a lista carrinhoLista com as pizzas selecionadas e suas respectivas quantidades.

# Instruções de Uso
Certifique-se de ter um arquivo pizzaJson com informações sobre as pizzas, incluindo img, name, price, e description.
Abra o arquivo HTML no seu navegador.
Navegue pela lista de pizzas e clique em "Mais" ou na imagem para visualizar os detalhes da pizza.
Dentro do modal, ajuste a quantidade desejada utilizando os botões "+" e "-".
Clique no botão "Adicionar ao Carrinho" para adicionar a pizza ao seu carrinho.

# Observações
Este é um projeto simples para demonstrar algumas funcionalidades básicas de uma pizzaria online. Para implementações mais complexas ou recursos adicionais, recomenda-se a expansão e refatoração do código conforme necessário.
