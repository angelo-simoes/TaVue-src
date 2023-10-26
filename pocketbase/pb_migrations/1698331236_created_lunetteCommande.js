/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "jgnct9kko2b5fr1",
    "created": "2023-10-26 14:40:36.704Z",
    "updated": "2023-10-26 14:40:36.704Z",
    "name": "lunetteCommande",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "bxzbhjve",
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
        "id": "dg7c0evy",
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
        "id": "lrgzyn6a",
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
        "id": "wbr6skx4",
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
      "query": "SELECT (ROW_NUMBER() OVER()) as id, lunette.couleur_branche, lunette.couleur_cadre, lunette.couleur_verre,lunette.prix\nFROM lunette\nWHERE lunette.commande = TRUE"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("jgnct9kko2b5fr1");

  return dao.deleteCollection(collection);
})
