using Microsoft.AspNetCore.Components.Forms;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Shop_API.Models;

namespace Shop_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {
        private readonly UsuariosDBContext _usuariosDBContext;

        public UsuariosController(UsuariosDBContext usuariosDBContext)
        {
            _usuariosDBContext = usuariosDBContext;
        }

        [HttpGet]
        [Route("GetUsuarios")]
        public async Task<IEnumerable<Usuarios>> GetUsuarios()
        {
            return await _usuariosDBContext.Usuarios.ToListAsync();
        }

        [HttpPost]
        [Route("AddUsuarios")]
        public async Task<Usuarios> AddUsuarios(Usuarios objUsuarios)
        {
            _usuariosDBContext.Add(objUsuarios);
            await _usuariosDBContext.SaveChangesAsync();
            return objUsuarios;
        }

        [HttpPatch]
        [Route("UpdateUsuarios/{id}")]
        public async Task<Usuarios> UpdateUsuarios(Usuarios objUsuarios)
        {
            _usuariosDBContext.Entry(objUsuarios).State = EntityState.Modified;
            await _usuariosDBContext.SaveChangesAsync();
            return objUsuarios;
        }

        [HttpDelete]
        [Route("DeleteUsuarios/{id}")]
        public bool DeleteUsuarios(int id)
        {
            bool a = false;
            var usuario = _usuariosDBContext.Usuarios.Find(id);
            if (usuario != null)
            {
                a = true;
                _usuariosDBContext.Entry(usuario).State = EntityState.Deleted;
                _usuariosDBContext.SaveChanges();
            }
            else
            {
                a = false;
            }
            return a;
        }
    }
}
