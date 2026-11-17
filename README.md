# Portfólio · Clara
## abclara.github.io

Meu portfólio pessoal, feito com HTML, CSS e JavaScript puros, sem frameworks e sem etapa de build.

**Acesse:** [abclara.github.io](https://abclara.github.io)

## O que tem no site

- **Seções:** Sobre, Skills, Trajetória, Projetos e Contato.
- **Três idiomas:** português, inglês e espanhol, com troca instantânea pelo menu.
- **Trajetória guiada pelo scroll:** no desktop, a seção fica fixa na tela e a linha do tempo avança conforme a rolagem da página. A página só segue para a próxima seção depois do último item (e, ao subir, só volta depois do primeiro). No mobile, ela aparece em fluxo normal.
- **Projetos com filtros por categoria**, com links para o Behance e o GitHub.
- **Formulário de contato** que abre o aplicativo de e-mail com a mensagem preenchida.
- **Layout responsivo** e animações de entrada que respeitam `prefers-reduced-motion`.

## Estrutura do repositório

```
.
├── .github/workflows/static.yml   # Deploy automático no GitHub Pages
├── front/
│   ├── index.html                 # Estrutura e conteúdo da página
│   ├── styles.css                 # Estilos
│   ├── home.js                    # Traduções, filtros, menu e animação da trajetória
│   └── img/                       # Logos em SVG
└── README.md
```

O código do site fica isolado em `front/` para deixar o repositório organizado e pronto para receber outras partes (como um `back/`) no futuro.

## Rodando localmente

Não é preciso instalar nada. Abra o `front/index.html` no navegador ou, se preferir um servidor local:

```bash
cd front
python3 -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## Deploy

O site é publicado pelo **GitHub Actions**. A cada push na branch `main`, o workflow `static.yml` envia apenas a pasta `front/` para o GitHub Pages.

Configuração necessária no repositório: **Settings → Pages → Source: GitHub Actions**.

## Tecnologias

- HTML5, CSS3 e JavaScript (ES6+)
- Fontes: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) e [DM Sans](https://fonts.google.com/specimen/DM+Sans), via Google Fonts
- GitHub Pages + GitHub Actions

## Contato

- [LinkedIn](https://www.linkedin.com/in/abclara)
- [Behance](https://www.behance.net/abclara)
- [GitHub](https://github.com/abclara)