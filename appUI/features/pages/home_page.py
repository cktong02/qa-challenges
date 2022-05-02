from appium.webdriver.common.appiumby import AppiumBy
from tenacity import retry, stop_after_attempt
from .base_page import BasePage
from .locator import Locator

class HomePage(BasePage):   
    def init_app(self):
        self.driver.find_element(*Locator.btn_agree_t_and_c).click()
        self.driver.find_element(*Locator.btn_agree_t_and_c).click()
        self.driver.find_element(*Locator.btn_agree_access_to_location).click()
        self.driver.find_element(*Locator.btn_friendly_reminder_skip).click()

    def open_menu(self):
        self.driver.find_element(*Locator.hamburger_menu).click()
        
    @retry(stop = stop_after_attempt(3))
    def open_9_day_forecast(self):
        # http://appium.io/docs/en/writing-running-appium/tutorial/swipe/android-simple/
        self.driver.find_element_by_android_uiautomator(Locator.tab_9_day_forecast).click()
