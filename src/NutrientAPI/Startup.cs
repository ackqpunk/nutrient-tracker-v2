using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Cors.Infrastructure;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using nutrient_api.DataModels;
using nutrient_api.Models;

namespace NutrientAPI
{
	public class Startup
	{
		// This method gets called by the runtime. Use this method to add services to the container.
		// For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
		public void ConfigureServices(IServiceCollection services)
		{

            var connString = @"Server=tcp:nutrientdb.database.windows.net,1433;Initial Catalog=nutrientdb_dev;Persist Security Info=False;User ID=ackqpunk@nutrientdb;Password=ackq9542_12;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";
            services.AddCors();
            services.AddMvc();
            services.AddDbContext<NutrientsContext>(options =>
                options.UseSqlServer(connString));
        }

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
		{
            app.UseCors(builder =>
            {
                builder.WithOrigins("http://localhost:5000")
                    .WithMethods("*")
                    .AllowAnyHeader();
            });
            app.UseMvc();

        }
	}
}
