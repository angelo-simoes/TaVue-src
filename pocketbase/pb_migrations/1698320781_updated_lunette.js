/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rzj27zzbhs1jvfd")

  // remove
  collection.schema.removeField("pvxtmqoq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dl7q6ipz",
    "name": "utilisateur",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rzj27zzbhs1jvfd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pvxtmqoq",
    "name": "utilisateur",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // remove
  collection.schema.removeField("dl7q6ipz")

  return dao.saveCollection(collection)
})
