using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace CheesecakeOrdering.Data
{
    public class CandidateTrackerDataContextFactory : IDesignTimeDbContextFactory<CandidateTrackerDataContext>
    {
        public CandidateTrackerDataContext CreateDbContext(string[] args)
        {
            var config = new ConfigurationBuilder()
               .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), $"..{Path.DirectorySeparatorChar}CandidateTrackingMay24.Web"))
               .AddJsonFile("appsettings.json")
               .AddJsonFile("appsettings.local.json", optional: true, reloadOnChange: true).Build();

            return new CandidateTrackerDataContext(config.GetConnectionString("ConStr"));
        }
    }
}
