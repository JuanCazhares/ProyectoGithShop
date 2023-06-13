import axios from "axios";
import { useEffect, useState } from "react";
 
function Admin_Users() {
 
const [id, setId] = useState("");
const [nombre, setNombre] = useState("");
const [apellidos, setApellidos] = useState("");
const [correo, setCorreo] = useState("");
const [telefono, setTelefono] = useState("");
const [password, setPassword] = useState("");
const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    console.log("Before LOAD ");
    (async () => await Load())();
  }, []);
  async function Load() {
    
    const result = await axios.get("https://localhost:7061/api/Usuarios/GetUsuarios");
    console.log("Result: ",result.data);
    setUsuarios(result.data);
    console.log(result.data);
  }
  async function save(event) {
  
    event.preventDefault();
    try {
      await axios.post("https://localhost:7061/api/Usuarios/AddUsuarios", {
        
        nombre: nombre,
        apellidos: apellidos,
        correo: correo,
        telefono: telefono,
        password: password,
      
      });
      alert("Usuario Registrado Satisfactoriamente");
          setId("");
          setNombre("");
          setApellidos("");
          setCorreo("");
          setTelefono("");
          setPassword("");
      Load();
    } catch (err) {
      alert(err);
    }
  }
 
  async function editUsuarios(producto) {
    setNombre(usuarios.nombre);
    setApellidos(usuarios.apellidos);
    setCorreo(usuarios.correo);
    setTelefono(usuarios.telefono);
    setPassword(usuarios.password);
  
    setId(usuarios.id);
  }
 
  async function DeleteUsuarios(id) {
  await axios.delete("https://localhost:7061/api/Usuarios/DeleteUsuarios/" + id);
   alert("Usuario Eliminado Satosfactoriamente");
   setId("");
   setNombre("");
   setApellidos("");
   setCorreo("");
   setTelefono("");
   setPassword("");
   Load();
  }
 
  async function update(event) {
    event.preventDefault();
    try {
 
        await axios.patch("http://localhost:7061/api/Usuarios/UpdateUsuarios/"+ usuarios.find((u) => u.id === id).id || id,
        {
        id: id,
        nombre: nombre,
        apellidos: apellidos,
        correo: correo,
        telefono: telefono,
        password: password,
 
        }
      );
      alert("Usuario Actualizado Satisfactoriamente");
      setId("");
      setNombre("");
      setApellidos("");
      setCorreo("");
      setTelefono("");
      setPassword("");
    
      Load();
    } catch (err) {
      alert(err);
    }
  }
 
    return (
        <div className="container mt-4">
            <h1>DETALLE DE USUARIOS</h1>
            <div >
                <form>
                    <div className="form-group">
                    
                        <input
                        type="text"
                        className="form-control"
                        id="id"
                        hidden
                        value={id}
                        onChange={(event) => {
                            setId(event.target.value);
                        }}
                        />
            
                        <label>Nombre</label>
                        <input
                        type="text"
                        className="form-control"
                        id="nombre"
                        value={nombre}
                        onChange={(event) => {
                            setNombre(event.target.value);
                        }}
                        />
                    </div>
                    <div className="form-group">
                        <label>Apellidos</label>
                        <input
                        type="text"
                        className="form-control"
                        id="apellidos"
                        value={apellidos}
                        onChange={(event) => {
                            setApellidos(event.target.value);
                        }}
                        
                        /> 
                        <label>Correo</label>
                        <input
                        type="text"
                        className="form-control"
                        id="correo"
                        value={correo}
                        onChange={(event) => {
                            setCorreo(event.target.value);
                        }}
                        />
                    </div>
                    <div className="form-group">
                        <label>Telefono</label>
                        <input
                        type="text"
                        className="form-control"
                        id="telefono"
                        value={telefono}
                        onChange={(event) => {
                            setTelefono(event.target.value);
                        }}
                        
                        />
                        <label>Password</label>
                        <input
                        type="text"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }}
                        />
                    </div>
                   
                    <div>
                        <button className="btn btn-primary mt-4" onClick={save}>
                        Agregar
                        </button>
                        <button className="btn btn-warning mt-4" onClick={update}>
                        Actualizar
                        </button>
                    </div>
                </form>
            </div>
            <br></br>
        
            <table className="table table-dark" align="center">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellidos</th>
                    <th scope="col">Correo</th>
                    <th scope="col">Telefono</th>
                    <th scope="col">Password</th>
                
                    <th scope="col">Option</th>
                </tr>
                </thead>
                {usuarios.map(function fn(usuarios) {
                return (
                    <tbody>
                    <tr>
                        <th scope="row">{usuarios.id} </th>
                        <td>{usuarios.nombre}</td>
                        <td>{usuarios.apellidos}</td>
                        <td>{usuarios.correo}</td>
                        <td>{usuarios.telefono}</td>
                        <td>{usuarios.password}</td>
                        
                        <td>
                        <button
                            type="button"
                            className="btn btn-warning"
                            onClick={() => editUsuarios(usuarios)}
                        >
                            Actualizar
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => DeleteUsuarios(usuarios.id)}
                        >
                            Eliminar
                        </button>
                        </td>
                    </tr>
                    </tbody>
                );
                })}
            </table>
                
        </div>
    );
  }
export default Admin_Users;