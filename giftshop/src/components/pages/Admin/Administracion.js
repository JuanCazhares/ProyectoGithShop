import React, {useState} from "react";
import { Link } from 'react-router-dom';
export default function Products(){
    const [searchTerm, setSearchTerm] = useState("");
    return(
        <>
                    
            <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action active">
                Gift Shop Administracion
            </a>
            <Link to='/admin_users' className="list-group-item list-group-item-action">Administrar Usuarios</Link>
            <Link to='/admin_products' className="list-group-item list-group-item-action">Administrar Productos</Link>
            <Link to='/admin_compras' className="list-group-item list-group-item-action">Administrar Compras</Link>
            <Link to='/detalle_compra' className="list-group-item list-group-item-action">Detalle de Compra</Link>
            </div>
      </>
    )  
}