using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CandidateTrackingMay24.Data.Migrations
{
    public partial class AddedColumn : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Notes",
                table: "Candidates",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Notes",
                table: "Candidates");
        }
    }
}
