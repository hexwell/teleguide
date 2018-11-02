if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'teleguide'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'teleguide'.");
}
var teleguide = function (_, Kotlin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var Unit = Kotlin.kotlin.Unit;
  var coroutines = Kotlin.kotlin.coroutines;
  var Continuation = Kotlin.kotlin.coroutines.Continuation;
  var startCoroutine = Kotlin.kotlin.coroutines.startCoroutine_x18nsh$;
  var getCallableRef = Kotlin.getCallableRef;
  var throwUPAE = Kotlin.throwUPAE;
  var ensureNotNull = Kotlin.ensureNotNull;
  var throwCCE = Kotlin.throwCCE;
  var getPropertyCallableRef = Kotlin.getPropertyCallableRef;
  var toSet = Kotlin.kotlin.collections.toSet_7wnvza$;
  var intersect = Kotlin.kotlin.collections.intersect_q4559j$;
  var singleOrNull = Kotlin.kotlin.collections.singleOrNull_7wnvza$;
  var toString = Kotlin.toString;
  var toTypedArray = Kotlin.kotlin.collections.toTypedArray_964n91$;
  var Throwable = Error;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var mapOf = Kotlin.kotlin.collections.mapOf_x2b85n$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var EventListener = Kotlin.org.w3c.dom.events.EventListener_gbr1zf$;
  var round = Kotlin.kotlin.math.round_14dthe$;
  var numberToInt = Kotlin.numberToInt;
  var toIntArray = Kotlin.kotlin.collections.toIntArray_fx3nzu$;
  var equals = Kotlin.equals;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var toByte = Kotlin.toByte;
  var toByteArray = Kotlin.kotlin.collections.toByteArray_kdx1v$;
  function BluetoothScanFilters(services) {
    this.services = services;
  }
  BluetoothScanFilters.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BluetoothScanFilters',
    interfaces: []
  };
  function RequestDeviceOptions(filters) {
    this.filters = filters;
  }
  RequestDeviceOptions.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RequestDeviceOptions',
    interfaces: []
  };
  var GATTSERVERDISCONNECTED;
  var DEVICEORIENTATION;
  var CLICK;
  var SCROLL;
  var Result = Kotlin.kotlin.Result;
  function await$lambda$lambda(closure$cont) {
    return function (it) {
      closure$cont.resumeWith_tl1gpc$(new Result(it));
      return Unit;
    };
  }
  var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
  function await$lambda$lambda_0(closure$cont) {
    return function (it) {
      closure$cont.resumeWith_tl1gpc$(new Result(createFailure(it)));
      return Unit;
    };
  }
  function await$lambda(this$await) {
    return function (cont) {
      this$await.then(await$lambda$lambda(cont), await$lambda$lambda_0(cont));
      return Unit;
    };
  }
  var intercepted = Kotlin.kotlin.coroutines.intrinsics.intercepted_f9mg25$;
  var SafeContinuation_init = Kotlin.kotlin.coroutines.SafeContinuation_init_wj8d80$;
  function suspendCoroutine$lambda(closure$block) {
    return function (c) {
      var safe = SafeContinuation_init(intercepted(c));
      closure$block(safe);
      return safe.getOrThrow();
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
            this.result_0 = suspendCoroutine$lambda(await$lambda(this.local$$receiver))(this);
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
  function launch$ObjectLiteral() {
  }
  Object.defineProperty(launch$ObjectLiteral.prototype, 'context', {
    get: function () {
      return coroutines.EmptyCoroutineContext;
    }
  });
  launch$ObjectLiteral.prototype.resumeWith_tl1gpc$ = function (result) {
    var tmp$;
    if ((tmp$ = result.exceptionOrNull()) != null) {
      console.log('Coroutine failed: ' + tmp$);
    }
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
        $receiver.resumeWith_tl1gpc$(new Result(Unit));
        return Unit;
      }.bind(null, continuation)), closure$ms);
      return Unit;
    };
  }
  function suspendCoroutine$lambda_0(closure$block) {
    return function (c) {
      var safe = SafeContinuation_init(intercepted(c));
      closure$block(safe);
      return safe.getOrThrow();
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
            this.result_0 = suspendCoroutine$lambda_0(delay$lambda(this.local$ms))(this);
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
  function Device(log) {
    Device$Companion_getInstance();
    if (log === void 0)
      log = Device_init$lambda;
    this.log_0 = log;
    this.device_mn71w9$_0 = this.device_mn71w9$_0;
    this.characteristic_k0aghq$_0 = this.characteristic_k0aghq$_0;
    this.disconnectionListener_0 = EventListener(getCallableRef('onDisconnected', function ($receiver, event) {
      return $receiver.onDisconnected_0(event), Unit;
    }.bind(null, this)));
    this.connected_0 = false;
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
  Object.defineProperty(Device.prototype, 'name_8be2vx$', {
    get: function () {
      return this.device_0.name == null ? '' : ensureNotNull(this.device_0.name);
    }
  });
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
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
            var tmp$_0 = (Kotlin.isType(tmp$ = window.navigator, Navigator) ? tmp$ : throwCCE()).bluetooth;
            var $receiver = Device$Companion_getInstance().UUIDS_0.keys;
            var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
            var tmp$_1;
            tmp$_1 = $receiver.iterator();
            while (tmp$_1.hasNext()) {
              var item = tmp$_1.next();
              destination.add_11rb$([item]);
            }

            var destination_0 = ArrayList_init(collectionSizeOrDefault(destination, 10));
            var tmp$_2;
            tmp$_2 = destination.iterator();
            while (tmp$_2.hasNext()) {
              var item_0 = tmp$_2.next();
              destination_0.add_11rb$(new BluetoothScanFilters(item_0));
            }

            this.state_0 = 2;
            this.result_0 = await_0(tmp$_0.requestDevice(new RequestDeviceOptions(copyToArray(destination_0))), this);
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
    this.local$$receiver = void 0;
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
            var tmp$;
            this.state_0 = 2;
            this.result_0 = await_0(ensureNotNull(this.$this.device_0.gatt).connect(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (((tmp$ = this.$this.device_0.gatt) != null ? tmp$.connected : null) === true)
              this.$this.connected_0 = true;
            this.local$$receiver = ensureNotNull(this.$this.device_0.gatt);
            this.state_0 = 3;
            this.result_0 = await_0(this.local$$receiver.getPrimaryServices(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var $receiver = this.result_0;
            var transform = getPropertyCallableRef('uuid', 1, function ($receiver) {
              return $receiver.uuid;
            });
            var destination = ArrayList_init($receiver.length);
            var tmp$_0;
            for (tmp$_0 = 0; tmp$_0 !== $receiver.length; ++tmp$_0) {
              var item = $receiver[tmp$_0];
              destination.add_11rb$(transform(item));
            }

            this.state_0 = 4;
            this.result_0 = await_0(this.local$$receiver.getPrimaryService(singleOrNull(intersect(toSet(destination), Device$Companion_getInstance().UUIDS_0.keys))), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            var $receiver_0 = this.result_0;
            this.state_0 = 5;
            this.result_0 = await_0($receiver_0.getCharacteristic(Device$Companion_getInstance().UUIDS_0.get_11rb$($receiver_0.uuid)), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
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
  Device.prototype.connect_8be2vx$ = function (continuation_0, suspended) {
    var instance = new Coroutine$connect_8be2vx$(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$connect_8be2vx$($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$connect_8be2vx$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$connect_8be2vx$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$connect_8be2vx$.prototype.constructor = Coroutine$connect_8be2vx$;
  Coroutine$connect_8be2vx$.prototype.doResume = function () {
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
  Device.prototype.send_ma41of$ = function (data_0, continuation_0, suspended) {
    var instance = new Coroutine$send_ma41of$(this, data_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$send_ma41of$($this, data_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$data = data_0;
  }
  Coroutine$send_ma41of$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$send_ma41of$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$send_ma41of$.prototype.constructor = Coroutine$send_ma41of$;
  Coroutine$send_ma41of$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.$this.connected_0) {
              this.state_0 = 2;
              this.result_0 = await_0(this.$this.characteristic_0.writeValue(new Uint8Array(toTypedArray(this.local$data))), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 3;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
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
  Device.prototype.disconnect_8be2vx$ = function () {
    if (this.connected_0) {
      this.connected_0 = false;
      this.log_0("Disconnecting from '" + toString(this.device_0.name) + "'...");
      this.device_0.removeEventListener(GATTSERVERDISCONNECTED, this.disconnectionListener_0);
      ensureNotNull(this.device_0.gatt).disconnect();
      this.log_0("'" + toString(this.device_0.name) + "' disconnected");
    }
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
    this.connected_0 = false;
    launch(Device$onDisconnected$lambda(this));
  };
  function Device$Companion() {
    Device$Companion_instance = this;
    this.RECONNECTION_ATTEMPTS_0 = 5;
    this.RECONNECTION_BASE_DELAY_0 = 1000;
    this.UUIDS_0 = mapOf(to('0000dfb0-0000-1000-8000-00805f9b34fb', '0000dfb1-0000-1000-8000-00805f9b34fb'));
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
  function Device_init$lambda(it) {
    console.log(it);
    return Unit;
  }
  Device.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Device',
    interfaces: []
  };
  function Orientation() {
    Orientation$Companion_getInstance();
    this.raw_0 = new Float64Array(3);
    this.reference_0 = new Float64Array(3);
    window.addEventListener(DEVICEORIENTATION, Orientation_init$lambda(this));
  }
  Object.defineProperty(Orientation.prototype, 'orientation_8be2vx$', {
    get: function () {
      var $receiver = this.raw_0;
      var destination = ArrayList_init($receiver.length);
      var tmp$, tmp$_0;
      var index = 0;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var item = $receiver[tmp$];
        destination.add_11rb$(item - this.reference_0[tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0]);
      }
      var destination_0 = ArrayList_init(collectionSizeOrDefault(destination, 10));
      var tmp$_1;
      tmp$_1 = destination.iterator();
      while (tmp$_1.hasNext()) {
        var item_0 = tmp$_1.next();
        destination_0.add_11rb$(item_0 * Orientation$Companion_getInstance().MULTIPLIER_0);
      }
      var destination_1 = ArrayList_init(collectionSizeOrDefault(destination_0, 10));
      var tmp$_2;
      tmp$_2 = destination_0.iterator();
      while (tmp$_2.hasNext()) {
        var item_1 = tmp$_2.next();
        destination_1.add_11rb$(round(item_1));
      }
      var destination_2 = ArrayList_init(collectionSizeOrDefault(destination_1, 10));
      var tmp$_3;
      tmp$_3 = destination_1.iterator();
      while (tmp$_3.hasNext()) {
        var item_2 = tmp$_3.next();
        destination_2.add_11rb$(numberToInt(item_2));
      }
      var relativeOrientation = toIntArray(destination_2);
      relativeOrientation[1] = relativeOrientation[1] * -1 | 0;
      return relativeOrientation;
    }
  });
  Orientation.prototype.calibrate_8be2vx$ = function () {
    this.reference_0 = this.raw_0.slice();
  };
  function Orientation$Companion() {
    Orientation$Companion_instance = this;
    this.MULTIPLIER_0 = 0.25;
  }
  Orientation$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Orientation$Companion_instance = null;
  function Orientation$Companion_getInstance() {
    if (Orientation$Companion_instance === null) {
      new Orientation$Companion();
    }
    return Orientation$Companion_instance;
  }
  function Orientation_init$lambda(this$Orientation) {
    return function (it) {
      var tmp$;
      Kotlin.isType(tmp$ = it, DeviceOrientationEvent) ? tmp$ : throwCCE();
      this$Orientation.raw_0[0] = ensureNotNull(it.alpha);
      this$Orientation.raw_0[1] = ensureNotNull(it.beta);
      this$Orientation.raw_0[2] = ensureNotNull(it.gamma);
      return Unit;
    };
  }
  Orientation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Orientation',
    interfaces: []
  };
  var DEFAULT_DEVICE_NAME;
  var deviceNameLabel;
  var connectButton;
  var disconnectButton;
  var terminalContainer;
  var channelSelect;
  var calibrateButton;
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
  function main$lambda(it) {
    console.log(it);
    logToTerminal(it.toString());
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda(closure$device_0, closure$orientation_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$main$lambda$lambda$lambda$lambda(closure$device_0, closure$orientation_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$main$lambda$lambda$lambda$lambda(closure$device_0, closure$orientation_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 5;
    this.local$closure$device = closure$device_0;
    this.local$closure$orientation = closure$orientation_0;
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
            var tmp$ = this.local$closure$device;
            var $receiver = Kotlin.primitiveArrayConcat(this.local$closure$orientation.orientation_8be2vx$, new Int32Array([toInt(channelSelect.value)]));
            var destination = ArrayList_init($receiver.length);
            var tmp$_0;
            for (tmp$_0 = 0; tmp$_0 !== $receiver.length; ++tmp$_0) {
              var item = $receiver[tmp$_0];
              destination.add_11rb$(toByte(item));
            }

            this.state_0 = 1;
            this.result_0 = tmp$.send_ma41of$(toByteArray(destination), this);
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
  function main$lambda$lambda$lambda(closure$device, closure$orientation) {
    return function () {
      launch(main$lambda$lambda$lambda$lambda(closure$device, closure$orientation));
      return Unit;
    };
  }
  function main$lambda$lambda(closure$device_0, closure$orientation_0, closure$sendingInterval_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$main$lambda$lambda(closure$device_0, closure$orientation_0, closure$sendingInterval_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$main$lambda$lambda(closure$device_0, closure$orientation_0, closure$sendingInterval_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.local$closure$device = closure$device_0;
    this.local$closure$orientation = closure$orientation_0;
    this.local$closure$sendingInterval = closure$sendingInterval_0;
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
            this.result_0 = this.local$closure$device.connect_8be2vx$(this);
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
            if (equals(this.local$closure$device.name_8be2vx$, ''))
              tmp$ = DEFAULT_DEVICE_NAME;
            else
              tmp$ = this.local$closure$device.name_8be2vx$;
            tmp$_0.textContent = tmp$;
            return this.local$closure$sendingInterval.v = window.setInterval(main$lambda$lambda$lambda(this.local$closure$device, this.local$closure$orientation), 500), Unit;
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
  function main$lambda_0(closure$wakeLock, closure$device, closure$orientation, closure$sendingInterval) {
    return function (it) {
      closure$wakeLock.enable();
      closure$device.disconnect_8be2vx$();
      launch(main$lambda$lambda(closure$device, closure$orientation, closure$sendingInterval));
      return Unit;
    };
  }
  function main$lambda_1(closure$sendingInterval, closure$device, closure$wakeLock) {
    return function (it) {
      window.clearInterval(closure$sendingInterval.v);
      closure$device.disconnect_8be2vx$();
      deviceNameLabel.textContent = DEFAULT_DEVICE_NAME;
      closure$wakeLock.disable();
      return Unit;
    };
  }
  function main$lambda_2(it) {
    var scrollTopOffset = terminalContainer.scrollHeight - terminalContainer.offsetHeight - terminalAutoScrollingLimit | 0;
    isTerminalAutoscrolling = scrollTopOffset < terminalContainer.scrollTop;
    return Unit;
  }
  function main$lambda_3(closure$orientation) {
    return function (it) {
      closure$orientation.calibrate_8be2vx$();
      return Unit;
    };
  }
  function main(args) {
    var wakeLock = new NoSleep();
    var device = new Device(main$lambda);
    var orientation = new Orientation();
    var sendingInterval = {v: -1};
    connectButton.addEventListener(CLICK, main$lambda_0(wakeLock, device, orientation, sendingInterval));
    disconnectButton.addEventListener(CLICK, main$lambda_1(sendingInterval, device, wakeLock));
    terminalContainer.addEventListener(SCROLL, main$lambda_2);
    calibrateButton.addEventListener(CLICK, main$lambda_3(orientation));
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
  Object.defineProperty(package$externals, 'CLICK', {
    get: function () {
      return CLICK;
    }
  });
  Object.defineProperty(package$externals, 'SCROLL', {
    get: function () {
      return SCROLL;
    }
  });
  package$externals.await_t11jrl$ = await_0;
  var package$helpers = package$teleguide.helpers || (package$teleguide.helpers = {});
  package$helpers.launch_66u77s$ = launch;
  package$helpers.delay_kcn2v3$ = delay;
  Object.defineProperty(Device, 'Companion', {
    get: Device$Companion_getInstance
  });
  package$helpers.Device = Device;
  Object.defineProperty(Orientation, 'Companion', {
    get: Orientation$Companion_getInstance
  });
  package$helpers.Orientation = Orientation;
  GATTSERVERDISCONNECTED = 'gattserverdisconnected';
  DEVICEORIENTATION = 'deviceorientation';
  CLICK = 'click';
  SCROLL = 'scroll';
  DEFAULT_DEVICE_NAME = 'Teleguide';
  var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
  deviceNameLabel = Kotlin.isType(tmp$ = document.getElementById('device-name'), HTMLDivElement) ? tmp$ : throwCCE();
  connectButton = Kotlin.isType(tmp$_0 = document.getElementById('connect'), HTMLButtonElement) ? tmp$_0 : throwCCE();
  disconnectButton = Kotlin.isType(tmp$_1 = document.getElementById('disconnect'), HTMLButtonElement) ? tmp$_1 : throwCCE();
  terminalContainer = Kotlin.isType(tmp$_2 = document.getElementById('terminal'), HTMLDivElement) ? tmp$_2 : throwCCE();
  channelSelect = Kotlin.isType(tmp$_3 = document.getElementById('channel'), HTMLSelectElement) ? tmp$_3 : throwCCE();
  calibrateButton = Kotlin.isType(tmp$_4 = document.getElementById('calibrate'), HTMLButtonElement) ? tmp$_4 : throwCCE();
  terminalAutoScrollingLimit = terminalContainer.offsetHeight / 2 | 0;
  isTerminalAutoscrolling = true;
  main([]);
  Kotlin.defineModule('teleguide', _);
  return _;
}(typeof teleguide === 'undefined' ? {} : teleguide, kotlin);
