using Microsoft.AspNetCore.Components.Forms;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Shop_API.Models;

namespace Shop_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductosController : ControllerBase
    {
        private readonly ProductosDBContext _productosDBContext;

        public ProductosController(ProductosDBContext productosDBContext)
        {
            _productosDBContext = productosDBContext;
        }

        [HttpGet]
        [Route("GetProductos")]
        public async Task<IEnumerable<Productos>> GetProductos()
        {
            return await _productosDBContext.Productos.ToListAsync();
        }

        [HttpPost]
        [Route("AddProductos")]
        public async Task<Productos> AddProductos(Productos objProductos)
        {
            _productosDBContext.Productos.Add(objProductos);
            await _productosDBContext.SaveChangesAsync();
            return objProductos;
        }

        [HttpPatch]
        [Route("UpdateProductos/{id}")]
        public async Task<Productos> UpdateProductos(Productos objProductos)
        {
            _productosDBContext.Entry(objProductos).State=EntityState.Modified;
            await _productosDBContext.SaveChangesAsync();
            return objProductos;
        }

        [HttpDelete]
        [Route("DeleteProductos/{id}")]
        public bool DeleteProductos(int id)
        {
            bool a = false;
            var producto = _productosDBContext.Productos.Find(id);
            if (producto != null)
            {
                a = true;
                _productosDBContext.Entry(producto).State=EntityState.Deleted;
                _productosDBContext.SaveChanges();
            }
            else
            {
                a = false;
            }
            return a;
        }
    }
}
