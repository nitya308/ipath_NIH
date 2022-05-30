#  🛣 iPath

# CHANGE EVERYTHING BELOW HERE

The COVID-19 risk assessment and behavior change mobile application

## Designs
<!-- [Screenshot description] -->
[Link to the project Figma (20X)](https://www.figma.com/file/prSrkozmGIbla2fL07xjUL/CoRisk-20X?node-id=1%3A39)
<br>
[Link to the project Figma (20F)](https://www.figma.com/file/8L63Jqa0ZDzPkp2grUhlH0/CoRisk-20F?node-id=656%3A510)

<!-- [2-4 screenshots from the app] -->

![Risk Page](./assets/readme/risk_page.PNG)
<br>
<em>The risk page</em>
<br>
![Map Page](./assets/readme/map_page.PNG)
<br>
<em>The map page</em>
<br>
![Streaks Screen](./assets/readme/map_page.PNG)
<br>
<em>The streaks screen</em>


## Architecture
### Tech Stack 🥞
The app is built using React-Native, Expo (v0.39.0.0), and Redux.

Features:
* Anonymous two-word token login
* Risk assessment
* Streaks visualization
* Stats page
* Self-report input flow
* Map page with search functionality
* Review flow

[Backend repository](https://github.com/dali-lab/corisk-api)

#### Packages 📦
* [react-native-swiper](https://github.com/leecade/react-native-swiper)
* [react-native-calendars](https://github.com/wix/react-native-calendars)

### Style
<!-- [Describe notable code style conventions] -->

We are using [CS52's React-Native ESLint Configuration](https://gist.github.com/timofei7/c8df5cc69f44127afb48f5d1dffb6c84)

### Data Models
<!-- [Brief escription of typical data models.] -->
The app is composed of navigators (see the `navigation` directory), which hold together screens (see the `screens` directory), which use components (see the `components` directory). Redux is used for both API calls and storing data locally.
<!-- [Detailed description should be moved to the repo's Wiki page] -->

### File Structure
Screens are located in the `screens` directory, navigators in `navigation`, components in `components` (generally sorted by flow), common stylesheets in `styles`, and common functions in `utils`. Images, fonts, and built-in text are in `assets`. Redux actions and reducers each live in their own appropriately-named directories.
```
.
├── App.js
├── README.md
├── actions
│   ├── SearchActions.js
│   ├── index.js
│   ├── inputActions.js
│   ├── placeActions.js
│   ├── reviewActions.js
│   └── userActions.js
├── app.json
├── assets
│   ├── fonts
│   │   ├── futura-bold.otf
│   │   ├── futura-medium.otf
│   │   └── futura-normal.ttf
│   ├── images
│   │   ├── about_scale.png
│   │   ├── add_button.png
│   │   ├── dali.png
│   │   ├── high_risk.png
│   │   ├── icon.png
│   │   ├── logo.png
│   │   ├── low_risk.png
│   │   ├── moderate_risk.png
│   │   ├── negative_input_background.png
│   │   ├── positive_input_background.png
│   │   ├── review.png
│   │   ├── review_masks.png
│   │   ├── review_sanitization.png
│   │   ├── review_social_distancing.png
│   │   ├── slider_thumbimage.png
│   │   ├── slider_track.png
│   │   ├── splash.png
│   │   ├── streak_button.png
│   │   ├── streak_congrats.png
│   │   └── streak_flame.png
│   ├── readme
│   │   ├── map_page.PNG
│   │   ├── risk_page.PNG
│   │   ├── streaks_screen.PNG
│   │   ├── team_20f.png
│   │   └── team_20x.png
│   └── text
│       └── risk.json
├── babel.config.js
├── components
│   ├── input
│   │   ├── CloseButton.js
│   │   ├── CloseRewards.js
│   │   ├── InputCall.js
│   │   ├── InputContacts.js
│   │   ├── InputSubmit.js
│   │   ├── InputSymptoms.js
│   │   └── NextButton.js
│   ├── lib
│   │   ├── CustomSwiper.js
│   │   ├── InputButtons.js
│   │   ├── NextButton.js
│   │   ├── Pill.js
│   │   ├── RoundButton.js
│   │   └── TopBar.js
│   ├── map
│   │   ├── LocationTracking.js
│   │   ├── Map.js
│   │   ├── MapHeader.js
│   │   ├── PlaceSummary.js
│   │   ├── ReviewInfo.js
│   │   ├── ReviewInput.js
│   │   ├── SearchBar.js
│   │   └── SmallProgressCircle.js
│   ├── risk
│   │   └── ProgressCircle.js
│   ├── stats
│   │   └── TimeSwitch.js
│   └── user
│       ├── signin.js
│       ├── signup-modal.js
│       └── signup.js
├── navigation
│   ├── HorizontalNavigation.js
│   ├── InputTab.js
│   ├── MainNavigation.js
│   ├── MapTab.js
│   ├── ReviewTab.js
│   ├── RiskTab.js
│   └── TabBar.js
├── package.json
├── reducers
│   ├── SearchReducer.js
│   ├── index.js
│   ├── input-reducer.js
│   ├── places-reducer.js
│   ├── reviews-reducer.js
│   └── user-reducer.js
├── screens
│   ├── InputCongrats.js
│   ├── InputStatus.js
│   ├── InputSwiper.js
│   ├── MapScreen.js
│   ├── PlaceReviews.js
│   ├── ReviewScore.js
│   ├── ReviewScreen.js
│   ├── RiskAbout.js
│   ├── RiskScreen.js
│   ├── SearchDetail.js
│   ├── SearchPage.js
│   ├── StatScreen.js
│   └── StreakScreen.js
├── styles
│   ├── base_styles.js
│   ├── input_form_styles.js
│   └── places_styles.js
├── utils
│   └── levels.js
├── web-build
│   └── register-service-worker.js
├── yarn-error.log
└── yarn.lock
```
<!-- ```
├──[Top Level]/                  # root directory
|  └──[File]                     # brief description of file
|  └──[Folder1]/                 # brief description of folder 
|  └──[Folder2]/                 # brief description of folder
[etc...]
``` -->

For more detailed documentation on our file structure and specific functions in the code, feel free to check the project files themselves.

## Setup Steps 
1. Clone repo by running `git clone https://github.com/dali-lab/corisk.git` in your terminal and `cd corisk`
2. Run `yarn` to install all of the necessary packages
  * If you don't have yarn installed, you can install it by following the instructions [here](https://classic.yarnpkg.com/en/docs/install/#mac-stable)
3. Make sure you have the expo-cli installed. You can install it by running `npm install expo-cli --global`
4. To start the app locally, run `expo start`. 
  * Type `i` to run the app on an iOS simulator. You will need to have Xcode installed for this to work. To install Xcode, go [here](https://apps.apple.com/us/app/xcode/id497799835?mt=12)
  * Type `a` to run the ap on an Android simulator. 

## Deployment 🚀

<!-- [Where is the app deployed? i.e. Expo, Surge, TestFlight etc.] -->
The app is currently deployed on [Expo](https://expo.io/@greentrace/corisk) and is pending review on TestFlight.

<!-- [What are the steps to re-deploy the project with any new changes?] -->
To redeploy the app on Expo, run `expo publish` in main project directory. The Expo build can be viewed in the [`@greentrace` Expo account](https://expo.io/@greentrace/). To redeploy the app on TestFlight, run `expo build:ios`; if that doesn't work, follow [these directions](https://codeburst.io/how-to-launch-an-expo-managed-app-to-beta-testers-in-2020-61b5121089c8) (which work as of 4 December 2020). The TestFlight build can be viewed via DALI's developer account on [AppStore Connect](https://appstoreconnect.apple.com/apps/1543118465/appstore/platform/ios/resolutioncenter?m=).

<!-- [How does one get access to the deployed project?] -->

## Authors

### 20F
![The 20F Team](./assets/readme/team_20f.png)
* Samiha Datta '23, developer
* Alejandro Lopez '23, developer
* Hershel Wathore '21, developer
* Lauren Segal '21, designer
* Lylia Eng '20, designer
* Zoë Chen '23, designer
* Sonal Butala '21, PM

### 20X
![The 20X Team](./assets/readme/team_20x.png)
* Samiha Datta '23, developer
* Alejandro Lopez '23, developer
* Sofia Stanescu-Bellu '20, developer
* Lauren Segal '21, designer
* Lylia Eng '20, designer
* Hershel Wathore '21, PM

## Acknowledgments 🤝
We would like to thank the CS52 GreenTrace team for their help and dedication to this project and everyone at DALI for all of their unwavering support.

---
Designed and developed by [@DALI Lab](https://github.com/dali-lab)
