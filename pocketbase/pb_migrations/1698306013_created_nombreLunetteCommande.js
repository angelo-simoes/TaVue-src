/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "fiq3tma9rxhrobg",
    "created": "2023-10-26 07:40:13.962Z",
    "updated": "2023-10-26 07:40:13.962Z",
    "name": "nombreLunetteCommande",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "o4awtbtk",
        "name": "nombre_lunette_commande",
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
      "query": "SELECT (ROW_NUMBER() OVER()) as id, COUNT(lunette.id) as nombre_lunette_commande\nFROM lunette \nWHERE lunette.commande = FALSE\n"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("fiq3tma9rxhrobg");

  return dao.deleteCollection(collection);
})
