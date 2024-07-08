pour générer l'api typescript.
******************************
1) ouvrir un terminal depuis le dossier ressources
2) lancer la cmd: openapi-generator-cli generate -i petstore.yml -g typescript-axios -o ./npm_api_out

essai depuis un tuto
********************
2')  npx openapi-generator-cli generate -i fpgen_api.yaml -g typescript-angular -o ./npm_api_out --additional-properties fileNaming=kebab-case,withInterfaces=t
   rue --generate-alias-as-model

//////////////////////////////////////////////////////

pour générer l'api maven
************************
1) changer le numéro de version dans le pom
2) faire clean install avec l'ui

