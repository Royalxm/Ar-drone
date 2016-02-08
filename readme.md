# ARdrone

Le projet consiste à faire voler un drone de manière autonome dans un environnement qui lui est inconnu. Le drone sera capable d’évoluer dans un environnement en évitant les obstacles. Il devra être capable de créer une cartographie de l’espace parcouru. 
Nous allons utiliser un AR Drone de la marque Parrot, c'est un hélicoptère quadrirotor qui est compatible avec plusieures plateformes et se pilote via une liaison Wi-Fi.


### Version
1.0.1

### Librairie


* [node-ar-drone] 

Nous avons décidé d’utiliser une librairie développer sous Node JS. Celle-ci est open source, compatible avec l’AR Drone 2.0, simple d’utilisation et possédant une documentation riche. Node.js est une plateforme logiciel libre et événementielle en JavaScript orientée vers les applications réseaux. 

* [node.js] 

* [OpenCV]
Sachant que nous pouvons récupérer le flux vidéo des cameras présentes sur l’AR drone nous pourrons l’utiliser pour détecter les obstacles ou pour que le drone puisse suivre des marqueurs et se déplacer en conséquence. Pour le traitement d’image nous avons décidé d’utiliser la librairie OpenCV.

### Installation

Telecharger les sources du projets puis :

```sh
$ node main.js
```

### Todos

 - Ecrire les tests
 - Detection obstacles
 - Algorithme de vole autonome
 - Rajouter une mannete avec Joystick

License
----

GNU GENERAL PUBLIC LICENSE


**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)



   [node.js]: <http://nodejs.org>
   [node-ar-drone]: <https://github.com/felixge/node-ar-drone/>


