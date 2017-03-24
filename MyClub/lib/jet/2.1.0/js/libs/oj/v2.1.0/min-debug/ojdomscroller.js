/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery"], function($oj$$41$$, $$$$38$$) {
  $oj$$41$$.$DomScroller$ = function $$oj$$41$$$$DomScroller$$($element$$225$$, $datasource$$1$$, $options$$344$$) {
    $options$$344$$ = $options$$344$$ || {};
    this.$_data$ = $datasource$$1$$;
    this.$_element$ = $$$$38$$($element$$225$$)[0];
    this.$_fetchSize$ = $options$$344$$.fetchSize;
    this.$_fetchSize$ = 0 < this.$_fetchSize$ ? this.$_fetchSize$ : 25;
    this.$_maxCount$ = $options$$344$$.maxCount;
    this.$_maxCount$ = 0 < this.$_maxCount$ ? this.$_maxCount$ : 500;
    this.$_rowCount$ = 0;
    this.$_successCallback$ = $options$$344$$.success;
    this.$_errorCallback$ = $options$$344$$.error;
    this.$_registerDataSourceEventListeners$();
    this.$_fetchTrigger$ = $options$$344$$.fetchTrigger;
    if (null == this.$_fetchTrigger$ || isNaN(this.$_fetchTrigger$)) {
      this.$_fetchTrigger$ = 0;
    }
    this.$_initialScrollTop$ = this.$_element$.scrollTop;
    $$$$38$$(this.$_getScrollEventElement$()).on("scroll.domscroller", function() {
      var $maxScrollTop$$2_target$$133$$ = this.$_element$, $scrollTop$$18$$ = this.$_getScrollTop$($maxScrollTop$$2_target$$133$$), $maxScrollTop$$2_target$$133$$ = $maxScrollTop$$2_target$$133$$.scrollHeight - $maxScrollTop$$2_target$$133$$.clientHeight;
      0 < $maxScrollTop$$2_target$$133$$ && this.$_handleScrollerScrollTop$($scrollTop$$18$$, $maxScrollTop$$2_target$$133$$);
    }.bind(this));
  };
  $oj$$41$$.$DomScroller$.prototype.$_getScrollEventElement$ = function $$oj$$41$$$$DomScroller$$$$_getScrollEventElement$$() {
    return this.$_element$ == document.body || this.$_element$ == document.documentElement ? window : this.$_element$;
  };
  $oj$$41$$.$DomScroller$.$calculateOffsetTop$ = function $$oj$$41$$$$DomScroller$$$calculateOffsetTop$$($ancestor$$2$$, $element$$226$$) {
    for (var $offset$$28$$ = 0, $current$$22$$ = $element$$226$$;$current$$22$$ && $current$$22$$ != $ancestor$$2$$ && $$$$38$$.contains($ancestor$$2$$, $current$$22$$);) {
      $offset$$28$$ += $current$$22$$.offsetTop, $current$$22$$ = $current$$22$$.offsetParent;
    }
    return $offset$$28$$;
  };
  $oj$$41$$.$DomScroller$.prototype.$_getScrollTop$ = function $$oj$$41$$$$DomScroller$$$$_getScrollTop$$($element$$227$$) {
    var $scrollTop$$19$$ = this.$_fetchTrigger$;
    return $element$$227$$ == document.documentElement && (void 0 === this.$_useBodyScrollTop$ && (this.$_useBodyScrollTop$ = this.$_initialScrollTop$ == $element$$227$$.scrollTop ? !0 : !1), this.$_useBodyScrollTop$) ? $scrollTop$$19$$ + document.body.scrollTop : $scrollTop$$19$$ + $element$$227$$.scrollTop;
  };
  $oj$$41$$.$DomScroller$.prototype.destroy = function $$oj$$41$$$$DomScroller$$$destroy$() {
    this.$_unregisterDataSourceEventListeners$();
    $$$$38$$(this.$_getScrollEventElement$()).off("scroll.domscroller");
  };
  $oj$$41$$.$Object$.$exportPrototypeSymbol$("DomScroller.prototype.destroy", {destroy:$oj$$41$$.$DomScroller$.prototype.destroy});
  $oj$$41$$.$DomScroller$.prototype.checkViewport = function $$oj$$41$$$$DomScroller$$$checkViewport$() {
    return 0 < this.$_element$.clientHeight && !this.$_checkOverflow$() ? this.$_fetchMoreRows$() : Promise.resolve(null);
  };
  $oj$$41$$.$Object$.$exportPrototypeSymbol$("DomScroller.prototype.checkViewport", {checkViewport:$oj$$41$$.$DomScroller$.prototype.checkViewport});
  $oj$$41$$.$DomScroller$.prototype.$_handleScrollerScrollTop$ = function $$oj$$41$$$$DomScroller$$$$_handleScrollerScrollTop$$($scrollTop$$20$$, $maxScrollTop$$3$$) {
    if (1 >= $maxScrollTop$$3$$ - $scrollTop$$20$$) {
      var $self$$180$$ = this;
      this.$_fetchMoreRows$().then(function($result$$63$$) {
        null != $self$$180$$.$_successCallback$ && $self$$180$$.$_successCallback$($result$$63$$);
      }, this.$_errorCallback$);
    }
  };
  $oj$$41$$.$DomScroller$.prototype.$_checkOverflow$ = function $$oj$$41$$$$DomScroller$$$$_checkOverflow$$() {
    var $element$$228$$ = this.$_element$;
    return $element$$228$$.scrollHeight > $element$$228$$.clientHeight + this.$_fetchTrigger$ ? !0 : !1;
  };
  $oj$$41$$.$DomScroller$.prototype.$_fetchMoreRows$ = function $$oj$$41$$$$DomScroller$$$$_fetchMoreRows$$() {
    if (this.$_fetchPromise$) {
      return this.$_fetchPromise$;
    }
    var $remainingCount$$ = this.$_maxCount$ - this.$_rowCount$;
    if (0 < $remainingCount$$) {
      var $pageSize$$7$$ = this.$_fetchSize$, $self$$181$$ = this;
      $remainingCount$$ < this.$_fetchSize$ && ($pageSize$$7$$ = $remainingCount$$);
      var $fetchPromise$$2$$ = this.$_fetchNext$({pageSize:$pageSize$$7$$});
      return this.$_fetchPromise$ = new Promise(function($resolve$$57$$) {
        $fetchPromise$$2$$.then(function($result$$64$$) {
          $self$$181$$.$_fetchPromise$ = null;
          null != $result$$64$$ && ($self$$181$$.$_rowCount$ = $result$$64$$.data.length + $result$$64$$.startIndex, $remainingCount$$ < $self$$181$$.$_fetchSize$ && ($result$$64$$.maxCount = $self$$181$$.$_maxCount$, $result$$64$$.maxCountLimit = !0));
          $resolve$$57$$($result$$64$$);
        });
      });
    }
    return Promise.resolve({maxCount:this.$_maxCount$, maxCountLimit:!0});
  };
  $oj$$41$$.$DomScroller$.prototype.$_fetchNext$ = function $$oj$$41$$$$DomScroller$$$$_fetchNext$$($options$$345$$) {
    $options$$345$$ = $options$$345$$ || {};
    var $pageSize$$8$$ = $options$$345$$.pageSize;
    this.$_currentStartIndex$ = this.$_currentStartIndex$ ? this.$_currentStartIndex$ + $pageSize$$8$$ : $pageSize$$8$$;
    if (-1 == this.$_data$.totalSize() || this.$_data$.totalSize() > this.$_currentStartIndex$) {
      var $self$$182$$ = this;
      return new Promise(function($resolve$$58$$, $reject$$54$$) {
        $self$$182$$.$_data$.fetch({startIndex:$self$$182$$.$_currentStartIndex$, pageSize:$pageSize$$8$$}).then(function($result$$65$$) {
          $resolve$$58$$($result$$65$$);
        }, function() {
          $reject$$54$$(null);
        });
      });
    }
    return Promise.resolve();
  };
  $oj$$41$$.$DomScroller$.prototype.$_handleDataReset$ = function $$oj$$41$$$$DomScroller$$$$_handleDataReset$$() {
    this.$_currentStartIndex$ = null;
    this.$_rowCount$ = 0;
  };
  $oj$$41$$.$DomScroller$.prototype.$_handleDataSync$ = function $$oj$$41$$$$DomScroller$$$$_handleDataSync$$($event$$611$$) {
    this.$_currentStartIndex$ = $event$$611$$.startIndex;
    this.$_rowCount$ = $event$$611$$.data.length + this.$_currentStartIndex$;
  };
  $oj$$41$$.$DomScroller$.prototype.$_registerDataSourceEventListeners$ = function $$oj$$41$$$$DomScroller$$$$_registerDataSourceEventListeners$$() {
    var $data$$152$$ = this.$_data$;
    if (null != $data$$152$$) {
      this.$_unregisterDataSourceEventListeners$();
      this.$_dataSourceEventHandlers$ = [];
      this.$_dataSourceEventHandlers$.push({eventType:$oj$$41$$.$TableDataSource$.$EventType$.SORT, eventHandler:this.$_handleDataReset$.bind(this)});
      this.$_dataSourceEventHandlers$.push({eventType:$oj$$41$$.$TableDataSource$.$EventType$.REFRESH, eventHandler:this.$_handleDataReset$.bind(this)});
      this.$_dataSourceEventHandlers$.push({eventType:$oj$$41$$.$TableDataSource$.$EventType$.RESET, eventHandler:this.$_handleDataReset$.bind(this)});
      this.$_dataSourceEventHandlers$.push({eventType:$oj$$41$$.$TableDataSource$.$EventType$.SYNC, eventHandler:this.$_handleDataSync$.bind(this)});
      var $i$$407$$, $ev$$2$$;
      for ($i$$407$$ = 0;$i$$407$$ < this.$_dataSourceEventHandlers$.length;$i$$407$$++) {
        ($ev$$2$$ = $data$$152$$.on(this.$_dataSourceEventHandlers$[$i$$407$$].eventType, this.$_dataSourceEventHandlers$[$i$$407$$].eventHandler)) && (this.$_dataSourceEventHandlers$[$i$$407$$].eventHandler = $ev$$2$$);
      }
    }
  };
  $oj$$41$$.$DomScroller$.prototype.$_unregisterDataSourceEventListeners$ = function $$oj$$41$$$$DomScroller$$$$_unregisterDataSourceEventListeners$$() {
    var $data$$153$$ = this.$_data$;
    if (null != this.$_dataSourceEventHandlers$ && null != $data$$153$$) {
      var $i$$408$$;
      for ($i$$408$$ = 0;$i$$408$$ < this.$_dataSourceEventHandlers$.length;$i$$408$$++) {
        $data$$153$$.off(this.$_dataSourceEventHandlers$[$i$$408$$].eventType, this.$_dataSourceEventHandlers$[$i$$408$$].eventHandler);
      }
    }
  };
});
