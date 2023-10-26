/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "kpaf1ravdzxeb1s",
    "created": "2023-10-26 14:40:16.477Z",
    "updated": "2023-10-26 14:40:16.477Z",
    "name": "lunetteEnregistre",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gc4spnw2",
        "name": "couleur_branche",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "2piqfq9x",
        "name": "couleur_cadre",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "3vzzkfnq",
        "name": "couleur_verre",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "v8hzsqmo",
        "name": "prix",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT (ROW_NUMBER() OVER()) as id, lunette.couleur_branche, lunette.couleur_cadre, lunette.couleur_verre,lunette.prix\nFROM lunette\nWHERE lunette.enregistre = TRUE"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("kpaf1ravdzxeb1s");

  return dao.deleteCollection(collection);
})
