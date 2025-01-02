# Para rodar a aplicação

```shell
    npx expo start
   ```

# Para criar um novo projeto

```shell
npx create-expo-app@latest NOMEPROJETO
```

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

# Pendencias

1. fazer navegacao : ao clicar no botão do dia de estudo abrir uma nova tela
com as informações de leitura do dia

2. nova tela com 2 botoes de confirmação
  - um para o texto da biblia
  - um para o texto do espirito de profecia
  - na tela nova deve haver um botão de retornar também

  caso um botao da tela seja clicado, o campo vai mudar para o Texto "Lido!" e ficar com background verde
 

 - ao clicar num botao um valor correspondente ao botao pressionado vai para o localstorage
 Ex : ao clicar no botao

 Se o dia que estou lendo é 25/JANEIRO
 E cliquei  no botao "Leitura Efetivada?" da Seção de leitura da Bíblia
 O localStorage vai fazer o seguinte:

 if (getItem("JAN_25") == null) {
    setItem("JAN_25", "b")  -- indicando que a biblia foi lida
 } 
 else{
    let anterior = getItem("JAN_25"); 
    setItem("JAN_25", anterior + ";b")
 }

 o botao "Leitura Efetivada?" fica verde com o texto "Lido!" desabilitado

 Se clicar no botão "Leitura Efetivada?" da Seção leitura do Espírito de Profecia
 O localStorage vai fazer o seguinte:

 if (getItem("JAN_25") == null) {
    setItem("JAN_25", "b")  -- indicando que a biblia foi lida
 } 
 else{
    let anterior = getItem("JAN_25"); 
    setItem("JAN_25", anterior + ";b")
 }


3. Na volta pra tela inicial
Se o dia vai testar o estado do localstorage do dia

if (getItem("JAN_25") == null) entao botao continua vermelho, indicando que nada foi lido
if (getItem("JAN_25") != null e getItem("JAN_25").length > 1) entao botao muda a cor pra verde
else botao muda a cor para amarelo, indicando ao leitor que ainda existem pendencias de leitura
