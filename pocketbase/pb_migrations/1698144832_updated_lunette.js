/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rzj27zzbhs1jvfd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rxwn880s",
    "name": "id_user",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rzj27zzbhs1jvfd")

  // remove
  collection.schema.removeField("rxwn880s")

  return dao.saveCollection(collection)
})
