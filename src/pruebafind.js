/*
BÚSQUEDAS FIND PARA ENONTRAR INFORMACIÓN
*/
db.inventory.find({status: "D"})

db.inventory.find({status: { $eq: "D" } })

db.inventory.find( { status: { $in: [ "A", "D" ] } } )

db.inventory.find( { $or: [ { status: {$eq: "A" } }, { status: {$eq: "D"} } ] } )

db.inventory.find( {
    status: "A",
    $or: [ { qty: { $lt: 30 } }, { item: /^p/ } ]
} );
/*
Número de documentos que cumple la condición
*/
db.inventory.find( { status: { $in: [ "A", "D" ] } } ).count()

db.inventory.find({}).count()

db.inventory.find( { $or: [ { status: {$eq: "A" } }, { status: {$eq: "D"} } ] } ).count()

/*
No se puede usar el mismo campo en un and implicito
*/
db.inventory.find({
    $and: [{qty: {$lt: 55}}, {qty: {$gt: 45}}]
})