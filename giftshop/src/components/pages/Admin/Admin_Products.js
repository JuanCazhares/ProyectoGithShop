import axios from "axios";
import { useEffect, useState } from "react";
 
function Admin_Products() {
 
const [id, setId] = useState("");
const [nombre, setNombre] = useState("");
const [categoria, setCategoria] = useState("");
const [precioUnit, setPrecioUnit] = useState("");
const [descuento, setDescuento] = useState("");
const [existencia, setExistencia] = useState("");
const [imagenURL, setImagenURL] = useState("");
const [productos, setProductos] = useState([]);

  useEffect(() => {
    console.log("Before LOAD ");
    (async () => await Load())();
  }, []);
  async function Load() {
    
    const result = await axios.get("https://localhost:7061/api/Productos/GetProductos");
    console.log("Result: ",result.data);
    setProductos(result.data);
    console.log(result.data);
  }
  async function save(event) {
  
    event.preventDefault();
    try {
      await axios.post("https://localhost:7061/api/Productos/AddProductos", {
        
        nombre: nombre,
        categoria: categoria,
        precioUnit: precioUnit,
        descuento: descuento,
        existencia: existencia,
        imagenURL: imagenURL,
      
      });
      alert("Producto Registrado Satisfactoriamente");
          setId("");
          setNombre("");
          setCategoria("");
          setPrecioUnit("");
          setDescuento("");
          setExistencia("");
          setImagenURL("");
      Load();
    } catch (err) {
      alert(err);
    }
  }
 
  async function editProducto(producto) {
    setNombre(productos.nombre);
    setCategoria(productos.categoria);
    setPrecioUnit(productos.precioUnit);
    setDescuento(productos.descuento);
    setExistencia(productos.existencia);
    setImagenURL(productos.imagenURL);
  
    setId(productos.id);
  }
 
  async function DeleteProducto(id) {
  await axios.delete("https://localhost:7061/api/Productos/DeleteProductos/" + id);
   alert("Producto Eliminado Satosfactoriamente");
   setId("");
   setNombre("");
   setCategoria("");
   setPrecioUnit("");
   setDescuento("");
   setExistencia("");
   setImagenURL("");
   Load();
  }
 
  async function update(event) {
    event.preventDefault();
    try {
 
  await axios.patch("http://localhost:7061/api/Productos/UpdateProductos/"+ productos.find((u) => u.id === id).id || id,
        {
        id: id,
        nombre: nombre,
        categoria: categoria,
        precioUnit: precioUnit,
        descuento: descuento,
        existencia: existencia,
        imagenURL: imagenURL,
 
        }
      );
      alert("Producto Actualizado Satisfactoriamente");
      setId("");
      setNombre("");
      setCategoria("");
      setPrecioUnit("");
      setDescuento("");
      setExistencia("");
      setImagenURL("");;
    
      Load();
    } catch (err) {
      alert(err);
    }
  }
 
    return (
        <div className="container mt-4">
            <h1>DETALLE DE PRODUCTOS</h1>
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
            
                        <label>Producto</label>
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
                        <label>Categoria</label>
                        <input
                        type="text"
                        className="form-control"
                        id="course"
                        value={categoria}
                        onChange={(event) => {
                            setCategoria(event.target.value);
                        }}
                        
                        /> 
                        <label>Precio</label>
                        <input
                        type="text"
                        className="form-control"
                        id="precioUnit"
                        value={precioUnit}
                        onChange={(event) => {
                            setPrecioUnit(event.target.value);
                        }}
                        />
                    </div>
                    <div className="form-group">
                        <label>Descuento</label>
                        <input
                        type="text"
                        className="form-control"
                        id="descuento"
                        value={descuento}
                        onChange={(event) => {
                            setDescuento(event.target.value);
                        }}
                        
                        />
                        <label>Existencia</label>
                        <input
                        type="text"
                        className="form-control"
                        id="existencia"
                        value={existencia}
                        onChange={(event) => {
                            setExistencia(event.target.value);
                        }}
                        />
                    </div>
                    <div className="form-group">
                        <label>ImagenURL</label>
                        <input
                        type="text"
                        className="form-control"
                        id="imagenURL"
                        value={imagenURL}
                        onChange={(event) => {
                            setImagenURL(event.target.value);
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
                    <th scope="col">Producto</th>
                    <th scope="col">Categoria</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Descuento</th>
                    <th scope="col">Existencia</th>
                    <th scope="col">Imagen URL</th>
                
                    <th scope="col">Option</th>
                </tr>
                </thead>
                {productos.map(function fn(productos) {
                return (
                    <tbody>
                    <tr>
                        <th scope="row">{productos.id} </th>
                        <td>{productos.nombre}</td>
                        <td>{productos.categoria}</td>
                        <td>{productos.precioUnit}</td>
                        <td>{productos.descuento}</td>
                        <td>{productos.existencia}</td>
                        <td>{productos.imagenURL}</td>
                        
                        <td>
                        <button
                            type="button"
                            className="btn btn-warning"
                            onClick={() => editProducto(productos)}
                        >
                            Actualizar
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => DeleteProducto(productos.id)}
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
export default Admin_Products;