using Microsoft.EntityFrameworkCore;
using StudentmanagementBackend.Models;

namespace StudentmanagementBackend.Db
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Student> Students { get; set; }
        public DbSet<Register> Register { get; set; }


        

    }
}
