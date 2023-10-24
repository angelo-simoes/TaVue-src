/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "kkhff7o1kpofjve",
    "created": "2023-10-24 10:51:13.232Z",
    "updated": "2023-10-24 10:51:13.232Z",
    "name": "materiau",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "lf9yly8b",
        "name": "libelle",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("kkhff7o1kpofjve");

  return dao.deleteCollection(collection);
})
