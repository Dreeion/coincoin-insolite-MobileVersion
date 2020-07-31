## CoinCoin Insolite

Related repo: https://github.com/Dreeion/coincoin-insolite-web

---

The "CoinCoin Insolite" application is a student project aiming to use and develop our skills in a two-weeks-long project.

The objective is to develop an application that allows users to see and visit unusual places around them. 
It is also required to design and develop a website to showcase the application.

------

L'application "CoinCoin Insolite" est un projet d'étudiants ayant pour objectif d'utiliser et de développer nos compétences dans un projet d'une durée de deux semaines.

L'objectif est de développer une application permettant aux utilisateurs de voir et de visiter des lieux insolites autour d'eux.
Il est également demandé de designer et de développer un site web permettant de mettre en avant l'application.

---

**Maintainers:**

- @Amestyale - Mobile Lead Dev
- @camillenaulet3 - Web Dev
- @Dreeion - Mobile Dev
- @maeldebon - Project Lead
- @Theia01 - Web Lead Dev

All information related to the advancement can be found in the [progress.md](./progress.md) document.

**Branches:**

- [Mobile development](https://github.com/Dreeion/coincoin-insolite-mobile)
- [Web development](https://github.com/Dreeion/coincoin-insolite-web)

---

**Setup the project**

In order to run the project, you will need to run a few commands.

First, create and setup the `android` and `www` folders by using the following commands:
```sh
ionic cordova platform add android
mkdir www
```

Then, prepare the build by typing this command:
```sh 
ionic cordova prepare android
```

Once this is done, simply run the following command to build your APK:
```sh 
ionic cordova build android
```

Finally, run this command to run the app:
```sh 
ionic cordova run android -l -s -c
```
