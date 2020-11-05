/*
BÚSQUEDAS FIND PARA ENONTRAR INFORMACIÓN
*/
db.inventory.find({status: "D"})

db.inventory.find({status: {$eq: "D" }})

db.inventory.find({status: {$in: ["A", "D"]}})

db.inventory.find({$or: [{status: {$eq: "A"}}, {status: {$eq: "D"}}]});
/*
Número de documentos que cumple la condición
Poniedo .count al final en vez de una palabra nos define una cantidad
*/
db.inventory.find( { status: { $in: [ "A", "D" ] } } ).count()

db.inventory.find({}).count()

db.inventory.find({$or: [{status: {$eq: "A" }}, {status: {$eq: "D"}}]}).count()

/*
No se puede usar el mismo campo en un and implicito
*/
db.inventory.find({$and: [{qty: {$lt: 55}}, {qty: {$gt: 45}}]});
/*
Busca el estatus A ó que qly sea menor que 30
*/
db.inventory.find({status: "A",$or: [{qty: {$lt: 30}}]})              

/*
Nos devuelve un qty que exista y sea 100
*/
db.inventory.find({qty: {$exists: true, $gt: 50}})

/*
Nos devuelve un qty que no sea 100
*/
db.inventory.find({qty: {$ne: 100}}).pretty()

/*
 $and implícito
*/
db.inventory.find( {$and: [{ $or: [ { qty: { $lt : 10 } }, { qty : { $gt: 50 } } ] },{ $or: [ { status: "A" }] }]} );