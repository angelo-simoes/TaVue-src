/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vqrgde9rm7he9s3")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id, users.email, users.username, lunette.couleur_branche, lunette.couleur_cadre, lunette.couleur_verre, lunette.type_cadre, lunette.id_materiau_monture, lunette.id_materiau_verre, lunette.prix\nFROM lunette, users\nWHERE lunette.commande = TRUE AND lunette.id_user = users.id\nGROUP BY users.id\n"
  }

  // remove
  collection.schema.removeField("ycq9aqey")

  // remove
  collection.schema.removeField("apoxf0nn")

  // remove
  collection.schema.removeField("iikajlby")

  // remove
  collection.schema.removeField("yizumtvk")

  // remove
  collection.schema.removeField("zllasydl")

  // remove
  collection.schema.removeField("a026a4mf")

  // remove
  collection.schema.removeField("dqco9pjl")

  // remove
  collection.schema.removeField("buoo3mbs")

  // remove
  collection.schema.removeField("sn9qjp75")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2vwvfyfz",
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
    "id": "6zipvkag",
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
    "id": "adwamvlj",
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
    "id": "4vt1szlw",
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
    "id": "ilgmtojy",
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
    "id": "l3gqlm1i",
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
    "id": "3sf90bo7",
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
    "id": "w3ykenee",
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
    "id": "6buumxub",
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
  const collection = dao.findCollectionByNameOrId("vqrgde9rm7he9s3")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id,lunette.couleur_branche, lunette.couleur_cadre, lunette.couleur_verre, lunette.type_cadre, lunette.id_materiau_monture, lunette.id_materiau_verre, lunette.prix, users.email, users.username\nFROM lunette, users\nWHERE lunette.commande = TRUE AND lunette.id_user = users.id\nGROUP BY users.id\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ycq9aqey",
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
    "id": "apoxf0nn",
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
    "id": "iikajlby",
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
    "id": "yizumtvk",
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
    "id": "zllasydl",
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
    "id": "a026a4mf",
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
    "id": "dqco9pjl",
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
    "id": "buoo3mbs",
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
    "id": "sn9qjp75",
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
  collection.schema.removeField("2vwvfyfz")

  // remove
  collection.schema.removeField("6zipvkag")

  // remove
  collection.schema.removeField("adwamvlj")

  // remove
  collection.schema.removeField("4vt1szlw")

  // remove
  collection.schema.removeField("ilgmtojy")

  // remove
  collection.schema.removeField("l3gqlm1i")

  // remove
  collection.schema.removeField("3sf90bo7")

  // remove
  collection.schema.removeField("w3ykenee")

  // remove
  collection.schema.removeField("6buumxub")

  return dao.saveCollection(collection)
})
