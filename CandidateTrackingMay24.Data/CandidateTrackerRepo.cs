using CandidateTrackingMay24.Data.Models;
using CheesecakeOrdering.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;

namespace CandidateTrackingMay24.Data
{
    public class CandidateTrackerRepo
    {
        private string _connectionString;

        public CandidateTrackerRepo(string connectionString)
        {
            _connectionString = connectionString;
        }

        public void Add(Candidate candidate)
        {
            using var context = new CandidateTrackerDataContext(_connectionString);
            context.Candidates.Add(candidate);
            context.SaveChanges();
        }

        public List<Candidate> GetPending()
        {
            using var context = new CandidateTrackerDataContext(_connectionString);
            return context.Candidates.Where(c=>c.Status == Status.pending).ToList();
        }
        public List<Candidate> GetDenied()
        {
            using var context = new CandidateTrackerDataContext(_connectionString);
            return context.Candidates.Where(c => c.Status == Status.denied).ToList();
        }
        public List<Candidate> GetConfirmed()
        {
            using var context = new CandidateTrackerDataContext(_connectionString);
            return context.Candidates.Where(c => c.Status == Status.confirmed).ToList();
        }
        public Candidate GetById(int id)
        {
            using var context = new CandidateTrackerDataContext(_connectionString);
            return context.Candidates.FirstOrDefault(c => c.Id==id);
        }

        public void Update(UpdateViewModel model)
        {
            using var context = new CandidateTrackerDataContext(_connectionString);
            var candidate = context.Candidates.FirstOrDefault(cand => cand.Id == model.Id);
            candidate.Status = model.Status;
            context.SaveChanges();
        }

        public int GetCounts(Status status)
        {
            using var context = new CandidateTrackerDataContext(_connectionString);
            return context.Candidates.Count(c => c.Status == status);
        }
    }
}