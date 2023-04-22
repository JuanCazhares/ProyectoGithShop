using Microsoft.EntityFrameworkCore;

namespace Shop_API.Models
{
    public class CarritoDBContext : DbContext
    {
        public CarritoDBContext(DbContextOptions<CarritoDBContext> options) : base(options)
        {
        }

        public DbSet<Carrito> Carrito { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Data Source=PADRINOPC\\SQLDEVELOPER; Initial Catalog=Shop; User Id=sa; Password=1234; TrustServerCertificate=True;");
        }
    }
}
   
