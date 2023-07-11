---
title: 'Top 10 reasons to upgrade your Angular Application'
excerpt: 'Angular is a popular JavaScript framework, used to create web, desktop and mobile applications. It is built and maintained by Google.

Angular 5 (codename pentagonal-donut) was released on November 1, 2017, a major release containing new features, and focusing on making your Angular application faster, smaller and easier to use.

Originally published at jsguru.io'
coverImage: '/assets/blog/10-reasons-to-update-angular-app/cover.png'
date: '2018-05-13T15:00:07.322Z'
author:
  name: Boris Joskic
  picture: '/assets/blog/authors/borisj.jpg'
ogImage:
  url: '/assets/blog/10-reasons-to-update-angular-app/cover.png'
---


Angular is a popular JavaScript framework, used to create web, desktop and mobile applications. It is built and maintained by Google.

Angular 5 (codename pentagonal-donut) was released on November 1, 2017, a major release containing new features, and focusing on making your Angular application faster, smaller and easier to use.

So, with all these new features, what are top 10 reasons you should upgrade to Angular 5?


### **1) Performance**

Angular 5 will make you application smaller and much faster. Angular CLI v1.5 comes with a build optimizer turned on by default and Angular compiler is improved to enable faster builds and rebuilds. Size of the bundle is reduced by removing AST classes, only changed files are emitted for incremental compilation and much more. Ahead of time compiler is turned on by default and it is much faster than in Angular 4\. It’s different from Just In Time compilation because it converts Angular Typescript into JavaScript code before the browser downloads and runs it. The Just In Time compiler was compiling application at runtime. Using AOT gives faster rendering, smaller download sizes and detects template errors earlier. This makes Angular 5 faster in development and production.


### **2) Progressive Web Apps**

A Progressive Web App (PWA) is a web application that uses modern web capabilities to deliver an app-like experience to users. It is an experience that combines the best of the web and mobile applications.

A Progressive Web App works for every user, regardless of their browser, it’s responsive, always up-to-date thanks to service workers, and if served via HTTPS, it’s safe as well, and all the while it feels like a real app!

Right now, the development of progressive web applications a complex process. One needs to take care during both development and deployment that neither caching nor the delivery of older versions is impaired.

This has changed with Angular 5\. The development of progressive web applications should be simplified so they can even be created by default.

With Angular-CLI, Angular has the ability to create configuration and code on its own. Essentially, this allows the creation of mobile web applications that have features of native mobile applications, like offline capability, push notifications and an application logo in the start menu of a particular platform.


### **3) Build Optimizer**

The Angular team focused on making Angular 5 faster, smaller and easier to use. In Angular 5, production builds created with the Angular CLI will now apply the build optimizer by default. The build optimizer is included in Angular CLI.

The build optimizer removes parts of your application that are not needed, and it removes Angular decorators from your application’s runtime code. Decorators are used by the compilers and are not needed at runtime and can be removed.

This reduces the size of your JavaScript bundles, and increases the boot speed of your application!


### **4) HttpClient**

Before version 4.3, @angular/http was used for making HTTP requests. HTTP is now deprecated and the HttpClient API from @angular/common/http package that shipped in version 4.3 is now recommended for use in all apps.

Some of the features include

● JSON is an assumed default and no longer needs to be explicitly parsed

● Interceptors allow middleware logic to be inserted into the pipeline

● Progress events for both request upload and response download.


### **5) New router lifecycle events**

Router has new lifecycle events, allowing you to track the cycle of the router from the start of running guards through to completion of activation. These events could be used for things such as showing a spinner on a specific router outlet when a child is updating or to measure performance of guards and/or resolvers.

This new lifecycle events are GuardsCheckStart, ChildActivationStart, ActivationStart, GuardsCheckEnd, ResolveStart, ResolveEnd, ActivationEnd, ChildActivationEnd.


### **6) CLI**

Starting with Angular CLI version 1.5, support for Angular 5 is added and the CLI generates v5 projects by default and build optimizer is also turned on. By default, the build-optimizer plugin will now be applied to your build if you are using Angular 5 and building in AOT.

Build command

```javascript
ng build --prod --build-optimizer
```

is now simplified to

```javascript
ng build --prod
```

Angular CLI will also warn you if you are using version of TypeScript which is not the recommended one for your Angular version. You can deactivate the warning (only if you believe in yourself and you know what you are doing) with

```javascript
ng set typescriptMismatch = false
```



### **7) Forms**

To improve performance, we can now specify when validators should be executed. Every time a value is changed, the validation will most likely be performed with every keystroke!

In Angular 5, forms have the ability to decide when the validity and value of a field or form are updated via on blur or on submit, instead on every input event. This can drastically improve performance!

To improve performance, you can now specify when validators should be executed in forms.


### **8) Pipes**

In previous versions, Angular has relied on the browser to provide date, number and currency formatting using browser i18n API’s. Users were seeing inconsistent results across browsers.

Angular 5 comes with new date, number and currency pipes.

Pipes rely on the [CLDR](http://cldr.unicode.org/) to provide locale support and configurations for any locales you want to support.

Here is a [document](https://docs.google.com/spreadsheets/d/12iygt-_cakNP1VO7MV9g4lq9NsxVWG4tSfc98HpHb0k/edit%23gid=0) that compares pipes between v4 and v5.

You are not ready for the new pipes? You can import DeprecatedI18NPipesModule after the CommonModule.


### **9) Incremental builds**

A lot of improvements have been made to the Angular compiler to make it faster, and it now enables faster builds and rebuilds. Ahead of time and incremental builds are possible when using _–aot_ with _ng serve_ command. This will probably be used by default in a future version of the Angular CLI.


### **10) Better Typescript and RxJS support**

RxJS version 5.5 introduces a new way of using RxJS called ‘lettable operators’. Any operator can now be imported from rxjs/operators. These new operators eliminate the side effects and the code splitting / tree shaking problems that existed with the previous method of importing operators. New Angular CLI will pull this version by default and will save considerably on the bundle size!

![](https://cdn-images-1.medium.com/max/800/0*wDkdwUhMM555aZ8J.png)


### Would you like to upgrade your application to Angular 5?

The Angular team built a [nice tool](https://angular-update-guide.firebaseapp.com/) to make upgrading as easy as possible or **send us a message** at [info@jsguru.io](mailto:info@jsguru.io).


### Before you go…

If you enjoyed reading this post please **share** it. You should check out our other publications, you might like them too! We write from time to time about software development, tips and tricks, and how to become a better developer and business person in general. Join us on the journey of constant improvement!

Follow us on [Facebook](https://www.facebook.com/jsguruio/), [Twitter](https://twitter.com/jsguru_software), [LinkedIn](https://www.linkedin.com/company/jsguru), [Medium](https://medium.com/jsguru) or [DEV.to](https://dev.to/jsguru_io).


_Originally published at_ [_jsguru.io_](https://jsguru.io/blog/Top-10-reasons-to-upgrade-to-Angular-5)_._
