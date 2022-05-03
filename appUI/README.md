# App UI Test
> A mobile app UI test against MyObservatory Android app
 
## Setup

### Pre-requisite
- Install Python3
- Install Java, Appium, Appium Server & Android Studio
	- Set up Android test device e.g. virtual device on emulator
	- https://github.com/clarabez/appium-en
	- https://www.swtestacademy.com/how-to-install-appium-on-mac/
- Install Python packages at working directory
```
$ pip3 install -r requirements.txt
```


## Test execution

### Modify config
In `./features/environment.py`, modify:
 - `desired_capabilities.platformVersion`: Android version of test device
 - `desired_capabilities.app`: absolute file path of Android app .apk (refer to `./MyObservatory.apk`)
- WebDriver remote URL path: see path in Appium Server, `http://localhost:4723/wd/hub` in default

### Turn on Android device & start Appium Server

### Run tests
```
$ behave
```
App would be installed & UI test would be run in Android virtual device
- Note: Scrolling to 9-day forecast tab occasionally fails, please re-run the test in case of element not found error


## Test design
Tech stack: Python with Behave BDD style framework

### Test cases
- BDD feature spec in `./features/forecast.feature`
- Step definitions in `./features/steps/forecast_steps.py`
- Page objects in `./features/pages`