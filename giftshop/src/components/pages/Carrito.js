import React, {useEffect, useState} from "react";
import '../../App.css';
import '../Productslist.css';
import data from "../TemplateData.json";
import axios from "axios";

export default function Products(){
    const [searchTerm, setSearchTerm] = useState("");
    const [productosdata,setProductosData] = useState([]);
    const [id, setId] = useState("");
    const [nombre, setNombre] = useState("");
    const [categoria, setCategoria] = useState("");
    const [precioUnit, setPrecioUnit] = useState("");
    const [imagenURL, setImagenURL] = useState("");
    const [productos, setProductos] = useState([]);

    useEffect(() => {
      console.log("Before LOAD ");
      (async () => await Load())();
    }, []);
    async function Load() {
      
      const result = await axios.get("https://localhost:7061/api/Carrito/GetCarrito");
      console.log("Result: ",result.data);
      setProductos(result.data);
      console.log("Result prod: ",productosdata);
    }

    return(
        <>
        
        <div className="templateContainer">
        
          <div className="searchInput_Container">
            <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
              setSearchTerm(event.target.value);
              console.log("PRODS1: ",productos)
            }} />
          </div>
          <div className="productContainer">
          {productos.map(function fn(productos) {
            console.log("PRODS: ",productos)
                return (
                    <div className="template" key={productos.id}>
                      <img src="images/gifts-1.jfif" alt="" />
                      <h3>{productos.nombre}</h3>
                      <p className="price">${productos.precioUnit}</p>
                      <button type="button" className="btn btn-danger" >
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