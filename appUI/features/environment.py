from appium import webdriver

def before_scenario(context, scenario):
    desired_capabilities = dict(
        platformName = "Android",
        platformVersion = "12",
        automationName = "uiautomator2",
        deviceName = "Android Emulator",
        app = "<path of apk file>",
        autoGrantPermissions = "true"
    )
    context.driver = webdriver.Remote("http://localhost:4723/wd/hub", desired_capabilities)
    context.driver.implicitly_wait(10)

def after_scenario(context, scenario):
    context.driver.quit()