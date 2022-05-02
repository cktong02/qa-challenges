from appium.webdriver.common.appiumby import AppiumBy

class Locator():
    btn_agree_t_and_c = (AppiumBy.ID, "hko.MyObservatory_v1_0:id/btn_agree")
    btn_agree_access_to_location = (AppiumBy.ID, "android:id/button1")
    btn_friendly_reminder_skip = (AppiumBy.ID, "hko.MyObservatory_v1_0:id/btn_friendly_reminder_skip")
    hamburger_menu = (AppiumBy.ACCESSIBILITY_ID, "Navigate up")
    tab_9_day_forecast = "new UiScrollable(new UiSelector()).scrollIntoView(text(\"9-Day Forecast\"))"
    text_weekday_forecast = lambda weekday: (AppiumBy.XPATH, f"//android.widget.TextView[@content-desc=\"{weekday}\"]")
