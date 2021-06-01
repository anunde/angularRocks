let DB;
createDB();

function createDB() {
    const createDB = window.indexedDB.open('rockBands', 1);

    createDB.onerror = function() {
        console.log('Tu navegador no es compatible con IndexedDB');
    }

    createDB.onsuccess = function() {
        DB = createDB.result;
    }

    createDB.onupgradeneeded = function(e) {
        const db = e.target.result;

        const objectStore = db.createObjectStore('rockBands', {keyPath: 'id', autoIncrement: true });

        objectStore.createIndex('id', 'id', {unique: true});
        objectStore.createIndex('nombre', 'nombre', {unique: true});
        objectStore.createIndex('descripcion', 'descripcion', {unique: false});
    }
}