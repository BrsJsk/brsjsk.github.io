---
title: ' Improve Your Ionic App Performance '
excerpt: 'Ionic allows developers to build mobile applications using web technologies and allows access to native features such as file storage, camera, flashlight and many more. The first version was released in 2013 and built using Apache Cordova and AngularJS but recent versions, while still using Apache Cordova, are using Angular instead of AngularJS.

Originally published at jsguru.io'
coverImage: '/assets/blog/improve-your-ionic-app-performance/cover.png'
date: '2019-02-07T16:30:07.322Z'
author:
  name: Boris Joskic
  picture: '/assets/blog/authors/borisj.jpg'
ogImage:
  url: '/assets/blog/improve-your-ionic-app-performance/cover.png'
---


Ionic allows developers to build mobile applications using web technologies and allows access to native features such as file storage, camera, flashlight and many more. The first version was released in 2013 and built using Apache Cordova and AngularJS but recent versions, while still using Apache Cordova, are using Angular instead of AngularJS.

The most recent version of Ionic, version 4, includes performance improvements but in my opinion, it’s still having a tough time competing with the performance of native apps, or even React Native.


### **Make a production build**
This might be an obvious one. While developing and testing, we usually build debug versions of the app. How many times have you build an apk and after installing you realized it’s a debug apk? I’ve done it... a couple of times.


The default build command will generate a debug apk which does not have optimized code.

```ionic cordova build android --prod --release```
command will do the trick. It will generate a production-ready apk with minified and optimized code.


Consider this first tip more like a reminder..



### **Add a Service Worker**

Adding a Service Worker to an Ionic app has its benefits. One of them is that it can cache your static assets so your app can load faster. Not only can it cache your app’s static assets, but it can also cache some data from the API? That probably has some use.


Ionic has built-in support for service workers and adding it is pretty easy.

If you are interested, you can get more information in their documentation.
![](https://delivery.eusi.cloud/api/v1/f1a4305c-e431-4668-ae4c-02f78c656a41/media/s3/1549549262275_190206-18-2-Cache.png)


### **Native Page Transitions**

By default, when switching to a different page, Ionic will use CSS animations to switch between views. This works fine mostly, but you may notice lags sometimes on devices with lower specs and also it’s not very customizable.

To solve this problem, you should switch to Native Page Transitions which uses native hardware device acceleration to animate transitions.

From my experience, performance is improved and the app feels much more native.

It’s supported on Android, iOS and Windows Mobile and you can start using it pretty quickly.


Regarding the customization, you can change the swipe direction, duration, delay in Android and iOS and more.


You can get more information in their [documentation](https://ionicframework.com/docs/native/native-page-transitions/).


### **Use Virtual Scroll and Infinite Scroll**

If you are working with a list, you are probably using the Ionic list component which is completely fine and will offer native UI depending on the platform.

However, if you have a large list you may notice some sluggishness. To get rid of that, you can start using Virtual Scroll and Infinite Scroll.


Infinite Scroll is just an Ionic component with the infinite scroll logic. It will call a certain action when user reaches the end of the list. It’s great for pagination as you can load a certain number of items, and when needed load more and append it to the original list. It also offers customization of the loading indicator where you can change the text and spinner.


Virtual scroll will take full list of the array, but only render items that are currently visible which can greatly improve performance. As the user scrolls, views are reused but are filled with different data depending of the row.


When should you use Virtual Scroll?

When you have a somewhat larger amount of data but do not need the Infinite scroll option(eg. all data is loaded in one API call), you can use it and it will greatly benefit you!


### **Conclusion**

Great performance does not come by default in Hybrid apps no matter which starter kit you use. Before trying any performance optimization tricks, do not forget to optimize your own code, remove unused imports and CSS and optimize your images! Even the small stuff can make a difference.


### Before you go…

If you enjoyed reading this post please **share** it. You should check out our other publications, you might like them too! We write from time to time about software development, tips and tricks, and how to become a better developer and business person in general. Join us on the journey of constant improvement!

Follow us on [Facebook](https://www.facebook.com/jsguruio/), [Twitter](https://twitter.com/jsguru_software), [LinkedIn](https://www.linkedin.com/company/jsguru), [Medium](https://medium.com/jsguru) or [DEV.to](https://dev.to/jsguru_io).


_Originally published at_ [_jsguru.io_](https://jsguru.io/blog/improve-your-ionic-app-performance)_._