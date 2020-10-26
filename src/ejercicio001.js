/* 
Insertar datos
*/
db.inventory.insertMany([
    { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
    { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "A" },
    { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
    { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
    { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" }
 ]);
 /*
 CAMBIAR LA INFORMACÍON INICIAL
 */
 db.inventory.insertOne(
    { item: "ebook", qty: 10, size: { h: 8, w: 10, uom: "cm" }, status: "C" }
);
 
/*
BORRAR INFORMACIÓN
*/
db.inventory.drop({ item: "ebook", qty: 10, size: { h: 8, w: 10, uom: "cm" }, status: "A" }
);
