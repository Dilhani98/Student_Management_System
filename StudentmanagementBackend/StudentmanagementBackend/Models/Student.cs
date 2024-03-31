using System.ComponentModel.DataAnnotations;

namespace StudentmanagementBackend.Models
{
    public class Student
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        public string Phone { get; set; }

        public string Address { get; set; }

        public string Department { get; set; }

        public int EnrolledYear { get; set; }
    }
}
