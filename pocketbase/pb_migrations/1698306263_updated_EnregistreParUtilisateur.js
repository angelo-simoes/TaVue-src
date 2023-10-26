/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g43pnnvtm5h7ndj")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id, users.email, users.username, lunette.couleur_branche, lunette.couleur_cadre, lunette.couleur_verre, lunette.type_cadre, lunette.id_materiau_monture, lunette.id_materiau_verre, lunette.prix\nFROM lunette, users\nWHERE lunette.enregistre = TRUE AND lunette.id_user = users.id\nGROUP BY users.id\n"
  }

  // remove
  collection.schema.removeField("mma1iuma")

  // remove
  collection.schema.removeField("mcodzhlt")

  // remove
  collection.schema.removeField("onucmoxv")

  // remove
  collection.schema.removeField("brnxheko")

  // remove
  collection.schema.removeField("1xyhch46")

  // remove
  collection.schema.removeField("fjhi6fyg")

  // remove
  collection.schema.removeField("cf1y1t9b")

  // remove
  collection.schema.removeField("rh4d1oko")

  // remove
  collection.schema.removeField("d2zy3ndo")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "agjgoqci",
    "name": "email",
    "type": "email",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rthx67u7",
    "name": "username",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mgm72wwu",
    "name": "couleur_branche",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "o1ayhugj",
    "name": "couleur_cadre",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jgdczo0j",
    "name": "couleur_verre",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "o3o7umpr",
    "name": "type_cadre",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2sln8vko",
    "name": "id_materiau_monture",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "kkhff7o1kpofjve",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xzjwad7r",
    "name": "id_materiau_verre",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "kkhff7o1kpofjve",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "e4lm5gyg",
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g43pnnvtm5h7ndj")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id,lunette.couleur_branche, lunette.couleur_cadre, lunette.couleur_verre, lunette.type_cadre, lunette.id_materiau_monture, lunette.id_materiau_verre, lunette.prix, users.email, users.username\nFROM lunette, users\nWHERE lunette.enregistre = TRUE AND lunette.id_user = users.id\nGROUP BY users.id\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mma1iuma",
    "name": "couleur_branche",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mcodzhlt",
    "name": "couleur_cadre",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "onucmoxv",
    "name": "couleur_verre",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "brnxheko",
    "name": "type_cadre",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1xyhch46",
    "name": "id_materiau_monture",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "kkhff7o1kpofjve",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fjhi6fyg",
    "name": "id_materiau_verre",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "kkhff7o1kpofjve",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cf1y1t9b",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rh4d1oko",
    "name": "email",
    "type": "email",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "d2zy3ndo",
    "name": "username",
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

  // remove
  collection.schema.removeField("agjgoqci")

  // remove
  collection.schema.removeField("rthx67u7")

  // remove
  collection.schema.removeField("mgm72wwu")

  // remove
  collection.schema.removeField("o1ayhugj")

  // remove
  collection.schema.removeField("jgdczo0j")

  // remove
  collection.schema.removeField("o3o7umpr")

  // remove
  collection.schema.removeField("2sln8vko")

  // remove
  collection.schema.removeField("xzjwad7r")

  // remove
  collection.schema.removeField("e4lm5gyg")

  return dao.saveCollection(collection)
})
