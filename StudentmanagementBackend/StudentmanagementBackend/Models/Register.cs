namespace StudentmanagementBackend.Models
{
    public class Register
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }

        public string Email { get; set; }
        public string City { get; set; }
        public string Department { get; set; }
    }
}
