import { TestBed } from '@angular/core/testing';

import { GlobalResponseHandlerInterceptorService } from './global-response-handler-interceptor.service';

describe('GlobalResponseHandlerInterceptorService', () => {
  let service: GlobalResponseHandlerInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalResponseHandlerInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
