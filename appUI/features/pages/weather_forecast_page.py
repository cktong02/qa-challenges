import calendar
import datetime
from appium.webdriver.common.appiumby import AppiumBy
from .base_page import BasePage
from .locator import Locator

class WeatherForecastPage(BasePage):
    def verify_tomorrow_weather(self):
        today = datetime.date.today()
        tomorrow = today + datetime.timedelta(days = 1)
        tomorrow_weekday = calendar.day_name[tomorrow.weekday()]
        has_tomorrow_forecast = self.is_element_present(*Locator.text_weekday_forecast(tomorrow_weekday))
        assert has_tomorrow_forecast is True
