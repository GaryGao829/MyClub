/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdomscroller", "ojs/ojanimation", "promise"], function($oj$$19$$, $$$$18$$) {
  $oj$$19$$.$DataSourceContentHandler$ = function $$oj$$19$$$$DataSourceContentHandler$$($widget$$5$$, $root$$17$$, $data$$126$$) {
    this.$m_root$ = $root$$17$$;
    this.$m_widget$ = $widget$$5$$;
    this.$m_fetching$ = !1;
    this.$setDataSource$($data$$126$$);
    this.Init();
  };
  $oj$$19$$.$Object$.$createSubclass$($oj$$19$$.$DataSourceContentHandler$, $oj$$19$$.$Object$, "oj.DataSourceContentHandler");
  $oj$$19$$.$DataSourceContentHandler$.prototype.Init = function $$oj$$19$$$$DataSourceContentHandler$$$Init$() {
    $oj$$19$$.$DataSourceContentHandler$.$superclass$.Init.call(this);
  };
  $oj$$19$$.$Object$.$exportPrototypeSymbol$("DataSourceContentHandler.prototype.Init", {Init:$oj$$19$$.$DataSourceContentHandler$.prototype.Init});
  $oj$$19$$.$DataSourceContentHandler$.prototype.$HandleResize$ = function $$oj$$19$$$$DataSourceContentHandler$$$$HandleResize$$() {
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$Destroy$ = function $$oj$$19$$$$DataSourceContentHandler$$$$Destroy$$() {
    $$$$18$$(this.$m_root$).empty();
    this.$m_root$ = this.$m_widget$ = null;
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$IsReady$ = function $$oj$$19$$$$DataSourceContentHandler$$$$IsReady$$() {
    return!this.$m_fetching$;
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$setRootAriaProperties$ = function $$oj$$19$$$$DataSourceContentHandler$$$$setRootAriaProperties$$() {
    this.$IsHierarchical$() ? this.$m_root$.setAttribute("role", "tree") : this.$m_root$.setAttribute("role", "listbox");
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$RenderContent$ = function $$oj$$19$$$$DataSourceContentHandler$$$$RenderContent$$() {
    this.$signalTaskStart$();
    this.$fetchRows$(!1);
    this.$setRootAriaProperties$();
    this.$signalTaskEnd$();
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$GetKey$ = function $$oj$$19$$$$DataSourceContentHandler$$$$GetKey$$($element$$177$$) {
    return $element$$177$$.key;
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$FindElementByKey$ = function $$oj$$19$$$$DataSourceContentHandler$$$$FindElementByKey$$($key$$104$$) {
    var $children$$8$$, $i$$329$$, $elem$$56$$;
    $children$$8$$ = $$$$18$$(this.$m_root$).find("." + this.$m_widget$.$getItemElementStyleClass$());
    for ($i$$329$$ = 0;$i$$329$$ < $children$$8$$.length;$i$$329$$++) {
      if ($elem$$56$$ = $children$$8$$[$i$$329$$], $key$$104$$ == this.$GetKey$($elem$$56$$)) {
        return $elem$$56$$;
      }
    }
    return null;
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$getDataSource$ = function $$oj$$19$$$$DataSourceContentHandler$$$$getDataSource$$() {
    return this.$m_dataSource$;
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$setDataSource$ = function $$oj$$19$$$$DataSourceContentHandler$$$$setDataSource$$($dataSource$$2$$) {
    this.$m_dataSource$ = $dataSource$$2$$;
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$fetchRows$ = function $$oj$$19$$$$DataSourceContentHandler$$$$fetchRows$$() {
    this.$m_widget$.$showStatusText$();
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$addItem$ = function $$oj$$19$$$$DataSourceContentHandler$$$$addItem$$($parentElement$$6$$, $index$$168$$, $data$$127$$, $metadata$$4$$, $callback$$112$$) {
    var $item$$15$$, $childElements_position$$11$$;
    $item$$15$$ = document.createElement("li");
    $$$$18$$($item$$15$$).uniqueId();
    $childElements_position$$11$$ = $$$$18$$($parentElement$$6$$).children("." + this.$m_widget$.$getItemElementStyleClass$() + ", .oj-listview-no-data-message");
    $parentElement$$6$$.insertBefore($item$$15$$, $index$$168$$ === $childElements_position$$11$$.length ? null : $childElements_position$$11$$[$index$$168$$]);
    $childElements_position$$11$$ = $$$$18$$($parentElement$$6$$).children().index($item$$15$$);
    this.$_addOrReplaceItem$($item$$15$$, $childElements_position$$11$$, $parentElement$$6$$, $index$$168$$, $data$$127$$, $metadata$$4$$, $callback$$112$$);
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$replaceItem$ = function $$oj$$19$$$$DataSourceContentHandler$$$$replaceItem$$($item$$16$$, $index$$169$$, $data$$128$$, $metadata$$5$$, $callback$$113$$) {
    var $parentElement$$7$$, $position$$12$$;
    this.$signalTaskStart$();
    $$$$18$$($item$$16$$).empty();
    $parentElement$$7$$ = $item$$16$$.parentNode;
    $position$$12$$ = $$$$18$$($parentElement$$7$$).children().index($item$$16$$);
    this.$_addOrReplaceItem$($item$$16$$, $position$$12$$, $parentElement$$7$$, $index$$169$$, $data$$128$$, $metadata$$5$$, $callback$$113$$);
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$_addOrReplaceItem$ = function $$oj$$19$$$$DataSourceContentHandler$$$$_addOrReplaceItem$$($item$$17$$, $position$$13$$, $parentElement$$8$$, $context$$88_index$$170$$, $data$$129$$, $content$$19_metadata$$6_renderer$$12$$, $callback$$114$$) {
    var $textWrapper$$3$$;
    void 0 == $callback$$114$$ && ($callback$$114$$ = this.$afterRenderItem$.bind(this));
    $context$$88_index$$170$$ = this.$createContext$($context$$88_index$$170$$, $data$$129$$, $content$$19_metadata$$6_renderer$$12$$, $item$$17$$);
    $content$$19_metadata$$6_renderer$$12$$ = this.$m_widget$.$_getItemRenderer$();
    null != $content$$19_metadata$$6_renderer$$12$$ ? ($content$$19_metadata$$6_renderer$$12$$ = $content$$19_metadata$$6_renderer$$12$$.call(this, $context$$88_index$$170$$), null != $content$$19_metadata$$6_renderer$$12$$ && (null === $content$$19_metadata$$6_renderer$$12$$.parentNode || $content$$19_metadata$$6_renderer$$12$$.parentNode instanceof DocumentFragment ? $item$$17$$.appendChild($content$$19_metadata$$6_renderer$$12$$) : null == $content$$19_metadata$$6_renderer$$12$$.parentNode && 
    $content$$19_metadata$$6_renderer$$12$$.toString && ($textWrapper$$3$$ = document.createElement("span"), $textWrapper$$3$$.appendChild(document.createTextNode($content$$19_metadata$$6_renderer$$12$$.toString())), $item$$17$$.appendChild($textWrapper$$3$$)))) : ($textWrapper$$3$$ = document.createElement("span"), $textWrapper$$3$$.appendChild(document.createTextNode(null == $data$$129$$ ? "" : $data$$129$$.toString())), $item$$17$$.appendChild($textWrapper$$3$$));
    $item$$17$$ = $parentElement$$8$$.children[$position$$13$$];
    $context$$88_index$$170$$.parentElement = $item$$17$$;
    $$$$18$$.data($item$$17$$, "data", $data$$129$$);
    $callback$$114$$($item$$17$$, $context$$88_index$$170$$);
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$afterRenderItem$ = function $$oj$$19$$$$DataSourceContentHandler$$$$afterRenderItem$$($item$$18$$, $context$$89$$) {
    var $elem$$57$$;
    $item$$18$$.key = $context$$89$$.key;
    $item$$18$$ = $$$$18$$($item$$18$$);
    $item$$18$$.uniqueId();
    $elem$$57$$ = this.$m_widget$.$getSingleFocusableElement$($item$$18$$);
    $elem$$57$$.attr("role", this.$IsHierarchical$() ? "treeitem" : "option");
    $elem$$57$$ != $item$$18$$ && $item$$18$$.attr("role", "presentation");
    $elem$$57$$.addClass(this.$m_widget$.$getFocusedElementStyleClass$());
    this.$isFocusable$($context$$89$$) || $item$$18$$.addClass("oj-skipfocus");
    $item$$18$$.addClass(this.$m_widget$.$getItemElementStyleClass$());
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$createContext$ = function $$oj$$19$$$$DataSourceContentHandler$$$$createContext$$($index$$171$$, $data$$130$$, $metadata$$7$$, $elem$$58$$) {
    var $context$$90$$, $prop$$70$$;
    $context$$90$$ = {};
    $context$$90$$.parentElement = $elem$$58$$;
    $context$$90$$.index = $index$$171$$;
    $context$$90$$.data = $data$$130$$;
    $context$$90$$.component = this.$m_widget$.$getWidgetConstructor$();
    $context$$90$$.datasource = this.$m_dataSource$;
    for ($prop$$70$$ in $metadata$$7$$) {
      $metadata$$7$$.hasOwnProperty($prop$$70$$) && ($context$$90$$[$prop$$70$$] = $metadata$$7$$[$prop$$70$$]);
    }
    return $context$$90$$;
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$isFocusable$ = function $$oj$$19$$$$DataSourceContentHandler$$$$isFocusable$$($context$$91$$) {
    return this.$m_widget$.$_getItemOption$("focusable", $context$$91$$, !0);
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$isSelectable$ = function $$oj$$19$$$$DataSourceContentHandler$$$$isSelectable$$($context$$92$$) {
    return this.$m_widget$.$_getItemOption$("selectable", $context$$92$$, !0);
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$signalTaskStart$ = function $$oj$$19$$$$DataSourceContentHandler$$$$signalTaskStart$$() {
    this.$m_widget$ && this.$m_widget$.$signalTaskStart$();
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$signalTaskEnd$ = function $$oj$$19$$$$DataSourceContentHandler$$$$signalTaskEnd$$() {
    this.$m_widget$ && this.$m_widget$.$signalTaskEnd$();
  };
  $oj$$19$$.$TableDataSourceContentHandler$ = function $$oj$$19$$$$TableDataSourceContentHandler$$($widget$$6$$, $root$$18$$, $data$$131$$) {
    $oj$$19$$.$TableDataSourceContentHandler$.$superclass$.constructor.call(this, $widget$$6$$, $root$$18$$, $data$$131$$);
  };
  $oj$$19$$.$Object$.$createSubclass$($oj$$19$$.$TableDataSourceContentHandler$, $oj$$19$$.$DataSourceContentHandler$, "oj.TableDataSourceContentHandler");
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.Init = function $$oj$$19$$$$TableDataSourceContentHandler$$$Init$() {
    $oj$$19$$.$TableDataSourceContentHandler$.$superclass$.Init.call(this);
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$IsHierarchical$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$IsHierarchical$$() {
    return!1;
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$Destroy$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$Destroy$$() {
    $oj$$19$$.$TableDataSourceContentHandler$.$superclass$.$Destroy$.call(this);
    this.$_removeDataSourceEventListeners$();
    null != this.$m_domScroller$ && (this.$m_domScroller$.destroy(), this.$m_domScrollerMaxCountFunc$ = this.$m_domScroller$ = null);
    this.$m_loadingIndicator$ = null;
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$HandleResize$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$HandleResize$$($width$$39$$, $height$$39$$) {
    this.$_isLoadMoreOnScroll$() && void 0 != this.$m_height$ && this.$m_height$ != $height$$39$$ && (this.$m_height$ = $height$$39$$, this.checkViewport());
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$_isLoadMoreOnScroll$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$_isLoadMoreOnScroll$$() {
    return "loadMoreOnScroll" == this.$m_widget$.options.scrollPolicy ? !0 : !1;
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$_getFetchSize$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$_getFetchSize$$() {
    return Math.max(0, this.$m_widget$.options.scrollPolicyOptions.fetchSize);
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$_getScroller$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$_getScroller$$() {
    var $scroller$$13$$ = this.$m_widget$.options.scrollPolicyOptions.scroller;
    return null != $scroller$$13$$ && $$$$18$$.contains($scroller$$13$$, this.$m_root$) ? (this.$_fetchTrigger$ = $oj$$19$$.$DomScroller$.$calculateOffsetTop$($scroller$$13$$, this.$m_root$), $scroller$$13$$) : this.$m_widget$.$getRootElement$();
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$_getMaxCount$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$_getMaxCount$$() {
    return this.$m_widget$.options.scrollPolicyOptions.maxCount;
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$setDataSource$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$setDataSource$$($dataSource$$3$$) {
    var $self$$133$$;
    this.$_removeDataSourceEventListeners$();
    if (null != $dataSource$$3$$) {
      this.$_isLoadMoreOnScroll$() && ($self$$133$$ = this, this.$m_domScrollerMaxCountFunc$ = function $this$$m_domScrollerMaxCountFunc$$($result$$51$$) {
        null != $result$$51$$ ? ($self$$133$$.$signalTaskStart$(), $self$$133$$.$_removeLoadingIndicator$(), $self$$133$$.$IsReady$() && $self$$133$$.$signalTaskStart$(), $self$$133$$.$_handleFetchedData$($result$$51$$), $result$$51$$.maxCountLimit ? $self$$133$$.$_handleScrollerMaxRowCount$() : $self$$133$$.$_appendLoadingIndicator$(), $self$$133$$.$signalTaskEnd$(), $self$$133$$.$signalTaskEnd$()) : void 0 === $result$$51$$ && ($self$$133$$.$_removeLoadingIndicator$(), $self$$133$$.$signalTaskEnd$());
      }, this.$m_domScroller$ = new $oj$$19$$.$DomScroller$(this.$_getScroller$(), $dataSource$$3$$, {fetchSize:this.$_getFetchSize$(), fetchTrigger:this.$_fetchTrigger$, maxCount:this.$_getMaxCount$(), success:this.$m_domScrollerMaxCountFunc$, error:this.$signalTaskEnd$}), this.$m_domScroller$.$_handleScrollerScrollTop$ = function $this$$m_domScroller$$$_handleScrollerScrollTop$$($scrollTop$$14$$, $maxScrollTop$$1$$) {
        1 >= $maxScrollTop$$1$$ - $scrollTop$$14$$ && $self$$133$$.$signalTaskStart$();
        $oj$$19$$.$DomScroller$.prototype.$_handleScrollerScrollTop$.call(this, $scrollTop$$14$$, $maxScrollTop$$1$$);
      });
      this.$m_handleModelSyncEventListener$ = this.$handleModelSyncEvent$.bind(this);
      this.$m_handleModelSortEventListener$ = this.$handleModelSortEvent$.bind(this);
      this.$m_handleModelAddEventListener$ = this.$handleModelAddEvent$.bind(this);
      this.$m_handleModelRemoveEventListener$ = this.$handleModelRemoveEvent$.bind(this);
      this.$m_handleModelChangeEventListener$ = this.$handleModelChangeEvent$.bind(this);
      this.$m_handleModelResetEventListener$ = this.$handleModelResetEvent$.bind(this);
      if ($oj$$19$$.$PagingTableDataSource$ && $dataSource$$3$$ instanceof $oj$$19$$.$PagingTableDataSource$) {
        $dataSource$$3$$.on("sync", this.$m_handleModelSyncEventListener$);
      }
      $dataSource$$3$$.on("sort", this.$m_handleModelSortEventListener$);
      $dataSource$$3$$.on("add", this.$m_handleModelAddEventListener$);
      $dataSource$$3$$.on("remove", this.$m_handleModelRemoveEventListener$);
      $dataSource$$3$$.on("change", this.$m_handleModelChangeEventListener$);
      $dataSource$$3$$.on("reset", this.$m_handleModelResetEventListener$);
      $dataSource$$3$$.on("refresh", this.$m_handleModelResetEventListener$);
    }
    this.$m_dataSource$ = $dataSource$$3$$;
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$_appendLoadingIndicator$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$_appendLoadingIndicator$$() {
    var $item$$19$$, $icon$$3$$;
    null == this.$m_loadingIndicator$ && ($item$$19$$ = $$$$18$$(document.createElement("li")), $item$$19$$.uniqueId().attr("role", "presentation").addClass(this.$m_widget$.$getItemStyleClass$()), $icon$$3$$ = $$$$18$$(document.createElement("div")), $icon$$3$$.addClass("oj-listview-loading-icon"), $item$$19$$.append($icon$$3$$), $$$$18$$(this.$m_root$).append($item$$19$$), this.$m_loadingIndicator$ = $item$$19$$);
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$_removeLoadingIndicator$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$_removeLoadingIndicator$$() {
    null != this.$m_loadingIndicator$ && this.$m_loadingIndicator$.remove();
    this.$m_loadingIndicator$ = null;
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$afterRenderItem$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$afterRenderItem$$($item$$20$$, $context$$93$$) {
    var $size$$25$$;
    $oj$$19$$.$TableDataSourceContentHandler$.$superclass$.$afterRenderItem$.call(this, $item$$20$$, $context$$93$$);
    $$$$18$$($item$$20$$).addClass(this.$m_widget$.$getItemStyleClass$());
    this.$m_widget$.$_isSelectionEnabled$() && this.$isSelectable$($context$$93$$) && this.$m_widget$.$getFocusItem$($$$$18$$($item$$20$$)).attr("aria-selected", !1);
    this.$_isLoadMoreOnScroll$() && ($size$$25$$ = Math.min(this.$m_dataSource$.totalSize(), this.$_getMaxCount$()), -1 === $size$$25$$ && ($size$$25$$ = this.$_getMaxCount$()), 0 < $size$$25$$ && $$$$18$$($item$$20$$).attr("aria-setsize", $size$$25$$).attr("aria-posinset", $context$$93$$.index + 1));
    this.$m_widget$.$itemRenderComplete$($item$$20$$, $context$$93$$);
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$afterRenderItemForInsertEvent$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$afterRenderItemForInsertEvent$$($item$$21$$, $context$$94$$) {
    var $effect_elem$$59$$, $itemStyleClass$$;
    this.$signalTaskStart$();
    this.$afterRenderItem$($item$$21$$, $context$$94$$);
    $effect_elem$$59$$ = $$$$18$$($item$$21$$);
    $effect_elem$$59$$.outerHeight();
    $itemStyleClass$$ = this.$m_widget$.$getItemStyleClass$();
    $effect_elem$$59$$.children().wrapAll("\x3cdiv\x3e\x3c/div\x3e");
    $effect_elem$$59$$.removeClass($itemStyleClass$$).addClass("oj-listview-item-add-remove-transition");
    $effect_elem$$59$$.children().first().addClass($itemStyleClass$$);
    this.$signalTaskStart$();
    $effect_elem$$59$$ = this.$m_widget$.$getAnimationEffect$("add");
    var $self$$134$$ = this;
    $oj$$19$$.$AnimationUtils$.$startAnimation$($item$$21$$, "add", $effect_elem$$59$$).then(function() {
      $self$$134$$.$_handleAddTransitionEnd$($context$$94$$, $item$$21$$);
    });
    this.$signalTaskEnd$();
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$_handleScrollerMaxRowCount$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$_handleScrollerMaxRowCount$$() {
    $oj$$19$$.$Logger$.error("max count reached");
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$_removeDataSourceEventListeners$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$_removeDataSourceEventListeners$$() {
    null != this.$m_dataSource$ && (this.$m_dataSource$.off("sync", this.$m_handleModelSyncEventListener$), this.$m_dataSource$.off("sort", this.$m_handleModelSortEventListener$), this.$m_dataSource$.off("add", this.$m_handleModelAddEventListener$), this.$m_dataSource$.off("remove", this.$m_handleModelRemoveEventListener$), this.$m_dataSource$.off("change", this.$m_handleModelChangeEventListener$), this.$m_dataSource$.off("reset", this.$m_handleModelResetEventListener$), this.$m_dataSource$.off("refresh", 
    this.$m_handleModelResetEventListener$));
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$fetchRows$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$fetchRows$$($forceFetch$$1_options$$269_promise$$3$$) {
    var $initFetch$$2$$ = !0, $self$$135$$;
    this.$signalTaskStart$();
    if (this.$IsReady$() && (this.$m_fetching$ = !0, $oj$$19$$.$TableDataSourceContentHandler$.$superclass$.$fetchRows$.call(this, $forceFetch$$1_options$$269_promise$$3$$), $oj$$19$$.$PagingTableDataSource$ && this.$m_dataSource$ instanceof $oj$$19$$.$PagingTableDataSource$ && ($initFetch$$2$$ = !1, this.$signalTaskStart$()), $initFetch$$2$$ || $forceFetch$$1_options$$269_promise$$3$$)) {
      $initFetch$$2$$ && this.$signalTaskStart$();
      $forceFetch$$1_options$$269_promise$$3$$ = {fetchType:"init", startIndex:0};
      this.$_isLoadMoreOnScroll$() && ($forceFetch$$1_options$$269_promise$$3$$.pageSize = this.$_getFetchSize$());
      $self$$135$$ = this;
      $forceFetch$$1_options$$269_promise$$3$$ = this.$m_dataSource$.fetch($forceFetch$$1_options$$269_promise$$3$$);
      $forceFetch$$1_options$$269_promise$$3$$.then(function($value$$262$$) {
        null != $self$$135$$.$m_widget$ && $initFetch$$2$$ && ($$$$18$$($self$$135$$.$m_root$).empty(), $self$$135$$.$_handleFetchedData$($value$$262$$), $self$$135$$.$_isLoadMoreOnScroll$() && null != $value$$262$$ && $value$$262$$.keys && 0 < $value$$262$$.keys.length && $self$$135$$.$_appendLoadingIndicator$());
      }, function($reason$$5$$) {
        $self$$135$$.$_handleFetchError$($reason$$5$$);
        $self$$135$$.$signalTaskEnd$();
      });
      this.$signalTaskEnd$();
      return;
    }
    this.$signalTaskEnd$();
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$_handleFetchError$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$_handleFetchError$$($msg$$23$$) {
    $oj$$19$$.$Logger$.error($msg$$23$$);
    this.$_isLoadMoreOnScroll$() && this.$_removeLoadingIndicator$();
    this.$m_widget$.$renderComplete$();
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$_handleFetchSuccess$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$_handleFetchSuccess$$($data$$132$$, $keys$$42$$) {
    var $index$$172$$, $i$$330$$, $row$$73$$;
    $index$$172$$ = this.$m_root$.childElementCount;
    for ($i$$330$$ = 0;$i$$330$$ < $data$$132$$.length;$i$$330$$++) {
      $row$$73$$ = $data$$132$$[$i$$330$$], this.$addItem$(this.$m_root$, $index$$172$$, $row$$73$$, this.getMetadata($index$$172$$, $keys$$42$$[$i$$330$$], $row$$73$$)), $index$$172$$ += 1;
    }
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$handleModelAddEvent$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$handleModelAddEvent$$($event$$378_indexes$$21$$) {
    var $data$$133$$, $keys$$43$$, $i$$331$$;
    if (null != this.$m_root$) {
      this.$signalTaskStart$();
      $data$$133$$ = $event$$378_indexes$$21$$.data;
      $keys$$43$$ = $event$$378_indexes$$21$$.keys;
      $event$$378_indexes$$21$$ = $event$$378_indexes$$21$$.indexes;
      if (null != $data$$133$$ && null != $keys$$43$$ && 0 < $keys$$43$$.length && 0 < $data$$133$$.length && $keys$$43$$.length == $data$$133$$.length && null != $event$$378_indexes$$21$$ && $keys$$43$$.length == $event$$378_indexes$$21$$.length) {
        for ($i$$331$$ = 0;$i$$331$$ < $data$$133$$.length;$i$$331$$++) {
          this.$signalTaskStart$(), this.$addItem$(this.$m_root$, $event$$378_indexes$$21$$[$i$$331$$], $data$$133$$[$i$$331$$], this.getMetadata($event$$378_indexes$$21$$[$i$$331$$], $keys$$43$$[$i$$331$$], $data$$133$$[$i$$331$$]), this.$afterRenderItemForInsertEvent$.bind(this)), this.$signalTaskEnd$();
        }
        this.$IsReady$() && this.$signalTaskStart$();
        this.$fetchEnd$();
      }
      this.$signalTaskEnd$();
    }
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$_handleAddTransitionEnd$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$_handleAddTransitionEnd$$($context$$95$$, $elem$$60$$) {
    $$$$18$$($elem$$60$$).removeClass("oj-listview-item-add-remove-transition").addClass(this.$m_widget$.$getItemStyleClass$()).children().children().unwrap();
    this.$m_widget$.$itemInsertComplete$($elem$$60$$, $context$$95$$);
    this.$signalTaskEnd$();
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$handleModelRemoveEvent$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$handleModelRemoveEvent$$($event$$379_keys$$44$$) {
    var $i$$332$$, $elem$$61$$;
    $event$$379_keys$$44$$ = $event$$379_keys$$44$$.keys;
    if (null != this.$m_root$ && null != $event$$379_keys$$44$$ && 0 != $event$$379_keys$$44$$.length) {
      this.$signalTaskStart$();
      for ($i$$332$$ = 0;$i$$332$$ < $event$$379_keys$$44$$.length;$i$$332$$++) {
        $elem$$61$$ = this.$FindElementByKey$($event$$379_keys$$44$$[$i$$332$$]), null != $elem$$61$$ && (this.$signalTaskStart$(), this.$_removeItem$($elem$$61$$), this.$signalTaskEnd$());
      }
      this.$m_widget$.$ClearCache$();
      this.$signalTaskEnd$();
    }
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$_removeItem$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$_removeItem$$($elem$$62$$) {
    var $effect$$1_itemStyleClass$$2$$, $self$$136$$ = this, $item$$22$$;
    this.$signalTaskStart$();
    $effect$$1_itemStyleClass$$2$$ = this.$m_widget$.$getItemStyleClass$();
    $elem$$62$$ = $$$$18$$($elem$$62$$);
    $elem$$62$$.children().wrapAll("\x3cdiv class\x3d'" + $effect$$1_itemStyleClass$$2$$ + "'\x3e\x3c/div\x3e");
    $elem$$62$$.removeClass($effect$$1_itemStyleClass$$2$$).addClass("oj-listview-item-add-remove-transition");
    this.$signalTaskStart$();
    $effect$$1_itemStyleClass$$2$$ = this.$m_widget$.$getAnimationEffect$("remove");
    $item$$22$$ = $elem$$62$$.get(0);
    $oj$$19$$.$AnimationUtils$.$startAnimation$($item$$22$$, "remove", $effect$$1_itemStyleClass$$2$$).then(function() {
      $self$$136$$.$_handleRemoveTransitionEnd$($elem$$62$$);
    });
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$_handleRemoveTransitionEnd$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$_handleRemoveTransitionEnd$$($elem$$63$$) {
    $elem$$63$$ = $$$$18$$($elem$$63$$);
    var $parent$$15$$ = $elem$$63$$.parent();
    this.$m_widget$.$itemRemoveComplete$($elem$$63$$.get(0));
    $elem$$63$$.remove();
    0 == $parent$$15$$.get(0).childElementCount && this.$m_widget$.$renderComplete$();
    this.$signalTaskEnd$();
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$handleModelChangeEvent$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$handleModelChangeEvent$$($event$$380_indexes$$22$$) {
    var $keys$$45$$, $data$$134$$, $i$$333$$, $elem$$64$$;
    $keys$$45$$ = $event$$380_indexes$$22$$.keys;
    if (null != this.$m_root$ && null != $keys$$45$$ && 0 != $keys$$45$$.length) {
      this.$signalTaskStart$();
      $data$$134$$ = $event$$380_indexes$$22$$.data;
      $event$$380_indexes$$22$$ = $event$$380_indexes$$22$$.indexes;
      for ($i$$333$$ = 0;$i$$333$$ < $keys$$45$$.length;$i$$333$$++) {
        $elem$$64$$ = this.$FindElementByKey$($keys$$45$$[$i$$333$$]), null != $elem$$64$$ && (this.$signalTaskStart$(), this.$replaceItem$($elem$$64$$, $event$$380_indexes$$22$$[$i$$333$$], $data$$134$$[$i$$333$$], this.getMetadata($event$$380_indexes$$22$$[$i$$333$$], $keys$$45$$[$i$$333$$], $data$$134$$[$i$$333$$]), this.$afterRenderItemForChangeEvent$.bind(this)), this.$signalTaskEnd$());
      }
      this.$m_widget$.$ClearCache$();
      this.$signalTaskEnd$();
    }
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$afterRenderItemForChangeEvent$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$afterRenderItemForChangeEvent$$($item$$23$$, $context$$96$$) {
    var $self$$137$$ = this, $effect$$2$$;
    this.$signalTaskStart$();
    this.$afterRenderItem$($item$$23$$, $context$$96$$);
    $effect$$2$$ = this.$m_widget$.$getAnimationEffect$("update");
    $oj$$19$$.$AnimationUtils$.$startAnimation$($item$$23$$, "update", $effect$$2$$).then(function() {
      $self$$137$$.$_handleReplaceTransitionEnd$($item$$23$$);
    });
    this.$signalTaskEnd$();
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$_handleReplaceTransitionEnd$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$_handleReplaceTransitionEnd$$($item$$24$$) {
    $$$$18$$($item$$24$$).removeClass("oj-listview-item-add-remove-transition");
    this.$m_widget$.$restoreCurrentItem$();
    this.$signalTaskEnd$();
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$handleModelResetEvent$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$handleModelResetEvent$$() {
    null != this.$m_root$ && (this.$signalTaskStart$(), this.$m_widget$.$ClearCache$(), this.$fetchRows$(!0), this.$signalTaskEnd$());
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$_handleFetchedData$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$_handleFetchedData$$($dataObj_keys$$46$$) {
    var $data$$135$$;
    null != this.$m_root$ && ($data$$135$$ = $dataObj_keys$$46$$.data, $dataObj_keys$$46$$ = $dataObj_keys$$46$$.keys, Array.isArray($data$$135$$) && Array.isArray($dataObj_keys$$46$$) && $data$$135$$.length == $dataObj_keys$$46$$.length && (this.$_handleFetchSuccess$($data$$135$$, $dataObj_keys$$46$$), this.$fetchEnd$()));
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$handleModelSyncEvent$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$handleModelSyncEvent$$($event$$382$$) {
    null != this.$m_root$ && (this.$signalTaskStart$(), 0 === $event$$382$$.startIndex && $$$$18$$(this.$m_root$).empty(), this.$m_widget$.$ClearCache$(), this.$_handleFetchedData$($event$$382$$), this.$signalTaskEnd$());
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$handleModelSortEvent$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$handleModelSortEvent$$() {
    null != this.$m_root$ && (this.$signalTaskStart$(), this.$m_widget$.$ClearCache$(), this.$m_widget$.$_isMultipleSelection$() && this.$m_widget$.$_clearSelection$(!0), this.$fetchRows$(!0), this.$signalTaskEnd$());
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$fetchEnd$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$fetchEnd$$() {
    this.$m_fetching$ = !1;
    this.$m_widget$.$renderComplete$();
    this.checkViewport();
    this.$signalTaskEnd$();
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.checkViewport = function $$oj$$19$$$$TableDataSourceContentHandler$$$checkViewport$() {
    var $self$$138$$ = this, $fetchPromise$$1$$;
    this.$signalTaskStart$();
    null != this.$m_domScroller$ && 0 < this.$m_dataSource$.totalSize() && this.$IsReady$() && ($fetchPromise$$1$$ = this.$m_domScroller$.checkViewport(), null != $fetchPromise$$1$$ && (this.$signalTaskStart$(), $fetchPromise$$1$$.then(function($result$$52$$) {
      $self$$138$$.$m_domScrollerMaxCountFunc$($result$$52$$);
      $self$$138$$.$signalTaskEnd$();
    }, null)));
    this.$signalTaskEnd$();
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.getMetadata = function $$oj$$19$$$$TableDataSourceContentHandler$$$getMetadata$($index$$173$$, $key$$105$$, $context$$97_data$$136$$) {
    $context$$97_data$$136$$ = $context$$97_data$$136$$.context;
    null == $context$$97_data$$136$$ && ($context$$97_data$$136$$ = {});
    null == $context$$97_data$$136$$.index && ($context$$97_data$$136$$.index = $index$$173$$);
    null == $context$$97_data$$136$$.key && ($context$$97_data$$136$$.key = $key$$105$$);
    return $context$$97_data$$136$$;
  };
  $oj$$19$$.$TreeDataSourceContentHandler$ = function $$oj$$19$$$$TreeDataSourceContentHandler$$($widget$$7$$, $root$$19$$, $data$$137$$) {
    $oj$$19$$.$TreeDataSourceContentHandler$.$superclass$.constructor.call(this, $widget$$7$$, $root$$19$$, $data$$137$$);
  };
  $oj$$19$$.$Object$.$createSubclass$($oj$$19$$.$TreeDataSourceContentHandler$, $oj$$19$$.$DataSourceContentHandler$, "oj.TreeDataSourceContentHandler");
  $oj$$19$$.$TreeDataSourceContentHandler$.prototype.Init = function $$oj$$19$$$$TreeDataSourceContentHandler$$$Init$() {
    $oj$$19$$.$TreeDataSourceContentHandler$.$superclass$.Init.call(this);
  };
  $oj$$19$$.$TreeDataSourceContentHandler$.prototype.$IsHierarchical$ = function $$oj$$19$$$$TreeDataSourceContentHandler$$$$IsHierarchical$$() {
    return!0;
  };
  $oj$$19$$.$TreeDataSourceContentHandler$.prototype.$fetchRows$ = function $$oj$$19$$$$TreeDataSourceContentHandler$$$$fetchRows$$($forceFetch$$2$$) {
    this.$signalTaskStart$();
    $oj$$19$$.$TreeDataSourceContentHandler$.$superclass$.$fetchRows$.call(this, $forceFetch$$2$$);
    this.$fetchChildren$(0, null, this.$m_root$, null);
    this.$signalTaskEnd$();
  };
  $oj$$19$$.$TreeDataSourceContentHandler$.prototype.$fetchChildren$ = function $$oj$$19$$$$TreeDataSourceContentHandler$$$$fetchChildren$$($range$$17_start$$49$$, $parent$$16$$, $parentElem$$, $successCallback$$27$$) {
    this.$signalTaskStart$();
    this.$m_fetching$ = !0;
    $range$$17_start$$49$$ = {start:$range$$17_start$$49$$, count:this.$m_dataSource$.$getChildCount$($parent$$16$$)};
    this.$m_dataSource$.$fetchChildren$($parent$$16$$, $range$$17_start$$49$$, {success:function($nodeSet$$) {
      this.$_handleFetchSuccess$($nodeSet$$, $parent$$16$$, $parentElem$$, $successCallback$$27$$);
    }.bind(this), error:function($status$$17$$) {
      this.$_handleFetchError$($status$$17$$);
    }.bind(this)});
    this.$signalTaskEnd$();
  };
  $oj$$19$$.$TreeDataSourceContentHandler$.prototype.$_handleFetchSuccess$ = function $$oj$$19$$$$TreeDataSourceContentHandler$$$$_handleFetchSuccess$$($nodeSet$$1$$, $parent$$17_start$$50$$, $parentElem$$1$$, $successCallback$$28$$) {
    var $count$$38$$, $i$$334$$, $data$$138$$, $metadata$$8$$;
    this.$signalTaskStart$();
    $parent$$17_start$$50$$ = $nodeSet$$1$$.getStart();
    $count$$38$$ = $nodeSet$$1$$.getCount();
    for ($i$$334$$ = 0;$i$$334$$ < $count$$38$$;$i$$334$$++) {
      $data$$138$$ = $nodeSet$$1$$.getData($parent$$17_start$$50$$ + $i$$334$$), $metadata$$8$$ = $nodeSet$$1$$.getMetadata($parent$$17_start$$50$$ + $i$$334$$), this.$addItem$($parentElem$$1$$, $parent$$17_start$$50$$ + $i$$334$$, $data$$138$$, $metadata$$8$$);
    }
    this.$m_fetching$ = !1;
    null != $successCallback$$28$$ && $successCallback$$28$$.call(null, $parentElem$$1$$);
    this.$m_widget$.$renderComplete$();
    this.$m_initialized$ = !0;
    this.$signalTaskEnd$();
  };
  $oj$$19$$.$TreeDataSourceContentHandler$.prototype.$afterRenderItem$ = function $$oj$$19$$$$TreeDataSourceContentHandler$$$$afterRenderItem$$($item$$26$$, $context$$98$$) {
    var $groupStyleClass$$, $content$$22_itemStyleClass$$3$$, $groupItemStyleClass_icon$$4$$, $groupCollapseStyleClass$$, $focusedStyleClass$$, $collapseClass_groupItem$$;
    this.$signalTaskStart$();
    $oj$$19$$.$TreeDataSourceContentHandler$.$superclass$.$afterRenderItem$.call(this, $item$$26$$, $context$$98$$);
    $groupStyleClass$$ = this.$m_widget$.$getGroupStyleClass$();
    $content$$22_itemStyleClass$$3$$ = this.$m_widget$.$getItemStyleClass$();
    $groupItemStyleClass_icon$$4$$ = this.$m_widget$.$getGroupItemStyleClass$();
    $groupCollapseStyleClass$$ = this.$m_widget$.$getGroupCollapseStyleClass$();
    $collapseClass_groupItem$$ = this.$m_widget$.$getCollapseIconStyleClass$();
    $focusedStyleClass$$ = this.$m_widget$.$getFocusedElementStyleClass$();
    $item$$26$$ = $$$$18$$($item$$26$$);
    !1 == $context$$98$$.leaf ? ($item$$26$$.children().wrapAll("\x3cdiv\x3e\x3c/div\x3e"), $item$$26$$.hasClass($focusedStyleClass$$) ? $item$$26$$.removeClass($focusedStyleClass$$).children().first().addClass($focusedStyleClass$$).attr("aria-expanded", "false") : $item$$26$$.children().first().attr("role", "presentation").find("." + $focusedStyleClass$$).attr("aria-expanded", "false"), $content$$22_itemStyleClass$$3$$ = $item$$26$$.children().first(), $content$$22_itemStyleClass$$3$$.uniqueId().addClass($groupItemStyleClass_icon$$4$$), 
    this.$m_widget$.$isExpandable$() && ($item$$26$$.addClass("oj-collapsed"), $groupItemStyleClass_icon$$4$$ = document.createElement("a"), $$$$18$$($groupItemStyleClass_icon$$4$$).attr("href", "#").attr("aria-labelledby", $content$$22_itemStyleClass$$3$$.get(0).id).addClass("oj-component-icon oj-clickable-icon-nocontext").addClass($collapseClass_groupItem$$), $content$$22_itemStyleClass$$3$$.prepend($groupItemStyleClass_icon$$4$$)), $collapseClass_groupItem$$ = document.createElement("ul"), $$$$18$$($collapseClass_groupItem$$).addClass($groupStyleClass$$).addClass($groupCollapseStyleClass$$).attr("role", 
    "group"), $item$$26$$.append($collapseClass_groupItem$$)) : !0 == $context$$98$$.leaf && $item$$26$$.addClass($content$$22_itemStyleClass$$3$$);
    this.$m_widget$.$_isSelectionEnabled$() && this.$isSelectable$($context$$98$$) && this.$m_widget$.$getFocusItem$($item$$26$$).attr("aria-selected", !1);
    this.$m_widget$.$itemRenderComplete$($item$$26$$[0], $context$$98$$);
    this.$signalTaskEnd$();
  };
  $oj$$19$$.$TreeDataSourceContentHandler$.prototype.$_handleFetchError$ = function $$oj$$19$$$$TreeDataSourceContentHandler$$$$_handleFetchError$$($status$$18$$) {
    this.$signalTaskStart$();
    $oj$$19$$.$Logger$.error($status$$18$$);
    this.$m_widget$.$renderComplete$();
    this.$signalTaskEnd$();
  };
  $oj$$19$$.$TreeDataSourceContentHandler$.prototype.$Expand$ = function $$oj$$19$$$$TreeDataSourceContentHandler$$$$Expand$$($item$$27$$, $successCallback$$29$$) {
    var $parentKey$$, $parentElem$$2$$;
    this.$signalTaskStart$();
    $parentKey$$ = this.$GetKey$($item$$27$$[0]);
    $parentElem$$2$$ = $item$$27$$.children("ul")[0];
    this.$fetchChildren$(0, $parentKey$$, $parentElem$$2$$, $successCallback$$29$$);
    this.$signalTaskEnd$();
  };
  $oj$$19$$.$TreeDataSourceContentHandler$.prototype.$Collapse$ = function $$oj$$19$$$$TreeDataSourceContentHandler$$$$Collapse$$($item$$28$$) {
    $item$$28$$.empty();
  };
  $oj$$19$$.$StaticContentHandler$ = function $$oj$$19$$$$StaticContentHandler$$($widget$$8$$, $root$$20$$) {
    this.$m_widget$ = $widget$$8$$;
    this.$m_root$ = $root$$20$$;
  };
  $oj$$19$$.$Object$.$createSubclass$($oj$$19$$.$StaticContentHandler$, $oj$$19$$.$Object$, "oj.StaticContentHandler");
  $oj$$19$$.$StaticContentHandler$.prototype.Init = function $$oj$$19$$$$StaticContentHandler$$$Init$() {
    $oj$$19$$.$StaticContentHandler$.$superclass$.Init.call(this);
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$Destroy$ = function $$oj$$19$$$$StaticContentHandler$$$$Destroy$$() {
    this.$restoreContent$(this.$m_root$, 0);
    this.$unsetRootAriaProperties$();
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$IsReady$ = function $$oj$$19$$$$StaticContentHandler$$$$IsReady$$() {
    return!0;
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$HandleResize$ = function $$oj$$19$$$$StaticContentHandler$$$$HandleResize$$() {
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$RenderContent$ = function $$oj$$19$$$$StaticContentHandler$$$$RenderContent$$() {
    this.$modifyContent$(this.$m_root$, 0);
    this.$setRootAriaProperties$();
    this.$m_widget$.$renderComplete$();
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$Expand$ = function $$oj$$19$$$$StaticContentHandler$$$$Expand$$($item$$29$$, $successCallback$$30$$) {
    var $groupItem$$1_selector$$24$$;
    $groupItem$$1_selector$$24$$ = "." + this.$m_widget$.$getGroupStyleClass$();
    $groupItem$$1_selector$$24$$ = $$$$18$$($item$$29$$).children($groupItem$$1_selector$$24$$)[0];
    $$$$18$$($groupItem$$1_selector$$24$$).css("display", "block");
    $successCallback$$30$$.call(null, $groupItem$$1_selector$$24$$);
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$Collapse$ = function $$oj$$19$$$$StaticContentHandler$$$$Collapse$$() {
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$IsHierarchical$ = function $$oj$$19$$$$StaticContentHandler$$$$IsHierarchical$$() {
    null == this.$m_hier$ && (this.$m_hier$ = 0 < $$$$18$$(this.$m_root$).children("li").children("ul").length);
    return this.$m_hier$;
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$restoreContent$ = function $$oj$$19$$$$StaticContentHandler$$$$restoreContent$$($elem$$65$$, $depth$$13$$) {
    var $groupStyleClass$$1$$, $groupCollapseStyleClass$$1$$, $groupExpandStyleClass$$, $groupItemStyleClass$$1$$, $itemStyleClass$$4$$, $itemElementStyleClass$$, $items$$, $i$$335$$, $groupItem$$2_item$$31$$, $groupItems$$;
    $groupStyleClass$$1$$ = this.$m_widget$.$getGroupStyleClass$();
    $groupCollapseStyleClass$$1$$ = this.$m_widget$.$getGroupCollapseStyleClass$();
    $groupExpandStyleClass$$ = this.$m_widget$.$getGroupExpandStyleClass$();
    $groupItemStyleClass$$1$$ = this.$m_widget$.$getGroupItemStyleClass$();
    $itemStyleClass$$4$$ = this.$m_widget$.$getItemStyleClass$();
    $itemElementStyleClass$$ = this.$m_widget$.$getItemElementStyleClass$();
    $items$$ = $elem$$65$$.children;
    for ($i$$335$$ = 0;$i$$335$$ < $items$$.length;$i$$335$$++) {
      $groupItem$$2_item$$31$$ = $items$$[$i$$335$$], this.$unsetAriaProperties$($groupItem$$2_item$$31$$), $groupItem$$2_item$$31$$ = $$$$18$$($groupItem$$2_item$$31$$), $groupItem$$2_item$$31$$.removeClass($itemElementStyleClass$$).removeClass($itemStyleClass$$4$$).removeClass(this.$m_widget$.$getDepthStyleClass$($depth$$13$$)).removeClass("oj-skipfocus").removeClass("oj-focus").removeClass("oj-hover").removeClass("oj-expanded").removeClass("oj-collapsed").removeClass("oj-selected"), $groupItems$$ = 
      $groupItem$$2_item$$31$$.children("ul"), 0 < $groupItems$$.length && ($groupItem$$2_item$$31$$.children("." + $groupItemStyleClass$$1$$).children().unwrap(), $groupItem$$2_item$$31$$.children(".oj-component-icon").remove(), $groupItem$$2_item$$31$$ = $$$$18$$($groupItems$$[0]), $groupItem$$2_item$$31$$.removeClass($groupStyleClass$$1$$).removeClass($groupExpandStyleClass$$).removeClass($groupCollapseStyleClass$$1$$).removeAttr("role"), this.$restoreContent$($groupItem$$2_item$$31$$[0], $depth$$13$$ + 
      1));
    }
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$modifyContent$ = function $$oj$$19$$$$StaticContentHandler$$$$modifyContent$$($elem$$66$$, $depth$$14$$) {
    var $itemStyleClass$$5$$, $itemElementStyleClass$$1$$, $groupStyleClass$$2$$, $groupItemStyleClass$$2$$, $groupCollapseStyleClass$$2$$, $collapseClass$$1$$, $focusedElementStyleClass$$, $items$$1$$, $expandable$$, $i$$336$$, $item$$32$$, $context$$99$$, $groupItem$$3_groupItems$$1$$, $content$$23$$, $icon$$5$$;
    $itemStyleClass$$5$$ = this.$m_widget$.$getItemStyleClass$();
    $itemElementStyleClass$$1$$ = this.$m_widget$.$getItemElementStyleClass$();
    $groupStyleClass$$2$$ = this.$m_widget$.$getGroupStyleClass$();
    $groupItemStyleClass$$2$$ = this.$m_widget$.$getGroupItemStyleClass$();
    $groupCollapseStyleClass$$2$$ = this.$m_widget$.$getGroupCollapseStyleClass$();
    $collapseClass$$1$$ = this.$m_widget$.$getCollapseIconStyleClass$();
    $focusedElementStyleClass$$ = this.$m_widget$.$getFocusedElementStyleClass$();
    $items$$1$$ = $elem$$66$$.children;
    $expandable$$ = this.$m_widget$.$isExpandable$();
    for ($i$$336$$ = 0;$i$$336$$ < $items$$1$$.length;$i$$336$$++) {
      $item$$32$$ = $$$$18$$($items$$1$$[$i$$336$$]), $context$$99$$ = this.$createContext$($item$$32$$), this.$setAriaProperties$($item$$32$$), $item$$32$$.uniqueId().addClass($itemElementStyleClass$$1$$), 0 < $depth$$14$$ && $item$$32$$.addClass(this.$m_widget$.$getDepthStyleClass$($depth$$14$$)), this.$isFocusable$($context$$99$$) || $item$$32$$.addClass("oj-skipfocus"), $groupItem$$3_groupItems$$1$$ = $item$$32$$.children("ul"), 0 < $groupItem$$3_groupItems$$1$$.length ? (this.$m_hier$ = !0, 
      $item$$32$$.children(":not(ul)").wrapAll("\x3cdiv\x3e\x3c/div\x3e"), $content$$23$$ = $item$$32$$.children().first(), $content$$23$$.addClass($groupItemStyleClass$$2$$), this.$hasChildren$($groupItem$$3_groupItems$$1$$[0]) && ($item$$32$$.hasClass($focusedElementStyleClass$$) ? ($item$$32$$.removeClass($focusedElementStyleClass$$), $content$$23$$.addClass($focusedElementStyleClass$$).attr("aria-expanded", "false")) : ($content$$23$$.attr("role", "presentation"), $content$$23$$.find("." + $focusedElementStyleClass$$).attr("aria-expanded", 
      "false")), $expandable$$ && ($item$$32$$.addClass("oj-collapsed"), $content$$23$$.uniqueId(), $icon$$5$$ = document.createElement("a"), $$$$18$$($icon$$5$$).attr("href", "#").attr("role", "button").attr("aria-labelledby", $content$$23$$.get(0).id).addClass("oj-component-icon oj-clickable-icon-nocontext").addClass($collapseClass$$1$$), $content$$23$$.prepend($icon$$5$$))), $groupItem$$3_groupItems$$1$$ = $$$$18$$($groupItem$$3_groupItems$$1$$[0]), $groupItem$$3_groupItems$$1$$.addClass($groupStyleClass$$2$$).addClass($groupCollapseStyleClass$$2$$).attr("role", 
      "group").css("display", "none"), this.$modifyContent$($groupItem$$3_groupItems$$1$$[0], $depth$$14$$ + 1)) : $item$$32$$.addClass($itemStyleClass$$5$$), this.$m_widget$.$_isSelectionEnabled$() && this.$isSelectable$($context$$99$$) && this.$m_widget$.$getFocusItem$($item$$32$$).attr("aria-selected", !1), this.$m_widget$.$itemRenderComplete$($item$$32$$[0], $context$$99$$);
    }
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$setRootAriaProperties$ = function $$oj$$19$$$$StaticContentHandler$$$$setRootAriaProperties$$() {
    this.$IsHierarchical$() ? this.$m_root$.setAttribute("role", "tree") : this.$m_root$.setAttribute("role", "listbox");
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$unsetRootAriaProperties$ = function $$oj$$19$$$$StaticContentHandler$$$$unsetRootAriaProperties$$() {
    this.$m_root$.removeAttribute("role");
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$hasChildren$ = function $$oj$$19$$$$StaticContentHandler$$$$hasChildren$$($item$$33$$) {
    return 0 < $$$$18$$($item$$33$$).children("li").length;
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$createContext$ = function $$oj$$19$$$$StaticContentHandler$$$$createContext$$($item$$34_parents$$4$$) {
    var $context$$100$$;
    $context$$100$$ = {};
    $context$$100$$.key = $item$$34_parents$$4$$.attr("id");
    $context$$100$$.parentElement = $item$$34_parents$$4$$.children().first()[0];
    $context$$100$$.index = $item$$34_parents$$4$$.index();
    $context$$100$$.data = $item$$34_parents$$4$$[0];
    $context$$100$$.component = this.$m_widget$.$getWidgetConstructor$();
    this.$IsHierarchical$() && ($context$$100$$.leaf = 0 == $item$$34_parents$$4$$.children("ul").length, $item$$34_parents$$4$$ = $item$$34_parents$$4$$.parents("li." + this.$m_widget$.$getItemElementStyleClass$()), $context$$100$$.depth = $item$$34_parents$$4$$.length, $context$$100$$.parentKey = 0 == $item$$34_parents$$4$$.length ? null : $item$$34_parents$$4$$.first().attr("id"));
    return $context$$100$$;
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$setAriaProperties$ = function $$oj$$19$$$$StaticContentHandler$$$$setAriaProperties$$($item$$35$$) {
    var $elem$$67$$ = this.$m_widget$.$getSingleFocusableElement$($item$$35$$);
    $elem$$67$$.attr("role", this.$IsHierarchical$() ? "treeitem" : "option");
    $elem$$67$$ != $item$$35$$ && $item$$35$$.attr("role", "presentation");
    $elem$$67$$.addClass(this.$m_widget$.$getFocusedElementStyleClass$());
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$unsetAriaProperties$ = function $$oj$$19$$$$StaticContentHandler$$$$unsetAriaProperties$$($elem$$68_item$$36$$) {
    $elem$$68_item$$36$$ = this.$m_widget$.$getSingleFocusableElement$($$$$18$$($elem$$68_item$$36$$));
    $elem$$68_item$$36$$.removeAttr("role");
    $elem$$68_item$$36$$.removeAttr("aria-selected");
    $elem$$68_item$$36$$.removeAttr("aria-expanded");
    $elem$$68_item$$36$$.removeClass(this.$m_widget$.$getFocusedElementStyleClass$());
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$GetKey$ = function $$oj$$19$$$$StaticContentHandler$$$$GetKey$$($element$$178$$) {
    return $$$$18$$($element$$178$$).attr("id");
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$FindElementByKey$ = function $$oj$$19$$$$StaticContentHandler$$$$FindElementByKey$$($key$$106$$) {
    return document.getElementById($key$$106$$);
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$isFocusable$ = function $$oj$$19$$$$StaticContentHandler$$$$isFocusable$$($context$$102$$) {
    return this.$m_widget$.$_getItemOption$("focusable", $context$$102$$, !0);
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$isSelectable$ = function $$oj$$19$$$$StaticContentHandler$$$$isSelectable$$($context$$103$$) {
    return this.$m_widget$.$_getItemOption$("selectable", $context$$103$$, !0);
  };
  $oj$$19$$.$_ojListView$ = function($SuperClass$$1$$, $methods$$2$$) {
    function $constructor$$2$$() {
    }
    $oj$$19$$.$Object$.$createSubclass$($constructor$$2$$, $SuperClass$$1$$, "");
    $constructor$$2$$.prototype = $$$$18$$.extend($constructor$$2$$.prototype, $methods$$2$$);
    return $constructor$$2$$;
  }(Object, {$LEFT_KEY$:37, $RIGHT_KEY$:39, $DOWN_KEY$:40, $UP_KEY$:38, $TAB_KEY$:9, $ENTER_KEY$:13, $ESC_KEY$:27, $F2_KEY$:113, $SPACE_KEY$:32, $STATE_EXPANDED$:0, $STATE_COLLAPSED$:1, $STATE_NONE$:2, $FOCUS_MODE_LIST$:0, $FOCUS_MODE_ITEM$:1, $init$:function($opts$$19$$) {
    var $self$$139$$ = this, $dndContext$$;
    this.$readinessStack$ = [];
    this.$signalTaskStart$();
    this.$ojContext$ = $opts$$19$$.$ojContext$;
    this.element = $opts$$19$$.element;
    this.options = $opts$$19$$;
    this.element.uniqueId().addClass(this.$GetStyleClass$() + " oj-component-initnode").attr("tabIndex", 0);
    "undefined" != typeof $oj$$19$$.$ListViewDndContext$ && (this.$m_dndContext$ = $dndContext$$ = new $oj$$19$$.$ListViewDndContext$(this), this.$ojContext$._on(this.element, {dragstart:function($event$$384$$) {
      return $dndContext$$.$_handleDragStart$($event$$384$$);
    }, dragenter:function($event$$385$$) {
      return $dndContext$$.$_handleDragEnter$($event$$385$$);
    }, dragover:function($event$$386$$) {
      return $dndContext$$.$_handleDragOver$($event$$386$$);
    }, dragleave:function($event$$387$$) {
      return $dndContext$$.$_handleDragLeave$($event$$387$$);
    }, dragend:function($event$$388$$) {
      return $dndContext$$.$_handleDragEnd$($event$$388$$);
    }, drag:function($event$$389$$) {
      return $dndContext$$.$_handleDrag$($event$$389$$);
    }, drop:function($event$$390$$) {
      return $dndContext$$.$_handleDrop$($event$$390$$);
    }}));
    this.$ojContext$._on(this.element, {click:function($event$$391$$) {
      $self$$139$$.$HandleMouseClick$($event$$391$$);
    }, touchstart:function($event$$392$$) {
      $self$$139$$.$HandleMouseDownOrTouchStart$($event$$392$$);
    }, touchend:function($event$$393$$) {
      $self$$139$$.$HandleTouchEndOrCancel$($event$$393$$);
    }, touchcancel:function($event$$394$$) {
      $self$$139$$.$HandleTouchEndOrCancel$($event$$394$$);
    }, mousedown:function($event$$395$$) {
      0 !== $event$$395$$.button || $self$$139$$.$_recentTouch$() || $self$$139$$.$HandleMouseDownOrTouchStart$($event$$395$$);
    }, mouseup:function($event$$396$$) {
      $self$$139$$.$_handleMouseUpOrPanMove$($event$$396$$);
      $self$$139$$.$m_preActive$ = !1;
    }, mouseout:function($event$$397$$) {
      $self$$139$$.$_handleMouseOut$($event$$397$$);
    }, mouseover:function($event$$398$$) {
      $self$$139$$.$_handleMouseOver$($event$$398$$);
    }, keydown:function($event$$399$$) {
      $self$$139$$.$HandleKeyDown$($event$$399$$);
    }, focus:function($event$$400$$) {
      $self$$139$$.$HandleFocus$($event$$400$$);
    }, blur:function($event$$401$$) {
      $self$$139$$.$HandleBlur$($event$$401$$);
    }, ojpanmove:function($event$$402$$) {
      $self$$139$$.$_handleMouseUpOrPanMove$($event$$402$$);
    }});
    $oj$$19$$.$AgentUtils$.$getAgentInfo$().browser === $oj$$19$$.$AgentUtils$.$BROWSER$.$FIREFOX$ && this.$ojContext$._on(this.$_getListContainer$(), {focus:function() {
      $self$$139$$.element.focus();
    }});
    this.$FOCUS_MODE_ITEM$ === this.$FOCUS_MODE_ITEM$ ? this.$ojContext$._on(this.element, {focusin:function($event$$404$$) {
      $self$$139$$.$HandleFocus$($event$$404$$);
    }, focusout:function($event$$405$$) {
      $self$$139$$.$HandleFocusOut$($event$$405$$);
    }}) : this.$ojContext$._on(this.element, {focus:function($event$$406$$) {
      $self$$139$$.$HandleFocus$($event$$406$$);
    }, blur:function($event$$407$$) {
      $self$$139$$.$HandleBlur$($event$$407$$);
    }});
    this.$ojContext$.document.bind("touchend.ojlistview touchcancel.ojlistview", this.$HandleTouchEndOrCancel$.bind(this));
    this.$_registerScrollHandler$();
    this.$ojContext$._focusable({applyHighlight:$self$$139$$.$ShouldApplyHighlight$(), recentPointer:$self$$139$$.$RecentPointerCallback$(), setupHandlers:function($focusInHandler$$1$$, $focusOutHandler$$1$$) {
      $self$$139$$.$_focusInHandler$ = $focusInHandler$$1$$;
      $self$$139$$.$_focusOutHandler$ = $focusOutHandler$$1$$;
    }});
  }, $afterCreate$:function() {
    var $container$$20$$;
    this.$_buildList$();
    this.$_addContextMenu$();
    this.$_initContentHandler$();
    $container$$20$$ = this.$_getListContainer$();
    this.$_registerResizeListener$($container$$20$$[0]);
    this.$signalTaskEnd$();
  }, refresh:function() {
    this.$_resetInternal$();
    this.$signalTaskStart$();
    this.$SetAriaProperties$();
    this.$_addContextMenu$();
    this.$_initContentHandler$();
    this.$_registerScrollHandler$();
    this.$signalTaskEnd$();
  }, whenReady:function() {
    return this.$readyPromise$;
  }, destroy:function() {
    this.element.removeClass(this.$GetStyleClass$() + " oj-component-initnode");
    this.$_unregisterResizeListener$(this.$_getListContainer$());
    this.$_resetInternal$();
    $oj$$19$$.$DomUtils$.unwrap(this.element, this.$_getListContainer$());
    this.$ojContext$.document.off(".ojlistview");
  }, $_resetInternal$:function() {
    var $self$$140$$ = this;
    this.$UnsetAriaProperties$();
    this.$_cleanupTabbableElementProperties$(this.element);
    null != this.$m_contentHandler$ && (this.$m_contentHandler$.$Destroy$(), delete this.$m_contentHandler$, this.$m_contentHandler$ = null);
    this.$m_active$ = null;
    this.$readinessStack$ = [];
    this.$readyPromise$ = new Promise(function($resolve$$32$$) {
      $self$$140$$.$readyResolve$ = $resolve$$32$$;
    });
    this.$ClearCache$();
  }, $notifyDetached$:function() {
    this.$_getListContainer$().removeClass("oj-focus-ancestor");
    null != this.$m_active$ && $$$$18$$(this.$m_active$.elem).removeClass("oj-focus oj-focus-highlight");
    null != this.$m_hoverItem$ && this.$_unhighlightElem$(this.$m_hoverItem$, "oj-hover");
  }, $notifyShown$:function() {
  }, getNodeBySubId:function($anchor$$2_item$$37_key$$107_locator$$26$$) {
    var $subId$$32$$;
    if (null == $anchor$$2_item$$37_key$$107_locator$$26$$) {
      return this.element ? this.element[0] : null;
    }
    $subId$$32$$ = $anchor$$2_item$$37_key$$107_locator$$26$$.subId;
    if ("oj-listview-disclosure" === $subId$$32$$ || "oj-listview-icon" === $subId$$32$$) {
      if ($anchor$$2_item$$37_key$$107_locator$$26$$ = $anchor$$2_item$$37_key$$107_locator$$26$$.key, $anchor$$2_item$$37_key$$107_locator$$26$$ = this.$FindElementByKey$($anchor$$2_item$$37_key$$107_locator$$26$$), null != $anchor$$2_item$$37_key$$107_locator$$26$$ && $anchor$$2_item$$37_key$$107_locator$$26$$.firstElementChild && ($anchor$$2_item$$37_key$$107_locator$$26$$ = $anchor$$2_item$$37_key$$107_locator$$26$$.firstElementChild.firstElementChild, null != $anchor$$2_item$$37_key$$107_locator$$26$$ && 
      ($$$$18$$($anchor$$2_item$$37_key$$107_locator$$26$$).hasClass(this.$getExpandIconStyleClass$()) || $$$$18$$($anchor$$2_item$$37_key$$107_locator$$26$$).hasClass(this.$getCollapseIconStyleClass$())))) {
        return $anchor$$2_item$$37_key$$107_locator$$26$$;
      }
    }
    return null;
  }, getSubIdByNode:function($item$$38_key$$108_node$$70$$) {
    if (null != $item$$38_key$$108_node$$70$$ && $$$$18$$($item$$38_key$$108_node$$70$$).hasClass(this.$getExpandIconStyleClass$()) || $$$$18$$($item$$38_key$$108_node$$70$$).hasClass(this.$getCollapseIconStyleClass$())) {
      if ($item$$38_key$$108_node$$70$$ = this.$FindItem$($item$$38_key$$108_node$$70$$), null != $item$$38_key$$108_node$$70$$ && 0 < $item$$38_key$$108_node$$70$$.length && ($item$$38_key$$108_node$$70$$ = this.$GetKey$($item$$38_key$$108_node$$70$$[0]), null != $item$$38_key$$108_node$$70$$)) {
        return{subId:"oj-listview-disclosure", key:$item$$38_key$$108_node$$70$$};
      }
    }
    return null;
  }, getContextByNode:function($item$$39_node$$71$$) {
    var $context$$104_key$$109$$, $parent$$18$$, $index$$174$$;
    $item$$39_node$$71$$ = this.$FindItem$($item$$39_node$$71$$);
    return null != $item$$39_node$$71$$ && 0 < $item$$39_node$$71$$.length && ($context$$104_key$$109$$ = this.$GetKey$($item$$39_node$$71$$[0]), null != $context$$104_key$$109$$) ? ($parent$$18$$ = $item$$39_node$$71$$.parent(), $index$$174$$ = $parent$$18$$.children("li").index($item$$39_node$$71$$), $context$$104_key$$109$$ = {subId:"oj-listview-item", key:$context$$104_key$$109$$, index:$index$$174$$}, $parent$$18$$.get(0) != this.element.get(0) && ($context$$104_key$$109$$.parent = $parent$$18$$.parent().get(0)), 
    $item$$39_node$$71$$.children().first().hasClass(this.$getGroupItemStyleClass$()) ? $context$$104_key$$109$$.group = !0 : $context$$104_key$$109$$.group = !1, $context$$104_key$$109$$) : null;
  }, getDataForVisibleItem:function($context$$105_parent$$19$$) {
    var $index$$175_item$$40$$;
    $index$$175_item$$40$$ = $context$$105_parent$$19$$.index;
    $context$$105_parent$$19$$ = $context$$105_parent$$19$$.parent;
    $context$$105_parent$$19$$ = null == $context$$105_parent$$19$$ ? this.element.get(0) : $$$$18$$($context$$105_parent$$19$$).children("ul." + this.$getGroupStyleClass$()).first();
    $index$$175_item$$40$$ = $$$$18$$($context$$105_parent$$19$$).children("li").get($index$$175_item$$40$$);
    return null != $index$$175_item$$40$$ && $$$$18$$($index$$175_item$$40$$).hasClass(this.$getItemStyleClass$()) ? this.$_getDataForItem$($index$$175_item$$40$$) : null;
  }, $_getDataForItem$:function($item$$41$$) {
    return null == this.$GetOption$("data") ? $item$$41$$ : $$$$18$$.data($item$$41$$, "data");
  }, $_addContextMenu$:function($contextMenu$$3$$) {
    null != this.$m_dndContext$ && this.$m_dndContext$.$addContextMenu$($contextMenu$$3$$);
  }, $_unregisterResizeListener$:function($element$$179$$) {
    $element$$179$$ && this.$_resizeHandler$ && $oj$$19$$.$DomUtils$.$removeResizeListener$($element$$179$$, this.$_resizeHandler$);
  }, $_registerResizeListener$:function($element$$180$$) {
    $element$$180$$ && (null == this.$_resizeHandler$ && (this.$_resizeHandler$ = this.$_handleResize$.bind(this)), $oj$$19$$.$DomUtils$.$addResizeListener$($element$$180$$, this.$_resizeHandler$));
  }, $_handleResize$:function($width$$41$$, $height$$42$$) {
    0 < $width$$41$$ && 0 < $height$$42$$ && null != this.$m_contentHandler$ && this.$m_contentHandler$.$HandleResize$($width$$41$$, $height$$42$$);
  }, $ShouldApplyHighlight$:function() {
    return!1;
  }, $RecentPointerCallback$:function() {
    return function() {
      return!1;
    };
  }, $ShouldRefresh$:function($options$$270$$) {
    return null != $options$$270$$.data || null != $options$$270$$.drillMode || null != $options$$270$$.groupHeaderPosition || null != $options$$270$$.item || null != $options$$270$$.scrollPolicy || null != $options$$270$$.scrollPolicyOptions;
  }, $setOptions$:function($options$$271$$) {
    var $self$$141$$, $elem$$69_expanded$$1$$, $selection$$17$$, $i$$337$$;
    if (this.$ShouldRefresh$($options$$271$$)) {
      return null != $options$$271$$.data && (null == $options$$271$$.currentItem && this.$SetOption$("currentItem", null), null == $options$$271$$.selection && this.$_clearSelection$(!0)), !0;
    }
    null != $options$$271$$.currentItem ? ($elem$$69_expanded$$1$$ = this.$FindElementByKey$($options$$271$$.currentItem), null != $elem$$69_expanded$$1$$ && ($elem$$69_expanded$$1$$ = $$$$18$$($elem$$69_expanded$$1$$), this.$SkipFocus$($elem$$69_expanded$$1$$) || this.$_activeAndFocus$($elem$$69_expanded$$1$$, null))) : null === $options$$271$$.currentItem && (this.$UnhighlightActive$(), this.$m_active$ = null, this.element.attr("tabIndex", 0));
    null != $options$$271$$.expanded && this.$m_contentHandler$.$IsHierarchical$() && ($elem$$69_expanded$$1$$ = $options$$271$$.expanded, Array.isArray($elem$$69_expanded$$1$$) && (this.$signalTaskStart$(), this.$_collapseAll$(), $self$$141$$ = this, $$$$18$$.each($elem$$69_expanded$$1$$, function($index$$176$$, $value$$263$$) {
      $self$$141$$.$expandKey$($value$$263$$, !0, !0, !0);
    }), this.$signalTaskEnd$()));
    if (null != $options$$271$$.selection && this.$_isSelectionEnabled$()) {
      for ($options$$271$$.selection = this.$_filterSelection$($options$$271$$.selection), $selection$$17$$ = $options$$271$$.selection, this.$_clearSelection$(!1), $i$$337$$ = 0;$i$$337$$ < $selection$$17$$.length;$i$$337$$++) {
        $elem$$69_expanded$$1$$ = this.$FindElementByKey$($selection$$17$$[$i$$337$$]), null != $elem$$69_expanded$$1$$ && this.$_applySelection$($elem$$69_expanded$$1$$, $selection$$17$$[$i$$337$$]);
      }
    }
    null != $options$$271$$.selectionMode && (this.$_clearSelection$(!0), this.$SetAriaProperties$());
    null != $options$$271$$.contextMenu && this.$_addContextMenu$($options$$271$$.contextMenu);
    return!1;
  }, $Trigger$:function($type$$86$$, $event$$408$$, $ui$$9$$) {
    return this.$ojContext$._trigger($type$$86$$, $event$$408$$, $ui$$9$$);
  }, $SetOption$:function($key$$110$$, $value$$264$$, $flags$$27$$) {
    this.$ojContext$.option($key$$110$$, $value$$264$$, $flags$$27$$);
  }, $GetOption$:function($key$$111$$) {
    return this.$ojContext$.option($key$$111$$);
  }, $signalTaskStart$:function() {
    var $self$$142$$ = this;
    this.$readinessStack$ && (0 == this.$readinessStack$.length && (this.$readyPromise$ = new Promise(function($resolve$$33$$) {
      $self$$142$$.$readyResolve$ = $resolve$$33$$;
    })), this.$readinessStack$.push(1));
  }, $signalTaskEnd$:function() {
    this.$readinessStack$ && 0 < this.$readinessStack$.length && (this.$readinessStack$.pop(), 0 == this.$readinessStack$.length && this.$readyResolve$(null));
  }, $_initContentHandler$:function() {
    var $data$$139$$;
    this.$signalTaskStart$();
    $data$$139$$ = this.$GetOption$("data");
    if (null != $data$$139$$) {
      if ("undefined" === typeof $oj$$19$$.$TableDataSource$ || "undefined" === typeof $oj$$19$$.$TreeDataSource$) {
        throw "oj.TableDataSource or oj.TreeDataSource not found. Ensure the required modules are imported";
      }
      if ($data$$139$$ instanceof $oj$$19$$.$TableDataSource$) {
        this.$m_contentHandler$ = new $oj$$19$$.$TableDataSourceContentHandler$(this, this.element[0], $data$$139$$);
      } else {
        if ($data$$139$$ instanceof $oj$$19$$.$TreeDataSource$) {
          this.$m_contentHandler$ = new $oj$$19$$.$TreeDataSourceContentHandler$(this, this.element[0], $data$$139$$);
        } else {
          throw "Invalid data";
        }
      }
    } else {
      this.$m_contentHandler$ = new $oj$$19$$.$StaticContentHandler$(this, this.element[0]);
    }
    this.$showStatusText$();
    this.$m_contentHandler$.$RenderContent$();
    this.$signalTaskEnd$();
  }, $UpdateActiveDescendant$:function($elem$$70$$) {
    this.element.attr("aria-activedescendant", $elem$$70$$.attr("id"));
  }, $SetAriaProperties$:function() {
    this.element.attr("aria-activedescendant", "");
    this.$_isMultipleSelection$() ? this.element.attr("aria-multiselectable", !0) : this.$_isSelectionEnabled$() && this.element.attr("aria-multiselectable", !1);
  }, $UnsetAriaProperties$:function() {
    this.element.removeAttr("aria-activedescendant").removeAttr("aria-multiselectable");
  }, $_buildList$:function() {
    var $container$$21$$, $accInfo$$1_status$$19$$;
    $container$$21$$ = this.$_getListContainer$();
    this.$SetAriaProperties$();
    $accInfo$$1_status$$19$$ = this.$_buildStatus$();
    $container$$21$$.append($accInfo$$1_status$$19$$);
    this.$m_status$ = $accInfo$$1_status$$19$$;
    $accInfo$$1_status$$19$$ = this.$_buildAccInfo$();
    $container$$21$$.append($accInfo$$1_status$$19$$);
    this.$m_accInfo$ = $accInfo$$1_status$$19$$;
    this.$_isTouchSupport$() && $container$$21$$.append(this.$_buildAccInstructionText$());
  }, $_buildStatus$:function() {
    var $root$$22$$ = $$$$18$$(document.createElement("div"));
    $root$$22$$.addClass("oj-listview-status-message oj-listview-status").attr({id:this.$_createSubId$("status"), role:"status"});
    return $root$$22$$;
  }, $_buildAccInfo$:function() {
    var $root$$23$$ = $$$$18$$(document.createElement("div"));
    $root$$23$$.addClass("oj-helper-hidden-accessible").attr({id:this.$_createSubId$("info"), role:"status"});
    return $root$$23$$;
  }, $_buildAccInstructionText$:function() {
    var $root$$24$$ = $$$$18$$(document.createElement("div"));
    $root$$24$$.addClass("oj-helper-hidden-accessible").attr({id:this.$_createSubId$("instr")});
    $root$$24$$.text(this.$ojContext$.$getTranslatedString$("accessibleReorderTouchInstructionText"));
    return $root$$24$$;
  }, $_setAccInfoText$:function($text$$22$$) {
    "" != $text$$22$$ && this.$m_accInfo$.text() != $text$$22$$ && this.$m_accInfo$.text($text$$22$$);
  }, $showStatusText$:function() {
    var $msg$$24$$ = this.$ojContext$.$getTranslatedString$("msgFetchingData");
    this.$m_status$.text($msg$$24$$).css("left", this.element.outerWidth() / 2 - this.$m_status$.outerWidth() / 2).show();
  }, $hideStatusText$:function() {
    this.$m_status$.hide();
  }, $getRootElement$:function() {
    return this.$_getListContainer$();
  }, $_getListContainer$:function() {
    null == this.$m_container$ && (this.$m_container$ = this.$_createListContainer$());
    return this.$m_container$;
  }, $_createListContainer$:function() {
    var $listContainer$$ = $$$$18$$(document.createElement("div"));
    $listContainer$$.addClass(this.$GetContainerStyleClass$()).addClass("oj-component");
    this.element.parent()[0].replaceChild($listContainer$$[0], this.element[0]);
    $listContainer$$.prepend(this.element);
    return $listContainer$$;
  }, $_getEmptyText$:function() {
    return this.$ojContext$.$getTranslatedString$("msgNoData");
  }, $_buildEmptyText$:function() {
    var $emptyText$$2$$, $empty$$3$$;
    $emptyText$$2$$ = this.$_getEmptyText$();
    $empty$$3$$ = document.createElement("li");
    $empty$$3$$.id = this.$_createSubId$("empty");
    $empty$$3$$.className = "oj-listview-no-data-message oj-listview-empty-text";
    $empty$$3$$.textContent = $emptyText$$2$$;
    return $empty$$3$$;
  }, $GetState$:function($expanded$$2_item$$42$$) {
    $expanded$$2_item$$42$$ = this.$getFocusItem$($expanded$$2_item$$42$$).attr("aria-expanded");
    return "true" == $expanded$$2_item$$42$$ ? this.$STATE_EXPANDED$ : "false" == $expanded$$2_item$$42$$ ? this.$STATE_COLLAPSED$ : this.$STATE_NONE$;
  }, $SetState$:function($item$$43$$, $state$$6$$) {
    var $expandable$$1$$ = this.$isExpandable$();
    $state$$6$$ == this.$STATE_EXPANDED$ ? (this.$getFocusItem$($item$$43$$).attr("aria-expanded", "true"), $expandable$$1$$ && $item$$43$$.removeClass("oj-collapsed").addClass("oj-expanded")) : $state$$6$$ == this.$STATE_COLLAPSED$ && (this.$getFocusItem$($item$$43$$).attr("aria-expanded", "false"), $expandable$$1$$ && $item$$43$$.removeClass("oj-expanded").addClass("oj-collapsed"));
  }, $_getItemOption$:function($name$$119_value$$265$$, $context$$106$$, $resolve$$34$$) {
    $name$$119_value$$265$$ = this.options.item[$name$$119_value$$265$$];
    return "function" == typeof $name$$119_value$$265$$ && $resolve$$34$$ ? $name$$119_value$$265$$.call(this, $context$$106$$) : $name$$119_value$$265$$;
  }, $_getItemRenderer$:function() {
    var $renderer$$13$$ = this.$_getItemOption$("renderer", null, !1);
    return "function" != typeof $renderer$$13$$ ? null : $renderer$$13$$;
  }, $itemInsertComplete$:function() {
  }, $itemRemoveComplete$:function($elem$$72$$) {
    var $prop$$71$$;
    if (null != $elem$$72$$ && $elem$$72$$.id && null != this.$m_keyElemMap$) {
      for ($prop$$71$$ in this.$m_keyElemMap$) {
        if (this.$m_keyElemMap$.hasOwnProperty($prop$$71$$) && this.$m_keyElemMap$[$prop$$71$$] === $elem$$72$$.id) {
          delete this.$m_keyElemMap$[$prop$$71$$];
          break;
        }
      }
    }
  }, $itemRenderComplete$:function($elem$$73$$, $context$$108$$) {
    var $clone$$3_selection$$18$$, $selectedItems$$2$$, $expanded$$3_i$$338_index$$177$$, $self$$144$$;
    null != this.$m_dndContext$ && this.$m_dndContext$.$itemRenderComplete$($elem$$73$$);
    this.$_disableAllTabbableElements$($elem$$73$$);
    if (this.$_isSelectionEnabled$()) {
      if ($clone$$3_selection$$18$$ = this.$GetOption$("selection"), this.$IsSelectable$($elem$$73$$)) {
        for ($expanded$$3_i$$338_index$$177$$ = 0;$expanded$$3_i$$338_index$$177$$ < $clone$$3_selection$$18$$.length;$expanded$$3_i$$338_index$$177$$++) {
          if ($clone$$3_selection$$18$$[$expanded$$3_i$$338_index$$177$$] == $context$$108$$.key && (this.$_applySelection$($elem$$73$$, $clone$$3_selection$$18$$[$expanded$$3_i$$338_index$$177$$]), !this.$_isMultipleSelection$())) {
            1 < $clone$$3_selection$$18$$.length && ($selectedItems$$2$$ = $$$$18$$(this.$FindElementByKey$($context$$108$$.key)), this.$SetOption$("selection", [$context$$108$$.key], {_context:{originalEvent:null, $internalSet$:!0, $extraData$:{items:$selectedItems$$2$$}}, changed:!0}));
            break;
          }
        }
      } else {
        if ($expanded$$3_i$$338_index$$177$$ = $clone$$3_selection$$18$$.indexOf($context$$108$$.key), -1 < $expanded$$3_i$$338_index$$177$$) {
          $clone$$3_selection$$18$$ = $clone$$3_selection$$18$$.slice(0);
          $clone$$3_selection$$18$$.splice($expanded$$3_i$$338_index$$177$$, 1);
          $selectedItems$$2$$ = Array($clone$$3_selection$$18$$.length);
          for ($expanded$$3_i$$338_index$$177$$ = 0;$expanded$$3_i$$338_index$$177$$ < $clone$$3_selection$$18$$.length;$expanded$$3_i$$338_index$$177$$++) {
            $selectedItems$$2$$[$expanded$$3_i$$338_index$$177$$] = this.$FindElementByKey$($clone$$3_selection$$18$$[$expanded$$3_i$$338_index$$177$$]);
          }
          this.$SetOption$("selection", $clone$$3_selection$$18$$, {_context:{originalEvent:null, $internalSet$:!0, $extraData$:{items:$$$$18$$($selectedItems$$2$$)}}, changed:!0});
        }
      }
    }
    this.$m_contentHandler$.$IsHierarchical$() && this.$GetState$($$$$18$$($elem$$73$$)) == this.$STATE_COLLAPSED$ && ($expanded$$3_i$$338_index$$177$$ = this.$GetOption$("expanded"), this.$_isExpandAll$() ? this.$ExpandItem$($$$$18$$($elem$$73$$), null, !1, null, !1, !1, !1) : Array.isArray($expanded$$3_i$$338_index$$177$$) && ($self$$144$$ = this, $$$$18$$.each($expanded$$3_i$$338_index$$177$$, function($index$$178$$, $value$$266$$) {
      $value$$266$$ == $context$$108$$.key && $self$$144$$.$ExpandItem$($$$$18$$($elem$$73$$), null, !1, null, !1, !1, !1);
    })));
    null != this.$m_active$ && $context$$108$$.key == this.$m_active$.key && null != this.$m_active$.elem && $elem$$73$$ != this.$m_active$.elem.get(0) && (this.$m_active$.elem = $$$$18$$($elem$$73$$));
  }, $renderComplete$:function() {
    var $current$$7_elem$$74_empty$$4$$;
    this.$hideStatusText$();
    $$$$18$$(document.getElementById(this.$_createSubId$("empty"))).remove();
    0 == this.element[0].childElementCount ? ($current$$7_elem$$74_empty$$4$$ = this.$_buildEmptyText$(), this.element.append($current$$7_elem$$74_empty$$4$$)) : (this.$m_items$ = null, $current$$7_elem$$74_empty$$4$$ = this.$GetOption$("currentItem"), null != $current$$7_elem$$74_empty$$4$$ && ($current$$7_elem$$74_empty$$4$$ = this.$FindElementByKey$($current$$7_elem$$74_empty$$4$$), null == $current$$7_elem$$74_empty$$4$$ ? this.$SetOption$("currentItem", null) : null != this.$m_active$ || this.$SkipFocus$($$$$18$$($current$$7_elem$$74_empty$$4$$)) || 
    this.$_activeAndFocus$($$$$18$$($current$$7_elem$$74_empty$$4$$), null)), this.$_getListContainer$().hasClass("oj-focus-ancestor") && null == this.$m_active$ && this.$_initFocus$());
    this.$Trigger$("ready", null, {});
  }, $restoreCurrentItem$:function() {
    var $current$$8_elem$$75$$ = this.$GetOption$("currentItem");
    null != $current$$8_elem$$75$$ && ($current$$8_elem$$75$$ = this.$FindElementByKey$($current$$8_elem$$75$$), null == $current$$8_elem$$75$$ || this.$SkipFocus$($$$$18$$($current$$8_elem$$75$$)) || this.$_activeAndFocus$($$$$18$$($current$$8_elem$$75$$), null));
  }, $ClearCache$:function() {
    this.$m_groupItems$ = this.$m_items$ = null;
  }, $notifyContextMenuGesture$:function($menu$$6$$, $event$$409$$, $eventType$$36$$) {
    var $launcher$$8_openOptions$$4_parent$$20$$;
    if (this.$IsNodeEditableOrClickable$($$$$18$$($event$$409$$.target))) {
      return!1;
    }
    $launcher$$8_openOptions$$4_parent$$20$$ = $$$$18$$($event$$409$$.target).closest("." + this.$getItemElementStyleClass$());
    0 < $launcher$$8_openOptions$$4_parent$$20$$.length && !this.$SkipFocus$($$$$18$$($launcher$$8_openOptions$$4_parent$$20$$[0])) && this.$_activeAndFocus$($$$$18$$($launcher$$8_openOptions$$4_parent$$20$$[0]), null);
    $launcher$$8_openOptions$$4_parent$$20$$ = this.element;
    null != this.$m_active$ && ($launcher$$8_openOptions$$4_parent$$20$$ = this.$m_active$.elem);
    $launcher$$8_openOptions$$4_parent$$20$$ = {launcher:$launcher$$8_openOptions$$4_parent$$20$$, initialFocus:"menu"};
    "keyboard" === $eventType$$36$$ && ($launcher$$8_openOptions$$4_parent$$20$$.position = {my:"start top", at:"start bottom", of:this.$m_active$.elem});
    null != this.$m_dndContext$ && this.$m_dndContext$.$_handleContextMenuBeforeOpen$($$$$18$$($menu$$6$$.element), $event$$409$$);
    this.$ojContext$.$_OpenContextMenu$($event$$409$$, $eventType$$36$$, $launcher$$8_openOptions$$4_parent$$20$$);
  }, $IsElementEditableOrClickable$:function($node$$72$$) {
    return null != $node$$72$$.prop("nodeName").match(/^INPUT|SELECT|OPTION|BUTTON|^A\b|TEXTAREA/);
  }, $IsNodeEditableOrClickable$:function($node$$73$$) {
    for (;null != $node$$73$$ && $node$$73$$[0] != this.element[0] && "LI" != $node$$73$$.prop("nodeName");) {
      if (3 != $node$$73$$[0].nodeType) {
        var $tabIndex$$4$$ = $node$$73$$.attr("tabIndex"), $origTabIndex$$1$$ = $node$$73$$.attr("data-oj-tabindex");
        if (null != $tabIndex$$4$$ && 0 <= $tabIndex$$4$$ && !$node$$73$$.hasClass(this.$getFocusedElementStyleClass$()) || this.$IsElementEditableOrClickable$($node$$73$$) && (-1 != $tabIndex$$4$$ || -1 != $origTabIndex$$1$$)) {
          return!0;
        }
      }
      $node$$73$$ = $node$$73$$.parent();
    }
    return!1;
  }, $_disableAllTabbableElements$:function($element$$181$$) {
    var $tabIndex$$5$$;
    $$$$18$$($element$$181$$).find("a, input, select, textarea, button, object, .oj-component-initnode").each(function() {
      $$$$18$$(this).removeAttr("data-first").removeAttr("data-last");
      $tabIndex$$5$$ = parseInt($$$$18$$(this).attr("tabIndex"), 10);
      (isNaN($tabIndex$$5$$) || 0 <= $tabIndex$$5$$) && $$$$18$$(this).attr("tabIndex", -1).attr("data-tabmod", isNaN($tabIndex$$5$$) ? -1 : $tabIndex$$5$$);
    });
  }, $_enableAllTabbableElements$:function($elem$$76_elems$$8$$) {
    var $tabIndex$$6$$;
    $elem$$76_elems$$8$$ = $$$$18$$($elem$$76_elems$$8$$).find("[data-tabmod]").each(function() {
      $tabIndex$$6$$ = parseInt($$$$18$$(this).attr("data-tabmod"), 10);
      $$$$18$$(this).removeAttr("data-tabmod");
      -1 == $tabIndex$$6$$ ? $$$$18$$(this).removeAttr("tabIndex") : $$$$18$$(this).attr("tabIndex", $tabIndex$$6$$);
    });
    $elem$$76_elems$$8$$.first().attr("data-first", "true");
    $elem$$76_elems$$8$$.last().attr("data-last", "true");
  }, $_cleanupTabbableElementProperties$:function($elem$$77$$) {
    $$$$18$$($elem$$77$$).find("[data-tabmod]").removeAttr("tabIndex").removeAttr("data-tabmod").removeAttr("data-first").removeAttr("data-last");
  }, $SkipFocus$:function($item$$44$$) {
    return $item$$44$$.hasClass("oj-skipfocus");
  }, $HandleFocus$:function($event$$410$$) {
    this.$_getListContainer$().addClass("oj-focus-ancestor");
    null == this.$m_active$ ? this.$_isTouchSupport$() || this.$m_preActive$ || this.$_initFocus$($event$$410$$) : this.$m_preActive$ || this.$HighlightActive$();
  }, $_initFocus$:function($event$$411$$) {
    var $items$$2$$, $i$$339$$, $item$$46$$;
    $items$$2$$ = this.$_getItemsCache$();
    for ($i$$339$$ = 0;$i$$339$$ < $items$$2$$.length;$i$$339$$++) {
      if ($item$$46$$ = $$$$18$$($items$$2$$[$i$$339$$]), !this.$SkipFocus$($item$$46$$)) {
        this.$_activeAndFocus$($item$$46$$, $event$$411$$);
        break;
      }
    }
  }, $HandleFocusOut$:function($event$$412$$) {
    this.$HandleBlur$($event$$412$$);
  }, $HandleBlur$:function($event$$413$$) {
    null != $event$$413$$.relatedTarget && $$$$18$$.contains(this.element.get(0), $event$$413$$.relatedTarget) || (this.$_getListContainer$().removeClass("oj-focus-ancestor"), this.$UnhighlightActive$());
  }, $_handleMouseOut$:function($event$$414_item$$47$$) {
    $event$$414_item$$47$$ = this.$FindItem$($event$$414_item$$47$$.target);
    null != $event$$414_item$$47$$ && (this.$m_hoverItem$ = null, this.$_unhighlightElem$($event$$414_item$$47$$, "oj-hover"));
  }, $_handleMouseOver$:function($event$$415_item$$48$$) {
    this.$_recentTouch$() || ($event$$415_item$$48$$ = this.$FindItem$($event$$415_item$$48$$.target), null == $event$$415_item$$48$$ || this.$SkipFocus$($event$$415_item$$48$$) || (this.$m_hoverItem$ = $event$$415_item$$48$$, this.$_highlightElem$($event$$415_item$$48$$, "oj-hover")));
  }, $_recentTouch$:function() {
    return 500 > Date.now() - this.$_lastTouch$;
  }, $HandleKeyDown$:function($event$$416$$) {
    var $keyCode$$10_processed$$1$$, $current$$9$$;
    if (this.$isExpandable$() && ($keyCode$$10_processed$$1$$ = $event$$416$$.keyCode, $keyCode$$10_processed$$1$$ === this.$LEFT_KEY$ || $keyCode$$10_processed$$1$$ === this.$RIGHT_KEY$)) {
      if ($current$$9$$ = this.$m_active$.elem, $keyCode$$10_processed$$1$$ === this.$LEFT_KEY$) {
        if (this.$GetState$($current$$9$$) == this.$STATE_EXPANDED$) {
          this.$CollapseItem$($current$$9$$, $event$$416$$, !0, this.$m_active$.key, !0, !0);
          return;
        }
      } else {
        if (this.$GetState$($current$$9$$) == this.$STATE_COLLAPSED$) {
          this.$ExpandItem$($current$$9$$, $event$$416$$, !0, this.$m_active$.key, !0, !0, !0);
          return;
        }
      }
    }
    $keyCode$$10_processed$$1$$ = this.$HandleSelectionOrActiveKeyDown$($event$$416$$);
    null != this.$m_dndContext$ && ($keyCode$$10_processed$$1$$ = $keyCode$$10_processed$$1$$ || this.$m_dndContext$.$HandleKeyDown$($event$$416$$));
    !0 === $keyCode$$10_processed$$1$$ && $event$$416$$.preventDefault();
  }, $_handleMouseUpOrPanMove$:function($event$$417$$) {
    this.$m_preActiveItem$ && this.$_unhighlightElem$(this.$m_preActiveItem$, "oj-focus");
    null != this.$m_dndContext$ && this.$m_dndContext$.$_unsetDraggable$($$$$18$$($event$$417$$.target));
  }, $HandleMouseDownOrTouchStart$:function($event$$418$$) {
    var $item$$49$$, $target$$117$$;
    this.$m_preActive$ = !0;
    $target$$117$$ = $$$$18$$($event$$418$$.target);
    null != this.$m_dndContext$ && this.$m_dndContext$.$_setDraggable$($target$$117$$);
    $item$$49$$ = this.$_findItem$($target$$117$$);
    null == $item$$49$$ || 0 == $item$$49$$.length || this.$SkipFocus$($item$$49$$) || $target$$117$$.hasClass("oj-listview-drag-handle") || (this.$_getListContainer$().hasClass("oj-focus-ancestor") || this.$_getListContainer$().addClass("oj-focus-ancestor"), this.$m_preActiveItem$ = $item$$49$$, this.$_highlightElem$($item$$49$$, "oj-focus"), $event$$418$$.originalEvent.touches && 0 < $event$$418$$.originalEvent.touches.length && (this.$m_touchPos$ = {x:$event$$418$$.originalEvent.changedTouches[0].pageX, 
    y:$event$$418$$.originalEvent.changedTouches[0].pageY}));
  }, $HandleTouchEndOrCancel$:function($event$$419$$) {
    var $elem$$78_offset$$22$$, $effect$$3$$;
    null != this.$m_preActiveItem$ && (this.$_unhighlightElem$(this.$m_preActiveItem$, "oj-focus"), null != this.$m_touchPos$ && ($elem$$78_offset$$22$$ = this.$m_preActiveItem$.offset(), $effect$$3$$ = this.$getAnimationEffect$("pointerUp"), $effect$$3$$.offsetX = this.$m_touchPos$.x - $elem$$78_offset$$22$$.left + "px", $effect$$3$$.offsetY = this.$m_touchPos$.y - $elem$$78_offset$$22$$.top + "px", $elem$$78_offset$$22$$ = this.$m_preActiveItem$.get(0), $oj$$19$$.$AnimationUtils$.$startAnimation$($elem$$78_offset$$22$$, 
    "pointerUp", $effect$$3$$), this.$m_touchPos$ = null));
    this.$_lastTouch$ = Date.now();
    this.$_handleMouseOut$($event$$419$$);
  }, $HandleMouseClick$:function($event$$420$$) {
    var $collapseIconClass_item$$50$$, $expandIconClass$$, $groupItemClass$$, $target$$118$$;
    0 === $event$$420$$.button && ($collapseIconClass_item$$50$$ = this.$getCollapseIconStyleClass$(), $expandIconClass$$ = this.$getExpandIconStyleClass$(), $groupItemClass$$ = this.$getGroupItemStyleClass$(), $target$$118$$ = $$$$18$$($event$$420$$.target), $target$$118$$.hasClass($expandIconClass$$) ? (this.$_collapse$($event$$420$$), $event$$420$$.preventDefault()) : $target$$118$$.hasClass($collapseIconClass_item$$50$$) ? (this.$_expand$($event$$420$$), $event$$420$$.preventDefault()) : (this.$_isActionableMode$() && 
    null != this.$m_active$ && (this.$_setActionableMode$(!1), this.$_disableAllTabbableElements$(this.$m_active$.elem)), $collapseIconClass_item$$50$$ = this.$_findItem$($target$$118$$), null == $collapseIconClass_item$$50$$ || 0 == $collapseIconClass_item$$50$$.length || this.$SkipFocus$($collapseIconClass_item$$50$$) || (this.$_getListContainer$().hasClass("oj-focus-ancestor") || this.$_getListContainer$().addClass("oj-focus-ancestor"), this.$_isSelectionEnabled$() && this.$IsSelectable$($collapseIconClass_item$$50$$[0]) ? 
    this.$_isTouchSupport$() ? this.$_handleTouchSelection$($collapseIconClass_item$$50$$, $event$$420$$) : this.$HandleClickSelection$($collapseIconClass_item$$50$$, $event$$420$$) : this.$HandleClickActive$($collapseIconClass_item$$50$$, $event$$420$$), this.$isExpandable$() && $target$$118$$.closest("." + $groupItemClass$$) && (this.$GetState$($collapseIconClass_item$$50$$) == this.$STATE_COLLAPSED$ ? this.$_expand$($event$$420$$) : this.$GetState$($collapseIconClass_item$$50$$) == this.$STATE_EXPANDED$ && 
    this.$_collapse$($event$$420$$)))));
  }, $_isTouchSupport$:function() {
    return $oj$$19$$.$DomUtils$.$isTouchSupported$();
  }, $_ctrlEquivalent$:function($event$$421$$) {
    return $oj$$19$$.$DomUtils$.$isMetaKeyPressed$($event$$421$$);
  }, $_createSubId$:function($subId$$33$$) {
    return[this.element.attr("id"), $subId$$33$$].join(":");
  }, $FindItem$:function($elem$$79$$) {
    return $$$$18$$($elem$$79$$).closest("." + this.$getItemElementStyleClass$());
  }, $_isClickthroughDisabled$:function($elem$$80$$) {
    return $elem$$80$$.hasClass("oj-clickthrough-disabled") || $elem$$80$$.hasClass("oj-component-initnode") || $elem$$80$$.hasClass("oj-component");
  }, $_findItem$:function($current$$10_target$$119$$) {
    for (;0 < $current$$10_target$$119$$.length && !this.$_isClickthroughDisabled$($current$$10_target$$119$$);) {
      if ($current$$10_target$$119$$.hasClass(this.$getItemElementStyleClass$())) {
        return $current$$10_target$$119$$;
      }
      $current$$10_target$$119$$ = $current$$10_target$$119$$.parent();
    }
    return null;
  }, $_getListContainerBorderWidth$:function() {
    null == this.$m_borderWidth$ && (this.$m_borderWidth$ = parseInt(this.$_getListContainer$().css("border-top-width"), 10) + parseInt(this.$_getListContainer$().css("border-bottom-width"), 10));
    return this.$m_borderWidth$;
  }, $_scrollToVisible$:function($container$$22_elem$$81$$) {
    var $scrollTop$$15_top$$10$$, $height$$43$$, $containerScrollTop$$, $containerHeight$$, $headerTop$$, $headerHeight$$, $offset$$23$$ = 0;
    $scrollTop$$15_top$$10$$ = $container$$22_elem$$81$$.offsetTop;
    $height$$43$$ = $container$$22_elem$$81$$.offsetHeight;
    $container$$22_elem$$81$$ = this.$_getListContainer$()[0];
    $containerScrollTop$$ = $container$$22_elem$$81$$.scrollTop;
    $containerHeight$$ = $container$$22_elem$$81$$.offsetHeight;
    null != this.$m_groupItemToPin$ && ($headerTop$$ = parseInt(this.$m_groupItemToPin$.style.top, 10), $headerHeight$$ = $$$$18$$(this.$m_groupItemToPin$).outerHeight(), $scrollTop$$15_top$$10$$ <= $headerTop$$ && $headerTop$$ < $scrollTop$$15_top$$10$$ + $height$$43$$ ? $offset$$23$$ = ($height$$43$$ + $scrollTop$$15_top$$10$$ - $headerTop$$) / 2 : $scrollTop$$15_top$$10$$ >= $headerTop$$ && $scrollTop$$15_top$$10$$ < $headerTop$$ + $headerHeight$$ && ($offset$$23$$ = ($headerTop$$ + $headerHeight$$ - 
    $scrollTop$$15_top$$10$$) / 2));
    $scrollTop$$15_top$$10$$ >= $containerScrollTop$$ && $scrollTop$$15_top$$10$$ + $height$$43$$ <= $containerScrollTop$$ + $containerHeight$$ ? 0 < $offset$$23$$ && ($container$$22_elem$$81$$.scrollTop = $containerScrollTop$$ - $offset$$23$$) : ($scrollTop$$15_top$$10$$ = Math.max(0, Math.min($scrollTop$$15_top$$10$$ - $offset$$23$$, Math.abs($scrollTop$$15_top$$10$$ + $height$$43$$ - $containerHeight$$))), $scrollTop$$15_top$$10$$ > $containerScrollTop$$ && ($scrollTop$$15_top$$10$$ += this.$_getListContainerBorderWidth$()), 
    $container$$22_elem$$81$$.scrollTop = $scrollTop$$15_top$$10$$);
  }, $GetKey$:function($elem$$82$$) {
    return this.$m_contentHandler$.$GetKey$($elem$$82$$);
  }, $FindElementByKey$:function($key$$112$$) {
    var $id$$36$$;
    return null != this.$m_keyElemMap$ && ($id$$36$$ = this.$m_keyElemMap$[$key$$112$$], null != $id$$36$$) ? document.getElementById($id$$36$$) : this.$m_contentHandler$.$FindElementByKey$($key$$112$$);
  }, $IsArrowKey$:function($keyCode$$11$$) {
    return $keyCode$$11$$ == this.$UP_KEY$ || $keyCode$$11$$ == this.$DOWN_KEY$;
  }, $_getItemsCache$:function() {
    var $disclosureStyleClass$$, $selector$$26$$, $isGroup$$1$$;
    null == this.$m_items$ && ($disclosureStyleClass$$ = this.$getGroupCollapseStyleClass$(), $selector$$26$$ = "." + this.$getItemElementStyleClass$() + ":visible", this.$m_items$ = this.element.find($selector$$26$$).filter(function() {
      return($isGroup$$1$$ = $$$$18$$(this).parent().hasClass($disclosureStyleClass$$)) ? !$$$$18$$(this).parent().parent().hasClass("oj-collapsed") : !0;
    }));
    return this.$m_items$;
  }, $HandleArrowKeys$:function($keyCode$$12_next$$3$$, $isExtend$$3$$, $event$$422$$) {
    var $current$$11_currentIndex$$1$$, $processed$$2$$, $items$$3$$;
    if (!this.$m_contentHandler$.$IsReady$()) {
      return!0;
    }
    $current$$11_currentIndex$$1$$ = !$isExtend$$3$$ || this.$m_isNavigate$ ? this.$m_active$.elem : this.$m_selectionFrontier$;
    $processed$$2$$ = !1;
    $items$$3$$ = this.$_getItemsCache$();
    $current$$11_currentIndex$$1$$ = $items$$3$$.index($current$$11_currentIndex$$1$$);
    switch($keyCode$$12_next$$3$$) {
      case this.$UP_KEY$:
        $current$$11_currentIndex$$1$$--;
        if (0 <= $current$$11_currentIndex$$1$$) {
          for ($keyCode$$12_next$$3$$ = $$$$18$$($items$$3$$[$current$$11_currentIndex$$1$$]);this.$SkipFocus$($keyCode$$12_next$$3$$);) {
            $current$$11_currentIndex$$1$$--;
            if (0 > $current$$11_currentIndex$$1$$) {
              return!1;
            }
            $keyCode$$12_next$$3$$ = $$$$18$$($items$$3$$[$current$$11_currentIndex$$1$$]);
          }
          $isExtend$$3$$ ? (this.$_extendSelection$($keyCode$$12_next$$3$$, $event$$422$$), this.$m_isNavigate$ = !1) : (this.$_activeAndFocus$($keyCode$$12_next$$3$$, $event$$422$$), this.$m_isNavigate$ = !0);
        }
        $processed$$2$$ = !0;
        break;
      case this.$DOWN_KEY$:
        $current$$11_currentIndex$$1$$++;
        if ($current$$11_currentIndex$$1$$ < $items$$3$$.length) {
          for ($keyCode$$12_next$$3$$ = $$$$18$$($items$$3$$[$current$$11_currentIndex$$1$$]);this.$SkipFocus$($keyCode$$12_next$$3$$);) {
            $current$$11_currentIndex$$1$$++;
            if ($current$$11_currentIndex$$1$$ == $items$$3$$.length) {
              return!1;
            }
            $keyCode$$12_next$$3$$ = $$$$18$$($items$$3$$[$current$$11_currentIndex$$1$$]);
          }
          $isExtend$$3$$ ? (this.$_extendSelection$($keyCode$$12_next$$3$$, $event$$422$$), this.$m_isNavigate$ = !1) : (this.$_activeAndFocus$($keyCode$$12_next$$3$$, $event$$422$$), this.$m_isNavigate$ = !0);
        }
        $processed$$2$$ = !0;
    }
    return $processed$$2$$;
  }, $_isActionableMode$:function() {
    return "actionable" == this.$m_keyMode$;
  }, $_setActionableMode$:function($flag$$7$$) {
    this.$m_keyMode$ = $flag$$7$$ ? "actionable" : "navigation";
    $flag$$7$$ || this.element[0].focus();
  }, $GetFocusMode$:function() {
    return this.$FOCUS_MODE_ITEM$;
  }, $getFocusItem$:function($item$$51$$) {
    return $item$$51$$.hasClass(this.$getFocusedElementStyleClass$()) ? $item$$51$$ : $$$$18$$($item$$51$$.find("." + this.$getFocusedElementStyleClass$()).first());
  }, $_setTabIndex$:function($item$$52$$) {
    this.$getFocusItem$($item$$52$$).attr("tabIndex", 0);
  }, $_resetTabIndex$:function($item$$53$$) {
    var $removeAttr$$1$$;
    $removeAttr$$1$$ = !0;
    "presentation" === $item$$53$$.attr("role") && ($removeAttr$$1$$ = !1);
    $item$$53$$ = this.$getFocusItem$($item$$53$$);
    $removeAttr$$1$$ ? $item$$53$$.removeAttr("tabIndex") : $item$$53$$.attr("tabIndex", -1);
  }, $_focusItem$:function($previousItem$$1$$, $item$$54$$) {
    this.$FOCUS_MODE_ITEM$ === this.$FOCUS_MODE_ITEM$ ? (null != $previousItem$$1$$ && this.$_resetTabIndex$($previousItem$$1$$), this.$_setTabIndex$($item$$54$$), this.element.attr("tabIndex") && this.element.removeAttr("tabIndex")) : this.$UpdateActiveDescendant$($item$$54$$);
  }, $getSingleFocusableElement$:function($item$$55$$) {
    var $childElements$$1$$;
    $childElements$$1$$ = $item$$55$$.children("a, input, select, textarea, button");
    return 1 === $childElements$$1$$.length && 0 === $childElements$$1$$.first().find("a, input, select, textarea, button").length ? $childElements$$1$$.first() : $item$$55$$;
  }, $_setActive$:function($item$$56$$, $event$$423$$) {
    var $elem$$83_key$$113$$, $ui$$10$$, $active$$4_cancelled$$1$$;
    null != $item$$56$$ ? ($elem$$83_key$$113$$ = $item$$56$$[0], $elem$$83_key$$113$$ = this.$GetKey$($elem$$83_key$$113$$), null == this.$m_active$ || $elem$$83_key$$113$$ != this.$m_active$.key ? ($ui$$10$$ = {key:$elem$$83_key$$113$$, item:$item$$56$$}, null != this.$m_active$ && ($ui$$10$$.previousKey = this.$m_active$.key, $ui$$10$$.previousItem = this.$m_active$.elem, null != this.$m_dndContext$ && this.$_isTouchSupport$() && this.$m_dndContext$.$_unsetDraggable$($ui$$10$$.previousItem)), 
    $active$$4_cancelled$$1$$ = !this.$Trigger$("beforeCurrentItem", $event$$423$$, $ui$$10$$), $active$$4_cancelled$$1$$ || (this.$m_active$ = $active$$4_cancelled$$1$$ = {key:$elem$$83_key$$113$$, elem:$item$$56$$}, null != this.$m_dndContext$ && this.$_isTouchSupport$() && this.$m_dndContext$.$_setDraggable$($item$$56$$), this.$_focusItem$($ui$$10$$.previousItem, $item$$56$$), this.$SetOption$("currentItem", $elem$$83_key$$113$$, {_context:{originalEvent:$event$$423$$, $internalSet$:!0, $extraData$:{item:$item$$56$$}}, 
    changed:!0}))) : $elem$$83_key$$113$$ == this.$m_active$.key && (this.$m_active$ = $active$$4_cancelled$$1$$ = {key:$elem$$83_key$$113$$, elem:$item$$56$$}, this.$_focusItem$(null, $item$$56$$))) : this.$m_active$ = null;
  }, $HighlightActive$:function($force$$1$$) {
    var $item$$57$$, $target$$120$$;
    null != this.$m_active$ && this.$_getListContainer$().hasClass("oj-focus-ancestor") && ($force$$1$$ = $force$$1$$ || !1, $item$$57$$ = this.$m_active$.elem, this.$_highlightElem$($item$$57$$, "oj-focus"), this.$FOCUS_MODE_ITEM$ === this.$FOCUS_MODE_ITEM$ && ($item$$57$$ = this.$getFocusItem$($item$$57$$), $target$$120$$ = document.activeElement, !$force$$1$$ && $item$$57$$.get(0).contains($target$$120$$) || $item$$57$$.get(0).focus()));
  }, $UnhighlightActive$:function() {
    null != this.$m_active$ && this.$_unhighlightElem$(this.$m_active$.elem, "oj-focus");
  }, $HandleClickActive$:function($item$$58$$, $event$$424$$) {
    this.$_activeAndFocus$($item$$58$$, $event$$424$$);
  }, $_activeAndFocus$:function($item$$59$$, $event$$425$$) {
    this.$_scrollToVisible$($item$$59$$[0]);
    this.$UnhighlightActive$();
    this.$_setActive$($item$$59$$, $event$$425$$);
    this.$HighlightActive$();
  }, $_isSelectionEnabled$:function() {
    return "none" != this.$GetOption$("selectionMode");
  }, $_isMultipleSelection$:function() {
    return "multiple" == this.$GetOption$("selectionMode");
  }, $IsSelectable$:function($item$$60$$) {
    $item$$60$$ = this.$getFocusItem$($$$$18$$($item$$60$$)).get(0);
    return $item$$60$$.hasAttribute("aria-selected");
  }, $_filterSelection$:function($selection$$19$$) {
    var $filtered$$3$$, $i$$340$$, $elem$$84$$;
    $filtered$$3$$ = [];
    for ($i$$340$$ = 0;$i$$340$$ < $selection$$19$$.length && ($elem$$84$$ = this.$FindElementByKey$($selection$$19$$[$i$$340$$]), null == $elem$$84$$ || !this.$IsSelectable$($elem$$84$$) || ($filtered$$3$$.push($selection$$19$$[$i$$340$$]), this.$_isMultipleSelection$()));$i$$340$$++) {
    }
    return $filtered$$3$$;
  }, $_unhighlightSelection$:function() {
    var $self$$145$$, $elem$$85$$;
    null != this.$m_keyElemMap$ && ($self$$145$$ = this, $$$$18$$.each(this.$GetOption$("selection"), function($index$$182$$, $value$$267$$) {
      $elem$$85$$ = $self$$145$$.$FindElementByKey$($value$$267$$);
      null != $elem$$85$$ && $self$$145$$.$_unhighlightElem$($elem$$85$$, "oj-selected");
    }));
  }, $_highlightElem$:function($elem$$86$$, $style$$4$$) {
    this.$HighlightUnhighlightElem$($elem$$86$$, $style$$4$$, !0);
  }, $_unhighlightElem$:function($elem$$87$$, $style$$5$$) {
    this.$HighlightUnhighlightElem$($elem$$87$$, $style$$5$$, !1);
  }, $HighlightUnhighlightElem$:function($elem$$88$$, $style$$6$$, $highlight$$) {
    var $group$$3$$;
    $elem$$88$$ = $$$$18$$($elem$$88$$);
    "oj-selected" == $style$$6$$ && this.$getFocusItem$($elem$$88$$).attr("aria-selected", $highlight$$ ? "true" : "false");
    $group$$3$$ = $elem$$88$$.children("." + this.$getGroupItemStyleClass$());
    0 < $group$$3$$.length && ($elem$$88$$ = $$$$18$$($group$$3$$[0]));
    "oj-focus" === $style$$6$$ ? $highlight$$ ? this.$_focusInHandler$($elem$$88$$) : this.$_focusOutHandler$($elem$$88$$) : $highlight$$ ? $elem$$88$$.addClass($style$$6$$) : $elem$$88$$.removeClass($style$$6$$);
  }, $HandleClickSelection$:function($item$$61$$, $event$$426$$) {
    var $ctrlKey$$4$$, $shiftKey$$4$$;
    this.$_scrollToVisible$($item$$61$$[0]);
    $ctrlKey$$4$$ = this.$_ctrlEquivalent$($event$$426$$);
    $shiftKey$$4$$ = $event$$426$$.shiftKey;
    this.$_isMultipleSelection$() ? $ctrlKey$$4$$ || $shiftKey$$4$$ ? !$ctrlKey$$4$$ && $shiftKey$$4$$ ? this.$_extendSelection$($item$$61$$, $event$$426$$) : this.$_augmentSelectionAndFocus$($item$$61$$, $event$$426$$) : this.$SelectAndFocus$($item$$61$$, $event$$426$$) : this.$SelectAndFocus$($item$$61$$, $event$$426$$);
  }, $_handleTouchSelection$:function($item$$62$$, $event$$427$$) {
    this.$_isMultipleSelection$() ? this.$_augmentSelectionAndFocus$($item$$62$$, $event$$427$$) : this.$SelectAndFocus$($item$$62$$, $event$$427$$);
  }, $_clearSelection$:function($updateOption$$) {
    this.$_unhighlightSelection$();
    $updateOption$$ && this.$SetOption$("selection", [], {_context:{originalEvent:null, $internalSet$:!0, $extraData$:{items:$$$$18$$()}}, changed:!0});
    this.$m_selectionFrontier$ = null;
  }, $SelectAndFocus$:function($item$$63$$, $event$$428$$) {
    this.$_clearSelection$(!1);
    this.$_augmentSelectionAndFocus$($item$$63$$, $event$$428$$, []);
  }, $_extendSelection$:function($item$$64$$, $event$$429$$) {
    var $current$$12$$;
    null != this.$m_active$ && ($current$$12$$ = this.$m_selectionFrontier$, $current$$12$$ != $item$$64$$ && (this.$_unhighlightElem$($item$$64$$, "oj-focus"), this.$_extendSelectionRange$(this.$m_active$.elem, $item$$64$$, $event$$429$$)));
  }, $_extendSelectionRange$:function($from$$1$$, $to$$1$$, $event$$430$$) {
    this.$_clearSelection$(!1);
    this.$m_selectionFrontier$ = $to$$1$$;
    this.$_highlightRange$($from$$1$$, $to$$1$$, $event$$430$$);
    this.$HighlightActive$();
  }, $_highlightRange$:function($start$$51_startIndex$$37_to$$2$$, $end$$15_from$$2_i$$341$$, $event$$431$$) {
    var $selection$$20$$, $selectedItems$$3$$, $items$$4$$, $endIndex$$15_item$$65$$, $key$$114$$;
    $selection$$20$$ = [];
    $selectedItems$$3$$ = [];
    $items$$4$$ = this.$_getItemsCache$();
    $start$$51_startIndex$$37_to$$2$$ = $items$$4$$.index($start$$51_startIndex$$37_to$$2$$);
    $endIndex$$15_item$$65$$ = $items$$4$$.index($end$$15_from$$2_i$$341$$);
    $start$$51_startIndex$$37_to$$2$$ > $endIndex$$15_item$$65$$ ? $end$$15_from$$2_i$$341$$ = $endIndex$$15_item$$65$$ : ($end$$15_from$$2_i$$341$$ = $start$$51_startIndex$$37_to$$2$$, $start$$51_startIndex$$37_to$$2$$ = $endIndex$$15_item$$65$$);
    for (;$end$$15_from$$2_i$$341$$ <= $start$$51_startIndex$$37_to$$2$$;$end$$15_from$$2_i$$341$$++) {
      $endIndex$$15_item$$65$$ = $items$$4$$[$end$$15_from$$2_i$$341$$], this.$IsSelectable$($endIndex$$15_item$$65$$) && ($key$$114$$ = this.$m_contentHandler$.$GetKey$($endIndex$$15_item$$65$$), this.$_applySelection$($endIndex$$15_item$$65$$, $key$$114$$), $selection$$20$$.push($key$$114$$), $selectedItems$$3$$.push($endIndex$$15_item$$65$$));
    }
    this.$SetOption$("selection", $selection$$20$$, {_context:{originalEvent:$event$$431$$, $internalSet$:!0, $extraData$:{items:$$$$18$$($selectedItems$$3$$)}}, changed:!0});
  }, $_applySelection$:function($element$$182$$, $key$$115$$) {
    null == this.$m_keyElemMap$ && (this.$m_keyElemMap$ = {});
    this.$m_keyElemMap$[$key$$115$$] = $$$$18$$($element$$182$$).attr("id");
    this.$_highlightElem$($element$$182$$, "oj-selected");
  }, $_augmentSelectionAndFocus$:function($item$$66_selectedItems$$4$$, $event$$432$$, $selection$$21$$) {
    var $i$$342_key$$116$$, $index$$183$$;
    $i$$342_key$$116$$ = this.$GetKey$($item$$66_selectedItems$$4$$[0]);
    void 0 == $selection$$21$$ && ($selection$$21$$ = this.$GetOption$("selection").slice(0));
    this.$UnhighlightActive$();
    this.$_setActive$($item$$66_selectedItems$$4$$, $event$$432$$);
    this.$HighlightActive$();
    if (null == this.$m_active$ || this.$m_active$.elem.get(0) != $item$$66_selectedItems$$4$$.get(0)) {
      null != $selection$$21$$ && 0 == $selection$$21$$.length && this.$SetOption$("selection", $selection$$21$$, {_context:{originalEvent:$event$$432$$, $internalSet$:!0, $extraData$:{items:$$$$18$$([])}}, changed:!0});
    } else {
      $index$$183$$ = $selection$$21$$.indexOf($i$$342_key$$116$$);
      -1 < $index$$183$$ ? (this.$_unhighlightElem$($item$$66_selectedItems$$4$$, "oj-selected"), $selection$$21$$.splice($index$$183$$, 1)) : (this.$m_selectionFrontier$ = $item$$66_selectedItems$$4$$, this.$_applySelection$($item$$66_selectedItems$$4$$, $i$$342_key$$116$$), $selection$$21$$.push($i$$342_key$$116$$));
      $item$$66_selectedItems$$4$$ = Array($selection$$21$$.length);
      for ($i$$342_key$$116$$ = 0;$i$$342_key$$116$$ < $selection$$21$$.length;$i$$342_key$$116$$++) {
        $item$$66_selectedItems$$4$$[$i$$342_key$$116$$] = this.$FindElementByKey$($selection$$21$$[$i$$342_key$$116$$]);
      }
      this.$SetOption$("selection", $selection$$21$$, {_context:{originalEvent:$event$$432$$, $internalSet$:!0, $extraData$:{items:$$$$18$$($item$$66_selectedItems$$4$$)}}, changed:!0});
    }
  }, $ToggleSelection$:function($event$$433$$, $keepCurrentSelection_selectedItems$$5$$, $i$$343_skipIfNotSelected$$) {
    var $selection$$22$$, $item$$67$$, $key$$117$$, $index$$184$$;
    $selection$$22$$ = this.$GetOption$("selection").slice(0);
    $item$$67$$ = this.$m_active$.elem;
    $key$$117$$ = this.$m_active$.key;
    $index$$184$$ = $selection$$22$$.indexOf($key$$117$$);
    if (-1 < $index$$184$$) {
      if ($i$$343_skipIfNotSelected$$) {
        return;
      }
      this.$_unhighlightElem$($item$$67$$, "oj-selected");
      $selection$$22$$.splice($index$$184$$, 1);
      0 == $selection$$22$$.length && (this.$m_selectionFrontier$ = null);
    } else {
      this.$IsSelectable$($item$$67$$[0]) && ($keepCurrentSelection_selectedItems$$5$$ || (this.$_clearSelection$(!1), $selection$$22$$.length = 0), this.$m_selectionFrontier$ = $item$$67$$, this.$_applySelection$($item$$67$$, $key$$117$$), $selection$$22$$.push($key$$117$$));
    }
    $keepCurrentSelection_selectedItems$$5$$ = Array($selection$$22$$.length);
    for ($i$$343_skipIfNotSelected$$ = 0;$i$$343_skipIfNotSelected$$ < $selection$$22$$.length;$i$$343_skipIfNotSelected$$++) {
      $keepCurrentSelection_selectedItems$$5$$[$i$$343_skipIfNotSelected$$] = this.$FindElementByKey$($selection$$22$$[$i$$343_skipIfNotSelected$$]);
    }
    this.$SetOption$("selection", $selection$$22$$, {_context:{originalEvent:$event$$433$$, $internalSet$:!0, $extraData$:{items:$$$$18$$($keepCurrentSelection_selectedItems$$5$$)}}, changed:!0});
  }, $HandleSelectionOrActiveKeyDown$:function($event$$434$$) {
    var $first$$6_keyCode$$13$$, $ctrlKey$$5_current$$13_last$$, $shiftKey$$5$$, $processed$$3$$ = !1;
    if (null == this.$m_active$) {
      return!1;
    }
    $first$$6_keyCode$$13$$ = $event$$434$$.keyCode;
    $ctrlKey$$5_current$$13_last$$ = this.$m_active$.elem;
    this.$_isActionableMode$() ? $first$$6_keyCode$$13$$ == this.$ESC_KEY$ ? (this.$_setActionableMode$(!1), this.$_disableAllTabbableElements$($ctrlKey$$5_current$$13_last$$), this.$HighlightActive$(!0), $processed$$3$$ = !0) : $first$$6_keyCode$$13$$ === this.$TAB_KEY$ && ($first$$6_keyCode$$13$$ = $ctrlKey$$5_current$$13_last$$.find("[data-first]"), $ctrlKey$$5_current$$13_last$$ = $ctrlKey$$5_current$$13_last$$.find("[data-last]"), $event$$434$$.shiftKey ? 0 < $first$$6_keyCode$$13$$.length && 
    0 < $ctrlKey$$5_current$$13_last$$.length && $first$$6_keyCode$$13$$ != $ctrlKey$$5_current$$13_last$$ && $event$$434$$.target == $first$$6_keyCode$$13$$[0] && ($ctrlKey$$5_current$$13_last$$[0].focus(), $processed$$3$$ = !0) : 0 < $first$$6_keyCode$$13$$.length && 0 < $ctrlKey$$5_current$$13_last$$.length && $first$$6_keyCode$$13$$ != $ctrlKey$$5_current$$13_last$$ && $event$$434$$.target == $ctrlKey$$5_current$$13_last$$[0] && ($first$$6_keyCode$$13$$[0].focus(), $processed$$3$$ = !0)) : $first$$6_keyCode$$13$$ == 
    this.$F2_KEY$ ? (this.$_enableAllTabbableElements$($ctrlKey$$5_current$$13_last$$), $first$$6_keyCode$$13$$ = $ctrlKey$$5_current$$13_last$$.find("[data-first]"), 0 < $first$$6_keyCode$$13$$.length && ($first$$6_keyCode$$13$$[0].focus(), this.$_setActionableMode$(!0))) : $first$$6_keyCode$$13$$ == this.$SPACE_KEY$ && this.$_isSelectionEnabled$() ? ($ctrlKey$$5_current$$13_last$$ = this.$_ctrlEquivalent$($event$$434$$), ($shiftKey$$5$$ = $event$$434$$.shiftKey) && !$ctrlKey$$5_current$$13_last$$ && 
    null != this.$m_selectionFrontier$ && this.$_isMultipleSelection$() ? this.$_extendSelectionRange$(this.$m_selectionFrontier$, this.$m_active$.elem, $event$$434$$) : this.$ToggleSelection$($event$$434$$, $ctrlKey$$5_current$$13_last$$ && !$shiftKey$$5$$ && this.$_isMultipleSelection$(), !1), $processed$$3$$ = !0) : $first$$6_keyCode$$13$$ == this.$ENTER_KEY$ && this.$_isSelectionEnabled$() ? this.$ToggleSelection$($event$$434$$, !1, !0) : this.$IsArrowKey$($first$$6_keyCode$$13$$) && ($ctrlKey$$5_current$$13_last$$ = 
    this.$_ctrlEquivalent$($event$$434$$), $shiftKey$$5$$ = $event$$434$$.shiftKey, $ctrlKey$$5_current$$13_last$$ || ($processed$$3$$ = this.$HandleArrowKeys$($first$$6_keyCode$$13$$, $shiftKey$$5$$ && this.$_isSelectionEnabled$() && this.$_isMultipleSelection$(), $event$$434$$)));
    return $processed$$3$$;
  }, $getAnimationEffect$:function($action$$6$$) {
    var $defaultOptions$$1$$;
    null == this.$defaultAnimations$ && ($defaultOptions$$1$$ = $oj$$19$$.$ThemeUtils$.$parseJSONFromFontFamily$("oj-listview-option-defaults"), this.$defaultAnimations$ = $defaultOptions$$1$$.animation);
    return this.$defaultAnimations$[$action$$6$$];
  }, $isExpandable$:function() {
    return "none" != this.$GetOption$("drillMode");
  }, $_isExpandAll$:function() {
    var $expanded$$4$$ = this.$GetOption$("expanded");
    if ("auto" === $expanded$$4$$) {
      if (!this.$isExpandable$()) {
        return!0;
      }
    } else {
      if ("all" === $expanded$$4$$) {
        return!0;
      }
    }
    return!1;
  }, $expandKey$:function($key$$118$$, $beforeVetoable$$, $fireBefore$$, $fireAfter$$) {
    var $item$$68$$ = this.$FindElementByKey$($key$$118$$);
    null != $item$$68$$ && this.$ExpandItem$($$$$18$$($item$$68$$), null, !1, $key$$118$$, $beforeVetoable$$, $fireAfter$$, $fireBefore$$);
  }, $_expand$:function($event$$435$$) {
    var $item$$69$$ = this.$FindItem$($event$$435$$.target);
    null != $item$$69$$ && 0 < $item$$69$$.length && this.$ExpandItem$($item$$69$$, $event$$435$$, !0, null, !0, !0, !0);
  }, $ExpandItem$:function($item$$70$$, $event$$436$$, $animate$$1$$, $cancelled$$2_key$$119$$, $beforeVetoable$$1$$, $fireEvent$$1$$, $fireBeforeEvent$$) {
    var $ui$$12$$;
    if (this.$GetState$($item$$70$$) == this.$STATE_COLLAPSED$) {
      null == $cancelled$$2_key$$119$$ && ($cancelled$$2_key$$119$$ = this.$GetKey$($item$$70$$[0]));
      $ui$$12$$ = {item:$item$$70$$, key:$cancelled$$2_key$$119$$};
      if ($fireBeforeEvent$$ && ($cancelled$$2_key$$119$$ = !this.$Trigger$("beforeExpand", $event$$436$$, $ui$$12$$)) && $beforeVetoable$$1$$) {
        return;
      }
      this.$signalTaskStart$();
      this.$m_contentHandler$.$Expand$($item$$70$$, function($groupItem$$4$$) {
        this.$_expandSuccess$($groupItem$$4$$, $animate$$1$$, $event$$436$$, $ui$$12$$, $fireEvent$$1$$);
      }.bind(this));
      this.$m_items$ = null;
      null != $event$$436$$ && $event$$436$$.stopPropagation();
      this.$signalTaskEnd$();
    }
  }, $_expandSuccess$:function($groupItem$$5_item$$71$$, $animate$$2_animationPromise$$, $event$$437$$, $ui$$13$$, $fireEvent$$2$$) {
    var $collapseClass$$2$$, $expandClass$$, $self$$146$$ = this;
    this.$signalTaskStart$();
    $animate$$2_animationPromise$$ = this.$AnimateExpand$($$$$18$$($groupItem$$5_item$$71$$), $animate$$2_animationPromise$$, $event$$437$$);
    $groupItem$$5_item$$71$$ = $groupItem$$5_item$$71$$.parentNode;
    $groupItem$$5_item$$71$$ = $$$$18$$($groupItem$$5_item$$71$$);
    this.$SetState$($groupItem$$5_item$$71$$, this.$STATE_EXPANDED$);
    $collapseClass$$2$$ = this.$getCollapseIconStyleClass$();
    $expandClass$$ = this.$getExpandIconStyleClass$();
    $groupItem$$5_item$$71$$.children("." + this.$getGroupItemStyleClass$()).find("." + $collapseClass$$2$$).removeClass($collapseClass$$2$$).addClass($expandClass$$);
    $fireEvent$$2$$ && $animate$$2_animationPromise$$.then(function() {
      $self$$146$$.$Trigger$("expand", $event$$437$$, $ui$$13$$);
    });
    this.$signalTaskEnd$();
  }, $_adjustAncestorsMaxHeight$:function($groupItem$$6$$, $delta$$6$$) {
    var $maxHeight$$;
    $groupItem$$6$$.parentsUntil("ul.oj-component-initnode", "ul." + this.$getGroupStyleClass$()).each(function() {
      $maxHeight$$ = parseInt($$$$18$$(this).css("maxHeight"), 10);
      0 < $maxHeight$$ && $$$$18$$(this).css("maxHeight", $maxHeight$$ + $delta$$6$$ + "px");
    });
  }, $AnimateExpand$:function($groupItem$$7$$, $animate$$3$$) {
    var $totalHeight$$2$$ = 0, $animationPromise$$1$$, $animationResolve$$, $self$$147$$ = this, $effect$$4_promise$$6$$, $elem$$89$$;
    $animationPromise$$1$$ = new Promise(function($resolve$$35$$) {
      $animationResolve$$ = $resolve$$35$$;
    });
    $animate$$3$$ ? (this.$signalTaskStart$(), $groupItem$$7$$.children().each(function() {
      $totalHeight$$2$$ += $$$$18$$(this).outerHeight(!0);
    }), this.$_isTouchSupport$() && this.$_adjustAncestorsMaxHeight$($groupItem$$7$$, $totalHeight$$2$$), $groupItem$$7$$.css("maxHeight", $totalHeight$$2$$ + "px"), $effect$$4_promise$$6$$ = this.$getAnimationEffect$("expand"), this.$signalTaskStart$(), $elem$$89$$ = $groupItem$$7$$.get(0), $effect$$4_promise$$6$$ = $oj$$19$$.$AnimationUtils$.$startAnimation$($elem$$89$$, "expand", $effect$$4_promise$$6$$), $effect$$4_promise$$6$$.then(function() {
      $self$$147$$.$_handleExpandTransitionEnd$($groupItem$$7$$, $animationResolve$$);
    }), this.$signalTaskEnd$()) : (this.$_isTouchSupport$() ? ($groupItem$$7$$.children().each(function() {
      $totalHeight$$2$$ += $$$$18$$(this).outerHeight(!0);
    }), $groupItem$$7$$.css("maxHeight", $totalHeight$$2$$ + "px"), this.$_adjustAncestorsMaxHeight$($groupItem$$7$$, $totalHeight$$2$$)) : $groupItem$$7$$.css("maxHeight", ""), this.$AnimateExpandComplete$($groupItem$$7$$), $animationResolve$$(null));
    return $animationPromise$$1$$;
  }, $_handleExpandTransitionEnd$:function($groupItem$$8$$, $animationResolve$$1$$) {
    this.$_isTouchSupport$() || $groupItem$$8$$.css("maxHeight", "");
    this.$AnimateExpandComplete$($groupItem$$8$$);
    $animationResolve$$1$$(null);
    this.$signalTaskEnd$();
  }, $AnimateExpandComplete$:function($groupItem$$9$$) {
    $groupItem$$9$$.removeClass(this.$getGroupCollapseStyleClass$()).addClass(this.$getGroupExpandStyleClass$());
  }, $collapseKey$:function($key$$121$$, $fireBefore$$1$$, $fireAfter$$1$$) {
    var $item$$73$$ = this.$FindElementByKey$($key$$121$$);
    null != $item$$73$$ && this.$CollapseItem$($$$$18$$($item$$73$$), null, !1, $key$$121$$, $fireBefore$$1$$, $fireAfter$$1$$);
  }, $_collapse$:function($event$$439$$) {
    var $item$$74$$ = this.$FindItem$($event$$439$$.target);
    null != $item$$74$$ && 0 < $item$$74$$.length && this.$CollapseItem$($item$$74$$, $event$$439$$, !0, null, !0, !0);
  }, $CollapseItem$:function($item$$75$$, $event$$440$$, $animate$$4_collapseClass$$3$$, $animationPromise$$2_cancelled$$3_key$$122$$, $beforeVetoable$$2_expandClass$$1$$, $fireEvent$$3$$) {
    var $ui$$14$$, $self$$148$$ = this;
    this.$GetState$($item$$75$$) == this.$STATE_EXPANDED$ && (null == $animationPromise$$2_cancelled$$3_key$$122$$ && ($animationPromise$$2_cancelled$$3_key$$122$$ = this.$GetKey$($item$$75$$[0])), $ui$$14$$ = {item:$item$$75$$, key:$animationPromise$$2_cancelled$$3_key$$122$$}, $animationPromise$$2_cancelled$$3_key$$122$$ = !this.$Trigger$("beforeCollapse", $event$$440$$, $ui$$14$$), $animationPromise$$2_cancelled$$3_key$$122$$ && $beforeVetoable$$2_expandClass$$1$$ || (this.$signalTaskStart$(), 
    $animationPromise$$2_cancelled$$3_key$$122$$ = this.$AnimateCollapse$($item$$75$$, $animate$$4_collapseClass$$3$$, $event$$440$$), this.$SetState$($item$$75$$, this.$STATE_COLLAPSED$), $animate$$4_collapseClass$$3$$ = this.$getCollapseIconStyleClass$(), $beforeVetoable$$2_expandClass$$1$$ = this.$getExpandIconStyleClass$(), $item$$75$$.find("." + $beforeVetoable$$2_expandClass$$1$$).first().removeClass($beforeVetoable$$2_expandClass$$1$$).addClass($animate$$4_collapseClass$$3$$), this.$m_items$ = 
    null, null != $event$$440$$ && $event$$440$$.stopPropagation(), $fireEvent$$3$$ && $animationPromise$$2_cancelled$$3_key$$122$$.then(function() {
      $self$$148$$.$Trigger$("collapse", $event$$440$$, $ui$$14$$);
    }), this.$signalTaskEnd$()));
  }, $AnimateCollapse$:function($item$$76$$, $animate$$5$$) {
    var $totalHeight$$3$$ = 0, $groupItem$$10$$, $animationPromise$$3$$, $animationResolve$$2$$, $self$$149$$ = this, $effect$$5_promise$$7$$, $elem$$90$$;
    $animationPromise$$3$$ = new Promise(function($resolve$$36$$) {
      $animationResolve$$2$$ = $resolve$$36$$;
    });
    $groupItem$$10$$ = $item$$76$$.children("ul").first();
    $animate$$5$$ ? (this.$signalTaskStart$(), $groupItem$$10$$.children().each(function() {
      $totalHeight$$3$$ += $$$$18$$(this).outerHeight();
    }), $groupItem$$10$$.css("maxHeight", $totalHeight$$3$$ + "px"), $effect$$5_promise$$7$$ = this.$getAnimationEffect$("collapse"), $effect$$5_promise$$7$$.persist = !0, this.$signalTaskStart$(), $elem$$90$$ = $groupItem$$10$$.get(0), $effect$$5_promise$$7$$ = $oj$$19$$.$AnimationUtils$.$startAnimation$($elem$$90$$, "collapse", $effect$$5_promise$$7$$), $effect$$5_promise$$7$$.then(function() {
      $self$$149$$.$_handleCollapseTransitionEnd$($groupItem$$10$$, $animationResolve$$2$$);
    }), this.$signalTaskEnd$()) : ($groupItem$$10$$.css("maxHeight", "0px"), this.$AnimateCollapseComplete$($groupItem$$10$$), $animationResolve$$2$$(null));
    return $animationPromise$$3$$;
  }, $_handleCollapseTransitionEnd$:function($groupItem$$11$$, $animationResolve$$3$$) {
    this.$AnimateCollapseComplete$($groupItem$$11$$);
    $animationResolve$$3$$(null);
    this.$signalTaskEnd$();
  }, $AnimateCollapseComplete$:function($groupItem$$12$$) {
    $groupItem$$12$$.removeClass(this.$getGroupExpandStyleClass$()).addClass(this.$getGroupCollapseStyleClass$());
    null != this.$m_contentHandler$ && this.$m_contentHandler$.$Collapse$($groupItem$$12$$);
  }, $_collapseAll$:function() {
    var $self$$150$$;
    this.$signalTaskStart$();
    $self$$150$$ = this;
    this.$_getItemsCache$().each(function() {
      $self$$150$$.$CollapseItem$($$$$18$$(this), null, !1, null, !1, !1);
    });
    this.$signalTaskEnd$();
  }, getExpanded:function() {
    var $expanded$$7$$, $self$$151$$, $item$$78$$;
    $expanded$$7$$ = [];
    $self$$151$$ = this;
    this.$_getItemsCache$().each(function() {
      $item$$78$$ = $$$$18$$(this);
      $self$$151$$.$GetState$($item$$78$$) == $self$$151$$.$STATE_EXPANDED$ && $expanded$$7$$.push($self$$151$$.$GetKey$($item$$78$$[0]));
    });
    return $expanded$$7$$;
  }, $getWidgetConstructor$:function() {
    return $oj$$19$$.Components.$getWidgetConstructor$(this.element);
  }, $GetContainerStyleClass$:function() {
    return this.$_isTouchSupport$() ? "oj-listview oj-listview-container-touch" : "oj-listview oj-listview-container";
  }, $GetStyleClass$:function() {
    return "oj-listview-element";
  }, $getItemStyleClass$:function() {
    return "oj-listview-item";
  }, $getFocusedElementStyleClass$:function() {
    return "oj-listview-focused-element";
  }, $getItemElementStyleClass$:function() {
    return "oj-listview-item-element";
  }, $getGroupItemStyleClass$:function() {
    return "oj-listview-group-item";
  }, $getGroupStyleClass$:function() {
    return "oj-listview-group";
  }, $getGroupExpandStyleClass$:function() {
    return "oj-listview-collapsible-transition";
  }, $getGroupCollapseStyleClass$:function() {
    return this.$getGroupExpandStyleClass$();
  }, $getCollapseIconStyleClass$:function() {
    return "oj-listview-collapse-icon";
  }, $getExpandIconStyleClass$:function() {
    return "oj-listview-expand-icon";
  }, $getEmptyTextStyleClass$:function() {
    return "oj-listview-no-data-message";
  }, $getDepthStyleClass$:function() {
    return "";
  }, $getOptionDefaultsStyleClass$:function() {
    return "oj-listview-option-defaults";
  }, $_registerScrollHandler$:function() {
    var $self$$152$$ = this;
    this.$ojContext$._off(this.$_getListContainer$(), "scroll");
    this.$_isPinGroupHeader$() && this.$ojContext$._on(this.$_getListContainer$(), {scroll:function() {
      $self$$152$$.$_handlePinGroupHeader$();
    }});
  }, $_isPinGroupHeader$:function() {
    return "static" != this.$GetOption$("groupHeaderPosition");
  }, $_getGroupItemsCache$:function() {
    var $selector$$28$$;
    null == this.$m_groupItems$ && ($selector$$28$$ = "." + this.$getGroupItemStyleClass$() + ":visible", this.$m_groupItems$ = this.element.find($selector$$28$$).filter(function() {
      return!$$$$18$$(this).parent().hasClass("oj-collapsed") && 0 < $$$$18$$(this).next().children().length ? !0 : !1;
    }));
    return this.$m_groupItems$;
  }, $_unpinGroupItem$:function($groupItem$$13$$) {
    $groupItem$$13$$.style.position = "static";
    $groupItem$$13$$.style.top = "auto";
    $groupItem$$13$$.style.width = "auto";
  }, $_getNextGroupItem$:function($groupItem$$14_index$$187$$) {
    var $groupItems$$2$$;
    $groupItems$$2$$ = this.$_getGroupItemsCache$();
    $groupItem$$14_index$$187$$ = $groupItems$$2$$.index($groupItem$$14_index$$187$$);
    return-1 < $groupItem$$14_index$$187$$ && $groupItem$$14_index$$187$$ < $groupItems$$2$$.length - 1 ? $groupItems$$2$$[$groupItem$$14_index$$187$$ + 1] : null;
  }, $_pinGroupItem$:function($groupItem$$15$$, $scrollTop$$16$$) {
    var $width$$42$$, $height$$44$$, $next$$4$$;
    $width$$42$$ = $groupItem$$15$$.offsetWidth;
    $height$$44$$ = $groupItem$$15$$.offsetHeight;
    $next$$4$$ = this.$_getNextGroupItem$($groupItem$$15$$);
    null != $next$$4$$ && $next$$4$$.offsetTop <= $scrollTop$$16$$ + $height$$44$$ + 5 && ($scrollTop$$16$$ -= $height$$44$$);
    $groupItem$$15$$.style.position = "absolute";
    $groupItem$$15$$.style.top = $scrollTop$$16$$ + "px";
    $groupItem$$15$$.style.width = $width$$42$$ + "px";
  }, $_handlePinGroupHeader$:function() {
    var $scrollTop$$17$$, $groupItemToPin_next$$5$$, $groupItems$$3$$, $pinHeaderHeight$$, $i$$344$$, $groupItem$$16$$, $top$$11$$, $bottom$$3$$;
    $scrollTop$$17$$ = this.$_getListContainer$().get(0).scrollTop;
    if (null != this.$m_groupItemToPin$ && 0 == $scrollTop$$17$$) {
      this.$_unpinGroupItem$(this.$m_groupItemToPin$), this.$m_groupItemToPin$ = null;
    } else {
      $groupItems$$3$$ = this.$_getGroupItemsCache$();
      $pinHeaderHeight$$ = 0;
      null != this.$m_groupItemToPin$ && ($pinHeaderHeight$$ = this.$m_groupItemToPin$.offsetHeight);
      for ($i$$344$$ = 0;$i$$344$$ < $groupItems$$3$$.length;$i$$344$$++) {
        if ($groupItem$$16$$ = $groupItems$$3$$[$i$$344$$], this.$m_groupItemToPin$ != $groupItem$$16$$ && ($top$$11$$ = $groupItems$$3$$[$i$$344$$].offsetTop, $bottom$$3$$ = $top$$11$$ + $groupItem$$16$$.parentNode.offsetHeight, $top$$11$$ < $scrollTop$$17$$ && $bottom$$3$$ > $scrollTop$$17$$ + $pinHeaderHeight$$)) {
          $groupItemToPin_next$$5$$ = $groupItem$$16$$;
          break;
        }
      }
      null != $groupItemToPin_next$$5$$ && $groupItemToPin_next$$5$$ != this.$m_groupItemToPin$ ? (null != this.$m_groupItemToPin$ && this.$_unpinGroupItem$(this.$m_groupItemToPin$), this.$_pinGroupItem$($groupItemToPin_next$$5$$, $scrollTop$$17$$), this.$m_groupItemToPin$ = $groupItemToPin_next$$5$$) : null != this.$m_groupItemToPin$ && ($groupItemToPin_next$$5$$ = this.$_getNextGroupItem$(this.$m_groupItemToPin$), this.$m_groupItemToPin$.style.top = null != $groupItemToPin_next$$5$$ && $groupItemToPin_next$$5$$.offsetTop <= 
      $scrollTop$$17$$ + $pinHeaderHeight$$ ? $groupItemToPin_next$$5$$.offsetTop - $pinHeaderHeight$$ + "px" : $scrollTop$$17$$ + "px");
    }
  }, $_scrollToGroupHeader$:function($groupHeader$$) {
    var $container$$24$$, $currentScrollTop$$;
    $container$$24$$ = this.$_getListContainer$().get(0);
    $currentScrollTop$$ = $container$$24$$.scrollTop;
    null != this.$m_groupItemToPin$ && (this.$_unpinGroupItem$(this.$m_groupItemToPin$), this.$m_groupItemToPin$ = null);
    $container$$24$$.scrollTop = $groupHeader$$.offsetTop;
    this.$_isPinGroupHeader$() && $currentScrollTop$$ == $container$$24$$.scrollTop && this.$_handlePinGroupHeader$();
    this.$_setFirstFocusableItemInGroupCurrent$($groupHeader$$);
  }, $_setFirstFocusableItemInGroupCurrent$:function($groupHeader$$1$$) {
    var $self$$153$$ = this, $item$$79$$;
    $$$$18$$($groupHeader$$1$$).next().children().each(function() {
      $item$$79$$ = $$$$18$$(this);
      if (!$self$$153$$.$SkipFocus$($item$$79$$)) {
        return $self$$153$$.$SetOption$("currentItem", this.key), !1;
      }
    });
  }});
  $goog$exportPath_$$("_ojListView", $oj$$19$$.$_ojListView$, $oj$$19$$);
  $oj$$19$$.$__registerWidget$("oj.ojListView", $$$$18$$.oj.baseComponent, {widgetEventPrefix:"oj", options:{currentItem:null, data:null, dnd:{drag:null, drop:null, reorder:{items:"disabled"}}, drillMode:"collapsible", expanded:"auto", groupHeaderPosition:"sticky", item:{focusable:!0, renderer:null, selectable:!0}, scrollPolicy:"auto", scrollPolicyOptions:{fetchSize:25, maxCount:500}, selection:[], selectionMode:"none", animateStart:null, animateEnd:null, beforeCurrentItem:null, beforeExpand:null, 
  beforeCollapse:null, collapse:null, copy:null, cut:null, expand:null, optionChange:null, paste:null, ready:null, reorder:null}, _ComponentCreate:function() {
    this._super();
    this.$_setup$();
  }, $_setup$:function() {
    var $opts$$20$$ = {};
    $opts$$20$$.element = this.element;
    $opts$$20$$.$ojContext$ = this;
    $opts$$20$$ = $$$$18$$.extend(this.options, $opts$$20$$);
    this.$listview$ = new $oj$$19$$.$_ojListView$;
    this.$listview$.$init$($opts$$20$$);
  }, $_AfterCreate$:function() {
    this._super();
    this.$listview$.$afterCreate$();
  }, _destroy:function() {
    this.$listview$.destroy();
    this._super();
  }, $_NotifyContextMenuGesture$:function($menu$$7$$, $event$$443$$, $eventType$$37$$) {
    this.$listview$.$notifyContextMenuGesture$($menu$$7$$, $event$$443$$, $eventType$$37$$);
  }, _setOptions:function($options$$272$$, $flags$$28$$) {
    var $needRefresh$$ = this.$listview$.$setOptions$($options$$272$$, $flags$$28$$);
    this._super($options$$272$$, $flags$$28$$);
    $needRefresh$$ && (this.$listview$.refresh(), this.$_fireIndexerModelChangeEvent$());
  }, _setOption:function($key$$123$$, $value$$268$$) {
    var $valid$$8$$ = !0;
    "selectionMode" == $key$$123$$ ? $valid$$8$$ = "none" == $value$$268$$ || "single" == $value$$268$$ || "multiple" == $value$$268$$ : "drillMode" == $key$$123$$ ? $valid$$8$$ = "collapsible" == $value$$268$$ || "none" == $value$$268$$ : "scrollPolicy" == $key$$123$$ ? $valid$$8$$ = "auto" == $value$$268$$ || "loadMoreOnScroll" == $value$$268$$ : "groupHeaderPosition" == $key$$123$$ && ($valid$$8$$ = "static" == $value$$268$$ || "sticky" == $value$$268$$);
    if ($valid$$8$$) {
      this._super($key$$123$$, $value$$268$$);
    } else {
      throw "Invalid value: " + $value$$268$$ + " for key: " + $key$$123$$;
    }
  }, $_NotifyDetached$:function() {
    this.$listview$.$notifyDetached$();
  }, $_NotifyShown$:function() {
  }, widget:function() {
    return this.$listview$.$getRootElement$();
  }, refresh:function() {
    this._super();
    this.$listview$.refresh();
    this.$_fireIndexerModelChangeEvent$();
  }, whenReady:function() {
    return this.$listview$.whenReady();
  }, getNodeBySubId:function($locator$$27$$) {
    return this.$listview$.getNodeBySubId($locator$$27$$);
  }, getSubIdByNode:function($node$$74$$) {
    return this.$listview$.getSubIdByNode($node$$74$$);
  }, getContextByNode:function($node$$75$$) {
    return this.$listview$.getContextByNode($node$$75$$);
  }, getDataForVisibleItem:function($context$$109$$) {
    return this.$listview$.getDataForVisibleItem($context$$109$$);
  }, expand:function($key$$124$$, $vetoable$$) {
    this.$listview$.$expandKey$($key$$124$$, $vetoable$$, !0, !0);
  }, collapse:function($key$$125$$, $vetoable$$1$$) {
    this.$listview$.$collapseKey$($key$$125$$, $vetoable$$1$$, !0);
  }, getExpanded:function() {
    return this.$listview$.getExpanded();
  }, getIndexerModel:function() {
    null == this.$indexerModel$ && $oj$$19$$.$ListViewIndexerModel$ && (this.$indexerModel$ = new $oj$$19$$.$ListViewIndexerModel$(this.$listview$));
    return this.$indexerModel$;
  }, $_fireIndexerModelChangeEvent$:function() {
    null != this.$indexerModel$ && this.$indexerModel$.$fireChangeEvent$ && this.$indexerModel$.$fireChangeEvent$();
  }});
});
