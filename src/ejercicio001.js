/* 
Insertar datos
*/
db.inventory.insertOne({item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" });
db.inventory.insertOne({item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "A" });
db.inventory.insertOne({item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" });
db.inventory.insertOne({item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" });
db.inventory.insertOne({item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" });
db.inventory.insertOne({item: "pencil", qty: 20, size: { h: 4, w: 29.47, uom: "cm" }, status: "D" });
db.inventory.insertOne({item: "carpet", qty: 150, size: { h: 60, w: 44, uom: "cm" }, status: "D" });
db.inventory.insertOne({item: "mechanical pencil", qty: 20, size: { h: 4, w: 15.50, uom: "cm" }, status: "D" });
db.inventory.insertOne({item: "mines", qty: 20, size: { h: 4, w: 15.50, uom: "cm" }, status: "D" });
db.inventory.insertOne({item: "brushes", qty: 20, size: { h: 4, w: 15.50, uom: "cm" }, status: "D" });
db.inventory.insertOne({item: "canvas", qty: 20, size: { h: 4, w: 15.50, uom: "cm" }, status: "D" });
db.inventory.insertOne({item: "racks", qty: 20, size: { h: 4, w: 15.50, uom: "cm" }, status: "D" });
db.inventory.insertOne({item: "easels", qty: 20, size: { h: 4, w: 15.50, uom: "cm" }, status: "D" });
db.inventory.insertOne({item: "plasticine", qty: 20, size: { h: 4, w: 15.50, uom: "cm" }, status: "D" });
db.inventory.insertOne({item: "washi tapes", qty: 20, size: { h: 4, w: 15.50, uom: "cm" }, status: "D" });
db.inventory.insertOne({item: "watercolors", qty: 20, size: { h: 4, w: 15.50, uom: "cm" }, status: "D" });
db.inventory.insertOne({item: "varnish", qty: 20, size: { h: 4, w: 15.50, uom: "cm" }, status: "D" });
db.inventory.insertOne({item: "canvas", qty: 100, size: { h: 28, w: 35.5, uom: "cm" }, status: "A" });
db.inventory.insertOne({item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" });
db.inventory.insertOne({item: "mat", qty: 85, size: { h: 27.9, w: 35.5, uom: "cm" }, status: "A" });
db.inventory.insertOne({item: "mousepad", qty: 25, size: { h: 19, w: 22.85, uom: "cm" }, status: "P" });
db.inventory.insertOne({item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "P" });
db.inventory.insertOne({item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" });
db.inventory.insertOne({item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" });
db.inventory.insertOne({item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" });
db.inventory.insertOne({item: "sketchbook", qty: 80, size: { h: 14, w: 21, uom: "cm" }, status: "A" });
db.inventory.insertOne({item: "sketch pad", qty: 95, size: { h: 22.85, w: 30.5, uom: "cm" }, status: "A" });
 /*
 CAMBIAR LA INFORMACÍON INICIAL
 */
 db.inventory.insertOne({ item: "ebook", qty: 10, size: { h: 8, w: 10, uom: "cm" }, status: "C" }
);
 
/*
BORRAR INFORMACIÓN
*/
db.inventory.drop({item: "ebook", qty: 10, size: { h: 8, w: 10, uom: "cm" }, status: "A" }
);
