using System.ComponentModel.DataAnnotations;

namespace Shop_API.Models
{
    public class Usuarios
    {
        [Key]
        public int ID { get; set; }

        public string Nombre { get; set; }

        public string Apellidos { get; set; }

        public string Correo { get; set; }

        public string Telefono { get; set; }

        public string Password { get; set; }



    }
}
