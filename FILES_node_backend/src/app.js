const EXPRESS = require('express');
const FS = require('fs');
const APP = EXPRESS();


// Configuraciones
APP.set('port', process.env.PORT || 5000); // PUERTO

// Middlewares
APP.use(EXPRESS.urlencoded({ extended: true }));
// - - - - - - - -


APP.get('/formulario', (req, res) => {
  // REQ.QUERY = se utiliza cuando los datos son recibidos a través del metodo "GET".
  console.log(req.query);
  const {titulo, contenido} = req.query;
  if(!titulo || !contenido){
    return res.send('No se ha creado con exito - GET...');    
  }

  // Creando el archivo de texto con el contenido
  FS.writeFile(`tareas_creadas/${titulo}.txt`, contenido, (error) => {
    if(error) return res.send("Falló al crear el archivo");
    res.send("Archivo creado con exito! - GET");
  });

});


APP.post('/formulario', (req, res) => {
  // REQ.BODY = se utiliza cuando los datos son recibidos a través del metodo "POST".
  console.log(req.body);
  const { titulo, contenido } = req.body;
  if (!titulo || !contenido) return res.send("No existe titulo, ni contenido");

  // Creando el archivo de texto con el contenido
  FS.writeFile(`tareas_creadas/${titulo}.txt`, contenido, (error) => {
    if (error) return res.send("Falló al crear el archivo");
    res.send("Archivo creado con exito! - POST");
  });
});


// Escuchar servidor en el puerto = 5000
APP.listen(APP.get('port'), () => {
  console.log('Server on port: 5000');
});


