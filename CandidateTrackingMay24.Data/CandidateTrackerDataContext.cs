using CandidateTrackingMay24.Data;
using Microsoft.EntityFrameworkCore;

namespace CheesecakeOrdering.Data
{
    public class CandidateTrackerDataContext : DbContext
    {
        private string _connectionString;

        public CandidateTrackerDataContext(string connectionString)
        {
            _connectionString = connectionString;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connectionString);
        }

        public DbSet<Candidate> Candidates { get; set; }
    }
}
