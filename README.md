# Desafio Onfly - n8n com Nó Customizado

# Pré-requisitos
- [Git](https://git-scm.com/)  
- [Docker](https://www.docker.com/)  


# Passo a passo
1. Clonar o repositório:
	- "git clone https://github.com/LeandroSeverinoSilva09/Desafio_onfly_n8n"
	
2. Criar a imagem no Docker com o nó customizado do n8n
	- Navegue até o diretório em que o repositório foi clonado.
	- Dentro desse diretório, execute o comando:
	"docker build --build-arg N8N_VERSION=1.112.4 --tag=node_n8n_random ."

3. Subir a imagem do n8n com o nó customizado + PostgreSQL
	- "docker compose up -d"
4. Acessar o n8n
	- Abra no navegador:
	http://localhost:5678/

5. Encontrar o nó customizado
	- Pesquise pelo nó Random.

6. Executar o nó
	- Defina os valores min e max.
	- Clique em Executar step.

O resultado será um JSON com um número aleatório dentro do intervalo definido.

Observação:
O código-fonte do nó está localizado na pasta custon_node_n8n
