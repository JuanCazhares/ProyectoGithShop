using Microsoft.EntityFrameworkCore;

namespace Shop_API.Models
{
    public class UsuariosDBContext : DbContext
    {
        public UsuariosDBContext(DbContextOptions<UsuariosDBContext> options) : base(options)
        {
        }

        public DbSet<Usuarios> Usuarios { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Data Source=PADRINOPC\\SQLDEVELOPER; Initial Catalog=Shop; User Id=sa; Password=1234; TrustServerCertificate=True;");
        }
    }
}
