# iPath

Mobile application connecting cancer patients with depression treatments. iPath has been developed with patients from St. Johnsbury, clinicians and researchers at Dartmouth College.

## Designs
<!-- [Screenshot description] -->
[Link to the project Figma (22F)](https://www.figma.com/file/wXYF5AW6CtJZ4o5zG0eUzR/NCI-iPath-22F?node-id=1720%3A91603&t=AViQb3JBcfawfJB3-0)

<!-- [2-4 screenshots from the app] -->

### Dashboard & Survey Page

<img src="https://user-images.githubusercontent.com/64368452/204871797-ae9ca0db-5fed-4901-973c-20e69f4ecbec.PNG" width="250"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img src="https://user-images.githubusercontent.com/64368452/204872115-c77a1374-ee23-4879-8a98-06f4cb228d1a.PNG" width="250">

### The Learn Page  &  Treatment Filtering and Sorting
<img src="https://user-images.githubusercontent.com/64368452/204871910-7671c09c-a5ef-4917-8631-ffdfbe9f9f6d.PNG" width="250"> &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<img src="https://user-images.githubusercontent.com/64368452/204871961-99d46c53-b187-49ef-af18-a32c64959148.PNG" width="250">
<br>

## Architecture
### Tech Stack 🥞
The app is built using React-Native, Expo (v0.39.0.0), and Redux. The database used is Google Cloud Firestore and images are stored using FirebaseStorage.

Features:
* Dashboard with carousel and countdown until next survey
* PHQ9 Survey
* Calculating, explaining and storing survey scores
* Learning about treatments flow
* Filtering and sorting treatments based on criteria
* Login, Logout functionality
* Push notifications for survey reminder every 2 weeks


#### Packages 📦
* [react-native-swiper](https://github.com/leecade/react-native-swiper)
* [react-native-select-dropdown](https://www.npmjs.com/package/react-native-select-dropdown)
* [cloud firestore offline persistence](https://firebase.google.com/docs/firestore/manage-data/enable-offline)

### Data Models
<!-- [Brief escription of typical data models.] -->
The app is composed of navigators (see the `navigation` directory), which hold together screens (see the `screens` directory), which use components (see the `components` directory). Redux is used for both API calls and storing data locally.
<!-- [Detailed description should be moved to the repo's Wiki page] -->

### File Structure
Screens are located in the `screens` directory, navigators in `navigation` and components in `components` (generally sorted by flow). Images, fonts, and built-in text are in `assets`. Redux actions and reducers each live in their own appropriately-named directories. Firebase/ Cloud Firestore functions are in `services/datastore.js`.
```
.
├── App.js
├── README.md
├── app.json
├── src
│   ├── actions
│   │   ├── index.js
│   ├── assets
│   │   ├── fonts
│   │   ├── icons  | contains all svg files used in app
│   ├── components
│   │   ├── homepage
│   │   ├── profile
│   │   ├── treatment
│   │   │   ├── treatment-item.js   
│   │   │   ├── treatment-overview.js   
│   │   │   ├── treatment-compare.js   
│   │   ├── survey
│   ├── images
│   ├── navigation
│   │   ├── AuthenticatedUserProvider.js
│   │   ├── HomeNavigation.js
│   │   ├── RootNavigator.js
│   │   ├── MainTabBar.js
│   ├── reducers
│   │   ├── index.js
│   │   ├── user-reducer.js
│   │   ├── treatments-reducer.js
│   ├── screens
│   │   ├── firstPage.js
│   │   ├── loginPage.js
│   │   ├── homePage.js
│   │   ├── profilePage.js
│   │   ├── surveyPage.js
│   │   ├── treatmentPage.js
│   │   ├── treatmentFlowPage.js
│   ├── services
│   │   ├── datastore.js
├── babel.config.js
├── package.json
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
1. Clone repo by running `git clone https://github.com/dali-lab/ipath-frontend.git` in your terminal and `cd ipath-frontend`
2. Run `yarn` to install all of the necessary packages
  * If you don't have yarn installed, you can install it by following the instructions [here](https://classic.yarnpkg.com/en/docs/install/#mac-stable)
3. Make sure you have the expo-cli installed. You can install it by running `npm install expo-cli --global`
4. To start the app locally, run `expo start`. 
  * Type `i` to run the app on an iOS simulator. You will need to have Xcode installed for this to work. To install Xcode, go [here](https://apps.apple.com/us/app/xcode/id497799835?mt=12)
  * Type `a` to run the ap on an Android simulator. 

## Deployment 🚀

<!-- [Where is the app deployed? i.e. Expo, Surge, TestFlight etc.] -->
The app is currently deployed on [Expo](https://expo.io/@greentrace/ipath-frontend) and is pending review on TestFlight.

<!-- [What are the steps to re-deploy the project with any new changes?] -->
To redeploy the app on Expo, run `expo publish` in main project directory. The Expo build can be viewed in the [`@ipath` Expo account](https://expo.io/@greentrace/). To redeploy the app on TestFlight, run `expo build:ios`; if that doesn't work, follow [these directions](https://codeburst.io/how-to-launch-an-expo-managed-app-to-beta-testers-in-2020-61b5121089c8) (which work as of 4 December 2020). The TestFlight build can be viewed via DALI's developer account on [AppStore Connect](https://appstoreconnect.apple.com/apps/1543118465/appstore/platform/ios/resolutioncenter?m=).


## Authors

### 22F
* Eleanor Zwart '22, PM
* Nitya Agarwala '25, developer
* Burke Jaeger '23, developer
* Cecily Craighead '22, designer
* Rashad Brown-Mitchell '23, designer


### 20X
* Justin Chong '24, PM
* Samiha Datta '23, development mentor
* Camden Hao '23, developer
* Nitya Agarwala '25, developer
* Joy Miao '22, design mentor
* Eleanor Zwart '22, designer
* Rashad Brown-Mitchell '23, designer
* Cecily Craighead '22, designer

## Acknowledgments 🤝
We would like to thank everyone at DALI for all of their unwavering support.

---
Designed and developed by [@DALI Lab](https://github.com/dali-lab)

### Firestore Database fields documentation
There are 4 collections in the firestore database: users, survey-res, clicks and treatments <br/>
Below we document treatments to help in adding new treatment providers as they are discovered. <br/> <br/>
**Treatments**: A document in this collection should have the following fields:
* _blurb_: String, one line tagline for treatment
* _cost_: String, description of insurance or out of pocket cost policies
* _costNumber_: integer, 1, 2 or 3, describes number of dollar signs displayed after treatments
* _desc_: String, one to two line description of provider
* _fullimg_: String, reference to wide image from Firebase Storage, example format: "gs://ipath-dev-368120.appspot.com/treatment-photos/page ePsychiatry.jpg"
* _img_: String, reference to small square image from Firebase Storage, example format "gs://ipath-dev-368120.appspot.com/treatment-photos/ePsychiatry.jpg"
* _insurance_: boolean, true if accepts insurance, false if not
* _link_: String, link to provider website or phone number
* _linkType_: String, "phone" if the link is a phone number, null otherwise
* _place_: String, can have one of 3 values, "in-person", "telehealth" or "in-person/telehealth"
* _quickAccess_: boolean, true if treatment has a quick access option, false if not
* _side-eff_: String, 2-3 line description of side effects
* _solo_: number, 0 if treatment is self-guided, 1 if treatment is consult with a physician
* _time_": String, How long the treatment takes to work
* _type_: String, options are "Medication/Therapy", "Medication", "Therapy" and "Watchful Waiting"
* _wait_": String, 1 line on wait time for treatment
* _waitOrder_: number, how long is takes to access relative to other treatments, used when sorting by wait time
---
