This repo demos slight differences in negative margins between Android and iOS in Nativescript version 5.1.

# No negative margins
Android:
![AndroidIndex](./screenshots/android-no-neg.png)

iOS:
![iOSIndex](./screenshots/ios-no-neg.png)

# Negative Margin on Parent Gridlayout
Notice that on iOS, the bottom buttons are shifted down instead of being centered like they are without any negative top margin, and that the top orange stack (with height 100) should be hidden. In NS version 4.2 on iOS, everything shifted upward as expected (as shown below).

Android:
![AndroidNegTop](./screenshots/android-neg-top.png)

iOS (v5.1):

![iOSNegTop5.1](./screenshots/ios-neg-top.png)

iOS (v4.2):

![iOSNegTop4.2](./screenshots/ios-neg-top-v4.2.png)


# Negative Margin on Middle (Blue) Stacklayout
This has the same result on both android and iOS.

Android:
![AndroidIndex](./screenshots/android-neg-mid.png)

iOS:

![iOSIndex](./screenshots/ios-neg-mid.png)
