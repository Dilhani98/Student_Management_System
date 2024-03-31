using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StudentmanagementBackend.Db;
using StudentmanagementBackend.Models;

namespace StudentmanagementBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly AppDbContext _context;

        public LoginController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost("login")]

        public async Task<IActionResult> Login([FromBody] Login login)
        {
            var log = await  _context.Register.FirstOrDefaultAsync(x => x.Username.Equals(login.username));
            if (log == null)
            {
                return BadRequest(new { Status = 401, isSuccess = false, message = "Invalid User" });
            }
            else if (log.Password != login.password)
            {
                return BadRequest(new { status = 401, isSuccess = false, message = "Incorrect Password" });
            }
            else
            {
                return Ok(new { status = 200, isSuccess = true, message = "User Login successfully", UserDetails = log });
            }
        }

        [HttpPost("register")]
        public async Task<IActionResult> Signup(Register registerDetails)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // Add signup details to the database
            _context.Register.Add(registerDetails);
            await _context.SaveChangesAsync();

            return Ok();
        }
    }
}
