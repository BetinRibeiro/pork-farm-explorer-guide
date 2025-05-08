
# Instruções para Exportar o Código do SuínoTech para GitHub

## Conexão com GitHub

1. **Verificar a conexão atual**:
   - No topo da interface do Lovable, clique no seu nome de usuário ou perfil
   - Verifique se a opção "GitHub" está conectada

2. **Conectar ao GitHub (se não estiver)**:
   - Clique em "Conectar GitHub" ou similar
   - Autorize a aplicação Lovable no GitHub quando solicitado
   - Selecione o acesso aos repositórios necessários

3. **Sincronizar o projeto**:
   - Após conectar ao GitHub, volte ao projeto
   - Procure por um botão "Sync" ou "Export to GitHub" (geralmente no canto superior direito)
   - Siga as instruções para criar um novo repositório ou sincronizar com um existente

## Alternativa: Exportação Manual

Se a sincronização automática não funcionar, você pode exportar o código manualmente:

1. **Ative o Dev Mode**:
   - Na interface do Lovable, ative o "Dev Mode" (geralmente um interruptor no canto superior)
   - Isso mostrará o código-fonte do projeto

2. **Copie os arquivos**:
   - Navegue pelos arquivos no Dev Mode
   - Copie o conteúdo de cada arquivo importante
   - Crie os mesmos arquivos no seu computador local ou diretamente no GitHub

3. **Crie um repositório GitHub manualmente**:
   - Crie um novo repositório no GitHub
   - Faça upload dos arquivos copiados
   - Certifique-se de incluir o `package.json` e outros arquivos de configuração

## Solicitação de Suporte

Se você ainda tiver problemas para acessar o código:
1. Entre em contato com o suporte do Lovable através do Discord ou e-mail
2. Forneça o URL do seu projeto publicado (https://pork-farm-explorer-guide.lovable.app/)
3. Explique que você conectou sua conta GitHub mas não pode ver o código no seu repositório

## Execução Local

Após obter o código:

```bash
# Clonar o repositório (se estiver no GitHub)
git clone https://github.com/seu-usuario/nome-do-repositorio.git

# Entrar na pasta do projeto
cd nome-do-repositorio

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

O projeto estará disponível em http://localhost:8080
