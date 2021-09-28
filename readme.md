#### poc inicialmente inspirada em https://www.positronx.io/ionic-cordova-geolocation-and-geocoder-tutorial-with-examples/

#### Objetivo:
- Visualizar os dados de GPS em foreground, contudo ao colocar o device em background, os dados de GPS devem continuar informando a atual posição.

##### Preparação inicial do ambiente:
- 1 - npm uninstall -g ionic
- 2 - npm install -g @ionic/cli
- 3 - npm install -g @ionic/cli native-run cordova-res
- 4 - npm install -g cordova
- 5 - npm i @ionic-native/core

##### Ambiente final:
- npm list -g --depth 0

- +-- @angular/cli@11.0.3
- +-- @ionic/cli@6.17.1
- +-- cordova@10.0.0
- +-- cordova-res@0.15.3
- `-- native-run@1.4.1

##### Criação do projeto:
- 6 - ionic start poc-gps blank --type=angular --cordova

##### Adicionar plugin de GPS
- 7  - ionic cordova plugin add cordova-plugin-geolocation
- 8  - npm install @ionic-native/geolocation
- 9  - ionic cordova plugin add cordova-plugin-nativegeocoder
- 10 - npm install @ionic-native/native-geocoder

##### Digite os comandos abaixo para gerar a plataforma android, build e executar no device**
- 11 - ionic cordova platform add android
- 12 - ionic cordova build android
- 13 - ionic cordova run android

##### EXTENSIONS INSTALLED - visual code studio 1.60.2
- Cordova Tools v2.3.0
- ADB Interface for VSCode v0.22.1
- npm v0.3.22

##### conecte o device na porta usb e verifique o status executando o comando no terminal:
- ADB devices -l

caso não encontre seu device listado, execute:
- ADB usb