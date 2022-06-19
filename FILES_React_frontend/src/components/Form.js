import React from 'react'

export default function Form(props) {
  return (
    <div>
      <form action="http://localhost:5000/formulario" method={props.method}>
        <h1 className="text-5xl">
          Create Text File - <strong>{props.method}</strong>
        </h1>

        <label className="text-2xl mt-5 lg:float-left">
          Titulo del archivo:
        </label>
        <input
          type="text"
          className="w-full rounded mt-3 box-border p-2 text-black"
          name="titulo"
          autoComplete='off'
        ></input>

        <label className="text-2xl mt-5 lg:float-left">
          Contenido del archivo:
        </label>

        <textarea
          className="w-full mt-3 rounded text-black box-border p-2"
          name="contenido"
        ></textarea>

        <button className={props.color}>Crear archivo de texto</button>
      </form>
    </div>
  );
}
