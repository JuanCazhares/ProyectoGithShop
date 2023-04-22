using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Shop_API.Models;

namespace Shop_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarritoController : ControllerBase
    {
        private readonly CarritoDBContext _CarritoDBContext;

        public CarritoController(CarritoDBContext carritoDBContext)
        {
            _CarritoDBContext = carritoDBContext;
        }

        [HttpGet]
        [Route("GetCarrito")]
        public async Task<IEnumerable<Carrito>> GetCarrito()
        {
            return await _CarritoDBContext.Carrito.ToListAsync();
        }

        [HttpPost]
        [Route("AgregarCarrito")]
        public async Task<Carrito> AgregarCarrito(Carrito objCarrito)
        {
            _CarritoDBContext.Carrito.Add(objCarrito);
            await _CarritoDBContext.SaveChangesAsync();
            return objCarrito;
        }

        [HttpDelete]
        [Route("DeleteCarrito/{id}")]
        public bool DeleteCarrito(int id)
        {
            bool a = false;
            var carrito = _CarritoDBContext.Carrito.Find(id);
            if (carrito != null)
            {
                a = true;
                _CarritoDBContext.Entry(carrito).State = EntityState.Deleted;
                _CarritoDBContext.SaveChanges();
            }
            else
            {
                a = false;
            }
            return a;
        }

        [HttpDelete("{UsuarioID}")]
        //[Route("CleanCarrito/{UsuarioID}")]
        public async Task<IActionResult> CleanCarrito(int UsuarioID)
        {
            try {
                var cart = _CarritoDBContext.Carrito.Where((x)=>x.UsuarioID==UsuarioID).ToList();
                if (cart != null)
                {
                    _CarritoDBContext.Carrito.RemoveRange(cart);
                    _CarritoDBContext.SaveChanges();
                    return Ok(UsuarioID);
                }
                else
                {
                    return BadRequest();
                }
            }
            catch(Exception error) {
                return NotFound(error.Message);
            }
        }
    }
}
