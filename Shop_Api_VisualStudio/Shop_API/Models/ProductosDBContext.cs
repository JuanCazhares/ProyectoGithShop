using Microsoft.EntityFrameworkCore;

namespace Shop_API.Models
{
    public class ProductosDBContext : DbContext
    {
        public ProductosDBContext(DbContextOptions<ProductosDBContext> options) : base(options)
        {
        }

        public DbSet<Productos> Productos { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Data Source=PADRINOPC\\SQLDEVELOPER; Initial Catalog=Shop; User Id=sa; Password=1234; TrustServerCertificate=True;");
        }
    }
}
