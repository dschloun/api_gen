pour générer l'api typescript.
******************************
1) ouvrir un terminal depuis le dossier ressources
2) lancer la cmd: openapi-generator-cli generate -i petstore.yml -g typescript-axios -o ./npm_api_out

essai depuis un tuto
********************
2') 

npx openapi-generator-cli generate -i fpgen-api.yaml -g typescript-angular -o ./npm_api_out --additional-properties fileNaming=kebab-case,withInterfaces=true --generate-alias-as-model

//////////////////////////////////////////////////////

pour générer l'api maven 
(je viens d'ajouter la config pour faire en sorte que les tags soient liés aux controleurs faire a même chose pour npm !!!)
    peut être qu'il n'y a pas besoin en fait :)
************************
1) changer le numéro de version dans le pom
2) faire clean install avec l'ui

