/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "knockout", "promise"], function($oj$$23$$, $ko$$4$$) {
  $oj$$23$$.$ModuleBinding$ = {};
  $oj$$23$$.$ModuleBinding$.$defaults$ = {viewPath:"text!views/", viewSuffix:".html", modelPath:"viewModels/", initializeMethod:"initialize", disposeMethod:"dispose", activatedHandler:"handleActivated", attachedHandler:"handleAttached", detachedHandler:"handleDetached", bindingsAppliedHandler:"handleBindingsApplied", deactivatedHandler:"handleDeactivated", transitionCompletedHandler:"handleTransitionCompleted"};
  $goog$exportPath_$$("ModuleBinding.defaults", $oj$$23$$.$ModuleBinding$.$defaults$, $oj$$23$$);
  (function() {
    function $_animate$$($actx$$, $animation$$1$$, $element$$184$$, $oldDomNodes$$, $insertAndActivateFunc$$, $removeOldDomNodes$$, $transitionComplete$$) {
      var $canAnimateFunc_settings$$4$$ = $animation$$1$$.canAnimate;
      if (null == $canAnimateFunc_settings$$4$$ || $canAnimateFunc_settings$$4$$.call($animation$$1$$, $actx$$)) {
        var $newViewParent$$, $oldViewParent$$;
        if ($canAnimateFunc_settings$$4$$ = $animation$$1$$.prepareAnimation.call($animation$$1$$, $actx$$)) {
          $newViewParent$$ = $canAnimateFunc_settings$$4$$.newViewParent, $oldViewParent$$ = $canAnimateFunc_settings$$4$$.oldViewParent;
        }
        var $targetElement$$ = $newViewParent$$ || $element$$184$$;
        $oldViewParent$$ && $oldViewParent$$ !== $element$$184$$ ? $_moveDomNodes$$($oldDomNodes$$, $oldViewParent$$) : $targetElement$$ === $element$$184$$ && $removeOldDomNodes$$(null);
        $targetElement$$ !== $element$$184$$ && $ko$$4$$.virtualElements.setDomNodeChildren($targetElement$$, []);
        $insertAndActivateFunc$$($targetElement$$);
        var $newDomNodes$$ = Array.prototype.slice.call($targetElement$$.childNodes), $viewInserted$$ = !1, $insertNewView$$ = function $$insertNewView$$$() {
          $viewInserted$$ || ($viewInserted$$ = !0, $element$$184$$ !== $targetElement$$ && $_insertNodes$$($element$$184$$, $newDomNodes$$));
        }, $removeOldView$$ = $removeOldDomNodes$$.bind(null, $oldViewParent$$);
        $actx$$.newViewParent = $newViewParent$$;
        $actx$$.oldViewParent = $oldViewParent$$;
        $actx$$.oldViewNodes = $oldDomNodes$$;
        $actx$$.removeOldView = $removeOldView$$;
        $actx$$.insertNewView = $insertNewView$$;
        var $postAnimation$$ = function $$postAnimation$$$() {
          $removeOldView$$();
          $insertNewView$$();
          $transitionComplete$$();
        };
        return $animation$$1$$.animate.call($animation$$1$$, $actx$$).then($postAnimation$$, function() {
          $postAnimation$$();
          $oj$$23$$.$Logger$.error("ojModule animation promise was rejected");
        });
      }
    }
    function $_detachOldView$$($element$$185$$, $oldViewParent$$1$$, $cacheHolder$$) {
      $oldViewParent$$1$$ = $oldViewParent$$1$$ || $element$$185$$;
      var $empty$$5$$ = [];
      $cacheHolder$$ && $element$$185$$ === $oldViewParent$$1$$ && ($cacheHolder$$.parentNode.removeChild($cacheHolder$$), $empty$$5$$.push($cacheHolder$$));
      $ko$$4$$.virtualElements.setDomNodeChildren($oldViewParent$$1$$, $empty$$5$$);
    }
    function $_moveDomNodes$$($nodes$$2$$, $target$$124$$) {
      $nodes$$2$$.forEach(function($n$$23$$) {
        $target$$124$$.appendChild($n$$23$$);
      });
    }
    function $_invokeLifecycleListener$$($listener$$38$$, $method$$7$$, $params$$24$$) {
      if ($listener$$38$$ && $listener$$38$$[$method$$7$$]) {
        var $data$$140$$ = {element:$params$$24$$[0], valueAccessor:$params$$24$$[1]};
        2 < $params$$24$$.length && ($data$$140$$.viewModel = $params$$24$$[2], 3 < $params$$24$$.length && ($data$$140$$["boolean" === typeof $params$$24$$[3] ? "fromCache" : "cachedNodes"] = $params$$24$$[3]));
        return $ko$$4$$.ignoreDependencies($listener$$38$$[$method$$7$$], $listener$$38$$, [$data$$140$$]);
      }
    }
    function $_invokeViewModelMethod$$($model$$61$$, $handler$$51_key$$147_name$$120$$, $params$$25$$) {
      if (null != $model$$61$$ && ($handler$$51_key$$147_name$$120$$ = $oj$$23$$.$ModuleBinding$.$defaults$[$handler$$51_key$$147_name$$120$$], null != $handler$$51_key$$147_name$$120$$ && $model$$61$$ && ($handler$$51_key$$147_name$$120$$ = $model$$61$$[$handler$$51_key$$147_name$$120$$], "function" === typeof $handler$$51_key$$147_name$$120$$))) {
        var $data$$141$$ = void 0;
        $params$$25$$ && ($data$$141$$ = {element:$params$$25$$[0], valueAccessor:$params$$25$$[1]}, 2 < $params$$25$$.length && ($data$$141$$["boolean" === typeof $params$$25$$[2] ? "fromCache" : "cachedNodes"] = $params$$25$$[2]));
        return $ko$$4$$.ignoreDependencies($handler$$51_key$$147_name$$120$$, $model$$61$$, [$data$$141$$]);
      }
    }
    function $_getContainedNodes$$($container$$25_node$$83$$, $cacheHolder$$1$$, $endCommentNode$$) {
      var $childList$$ = [];
      for ($container$$25_node$$83$$ = $ko$$4$$.virtualElements.firstChild($container$$25_node$$83$$);null != $container$$25_node$$83$$ && $container$$25_node$$83$$ != $endCommentNode$$;$container$$25_node$$83$$ = $container$$25_node$$83$$.nextSibling) {
        $container$$25_node$$83$$ != $cacheHolder$$1$$ && $childList$$.push($container$$25_node$$83$$);
      }
      return $childList$$;
    }
    function $_getKoNodes$$($container$$26$$, $cacheHolder$$2$$) {
      var $nodes$$3$$ = [], $firstChild$$4$$ = $ko$$4$$.virtualElements.firstChild($container$$26$$);
      $_koNodesForEach$$($firstChild$$4$$, $cacheHolder$$2$$, function($node$$84$$) {
        $nodes$$3$$.push($node$$84$$);
      });
      return $nodes$$3$$;
    }
    function $_koNodesForEach$$($first$$7_node$$85$$, $cacheHolder$$3$$, $callback$$115$$) {
      for (;null != $first$$7_node$$85$$;) {
        var $next$$6$$ = $ko$$4$$.virtualElements.nextSibling($first$$7_node$$85$$), $type$$88$$ = $first$$7_node$$85$$.nodeType;
        $first$$7_node$$85$$ === $cacheHolder$$3$$ || 1 !== $type$$88$$ && 8 !== $type$$88$$ || $callback$$115$$($first$$7_node$$85$$);
        $first$$7_node$$85$$ = $next$$6$$;
      }
    }
    function $_insertNodes$$($container$$27$$, $nodes$$4$$) {
      for (var $i$$362$$ = $nodes$$4$$.length - 1;0 <= $i$$362$$;$i$$362$$--) {
        $ko$$4$$.virtualElements.prepend($container$$27$$, $nodes$$4$$[$i$$362$$]);
      }
    }
    function $_propagateSubtreeVisibilityToComponents$$($nodeArray$$, $visible$$) {
      if (null != $oj$$23$$.Components) {
        for (var $i$$363$$ = 0;$i$$363$$ < $nodeArray$$.length;$i$$363$$++) {
          $visible$$ ? $oj$$23$$.Components.$subtreeShown$($nodeArray$$[$i$$363$$]) : $oj$$23$$.Components.$subtreeHidden$($nodeArray$$[$i$$363$$]);
        }
      }
    }
    function $_getDomNodes$$($content$$25$$) {
      if ("string" === typeof $content$$25$$) {
        $content$$25$$ = $ko$$4$$.utils.parseHtmlFragment($content$$25$$);
      } else {
        if (window.DocumentFragment ? $content$$25$$ instanceof DocumentFragment : $content$$25$$ && 11 === $content$$25$$.nodeType) {
          $content$$25$$ = $ko$$4$$.utils.arrayPushAll([], $content$$25$$.childNodes);
        } else {
          if (Array.isArray($content$$25$$)) {
            $content$$25$$ = $ko$$4$$.utils.arrayPushAll([], $content$$25$$);
          } else {
            throw "The View (" + $content$$25$$ + ") has an unsupported type";
          }
        }
      }
      return $content$$25$$;
    }
    function $_getRequirePromise$$($module$$1$$) {
      return new Promise(function($resolve$$39$$, $reject$$35$$) {
        require([$module$$1$$], function($loaded$$) {
          $resolve$$39$$($loaded$$);
        }, function($reason$$7$$) {
          $oj$$23$$.$Logger$.error("ojModule failed to load " + $module$$1$$);
          $reject$$35$$($reason$$7$$);
        });
      });
    }
    function $_createNoFailPromise$$($promise$$8$$) {
      return $promise$$8$$ ? new Promise(function($resolve$$40$$) {
        $promise$$8$$.then($resolve$$40$$, $resolve$$40$$);
      }) : $promise$$8$$;
    }
    $ko$$4$$.bindingHandlers.ojModule = {init:function $$ko$$4$$$bindingHandlers$ojModule$init$($element$$186$$, $valueAccessor$$26$$, $allBindingsAccessor$$21$$, $viewModel$$4$$, $bindingContext$$46$$) {
      function $checkPeningId$$($id$$37$$) {
        if ($id$$37$$ != $pendingViewId$$) {
          throw $_IGNORE_PROMISE$$;
        }
      }
      function $invokeModelDispose$$($model$$62$$) {
        $_invokeViewModelMethod$$($model$$62$$, "disposeMethod", [$element$$186$$, $valueAccessor$$26$$]);
      }
      var $currentViewModel$$, $currentAnimationPromise$$, $cache$$ = {}, $currentCacheKey$$, $pendingViewId$$ = -1, $cacheHolder$$4$$, $endCommentNode$$1$$;
      $ko$$4$$.utils.domNodeDisposal.addDisposeCallback($element$$186$$, function() {
        $invokeModelDispose$$($currentViewModel$$);
        for (var $keys$$50$$ = Object.keys($cache$$), $i$$364$$ = 0;$i$$364$$ < $keys$$50$$.length;$i$$364$$++) {
          $invokeModelDispose$$($cache$$[$keys$$50$$[$i$$364$$]].$model$);
        }
      });
      var $_IGNORE_PROMISE$$ = Error("Promise cancelled because ojModule is fetching new View and ViewModel");
      8 === $element$$186$$.nodeType && ($ko$$4$$.virtualElements.setDomNodeChildren($element$$186$$, []), $endCommentNode$$1$$ = $element$$186$$.nextSibling);
      $ko$$4$$.computed(function() {
        $pendingViewId$$++;
        var $isInitial$$1$$ = 0 === $pendingViewId$$, $attachPromise_unwrap$$ = $ko$$4$$.utils.unwrapObservable, $value$$273$$ = $attachPromise_unwrap$$($valueAccessor$$26$$()), $moduleName$$, $viewName$$, $params$$26$$, $modelFactory$$, $viewFunction$$, $cacheKey$$, $lifecycleListener$$, $animation$$2$$;
        "string" === typeof $value$$273$$ ? $moduleName$$ = $value$$273$$ : ($moduleName$$ = $attachPromise_unwrap$$($value$$273$$.name), $viewName$$ = $attachPromise_unwrap$$($value$$273$$.viewName), $params$$26$$ = $attachPromise_unwrap$$($value$$273$$.params), $modelFactory$$ = $attachPromise_unwrap$$($value$$273$$.viewModelFactory), $viewFunction$$ = $attachPromise_unwrap$$($value$$273$$.createViewFunction), $cacheKey$$ = $attachPromise_unwrap$$($value$$273$$.cacheKey), $lifecycleListener$$ = 
        $attachPromise_unwrap$$($value$$273$$.lifecycleListener), $animation$$2$$ = $attachPromise_unwrap$$($value$$273$$.animation));
        var $attachPromise_unwrap$$ = $_invokeLifecycleListener$$($lifecycleListener$$, "activated", [$element$$186$$, $valueAccessor$$26$$]), $viewPromise$$, $modelPromise$$, $cached$$ = null == $cacheKey$$ ? null : $cache$$[$cacheKey$$];
        if (null != $cached$$) {
          delete $cache$$[$cacheKey$$], $viewPromise$$ = Promise.resolve($cached$$.view), $modelPromise$$ = Promise.resolve($cached$$.$model$);
        } else {
          if (null != $modelFactory$$ && ($modelPromise$$ = $ko$$4$$.ignoreDependencies($modelFactory$$.createViewModel, $modelFactory$$, [$params$$26$$, $valueAccessor$$26$$])), null == $modelPromise$$ && null != $moduleName$$ && ($modelPromise$$ = $_getRequirePromise$$($oj$$23$$.$ModuleBinding$.$defaults$.modelPath + $moduleName$$)), null != $modelPromise$$ && ($modelPromise$$ = $modelPromise$$.then(function($id$$38$$, $viewModel$$5$$) {
            $checkPeningId$$($id$$38$$);
            return $viewModel$$5$$ = "function" === typeof $viewModel$$5$$ ? new $viewModel$$5$$($params$$26$$) : $_invokeViewModelMethod$$($viewModel$$5$$, "initializeMethod", [$element$$186$$, $valueAccessor$$26$$]) || $viewModel$$5$$;
          }.bind(null, $pendingViewId$$)), null != $viewFunction$$ && ($viewPromise$$ = $modelPromise$$.then(function($id$$39$$, $model$$64$$) {
            $checkPeningId$$($id$$39$$);
            if (null == $model$$64$$) {
              throw "createViewFunction option cannot be used when the ViewModel is null";
            }
            var $viewMethod$$ = $model$$64$$[$viewFunction$$];
            if (null == $viewMethod$$) {
              throw "function specified by the createViewFunction option was not found on the ViewModel";
            }
            return $viewMethod$$.call($model$$64$$);
          }.bind(null, $pendingViewId$$)))), null == $viewPromise$$) {
            if ($viewName$$ = null == $viewName$$ ? $moduleName$$ : $viewName$$, null != $viewName$$) {
              $viewPromise$$ = $_getRequirePromise$$($oj$$23$$.$ModuleBinding$.$defaults$.viewPath + $viewName$$ + $oj$$23$$.$ModuleBinding$.$defaults$.viewSuffix);
            } else {
              throw Error("View name must be specified");
            }
          }
        }
        if (null == $viewPromise$$) {
          throw Error("ojModule is missing a View");
        }
        var $modelAttachPromise$$;
        null != $modelPromise$$ && ($modelAttachPromise$$ = $modelPromise$$.then(function($id$$40$$, $viewModel$$6$$) {
          $checkPeningId$$($id$$40$$);
          return $_invokeViewModelMethod$$($viewModel$$6$$, "activatedHandler", [$element$$186$$, $valueAccessor$$26$$]);
        }.bind(null, $pendingViewId$$)));
        Promise.all([$viewPromise$$, $modelPromise$$, $attachPromise_unwrap$$, $modelAttachPromise$$, $currentAnimationPromise$$]).then(function($id$$41$$, $values$$13$$) {
          if ($id$$41$$ == $pendingViewId$$) {
            var $removeOldDomNodes$$1_view$$3$$ = $values$$13$$[0];
            if (null == $removeOldDomNodes$$1_view$$3$$) {
              throw "The module's View was resolved to null";
            }
            var $nodes$$5$$ = $_getDomNodes$$($removeOldDomNodes$$1_view$$3$$), $model$$65$$ = $values$$13$$[1], $saveInCache$$ = !1, $cachedNodeArray$$, $oldDomNodes$$1$$ = $_getContainedNodes$$($element$$186$$, $cacheHolder$$4$$, $endCommentNode$$1$$), $oldKoNodes$$ = $_getKoNodes$$($element$$186$$, $cacheHolder$$4$$);
            null != $currentCacheKey$$ && ($saveInCache$$ = !0, $cachedNodeArray$$ = $oldDomNodes$$1$$, $cacheHolder$$4$$ || ($cacheHolder$$4$$ = document.createElement("div"), $cacheHolder$$4$$.className = "oj-helper-module-cache", $ko$$4$$.virtualElements.prepend($element$$186$$, $cacheHolder$$4$$)));
            var $oldNodesRemoved$$ = !1, $removeOldDomNodes$$1_view$$3$$ = function $$removeOldDomNodes$$1_view$$3$$$($oldViewParent$$2$$) {
              $oldNodesRemoved$$ || ($oldNodesRemoved$$ = !0, $saveInCache$$ ? $_moveDomNodes$$($oldDomNodes$$1$$, $cacheHolder$$4$$) : $oldKoNodes$$.forEach(function($n$$24$$) {
                $ko$$4$$.cleanNode($n$$24$$);
              }), $_detachOldView$$($element$$186$$, $oldViewParent$$2$$ || $element$$186$$, $cacheHolder$$4$$), $isInitial$$1$$ || ($_invokeLifecycleListener$$($lifecycleListener$$, "detached", [$element$$186$$, $valueAccessor$$26$$, $currentViewModel$$, $cachedNodeArray$$]), $_invokeViewModelMethod$$($currentViewModel$$, "detachedHandler", [$element$$186$$, $valueAccessor$$26$$, $cachedNodeArray$$]), $_invokeLifecycleListener$$($lifecycleListener$$, "deactivated", [$element$$186$$, $valueAccessor$$26$$, 
              $currentViewModel$$]), $_invokeViewModelMethod$$($currentViewModel$$, "deactivatedHandler", [$element$$186$$, $valueAccessor$$26$$])), $saveInCache$$ ? ($_propagateSubtreeVisibilityToComponents$$($cachedNodeArray$$, !1), $cache$$[$currentCacheKey$$] = {$model$:$currentViewModel$$, view:$cachedNodeArray$$}) : $invokeModelDispose$$($currentViewModel$$), $currentViewModel$$ = $model$$65$$, $currentCacheKey$$ = $cacheKey$$);
            }, $insertAndActivateNewNodes$$ = function $$insertAndActivateNewNodes$$$($targetElement$$1$$) {
              $targetElement$$1$$ = $targetElement$$1$$ || $element$$186$$;
              $_insertNodes$$($targetElement$$1$$, $nodes$$5$$);
              var $fromCache$$ = null != $cached$$;
              $fromCache$$ && $_propagateSubtreeVisibilityToComponents$$($nodes$$5$$, !0);
              $_invokeLifecycleListener$$($lifecycleListener$$, "attached", [$targetElement$$1$$, $valueAccessor$$26$$, $model$$65$$, $fromCache$$]);
              $_invokeViewModelMethod$$($model$$65$$, "attachedHandler", [$targetElement$$1$$, $valueAccessor$$26$$, $fromCache$$]);
              if (!$fromCache$$) {
                var $childBindingContext$$ = $bindingContext$$46$$.createChildContext($model$$65$$, void 0, function($ctx$$2$$) {
                  $ctx$$2$$.$module = $model$$65$$;
                  $ctx$$2$$.$params = $params$$26$$;
                });
                $_koNodesForEach$$($nodes$$5$$[0], $cacheHolder$$4$$, function($node$$87$$) {
                  $ko$$4$$.applyBindings($childBindingContext$$, $node$$87$$);
                });
                $_invokeLifecycleListener$$($lifecycleListener$$, "bindingsApplied", [$targetElement$$1$$, $valueAccessor$$26$$, $model$$65$$]);
                $_invokeViewModelMethod$$($model$$65$$, "bindingsAppliedHandler", [$targetElement$$1$$, $valueAccessor$$26$$]);
              }
            }, $transitionComplete$$1$$ = function $$transitionComplete$$1$$$() {
              $_invokeLifecycleListener$$($lifecycleListener$$, "transitionCompleted", [$element$$186$$, $valueAccessor$$26$$, $model$$65$$]);
              $_invokeViewModelMethod$$($model$$65$$, "transitionCompletedHandler", [$element$$186$$, $valueAccessor$$26$$]);
            };
            if (null != $animation$$2$$) {
              var $promise$$9$$ = $_animate$$({node:$element$$186$$, valueAccessor:$valueAccessor$$26$$, isInitial:$isInitial$$1$$, oldViewModel:$currentViewModel$$, newViewModel:$model$$65$$}, $animation$$2$$, $element$$186$$, $oldDomNodes$$1$$, $insertAndActivateNewNodes$$, $removeOldDomNodes$$1_view$$3$$, $transitionComplete$$1$$);
              $currentAnimationPromise$$ = $_createNoFailPromise$$($promise$$9$$);
            } else {
              $currentAnimationPromise$$ = void 0;
            }
            $currentAnimationPromise$$ || ($removeOldDomNodes$$1_view$$3$$(null), $insertAndActivateNewNodes$$(null), $transitionComplete$$1$$());
          }
        }.bind(null, $pendingViewId$$), function($id$$42$$, $reason$$8$$) {
          $reason$$8$$ !== $_IGNORE_PROMISE$$ && null != $reason$$8$$ && $oj$$23$$.$Logger$.error($reason$$8$$);
        }.bind(null, $pendingViewId$$));
      }, null, {disposeWhenNodeIsRemoved:$element$$186$$});
      return{controlsDescendantBindings:!0};
    }};
    $ko$$4$$.virtualElements.allowedBindings.ojModule = !0;
  })();
});
