import React, {useEffect, useState} from "react";
//import '../../App.css';
import '../Productslist.css';
import data from "../TemplateData.json";
import axios from "axios";

export default function Products(){
    const [searchTerm, setSearchTerm] = useState("");
    const [productosdata,setProductosData] = useState([]);
    const [carritoID, setCarritoID] = useState("");
    const [nombre, setNombre] = useState("");
    const [categoria, setCategoria] = useState("");
    const [precioUnit, setPrecioUnit] = useState("");
    const [imagenURL, setImagenURL] = useState("");
    const [productos, setProductos] = useState([]);
    const [active, setActive] = useState(false);

    const [carrito,setCarrito] = useState([]);

    useEffect(() => {
      console.log("Before LOAD ");
      (async () => await Load())();
    }, []);
    async function Load() {
      
      const result = await axios.get("https://localhost:7061/api/Productos/GetProductos");
      console.log("Result: ",result.data);
      setProductos(result.data);
    }

    async function LoadCarrito(prodNombre, prodPrecio) {
      const resultCarrito = await axios.get("https://localhost:7061/api/Carrito/GetCarrito");
      setPrecioUnit(prodPrecio);
      setNombre(prodNombre)
      setCarrito(resultCarrito.data)
      setCarritoID(resultCarrito.data.id)
      console.log("Carrito",resultCarrito.data)      
    }

    async function saveCarrito(producto,precioUnit, nombre) {
      try {
        await axios.post("https://localhost:7061/api/Carrito/AgregarCarrito", {
          
          UsuarioID: 1,
          ProductoID: producto,
          Cantidad: 3,
          Total: precioUnit,
          NombreProd: nombre
        });
        alert("Producto Agregado al Carrito");  
        Load();
      } catch (err) {
        alert("Producto NO Agregado al Carrito");
        alert(err);
      }
    }

    async function eliminarElemento(id) {
      try {
          await axios.delete("https://localhost:7061/api/Carrito/DeleteCarrito/"+id, { 
        });
        alert("Producto Eliminado del Carrito");
        console.log("Delete ID True",id)  
        LoadCarrito();
      } catch (err) {
        alert("No se pudo Eliminar el Producto");
        console.log("Delete ID",id)
        alert(err);
      }
    }

    async function CleanCarrito() {
      try {
          await axios.delete("https://localhost:7061/api/Carrito/"+1, { 
        });
        alert("Carrito Limpio"); 
        LoadCarrito();
      } catch (err) {
        alert("No se pudo Limpiar el Carrito");
        alert(err);
      }
    }

   /* const handleAddToCart = (id) => {
      const carritoData = {
        UsuarioID : 1,
        Producto : id,
        Cantidad : 1

      }; 
      axios.post("https://localhost:7061/api/Carrito/AgregarCarrito",carritoData)
      .then((result)=>{
        if (result.data.statusCode === '200'){
          alert('Producto Agregado Al Carrito');
        }
        else{
          alert('Producto No Agregado');
        }
      });
    }*/

    return(
        <>
        
        <div className="templateContainer">
          <div className="searchInput_Container">
            <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
              setSearchTerm(event.target.value);
            }} />
            <div className='container-cart-icon' onClick={function(event){LoadCarrito();   setActive(!active)}}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='icon-cart'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
                />
              </svg>
              <div className='count-products'>
                <span id='contador-productos'>Total</span>
              </div>
              <div className={`container-cart-products ${ active ? '' : 'hidden-cart'}`}>
                  {carrito.length ? (
                <>
                  <div className='row-product'>
                    {carrito.map(carritoProd => (
                      <div className='cart-product' key={carritoProd.id}>
                        <div className='info-cart-product'>
                          <span className='cantidad-producto-carrito'>
                          {carritoProd.cantidad}
                          </span>
                          <p className='titulo-producto-carrito'>
                          {carritoProd.nombreProd}
                          </p>
                          <span className='precio-producto-carrito'>
                            ${(carritoProd.total * carritoProd.cantidad)}
                          </span>
                        </div>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth='1.5'
                          stroke='currentColor'
                          className='icon-close'
                          onClick={() => eliminarElemento(carritoProd.id)}
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M6 18L18 6M6 6l12 12'
                          />
                        </svg>
                      </div>
                    ))}
                  </div>
                  
                  <div className='cart-total'>
                  
                    <h3>Total:</h3>
                    <span className='total-pagar'></span>
                    Total
                  </div>

                  <button className='btn-clear-all' >
                    Pagar
                  </button>
                  <button className='btn-clear-all' onClick={() => CleanCarrito(1)}>
                    Vaciar Carrito
                  </button>
                </>
              ) : (
                <p className='cart-empty'>El carrito está vacío</p>
              )}
				</div>

        </div>
          </div>
          <div className="productContainer">
          {productos.map(function fn(productos) {
            console.log("PRODS: ",productos)
                return (
                    <div className="template" key={productos.id}>
                      <img src="images/gifts-1.jfif" alt="" />
                      <h3>{productos.nombre}</h3>
                      <p className="price">${productos.precioUnit}</p>
                      <button type="button" className="btn btn-danger" onClick={function(event){ saveCarrito(productos.id,productos.precioUnit,productos.nombre); LoadCarrito(productos.nombre,productos.precioUnit)}}>
                              Agregar al Carrito
                      </button>

                    </div>
                );
                })}
          </div>
          
        </div>
      </>
    ) 

    
}