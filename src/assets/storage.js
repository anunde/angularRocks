let DB;
createDB();


function createDB() {
    let createDB = window.indexedDB.open('rockBands', 1);

    createDB.onerror = function() {
        console.log('Tu navegador no es compatible con IndexedDB');
    }

    createDB.onsuccess = function() {
        DB = createDB.result;

        fillDB();
    }

    createDB.onupgradeneeded = function(e) {
        let db = e.target.result;

        let objectStore = db.createObjectStore('rockBands', {keyPath: 'id', autoIncrement: true });

        objectStore.createIndex('id', 'id', {unique: true});
        objectStore.createIndex('nombre', 'nombre', {unique: true});
        objectStore.createIndex('descripcion', 'descripcion', {unique: false});

    }
}

function fillDB() {

    let transaction = DB.transaction(['rockBands'], 'readwrite');

    transaction.oncomplete = function(event) {
        console.log('Transacción Completada');
    };
    
    transaction.onerror = function(event) {
        console.log('Hubo un error en la transacción')
    };

    let objectStore = transaction.objectStore('rockBands');

    
    for(band in musicBands) {
        objectStore.add(musicBands[band]);
    }
}