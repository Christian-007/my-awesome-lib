# **My Awesome Lib**

This project is created using `@angular/cli@8.3.26` to showcase an Angular Library that uses secondary entry point configurations.  To use this repo please read the following guidelines.

## Build and package the library

To build the library use the command:

```shell
ng build my-awesome-lib
```

Then, to package the library without publishing to `npm`:

```shell
npm pack dist/my-awesome-lib 
```

## Use the packed library in an Angular App

> Before installing the library in an Angular App, ensure the Angular App has the same Angular version as this repo, which is `Angular v8.x`. Otherwise, some errors will occur because there is a difference in the Angular version.

To start using the library, we can install the packed library, which is done in the previous step, by running:

```
npm i ../path-to-lib/dist/my-awesome-lib
```

Now, you should be able to consume the library!
