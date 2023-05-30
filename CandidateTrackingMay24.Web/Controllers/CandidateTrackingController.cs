using CandidateTrackingMay24.Data;
using CandidateTrackingMay24.Data.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CandidateTrackingMay24.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidateTrackingController : ControllerBase
    {
        private string _connectionString;

        public CandidateTrackingController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [Route("add")]
        [HttpPost]
        public void AddCandidate(Candidate candidate)
        {
            var repo = new CandidateTrackerRepo(_connectionString);
            repo.Add(candidate);

        }

        [Route("getPending")]
        [HttpGet]
        public List<Candidate> GetPending()
        {
            var repo = new CandidateTrackerRepo(_connectionString);
            return repo.GetPending();

        }

        [Route("getDenied")]
        [HttpGet]
        public List<Candidate> GetDenied()
        {
            var repo = new CandidateTrackerRepo(_connectionString);
            return repo.GetDenied();

        }

        [Route("getConfirmed")]
        [HttpGet]
        public List<Candidate> GetConfirmed()
        {
            var repo = new CandidateTrackerRepo(_connectionString);
            return repo.GetConfirmed();

        }


        [Route("getById")]
        [HttpGet]
        public Candidate GetById(int id)
        {
            var repo = new CandidateTrackerRepo(_connectionString);
            return repo.GetById(id);

        }

        [Route("update")]
        [HttpPost]
        public void Update(UpdateViewModel model)
        {
            var repo = new CandidateTrackerRepo(_connectionString);
            repo.Update(model);

        }

        [Route("getCounts")]
        [HttpGet]
        public int GetCounts(Status status)
        {
            var repo = new CandidateTrackerRepo(_connectionString);
            return repo.GetCounts(status);

        }





    }
}
