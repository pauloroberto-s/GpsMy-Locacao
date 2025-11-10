🚗 GPS My — Locação de Rastreadores Veiculares

Projeto desenvolvido por Paulo Roberto Sousa Silva, com o objetivo de criar uma landing page moderna e responsiva para o serviço de locação de dispositivos de rastreamento veicular GPS My.

A aplicação foi construída com React + Vite + TailwindCSS, garantindo alta performance, facilidade de manutenção e compatibilidade com qualquer dispositivo.

📁 Descrição do Projeto

O sistema apresenta as soluções da GPS My para rastreamento e monitoramento veicular, destacando:

Instalação simples (modelo OBD II “Plug & Play”).

Rastreamento em tempo real via aplicativo.

Contratação sem fidelidade ou instalação profissional.

Interface moderna, leve e rápida.

🧩 Tecnologias Utilizadas

⚛️ React 18 – Interface dinâmica e modular.
⚡ Vite – Ambiente rápido de desenvolvimento.
🎨 TailwindCSS – Framework para design responsivo.
💬 TypeScript – Tipagem estática e segurança no código.
🧰 Node.js + npm – Gerenciamento de dependências e build local.
💻 Como Rodar o Projeto no VS Code

Siga os passos abaixo para executar o projeto localmente 👇

1️⃣ Instalar o Node.js

Baixe e instale o Node LTS (versão estável) no site oficial:
👉 https://nodejs.org

Após instalar, abra o terminal e confirme:

node -v
npm -v

Isso deve mostrar os números das versões (ex: v20.x.x).

2️⃣ Abrir o projeto no VS Code

Extraia a pasta do projeto (se estiver compactada).

Clique com o botão direito sobre a pasta GPS MY - LOCACAO e selecione
“Abrir com o Visual Studio Code”.

3️⃣ Instalar as dependências

No terminal integrado do VS Code (Ctrl + `):

npm install


Isso vai baixar todas as bibliotecas necessárias para rodar o projeto.

4️⃣ Executar o servidor de desenvolvimento

Depois da instalação, execute:

npm run dev

Aparecerá algo como:

  VITE v5.x  ready in 500ms
  ➜  Local:   http://localhost:5173/

Clique no link (ou segure Ctrl e clique) para abrir o projeto no navegador.

5️⃣ Encerrar o servidor

Quando quiser parar a execução, volte ao terminal e pressione:

Ctrl + C

🏗️ Gerar Versão de Produção (opcional)

Se quiser gerar os arquivos prontos para publicar (HTML, CSS e JS otimizados), use:

npm run build

Os arquivos finais serão criados na pasta:

/dist


🧱 Estrutura de Pastas
GPS MY - LOCACAO/
├── node_modules/
├── src/
│   ├── assets/           → imagens e ícones
│   ├── components/       → componentes reutilizáveis
│   ├── pages/            → seções principais da landing page
│   ├── App.tsx           → estrutura base da aplicação
│   └── main.tsx          → ponto de entrada
├── index.html            → estrutura HTML principal
├── tailwind.config.ts    → configuração do TailwindCSS
├── vite.config.ts        → configuração do Vite
├── tsconfig.json         → configuração do TypeScript
└── README.md