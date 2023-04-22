using System.ComponentModel.DataAnnotations;

namespace Shop_API.Models
{
    public class Carrito
    {
        [Key]
        public int ID { get; set; }

        public int UsuarioID { get; set; }

        public int ProductoID { get; set; }

        public int Cantidad { get; set; }

        public decimal Total { get; set; }

        public string NombreProd { get; set; }

    }
}
