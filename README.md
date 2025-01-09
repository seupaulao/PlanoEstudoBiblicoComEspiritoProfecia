# Para rodar a aplicação

```shell
    npx expo start
   ```

# Para criar um novo projeto

```shell
npx create-expo-app@latest NOMEPROJETO
```

# Criar o projeto escolhendo se deseja typescript ou javascript

```shell
npx create-expo-app@latest --template
```

# instalar rotas e navegação

```shell
npx expo install react-native-screens react-native-safe-area-contex
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

1. Em _layout
   - tentar queimar todos as screens empurradas pra pilha
ok   - esconder o backbutton

2. aplicativo MUUUITO grande = 69.2MB
ok 3. ficou muito feio os botoes
ok - tem q usar width, height
ok 4. melhorado distanciamento, mesmo usando flexbox, visualmente ruim
ok   - mais queria mais controle
5. no detalhar é muito tosco, todos os simuladores são diferentes:
   - web
   - android emulado
   - android fisico
   - expo app   -   essa deve ser a escolha pra testar
6. descobrir onde colocar a arte gerada
   - icone
   - imagens
   - assets   

# build

## login
eas login

caro - só posso gerar 30 builds/mes

porém é simples e o desenvolvimento é leve, apenas uns 300MB comparado 1.1GB sem framework

## descobrir quem está logado
eas whoami

## configurar o projeto
eas build:configure

## build plataforma android
eas build --platform android

## build ios e android
eas build --platform all

## build para android devices e emuladores

para gerar um apk modifique o `eas.json`

* developmentClient to true (default)
* distribution to internal
* android.buildType to apk
* android.gradleCommand to :app:assembleRelease, :app:assembleDebug or any other gradle command that produces .apk

```shell
eas build -p android --profile preview
```

## rodando a ultima build no emulador

```shell
eas build:run -p android --latest
```

## rodando no dispositivo

2 formas:

- ou aguarda o `eas build` copia o apk para o dispositivo e instala

- ou usa o [adb](https://developer.android.com/studio/command-line/adb)
