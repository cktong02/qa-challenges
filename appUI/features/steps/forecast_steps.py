from behave import given, then, when
from pages.home_page import HomePage
from pages.weather_forecast_page import WeatherForecastPage

@given("user opens home page")
def step_impl(context):
    context.home_page = HomePage(context.driver)
    context.home_page.init_app()

@when("user checks 9-day weather forecast")
def step_impl(context):
    context.home_page.open_menu()
    context.home_page.open_9_day_forecast()
    pass 

@then("there is tomorrow forecast")
def step_imple(context):
    context.weather_forecast_page = WeatherForecastPage(context.driver)
    context.weather_forecast_page.verify_tomorrow_weather()
