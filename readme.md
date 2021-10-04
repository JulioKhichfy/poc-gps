
#### Criação do projeto:
- ionic start poc-gps blank --type=angular --cordova

##### Para rodar no celular, execute os passos avaixo:
- ionic cordova plugin add @mauron85/cordova-plugin-background-geolocation
- ionic cordova platform add android
- ionic cordova build android
- ionic cordova run android


###### EXTENSIONS INSTALLED - visual code studio 1.60.2
- Cordova Tools v2.3.0
- ADB Interface for VSCode v0.22.1
- npm v0.3.22

###### conecte o device na porta usb e verifique o status executando o comando no terminal:
- ADB devices -l

caso não encontre seu device listado, execute:
- ADB usb
