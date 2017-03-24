/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojdatasource-common", "ojs/ojmodel"], function($oj$$63$$) {
  $oj$$63$$.$CollectionNodeSet$ = function $$oj$$63$$$$CollectionNodeSet$$($parentKey$$6$$, $collection$$36$$, $treeDataSource$$1$$, $start$$65$$, $count$$55$$) {
    this.$parentKey$ = $parentKey$$6$$;
    this.$collection$ = $collection$$36$$;
    this.$childNodeSet$ = [];
    this.$treeDataSource$ = $treeDataSource$$1$$;
    this.start = $start$$65$$ < $collection$$36$$.length ? $start$$65$$ : $collection$$36$$.length - 1;
    this.count = -1 === $count$$55$$ ? $collection$$36$$.length : Math.min($collection$$36$$.length, $count$$55$$);
  };
  $goog$exportPath_$$("CollectionNodeSet", $oj$$63$$.$CollectionNodeSet$, $oj$$63$$);
  $oj$$63$$.$CollectionNodeSet$.prototype.$FetchDescendants$ = function $$oj$$63$$$$CollectionNodeSet$$$$FetchDescendants$$($callbacks$$37$$) {
    this.$_fetchDescendants$(this).then(function() {
      $callbacks$$37$$.success && $callbacks$$37$$.success();
    });
  };
  $oj$$63$$.$CollectionNodeSet$.prototype.$_fetchDescendants$ = function $$oj$$63$$$$CollectionNodeSet$$$$_fetchDescendants$$($nodeSet$$22$$) {
    return new Promise(function($resolve$$64$$) {
      function $nextNode$$($index$$303$$) {
        $index$$303$$ < $count$$56$$ ? $nodeSet$$22$$.$FetchChildNodeSet$($index$$303$$, {success:function($childNodeSet$$1$$) {
          null !== $childNodeSet$$1$$ ? $nodeSet$$22$$.$_fetchDescendants$($childNodeSet$$1$$).then(function() {
            $nextNode$$($index$$303$$ + 1);
          }) : $nextNode$$($index$$303$$ + 1);
        }}) : $resolve$$64$$(void 0);
      }
      var $count$$56$$ = $nodeSet$$22$$.getCount();
      $nextNode$$(0);
    });
  };
  $oj$$63$$.$CollectionNodeSet$.prototype.$FetchChildNodeSet$ = function $$oj$$63$$$$CollectionNodeSet$$$$FetchChildNodeSet$$($index$$304$$, $callbacks$$38$$) {
    var $model$$81_parentKey$$7$$ = this.$collection$.at($index$$304$$);
    if (this.$treeDataSource$.$parseMetadata$($model$$81_parentKey$$7$$).leaf) {
      this.$childNodeSet$[$index$$304$$] = null, $callbacks$$38$$.success(null);
    } else {
      var $collection$$37$$ = this.$treeDataSource$.$GetChildCollection$($model$$81_parentKey$$7$$), $model$$81_parentKey$$7$$ = this.$treeDataSource$.$parseMetadata$($model$$81_parentKey$$7$$).key, $self$$210$$ = this;
      this.$treeDataSource$.$FetchCollection$($collection$$37$$, 0, -1, {success:function($nodeSet$$23$$) {
        $self$$210$$.$childNodeSet$[$index$$304$$] = $nodeSet$$23$$;
        $callbacks$$38$$.success($nodeSet$$23$$);
      }}, $model$$81_parentKey$$7$$);
    }
  };
  $oj$$63$$.$CollectionNodeSet$.prototype.getParent = function $$oj$$63$$$$CollectionNodeSet$$$getParent$() {
    return this.$parentKey$;
  };
  $oj$$63$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getParent", {getParent:$oj$$63$$.$CollectionNodeSet$.prototype.getParent});
  $oj$$63$$.$CollectionNodeSet$.prototype.getStart = function $$oj$$63$$$$CollectionNodeSet$$$getStart$() {
    return this.start;
  };
  $oj$$63$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getStart", {getStart:$oj$$63$$.$CollectionNodeSet$.prototype.getStart});
  $oj$$63$$.$CollectionNodeSet$.prototype.getCount = function $$oj$$63$$$$CollectionNodeSet$$$getCount$() {
    return this.count;
  };
  $oj$$63$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getCount", {getCount:$oj$$63$$.$CollectionNodeSet$.prototype.getCount});
  $oj$$63$$.$CollectionNodeSet$.prototype.getData = function $$oj$$63$$$$CollectionNodeSet$$$getData$($index$$305$$) {
    this.$_checkRange$($index$$305$$);
    return this.$collection$.at($index$$305$$).attributes;
  };
  $oj$$63$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getData", {getData:$oj$$63$$.$CollectionNodeSet$.prototype.getData});
  $oj$$63$$.$CollectionNodeSet$.prototype.$_checkRange$ = function $$oj$$63$$$$CollectionNodeSet$$$$_checkRange$$($index$$306$$) {
    if ($index$$306$$ < this.start || $index$$306$$ > this.start + this.count) {
      throw "Out of range";
    }
  };
  $oj$$63$$.$CollectionNodeSet$.prototype.getMetadata = function $$oj$$63$$$$CollectionNodeSet$$$getMetadata$($index$$307_model$$82_parse$$7$$) {
    this.$_checkRange$($index$$307_model$$82_parse$$7$$);
    var $metadata$$16$$ = {};
    $index$$307_model$$82_parse$$7$$ = this.$collection$.at($index$$307_model$$82_parse$$7$$);
    $index$$307_model$$82_parse$$7$$ = this.$treeDataSource$.$parseMetadata$($index$$307_model$$82_parse$$7$$);
    $metadata$$16$$.key = $index$$307_model$$82_parse$$7$$.key;
    $metadata$$16$$.leaf = $index$$307_model$$82_parse$$7$$.leaf;
    $metadata$$16$$.depth = $index$$307_model$$82_parse$$7$$.depth;
    return $metadata$$16$$;
  };
  $oj$$63$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getMetadata", {getMetadata:$oj$$63$$.$CollectionNodeSet$.prototype.getMetadata});
  $oj$$63$$.$CollectionNodeSet$.prototype.$getChildNodeSet$ = function $$oj$$63$$$$CollectionNodeSet$$$$getChildNodeSet$$($index$$308$$) {
    this.$_checkRange$($index$$308$$);
    return this.$childNodeSet$[$index$$308$$];
  };
  $oj$$63$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getChildNodeSet", {$getChildNodeSet$:$oj$$63$$.$CollectionNodeSet$.prototype.$getChildNodeSet$});
  $oj$$63$$.$CollectionTreeDataSource$ = function $$oj$$63$$$$CollectionTreeDataSource$$($options$$363$$) {
    $options$$363$$ = $options$$363$$ || {};
    this.$rootCollection$ = $options$$363$$.root;
    this.$childCollectionCallback$ = $options$$363$$.childCollectionCallback;
    this.$parseMetadata$ = $options$$363$$.parseMetadata;
    this.$sortkey$ = null;
    this.$sortdir$ = "none";
    this.$cache$ = {};
    $oj$$63$$.$CollectionTreeDataSource$.$superclass$.constructor.call(this);
  };
  $goog$exportPath_$$("CollectionTreeDataSource", $oj$$63$$.$CollectionTreeDataSource$, $oj$$63$$);
  $oj$$63$$.$CollectionTreeDataSource$.prototype.$parseMetadata$ = function $$oj$$63$$$$CollectionTreeDataSource$$$$parseMetadata$$($model$$83$$) {
    return{key:$model$$83$$.idAttribute + "\x3d" + $model$$83$$.id};
  };
  $oj$$63$$.$Object$.$createSubclass$($oj$$63$$.$CollectionTreeDataSource$, $oj$$63$$.$TreeDataSource$, "oj.CollectionTreeDataSource");
  $oj$$63$$.$CollectionTreeDataSource$.prototype.Init = function $$oj$$63$$$$CollectionTreeDataSource$$$Init$() {
    $oj$$63$$.$CollectionTreeDataSource$.$superclass$.Init.call(this);
  };
  $oj$$63$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.Init", {Init:$oj$$63$$.$CollectionTreeDataSource$.prototype.Init});
  $oj$$63$$.$CollectionTreeDataSource$.prototype.$getChildCount$ = function $$oj$$63$$$$CollectionTreeDataSource$$$$getChildCount$$($parent$$38$$) {
    var $childColl$$ = this.$cache$[$parent$$38$$];
    if ($childColl$$ && 0 < $childColl$$.length) {
      return $childColl$$.length;
    }
    this.$getChildCollection$($parent$$38$$, {success:function($coll$$3$$) {
      return $coll$$3$$.length;
    }});
    return-1;
  };
  $oj$$63$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.getChildCount", {$getChildCount$:$oj$$63$$.$CollectionTreeDataSource$.prototype.$getChildCount$});
  $oj$$63$$.$CollectionTreeDataSource$.prototype.$getChildCollection$ = function $$oj$$63$$$$CollectionTreeDataSource$$$$getChildCollection$$($key$$181$$, $callbacks$$39$$) {
    this.$fetchChildren$($key$$181$$, null, {success:function($nodeSet$$24$$) {
      $callbacks$$39$$.success($nodeSet$$24$$.$collection$);
    }, error:$callbacks$$39$$.error});
  };
  $oj$$63$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.getChildCollection", {$getChildCollection$:$oj$$63$$.$CollectionTreeDataSource$.prototype.$getChildCollection$});
  $oj$$63$$.$CollectionTreeDataSource$.prototype.$fetchChildren$ = function $$oj$$63$$$$CollectionTreeDataSource$$$$fetchChildren$$($parent$$39$$, $range$$27$$, $callbacks$$40$$) {
    $range$$27$$ = $range$$27$$ || {};
    var $start$$66$$ = $range$$27$$.start ? $range$$27$$.start : 0, $count$$57$$ = $range$$27$$.count ? $range$$27$$.count : -1;
    if (null === $parent$$39$$) {
      this.$FetchCollection$(null, $start$$66$$, $count$$57$$, $callbacks$$40$$, null);
    } else {
      var $self$$211$$ = this;
      this.$_getModelForId$(this.$rootCollection$, $parent$$39$$, 0).then(function($collection$$38_parentModel$$) {
        if ($collection$$38_parentModel$$) {
          $collection$$38_parentModel$$ = $self$$211$$.$GetChildCollection$($collection$$38_parentModel$$.$model$);
          try {
            $self$$211$$.$FetchCollection$($collection$$38_parentModel$$, $start$$66$$, $count$$57$$, $callbacks$$40$$, $parent$$39$$);
          } catch ($error$$46$$) {
            $callbacks$$40$$ && $callbacks$$40$$.error && $callbacks$$40$$.error({status:$error$$46$$.message});
          }
        } else {
          $callbacks$$40$$ && $callbacks$$40$$.error && $callbacks$$40$$.error($parent$$39$$);
        }
      });
    }
  };
  $oj$$63$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.fetchChildren", {$fetchChildren$:$oj$$63$$.$CollectionTreeDataSource$.prototype.$fetchChildren$});
  $oj$$63$$.$CollectionTreeDataSource$.prototype.$ModelAdded$ = function $$oj$$63$$$$CollectionTreeDataSource$$$$ModelAdded$$($event$$693_model$$84$$, $collection$$39_parents$$6$$, $options$$365$$) {
    var $index$$309$$ = 0;
    $options$$365$$ && $options$$365$$.at && ($index$$309$$ = $options$$365$$.at);
    $collection$$39_parents$$6$$ = this.$_getParentChain$($collection$$39_parents$$6$$);
    $event$$693_model$$84$$ = this.$_createEvent$(this, "insert", $index$$309$$, $collection$$39_parents$$6$$, this.$_putModelInNodeSet$(null != $collection$$39_parents$$6$$ && 0 < $collection$$39_parents$$6$$.length ? $collection$$39_parents$$6$$[$collection$$39_parents$$6$$.length - 1] : null, $event$$693_model$$84$$));
    this.handleEvent("change", $event$$693_model$$84$$);
  };
  $oj$$63$$.$CollectionTreeDataSource$.prototype.$ModelRemoved$ = function $$oj$$63$$$$CollectionTreeDataSource$$$$ModelRemoved$$($event$$694_model$$85$$, $collection$$40$$, $options$$366$$) {
    var $index$$310$$ = 0;
    $options$$366$$ && $options$$366$$.index && ($index$$310$$ = $options$$366$$.index);
    this.$_removeCollectionFromCache$($event$$694_model$$85$$);
    $event$$694_model$$85$$ = this.$_createEvent$(this, "delete", $index$$310$$, this.$_getParentChain$($collection$$40$$), null);
    this.handleEvent("change", $event$$694_model$$85$$);
  };
  $oj$$63$$.$CollectionTreeDataSource$.prototype.$ModelUpdated$ = function $$oj$$63$$$$CollectionTreeDataSource$$$$ModelUpdated$$($event$$695_model$$86$$) {
    var $collectionForModel$$ = this.$_getCollectionForModel$($event$$695_model$$86$$), $index$$311$$ = null, $parents$$7$$ = null;
    $collectionForModel$$ && ($index$$311$$ = $collectionForModel$$.index, $parents$$7$$ = this.$_getParentChain$($collectionForModel$$.$collection$));
    $event$$695_model$$86$$ = this.$_createEvent$(this, "update", $index$$311$$, $parents$$7$$, this.$_putModelInNodeSet$(null != $parents$$7$$ && 0 < $parents$$7$$.length ? $parents$$7$$[$parents$$7$$.length - 1] : null, $event$$695_model$$86$$));
    this.handleEvent("change", $event$$695_model$$86$$);
  };
  $oj$$63$$.$CollectionTreeDataSource$.prototype.$CollectionRefreshed$ = function $$oj$$63$$$$CollectionTreeDataSource$$$$CollectionRefreshed$$($collection$$41_event$$696$$) {
    $collection$$41_event$$696$$ = this.$_createEvent$(this, "refresh", null, this.$_getParentChain$($collection$$41_event$$696$$), null);
    this.handleEvent("refresh", $collection$$41_event$$696$$);
  };
  $oj$$63$$.$CollectionTreeDataSource$.prototype.$_putModelInNodeSet$ = function $$oj$$63$$$$CollectionTreeDataSource$$$$_putModelInNodeSet$$($parent$$42$$, $model$$87$$) {
    var $collection$$42$$ = new $oj$$63$$.$Collection$;
    $collection$$42$$.add($model$$87$$);
    return this.$_getNodeSet$($collection$$42$$, $parent$$42$$, 0, 1);
  };
  $oj$$63$$.$CollectionTreeDataSource$.prototype.$_getParentChain$ = function $$oj$$63$$$$CollectionTreeDataSource$$$$_getParentChain$$($coll$$4_collection$$43$$) {
    var $parents$$8$$ = [], $parent$$43$$ = null;
    do {
      $parent$$43$$ = this.$_getParentOfCollection$($coll$$4_collection$$43$$), null !== $parent$$43$$ && ($parent$$43$$ !== $oj$$63$$.$CollectionTreeDataSource$.$ROOT_CACHE_KEY$ && $parents$$8$$.unshift($parent$$43$$), $coll$$4_collection$$43$$ = this.$_getCollectionOfKey$($parent$$43$$));
    } while (null != $parent$$43$$);
    return $parents$$8$$;
  };
  $oj$$63$$.$CollectionTreeDataSource$.$ROOT_CACHE_KEY$ = "%!@ROOT%#@!";
  $oj$$63$$.$CollectionTreeDataSource$.prototype.$_getCacheKey$ = function $$oj$$63$$$$CollectionTreeDataSource$$$$_getCacheKey$$($model$$88$$) {
    var $key$$182$$ = $model$$88$$ instanceof $oj$$63$$.$Model$ ? this.$parseMetadata$($model$$88$$).key : $model$$88$$;
    return $model$$88$$ ? $key$$182$$ : $oj$$63$$.$CollectionTreeDataSource$.$ROOT_CACHE_KEY$;
  };
  $oj$$63$$.$CollectionTreeDataSource$.prototype.$__getParentsChildCollectionFromCache$ = function $$oj$$63$$$$CollectionTreeDataSource$$$$__getParentsChildCollectionFromCache$$($model$$89$$) {
    return this.$cache$[this.$_getCacheKey$($model$$89$$)];
  };
  $oj$$63$$.$CollectionTreeDataSource$.prototype.$_setCollectionInCache$ = function $$oj$$63$$$$CollectionTreeDataSource$$$$_setCollectionInCache$$($model$$90$$, $collection$$44$$) {
    $collection$$44$$.on($oj$$63$$.$Events$.$EventType$.ADD, this.$ModelAdded$, this);
    $collection$$44$$.on($oj$$63$$.$Events$.$EventType$.REMOVE, this.$ModelRemoved$, this);
    $collection$$44$$.on($oj$$63$$.$Events$.$EventType$.CHANGE, this.$ModelUpdated$, this);
    $collection$$44$$.on($oj$$63$$.$Events$.$EventType$.SYNC, this.$CollectionRefreshed$, this);
    this.$cache$[this.$_getCacheKey$($model$$90$$)] = $collection$$44$$;
  };
  $oj$$63$$.$CollectionTreeDataSource$.prototype.$_removeCollectionFromCache$ = function $$oj$$63$$$$CollectionTreeDataSource$$$$_removeCollectionFromCache$$($key$$183_model$$91$$) {
    $key$$183_model$$91$$ = this.$_getCacheKey$($key$$183_model$$91$$);
    for (var $prop$$77$$ in this.$cache$) {
      if (this.$cache$.hasOwnProperty($prop$$77$$) && $prop$$77$$ === $key$$183_model$$91$$) {
        this.$cache$[$key$$183_model$$91$$].off(null, null, this);
        delete this.$cache$[$key$$183_model$$91$$];
        break;
      }
    }
  };
  $oj$$63$$.$CollectionTreeDataSource$.prototype.$_keyInCollection$ = function $$oj$$63$$$$CollectionTreeDataSource$$$$_keyInCollection$$($key$$184$$, $collection$$45$$) {
    for (var $count$$58$$ = $collection$$45$$.length, $i$$438$$ = 0;$i$$438$$ < $count$$58$$;$i$$438$$++) {
      var $currKey$$ = this.$_getCacheKey$($collection$$45$$.at($i$$438$$));
      if ($key$$184$$ === $currKey$$) {
        return!0;
      }
    }
    return!1;
  };
  $oj$$63$$.$CollectionTreeDataSource$.prototype.$_getCollectionForModel$ = function $$oj$$63$$$$CollectionTreeDataSource$$$$_getCollectionForModel$$($model$$92$$) {
    for (var $prop$$78$$ in this.$cache$) {
      if (this.$cache$.hasOwnProperty($prop$$78$$)) {
        for (var $collection$$46$$ = this.$cache$[$prop$$78$$], $i$$439$$ = 0;$i$$439$$ < $collection$$46$$.length;$i$$439$$++) {
          if ($collection$$46$$.at($i$$439$$) === $model$$92$$) {
            return{index:$i$$439$$, $collection$:$collection$$46$$};
          }
        }
      }
    }
    return null;
  };
  $oj$$63$$.$CollectionTreeDataSource$.prototype.$_getCollectionOfKey$ = function $$oj$$63$$$$CollectionTreeDataSource$$$$_getCollectionOfKey$$($key$$185$$) {
    for (var $prop$$79$$ in this.$cache$) {
      if (this.$cache$.hasOwnProperty($prop$$79$$)) {
        var $collection$$47$$ = this.$cache$[$prop$$79$$];
        if (this.$_keyInCollection$($key$$185$$, $collection$$47$$)) {
          return $collection$$47$$;
        }
      }
    }
    return null;
  };
  $oj$$63$$.$CollectionTreeDataSource$.prototype.$_getParentOfCollection$ = function $$oj$$63$$$$CollectionTreeDataSource$$$$_getParentOfCollection$$($collection$$48$$) {
    for (var $prop$$80$$ in this.$cache$) {
      if (this.$cache$.hasOwnProperty($prop$$80$$) && this.$cache$[$prop$$80$$] === $collection$$48$$) {
        return $prop$$80$$;
      }
    }
    return null;
  };
  $oj$$63$$.$CollectionTreeDataSource$.prototype.$GetChildCollection$ = function $$oj$$63$$$$CollectionTreeDataSource$$$$GetChildCollection$$($parentModel$$1$$) {
    var $cached$$1$$ = !0, $collection$$49$$ = this.$__getParentsChildCollectionFromCache$($parentModel$$1$$);
    $collection$$49$$ || ($cached$$1$$ = !1, $collection$$49$$ = this.$childCollectionCallback$(this.$rootCollection$, $parentModel$$1$$), null != $collection$$49$$ && (this.$_applySortToCollection$($collection$$49$$), this.$_setCollectionInCache$($parentModel$$1$$, $collection$$49$$)));
    return{$collection$:$collection$$49$$, $cached$:$cached$$1$$};
  };
  $oj$$63$$.$CollectionTreeDataSource$.prototype.$_createEvent$ = function $$oj$$63$$$$CollectionTreeDataSource$$$$_createEvent$$($source$$13$$, $operation$$9$$, $index$$312$$, $parent$$44$$, $data$$166$$) {
    return{source:$source$$13$$, operation:$operation$$9$$, index:$index$$312$$, parent:$parent$$44$$, data:$data$$166$$};
  };
  $oj$$63$$.$CollectionTreeDataSource$.prototype.$FetchCollection$ = function $$oj$$63$$$$CollectionTreeDataSource$$$$FetchCollection$$($collection$$50$$, $start$$67$$, $count$$59$$, $callbacks$$41$$, $parent$$45$$) {
    var $self$$212$$ = this;
    null === $collection$$50$$ && (($collection$$50$$ = this.$__getParentsChildCollectionFromCache$(null)) ? $collection$$50$$ = {$collection$:$collection$$50$$, $cached$:!0} : ($collection$$50$$ = {$collection$:$self$$212$$.$rootCollection$, $cached$:!1}, $self$$212$$.$_setCollectionInCache$(null, this.$rootCollection$)));
    $collection$$50$$ && $self$$212$$.$_fetch$($collection$$50$$, function($coll$$5$$) {
      $callbacks$$41$$.success && $callbacks$$41$$.success($self$$212$$.$_getNodeSet$($coll$$5$$, $parent$$45$$, $start$$67$$, $count$$59$$));
    }, $callbacks$$41$$.error);
  };
  $oj$$63$$.$CollectionTreeDataSource$.prototype.$_getNodeSet$ = function $$oj$$63$$$$CollectionTreeDataSource$$$$_getNodeSet$$($collection$$51$$, $parent$$46$$, $start$$68$$, $count$$60$$) {
    return new $oj$$63$$.$CollectionNodeSet$($parent$$46$$, $collection$$51$$, this, $start$$68$$, $count$$60$$);
  };
  $oj$$63$$.$CollectionTreeDataSource$.prototype.$_scanForKey$ = function $$oj$$63$$$$CollectionTreeDataSource$$$$_scanForKey$$($collection$$52$$, $key$$186$$) {
    var $self$$213$$ = this;
    return new Promise(function($resolve$$65$$) {
      function $checkNext$$($index$$313$$, $collection$$53$$, $key$$187$$) {
        $index$$313$$ < $collection$$53$$.length ? $collection$$53$$.at($index$$313$$, {deferred:!0}).then(function($model$$93$$) {
          if ($model$$93$$) {
            var $parse$$8$$ = $self$$213$$.$parseMetadata$($model$$93$$);
            if ($key$$187$$ === $parse$$8$$.key) {
              $resolve$$65$$($model$$93$$);
              return;
            }
          }
          $index$$313$$++;
          $checkNext$$($index$$313$$, $collection$$53$$, $key$$187$$);
        }) : $resolve$$65$$(null);
      }
      $checkNext$$(0, $collection$$52$$, $key$$186$$);
    });
  };
  $oj$$63$$.$CollectionTreeDataSource$.prototype.$_getModelForId$ = function $$oj$$63$$$$CollectionTreeDataSource$$$$_getModelForId$$($collection$$54$$, $key$$188$$, $depth$$29$$) {
    var $self$$214$$ = this;
    return new Promise(function($resolve$$66$$) {
      $self$$214$$.$_scanForKey$($collection$$54$$, $key$$188$$).then(function($model$$94$$) {
        function $getNextCollection$$($index$$314$$, $tds$$) {
          if ($index$$314$$ < $max$$9$$) {
            var $childColl$$1$$ = $tds$$.$GetChildCollection$($collection$$54$$.at($index$$314$$));
            $childColl$$1$$.$collection$ ? $tds$$.$_fetch$($childColl$$1$$, function($fetchColl$$) {
              $tds$$.$_getModelForId$($fetchColl$$, $key$$188$$, $depth$$29$$ + 1).then(function($childModel$$) {
                $childModel$$ ? $resolve$$66$$($childModel$$) : ($index$$314$$++, $getNextCollection$$($index$$314$$, $tds$$));
              });
            }, null) : ($index$$314$$++, $getNextCollection$$($index$$314$$, $tds$$));
          } else {
            $resolve$$66$$(null);
          }
        }
        if ($model$$94$$) {
          $resolve$$66$$({$model$:$model$$94$$, depth:$depth$$29$$});
        } else {
          var $max$$9$$ = $collection$$54$$.length;
          $getNextCollection$$(0, $self$$214$$);
        }
      });
    });
  };
  $oj$$63$$.$CollectionTreeDataSource$.prototype.$_fetch$ = function $$oj$$63$$$$CollectionTreeDataSource$$$$_fetch$$($collectionCacheObj$$, $success$$15$$, $error$$47$$) {
    $collectionCacheObj$$.$cached$ ? $success$$15$$($collectionCacheObj$$.$collection$) : (this.$sortkey$ && "none" !== this.$sortkey$ && ($collectionCacheObj$$.$collection$.$comparator$ = this.$sortkey$, $collectionCacheObj$$.$collection$.$sortDirection$ = this.$sortdir$), 0 < $collectionCacheObj$$.$collection$.length || !$collectionCacheObj$$.$collection$.$IsUrlBased$() ? $success$$15$$($collectionCacheObj$$.$collection$) : $collectionCacheObj$$.$collection$.fetch({success:function($fetchColl$$1$$) {
      $success$$15$$($fetchColl$$1$$);
    }, error:$error$$47$$}));
  };
  $oj$$63$$.$CollectionTreeDataSource$.prototype.$fetchDescendants$ = function $$oj$$63$$$$CollectionTreeDataSource$$$$fetchDescendants$$($parent$$47$$, $callbacks$$42$$) {
    var $self$$215$$ = this;
    null === $parent$$47$$ ? this.$FetchCollection$(null, 0, -1, {success:function($nodeSet$$25$$) {
      $nodeSet$$25$$.$FetchDescendants$({success:function() {
        $callbacks$$42$$.success && $callbacks$$42$$.success($nodeSet$$25$$);
      }});
    }}, null) : this.$_getModelForId$(this.$rootCollection$, $parent$$47$$, 0).then(function($collection$$55_parentModel$$2$$) {
      $collection$$55_parentModel$$2$$ && ($collection$$55_parentModel$$2$$ = $self$$215$$.$GetChildCollection$($collection$$55_parentModel$$2$$.$model$), $self$$215$$.$FetchCollection$($collection$$55_parentModel$$2$$, 0, -1, {success:function($nodeSet$$26$$) {
        $nodeSet$$26$$.$FetchDescendants$({success:function() {
          $callbacks$$42$$.success && $callbacks$$42$$.success($nodeSet$$26$$);
        }});
      }}, $parent$$47$$));
    });
  };
  $oj$$63$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.fetchDescendants", {$fetchDescendants$:$oj$$63$$.$CollectionTreeDataSource$.prototype.$fetchDescendants$});
  $oj$$63$$.$CollectionTreeDataSource$.prototype.sort = function $$oj$$63$$$$CollectionTreeDataSource$$$sort$($criteria$$5$$, $callbacks$$43$$) {
    var $key$$189$$ = $criteria$$5$$.key, $dir$$22$$ = $criteria$$5$$.direction, $needSort$$2$$ = !1;
    $key$$189$$ !== this.$sortkey$ && (this.$sortkey$ = $key$$189$$, $needSort$$2$$ = !0);
    $dir$$22$$ !== this.$sortdir$ && (this.$sortdir$ = $dir$$22$$, $needSort$$2$$ = !0);
    if ($needSort$$2$$) {
      "none" === this.$sortdir$ && (this.$cache$ = {});
      for (var $prop$$81$$ in this.$cache$) {
        this.$cache$.hasOwnProperty($prop$$81$$) && this.$_applySortToCollection$(this.$cache$[$prop$$81$$]);
      }
    }
    $callbacks$$43$$ && $callbacks$$43$$.success && $callbacks$$43$$.success();
  };
  $oj$$63$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.sort", {sort:$oj$$63$$.$CollectionTreeDataSource$.prototype.sort});
  $oj$$63$$.$CollectionTreeDataSource$.prototype.$_applySortToCollection$ = function $$oj$$63$$$$CollectionTreeDataSource$$$$_applySortToCollection$$($collection$$57$$) {
    $collection$$57$$.comparator = this.$sortkey$;
    $collection$$57$$.sortDirection = "ascending" === this.$sortdir$ ? 1 : -1;
    $collection$$57$$.sort();
  };
  $oj$$63$$.$CollectionTreeDataSource$.prototype.$getSortCriteria$ = function $$oj$$63$$$$CollectionTreeDataSource$$$$getSortCriteria$$() {
    return{key:this.$sortkey$, direction:this.$sortdir$};
  };
  $oj$$63$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.getSortCriteria", {$getSortCriteria$:$oj$$63$$.$CollectionTreeDataSource$.prototype.$getSortCriteria$});
  $oj$$63$$.$CollectionTreeDataSource$.prototype.move = function $$oj$$63$$$$CollectionTreeDataSource$$$move$() {
    $oj$$63$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$63$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.move", {move:$oj$$63$$.$CollectionTreeDataSource$.prototype.move});
  $oj$$63$$.$CollectionTreeDataSource$.prototype.moveOK = function $$oj$$63$$$$CollectionTreeDataSource$$$moveOK$() {
    return "invalid";
  };
  $oj$$63$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.moveOK", {moveOK:$oj$$63$$.$CollectionTreeDataSource$.prototype.moveOK});
  $oj$$63$$.$CollectionTreeDataSource$.prototype.getCapability = function $$oj$$63$$$$CollectionTreeDataSource$$$getCapability$($feature$$11$$) {
    return "sort" === $feature$$11$$ ? "default" : "move" === $feature$$11$$ ? "none" : "batchFetch" === $feature$$11$$ || "fetchDescendants" === $feature$$11$$ ? "disable" : null;
  };
  $oj$$63$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.getCapability", {getCapability:$oj$$63$$.$CollectionTreeDataSource$.prototype.getCapability});
});
