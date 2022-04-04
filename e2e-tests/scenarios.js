'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /upload when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/upload");
  });


  describe('upload', function() {

    beforeEach(function() {
      browser.get('index.html#!/upload');
    });


    it('should render upload when user navigates to /upload', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for upload/);
    });

  });


  describe('display', function() {

    beforeEach(function() {
      browser.get('index.html#!/display');
    });


    it('should render display when user navigates to /display', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for display/);
    });

  });
});
