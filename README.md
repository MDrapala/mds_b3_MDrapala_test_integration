# Préambule

Il s’agit d’une petite API avec un GET qui permet de récuperer une liste de couleur et de faire un POST sur de nouvelles valeurs : route, /colors.
Pour executer l’API : ```npm start```

Pour executer les tests : ```npm test```

# Préconfig

Récupérer le code source de l’API
Git url ​: https://github.com/?/tests_integration
Dans un dossier test à la racine ajouter les tests avec `Chai(HTTP)`. 
Vous pouvez utiliser *should* et *expect*.

Voici les specs pour réaliser les tests d'intégration :
  1. Récupérer la liste de couleur (​should return all colors​)
    a. Verifierle status 200
    b. Vérifier qu’il s’agit de json
    c. Vérifier que le body est bien un objet
    d. Vérifier que le résultat du body est bien un array
    e. Vérifier que le contenu retourné est correct
  2. Récupérer un path invalide (​should return Bad Request​) a. Verifierlestatus404
  3. Poster une nouvelle couleur (​should add new color​)
    a. Verifier le status 201
    b. Vérifier qu’il s’agit de json
    c. Vérifier que le body est bien un objet
    d. Vérifier que le résultat du body est bien un array
    e. Vérifier que le contenu inclut bien la nouvelle valeur ajoutée
  4. Récupérer la nouvelle liste de couleur (​should return new color list Request​)
      a. Verifier le status 200
      b. Vérifier qu’ils’agit de json
      c. Vérifier que le body est bien un objet
      d. Vérifier que le résultat du body est bien un array
      e. Vérifier que le contenu retourné est correct

# Installation && Exécution des tests

```git clone https://github.com/MDrapala/mds_b3_MDrapala_test_integration.git```

```cd mds_b3_MDrapala_test_unit```

```npm i or npm install```

```npm test```
