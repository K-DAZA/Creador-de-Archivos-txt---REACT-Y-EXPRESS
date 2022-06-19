import './App.css';
import Form from './components/Form';
import react from './images/react.png';

function App() {
  return (
    <div className="App p-4">
      <div className="container-fluid lg:container box-border p-1 rounded bg-neutral-700 mt-5 lg:flex">
        <h1 className="w-full text-5xl box-border p-3 text-white">
          Creador de Archivos .txt
          <h3 className="text-2xl mt-3">
            <strong>Design By: Kevin Jefrey Daza Acosta</strong>
          </h3>
          <img
            src={react}
            alt=""
            className="img-responsive md:ml-10 lg:ml-3 xl:ml-8 mt-4"
          />
        </h1>

        <div className="bg-dark mb-2 text-white rounded box-border p-4 lg:w-4/6 ">
          <Form
            method="GET"
            color="bg-primary p-3 mb-2 mt-5 box-border rounded w-full"
          />
        </div>
        <div className="lg:ml-2 bg-neutral-600 mb-2 text-white rounded box-border p-4 lg:w-4/6">
          <Form
            method="POST"
            color="bg-success p-3 mt-5 box-border rounded w-full"
          
          />
        </div>
      </div>
    </div>
  );
}

export default App;
