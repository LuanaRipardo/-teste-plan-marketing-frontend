# Teste Plan Marketing - Frontend

Este é o repositório do frontend do projeto Teste Grupo Plan Marketing.
Requisitos

    Docker e Docker Compose

# Configuração


1. Clone este repositório para o seu ambiente local.

```
git clone https://github.com/LuanaRipardo/teste-plan-marketing-frontend.git
```

2. Navegue até o diretório do projeto.

```
cd teste-plan-marketing-frontend
```
3. Execute o comando a seguir para construir a imagem Docker do frontend.

```
docker build -t plan-marketing-frontend .
```
4. Execute o comando a seguir para iniciar o contêiner Docker do frontend.

```
docker run -p 8081:8081 plan-marketing-frontend
```

```
http://localhost:8081
```