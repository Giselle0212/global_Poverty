using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using global_Poverty.Models;
using RestSharp;

namespace global_Poverty.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        var client = new RestClient("https://global-economy-analytics.p.rapidapi.com/countries");
        var request = new RestRequest();
        request.AddHeader("X-RapidAPI-Key", "c9c7e17bdcmshf50c7817141dd28p1b69e8jsn02ee9a2cf585");
        request.AddHeader("X-RapidAPI-Host", "global-economy-analytics.p.rapidapi.com");
        var response = client.Execute(request);
        Console.WriteLine(response.Content.ToString());
        return View();
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
