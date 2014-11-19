'use strict';

describe('Service: codeService', function () {

  // load the service's module
  beforeEach(module('agroFairApp'));

  // instantiate service
  var codeService;
  beforeEach(inject(function (_codeService_) {
    codeService = _codeService_;
  }));

  it('should do something', function () {
    expect(!!codeService).toBe(true);
  });

});
