/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g43pnnvtm5h7ndj")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id, users.email, users.username, lunette.couleur_branche, lunette.couleur_cadre, lunette.couleur_verre,lunette.prix\nFROM lunette, users\nWHERE lunette.enregistre = TRUE AND lunette.id_user = users.id\nGROUP BY users.id\n"
  }

  // remove
  collection.schema.removeField("jzhuas2q")

  // remove
  collection.schema.removeField("iaifwhyc")

  // remove
  collection.schema.removeField("2ni1y6xk")

  // remove
  collection.schema.removeField("uggkdswe")

  // remove
  collection.schema.removeField("0y2ohko5")

  // remove
  collection.schema.removeField("wnwhvfy9")

  // remove
  collection.schema.removeField("dicuxatx")

  // remove
  collection.schema.removeField("aorbe3jz")

  // remove
  collection.schema.removeField("ob4zvonp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pmqj6ugv",
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
    "id": "srkboz8x",
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
    "id": "dakdxmfw",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5tbi4fof",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "azurgogg",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qgeosirj",
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
    "query": "SELECT (ROW_NUMBER() OVER()) as id, users.email, users.username, lunette.couleur_branche, lunette.couleur_cadre, lunette.couleur_verre, lunette.type_cadre, lunette.id_materiau_monture, lunette.id_materiau_verre, lunette.prix\nFROM lunette, users\nWHERE lunette.enregistre = TRUE AND lunette.id_user = users.id\nGROUP BY users.id\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jzhuas2q",
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
    "id": "iaifwhyc",
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
    "id": "2ni1y6xk",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uggkdswe",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0y2ohko5",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wnwhvfy9",
    "name": "type_cadre",
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
    "id": "dicuxatx",
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
    "id": "aorbe3jz",
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
    "id": "ob4zvonp",
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

  // remove
  collection.schema.removeField("pmqj6ugv")

  // remove
  collection.schema.removeField("srkboz8x")

  // remove
  collection.schema.removeField("dakdxmfw")

  // remove
  collection.schema.removeField("5tbi4fof")

  // remove
  collection.schema.removeField("azurgogg")

  // remove
  collection.schema.removeField("qgeosirj")

  return dao.saveCollection(collection)
})
