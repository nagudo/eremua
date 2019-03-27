function getNativeDlPath() {
    var path = '';
    //en funcion de la plataforma, la ruta donde se guarda el fichero GPX sera diferente (en android esta funcionando, 
    //falta ios, que sale con la ruta que aparece en las capturas de pantalla que te he enviado)
    switch (cordova.platformId) {
        case 'android':
            path = 'file:///storage/emulated/0/';
            //showToast('En android: ' + path);
            break;
        case 'ios':
            path = cordova.file.documentsDirectory;
            //showToast('En ios: ' + path);
            break;
        default:
            //showToast('En default: ' + path);
            path = window.appRootDir.nativeURL;
    }
    return path;
}

// con los plugins de apache cordova (phonegap) "file-transfer" y "file" consigo hacer la descarga
function fileDownload(fileName) {
    // al pulsar el boton del html le paso el nombre de la ruta, y lo concateno aqui, con la url de internet donde estan los ficheros gpx
    var uri = 'http://www.eremua.com/' + fileName;
    //var uri = 'http://rutas.nachoagudo.com/tracks/' + fileName;

    window.resolveLocalFileSystemURL(getNativeDlPath(), fsAccess, errorCb);

    function fsAccess(fileSystem) {
        fileSystem.getDirectory('Eremua', { create: true, exclusive: false }, dirReady, errorCb);
    }

    function dirReady(entry) {
        var fileTransfer = new FileTransfer(),
            filePath = entry.nativeURL + uri.substr(uri.lastIndexOf('/') + 1);

        fileTransfer.download(uri, filePath, dlComplete, errorCb);
    }

    function dlComplete(theFile) {
        showToast('Descarga completada: ' + theFile.toURL());
    }
}

// en las capturas puedes ver otro boton en el que pone "LISTADO RUTAS" ese lo he puesto de manera temporal para saber qué rutas 
// me he descargado ya, y comprobar que se descargan varias.
function getList() {
    window.resolveLocalFileSystemURL(getNativeDlPath(), fsAccess, errorCb);

    function fsAccess(fileSystem) {
        fileSystem.getDirectory('Eremua', { create: true, exclusive: false }, dirReady, errorCb);
    }

    function dirReady(entry) {
        var reader = entry.createReader();

        reader.readEntries(listReady, errorCb);
    }

    function listReady(items) {
        var names = [];

        for (var i = 0; i < items.length; i++) {
            names.push(items[i].name);
        }

        showToast('Encontrados: ' + names.join(', '));
    }
}

function errorCb(e) {
    showToast('Error: ' + e);
}

// con el plugin "toast" muestro los mensajes de descarga correcta y el listado (y los que me he ido poniendo por ahí para
// saber por dónde iba pasando el código)
function showToast(message) {
    // https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin
    window.plugins.toast.showWithOptions({
        message: message,
        duration: 'long',
        position: 'bottom'
    });
}