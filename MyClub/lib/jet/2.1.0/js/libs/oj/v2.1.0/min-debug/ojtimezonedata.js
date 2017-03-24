/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "ojL10n!ojtranslations/nls/timezoneData", "ojs/ojvalidation"], function($oj$$48$$, $ojtd$$1$$) {
  $oj$$48$$.$TimezoneData$ = {};
  $oj$$48$$.$TimezoneData$.$__mergeIntoLocaleElements$ = function $$oj$$48$$$$TimezoneData$$$__mergeIntoLocaleElements$$($timezoneBundle$$) {
    var $localeElements$$48$$ = $oj$$48$$.$LocaleData$.$__getBundle$();
    $oj$$48$$.$CollectionUtils$.$copyInto$($localeElements$$48$$, $timezoneBundle$$, void 0, !0);
  };
  $oj$$48$$.$TimezoneData$.$__getBundleNames$ = function $$oj$$48$$$$TimezoneData$$$__getBundleNames$$() {
    return $oj$$48$$.$TimezoneData$.$_bundleNames$;
  };
  $oj$$48$$.$TimezoneData$.$__registerBundleName$ = function $$oj$$48$$$$TimezoneData$$$__registerBundleName$$() {
    $oj$$48$$.$TimezoneData$.$_bundleNames$.push("/timezoneData");
  };
  $oj$$48$$.$TimezoneData$.$_bundleNames$ = [];
  $oj$$48$$.$TimezoneData$.$__registerBundleName$();
  $oj$$48$$.$TimezoneData$.$__mergeIntoLocaleElements$($ojtd$$1$$ || {});
});
