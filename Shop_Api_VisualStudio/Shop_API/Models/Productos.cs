using System.ComponentModel.DataAnnotations;

namespace Shop_API.Models
{
    public class Productos
    {
        [Key]
        public int ID { get; set; }

        public string Nombre { get; set; }

        public string Categoria { get; set; }

        public decimal PrecioUnit { get; set; }

        public decimal Descuento { get; set; }

        public int Existencia { get; set; }

        public string ImagenURL { get; set; }


    }
}
