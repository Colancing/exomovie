Exo suivant les slides :
http://lauterry.github.io/slides-handson-angular/#/11/15

Pour faire fonctionner le json il faut passer par un serveur :
Dans le terminal, installer json server
Voir la doc ici :
https://github.com/typicode/json-server

Pour lancer le serveur :
$ json-server --watch movies.json
Pour observer ce qui se trouve sur le serveur :
 http://localhost:3000/movies
 et pour voir un des films
 http://localhost:3000/movies/:id (attention pas le $index)

 Pour faire des tests, utiliser l'outil de phpstorm : testrestful web service
