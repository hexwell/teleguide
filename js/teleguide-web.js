if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'teleguide-web'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'teleguide-web'.");
}
this['teleguide-web'] = function (_, Kotlin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var experimental = Kotlin.kotlin.coroutines.experimental;
  var Unit = Kotlin.kotlin.Unit;
  var Continuation = Kotlin.kotlin.coroutines.experimental.Continuation;
  var startCoroutine = Kotlin.kotlin.coroutines.experimental.startCoroutine_xtwlez$;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.experimental.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.experimental.CoroutineImpl;
  var getCallableRef = Kotlin.getCallableRef;
  var throwUPAE = Kotlin.throwUPAE;
  var ensureNotNull = Kotlin.ensureNotNull;
  var throwCCE = Kotlin.throwCCE;
  var toString = Kotlin.toString;
  var chunked = Kotlin.kotlin.text.chunked_94bcnn$;
  var Throwable = Error;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var EventListener = Kotlin.org.w3c.dom.events.EventListener_gbr1zf$;
  var numberToInt = Kotlin.numberToInt;
  var equals = Kotlin.equals;
  function BluetoothScanFilters(services) {
    this.services = services;
  }
  BluetoothScanFilters.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BluetoothScanFilters',
    interfaces: []
  };
  function RequestDeviceOptions(filters) {
    if (filters === void 0) {
      filters = [];
    }
    this.filters = filters;
  }
  RequestDeviceOptions.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RequestDeviceOptions',
    interfaces: []
  };
  var GATTSERVERDISCONNECTED;
  var DEVICEORIENTATION;
  function launch$ObjectLiteral() {
  }
  Object.defineProperty(launch$ObjectLiteral.prototype, 'context', {
    get: function () {
      return experimental.EmptyCoroutineContext;
    }
  });
  launch$ObjectLiteral.prototype.resume_11rb$ = function (value) {
  };
  launch$ObjectLiteral.prototype.resumeWithException_tcv7n7$ = function (exception) {
    console.log('Coroutine failed: ' + exception);
  };
  launch$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Continuation]
  };
  function launch(block) {
    startCoroutine(block, new launch$ObjectLiteral());
  }
  function delay$lambda(closure$ms) {
    return function (continuation) {
      window.setTimeout(getCallableRef('resume', function ($receiver, value) {
        return $receiver.resume_11rb$(Unit), Unit;
      }.bind(null, continuation)), closure$ms);
      return Unit;
    };
  }
  var SafeContinuation_init = Kotlin.kotlin.coroutines.experimental.SafeContinuation_init_n4f53e$;
  function suspendCoroutine$lambda(closure$block) {
    return function (c) {
      var safe = SafeContinuation_init(c);
      closure$block(safe);
      return safe.getResult();
    };
  }
  function suspendCoroutineOrReturn$lambda(closure$block) {
    return function (cont) {
      return closure$block(cont.facade);
    };
  }
  function delay(ms_0, continuation_0, suspended) {
    var instance = new Coroutine$delay(ms_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$delay(ms_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$ms = ms_0;
  }
  Coroutine$delay.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$delay.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$delay.prototype.constructor = Coroutine$delay;
  Coroutine$delay.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = suspendCoroutineOrReturn$lambda(suspendCoroutine$lambda(delay$lambda(this.local$ms)))(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.result_0;
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function await$lambda$lambda(closure$cont) {
    return function (it) {
      closure$cont.resume_11rb$(it);
      return Unit;
    };
  }
  function await$lambda$lambda_0(closure$cont) {
    return function (it) {
      closure$cont.resumeWithException_tcv7n7$(it);
      return Unit;
    };
  }
  function await$lambda(this$await) {
    return function (cont) {
      this$await.then(await$lambda$lambda(cont), await$lambda$lambda_0(cont));
      return Unit;
    };
  }
  function suspendCoroutine$lambda_0(closure$block) {
    return function (c) {
      var safe = SafeContinuation_init(c);
      closure$block(safe);
      return safe.getResult();
    };
  }
  function suspendCoroutineOrReturn$lambda_0(closure$block) {
    return function (cont) {
      return closure$block(cont.facade);
    };
  }
  function await_0($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$await($receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$await($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$await.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$await.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$await.prototype.constructor = Coroutine$await;
  Coroutine$await.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = suspendCoroutineOrReturn$lambda_0(suspendCoroutine$lambda_0(await$lambda(this.local$$receiver)))(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.result_0;
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function Device() {
    Device$Companion_getInstance();
    this.device_mn71w9$_0 = this.device_mn71w9$_0;
    this.characteristic_k0aghq$_0 = this.characteristic_k0aghq$_0;
    this.disconnectionListener_0 = EventListener(getCallableRef('onDisconnected', function ($receiver, event) {
      return $receiver.onDisconnected_0(event), Unit;
    }.bind(null, this)));
    this.logger = Device$logger$lambda;
  }
  Object.defineProperty(Device.prototype, 'device_0', {
    get: function () {
      if (this.device_mn71w9$_0 == null)
        return throwUPAE('device');
      return this.device_mn71w9$_0;
    },
    set: function (device) {
      this.device_mn71w9$_0 = device;
    }
  });
  Object.defineProperty(Device.prototype, 'characteristic_0', {
    get: function () {
      if (this.characteristic_k0aghq$_0 == null)
        return throwUPAE('characteristic');
      return this.characteristic_k0aghq$_0;
    },
    set: function (characteristic) {
      this.characteristic_k0aghq$_0 = characteristic;
    }
  });
  Object.defineProperty(Device.prototype, 'name', {
    get: function () {
      return this.device_0.name == null ? '' : ensureNotNull(this.device_0.name);
    }
  });
  Device.prototype.log_0 = function (o) {
    this.logger(o);
  };
  Device.prototype.request_0 = function (continuation_0, suspended) {
    var instance = new Coroutine$request_0(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$request_0($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$request_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$request_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$request_0.prototype.constructor = Coroutine$request_0;
  Coroutine$request_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.$this.log_0('Requesting device...');
            this.state_0 = 2;
            this.result_0 = await_0((Kotlin.isType(tmp$ = window.navigator, Navigator) ? tmp$ : throwCCE()).bluetooth.requestDevice(new RequestDeviceOptions([new BluetoothScanFilters([57264])])), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.$this.device_0 = this.result_0;
            this.$this.device_0.addEventListener(GATTSERVERDISCONNECTED, this.$this.disconnectionListener_0);
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  Device.prototype.innerConnect_0 = function (continuation_0, suspended) {
    var instance = new Coroutine$innerConnect_0(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$innerConnect_0($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$innerConnect_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$innerConnect_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$innerConnect_0.prototype.constructor = Coroutine$innerConnect_0;
  Coroutine$innerConnect_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = await_0(ensureNotNull(this.$this.device_0.gatt).connect(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = await_0(ensureNotNull(this.$this.device_0.gatt).getPrimaryService(57264), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var service = this.result_0;
            this.state_0 = 4;
            this.result_0 = await_0(service.getCharacteristic(57265), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.$this.characteristic_0 = this.result_0;
            this.$this.log_0("'" + toString(this.$this.device_0.name) + "' connected");
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  Device.prototype.connect = function (continuation_0, suspended) {
    var instance = new Coroutine$connect(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$connect($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$connect.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$connect.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$connect.prototype.constructor = Coroutine$connect;
  Coroutine$connect.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.request_0(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.$this.innerConnect_0(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  Device.prototype.send_61zpoe$ = function (data_0, continuation_0, suspended) {
    var instance = new Coroutine$send_61zpoe$(this, data_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$send_61zpoe$($this, data_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$textEncoder = void 0;
    this.local$data = data_0;
  }
  Coroutine$send_61zpoe$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$send_61zpoe$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$send_61zpoe$.prototype.constructor = Coroutine$send_61zpoe$;
  Coroutine$send_61zpoe$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$textEncoder = new TextEncoder();
            this.local$tmp$ = chunked(this.local$data, 20).iterator();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 4;
              continue;
            }

            var chunk = this.local$tmp$.next();
            this.state_0 = 3;
            this.result_0 = await_0(this.$this.characteristic_0.writeValue(this.local$textEncoder.encode(chunk)), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 2;
            continue;
          case 4:
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  Device.prototype.disconnect = function () {
    this.log_0("Disconnecting from '" + toString(this.device_0.name) + "'...");
    this.device_0.removeEventListener(GATTSERVERDISCONNECTED, this.disconnectionListener_0);
    ensureNotNull(this.device_0.gatt).disconnect();
    this.log_0("'" + toString(this.device_0.name) + "' disconnected");
  };
  function Device$onDisconnected$lambda(this$Device_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$Device$onDisconnected$lambda(this$Device_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Device$onDisconnected$lambda(this$Device_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 8;
    this.local$this$Device = this$Device_0;
    this.local$attempt = void 0;
  }
  Coroutine$Device$onDisconnected$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Device$onDisconnected$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Device$onDisconnected$lambda.prototype.constructor = Coroutine$Device$onDisconnected$lambda;
  Coroutine$Device$onDisconnected$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$this$Device.log_0("'" + toString(this.local$this$Device.device_0.name) + "' disconnected");
            this.local$attempt = 1;
            this.state_0 = 1;
            continue;
          case 1:
            if (this.local$attempt > 5) {
              this.state_0 = 9;
              continue;
            }

            this.local$this$Device.log_0('[Attempt ' + this.local$attempt + '] Trying to reconnect...');
            this.exceptionState_0 = 3;
            this.state_0 = 2;
            this.result_0 = this.local$this$Device.innerConnect_0(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.exceptionState_0 = 8;
            this.state_0 = 4;
            continue;
          case 3:
            this.exceptionState_0 = 8;
            var e = this.exception_0;
            if (Kotlin.isType(e, Throwable)) {
              this.local$this$Device.log_0(e);
            }
             else
              throw e;
            this.state_0 = 4;
            continue;
          case 4:
            if (ensureNotNull(this.local$this$Device.device_0.gatt).connected) {
              return;
            }
             else {
              this.state_0 = 5;
              continue;
            }

          case 5:
            this.state_0 = 6;
            this.result_0 = delay(1000 * this.local$attempt | 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            this.state_0 = 7;
            continue;
          case 7:
            this.local$attempt++;
            this.state_0 = 1;
            continue;
          case 8:
            throw this.exception_0;
          case 9:
            return Unit;
          default:this.state_0 = 8;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 8) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  Device.prototype.onDisconnected_0 = function (event) {
    launch(Device$onDisconnected$lambda(this));
  };
  function Device$Companion() {
    Device$Companion_instance = this;
    this.RECONNECTION_ATTEMPTS_0 = 5;
    this.RECONNECTION_BASE_DELAY_0 = 1000;
    this.SERVICE_UUID_0 = 57264;
    this.CHARACTERISTIC_UUID_0 = 57265;
    this.MAX_CHARACTERISTIC_VALUE_LENGHT_0 = 20;
  }
  Device$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Device$Companion_instance = null;
  function Device$Companion_getInstance() {
    if (Device$Companion_instance === null) {
      new Device$Companion();
    }
    return Device$Companion_instance;
  }
  function Device$logger$lambda(it) {
    console.log(it);
    return Unit;
  }
  Device.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Device',
    interfaces: []
  };
  var deviceNameLabel;
  var connectButton;
  var disconnectButton;
  var terminalContainer;
  var defaultDeviceName;
  var terminalAutoScrollingLimit;
  var isTerminalAutoscrolling;
  function scrollElement(element) {
    var scrollTop = element.scrollHeight - element.offsetHeight | 0;
    if (scrollTop > 0)
      element.scrollTop = scrollTop;
  }
  function logToTerminal(message, type) {
    if (type === void 0)
      type = '';
    terminalContainer.insertAdjacentHTML('beforeend', '<div class=' + '"' + type + '"' + '>' + message + '<\/div>');
    if (isTerminalAutoscrolling)
      scrollElement(terminalContainer);
  }
  var device;
  var multiplier;
  var baseBeta;
  var baseGamma;
  var rawBeta;
  var rawGamma;
  function get_beta() {
    return numberToInt(-(rawBeta - baseBeta) * multiplier);
  }
  function get_gamma() {
    return numberToInt((rawGamma - baseGamma) * multiplier);
  }
  var interval;
  function main$lambda(it) {
    console.log(it);
    logToTerminal(it.toString());
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda(continuation_0, suspended) {
    var instance = new Coroutine$main$lambda$lambda$lambda$lambda(continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$main$lambda$lambda$lambda$lambda(continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 5;
  }
  Coroutine$main$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$main$lambda$lambda$lambda$lambda;
  Coroutine$main$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = device.send_61zpoe$('0,' + get_beta() + ',' + get_gamma() + '@0;', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            return this.result_0;
          case 2:
            this.exceptionState_0 = 5;
            var e = this.exception_0;
            if (Kotlin.isType(e, Throwable)) {
              return logToTerminal(e.toString()), Unit;
            }
             else {
              throw e;
            }

          case 3:
            this.state_0 = 4;
            continue;
          case 4:
            return;
          case 5:
            throw this.exception_0;
          default:this.state_0 = 5;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 5) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function main$lambda$lambda$lambda() {
    launch(main$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function main$lambda$lambda(continuation_0, suspended) {
    var instance = new Coroutine$main$lambda$lambda(continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$main$lambda$lambda(continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
  }
  Coroutine$main$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main$lambda$lambda.prototype.constructor = Coroutine$main$lambda$lambda;
  Coroutine$main$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0;
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = device.connect(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.exceptionState_0 = 4;
            this.state_0 = 3;
            continue;
          case 2:
            this.exceptionState_0 = 4;
            var e = this.exception_0;
            if (Kotlin.isType(e, Throwable)) {
              logToTerminal(e.toString());
            }
             else
              throw e;
            this.state_0 = 3;
            continue;
          case 3:
            tmp$_0 = deviceNameLabel;
            if (equals(device.name, ''))
              tmp$ = defaultDeviceName;
            else
              tmp$ = device.name;
            tmp$_0.textContent = tmp$;
            return interval = window.setInterval(main$lambda$lambda$lambda, 500), Unit;
          case 4:
            throw this.exception_0;
          default:this.state_0 = 4;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 4) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function main$lambda_0(it) {
    launch(main$lambda$lambda);
    return Unit;
  }
  function main$lambda_1(it) {
    window.clearInterval(interval);
    device.disconnect();
    deviceNameLabel.textContent = defaultDeviceName;
    return Unit;
  }
  function main$lambda_2(it) {
    var scrollTopOffset = terminalContainer.scrollHeight - terminalContainer.offsetHeight - terminalAutoScrollingLimit | 0;
    isTerminalAutoscrolling = scrollTopOffset < terminalContainer.scrollTop;
    return Unit;
  }
  function main$lambda_3(it) {
    var tmp$;
    Kotlin.isType(tmp$ = it, DeviceOrientationEvent) ? tmp$ : throwCCE();
    rawBeta = ensureNotNull(it.beta);
    rawGamma = ensureNotNull(it.gamma);
    return Unit;
  }
  function main(args) {
    device.logger = main$lambda;
    connectButton.addEventListener('click', main$lambda_0);
    disconnectButton.addEventListener('click', main$lambda_1);
    terminalContainer.addEventListener('scroll', main$lambda_2);
    window.addEventListener(DEVICEORIENTATION, main$lambda_3);
  }
  var package$net = _.net || (_.net = {});
  var package$hexwell = package$net.hexwell || (package$net.hexwell = {});
  var package$teleguide = package$hexwell.teleguide || (package$hexwell.teleguide = {});
  var package$externals = package$teleguide.externals || (package$teleguide.externals = {});
  package$externals.BluetoothScanFilters = BluetoothScanFilters;
  package$externals.RequestDeviceOptions = RequestDeviceOptions;
  Object.defineProperty(package$externals, 'GATTSERVERDISCONNECTED', {
    get: function () {
      return GATTSERVERDISCONNECTED;
    }
  });
  Object.defineProperty(package$externals, 'DEVICEORIENTATION', {
    get: function () {
      return DEVICEORIENTATION;
    }
  });
  var package$helpers = package$teleguide.helpers || (package$teleguide.helpers = {});
  package$helpers.launch_g2bo5h$ = launch;
  package$helpers.delay_za3lpa$ = delay;
  package$helpers.await_t11jrl$ = await_0;
  Object.defineProperty(Device, 'Companion', {
    get: Device$Companion_getInstance
  });
  package$helpers.Device = Device;
  Object.defineProperty(package$teleguide, 'deviceNameLabel', {
    get: function () {
      return deviceNameLabel;
    }
  });
  Object.defineProperty(package$teleguide, 'connectButton', {
    get: function () {
      return connectButton;
    }
  });
  Object.defineProperty(package$teleguide, 'disconnectButton', {
    get: function () {
      return disconnectButton;
    }
  });
  Object.defineProperty(package$teleguide, 'terminalContainer', {
    get: function () {
      return terminalContainer;
    }
  });
  Object.defineProperty(package$teleguide, 'defaultDeviceName', {
    get: function () {
      return defaultDeviceName;
    }
  });
  Object.defineProperty(package$teleguide, 'terminalAutoScrollingLimit', {
    get: function () {
      return terminalAutoScrollingLimit;
    }
  });
  Object.defineProperty(package$teleguide, 'isTerminalAutoscrolling', {
    get: function () {
      return isTerminalAutoscrolling;
    },
    set: function (value) {
      isTerminalAutoscrolling = value;
    }
  });
  package$teleguide.scrollElement_lt8gi4$ = scrollElement;
  package$teleguide.logToTerminal_puj7f4$ = logToTerminal;
  Object.defineProperty(package$teleguide, 'device', {
    get: function () {
      return device;
    }
  });
  Object.defineProperty(package$teleguide, 'multiplier', {
    get: function () {
      return multiplier;
    }
  });
  Object.defineProperty(package$teleguide, 'baseBeta', {
    get: function () {
      return baseBeta;
    }
  });
  Object.defineProperty(package$teleguide, 'baseGamma', {
    get: function () {
      return baseGamma;
    }
  });
  Object.defineProperty(package$teleguide, 'rawBeta', {
    get: function () {
      return rawBeta;
    },
    set: function (value) {
      rawBeta = value;
    }
  });
  Object.defineProperty(package$teleguide, 'rawGamma', {
    get: function () {
      return rawGamma;
    },
    set: function (value) {
      rawGamma = value;
    }
  });
  Object.defineProperty(package$teleguide, 'beta', {
    get: get_beta
  });
  Object.defineProperty(package$teleguide, 'gamma', {
    get: get_gamma
  });
  Object.defineProperty(package$teleguide, 'interval', {
    get: function () {
      return interval;
    },
    set: function (value) {
      interval = value;
    }
  });
  package$teleguide.main_kand9s$ = main;
  GATTSERVERDISCONNECTED = 'gattserverdisconnected';
  DEVICEORIENTATION = 'deviceorientation';
  var tmp$, tmp$_0, tmp$_1, tmp$_2;
  deviceNameLabel = Kotlin.isType(tmp$ = document.getElementById('device-name'), HTMLDivElement) ? tmp$ : throwCCE();
  connectButton = Kotlin.isType(tmp$_0 = document.getElementById('connect'), HTMLButtonElement) ? tmp$_0 : throwCCE();
  disconnectButton = Kotlin.isType(tmp$_1 = document.getElementById('disconnect'), HTMLButtonElement) ? tmp$_1 : throwCCE();
  terminalContainer = Kotlin.isType(tmp$_2 = document.getElementById('terminal'), HTMLDivElement) ? tmp$_2 : throwCCE();
  defaultDeviceName = 'Teleguide';
  terminalAutoScrollingLimit = terminalContainer.offsetHeight / 2 | 0;
  isTerminalAutoscrolling = true;
  device = new Device();
  multiplier = 0.25;
  baseBeta = 8.2;
  baseGamma = 2.5;
  rawBeta = 0.0;
  rawGamma = 0.0;
  interval = -1;
  main([]);
  Kotlin.defineModule('teleguide-web', _);
  return _;
}(typeof this['teleguide-web'] === 'undefined' ? {} : this['teleguide-web'], kotlin);
