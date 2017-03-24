/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdatasource-common"], function($oj$$21$$, $$$$20$$) {
  $oj$$21$$.$EmptyNodeSet$ = function $$oj$$21$$$$EmptyNodeSet$$($parent$$21$$, $start$$52$$) {
    this.$m_parent$ = $parent$$21$$;
    this.$m_start$ = $start$$52$$;
  };
  $goog$exportPath_$$("EmptyNodeSet", $oj$$21$$.$EmptyNodeSet$, $oj$$21$$);
  $oj$$21$$.$EmptyNodeSet$.prototype.getParent = function $$oj$$21$$$$EmptyNodeSet$$$getParent$() {
    return this.$m_parent$;
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("EmptyNodeSet.prototype.getParent", {getParent:$oj$$21$$.$EmptyNodeSet$.prototype.getParent});
  $oj$$21$$.$EmptyNodeSet$.prototype.getStart = function $$oj$$21$$$$EmptyNodeSet$$$getStart$() {
    return this.$m_start$;
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("EmptyNodeSet.prototype.getStart", {getStart:$oj$$21$$.$EmptyNodeSet$.prototype.getStart});
  $oj$$21$$.$EmptyNodeSet$.prototype.getCount = function $$oj$$21$$$$EmptyNodeSet$$$getCount$() {
    return 0;
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("EmptyNodeSet.prototype.getCount", {getCount:$oj$$21$$.$EmptyNodeSet$.prototype.getCount});
  $oj$$21$$.$EmptyNodeSet$.prototype.getData = function $$oj$$21$$$$EmptyNodeSet$$$getData$() {
    return null;
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("EmptyNodeSet.prototype.getData", {getData:$oj$$21$$.$EmptyNodeSet$.prototype.getData});
  $oj$$21$$.$EmptyNodeSet$.prototype.getMetadata = function $$oj$$21$$$$EmptyNodeSet$$$getMetadata$() {
    return null;
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("EmptyNodeSet.prototype.getMetadata", {getMetadata:$oj$$21$$.$EmptyNodeSet$.prototype.getMetadata});
  $oj$$21$$.$FlattenedNodeSet$ = function $$oj$$21$$$$FlattenedNodeSet$$($nodeSet$$2$$, $actualStart$$) {
    this.$m_nodeSet$ = $nodeSet$$2$$;
    this.$m_start$ = $actualStart$$;
  };
  $goog$exportPath_$$("FlattenedNodeSet", $oj$$21$$.$FlattenedNodeSet$, $oj$$21$$);
  $oj$$21$$.$FlattenedNodeSet$.prototype.getParent = function $$oj$$21$$$$FlattenedNodeSet$$$getParent$() {
    return this.$m_nodeSet$.getParent();
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("FlattenedNodeSet.prototype.getParent", {getParent:$oj$$21$$.$FlattenedNodeSet$.prototype.getParent});
  $oj$$21$$.$FlattenedNodeSet$.prototype.getStart = function $$oj$$21$$$$FlattenedNodeSet$$$getStart$() {
    return void 0 != this.$m_start$ ? this.$m_start$ : this.$m_nodeSet$.getStart();
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("FlattenedNodeSet.prototype.getStart", {getStart:$oj$$21$$.$FlattenedNodeSet$.prototype.getStart});
  $oj$$21$$.$FlattenedNodeSet$.prototype.getCount = function $$oj$$21$$$$FlattenedNodeSet$$$getCount$() {
    void 0 === this.$m_count$ && (this.$m_count$ = this.$_getCount$(this.$m_nodeSet$, 0), void 0 != this.$m_start$ && (this.$m_count$ -= this.$m_start$));
    return this.$m_count$;
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("FlattenedNodeSet.prototype.getCount", {getCount:$oj$$21$$.$FlattenedNodeSet$.prototype.getCount});
  $oj$$21$$.$FlattenedNodeSet$.prototype.$_getCount$ = function $$oj$$21$$$$FlattenedNodeSet$$$$_getCount$$($nodeSet$$3$$, $total$$1$$) {
    var $start$$53$$, $count$$39$$, $i$$348$$, $child$$7$$;
    $start$$53$$ = $nodeSet$$3$$.getStart();
    $count$$39$$ = $nodeSet$$3$$.getCount();
    $total$$1$$ += $count$$39$$;
    if ($nodeSet$$3$$.$getChildNodeSet$) {
      for ($i$$348$$ = 0;$i$$348$$ < $count$$39$$;$i$$348$$++) {
        $child$$7$$ = $nodeSet$$3$$.$getChildNodeSet$($i$$348$$ + $start$$53$$), null != $child$$7$$ && ($total$$1$$ = this.$_getCount$($child$$7$$, $total$$1$$));
      }
    }
    return $total$$1$$;
  };
  $oj$$21$$.$FlattenedNodeSet$.prototype.getData = function $$oj$$21$$$$FlattenedNodeSet$$$getData$($index$$193$$) {
    return this.$_getDataOrMetadata$(this.$m_nodeSet$, $index$$193$$, {index:this.$m_nodeSet$.getStart()}, this.$_getData$);
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("FlattenedNodeSet.prototype.getData", {getData:$oj$$21$$.$FlattenedNodeSet$.prototype.getData});
  $oj$$21$$.$FlattenedNodeSet$.prototype.getMetadata = function $$oj$$21$$$$FlattenedNodeSet$$$getMetadata$($index$$194$$) {
    return this.$_getDataOrMetadata$(this.$m_nodeSet$, $index$$194$$, {index:this.$m_nodeSet$.getStart()}, this.$_getMetadata$);
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("FlattenedNodeSet.prototype.getMetadata", {getMetadata:$oj$$21$$.$FlattenedNodeSet$.prototype.getMetadata});
  $oj$$21$$.$FlattenedNodeSet$.prototype.$_getMetadata$ = function $$oj$$21$$$$FlattenedNodeSet$$$$_getMetadata$$($nodeSet$$4$$, $index$$195$$) {
    return $nodeSet$$4$$.getMetadata($index$$195$$);
  };
  $oj$$21$$.$FlattenedNodeSet$.prototype.$_getData$ = function $$oj$$21$$$$FlattenedNodeSet$$$$_getData$$($nodeSet$$5$$, $index$$196$$) {
    return $nodeSet$$5$$.getData($index$$196$$);
  };
  $oj$$21$$.$FlattenedNodeSet$.prototype.$_getDataOrMetadata$ = function $$oj$$21$$$$FlattenedNodeSet$$$$_getDataOrMetadata$$($nodeSet$$6$$, $index$$197$$, $current$$19$$, $func$$9$$) {
    var $start$$54$$, $count$$40$$, $i$$349$$, $child$$8_currIndex_result$$55$$;
    $start$$54$$ = $nodeSet$$6$$.getStart();
    $count$$40$$ = $nodeSet$$6$$.getCount();
    for ($i$$349$$ = 0;$i$$349$$ < $count$$40$$;$i$$349$$++) {
      $child$$8_currIndex_result$$55$$ = $current$$19$$.index;
      if ($child$$8_currIndex_result$$55$$ === $index$$197$$) {
        return $func$$9$$.call(this, $nodeSet$$6$$, $i$$349$$ + $start$$54$$);
      }
      $current$$19$$.index = $child$$8_currIndex_result$$55$$ + 1;
      if ($nodeSet$$6$$.$getChildNodeSet$ && ($child$$8_currIndex_result$$55$$ = $nodeSet$$6$$.$getChildNodeSet$($i$$349$$ + $start$$54$$), null != $child$$8_currIndex_result$$55$$ && ($child$$8_currIndex_result$$55$$ = this.$_getDataOrMetadata$($child$$8_currIndex_result$$55$$, $index$$197$$, $current$$19$$, $func$$9$$), null != $child$$8_currIndex_result$$55$$))) {
        return $child$$8_currIndex_result$$55$$;
      }
    }
    return null;
  };
  $oj$$21$$.$MergedNodeSet$ = function $$oj$$21$$$$MergedNodeSet$$($nodeSet1$$, $nodeSet2$$, $mergeAt$$) {
    this.$m_nodeSet1$ = $nodeSet1$$;
    this.$m_nodeSet2$ = $nodeSet2$$;
    this.$m_mergeAt$ = this.$_findIndex$($mergeAt$$);
  };
  $goog$exportPath_$$("MergedNodeSet", $oj$$21$$.$MergedNodeSet$, $oj$$21$$);
  $oj$$21$$.$MergedNodeSet$.prototype.$_findIndex$ = function $$oj$$21$$$$MergedNodeSet$$$$_findIndex$$($key$$138$$) {
    var $i$$350_start$$55$$, $end$$16$$, $rowKey$$27$$;
    $i$$350_start$$55$$ = this.$m_nodeSet1$.getStart();
    for ($end$$16$$ = $i$$350_start$$55$$ + this.$m_nodeSet1$.getCount();$i$$350_start$$55$$ < $end$$16$$;$i$$350_start$$55$$++) {
      if ($rowKey$$27$$ = this.$m_nodeSet1$.getMetadata($i$$350_start$$55$$).key, $key$$138$$ === $rowKey$$27$$) {
        return $i$$350_start$$55$$;
      }
    }
    return $end$$16$$ - 1;
  };
  $oj$$21$$.$MergedNodeSet$.prototype.getParent = function $$oj$$21$$$$MergedNodeSet$$$getParent$() {
    return this.$m_nodeSet1$.getParent();
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("MergedNodeSet.prototype.getParent", {getParent:$oj$$21$$.$MergedNodeSet$.prototype.getParent});
  $oj$$21$$.$MergedNodeSet$.prototype.getStart = function $$oj$$21$$$$MergedNodeSet$$$getStart$() {
    return this.$m_nodeSet1$.getStart();
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("MergedNodeSet.prototype.getStart", {getStart:$oj$$21$$.$MergedNodeSet$.prototype.getStart});
  $oj$$21$$.$MergedNodeSet$.prototype.getCount = function $$oj$$21$$$$MergedNodeSet$$$getCount$() {
    return this.$m_nodeSet1$.getCount() + this.$m_nodeSet2$.getCount();
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("MergedNodeSet.prototype.getCount", {getCount:$oj$$21$$.$MergedNodeSet$.prototype.getCount});
  $oj$$21$$.$MergedNodeSet$.prototype.getData = function $$oj$$21$$$$MergedNodeSet$$$getData$($index$$198_result$$56$$) {
    $index$$198_result$$56$$ = this.$_getRelativeIndex$($index$$198_result$$56$$);
    return $index$$198_result$$56$$.set.getData($index$$198_result$$56$$.index);
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("MergedNodeSet.prototype.getData", {getData:$oj$$21$$.$MergedNodeSet$.prototype.getData});
  $oj$$21$$.$MergedNodeSet$.prototype.getMetadata = function $$oj$$21$$$$MergedNodeSet$$$getMetadata$($index$$199_result$$57$$) {
    $index$$199_result$$57$$ = this.$_getRelativeIndex$($index$$199_result$$57$$);
    return $index$$199_result$$57$$.set.getMetadata($index$$199_result$$57$$.index);
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("MergedNodeSet.prototype.getMetadata", {getMetadata:$oj$$21$$.$MergedNodeSet$.prototype.getMetadata});
  $oj$$21$$.$MergedNodeSet$.prototype.$_getRelativeIndex$ = function $$oj$$21$$$$MergedNodeSet$$$$_getRelativeIndex$$($index$$200$$) {
    if ($index$$200$$ <= this.$m_mergeAt$) {
      return{set:this.$m_nodeSet1$, index:$index$$200$$};
    }
    var $count$$41$$ = this.$m_nodeSet2$.getCount();
    return $index$$200$$ > this.$m_mergeAt$ + $count$$41$$ ? {set:this.$m_nodeSet1$, index:$index$$200$$ - $count$$41$$} : {set:this.$m_nodeSet2$, index:$index$$200$$ - (this.$m_mergeAt$ + 1)};
  };
  $oj$$21$$.$NodeSetWrapper$ = function $$oj$$21$$$$NodeSetWrapper$$($nodeSet$$7$$, $metadataCallback$$, $range$$18$$, $collapsedKeys$$) {
    this.$m_nodeSet$ = $nodeSet$$7$$;
    this.$m_callback$ = $metadataCallback$$;
    this.$m_range$ = $range$$18$$;
    this.$m_collapsedKeys$ = $collapsedKeys$$;
  };
  $goog$exportPath_$$("NodeSetWrapper", $oj$$21$$.$NodeSetWrapper$, $oj$$21$$);
  $oj$$21$$.$NodeSetWrapper$.prototype.getParent = function $$oj$$21$$$$NodeSetWrapper$$$getParent$() {
    return this.$m_nodeSet$.getParent();
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("NodeSetWrapper.prototype.getParent", {getParent:$oj$$21$$.$NodeSetWrapper$.prototype.getParent});
  $oj$$21$$.$NodeSetWrapper$.prototype.getStart = function $$oj$$21$$$$NodeSetWrapper$$$getStart$() {
    return null != this.$m_range$ ? this.$m_range$.start : this.$m_nodeSet$.getStart();
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("NodeSetWrapper.prototype.getStart", {getStart:$oj$$21$$.$NodeSetWrapper$.prototype.getStart});
  $oj$$21$$.$NodeSetWrapper$.prototype.getCount = function $$oj$$21$$$$NodeSetWrapper$$$getCount$() {
    var $nodeStart$$, $nodeCount$$1$$;
    $nodeStart$$ = this.$m_nodeSet$.getStart();
    $nodeCount$$1$$ = this.$m_nodeSet$.getCount();
    null != this.$m_range$ && (this.$m_range$.start > $nodeStart$$ ? $nodeCount$$1$$ = Math.min(0, $nodeCount$$1$$ - (this.$m_range$.start - $nodeStart$$)) : this.$m_range$.start < $nodeStart$$ && ($nodeCount$$1$$ = 0));
    return $nodeCount$$1$$;
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("NodeSetWrapper.prototype.getCount", {getCount:$oj$$21$$.$NodeSetWrapper$.prototype.getCount});
  $oj$$21$$.$NodeSetWrapper$.prototype.getData = function $$oj$$21$$$$NodeSetWrapper$$$getData$($index$$201$$) {
    return this.$m_nodeSet$.getData($index$$201$$);
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("NodeSetWrapper.prototype.getData", {getData:$oj$$21$$.$NodeSetWrapper$.prototype.getData});
  $oj$$21$$.$NodeSetWrapper$.prototype.getMetadata = function $$oj$$21$$$$NodeSetWrapper$$$getMetadata$($index$$202$$) {
    var $metadata$$9$$;
    $metadata$$9$$ = this.$m_nodeSet$.getMetadata($index$$202$$);
    $metadata$$9$$.index = $index$$202$$;
    $metadata$$9$$.parentKey = this.getParent();
    this.$m_callback$.call(null, $metadata$$9$$.key, $metadata$$9$$);
    return $metadata$$9$$;
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("NodeSetWrapper.prototype.getMetadata", {getMetadata:$oj$$21$$.$NodeSetWrapper$.prototype.getMetadata});
  $oj$$21$$.$NodeSetWrapper$.prototype.$getChildNodeSet$ = function $$oj$$21$$$$NodeSetWrapper$$$$getChildNodeSet$$($index$$203_result$$58$$) {
    return null != this.$m_collapsedKeys$ && -1 != this.$m_collapsedKeys$.indexOf(this.$m_nodeSet$.getMetadata($index$$203_result$$58$$).key) || !this.$m_nodeSet$.$getChildNodeSet$ || ($index$$203_result$$58$$ = this.$m_nodeSet$.$getChildNodeSet$($index$$203_result$$58$$), null == $index$$203_result$$58$$) ? null : new $oj$$21$$.$NodeSetWrapper$($index$$203_result$$58$$, this.$m_callback$, null, this.$m_collapsedKeys$);
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("NodeSetWrapper.prototype.getChildNodeSet", {$getChildNodeSet$:$oj$$21$$.$NodeSetWrapper$.prototype.$getChildNodeSet$});
  $oj$$21$$.$FlattenedTreeDataSource$ = function $$oj$$21$$$$FlattenedTreeDataSource$$($treeDataSource$$, $options$$278$$) {
    this.$m_wrapped$ = $treeDataSource$$;
    this.$m_options$ = $options$$278$$ || {};
    $oj$$21$$.$FlattenedTreeDataSource$.$superclass$.constructor.call(this);
  };
  $goog$exportPath_$$("FlattenedTreeDataSource", $oj$$21$$.$FlattenedTreeDataSource$, $oj$$21$$);
  $oj$$21$$.$Object$.$createSubclass$($oj$$21$$.$FlattenedTreeDataSource$, $oj$$21$$.$DataSource$, "oj.FlattenedTreeDataSource");
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.Init = function $$oj$$21$$$$FlattenedTreeDataSource$$$Init$() {
    var $expanded$$9$$;
    $oj$$21$$.$FlattenedTreeDataSource$.$superclass$.Init.call(this);
    this.$m_wrapped$.on("change", this.$_handleModelEvent$.bind(this));
    this.$m_fetchSize$ = parseInt(this.$m_options$.fetchSize, 10);
    isNaN(this.$m_fetchSize$) && (this.$m_fetchSize$ = 25);
    this.$m_maxCount$ = parseInt(this.$m_options$.maxCount, 10);
    isNaN(this.$m_maxCount$) && (this.$m_maxCount$ = 500);
    $expanded$$9$$ = this.$m_options$.expanded;
    Array.isArray($expanded$$9$$) ? this.$m_expandedKeys$ = $expanded$$9$$ : ("all" === $expanded$$9$$ && (this.$m_collapsedKeys$ = []), this.$m_expandedKeys$ = []);
    this.$m_cache$ = [];
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataSource.prototype.Init", {Init:$oj$$21$$.$FlattenedTreeDataSource$.prototype.Init});
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.handleEvent = function $$oj$$21$$$$FlattenedTreeDataSource$$$handleEvent$($eventType$$39$$, $event$$479$$) {
    return $oj$$21$$.$FlattenedTreeDataSource$.$superclass$.handleEvent.call(this, $eventType$$39$$, $event$$479$$);
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataSource.prototype.handleEvent", {handleEvent:$oj$$21$$.$FlattenedTreeDataSource$.prototype.handleEvent});
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$Destroy$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$Destroy$$() {
    delete this.$m_cache$;
    delete this.$m_expandedKeys$;
    delete this.$m_collapsedKeys$;
    this.$m_wrapped$.off("change");
    this.$m_wrapped$.$Destroy$ && this.$m_wrapped$.$Destroy$();
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataSource.prototype.Destroy", {$Destroy$:$oj$$21$$.$FlattenedTreeDataSource$.prototype.$Destroy$});
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$getFetchSize$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$getFetchSize$$() {
    return this.$m_fetchSize$;
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$getExpandedKeys$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$getExpandedKeys$$() {
    return this.$m_expandedKeys$;
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataSource.prototype.getExpandedKeys", {$getExpandedKeys$:$oj$$21$$.$FlattenedTreeDataSource$.prototype.$getExpandedKeys$});
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$getOption$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$getOption$$($option$$33$$) {
    return null != this.$m_options$ ? this.$m_options$[$option$$33$$] : null;
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataSource.prototype.getOption", {$getOption$:$oj$$21$$.$FlattenedTreeDataSource$.prototype.$getOption$});
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.getWrappedDataSource = function $$oj$$21$$$$FlattenedTreeDataSource$$$getWrappedDataSource$() {
    return this.$m_wrapped$;
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataSource.prototype.getWrappedDataSource", {getWrappedDataSource:$oj$$21$$.$FlattenedTreeDataSource$.prototype.getWrappedDataSource});
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_getFetchSizeToUse$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_getFetchSizeToUse$$($count$$42$$) {
    var $fetchSize$$4$$, $maxCount$$;
    $fetchSize$$4$$ = this.$getFetchSize$();
    $maxCount$$ = this.$m_maxCount$;
    return-1 === $fetchSize$$4$$ ? -1 === $count$$42$$ ? $maxCount$$ : $count$$42$$ : -1 === $count$$42$$ ? Math.min($fetchSize$$4$$, $count$$42$$) : $fetchSize$$4$$;
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$fetchRows$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$fetchRows$$($range$$19$$, $callbacks$$10$$) {
    this.$_isExpandAll$() ? this.$_fetchRowsFromDescendants$($range$$19$$, $callbacks$$10$$) : this.$_fetchRowsFromChildren$($range$$19$$, $callbacks$$10$$);
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_fetchRowsFromChildren$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_fetchRowsFromChildren$$($range$$20$$, $callbacks$$11$$) {
    var $maxFetchSize_nodeSet$$8_processed$$6$$, $fetchSize$$5_lastEntry$$, $parent$$22$$, $count$$43$$, $index$$204$$, $depth$$17$$;
    if ($range$$20$$.start > this.$_getLastIndex$()) {
      $maxFetchSize_nodeSet$$8_processed$$6$$ = this.$_getMaxFetchSize$();
      if (0 > this.$_getLastIndex$()) {
        $range$$20$$.count = Math.min($maxFetchSize_nodeSet$$8_processed$$6$$, $range$$20$$.count);
        this.$m_wrapped$.$fetchChildren$(null, $range$$20$$, {success:function($nodeSet$$9$$) {
          this.$_handleFetchSuccess$($nodeSet$$9$$, null, 0, $range$$20$$, 0, $callbacks$$11$$);
        }.bind(this), error:function($status$$20$$) {
          this.$_handleFetchError$($status$$20$$, $callbacks$$11$$);
        }.bind(this)});
        return;
      }
      if (0 < $maxFetchSize_nodeSet$$8_processed$$6$$) {
        $fetchSize$$5_lastEntry$$ = this.$_getLastEntry$();
        $parent$$22$$ = $fetchSize$$5_lastEntry$$.parent;
        $count$$43$$ = this.$m_wrapped$.$getChildCount$($parent$$22$$);
        $index$$204$$ = $fetchSize$$5_lastEntry$$.index;
        $depth$$17$$ = $fetchSize$$5_lastEntry$$.depth;
        -1 === $count$$43$$ || $index$$204$$ < $count$$43$$ - 1 ? ($fetchSize$$5_lastEntry$$ = this.$_getFetchSizeToUse$($count$$43$$), $range$$20$$.start = $index$$204$$ + 1, $range$$20$$.count = -1 === $count$$43$$ ? Math.min($fetchSize$$5_lastEntry$$, $range$$20$$.count) : Math.min($maxFetchSize_nodeSet$$8_processed$$6$$, Math.min(Math.min($fetchSize$$5_lastEntry$$, $range$$20$$.count), $count$$43$$ - $range$$20$$.start)), this.$m_wrapped$.$fetchChildren$($parent$$22$$, $range$$20$$, {success:function($nodeSet$$10$$) {
          this.$_handleFetchSuccess$($nodeSet$$10$$, $parent$$22$$, $depth$$17$$, $range$$20$$, $count$$43$$, $callbacks$$11$$);
        }.bind(this), error:function($status$$21$$) {
          this.$_handleFetchError$($status$$21$$, $callbacks$$11$$);
        }.bind(this)})) : $index$$204$$ === $count$$43$$ - 1 ? ($maxFetchSize_nodeSet$$8_processed$$6$$ = new $oj$$21$$.$EmptyNodeSet$(null, $range$$20$$.start), null != $callbacks$$11$$ && null != $callbacks$$11$$.success && $callbacks$$11$$.success.call(null, $maxFetchSize_nodeSet$$8_processed$$6$$)) : ($maxFetchSize_nodeSet$$8_processed$$6$$ = this.$_fetchFromAncestors$($parent$$22$$, $depth$$17$$, $callbacks$$11$$, $maxFetchSize_nodeSet$$8_processed$$6$$), $maxFetchSize_nodeSet$$8_processed$$6$$ || 
        ($maxFetchSize_nodeSet$$8_processed$$6$$ = new $oj$$21$$.$EmptyNodeSet$(null, $range$$20$$.start), null != $callbacks$$11$$ && null != $callbacks$$11$$.success && $callbacks$$11$$.success.call(null, $maxFetchSize_nodeSet$$8_processed$$6$$)));
        return;
      }
    }
    this.$handleMaxCountReached$($range$$20$$, $callbacks$$11$$);
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.moveOK = function $$oj$$21$$$$FlattenedTreeDataSource$$$moveOK$($rowToMove$$2$$, $referenceRow$$8$$, $position$$14$$) {
    return this.$m_wrapped$.moveOK($rowToMove$$2$$, $referenceRow$$8$$, $position$$14$$);
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataSource.prototype.moveOK", {moveOK:$oj$$21$$.$FlattenedTreeDataSource$.prototype.moveOK});
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.move = function $$oj$$21$$$$FlattenedTreeDataSource$$$move$($rowToMove$$3$$, $referenceRow$$9$$, $position$$15$$, $callbacks$$12$$) {
    this.$m_wrapped$.move($rowToMove$$3$$, $referenceRow$$9$$, $position$$15$$, $callbacks$$12$$);
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataSource.prototype.move", {move:$oj$$21$$.$FlattenedTreeDataSource$.prototype.move});
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_getMaxFetchSize$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_getMaxFetchSize$$() {
    return this.$m_maxCount$ - (this.$_getLastIndex$() + 1);
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_handleFetchError$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_handleFetchError$$($status$$22$$, $callbacks$$13$$) {
    null != $callbacks$$13$$ && null != $callbacks$$13$$.error && $callbacks$$13$$.error.call(null, $status$$22$$);
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_handleFetchSuccess$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_handleFetchSuccess$$($nodeSet$$11$$, $parent$$23_queue$$2$$, $depth$$18$$, $range$$21$$, $count$$44$$, $callbacks$$14$$) {
    var $prevNodeSetInfo_processed$$7_toExpand$$;
    $prevNodeSetInfo_processed$$7_toExpand$$ = [];
    $nodeSet$$11$$ = new $oj$$21$$.$NodeSetWrapper$($nodeSet$$11$$, this.$insertMetadata$.bind(this), $range$$21$$);
    this.$_processNodeSet$($nodeSet$$11$$, $parent$$23_queue$$2$$, $depth$$18$$, $prevNodeSetInfo_processed$$7_toExpand$$);
    -1 === $count$$44$$ && 0 === $nodeSet$$11$$.getCount() && null != $parent$$23_queue$$2$$ && 0 < $depth$$18$$ ? ($prevNodeSetInfo_processed$$7_toExpand$$ = this.$_fetchFromAncestors$($parent$$23_queue$$2$$, $depth$$18$$, $callbacks$$14$$)) || null != $callbacks$$14$$ && null != $callbacks$$14$$.success && $callbacks$$14$$.success.call(null, $nodeSet$$11$$) : 0 === $prevNodeSetInfo_processed$$7_toExpand$$.length ? null != $callbacks$$14$$ && null != $callbacks$$14$$.success && $callbacks$$14$$.success.call(null, 
    $nodeSet$$11$$) : ($parent$$23_queue$$2$$ = [], $parent$$23_queue$$2$$.push($prevNodeSetInfo_processed$$7_toExpand$$), $prevNodeSetInfo_processed$$7_toExpand$$ = {}, $prevNodeSetInfo_processed$$7_toExpand$$.callbacks = $callbacks$$14$$, $prevNodeSetInfo_processed$$7_toExpand$$.nodeSet = $nodeSet$$11$$, $prevNodeSetInfo_processed$$7_toExpand$$.keys = [], this.$_syncExpandRows$($parent$$23_queue$$2$$, $prevNodeSetInfo_processed$$7_toExpand$$));
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$getChildCount$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$getChildCount$$($parent$$24$$) {
    return this.$m_wrapped$.$getChildCount$($parent$$24$$);
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataSource.prototype.getChildCount", {$getChildCount$:$oj$$21$$.$FlattenedTreeDataSource$.prototype.$getChildCount$});
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_fetchFromAncestors$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_fetchFromAncestors$$($parent$$25$$, $depth$$19$$, $callbacks$$15$$, $maxFetchSize$$1$$) {
    var $options$$279$$, $remainToFetch$$, $i$$351$$, $currEntry_index$$205$$, $currDepth$$, $count$$45$$, $countUnknown$$, $range$$22$$, $fetchSize$$6$$;
    void 0 === $maxFetchSize$$1$$ && ($maxFetchSize$$1$$ = this.$_getMaxFetchSize$());
    this.$_isBatchFetching$() && ($options$$279$$ = {queueOnly:!0});
    $remainToFetch$$ = $fetchSize$$6$$ = this.$_getFetchSizeToUse$(-1);
    for ($i$$351$$ = this.$_getLastIndex$() - 1;0 <= $i$$351$$;$i$$351$$--) {
      if ($currEntry_index$$205$$ = this.$_getEntry$($i$$351$$), $currDepth$$ = $currEntry_index$$205$$.depth, $currDepth$$ < $depth$$19$$ && ($parent$$25$$ = $currEntry_index$$205$$.parent, $count$$45$$ = this.$m_wrapped$.$getChildCount$($parent$$25$$), $currEntry_index$$205$$ = $currEntry_index$$205$$.index, ($countUnknown$$ = -1 === $count$$45$$) || $currEntry_index$$205$$ < $count$$45$$ - 1)) {
        $range$$22$$ = {};
        $range$$22$$.start = $currEntry_index$$205$$ + 1;
        $countUnknown$$ ? ($range$$22$$.count = Math.min($maxFetchSize$$1$$, Math.max(0, $remainToFetch$$)), $options$$279$$ = void 0) : $range$$22$$.count = Math.min($maxFetchSize$$1$$, Math.min($remainToFetch$$, $count$$45$$ - $range$$22$$.start));
        if (0 == $range$$22$$.count) {
          break;
        }
        this.$m_wrapped$.$fetchChildren$($parent$$25$$, $range$$22$$, {success:function($nodeSet$$12$$) {
          this.$_handleFetchSuccess$($nodeSet$$12$$, $parent$$25$$, $currDepth$$, $range$$22$$, $count$$45$$, $callbacks$$15$$);
        }.bind(this), error:function($status$$23$$) {
          this.$_handleFetchError$($status$$23$$, $callbacks$$15$$);
        }.bind(this)}, $options$$279$$);
        $depth$$19$$ = $currDepth$$;
        $remainToFetch$$ = Math.max(0, $remainToFetch$$ - $range$$22$$.count);
        if ($countUnknown$$ || 0 === $currDepth$$ || 0 === $remainToFetch$$) {
          break;
        }
      }
    }
    void 0 != $options$$279$$ && this.$m_wrapped$.$fetchChildren$($parent$$25$$, {start:$range$$22$$.count, count:0}, {success:function($nodeSet$$13$$) {
      this.$_handleFetchSuccess$($nodeSet$$13$$, $parent$$25$$, $currDepth$$, $range$$22$$, $count$$45$$, $callbacks$$15$$);
    }.bind(this), error:function($status$$24$$) {
      this.$_handleFetchError$($status$$24$$, $callbacks$$15$$);
    }.bind(this)});
    return $remainToFetch$$ != $fetchSize$$6$$;
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_processNodeSet$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_processNodeSet$$($nodeSet$$14$$, $parent$$26$$, $depth$$20$$, $toExpand$$1$$) {
    var $nodeStart$$1$$, $nodeCount$$2$$, $i$$352$$, $key$$139_metadata$$10$$;
    $nodeStart$$1$$ = $nodeSet$$14$$.getStart();
    $nodeCount$$2$$ = $nodeSet$$14$$.getCount();
    for ($i$$352$$ = 0;$i$$352$$ < $nodeCount$$2$$;$i$$352$$++) {
      $key$$139_metadata$$10$$ = $nodeSet$$14$$.getMetadata($nodeStart$$1$$ + $i$$352$$), $key$$139_metadata$$10$$ = $key$$139_metadata$$10$$.key, this.$_addEntry$($key$$139_metadata$$10$$, $depth$$20$$, $nodeStart$$1$$ + $i$$352$$, $parent$$26$$), this.$_isExpanded$($key$$139_metadata$$10$$) && $toExpand$$1$$.push($key$$139_metadata$$10$$);
    }
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$insertMetadata$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$insertMetadata$$($key$$140$$, $metadata$$11$$) {
    this.$_isExpanded$($key$$140$$) && !$metadata$$11$$.leaf ? $metadata$$11$$.state = "expanded" : $metadata$$11$$.state = $metadata$$11$$.leaf ? "leaf" : "collapsed";
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_fetchRowsFromDescendants$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_fetchRowsFromDescendants$$($range$$23$$, $callbacks$$16$$) {
    var $options$$280$$ = {maxCount:this.$m_maxCount$};
    0 <= this.$_getLastIndex$() && ($options$$280$$.start = this.$_getEntry$(this.$_getLastIndex$()).key);
    this.$m_wrapped$.$fetchDescendants$(null, {success:function($nodeSet$$15$$) {
      this.$_handleFetchDescendantsSuccess$($nodeSet$$15$$, $range$$23$$, $callbacks$$16$$);
    }.bind(this), error:function($status$$25$$) {
      this.$_handleFetchError$($status$$25$$, $callbacks$$16$$);
    }.bind(this)}, $options$$280$$);
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$getSortCriteria$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$getSortCriteria$$() {
    return this.$m_wrapped$.$getSortCriteria$();
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataSource.prototype.getSortCriteria", {$getSortCriteria$:$oj$$21$$.$FlattenedTreeDataSource$.prototype.$getSortCriteria$});
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_handleFetchDescendantsSuccess$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_handleFetchDescendantsSuccess$$($nodeSet$$16$$, $range$$24$$, $callbacks$$17$$) {
    var $maxFetchSize$$2_options$$281$$, $actualStart$$1_count$$46$$, $lastEntry$$1$$;
    $range$$24$$.start > this.$_getLastIndex$() ? ($maxFetchSize$$2_options$$281$$ = this.$_getMaxFetchSize$(), $actualStart$$1_count$$46$$ = Math.min($maxFetchSize$$2_options$$281$$, $range$$24$$.count), $nodeSet$$16$$ = new $oj$$21$$.$NodeSetWrapper$($nodeSet$$16$$, this.$insertMetadata$.bind(this), null, this.$m_collapsedKeys$), 0 <= this.$_getLastIndex$() ? ($lastEntry$$1$$ = this.$_getLastEntry$(), $maxFetchSize$$2_options$$281$$ = {index:0, found:!1, count:0}, this.$_processDescendantsNodeSet$($nodeSet$$16$$, 
    null, 0, $lastEntry$$1$$, $actualStart$$1_count$$46$$, $maxFetchSize$$2_options$$281$$), $actualStart$$1_count$$46$$ = $maxFetchSize$$2_options$$281$$.index + 1) : ($maxFetchSize$$2_options$$281$$ = {count:0}, this.$_processDescendantsNodeSet$($nodeSet$$16$$, null, 0, null, $actualStart$$1_count$$46$$, $maxFetchSize$$2_options$$281$$), $actualStart$$1_count$$46$$ = 0), null != $callbacks$$17$$ && null != $callbacks$$17$$.success && ($nodeSet$$16$$ = null != $maxFetchSize$$2_options$$281$$ ? 0 === 
    $maxFetchSize$$2_options$$281$$.count ? new $oj$$21$$.$EmptyNodeSet$(null, $range$$24$$.start) : new $oj$$21$$.$FlattenedNodeSet$($nodeSet$$16$$, $actualStart$$1_count$$46$$) : new $oj$$21$$.$FlattenedNodeSet$($nodeSet$$16$$), $callbacks$$17$$.success.call(null, $nodeSet$$16$$))) : this.$handleMaxCountReached$($range$$24$$, $callbacks$$17$$);
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_processDescendantsNodeSet$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_processDescendantsNodeSet$$($nodeSet$$17$$, $parent$$27$$, $depth$$21$$, $lastEntry$$2$$, $maxCount$$1$$, $options$$282$$) {
    var $nodeStart$$2$$, $nodeCount$$3$$, $i$$353$$, $childNodeSet_metadata$$12$$, $key$$141$$;
    $nodeStart$$2$$ = $nodeSet$$17$$.getStart();
    $nodeCount$$3$$ = $nodeSet$$17$$.getCount();
    for ($i$$353$$ = 0;$i$$353$$ < $nodeCount$$3$$ && $options$$282$$.count != $maxCount$$1$$;$i$$353$$++) {
      $childNodeSet_metadata$$12$$ = $nodeSet$$17$$.getMetadata($nodeStart$$2$$ + $i$$353$$);
      $key$$141$$ = $childNodeSet_metadata$$12$$.key;
      $options$$282$$.checkDepth && $lastEntry$$2$$.depth === $depth$$21$$ && ($options$$282$$.found = !0, $options$$282$$.checkDepth = !1);
      if (null == $lastEntry$$2$$ || $options$$282$$.found) {
        this.$_addEntry$($key$$141$$, $depth$$21$$, $nodeStart$$2$$ + $i$$353$$, $parent$$27$$), $options$$282$$.count += 1, $childNodeSet_metadata$$12$$.state = $childNodeSet_metadata$$12$$.leaf ? "leaf" : "expanded";
      }
      null == $lastEntry$$2$$ || $options$$282$$.found || ($key$$141$$ === $lastEntry$$2$$.key ? $childNodeSet_metadata$$12$$.leaf || this.$_isExpanded$($key$$141$$) ? $options$$282$$.found = !0 : $options$$282$$.checkDepth = !0 : $options$$282$$.index += 1);
      $nodeSet$$17$$.$getChildNodeSet$ && this.$_isExpanded$($key$$141$$) && ($childNodeSet_metadata$$12$$ = $nodeSet$$17$$.$getChildNodeSet$($i$$353$$), null != $childNodeSet_metadata$$12$$ && this.$_processDescendantsNodeSet$($childNodeSet_metadata$$12$$, $key$$141$$, $depth$$21$$ + 1, $lastEntry$$2$$, $maxCount$$1$$, $options$$282$$));
    }
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.expand = function $$oj$$21$$$$FlattenedTreeDataSource$$$expand$($rowKey$$29$$) {
    this.$_expand$($rowKey$$29$$);
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataSource.prototype.expand", {expand:$oj$$21$$.$FlattenedTreeDataSource$.prototype.expand});
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_expand$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_expand$$($rowKey$$30$$, $options$$283$$) {
    var $count$$47$$, $fetchSize$$7$$, $maxCount$$2$$, $refIndex$$;
    $count$$47$$ = this.$m_wrapped$.$getChildCount$($rowKey$$30$$);
    $fetchSize$$7$$ = this.$_getFetchSizeToUse$($count$$47$$);
    $maxCount$$2$$ = this.$m_maxCount$;
    if (this.$_getLastIndex$() + 1 === $maxCount$$2$$ && ($refIndex$$ = this.$getIndex$($rowKey$$30$$), $refIndex$$ == $maxCount$$2$$ - 1)) {
      this.$handleExpandSuccess$($rowKey$$30$$, new $oj$$21$$.$EmptyNodeSet$($rowKey$$30$$, 0), 0, $options$$283$$);
      return;
    }
    0 == $fetchSize$$7$$ ? this.$handleExpandSuccess$($rowKey$$30$$, new $oj$$21$$.$EmptyNodeSet$($rowKey$$30$$, 0), 0, $options$$283$$) : this.$m_wrapped$.$fetchChildren$($rowKey$$30$$, {start:0, count:$fetchSize$$7$$}, {success:function($nodeSet$$18$$) {
      this.$handleExpandSuccess$($rowKey$$30$$, $nodeSet$$18$$, $count$$47$$, $options$$283$$);
    }.bind(this), error:function() {
      this.$handleExpandError$($rowKey$$30$$);
    }.bind(this)});
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.collapse = function $$oj$$21$$$$FlattenedTreeDataSource$$$collapse$($rowKey$$31$$) {
    var $rowIndex$$15$$, $depth$$22_i$$354_parent$$28$$, $count$$48$$, $keys$$47_lastIndex$$, $j$$50$$;
    $rowIndex$$15$$ = this.$getIndex$($rowKey$$31$$) + 1;
    $depth$$22_i$$354_parent$$28$$ = this.$_getEntry$($rowIndex$$15$$ - 1);
    $count$$48$$ = 0;
    $depth$$22_i$$354_parent$$28$$ = $depth$$22_i$$354_parent$$28$$.depth;
    $keys$$47_lastIndex$$ = this.$_getLastIndex$();
    for ($j$$50$$ = $rowIndex$$15$$;$j$$50$$ < $keys$$47_lastIndex$$ + 1;$j$$50$$++) {
      var $rowDepth$$ = this.$_getEntry$($j$$50$$).depth;
      if ($rowDepth$$ > $depth$$22_i$$354_parent$$28$$) {
        $count$$48$$ += 1;
      } else {
        if ($rowDepth$$ == $depth$$22_i$$354_parent$$28$$) {
          break;
        }
      }
    }
    if (0 != $count$$48$$) {
      this.$_isExpandAll$() ? this.$m_collapsedKeys$.push($rowKey$$31$$) : this.$_removeExpanded$($rowKey$$31$$);
      $keys$$47_lastIndex$$ = [];
      for ($depth$$22_i$$354_parent$$28$$ = 0;$depth$$22_i$$354_parent$$28$$ < $count$$48$$;$depth$$22_i$$354_parent$$28$$++) {
        $keys$$47_lastIndex$$.push({key:this.$_getEntry$($rowIndex$$15$$ + $depth$$22_i$$354_parent$$28$$).key, index:$rowIndex$$15$$ + $depth$$22_i$$354_parent$$28$$});
      }
      this.$_removeEntry$($rowIndex$$15$$, $count$$48$$);
      this.$removeRows$($keys$$47_lastIndex$$);
    }
    this.handleEvent("collapse", {rowKey:$rowKey$$31$$});
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataSource.prototype.collapse", {collapse:$oj$$21$$.$FlattenedTreeDataSource$.prototype.collapse});
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_isExpanded$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_isExpanded$$($rowKey$$32$$) {
    return this.$_isExpandAll$() ? this.$m_collapsedKeys$ && 0 < this.$m_collapsedKeys$.length ? -1 === this.$_getCollapsedKeyIndex$($rowKey$$32$$) : !0 : this.$m_expandedKeys$ && 0 < this.$m_expandedKeys$.length ? -1 < this.$_getExpandedKeyIndex$($rowKey$$32$$) : !1;
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_getCollapsedKeyIndex$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_getCollapsedKeyIndex$$($rowKey$$33$$) {
    return this.$_getKeyIndex$(this.$m_collapsedKeys$, $rowKey$$33$$);
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_getExpandedKeyIndex$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_getExpandedKeyIndex$$($rowKey$$34$$) {
    return this.$_getKeyIndex$(this.$m_expandedKeys$, $rowKey$$34$$);
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_getKeyIndex$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_getKeyIndex$$($arr$$23$$, $rowKey$$35$$) {
    var $i$$355$$, $index$$206$$;
    $index$$206$$ = -1;
    for ($i$$355$$ = 0;$i$$355$$ < $arr$$23$$.length;$i$$355$$++) {
      $arr$$23$$[$i$$355$$] === $rowKey$$35$$ && ($index$$206$$ = $i$$355$$);
    }
    return $index$$206$$;
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_removeExpanded$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_removeExpanded$$($index$$207_rowKey$$36$$) {
    $index$$207_rowKey$$36$$ = this.$_getExpandedKeyIndex$($index$$207_rowKey$$36$$);
    -1 < $index$$207_rowKey$$36$$ && this.$m_expandedKeys$.splice($index$$207_rowKey$$36$$, 1);
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_removeCollapsed$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_removeCollapsed$$($index$$208_rowKey$$37$$) {
    $index$$208_rowKey$$37$$ = this.$_getCollapsedKeyIndex$($index$$208_rowKey$$37$$);
    -1 < $index$$208_rowKey$$37$$ && this.$m_collapsedKeys$.splice($index$$208_rowKey$$37$$, 1);
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$handleExpandError$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$handleExpandError$$($rowKey$$38$$) {
    this.handleEvent("expand", {rowKey:$rowKey$$38$$});
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$handleExpandSuccess$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$handleExpandSuccess$$($rowKey$$39$$, $maxCount$$3_nodeSet$$19$$, $childCount_j$$51$$, $callbacks$$18_options$$284$$) {
    var $refIndex$$1$$, $rangeStart$$, $metadata$$13_rowStart$$12$$, $rowCount$$17$$, $parent$$29$$, $depth$$23$$, $key$$142$$, $toExpand$$2$$, $i$$356$$, $queue$$4$$, $prevNodeSetInfo$$2$$;
    $maxCount$$3_nodeSet$$19$$ = new $oj$$21$$.$NodeSetWrapper$($maxCount$$3_nodeSet$$19$$, this.$insertMetadata$.bind(this));
    $rangeStart$$ = $refIndex$$1$$ = this.$getIndex$($rowKey$$39$$) + 1;
    $metadata$$13_rowStart$$12$$ = $maxCount$$3_nodeSet$$19$$.getStart();
    $rowCount$$17$$ = $maxCount$$3_nodeSet$$19$$.getCount();
    $parent$$29$$ = this.$_getEntry$($refIndex$$1$$ - 1);
    $depth$$23$$ = $parent$$29$$.depth + 1;
    $toExpand$$2$$ = [];
    for ($i$$356$$ = $metadata$$13_rowStart$$12$$;$i$$356$$ < $rowCount$$17$$;$i$$356$$++) {
      $metadata$$13_rowStart$$12$$ = $maxCount$$3_nodeSet$$19$$.getMetadata($i$$356$$), $key$$142$$ = $metadata$$13_rowStart$$12$$.key, this.$_isExpanded$($key$$142$$) && $toExpand$$2$$.push($key$$142$$), this.$_insertRow$($refIndex$$1$$, $metadata$$13_rowStart$$12$$, $parent$$29$$.key, $i$$356$$, $depth$$23$$), $refIndex$$1$$++;
    }
    this.$_isExpandAll$() ? this.$_removeCollapsed$($rowKey$$39$$) : -1 === this.$m_expandedKeys$.indexOf($rowKey$$39$$) && this.$m_expandedKeys$.push($rowKey$$39$$);
    void 0 != $callbacks$$18_options$$284$$ && ($queue$$4$$ = $callbacks$$18_options$$284$$.queue, $prevNodeSetInfo$$2$$ = $callbacks$$18_options$$284$$.prevNodeSetInfo);
    void 0 != $prevNodeSetInfo$$2$$ && ($maxCount$$3_nodeSet$$19$$ = new $oj$$21$$.$MergedNodeSet$($prevNodeSetInfo$$2$$.nodeSet, $maxCount$$3_nodeSet$$19$$, $rowKey$$39$$));
    if (0 != $toExpand$$2$$.length || void 0 !== $queue$$4$$ && 0 != $queue$$4$$.length) {
      void 0 === $queue$$4$$ && ($queue$$4$$ = []), 0 < $toExpand$$2$$.length && $queue$$4$$.push($toExpand$$2$$), void 0 === $prevNodeSetInfo$$2$$ && ($prevNodeSetInfo$$2$$ = {}, $prevNodeSetInfo$$2$$.firstIndex = $rangeStart$$, $prevNodeSetInfo$$2$$.firstKey = $rowKey$$39$$, $prevNodeSetInfo$$2$$.keys = []), $prevNodeSetInfo$$2$$.nodeSet = $maxCount$$3_nodeSet$$19$$, $prevNodeSetInfo$$2$$.keys.push($rowKey$$39$$), this.$_syncExpandRows$($queue$$4$$, $prevNodeSetInfo$$2$$);
    } else {
      if (void 0 != $prevNodeSetInfo$$2$$) {
        $callbacks$$18_options$$284$$ = $prevNodeSetInfo$$2$$.callbacks;
        if (null != $callbacks$$18_options$$284$$) {
          $callbacks$$18_options$$284$$.success.call(null, $maxCount$$3_nodeSet$$19$$);
          return;
        }
        this.$insertRows$($prevNodeSetInfo$$2$$.firstIndex, $prevNodeSetInfo$$2$$.firstKey, $maxCount$$3_nodeSet$$19$$);
      } else {
        this.$insertRows$($rangeStart$$, $rowKey$$39$$, $maxCount$$3_nodeSet$$19$$);
      }
      $maxCount$$3_nodeSet$$19$$ = this.$m_maxCount$;
      -1 === $childCount_j$$51$$ && $rowCount$$17$$ === this.$getFetchSize$() || $childCount_j$$51$$ > $rowCount$$17$$ || $refIndex$$1$$ == $maxCount$$3_nodeSet$$19$$ ? this.$_deleteAllRowsBelow$($refIndex$$1$$) : this.$_getLastIndex$() >= $maxCount$$3_nodeSet$$19$$ && this.$_deleteAllRowsBelow$($maxCount$$3_nodeSet$$19$$);
      if (void 0 != $prevNodeSetInfo$$2$$) {
        for ($childCount_j$$51$$ = 0;$childCount_j$$51$$ < $prevNodeSetInfo$$2$$.keys.length;$childCount_j$$51$$++) {
          this.handleEvent("expand", {rowKey:$prevNodeSetInfo$$2$$.keys[$childCount_j$$51$$]});
        }
      }
      this.handleEvent("expand", {rowKey:$rowKey$$39$$});
    }
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_syncExpandRows$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_syncExpandRows$$($queue$$5$$, $prevNodeSetInfo$$3$$) {
    var $last$$1$$, $key$$143$$;
    $last$$1$$ = $queue$$5$$[$queue$$5$$.length - 1];
    $key$$143$$ = $last$$1$$.shift();
    0 === $last$$1$$.length && $queue$$5$$.pop();
    this.$_expand$($key$$143$$, {prevNodeSetInfo:$prevNodeSetInfo$$3$$, queue:$queue$$5$$});
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_insertRow$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_insertRow$$($index$$209$$, $key$$144_metadata$$14$$, $parentKey$$1$$, $childIndex$$, $depth$$24$$) {
    $key$$144_metadata$$14$$ = $key$$144_metadata$$14$$.key;
    $index$$209$$ <= this.$_getLastIndex$() ? this.$_addEntry$($key$$144_metadata$$14$$, $depth$$24$$, $childIndex$$, $parentKey$$1$$, $index$$209$$) : this.$_addEntry$($key$$144_metadata$$14$$, $depth$$24$$, $childIndex$$, $parentKey$$1$$);
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_deleteAllRowsBelow$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_deleteAllRowsBelow$$($index$$210$$, $count$$49$$) {
    var $keys$$49$$;
    void 0 == $count$$49$$ && ($count$$49$$ = this.$_getLastIndex$() + 1 - $index$$210$$);
    $keys$$49$$ = [];
    for (var $i$$358$$ = 0;$i$$358$$ < $count$$49$$;$i$$358$$++) {
      $keys$$49$$.push({key:this.$_getEntry$($index$$210$$ + $i$$358$$).key, index:$index$$210$$ + $i$$358$$});
    }
    this.$_removeEntry$($index$$210$$, $count$$49$$);
    this.$removeRows$($keys$$49$$);
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_handleModelEvent$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_handleModelEvent$$($event$$481$$) {
    var $operation$$6$$, $ancestors$$1_parentKey$$2$$, $index$$211$$;
    $operation$$6$$ = $event$$481$$.operation;
    $ancestors$$1_parentKey$$2$$ = $event$$481$$.parent;
    $ancestors$$1_parentKey$$2$$ = Array.isArray($ancestors$$1_parentKey$$2$$) ? $ancestors$$1_parentKey$$2$$[$ancestors$$1_parentKey$$2$$.length - 1] : $ancestors$$1_parentKey$$2$$;
    $index$$211$$ = $event$$481$$.index;
    "insert" === $operation$$6$$ ? this.$_handleInsertEvent$($ancestors$$1_parentKey$$2$$, $index$$211$$, $event$$481$$.data) : "delete" === $operation$$6$$ ? this.$_handleDeleteEvent$($ancestors$$1_parentKey$$2$$, $index$$211$$) : "refresh" === $operation$$6$$ && this.$_handleRefreshEvent$($ancestors$$1_parentKey$$2$$);
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_handleInsertEvent$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_handleInsertEvent$$($parentKey$$3$$, $index$$212$$, $metadata$$15_nodeSet$$20$$) {
    var $insertIndex_parentIndex$$, $depth$$25$$;
    $insertIndex_parentIndex$$ = this.$getIndex$($parentKey$$3$$);
    $depth$$25$$ = this.$_getEntry$($insertIndex_parentIndex$$).depth + 1;
    $insertIndex_parentIndex$$ = $insertIndex_parentIndex$$ + $index$$212$$ + 1;
    $metadata$$15_nodeSet$$20$$ = $metadata$$15_nodeSet$$20$$.getMetadata($metadata$$15_nodeSet$$20$$.getStart());
    this.$_insertRow$($insertIndex_parentIndex$$, $metadata$$15_nodeSet$$20$$, $parentKey$$3$$, $index$$212$$, $depth$$25$$);
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_handleDeleteEvent$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_handleDeleteEvent$$($parentKey$$4$$, $index$$213$$) {
    var $parentIndex$$1_startIndex$$38$$, $currentIndex$$2_parent$$31$$, $start$$56$$, $lastIndex$$1$$, $current$$21$$;
    $parentIndex$$1_startIndex$$38$$ = this.$getIndex$($parentKey$$4$$);
    $currentIndex$$2_parent$$31$$ = this.$_getEntry$($parentIndex$$1_startIndex$$38$$);
    $parentIndex$$1_startIndex$$38$$ += $index$$213$$;
    $start$$56$$ = this.$_getEntry$($parentIndex$$1_startIndex$$38$$);
    $oj$$21$$.$Assert$.assert($start$$56$$.parent === $currentIndex$$2_parent$$31$$ && $start$$56$$.depth === $currentIndex$$2_parent$$31$$.depth + 1);
    $currentIndex$$2_parent$$31$$ = $parentIndex$$1_startIndex$$38$$ + 1;
    for ($lastIndex$$1$$ = this.$_getLastIndex$();$currentIndex$$2_parent$$31$$ <= $lastIndex$$1$$;) {
      $current$$21$$ = this.$_getEntry$($currentIndex$$2_parent$$31$$);
      if ($current$$21$$.depth != $start$$56$$.depth) {
        break;
      }
      $currentIndex$$2_parent$$31$$++;
    }
    this.$_deleteAllRowsBelow$($parentIndex$$1_startIndex$$38$$, 1);
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_handleRefreshEvent$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_handleRefreshEvent$$($parentKey$$5$$) {
    null == $parentKey$$5$$ && this.refresh();
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_isExpandAll$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_isExpandAll$$() {
    var $capability$$2$$ = this.$m_wrapped$.getCapability("fetchDescendants");
    return void 0 != this.$m_collapsedKeys$ && null != $capability$$2$$ && "disable" != $capability$$2$$;
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_isBatchFetching$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_isBatchFetching$$() {
    return "enable" === this.$m_wrapped$.getCapability("batchFetch");
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.refresh = function $$oj$$21$$$$FlattenedTreeDataSource$$$refresh$() {
    this.$_clearAll$();
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$getIndex$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$getIndex$$($rowKey$$40$$) {
    var $lastIndex$$2$$, $i$$359$$, $rowData$$2$$;
    $lastIndex$$2$$ = this.$_getLastIndex$();
    for ($i$$359$$ = 0;$i$$359$$ <= $lastIndex$$2$$;$i$$359$$++) {
      if ($rowData$$2$$ = this.$_getEntry$($i$$359$$), $rowData$$2$$.key == $rowKey$$40$$) {
        return $i$$359$$;
      }
    }
    return-1;
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.getKey = function $$oj$$21$$$$FlattenedTreeDataSource$$$getKey$($index$$214$$) {
    return 0 > $index$$214$$ || $index$$214$$ > this.$_getLastIndex$() ? null : this.$_getEntry$($index$$214$$).key;
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$getFetchedRange$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$getFetchedRange$$() {
    return{start:0, end:this.$_getLastIndex$() + 1};
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$getAncestors$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$getAncestors$$($index$$215_parent$$32_rowKey$$41$$) {
    var $ancestors$$2$$;
    $ancestors$$2$$ = [];
    $index$$215_parent$$32_rowKey$$41$$ = this.$getIndex$($index$$215_parent$$32_rowKey$$41$$);
    for ($index$$215_parent$$32_rowKey$$41$$ = this.$_getParent$($index$$215_parent$$32_rowKey$$41$$);null != $index$$215_parent$$32_rowKey$$41$$;) {
      $ancestors$$2$$.push($index$$215_parent$$32_rowKey$$41$$), $index$$215_parent$$32_rowKey$$41$$ = this.$getIndex$($index$$215_parent$$32_rowKey$$41$$), $index$$215_parent$$32_rowKey$$41$$ = this.$_getParent$($index$$215_parent$$32_rowKey$$41$$);
    }
    return $ancestors$$2$$.reverse();
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$handleMaxCountReached$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$handleMaxCountReached$$($range$$25$$, $callbacks$$19$$) {
    null != $callbacks$$19$$ && null != $callbacks$$19$$.error && $callbacks$$19$$.error.call(null);
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$insertRows$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$insertRows$$() {
    $oj$$21$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$removeRows$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$removeRows$$() {
    $oj$$21$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_getLastIndex$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_getLastIndex$$() {
    return this.$m_cache$.length - 1;
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_getLastEntry$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_getLastEntry$$() {
    return this.$m_cache$[this.$_getLastIndex$()];
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_getEntry$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_getEntry$$($index$$216$$) {
    return this.$m_cache$[$index$$216$$];
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_getParent$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_getParent$$($entry$$5_index$$217$$) {
    $entry$$5_index$$217$$ = this.$m_cache$[$entry$$5_index$$217$$];
    return null != $entry$$5_index$$217$$ ? $entry$$5_index$$217$$.parent : null;
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_addEntry$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_addEntry$$($key$$145$$, $depth$$26$$, $index$$218$$, $parent$$33$$, $insertAt$$) {
    var $rowData$$3$$ = {};
    $rowData$$3$$.key = $key$$145$$;
    $rowData$$3$$.depth = $depth$$26$$;
    $rowData$$3$$.index = $index$$218$$;
    $rowData$$3$$.parent = $parent$$33$$;
    void 0 === $insertAt$$ ? this.$m_cache$.push($rowData$$3$$) : this.$m_cache$.splice($insertAt$$, 0, $rowData$$3$$);
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_removeEntry$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_removeEntry$$($index$$219$$, $count$$51$$) {
    this.$m_cache$.splice($index$$219$$, $count$$51$$);
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_clearAll$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_clearAll$$() {
    this.$m_cache$.length = 0;
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.getCapability = function $$oj$$21$$$$FlattenedTreeDataSource$$$getCapability$($feature$$5$$) {
    return this.$m_wrapped$.getCapability($feature$$5$$);
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataSource.prototype.getCapability", {getCapability:$oj$$21$$.$FlattenedTreeDataSource$.prototype.getCapability});
  $oj$$21$$.$__registerWidget$("oj.ojRowExpander", $$$$20$$.oj.baseComponent, {version:"1.0.0", widgetEventPrefix:"oj", options:{context:null, expand:null, collapse:null}, $classNames$:{root:"oj-rowexpander", icon:"oj-component-icon", clickable:"oj-clickable-icon-nocontext", expand:"oj-rowexpander-expand-icon", collapse:"oj-rowexpander-collapse-icon", leaf:"oj-rowexpander-leaf-icon", lazyload:"oj-rowexpander-lazyload-icon", toucharea:"oj-rowexpander-touch-area", indent:"oj-rowexpander-indent", iconspacer:"oj-rowexpander-icon-spacer", 
  depth0:"oj-rowexpander-depth-0", depth1:"oj-rowexpander-depth-1", depth2:"oj-rowexpander-depth-2", depth3:"oj-rowexpander-depth-3", depth4:"oj-rowexpander-depth-4", depth5:"oj-rowexpander-depth-5", depth6:"oj-rowexpander-depth-6", depth7:"oj-rowexpander-depth-7"}, $constants$:{$MAX_STYLE_DEPTH$:7, $NUM5_KEY$:53}, _ComponentCreate:function() {
    this._super();
    this.element.addClass(this.$classNames$.root);
    this.$_initContent$();
  }, $_initContent$:function() {
    var $self$$160$$ = this, $context$$117$$;
    $context$$117$$ = this.options.context;
    this.$component$ = "function" === typeof $context$$117$$.component ? $context$$117$$.component("instance") : $context$$117$$.component;
    this.$datasource$ = $context$$117$$.datasource;
    this.depth = $context$$117$$.depth;
    this.$iconState$ = $context$$117$$.state;
    this.$rowKey$ = $context$$117$$.key;
    this.index = $context$$117$$.index;
    this.$parentKey$ = $context$$117$$.parentKey;
    this.$_addIndentation$();
    this.$_addIcon$();
    this.$_setIconStateClass$();
    "expanded" === this.$iconState$ || "collapsed" === this.$iconState$ ? ($$$$20$$(this.$toucharea$).on("touchend", function($event$$482$$) {
      $event$$482$$.preventDefault();
      $self$$160$$.$_fireExpandCollapse$();
    }), $$$$20$$(this.$toucharea$).on("click", function($event$$483$$) {
      $event$$483$$.preventDefault();
      $self$$160$$.$_fireExpandCollapse$();
    }), $$$$20$$(this.element).on("keypress", function($event$$484$$) {
      var $code$$7$$ = $event$$484$$.keyCode || $event$$484$$.which;
      if ($code$$7$$ === $$$$20$$.ui.keyCode.ENTER || $code$$7$$ === $$$$20$$.ui.keyCode.SPACE) {
        $self$$160$$.$_fireExpandCollapse$(), $event$$484$$.preventDefault(), $event$$484$$.target.focus();
      }
    }), this.$handleKeyDownCallback$ = this.$_handleKeyDownEvent$.bind(this), $$$$20$$(this.$component$.element).on("ojkeydown", this.$handleKeyDownCallback$), this.$handleExpandCallback$ = this.$_handleExpandEvent$.bind(this), this.$handleCollapseCallback$ = this.$_handleCollapseEvent$.bind(this), this.$datasource$.on("expand", this.$handleExpandCallback$, this), this.$datasource$.on("collapse", this.$handleCollapseCallback$, this)) : "leaf" === this.$iconState$ && (this.$handleKeyDownCallback$ = 
    this.$_handleKeyDownEvent$.bind(this), $$$$20$$(this.$component$.element).on("ojkeydown", this.$handleKeyDownCallback$), $$$$20$$(this.icon).attr("tabindex", -1));
    this.$handleActiveKeyChangeCallback$ = this.$_handleActiveKeyChangeEvent$.bind(this);
    $$$$20$$(this.$component$.element).on("ojbeforecurrentcell", this.$handleActiveKeyChangeCallback$);
  }, refresh:function() {
    this.element.empty();
    this.$_initContent$();
  }, _destroy:function() {
    $$$$20$$(this.$component$.element).off("ojkeydown", this.$handleKeyDownCallback$);
    $$$$20$$(this.$component$.element).off("ojbeforecurrentcell", this.$handleActiveKeyChangeCallback$);
    this.$datasource$.off("expand", this.$handleExpandCallback$, this);
    this.$datasource$.off("collapse", this.$handleCollapseCallback$, this);
    this.element.removeClass(this.$classNames$.root);
    this.element.empty();
  }, _setOption:function($key$$146$$, $value$$272$$, $flags$$32$$) {
    this._super($key$$146$$, $value$$272$$, $flags$$32$$);
    "context" == $key$$146$$ && this.refresh();
  }, $_addIndentation$:function() {
    var $i$$360_remainder$$, $depth$$27$$;
    $depth$$27$$ = this.depth - 1;
    if ($depth$$27$$ < this.$constants$.$MAX_STYLE_DEPTH$) {
      this.$_appendSpacer$($depth$$27$$);
    } else {
      for ($i$$360_remainder$$ = 1;$i$$360_remainder$$ <= $depth$$27$$ / this.$constants$.$MAX_STYLE_DEPTH$;$i$$360_remainder$$++) {
        this.$_appendSpacer$(this.$constants$.$MAX_STYLE_DEPTH$);
      }
      $i$$360_remainder$$ = $depth$$27$$ % this.$constants$.$MAX_STYLE_DEPTH$;
      $i$$360_remainder$$ < this.$constants$.$MAX_STYLE_DEPTH$ && this.$_appendSpacer$($i$$360_remainder$$);
    }
  }, $_appendSpacer$:function($depth$$28_spacer$$) {
    $depth$$28_spacer$$ = $$$$20$$(document.createElement("span")).addClass(this.$classNames$.indent).addClass(this.$classNames$["depth" + $depth$$28_spacer$$]);
    this.element.append($depth$$28_spacer$$);
  }, $_addIcon$:function() {
    var $iconSpacer$$ = $$$$20$$(document.createElement("div")).addClass(this.$classNames$.iconspacer);
    this.$toucharea$ = $$$$20$$(document.createElement("div")).addClass(this.$classNames$.toucharea);
    this.icon = $$$$20$$(document.createElement("a")).attr("href", "#").attr("aria-labelledby", this.$_getLabelledBy$()).addClass(this.$classNames$.icon).addClass(this.$classNames$.clickable);
    this.element.append($iconSpacer$$.append(this.$toucharea$.append(this.icon)));
  }, $_addIconClass$:function($classKey$$) {
    this.icon.addClass(this.$classNames$[$classKey$$]);
  }, $_removeIconClass$:function($classKey$$1$$) {
    this.icon.removeClass(this.$classNames$[$classKey$$1$$]);
  }, $_setIconStateClass$:function() {
    switch(this.$iconState$) {
      case "leaf":
        this.$_removeIconClass$("icon");
        this.$_removeIconClass$("clickable");
        this.$_addIconClass$("leaf");
        break;
      case "collapsed":
        this.$_addIconClass$("expand");
        this.$_ariaExpanded$(!1);
        break;
      case "expanded":
        this.$_addIconClass$("collapse");
        this.$_ariaExpanded$(!0);
        break;
      case "loading":
        this.$_removeIconClass$("clickable"), this.$_addIconClass$("lazyload");
    }
  }, $_removeIconStateClass$:function() {
    switch(this.$iconState$) {
      case "leaf":
        this.$_removeIconClass$("leaf");
        this.$_addIconClass$("icon");
        this.$_addIconClass$("clickable");
        break;
      case "collapsed":
        this.$_removeIconClass$("expand");
        break;
      case "expanded":
        this.$_removeIconClass$("collapse");
        break;
      case "loading":
        this.$_removeIconClass$("lazyload"), this.$_addIconClass$("clickable");
    }
  }, $_handleActiveKeyChangeEvent$:function($event$$485$$, $ui$$17$$) {
    var $context$$118_rowKey$$42$$, $previousRowKey_state$$10$$;
    null != $ui$$17$$.currentCell && ($context$$118_rowKey$$42$$ = "cell" == $ui$$17$$.currentCell.type ? $ui$$17$$.currentCell.keys.row : $ui$$17$$.currentCell.key, null != $ui$$17$$.previousValue && ($previousRowKey_state$$10$$ = "cell" == $ui$$17$$.previousCurrentCell.type ? $ui$$17$$.previousCurrentCell.keys.row : $ui$$17$$.previousCurrentCell.key), this.$rowKey$ === $context$$118_rowKey$$42$$ && $previousRowKey_state$$10$$ != $context$$118_rowKey$$42$$ && this.$component$.$_setAccessibleContext$ && 
    ($context$$118_rowKey$$42$$ = this.$getTranslatedString$("accessibleRowDescription", {level:this.depth, num:this.index + 1, total:this.$datasource$.getWrappedDataSource().$getChildCount$(this.$parentKey$)}), $previousRowKey_state$$10$$ = "collapsed" === this.$iconState$ ? this.$getTranslatedString$("accessibleStateCollapsed") : "expanded" === this.$iconState$ ? this.$getTranslatedString$("accessibleStateExpanded") : "", this.$component$.$_setAccessibleContext$({context:$context$$118_rowKey$$42$$, 
    state:$previousRowKey_state$$10$$})));
  }, $_handleKeyDownEvent$:function($event$$486$$, $ui$$18$$) {
    var $ancestors$$3_code$$8_context$$119$$, $ancestorInfo$$, $i$$361$$;
    if (this.$rowKey$ === $ui$$18$$.rowKey && ($event$$486$$ = $event$$486$$.originalEvent, $ancestors$$3_code$$8_context$$119$$ = $event$$486$$.keyCode || $event$$486$$.which, $oj$$21$$.$DomUtils$.$isMetaKeyPressed$($event$$486$$))) {
      if ($ancestors$$3_code$$8_context$$119$$ == $$$$20$$.ui.keyCode.RIGHT && "collapsed" === this.$iconState$) {
        return this.$_loading$(), this.$datasource$.expand(this.$rowKey$), !1;
      }
      if ($ancestors$$3_code$$8_context$$119$$ == $$$$20$$.ui.keyCode.LEFT && "expanded" === this.$iconState$) {
        return this.$_loading$(), this.$datasource$.collapse(this.$rowKey$), !1;
      }
      if ($event$$486$$.altKey && $ancestors$$3_code$$8_context$$119$$ == this.$constants$.$NUM5_KEY$ && this.$component$.$_setAccessibleContext$) {
        $ancestors$$3_code$$8_context$$119$$ = this.$datasource$.$getAncestors$(this.$rowKey$);
        if (null != $ancestors$$3_code$$8_context$$119$$ && 0 < $ancestors$$3_code$$8_context$$119$$.length) {
          for ($ancestorInfo$$ = [], $i$$361$$ = 0;$i$$361$$ < $ancestors$$3_code$$8_context$$119$$.length;$i$$361$$++) {
            $ancestorInfo$$.push({key:$ancestors$$3_code$$8_context$$119$$[$i$$361$$], label:this.$getTranslatedString$("accessibleLevelDescription", {level:$i$$361$$ + 1})});
          }
        }
        $ancestors$$3_code$$8_context$$119$$ = this.$getTranslatedString$("accessibleRowDescription", {level:this.depth, num:this.index + 1, total:this.$datasource$.getWrappedDataSource().$getChildCount$(this.$parentKey$)});
        this.$component$.$_setAccessibleContext$({context:$ancestors$$3_code$$8_context$$119$$, state:"", ancestors:$ancestorInfo$$});
      }
    }
    return!0;
  }, $_loading$:function() {
    this.$_removeIconStateClass$();
    this.$iconState$ = "loading";
    this.$_setIconStateClass$();
  }, $_handleExpandEvent$:function($event$$487_rowKey$$44$$) {
    $event$$487_rowKey$$44$$ = $event$$487_rowKey$$44$$.rowKey;
    $event$$487_rowKey$$44$$ === this.$rowKey$ && (this.$_removeIconStateClass$(), this.$iconState$ = "expanded", this.$_setIconStateClass$(), this.$_ariaExpanded$(!0), this._trigger("expand", null, {rowKey:$event$$487_rowKey$$44$$}));
  }, $_handleCollapseEvent$:function($event$$488_rowKey$$45$$) {
    $event$$488_rowKey$$45$$ = $event$$488_rowKey$$45$$.rowKey;
    $event$$488_rowKey$$45$$ === this.$rowKey$ && (this.$_removeIconStateClass$(), this.$iconState$ = "collapsed", this.$_setIconStateClass$(), this.$_ariaExpanded$(!1), this._trigger("collapse", null, {rowKey:$event$$488_rowKey$$45$$}));
  }, $_fireExpandCollapse$:function() {
    var $state$$11$$ = this.$iconState$;
    this.$_loading$();
    "collapsed" === $state$$11$$ ? this.$datasource$.expand(this.$rowKey$) : "expanded" === $state$$11$$ && this.$datasource$.collapse(this.$rowKey$);
  }, $_ariaExpanded$:function($bool$$) {
    this.icon.attr("aria-expanded", $bool$$);
  }, getNodeBySubId:function($locator$$30_subId$$35$$) {
    if (null == $locator$$30_subId$$35$$) {
      return this.element ? this.element[0] : null;
    }
    $locator$$30_subId$$35$$ = $locator$$30_subId$$35$$.subId;
    return "oj-rowexpander-disclosure" !== $locator$$30_subId$$35$$ && "oj-rowexpander-icon" !== $locator$$30_subId$$35$$ || null == this.icon ? null : this.icon.get(0);
  }, getSubIdByNode:function($node$$82$$) {
    return $node$$82$$ === this.icon.get(0) ? {$subId$:"oj-rowexpander-disclosure"} : null;
  }, $_NotifyAttached$:function() {
    this._super();
    this.icon.attr("aria-labelledby", this.$_getLabelledBy$());
  }, $_getLabelledBy$:function() {
    return this.element.parent().closest("[id]").attr("id");
  }});
});
