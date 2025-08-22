# Avaliação Prática 02: Do Conceito ao Protótipo Distribuível

**Disciplina:** DevOps para Aplicações Móveis  
**Professor(a):** Airton Lima Marinho 
**Data de Entrega:** 30-08-2025  
**Repositório:** `ava02`

---

## Objetivo

O objetivo desta avaliação é consolidar os conhecimentos adquiridos ao longo da disciplina, guiando o aluno através do ciclo completo de desenvolvimento de uma aplicação móvel: da **ideação** e **implementação** de uma funcionalidade central até a **geração de um artefato de instalação (`.apk`)** pronto para distribuição.

O foco desta avaliação não é a complexidade, mas sim a **entrega de um protótipo funcional e bem documentado**.

## O Desafio: "Do Conceito ao APK"

Cada aluno (ou dupla) deverá conceber a ideia para uma aplicação móvel simples, com foco em resolver um problema ou atender a uma necessidade local de Curionópolis. A partir dessa ideia, deverá ser desenvolvido um protótipo que implemente, no mínimo, a funcionalidade mais importante da aplicação. O projeto culmina na geração de um ficheiro `.apk` que possa ser instalado e testado num dispositivo Android.

**Exemplos de Ideias de Protótipos para a Realidade Local:**
* **Guia Comercial de Curionópolis:** Uma aplicação que funciona como uma lista telefónica digital para o comércio local. O protótipo pode permitir cadastrar e listar estabelecimentos (farmácias, lanchonetes, borracharias) com nome, endereço e um botão que abre o WhatsApp para contato.
* **Horários de Transporte:** Um problema comum no interior é a falta de informação centralizada sobre os horários de vans e autocarros para cidades vizinhas como Parauapebas e Marabá. O protótipo pode simplesmente listar os horários de partida e os pontos de embarque.
* **Cardápio do Dia:** Uma aplicação onde os restaurantes locais e vendedores de "prato feito" (PF) podem anunciar o cardápio do almoço do dia. O protótipo permitiria que um restaurante cadastrasse o seu menu diário.
* **Feira Livre da Semana:** Um guia para a feira da cidade. O protótipo pode permitir que os feirantes se cadastrem e informem os dias que estarão na cidade e os principais produtos frescos disponíveis (açaí, cupuaçu, macaxeira, peixe fresco, farinha d'água).
* **Agenda de Eventos Locais:** Uma aplicação simples para divulgar os eventos que acontecerão na cidade, como festas de aparelhagem, eventos da prefeitura, festas de padroeiro ou jogos de futebol amador.

## Requisitos de Entrega

A entrega da avaliação é composta por três partes obrigatórias, que devem ser submetidas na plataforma SIGAA.

### 1. Repositório no GitHub
-   O repositório deve ser nomeado **exatamente** `ava02`.
-   Deve conter todo o código-fonte desenvolvido, organizado nas pastas do frontend (`app-nome-do-app`) e, se houver, do backend (`api-nome-do-app`).
-   O repositório deve incluir o ficheiro `README.md` descrito no próximo item.

### 2. Documentação (`README.md`)
-   Na raiz do seu repositório `ava02`, deve haver um ficheiro `README.md` bem escrito, explicando o seu projeto. Este ficheiro deve seguir a seguinte estrutura:

    > ---
    > `# Nome do Protótipo`
    >
    > `## 1. Ideia e Objetivo`  
    > *(Descreva em 1 ou 2 parágrafos qual é a ideia da sua aplicação. Que problema ela resolve ou que necessidade ela atende?)*
    >
    > `## 2. Funcionalidades Implementadas`  
    > *(Faça uma lista clara das funcionalidades que o seu protótipo **realmente faz**. Ex: "Adicionar um novo estabelecimento", "Listar todos os horários de vans", etc.)*
    >
    > `## 3. Stack de Tecnologias`  
    > *(Liste as principais tecnologias que você utilizou. Ex: React Native, Expo, Node.js, Express, Knex, SQLite, Docker, Localtunnel, etc.)*
    >
    > `## 4. Como Executar o Ambiente de Desenvolvimento (Opcional)`  
    > *(Se o seu projeto tiver um backend, inclua aqui as instruções para o professor poder rodar o seu ambiente completo, similar ao que fizemos nas aulas).*
    > ---

### 3. Protótipo (`.apk`)
-   O ficheiro `.apk` do seu aplicativo, gerado através do **Expo EAS Build**.
-   O APK deve ser instalável e funcional num dispositivo Android.
-   A funcionalidade do APK deve ser consistente com o que foi descrito no `README.md`.

## Plataforma de Submissão

A entrega será realizada via **SIGAA**. No espaço da tarefa `ava02`, você deverá submeter **dois itens**:

1.  O ficheiro `.apk` do seu protótipo (anexado diretamente).
2.  O link **público** para o seu repositório `ava02` no GitHub.

## Critérios de Avaliação

Critérios | Detalhes

**Protótipo Funcional (`.apk`)** | O APK instala e executa sem erros? As funcionalidades descritas estão a funcionar corretamente?                       
**Qualidade do Código e Repositório** | O código está bem organizado, legível e segue as boas práticas? O repositório está limpo e bem estruturado? 
**Documentação (`README.md`)** | A ideia e as funcionalidades do protótipo estão descritas de forma clara e concisa?                               
**Bônus** | Criatividade e relevância da ideia para o contexto local, e qualidade da interface do utilizador (UI/UX).      
