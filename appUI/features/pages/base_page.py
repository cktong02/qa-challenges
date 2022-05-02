from selenium.common.exceptions import NoSuchElementException

class BasePage:
    def __init__(self, driver):
        self.driver = driver

    def is_element_present(self, by, value):
        try:
            self.driver.find_element(by, value)
        except NoSuchElementException as e:
            return False
        return True
