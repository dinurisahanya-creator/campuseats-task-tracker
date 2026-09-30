using CampusEats.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace CampusEats.Api.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }

    public DbSet<MenuItem> MenuItems { get; set; }

    public DbSet<User> Users { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.Entity<User>()
               .HasIndex(u => u.Email)
               .IsUnique();
    }
}