/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojdnd"], function($oj$$70$$, $$$$63$$) {
  function $TreeUtils$$() {
  }
  $TreeUtils$$.$_OJ_EXPANDED$ = "oj-expanded";
  $TreeUtils$$.$_OJ_COLLAPSED$ = "oj-collapsed";
  $TreeUtils$$.$_OJ_HOVER$ = "oj-hover";
  $TreeUtils$$.$_OJ_SELECTED$ = "oj-selected";
  $TreeUtils$$.$_OJ_DISABLED$ = "oj-disabled";
  $TreeUtils$$.$_OJ_DEFAULT$ = "oj-default";
  $TreeUtils$$.$_OJ_TEMPNODE$ = "oj-treenode-temp";
  $oj$$70$$.$TreeDndContext$ = function $$oj$$70$$$$TreeDndContext$$($component$$26$$) {
    this.Init($component$$26$$);
  };
  $oj$$70$$.$Object$.$createSubclass$($oj$$70$$.$TreeDndContext$, $oj$$70$$.$Object$, "oj.TreeDndContext");
  $oj$$70$$.$TreeDndContext$.prototype.Init = function $$oj$$70$$$$TreeDndContext$$$Init$($component$$27$$) {
    $oj$$70$$.$TreeDndContext$.$superclass$.Init.call(this);
    this.$component$ = $component$$27$$;
    this.options = $component$$27$$.options;
    this.$_reset$();
  };
  $oj$$70$$.$Object$.$exportPrototypeSymbol$("TreeDndContext.prototype.Init", {Init:$oj$$70$$.$TreeDndContext$.prototype.Init});
  $oj$$70$$.$TreeDndContext$.prototype.$isDragEnabled$ = function $$oj$$70$$$$TreeDndContext$$$$isDragEnabled$$() {
    var $dnd$$1$$ = this.$_dnd$;
    return $dnd$$1$$.reorder || $dnd$$1$$.$dragFromEnabled$;
  };
  $oj$$70$$.$TreeDndContext$.prototype.$isDropEnabled$ = function $$oj$$70$$$$TreeDndContext$$$$isDropEnabled$$() {
    var $dnd$$2$$ = this.$_dnd$;
    return $dnd$$2$$.reorder || $dnd$$2$$.$dropToEnabled$;
  };
  $oj$$70$$.$TreeDndContext$.prototype.$handleDnDOptionChange$ = function $$oj$$70$$$$TreeDndContext$$$$handleDnDOptionChange$$() {
    var $dnd$$3$$ = this.$_dnd$, $cons$$ = $oj$$70$$.$TreeDndContext$, $reorder$$ = $dnd$$3$$.reorder, $dragFromEnabled$$ = $dnd$$3$$.$dragFromEnabled$;
    this.$_dndCleanAll$();
    this.$initDnDOpts$();
    $dnd$$3$$ = this.$_dnd$;
    if ($reorder$$ != $dnd$$3$$.reorder || $dragFromEnabled$$ != $dnd$$3$$.$dragFromEnabled$) {
      $dnd$$3$$.reorder || $dnd$$3$$.$dragFromEnabled$ || this.$component$.$_$container_ul$.find("li").removeClass($cons$$.$_OJ_DRAGGABLE$).removeClass($cons$$.$_OJ_DRAG$).removeClass($cons$$.$_OJ_VALID_DROP$).removeAttr("draggable");
    }
    this.$initDnD$();
  };
  $oj$$70$$.$TreeDndContext$.prototype.$initDnDOpts$ = function $$oj$$70$$$$TreeDndContext$$$$initDnDOpts$$() {
    var $odnd$$ = this.options.dnd, $dnd$$4$$ = this.$_dnd$, $cons$$1$$ = $oj$$70$$.$TreeDndContext$, $bSetDisable_cb$$1$$ = !0, $n$$28_opts$$34$$;
    $dnd$$4$$.reorder = !1;
    "object" != typeof $odnd$$ ? this.options.dnd = {reorder:"disable"} : ($n$$28_opts$$34$$ = $odnd$$[$cons$$1$$.$_DND_REORDER$], "string" === typeof $n$$28_opts$$34$$ && ("enable" === $n$$28_opts$$34$$ ? ($dnd$$4$$.reorder = !0, $bSetDisable_cb$$1$$ = !1) : "disable" == $n$$28_opts$$34$$ && ($bSetDisable_cb$$1$$ = !1)), $bSetDisable_cb$$1$$ && (this.options.dnd.reorder = "disable"), $n$$28_opts$$34$$ = $odnd$$[$cons$$1$$.$_DND_DRAG$], "object" == typeof $n$$28_opts$$34$$ && ($n$$28_opts$$34$$ = 
    $n$$28_opts$$34$$[$cons$$1$$.$_DND_NODE$], "object" == typeof $n$$28_opts$$34$$ && ($bSetDisable_cb$$1$$ = $n$$28_opts$$34$$[$cons$$1$$.$_DND_DRAGSTART_CB$], "function" == typeof $bSetDisable_cb$$1$$ && ($dnd$$4$$.$dragStartCallback$ = $bSetDisable_cb$$1$$, $dnd$$4$$.$dragFromEnabled$ = !0), $bSetDisable_cb$$1$$ = $n$$28_opts$$34$$[$cons$$1$$.$_DND_DRAGDRAG_CB$], "function" == typeof $bSetDisable_cb$$1$$ && ($dnd$$4$$.$dragDragCallback$ = $bSetDisable_cb$$1$$, $dnd$$4$$.$dragFromEnabled$ = !0), 
    $bSetDisable_cb$$1$$ = $n$$28_opts$$34$$[$cons$$1$$.$_DND_DRAGEND_CB$], "function" == typeof $bSetDisable_cb$$1$$ && ($dnd$$4$$.$dragEndCallback$ = $bSetDisable_cb$$1$$, $dnd$$4$$.$dragFromEnabled$ = !0), $bSetDisable_cb$$1$$ = $n$$28_opts$$34$$[$cons$$1$$.$_DND_DATATYPES$], $$$$63$$.isArray($bSetDisable_cb$$1$$) ? ($dnd$$4$$.$dragDataTypes$ = $bSetDisable_cb$$1$$.slice(), $dnd$$4$$.$dragFromEnabled$ = !0) : "string" == typeof $bSetDisable_cb$$1$$ && ($dnd$$4$$.$dragDataTypes$ = [$bSetDisable_cb$$1$$], 
    $dnd$$4$$.$dragFromEnabled$ = !0))), $n$$28_opts$$34$$ = $odnd$$[$cons$$1$$.$_DND_DROP$], "object" == typeof $n$$28_opts$$34$$ && ($n$$28_opts$$34$$ = $n$$28_opts$$34$$[$cons$$1$$.$_DND_NODE$], "object" == typeof $n$$28_opts$$34$$ && ($bSetDisable_cb$$1$$ = $n$$28_opts$$34$$[$cons$$1$$.$_DND_DROPDRAGENTER_CB$], "function" == typeof $bSetDisable_cb$$1$$ && ($dnd$$4$$.$dropDragEnterCallback$ = $bSetDisable_cb$$1$$, $dnd$$4$$.$dropToEnabled$ = !0), $bSetDisable_cb$$1$$ = $n$$28_opts$$34$$[$cons$$1$$.$_DND_DROPDRAGOVER_CB$], 
    "function" == typeof $bSetDisable_cb$$1$$ && ($dnd$$4$$.$dropDragOverCallback$ = $bSetDisable_cb$$1$$, $dnd$$4$$.$dropToEnabled$ = !0), $bSetDisable_cb$$1$$ = $n$$28_opts$$34$$[$cons$$1$$.$_DND_DROPDRAGLEAVE_CB$], "function" == typeof $bSetDisable_cb$$1$$ && ($dnd$$4$$.$dropDragLeaveCallback$ = $bSetDisable_cb$$1$$, $dnd$$4$$.$dropToEnabled$ = !0), $bSetDisable_cb$$1$$ = $n$$28_opts$$34$$[$cons$$1$$.$_DND_DROPDROP_CB$], "function" == typeof $bSetDisable_cb$$1$$ && ($dnd$$4$$.$dropDropCallback$ = 
    $bSetDisable_cb$$1$$, $dnd$$4$$.$dropToEnabled$ = !0), $bSetDisable_cb$$1$$ = $n$$28_opts$$34$$[$cons$$1$$.$_DND_DATATYPES$], $$$$63$$.isArray($bSetDisable_cb$$1$$) ? ($dnd$$4$$.$dropDataTypes$ = $bSetDisable_cb$$1$$.slice(), $dnd$$4$$.$dropToEnabled$ = !0) : "string" == typeof $bSetDisable_cb$$1$$ && ($dnd$$4$$.$dropDataTypes$ = [$bSetDisable_cb$$1$$], $dnd$$4$$.$dropToEnabled$ = !0))), $dnd$$4$$.reorder || ($dnd$$4$$.$dragDataTypes$ || $dnd$$4$$.$dragStartCallback$ || ($dnd$$4$$.$dragFromEnabled$ = 
    !1, $dnd$$4$$.$dragStartCallback$ = $dnd$$4$$.$dragDragCallback$ = $dnd$$4$$.$dragEndCallback$ = $dnd$$4$$.$dragDataTypes$ = null), $dnd$$4$$.$dropDropCallback$ || ($dnd$$4$$.$dropToEnabled$ = !1, $dnd$$4$$.$dropDragEnterCallback$ = $dnd$$4$$.$dropDragOverCallback$ = $dnd$$4$$.$dropDragLeaveCallback$ = $dnd$$4$$.$dropDropCallback$ = $dnd$$4$$.$dropDataTypes$ = null)), $dnd$$4$$.$pureReorder$ = $dnd$$4$$.reorder && !$dnd$$4$$.$dragFromEnabled$);
  };
  $oj$$70$$.$TreeDndContext$.prototype.$initDnD$ = function $$oj$$70$$$$TreeDndContext$$$$initDnD$$() {
    var $dnd$$5$$ = this.$_dnd$, $div$$10_vars$$ = $dnd$$5$$.$vars$, $cons$$2$$ = $oj$$70$$.$TreeDndContext$;
    if ($dnd$$5$$.$dragFromEnabled$ || $dnd$$5$$.$dropToEnabled$ || $dnd$$5$$.reorder) {
      $oj$$70$$.$TreeDndContext$.$_dragMarker$ ? ($div$$10_vars$$.$m$ = $oj$$70$$.$TreeDndContext$.$_dragMarker$, $div$$10_vars$$.$ml$ = $oj$$70$$.$TreeDndContext$.$_dragMarkerLine$) : ($div$$10_vars$$.$m$ = $$$$63$$("\x3cdiv class\x3d'oj-tree-drop-marker'\x3e\x3cspan class\x3d'oj-tree-drop-ptr oj-component-icon'\x3e\x26#160;\x3c/span\x3e\x3c/div\x3e").css("pointer-events", "none").hide().appendTo("body"), $div$$10_vars$$.$ml$ = $$$$63$$("\x3cdiv /\x3e").addClass($cons$$2$$.$_OJT_DROP_MARKER_LINE$).css("pointer-events", 
      "none").hide().appendTo("body"), $oj$$70$$.$TreeDndContext$.$_dragMarker$ = $div$$10_vars$$.$m$, $oj$$70$$.$TreeDndContext$.$_dragMarkerLine$ = $div$$10_vars$$.$ml$);
      $dnd$$5$$.$ml_width$ = $div$$10_vars$$.$ml$.width();
      var $div$$10_vars$$ = this.$component$.element[0], $$ul$$1$$ = $$$$63$$($div$$10_vars$$).children("ul:eq(0)");
      if ($dnd$$5$$.reorder || $dnd$$5$$.$dragFromEnabled$) {
        $dnd$$5$$.$fnDragStart$ = this.$_dragStart$.bind(this), $dnd$$5$$.$fnDragEnd$ = this.$_dragEnd$.bind(this), $$$$63$$($div$$10_vars$$).on("dragstart", $dnd$$5$$.$fnDragStart$), $$$$63$$($div$$10_vars$$).on("dragend", $dnd$$5$$.$fnDragEnd$), $$ul$$1$$.length && $$ul$$1$$.find("li").addClass($cons$$2$$.$_OJ_DRAGGABLE$).addClass($cons$$2$$.$_OJ_DRAG$).addClass($cons$$2$$.$_OJ_VALID_DROP$).attr("draggable", "true");
      }
      if ($dnd$$5$$.reorder || $dnd$$5$$.$dropToEnabled$) {
        $dnd$$5$$.$fnDrag$ = this.$_drag$.bind(this), $dnd$$5$$.$fnDragEnter$ = this.$_dragEnter$.bind(this), $dnd$$5$$.$fnDragOver$ = this.$_dragOver$.bind(this), $dnd$$5$$.$fnDragLeave$ = this.$_dragLeave$.bind(this), $dnd$$5$$.$fnDragDrop$ = this.$_dragDrop$.bind(this), $$$$63$$($div$$10_vars$$).on("drag", $dnd$$5$$.$fnDrag$), $$$$63$$($div$$10_vars$$).on("dragenter", $dnd$$5$$.$fnDragEnter$), $$$$63$$($div$$10_vars$$).on("dragover", $dnd$$5$$.$fnDragOver$), $$$$63$$($div$$10_vars$$).on("dragleave", 
        $dnd$$5$$.$fnDragLeave$), $$$$63$$($div$$10_vars$$).on("drop", $dnd$$5$$.$fnDragDrop$);
      }
    }
  };
  $oj$$70$$.$TreeDndContext$.prototype.$_closedown$ = function $$oj$$70$$$$TreeDndContext$$$$_closedown$$() {
    this.$_dndCleanAll$();
  };
  $oj$$70$$.$TreeDndContext$.prototype.$_dragStart$ = function $$oj$$70$$$$TreeDndContext$$$$_dragStart$$($e$$110$$) {
    var $dnd$$6$$, $$nodes_vars$$1$$, $$node$$ = $$$$63$$($e$$110$$.target).closest("li"), $dt$$ = $e$$110$$.originalEvent.dataTransfer, $ret$$65$$;
    $dnd$$6$$ = this.$_dnd$;
    $$nodes_vars$$1$$ = $dnd$$6$$.$vars$;
    $$nodes_vars$$1$$.$o$ = null;
    $$nodes_vars$$1$$.$r$ = null;
    $dnd$$6$$.$nodeLastEnter$ = null;
    $dnd$$6$$.$nodeLastLeft$ = null;
    $dnd$$6$$.$nodeDraggedId$ = null;
    $dnd$$6$$.$dragStarted$ = !1;
    if (!$dnd$$6$$.reorder && !$dnd$$6$$.$dragFromEnabled$ || $$node$$.hasClass($TreeUtils$$.$_OJ_DISABLED$) || this.$component$.$_data$.$core$.locked) {
      $e$$110$$.preventDefault();
    } else {
      $$nodes_vars$$1$$ = this.$component$.isSelected($$node$$) ? this.$component$.$_getNode$(null, !0) : $$nodes_vars$$1$$ = $$node$$;
      ($dnd$$6$$.$dragFromEnabled$ || $dnd$$6$$.$pureReorder$) && this.$_setDataTypes$($dt$$, $$nodes_vars$$1$$);
      if ($dnd$$6$$.$dragStartCallback$) {
        $ret$$65$$ = $dnd$$6$$.$dragStartCallback$($e$$110$$, {item:void 0});
        if ($e$$110$$.isDefaultPrevented() || "boolean" === typeof $ret$$65$$ && !$ret$$65$$) {
          return $ret$$65$$;
        }
        if (!$dnd$$6$$.$dragDataTypes$ && !this.$_checkAddedDataTypes$($dt$$) && !$dnd$$6$$.reorder) {
          return $e$$110$$.preventDefault(), !1;
        }
      }
      "uninitialized" === $dt$$.effectAllowed && ($dt$$.effectAllowed = $dnd$$6$$.$pureReorder$ ? "move" : $oj$$70$$.$DomUtils$.$isMetaKeyPressed$($e$$110$$) ? "copy" : "move");
      this.$_dndStartDrag$($$nodes_vars$$1$$, $$node$$, $e$$110$$);
    }
  };
  $oj$$70$$.$TreeDndContext$.prototype.$_drag$ = function $$oj$$70$$$$TreeDndContext$$$$_drag$$($e$$111$$) {
    var $dnd$$7$$ = this.$_dnd$;
    $dnd$$7$$.$dragDragCallback$ && $dnd$$7$$.$dragDragCallback$($e$$111$$);
  };
  $oj$$70$$.$TreeDndContext$.prototype.$_dragEnter$ = function $$oj$$70$$$$TreeDndContext$$$$_dragEnter$$($e$$112$$) {
    this.$component$.$_$container_ul$[0].firstChild || this.$_addInternalNode$();
    var $$targ$$1$$ = $$$$63$$($e$$112$$.target), $$node$$1$$ = this.$component$.$_getNode$($$targ$$1$$), $dnd$$8$$ = this.$_dnd$, $vars$$2$$ = $dnd$$8$$.$vars$, $bNode$$ = $$node$$1$$ && 0 < $$node$$1$$.length && $$node$$1$$.hasClass("oj-tree-node"), $dt$$1$$ = $e$$112$$.originalEvent.dataTransfer, $cons$$4$$ = $oj$$70$$.$TreeDndContext$, $bForeignTree$$ = !1, $bClean$$ = !1, $ret$$66$$;
    $bNode$$ && $$node$$1$$.hasClass($TreeUtils$$.$_OJ_TEMPNODE$) && ($dnd$$8$$.$bInternalNode$ = !0);
    if (!$bNode$$ || "UL" != $e$$112$$.target.tagName || "group" != $e$$112$$.target.getAttribute("role")) {
      if ($dnd$$8$$.$foreign$ = !$dnd$$8$$.$dragStarted$, !$dnd$$8$$.$foreign$ && !$dnd$$8$$.reorder || $dnd$$8$$.$foreign$ && this.$_isDtType$($dt$$1$$, $cons$$4$$.$_DND_INTERNAL_DT_REORDER$)) {
        this.$_dndClean$();
      } else {
        if ($dnd$$8$$.$foreign$ && ($bForeignTree$$ = this.$_isDtType$($dt$$1$$, $cons$$4$$.$_DND_INTERNAL_DT$), !$dnd$$8$$.$dropToEnabled$)) {
          this.$_dndClean$();
          return;
        }
        $vars$$2$$.$r$ = !1;
        $dnd$$8$$.$nodeLastEnter$ && this.$_clearDropClasses$($dnd$$8$$.$nodeLastEnter$);
        $$targ$$1$$.hasClass("oj-tree") && ($$node$$1$$ = $dnd$$8$$.$nodeLastEnter$);
        if (!$$node$$1$$ || !$$node$$1$$.length || $$node$$1$$.attr("id") != $dnd$$8$$.$nodeDraggedId$) {
          $bForeignTree$$ && $bNode$$ && ($dnd$$8$$.$nodeLastEnter$ = null, $vars$$2$$.$o$ = 2);
          $dnd$$8$$.$foreign$ && !$bForeignTree$$ && ($vars$$2$$.$o$ = 1);
          $vars$$2$$.$r$ = $$node$$1$$;
          $dnd$$8$$.$nodeLastEnter$ = $$node$$1$$;
          this.$_dndPlacement$($e$$112$$, $$node$$1$$);
          if (this.$_dndEnter$()) {
            $vars$$2$$.$r$.removeClass($cons$$4$$.$_OJ_INVALID_DROP$).addClass($cons$$4$$.$_OJ_VALID_DROP$).addClass($cons$$4$$.$_OJ_ACTIVE_DROP$);
            $dnd$$8$$.$dropDragEnterCallback$ && ($ret$$66$$ = $dnd$$8$$.$dropDragEnterCallback$($e$$112$$, {item:$dnd$$8$$.$bInternalNode$ ? null : $$node$$1$$, position:$dnd$$8$$.$bInternalNode$ ? "first" : $dnd$$8$$.$place$, reference:$dnd$$8$$.$bInternalNode$ ? null : $vars$$2$$.$r$}));
            if (void 0 === $ret$$66$$) {
              this.$_isDtAcceptDataTypes$($dt$$1$$) ? ($e$$112$$.preventDefault(), $e$$112$$.stopPropagation()) : $bClean$$ = $dnd$$8$$.$foreign$ || !$dnd$$8$$.reorder;
            } else {
              if (!1 === $ret$$66$$ || $e$$112$$.isDefaultPrevented()) {
                $e$$112$$.preventDefault(), $e$$112$$.stopPropagation();
              } else {
                if ($dnd$$8$$.$foreign$ || !$dnd$$8$$.reorder) {
                  $bClean$$ = $dnd$$8$$.$foreign$ || !$dnd$$8$$.reorder;
                }
              }
            }
            $bClean$$ && this.$_dndClean$();
            return $ret$$66$$;
          }
          this.$_clearDropClasses$($vars$$2$$.$r$);
          $vars$$2$$.$r$ = null;
        }
        this.$_dndHideMarker$();
      }
    }
  };
  $oj$$70$$.$TreeDndContext$.prototype.$_dragOver$ = function $$oj$$70$$$$TreeDndContext$$$$_dragOver$$($e$$113$$) {
    var $dnd$$9$$ = this.$_dnd$, $vars$$3$$ = $dnd$$9$$.$vars$, $dt$$2$$ = $e$$113$$.originalEvent.dataTransfer, $bClean$$1$$ = !1, $elemId$$1$$, $$node$$2$$, $ret$$67$$;
    if ($vars$$3$$.$r$ && $vars$$3$$.$r$.length && ($$node$$2$$ = $vars$$3$$.$r$, $$node$$2$$.hasClass("oj-tree-node") && ($elemId$$1$$ = $$node$$2$$.attr("id"), $elemId$$1$$ != $dnd$$9$$.$nodeDraggedId$ && (this.$_dndPlacement$($e$$113$$, $$node$$2$$), this.$_dndPrepare$())))) {
      $dnd$$9$$.$dropDragOverCallback$ && ($ret$$67$$ = $dnd$$9$$.$dropDragOverCallback$($e$$113$$, {item:$dnd$$9$$.$bInternalNode$ ? null : $$node$$2$$, reference:$dnd$$9$$.$bInternalNode$ ? null : $vars$$3$$.$r$, position:$dnd$$9$$.$bInternalNode$ ? "first" : $vars$$3$$.$last_pos$}));
      if (void 0 === $ret$$67$$) {
        this.$_isDtAcceptDataTypes$($dt$$2$$) ? ($e$$113$$.preventDefault(), $e$$113$$.stopPropagation()) : $bClean$$1$$ = $dnd$$9$$.$foreign$ || !$dnd$$9$$.reorder;
      } else {
        if (!1 === $ret$$67$$ || $e$$113$$.isDefaultPrevented()) {
          $e$$113$$.preventDefault(), $e$$113$$.stopPropagation();
        } else {
          if ($dnd$$9$$.$foreign$ || !$dnd$$9$$.reorder) {
            $bClean$$1$$ = $dnd$$9$$.$foreign$ || !$dnd$$9$$.reorder;
          }
        }
      }
      $bClean$$1$$ && this.$_dndClean$();
      return $ret$$67$$;
    }
    this.$_dndHideMarker$();
  };
  $oj$$70$$.$TreeDndContext$.prototype.$_dragDrop$ = function $$oj$$70$$$$TreeDndContext$$$$_dragDrop$$($e$$114$$) {
    var $dnd$$10$$ = this.$_dnd$, $vars$$4$$ = $dnd$$10$$.$vars$, $veto$$2$$ = !1, $ret$$68$$;
    if ($vars$$4$$.$r$) {
      if ($dnd$$10$$.$dropDropCallback$) {
        $ret$$68$$ = $dnd$$10$$.$dropDropCallback$($e$$114$$, {reference:$dnd$$10$$.$bInternalNode$ ? null : $vars$$4$$.$r$, position:$dnd$$10$$.$bInternalNode$ ? "first" : $vars$$4$$.$last_pos$, reorder:!$dnd$$10$$.$foreign$ && $dnd$$10$$.reorder});
      } else {
        if ($dnd$$10$$.$foreign$ || !$dnd$$10$$.reorder) {
          $veto$$2$$ = !0;
        }
      }
      $veto$$2$$ || $ret$$68$$ && !$e$$114$$.isDefaultPrevented() || this.$_dndFinishReorder$($e$$114$$);
    }
    $dnd$$10$$.$foreign$ && this.$_dndClean$();
    $veto$$2$$ || ($e$$114$$.preventDefault(), $e$$114$$.stopPropagation());
    $dnd$$10$$.$nodeLastLeft$ = null;
    return $ret$$68$$;
  };
  $oj$$70$$.$TreeDndContext$.prototype.$_dragEnd$ = function $$oj$$70$$$$TreeDndContext$$$$_dragEnd$$($e$$115$$) {
    var $dnd$$11$$ = this.$_dnd$, $vars$$5$$ = $dnd$$11$$.$vars$;
    $dnd$$11$$.$dragEndCallback$ && $dnd$$11$$.$dragEndCallback$($e$$115$$, {reorder:$dnd$$11$$.reorder && !1 === $vars$$5$$.$o$});
    this.$_dndStopDrag$();
    this.$_dndClean$();
  };
  $oj$$70$$.$TreeDndContext$.prototype.$_addInternalNode$ = function $$oj$$70$$$$TreeDndContext$$$$_addInternalNode$$() {
    this.$_internalNode$ || (this.$_internalNode$ = $$$$63$$("\x3cli class\x3d'" + $TreeUtils$$.$_OJ_TEMPNODE$ + " oj-tree-node oj-tree-leaf oj-valid-drop' id\x3d'" + $TreeUtils$$.$_OJ_TEMPNODE$ + "'\x3e\x3cins class\x3d'oj-tree-icon'\x3e\x3c/ins\x3e\x3ca href\x3d'#'\x3e\x3cins class\x3d'oj-tree-icon'\x3e\x3c/ins\x3e\x3cspan class\x3d'oj-tree-title'\x3e\x3c/span\x3e\x3c/a\x3e\x3c/li\x3e"));
    this.$component$.$_$container_ul$.append(this.$_internalNode$);
  };
  $oj$$70$$.$TreeDndContext$.prototype.$_dragLeave$ = function $$oj$$70$$$$TreeDndContext$$$$_dragLeave$$($e$$116$$) {
    var $dnd$$12$$ = this.$_dnd$, $vars$$6$$ = $dnd$$12$$.$vars$, $$targ$$2$$ = $$$$63$$($e$$116$$.target), $$node$$3$$ = $$targ$$2$$.closest("li"), $bNode$$1$$ = $$node$$3$$ && 0 < $$node$$3$$.length && $$node$$3$$.hasClass("oj-tree-node");
    $$node$$3$$.attr("id");
    var $dt$$4$$ = $e$$116$$.originalEvent.dataTransfer;
    $dnd$$12$$.$dropDragLeaveCallback$ && $dnd$$12$$.$dropDragLeaveCallback$($e$$116$$, {item:$dnd$$12$$.$bInternalNode$ ? null : $$node$$3$$});
    $$targ$$2$$.hasClass("oj-tree") || !$bNode$$1$$ || "none" == $dt$$4$$.dropEffect ? this.$_dndLeave$($e$$116$$) : $dnd$$12$$.$nodeLastLeft$ = $$node$$3$$;
    $vars$$6$$.$r$ && this.$_clearDropClasses$($vars$$6$$.$r$);
  };
  $oj$$70$$.$TreeDndContext$.prototype.$_dndEnter$ = function $$oj$$70$$$$TreeDndContext$$$$_dndEnter$$() {
    var $dnd$$13_t$$2$$ = this.$_dnd$, $vars$$7$$ = $dnd$$13_t$$2$$.$vars$, $ret$$70$$;
    $dnd$$13_t$$2$$.$prepared$ = !1;
    $ret$$70$$ = this.$_dndPrepare$();
    var $ms$$1$$ = $dnd$$13_t$$2$$.$openTimeoutMs$;
    $ms$$1$$ && ($dnd$$13_t$$2$$.$openTimer_Id$ && clearTimeout($dnd$$13_t$$2$$.$openTimerId$), $vars$$7$$.$r$ && $vars$$7$$.$r$.length && $vars$$7$$.$r$.hasClass($TreeUtils$$.$_OJ_COLLAPSED$) && ($dnd$$13_t$$2$$.$openTimerId$ = setTimeout(this.$_dndOpen$.bind(this), $ms$$1$$)));
    $dnd$$13_t$$2$$ = typeof $ret$$70$$;
    return "boolean" == $dnd$$13_t$$2$$ && $ret$$70$$ || "string" == $dnd$$13_t$$2$$;
  };
  $oj$$70$$.$TreeDndContext$.prototype.$_dndOpen$ = function $$oj$$70$$$$TreeDndContext$$$$_dndOpen$$() {
    var $dnd$$14$$ = this.$_dnd$, $vars$$8$$ = $dnd$$14$$.$vars$;
    $dnd$$14$$.$openTimerId$ = !1;
    this.$component$.$_expand$($vars$$8$$.$r$, this.$_dndPrepare$.bind(this), !0);
  };
  $oj$$70$$.$TreeDndContext$.prototype.$_dndFinishReorder$ = function $$oj$$70$$$$TreeDndContext$$$$_dndFinishReorder$$($e$$117$$) {
    var $dnd$$15$$ = this.$_dnd$, $vars$$9$$ = $dnd$$15$$.$vars$;
    $dnd$$15$$.$dragStarted$ && $dnd$$15$$.reorder && "object" == typeof $vars$$9$$.$o$ && 0 < $vars$$9$$.$o$.length && (this.$component$.$_moveNode$($vars$$9$$.$o$, $vars$$9$$.$r$, $vars$$9$$.$last_pos$, $oj$$70$$.$DomUtils$.$isMetaKeyPressed$($e$$117$$)), $vars$$9$$.$o$ = !1);
  };
  $oj$$70$$.$TreeDndContext$.prototype.$_dndFinishSelection$ = function $$oj$$70$$$$TreeDndContext$$$$_dndFinishSelection$$($children$$14_node$$122$$) {
    $children$$14_node$$122$$.hasClass($TreeUtils$$.$_OJ_SELECTED$) && ($children$$14_node$$122$$.removeClass($TreeUtils$$.$_OJ_SELECTED$), this.$component$.$_select$($children$$14_node$$122$$, !0));
    var $len$$19$$ = ($children$$14_node$$122$$ = this.$component$.getChildren($children$$14_node$$122$$)) && $children$$14_node$$122$$.length ? $children$$14_node$$122$$.length : 0, $i$$463$$;
    for ($i$$463$$ = 0;$i$$463$$ < $len$$19$$;$i$$463$$++) {
      this.$_dndFinishSelection$($$$$63$$($children$$14_node$$122$$[$i$$463$$]));
    }
  };
  $oj$$70$$.$TreeDndContext$.prototype.$_dndPlacement$ = function $$oj$$70$$$$TreeDndContext$$$$_dndPlacement$$($e$$118$$, $$node$$4$$) {
    var $dnd$$16$$ = this.$_dnd$;
    $$node$$4$$ && ($$node$$4$$.hasClass($TreeUtils$$.$_OJ_TEMPNODE$) ? $dnd$$16$$.$place$ = "after" : ($e$$118$$ = $e$$118$$.originalEvent, $dnd$$16$$.off = $$node$$4$$.offset(), $dnd$$16$$.$place$ = $e$$118$$.pageY - ($dnd$$16$$.off.top || 0), $dnd$$16$$.$place$ = $dnd$$16$$.$place$ >= this.$component$.$_data$.$core$.$li_height$ ? "after" : 0 > $dnd$$16$$.$place$ ? "before" : "inside", "after" === $dnd$$16$$.$place$ && $$node$$4$$.hasClass($TreeUtils$$.$_OJ_EXPANDED$) && ($dnd$$16$$.$place$ = "first")));
  };
  $oj$$70$$.$TreeDndContext$.prototype.$_dndLeave$ = function $$oj$$70$$$$TreeDndContext$$$$_dndLeave$$($e$$119$$) {
    var $dnd$$17$$ = this.$_dnd$, $vars$$10$$ = $dnd$$17$$.$vars$;
    $dnd$$17$$.after = !1;
    $dnd$$17$$.before = !1;
    $dnd$$17$$.$inside$ = !1;
    $dnd$$17$$.$lastNodeEnter$ = null;
    this.$_dndHideMarker$();
    $vars$$10$$.$r$ && $vars$$10$$.$r$[0] === $e$$119$$.target.parentNode && $dnd$$17$$.$openTimerId$ && (clearTimeout($dnd$$17$$.$openTimerId$), $dnd$$17$$.$openTimerId$ = !1);
  };
  $oj$$70$$.$TreeDndContext$.prototype.$_dndClean$ = function $$oj$$70$$$$TreeDndContext$$$$_dndClean$$() {
    this.$_dndHideMarker$();
    var $dnd$$18$$ = this.$_dnd$, $vars$$11$$ = $dnd$$18$$.$vars$;
    $vars$$11$$.$o$ = !1;
    $vars$$11$$.$r$ = !1;
    $dnd$$18$$.$openTimerId$ && clearTimeout($dnd$$18$$.$openTimerId$);
    $dnd$$18$$.$nodeDraggedId$ = null;
    $dnd$$18$$.$foreign$ = !1;
    $dnd$$18$$.$nodeLastEnter$ = null;
    $dnd$$18$$.$nodeLastLeft$ = null;
    $dnd$$18$$.after = !1;
    $dnd$$18$$.before = !1;
    $dnd$$18$$.$inside$ = !1;
    $dnd$$18$$.off = !1;
    $dnd$$18$$.$prepared$ = !1;
    $dnd$$18$$.$openTimerId$ = !1;
    $dnd$$18$$.$foreign$ = !1;
    $dnd$$18$$.$bInternalNode$ = !1;
  };
  $oj$$70$$.$TreeDndContext$.prototype.$_dndCleanAll$ = function $$oj$$70$$$$TreeDndContext$$$$_dndCleanAll$$() {
    var $dnd$$19$$ = this.$_dnd$, $$div$$;
    $$div$$ = $$$$63$$(this.$component$.$_$container$[0]);
    $$div$$.off("dragstart", $dnd$$19$$.$fnDragStart$);
    $$div$$.off("dragend", $dnd$$19$$.$fnDragEnd$);
    $$div$$.off("drag", $dnd$$19$$.$fnDrag$);
    $$div$$.off("dragenter", $dnd$$19$$.$fnDragEnter$);
    $$div$$.off("dragover", $dnd$$19$$.$fnDragOver$);
    $$div$$.off("dragleave", $dnd$$19$$.$fnDragLeave$);
    $$div$$.off("drop", $dnd$$19$$.$fnDragDrop$);
    this.$_dndClean$();
    this.$_reset$();
  };
  $oj$$70$$.$TreeDndContext$.prototype.$_dndPrepare$ = function $$oj$$70$$$$TreeDndContext$$$$_dndPrepare$$() {
    var $dnd$$20$$ = this.$_dnd$, $vars$$12$$ = $dnd$$20$$.$vars$, $tree$$ = this.$component$, $foreignObj$$1$$ = !1;
    if (!$vars$$12$$.$r$ || !$vars$$12$$.$r$.length) {
      return!1;
    }
    if ("number" == typeof $vars$$12$$.$o$ && (1 === $vars$$12$$.$o$ || 2 === $vars$$12$$.$o$)) {
      $foreignObj$$1$$ = !0;
    } else {
      if (!$vars$$12$$.$o$) {
        return!1;
      }
    }
    $dnd$$20$$.off = $vars$$12$$.$r$.offset();
    this.$component$.$_isRtl$ && ($dnd$$20$$.off.right = $dnd$$20$$.off.left + $vars$$12$$.$r$.width() - $vars$$12$$.$r$.find("\x3ea").width() - 30);
    $dnd$$20$$.$targ_ml_width$ = $vars$$12$$.$r$.find("a").width();
    $foreignObj$$1$$ ? ($dnd$$20$$.before = "before" == $dnd$$20$$.$place$, $dnd$$20$$.after = "after" == $dnd$$20$$.$place$, $dnd$$20$$.$inside$ = "inside" == $dnd$$20$$.$place$) : ($tree$$.$_prepare_move$($vars$$12$$.$o$, $vars$$12$$.$r$, "before"), $dnd$$20$$.before = $tree$$.$_checkMove$(), $tree$$.$_prepare_move$($vars$$12$$.$o$, $vars$$12$$.$r$, "after"), $dnd$$20$$.after = $tree$$.$_checkMove$(), this.$component$.$_is_loaded$($vars$$12$$.$r$) ? ($tree$$.$_prepare_move$($vars$$12$$.$o$, $vars$$12$$.$r$, 
    "inside"), $dnd$$20$$.$inside$ = $tree$$.$_checkMove$()) : $dnd$$20$$.$inside$ = !1);
    $dnd$$20$$.$prepared$ = !0;
    return this.$_dndShowMarker$();
  };
  $oj$$70$$.$TreeDndContext$.prototype.$_dndShowMarker$ = function $$oj$$70$$$$TreeDndContext$$$$_dndShowMarker$$() {
    var $dnd$$21$$ = this.$_dnd$, $fc_isParent$$1$$ = !1, $cons$$7$$ = $oj$$70$$.$TreeDndContext$, $vars$$13$$ = $dnd$$21$$.$vars$, $rtl$$6$$ = this.$component$.$_isRtl$, $mLeft$$, $mlLeft_pos$$14$$, $lineTop$$, $nodeHeight$$ = this.$component$.$_data$.$core$.$li_height$, $r$$1$$ = !1;
    if (!$dnd$$21$$.$prepared$) {
      return this.$_dndHideMarker$(), $r$$1$$;
    }
    if ("after" == $dnd$$21$$.$place$ && $dnd$$21$$.after || "inside" == $dnd$$21$$.$place$ && $dnd$$21$$.$inside$ || "before" == $dnd$$21$$.$place$ && $dnd$$21$$.before || "first" == $dnd$$21$$.$place$) {
      $r$$1$$ = $dnd$$21$$.$place$;
    }
    "first" === $r$$1$$ && ($fc_isParent$$1$$ = $vars$$13$$.$r$.find("li:eq(0)"), $dnd$$21$$.off = $fc_isParent$$1$$.offset());
    $mlLeft_pos$$14$$ = $rtl$$6$$ ? $dnd$$21$$.off.right - 18 : $dnd$$21$$.off.left + 5;
    $fc_isParent$$1$$ = !this.$component$.isLeaf($vars$$13$$.$r$);
    $mLeft$$ = $rtl$$6$$ ? $mlLeft_pos$$14$$ + $dnd$$21$$.$targ_ml_width$ + 18 : $mlLeft_pos$$14$$;
    $mlLeft_pos$$14$$ = $rtl$$6$$ ? $mLeft$$ - $dnd$$21$$.$ml_width$ : $mlLeft_pos$$14$$ + 8;
    $lineTop$$ = $dnd$$21$$.off.top - 3;
    switch($r$$1$$) {
      case "before":
      ;
      case "first":
        this.$_moveMarkerUI$($vars$$13$$.$m$, {left:$mLeft$$, top:$lineTop$$ - 7});
        $vars$$13$$.$ml$ && this.$_moveMarkerUI$($vars$$13$$.$ml$, {left:$mlLeft_pos$$14$$, top:$lineTop$$});
        break;
      case "after":
        $lineTop$$ += $nodeHeight$$;
        this.$_moveMarkerUI$($vars$$13$$.$m$, {left:$mLeft$$, top:$lineTop$$ - 2});
        $vars$$13$$.$ml$ && this.$_moveMarkerUI$($vars$$13$$.$ml$, {left:$mlLeft_pos$$14$$, top:$lineTop$$ + 6});
        break;
      case "inside":
        this.$_moveMarkerUI$($vars$$13$$.$m$, {left:$mLeft$$ + ($rtl$$6$$ ? $fc_isParent$$1$$ ? -4 : 0 : 4), top:$dnd$$21$$.off.top + $nodeHeight$$ / 2 - 8});
        $vars$$13$$.$ml$ && $vars$$13$$.$ml$.hide();
        break;
      default:
        this.$_dndHideMarker$();
    }
    $r$$1$$ ? $vars$$13$$.$r$.removeClass($cons$$7$$.$_OJ_INVALID_DROP$).addClass($cons$$7$$.$_OJ_VALID_DROP$) : $vars$$13$$.$r$.removeClass($cons$$7$$.$_OJ_VALID_DROP$).removeClass($cons$$7$$.$_OJ_VALID_DROP$);
    return $vars$$13$$.$last_pos$ = $r$$1$$;
  };
  $oj$$70$$.$TreeDndContext$.prototype.$_dndHideMarker$ = function $$oj$$70$$$$TreeDndContext$$$$_dndHideMarker$$() {
    var $vars$$14$$ = this.$_dnd$.$vars$;
    $vars$$14$$ && ($vars$$14$$.$m$ && $vars$$14$$.$m$.hide(), $vars$$14$$.$ml$ && $vars$$14$$.$ml$.hide(), $vars$$14$$.$r$ && this.$_clearDropClasses$($vars$$14$$.$r$));
  };
  $oj$$70$$.$TreeDndContext$.prototype.$_moveMarkerUI$ = function $$oj$$70$$$$TreeDndContext$$$$_moveMarkerUI$$($$obj$$, $styles$$1$$) {
    $styles$$1$$.left += "px";
    $styles$$1$$.top += "px";
    $$obj$$.css($styles$$1$$).show();
  };
  $oj$$70$$.$TreeDndContext$.prototype.$_dndStartDrag$ = function $$oj$$70$$$$TreeDndContext$$$$_dndStartDrag$$($$cnt_$nodes$$1$$, $$node$$5$$, $e$$120$$) {
    var $dnd$$22$$ = this.$_dnd$, $vars$$16$$ = $dnd$$22$$.$vars$, $cons$$9$$ = $oj$$70$$.$TreeDndContext$;
    $vars$$16$$.$o$ = $$cnt_$nodes$$1$$;
    $vars$$16$$.$o$.addClass($cons$$9$$.$_OJ_DRAG$);
    $dnd$$22$$.$nodeDraggedId$ = $$node$$5$$.attr("id");
    try {
      $e$$120$$.currentTarget.unselectable = "on", $e$$120$$.currentTarget.onselectstart = function $$e$$120$$$currentTarget$onselectstart$() {
        return!1;
      }, $e$$120$$.currentTarget.style && ($e$$120$$.currentTarget.style.MozUserSelect = "none");
    } catch ($err$$25$$) {
    }
    this.$component$.$_isTheme$() && $vars$$16$$.$m$ && $vars$$16$$.$m$.addClass("oj-tree-" + this.$component$.$_data$.$themes$.$theme$);
    $$cnt_$nodes$$1$$ = this.$component$.$_$container$;
    $dnd$$22$$.$cof$ = $$cnt_$nodes$$1$$.offset();
    $dnd$$22$$.$cw$ = parseInt($$cnt_$nodes$$1$$.width(), 10);
    $dnd$$22$$.ch = parseInt($$cnt_$nodes$$1$$.height(), 10);
    $dnd$$22$$.$dragStarted$ = !0;
  };
  $oj$$70$$.$TreeDndContext$.prototype.$_dndStopDrag$ = function $$oj$$70$$$$TreeDndContext$$$$_dndStopDrag$$() {
    var $dnd$$23$$ = this.$_dnd$, $vars$$17$$ = $dnd$$23$$.$vars$, $cons$$10$$ = $oj$$70$$.$TreeDndContext$;
    $vars$$17$$.$r$ && this.$_clearDropClasses$($vars$$17$$.$r$);
    "number" != typeof $vars$$17$$.$o$ && $vars$$17$$.$o$ && $vars$$17$$.$o$.removeClass($cons$$10$$.$_OJ_DRAG$);
    $dnd$$23$$.$dragStarted$ = !1;
  };
  $oj$$70$$.$TreeDndContext$.prototype.$_setDataTypes$ = function $$oj$$70$$$$TreeDndContext$$$$_setDataTypes$$($dt$$5$$, $$nodes$$2$$) {
    var $dnd$$24$$ = this.$_dnd$, $cons$$11$$ = $oj$$70$$.$TreeDndContext$, $adata$$1_i$$464$$, $data$$170$$;
    ($adata$$1_i$$464$$ = this.$component$.$__getJson$($$nodes$$2$$)) && ($data$$170$$ = JSON.stringify($adata$$1_i$$464$$));
    if ($dnd$$24$$.$dragDataTypes$) {
      for ($adata$$1_i$$464$$ = 0;$adata$$1_i$$464$$ < $dnd$$24$$.$dragDataTypes$.length;$adata$$1_i$$464$$++) {
        $dt$$5$$.setData($dnd$$24$$.$dragDataTypes$[$adata$$1_i$$464$$], $data$$170$$);
      }
    }
    $dt$$5$$.setData($cons$$11$$.$_DND_INTERNAL_DT$, "0");
    $dnd$$24$$.$pureReorder$ && $dt$$5$$.setData($cons$$11$$.$_DND_INTERNAL_DT_REORDER$, "0");
  };
  $oj$$70$$.$TreeDndContext$.prototype.$_isDtType$ = function $$oj$$70$$$$TreeDndContext$$$$_isDtType$$($dt$$6$$, $type$$110$$) {
    var $aTypes$$ = $dt$$6$$.types, $len$$20$$ = $aTypes$$.length, $i$$465$$;
    for ($i$$465$$ = 0;$i$$465$$ < $len$$20$$;$i$$465$$++) {
      if ($type$$110$$ == $aTypes$$[$i$$465$$]) {
        return!0;
      }
    }
    return!1;
  };
  $oj$$70$$.$TreeDndContext$.prototype.$_isDtAcceptDataTypes$ = function $$oj$$70$$$$TreeDndContext$$$$_isDtAcceptDataTypes$$($dt$$7$$) {
    var $comps$$1$$ = this.$_dnd$.$dropDataTypes$, $ret$$71$$ = !1, $i$$466$$;
    if ($comps$$1$$) {
      for ($ret$$71$$ = !(0 < $comps$$1$$.length), $i$$466$$ = 0;$i$$466$$ < $comps$$1$$.length;$i$$466$$++) {
        if (this.$_isDtType$($dt$$7$$, $comps$$1$$[$i$$466$$])) {
          $ret$$71$$ = !0;
          break;
        }
      }
    } else {
      $ret$$71$$ = !0;
    }
    return $ret$$71$$;
  };
  $oj$$70$$.$TreeDndContext$.prototype.$_checkAddedDataTypes$ = function $$oj$$70$$$$TreeDndContext$$$$_checkAddedDataTypes$$($aTypes$$1_dt$$8$$) {
    var $len$$21$$ = ($aTypes$$1_dt$$8$$ = $aTypes$$1_dt$$8$$.types) && $aTypes$$1_dt$$8$$.length ? $aTypes$$1_dt$$8$$.length : 0, $cons$$12$$ = $oj$$70$$.$TreeDndContext$, $ret$$72$$ = !1, $type$$111$$, $i$$467$$;
    for ($i$$467$$ = 0;$i$$467$$ < $len$$21$$;$i$$467$$++) {
      if ($type$$111$$ = $aTypes$$1_dt$$8$$[$i$$467$$], $type$$111$$ != $cons$$12$$.$_DND_INTERNAL_DT$ && $type$$111$$ != $cons$$12$$.$_DND_INTERNAL_DT_REORDER$) {
        $ret$$72$$ = !0;
        break;
      }
    }
    return $ret$$72$$;
  };
  $oj$$70$$.$TreeDndContext$.prototype.$_clearDropClasses$ = function $$oj$$70$$$$TreeDndContext$$$$_clearDropClasses$$($$var$$) {
    var $cons$$13$$ = $oj$$70$$.$TreeDndContext$;
    $$var$$ && $$var$$.removeClass($cons$$13$$.$_OJ_VALID_DROP$).removeClass($cons$$13$$.$_OJ_INVALID_DROP$).removeClass($cons$$13$$.$_OJ_ACTIVE_DROP$);
  };
  $oj$$70$$.$TreeDndContext$.prototype.$_reset$ = function $$oj$$70$$$$TreeDndContext$$$$_reset$$() {
    var $_dnd$$ = {};
    this.$_dnd$ = $_dnd$$;
    $_dnd$$.reorder = !1;
    $_dnd$$.$pureReorder$ = !1;
    $_dnd$$.$foreign$ = !1;
    $_dnd$$.$dragStarted$ = !1;
    $_dnd$$.$nodeDraggedId$ = null;
    $_dnd$$.$nodeLastEnter$ = null;
    $_dnd$$.$fnDragStart$ = null;
    $_dnd$$.$fnDragEnd$ = null;
    $_dnd$$.$fnDrag$ = null;
    $_dnd$$.$fnDragEnter$ = null;
    $_dnd$$.$fnDragOver$ = null;
    $_dnd$$.$fnDragLeave$ = null;
    $_dnd$$.$fnDragDrop$ = null;
    $_dnd$$.$dragFromEnabled$ = !1;
    $_dnd$$.$dropToEnabled$ = !1;
    $_dnd$$.$dragStartCallback$ = null;
    $_dnd$$.$dragDragCallback$ = null;
    $_dnd$$.$dragDragEndCallback$ = null;
    $_dnd$$.$dropDragEnterCallback$ = null;
    $_dnd$$.$dropDragOverCallback$ = null;
    $_dnd$$.$dropDragLeaveCallback$ = null;
    $_dnd$$.$dragDropCallback$ = null;
    $_dnd$$.$dropDataTypes$ = null;
    $_dnd$$.after = !1;
    $_dnd$$.$inside$ = !1;
    $_dnd$$.before = !1;
    $_dnd$$.off = !1;
    $_dnd$$.$prepared$ = !1;
    $_dnd$$.$openTimerId$ = !1;
    $_dnd$$.$cof$ = !1;
    $_dnd$$.$cw$ = !1;
    $_dnd$$.ch = !1;
    $_dnd$$.$ml_width$ = 100;
    $_dnd$$.$targ_ml_width$ = 100;
    $_dnd$$.$openTimeoutMs$ = 500;
    $_dnd$$.$vars$ = {};
    $_dnd$$.$vars$.$o$ = !1;
    $_dnd$$.$vars$.$r$ = !1;
    $_dnd$$.$vars$.$m$ = !1;
    $_dnd$$.$vars$.$ml$ = !1;
  };
  $oj$$70$$.$TreeDndContext$.prototype.$_trace$ = function $$oj$$70$$$$TreeDndContext$$$$_trace$$($s$$10$$) {
    this.$component$.$_trace$($s$$10$$);
  };
  $oj$$70$$.$TreeDndContext$.$_OJ_DRAGGABLE$ = "oj-draggable";
  $oj$$70$$.$TreeDndContext$.$_OJ_DRAG$ = "oj-drag";
  $oj$$70$$.$TreeDndContext$.$_OJ_ACTIVE_DROP$ = "oj-active-drop";
  $oj$$70$$.$TreeDndContext$.$_OJ_VALID_DROP$ = "oj-valid-drop";
  $oj$$70$$.$TreeDndContext$.$_OJ_INVALID_DROP$ = "oj-invalid-drop";
  $oj$$70$$.$TreeDndContext$.$_OJ_DROP$ = "oj-drop";
  $oj$$70$$.$TreeDndContext$.$_OJT_DROP_MARKER$ = "oj-tree-drop-marker";
  $oj$$70$$.$TreeDndContext$.$_OJT_DROP_MARKER_LINE$ = "oj-tree-drop-marker-line";
  $oj$$70$$.$TreeDndContext$.$_DND_REORDER$ = "reorder";
  $oj$$70$$.$TreeDndContext$.$_DND_DRAG$ = "drag";
  $oj$$70$$.$TreeDndContext$.$_DND_DROP$ = "drop";
  $oj$$70$$.$TreeDndContext$.$_DND_NODE$ = "node";
  $oj$$70$$.$TreeDndContext$.$_DND_DATATYPES$ = "dataTypes";
  $oj$$70$$.$TreeDndContext$.$_DND_DRAGSTART_CB$ = "dragStart";
  $oj$$70$$.$TreeDndContext$.$_DND_DRAGDRAG_CB$ = "drag";
  $oj$$70$$.$TreeDndContext$.$_DND_DRAGEND_CB$ = "dragEnd";
  $oj$$70$$.$TreeDndContext$.$_DND_DROPDRAGENTER_CB$ = "dragEnter";
  $oj$$70$$.$TreeDndContext$.$_DND_DROPDRAGOVER_CB$ = "dragOver";
  $oj$$70$$.$TreeDndContext$.$_DND_DROPDRAGLEAVE_CB$ = "dragLeave";
  $oj$$70$$.$TreeDndContext$.$_DND_DROPDROP_CB$ = "drop";
  $oj$$70$$.$TreeDndContext$.$_DND_INTERNAL_DT$ = "_ojtree";
  $oj$$70$$.$TreeDndContext$.$_DND_INTERNAL_DT_REORDER$ = "_ojtreereorder";
  (function() {
    function $_addKeyFilter$$($obj$$70$$) {
      $_aKeyHandlerStack$$.push($obj$$70$$);
      $$$$63$$($obj$$70$$.$_selector$).keydown($_KeyFilterHandler$$);
    }
    function $_KeyFilterHandler$$($e$$121$$) {
      var $s$$11$$ = "";
      $oj$$70$$.$DomUtils$.$isMetaKeyPressed$($e$$121$$) ? $s$$11$$ += "ctrl+" : $e$$121$$.shiftKey && ($s$$11$$ += "shift+");
      var $key$$196$$ = $e$$121$$.which;
      switch($key$$196$$) {
        case 32:
          $s$$11$$ += "space";
          break;
        case 37:
          $s$$11$$ += "left";
          break;
        case 38:
          $s$$11$$ += "up";
          break;
        case 39:
          $s$$11$$ += "right";
          break;
        case 40:
          $s$$11$$ += "down";
          break;
        case 46:
          $s$$11$$ += "del";
          break;
        case 33:
          $s$$11$$ += "pgup";
          break;
        case 34:
          $s$$11$$ += "pgdn";
          break;
        case 35:
          $s$$11$$ += "end";
          break;
        case 36:
          $s$$11$$ += "home";
          break;
        case 56:
          $s$$11$$ = "*";
          break;
        case 113:
        ;
        case 121:
          $s$$11$$ += "f" + (1 - (112 - $key$$196$$));
      }
      if (0 === $s$$11$$.length || "shift+" == $s$$11$$ || "ctrl+" == $s$$11$$) {
        return!0;
      }
      var $retHandler$$ = null;
      $$$$63$$.each($_aKeyHandlerStack$$, function($i$$468$$, $obj$$71$$) {
        if ($obj$$71$$.$_this$.$_data$.ui.$focused$) {
          return $obj$$71$$.$_this$.$_data$.ui.$touchEvent$ = !1, "shift+f10" == $s$$11$$ ? $obj$$71$$.$_this$.$_data$.menu.$activenode$ = $obj$$71$$.$_this$.$_data$.ui.$hovered$ : $obj$$71$$.$_handler$[$s$$11$$] && ($e$$121$$.preventDefault(), $retHandler$$ = $obj$$71$$.$_handler$[$s$$11$$].call($obj$$71$$.$_this$, $e$$121$$)), !1;
        }
      });
      if (null != $retHandler$$) {
        return $retHandler$$;
      }
    }
    function $_removeKeyFilter$$($selector$$37$$) {
      $$$$63$$.each($_aKeyHandlerStack$$, function($i$$469$$) {
        if ($_aKeyHandlerStack$$[$i$$469$$].$_selector$ === $selector$$37$$) {
          return $$$$63$$($selector$$37$$).off("keydown"), $_aKeyHandlerStack$$[$i$$469$$] = null, $_aKeyHandlerStack$$.splice($i$$469$$, 1), !1;
        }
      });
    }
    function $isPureObjEmpty$$($o$$12$$) {
      var $ret$$73$$ = !0, $prop$$84$$;
      for ($prop$$84$$ in $o$$12$$) {
        if ($o$$12$$.hasOwnProperty($prop$$84$$)) {
          $ret$$73$$ = !1;
          break;
        }
      }
      return $ret$$73$$;
    }
    function $_addSheet$$($opts$$35$$) {
      var $tmp$$3$$ = !1, $isNew$$7$$ = !0;
      $opts$$35$$.$str$ && ($opts$$35$$.title && ($tmp$$3$$ = $$$$63$$("style[id\x3d'" + $opts$$35$$.title + "-stylesheet']")[0]), $tmp$$3$$ ? $isNew$$7$$ = !1 : ($tmp$$3$$ = document.createElement("style"), $tmp$$3$$.setAttribute("type", "text/css"), $opts$$35$$.title && $tmp$$3$$.setAttribute("id", $opts$$35$$.title + "-stylesheet")), $tmp$$3$$.styleSheet ? $isNew$$7$$ ? (document.getElementsByTagName("head")[0].appendChild($tmp$$3$$), $tmp$$3$$.styleSheet.cssText = $opts$$35$$.$str$) : $tmp$$3$$.styleSheet.cssText = 
      $tmp$$3$$.styleSheet.cssText + " " + $opts$$35$$.$str$ : ($tmp$$3$$.appendChild(document.createTextNode($opts$$35$$.$str$)), document.getElementsByTagName("head")[0].appendChild($tmp$$3$$)));
    }
    var $_arMenuCmdMap$$1$$ = {cut:"ojtreecut", copy:"ojtreecopy", paste:"ojtreepaste", remove:"ojtreeremove", rename:"ojtreerename"}, $_arMenuKeyMap$$1$$ = {cut:"labelCut", copy:"labelCopy", paste:"labelPaste", remove:"labelRemove", rename:"labelRename"}, $scrollbar_width$$, $e1$$2$$, $e2$$2$$;
    $$$$63$$(function() {
      /msie/.test(navigator.userAgent.toLowerCase()) ? ($e1$$2$$ = $$$$63$$('\x3ctextarea cols\x3d"10" rows\x3d"2"\x3e\x3c/textarea\x3e').css({position:"absolute", top:-1E3, left:0}).appendTo("body"), $e2$$2$$ = $$$$63$$('\x3ctextarea cols\x3d"10" rows\x3d"2" style\x3d"overflow: hidden;"\x3e\x3c/textarea\x3e').css({position:"absolute", top:-1E3, left:0}).appendTo("body"), $scrollbar_width$$ = $e1$$2$$.width() - $e2$$2$$.width(), $e1$$2$$.add($e2$$2$$).remove()) : ($e1$$2$$ = $$$$63$$("\x3cdiv /\x3e").css({width:100, 
      height:100, overflow:"auto", position:"absolute", top:-1E3, left:0}).prependTo("body").append("\x3cdiv /\x3e").find("div").css({width:"100%", height:200}), $scrollbar_width$$ = 100 - $e1$$2$$.width(), $e1$$2$$.parent().remove());
    });
    var $_aKeyHandlerStack$$ = [], $_instance$$ = -1;
    $oj$$70$$.$__registerWidget$("oj.ojTree", $$$$63$$.oj.baseComponent, {widgetEventPrefix:"oj", defaultElement:"\x3cdiv\x3e", options:{dnd:{reorder:"disable"}, expandParents:!1, initExpanded:null, $initLoaded$:[], selection:[], selectionMode:"single", selectedParentCollapse:!1, selectedParentExpand:!0, selectPrevOnDelete:!1, data:null, emptyText:null, icons:!0, types:null, before:null, collapse:null, create:null, collapseAll:null, cut:null, dehover:null, remove:null, destroy:null, expand:null, 
    expandAll:null, hover:null, loaded:null, move:null, optionChange:null, paste:null, refresh:null, rename:null}, collapse:function($node$$123$$, $skipAnim$$) {
      var $dur$$ = ($skipAnim$$ = $skipAnim$$ || !1) ? 0 : this.$_animDuration$;
      $node$$123$$ = this.$_getNode$($node$$123$$);
      if (!$node$$123$$.length || -1 === $node$$123$$ || !$node$$123$$.hasClass($TreeUtils$$.$_OJ_EXPANDED$) || this.$_data$.$core$.locked || $node$$123$$.hasClass($TreeUtils$$.$_OJ_DISABLED$)) {
        return!1;
      }
      var $rslt$$ = this.$_emitEvent$({obj:$node$$123$$, func:"collapse"}, "before");
      if ("boolean" != typeof $rslt$$ || $rslt$$) {
        $node$$123$$.removeClass($TreeUtils$$.$_OJ_EXPANDED$).addClass($TreeUtils$$.$_OJ_COLLAPSED$).attr("aria-expanded", "false"), $$$$63$$($node$$123$$.children()[0]).removeClass($TreeUtils$$.$_OJ_SELECTED$).addClass("oj-default"), !$skipAnim$$ && $dur$$ ? this.$_slide$($node$$123$$, !0) : this.$_transitionEnd$($$$$63$$($node$$123$$.children("UL")[0]), $node$$123$$);
      }
    }, $_slide$:function($node$$124$$, $bSlideUp$$) {
      var $$ul$$2$$, $hNow$$, $hFinal$$;
      $$ul$$2$$ = $$$$63$$($node$$124$$.children("ul"));
      this.$_isSafari$ ? $$ul$$2$$[0].addEventListener("webkitTransitionEnd", this.$_proxyTransitionEndHandler$) : $$ul$$2$$[0].addEventListener("transitionend", this.$_proxyTransitionEndHandler$);
      $bSlideUp$$ ? ($hNow$$ = $$ul$$2$$[0].offsetHeight, $hFinal$$ = 0) : ($hNow$$ = 0, $hFinal$$ = this.$_getElemHeight$($$ul$$2$$[0]));
      $$ul$$2$$.css("max-height", $hNow$$ + "px");
      $$ul$$2$$.css("overflow", "hidden");
      $bSlideUp$$ || ($$ul$$2$$[0].style.display = "block");
      setTimeout(function() {
        $$ul$$2$$.addClass("oj-tree-transition");
        $$ul$$2$$.css("max-height", $hFinal$$ + "px");
      }, 20);
    }, $_getElemHeight$:function($el$$16$$) {
      var $parent$$49$$, $nextSib$$, $h$$7$$, $disp$$, $div$$11$$ = $$$$63$$("\x3cdiv style\x3d'position: absolute'\x3e");
      $parent$$49$$ = $el$$16$$.parentNode;
      $nextSib$$ = $el$$16$$.nextSibling;
      $parent$$49$$.removeChild($el$$16$$);
      $disp$$ = $el$$16$$.style.display;
      $el$$16$$.style.display = "block";
      $div$$11$$.append($el$$16$$);
      this.$_$container$[0].appendChild($div$$11$$[0]);
      $h$$7$$ = $el$$16$$.offsetHeight || $el$$16$$.scrollHeight;
      $el$$16$$.style.display = $disp$$;
      this.$_$container$[0].removeChild($div$$11$$[0]);
      $div$$11$$[0].removeChild($el$$16$$);
      $nextSib$$ ? $parent$$49$$.insertBefore($el$$16$$, $nextSib$$) : $parent$$49$$.appendChild($el$$16$$);
      return $h$$7$$ + 10;
    }, $_transitionEndHandler$:function($$ul$$3_e$$122$$) {
      $$ul$$3_e$$122$$ = $$$$63$$($$ul$$3_e$$122$$.target);
      var $node$$125$$ = $$ul$$3_e$$122$$.closest("li");
      this.$_isSafari$ ? $$ul$$3_e$$122$$[0].removeEventListener("webkitTransitionEnd", this.$_proxyTransitionEndHandler$) : $$ul$$3_e$$122$$[0].removeEventListener("transitionend", this.$_proxyTransitionEndHandler$);
      $$ul$$3_e$$122$$.removeClass("oj-tree-transition");
      this.$_transitionEnd$($$ul$$3_e$$122$$, $node$$125$$);
    }, $_transitionEnd$:function($$ul$$4$$, $node$$126$$) {
      $node$$126$$.hasClass($TreeUtils$$.$_OJ_COLLAPSED$) ? ($$ul$$4$$[0].style.display = "none", $$ul$$4$$.css("max-height", ""), this.$_emitEvent$({obj:$node$$126$$}, "collapse"), this.after_close($node$$126$$)) : ($$ul$$4$$[0].style.display = "block", $$ul$$4$$.css("max-height", ""), this.$_emitEvent$({obj:$node$$126$$}, "expand"));
    }, collapseAll:function($node$$127$$, $anim$$) {
      var $origTarg$$ = $node$$127$$ ? $node$$127$$ : -1, $_this$$1$$ = this;
      if (!this.$_data$.$core$.locked && (($node$$127$$ = $node$$127$$ ? this.$_getNode$($node$$127$$) : this.$_$container$) && -1 !== $origTarg$$ && ($origTarg$$ = $node$$127$$), $node$$127$$ && -1 !== $origTarg$$ || ($node$$127$$ = this.$_$container_ul$), !$node$$127$$.hasClass($TreeUtils$$.$_OJ_DISABLED$))) {
        var $subject$$;
        -1 !== $origTarg$$ && this.isExpanded($node$$127$$) && ($subject$$ = $node$$127$$[0]);
        var $objs$$ = $node$$127$$.find("li.oj-expanded");
        $objs$$.length && $objs$$.each(function() {
          $_this$$1$$.collapse(this, !$anim$$);
        });
        $subject$$ && (this.collapse($subject$$, !$anim$$), $objs$$.splice(0, 0, $subject$$));
        $objs$$.length && this.$_emitEvent$({obj:$objs$$, targ:$origTarg$$}, "collapseAll");
      }
    }, expand:function($node$$128$$, $skipAnim$$1$$) {
      this.$_expand$($node$$128$$, !1, $skipAnim$$1$$);
    }, expanded:function($nodes$$7$$, $skipAnim$$2$$) {
      var $exlr$$, $exlen$$, $_this$$2$$ = this;
      if ($nodes$$7$$ && "array" === $$$$63$$.type($nodes$$7$$)) {
        if (this.$_data$.$core$.locked) {
          return null;
        }
        $exlen$$ = $nodes$$7$$.length;
        $$$$63$$.each($nodes$$7$$, function($i$$470$$, $val$$79$$) {
          $_this$$2$$.$_expand$($val$$79$$, !1, $skipAnim$$2$$);
        });
        return null;
      }
      $nodes$$7$$ = this.$_$container_ul$.find("li.oj-expanded");
      $exlen$$ = $nodes$$7$$.length;
      $exlr$$ = [];
      for (var $n$$29$$ = 0;$n$$29$$ < $exlen$$;$n$$29$$++) {
        $exlr$$.push($nodes$$7$$[$n$$29$$]);
      }
      return $$$$63$$($exlr$$);
    }, expandAll:function($node$$129$$, $anim$$1$$) {
      this.$_expandAll$($node$$129$$, $anim$$1$$);
    }, toggleExpand:function($node$$130$$, $skipAnim$$3$$) {
      if (($node$$130$$ = this.$_getNode$($node$$130$$)) && $node$$130$$.length && -1 !== $node$$130$$ && !$node$$130$$.hasClass($TreeUtils$$.$_OJ_DISABLED$) && !this.$_data$.$core$.locked) {
        if ($node$$130$$.hasClass($TreeUtils$$.$_OJ_COLLAPSED$)) {
          return this.expand($node$$130$$, $skipAnim$$3$$);
        }
        if ($node$$130$$.hasClass($TreeUtils$$.$_OJ_EXPANDED$)) {
          return this.collapse($node$$130$$, $skipAnim$$3$$);
        }
      }
    }, deselect:function($node$$131$$) {
      var $prevSelections$$ = this.options.selection.slice(0);
      this.$_deselect$($node$$131$$);
      this.$_fireOptionChangeEvent$("selection", $prevSelections$$, null, null);
    }, deselectAll:function($context$$182$$) {
      if (!this.$_data$.$core$.locked) {
        var $prevSelections$$1$$ = this.options.selection.slice(0);
        this.$_deselectAll$($context$$182$$);
        this.$_fireOptionChangeEvent$("selection", $prevSelections$$1$$, null, null);
      }
    }, select:function($node$$132$$) {
      this.$_select$($node$$132$$, !0);
    }, toggleSelect:function($node$$133$$) {
      $node$$133$$ = this.$_getNode$($node$$133$$);
      if (!$node$$133$$.length || $node$$133$$.hasClass($TreeUtils$$.$_OJ_DISABLED$) || this.$_data$.$core$.locked) {
        return!1;
      }
      this.isSelected($node$$133$$) ? this.deselect($node$$133$$) : this.$_select$($node$$133$$, !0);
      return!0;
    }, isCollapsed:function($node$$134$$) {
      return($node$$134$$ = this.$_getNode$($node$$134$$)) && -1 !== $node$$134$$ && $node$$134$$.hasClass($TreeUtils$$.$_OJ_COLLAPSED$);
    }, isExpanded:function($node$$135$$) {
      return($node$$135$$ = this.$_getNode$($node$$135$$)) && -1 !== $node$$135$$ && $node$$135$$.hasClass($TreeUtils$$.$_OJ_EXPANDED$);
    }, isLeaf:function($node$$136$$) {
      return this.$_isLeaf$($node$$136$$);
    }, isSelected:function($n$$30_node$$137$$) {
      $n$$30_node$$137$$ = this.$_getNode$($n$$30_node$$137$$);
      var $r$$2$$ = !1;
      $n$$30_node$$137$$ && $n$$30_node$$137$$.length && this.$_data$.ui.selected && ($r$$2$$ = 0 <= this.$_data$.ui.selected.index($n$$30_node$$137$$));
      return $r$$2$$;
    }, create:function($refnode$$, $position$$41$$, $data$$171$$) {
      var $node$$138$$, $ar$$1$$, $i$$471$$;
      $ar$$1$$ = $$$$63$$.isArray($data$$171$$);
      if (!$ar$$1$$ || 1 == $data$$171$$.length) {
        return $node$$138$$ = this.$_createNode$($refnode$$, $position$$41$$, $ar$$1$$ ? $data$$171$$[0] : $data$$171$$), this.$_getDndContext$().$_dndFinishSelection$($node$$138$$), $node$$138$$;
      }
      $ar$$1$$ = [];
      if ("before" != $position$$41$$) {
        for ($i$$471$$ = $data$$171$$.length - 1;0 <= $i$$471$$;$i$$471$$--) {
          $node$$138$$ = this.$_createNode$($refnode$$, $position$$41$$, $data$$171$$[$i$$471$$]), $ar$$1$$.unshift($node$$138$$[0]), this.$_getDndContext$().$_dndFinishSelection$($node$$138$$);
        }
      } else {
        for ($i$$471$$ = 0;$i$$471$$ < $data$$171$$.length;$i$$471$$++) {
          $node$$138$$ = this.$_createNode$($refnode$$, $position$$41$$, $data$$171$$[$i$$471$$]), $ar$$1$$.push($node$$138$$[0]), this.$_getDndContext$().$_dndFinishSelection$($node$$138$$);
        }
      }
      return $$$$63$$($ar$$1$$);
    }, remove:function($node$$139$$) {
      $node$$139$$ = this.$_getNode$($node$$139$$);
      if (!$node$$139$$.length || $node$$139$$.hasClass($TreeUtils$$.$_OJ_DISABLED$) || this.$_data$.$core$.locked) {
        return!1;
      }
      var $p$$8_rslt$$1$$ = this.$_emitEvent$({obj:$node$$139$$, func:"remove"}, "before");
      if ("boolean" == typeof $p$$8_rslt$$1$$ && !$p$$8_rslt$$1$$) {
        return!1;
      }
      this.$__rollback$();
      var $p$$8_rslt$$1$$ = this.$_getParent$($node$$139$$), $prev$$5$$ = $$$$63$$([]), $t$$3$$ = this, $sib$$ = this.$_getPrev$($node$$139$$);
      $node$$139$$.each(function() {
        $prev$$5$$ = $prev$$5$$.add($t$$3$$.$_getPrev$(this));
      });
      $node$$139$$ = $node$$139$$.detach();
      -1 !== $p$$8_rslt$$1$$ && 0 === $p$$8_rslt$$1$$.find("\x3e ul \x3e li").length && $p$$8_rslt$$1$$.removeClass("oj-expanded oj-collapsed").addClass("oj-tree-leaf").removeAttr("aria-expanded");
      this.$_cleanNode$($p$$8_rslt$$1$$);
      this.$_emitEvent$({obj:$node$$139$$, prev:$sib$$, parent:$p$$8_rslt$$1$$}, "remove");
      return $node$$139$$;
    }, getText:function($node$$140$$) {
      $node$$140$$ = this.$_getNode$($node$$140$$);
      if (!$node$$140$$.length) {
        return!1;
      }
      $node$$140$$ = $node$$140$$.children("a:eq(0)");
      $node$$140$$ = $node$$140$$.find("span:eq(0)");
      return $node$$140$$[0].textContent;
    }, rename:function($node$$141$$, $text$$25$$) {
      this.$_renameNode$($node$$141$$, $text$$25$$);
    }, hover:function($node$$142$$) {
      if (!this.$_data$.menu.$activenode$ && ($node$$142$$ = this.$_getNode$($node$$142$$), $node$$142$$.length && !$node$$142$$.hasClass($TreeUtils$$.$_OJ_DISABLED$) && !this.$_data$.$core$.locked && !$node$$142$$.hasClass($TreeUtils$$.$_OJ_HOVER$))) {
        var $rslt$$2$$ = this.$_emitEvent$({obj:$node$$142$$, func:"hover"}, "before");
        if ("boolean" != typeof $rslt$$2$$ || $rslt$$2$$) {
          $node$$142$$.hasClass($TreeUtils$$.$_OJ_HOVER$) || this.dehover(), this.$_data$.ui.$hovered$ = $node$$142$$.children("a").addClass($TreeUtils$$.$_OJ_HOVER$).parent(), this.$_$container_ul$.attr("aria-activedescendant", this.$_data$.ui.$hovered$.attr("id")), this.$_fix_scroll$($node$$142$$), this.$_emitEvent$({obj:$node$$142$$}, "hover");
        }
      }
    }, dehover:function() {
      if (!this.$_data$.menu.$activenode$) {
        var $obj$$72$$ = this.$_data$.ui.$hovered$, $p$$9$$;
        if ($obj$$72$$ && $obj$$72$$.length && !$obj$$72$$.hasClass($TreeUtils$$.$_OJ_DISABLED$) && !this.$_data$.$core$.locked) {
          $p$$9$$ = $obj$$72$$.find("a.oj-hover");
          if (!$p$$9$$.length && ($p$$9$$ = this.$_$container_ul$.find("a.oj-hover"), !$p$$9$$.length)) {
            return;
          }
          $p$$9$$.removeClass($TreeUtils$$.$_OJ_HOVER$).parent();
          this.$_$container_ul$.removeAttr("aria-activedescendant");
          this.$_data$.ui.$hovered$ = null;
          void 0 != $obj$$72$$.attr("id") && this.$_emitEvent$({obj:$obj$$72$$}, "dehover");
        }
      }
    }, getPath:function($node$$143$$, $idMode$$) {
      var $p$$10$$ = [], $_this$$3$$ = this;
      $node$$143$$ = this.$_getNode$($node$$143$$);
      if (-1 === $node$$143$$ || !$node$$143$$ || !$node$$143$$.length) {
        return!1;
      }
      $node$$143$$.parentsUntil(".oj-tree", "li").each(function() {
        $p$$10$$.push($idMode$$ ? this.id : $_this$$3$$.getText(this));
      });
      $p$$10$$.reverse();
      $p$$10$$.push($idMode$$ ? $node$$143$$.attr("id") : this.getText($node$$143$$));
      return $p$$10$$;
    }, getRoot:function() {
      return this.$_$container$.children("ul:eq(0)");
    }, refresh:function($node$$144$$) {
      this._super();
      this.$_data$.$core$.locked || this.$_refresh$($node$$144$$ ? $node$$144$$ : -1);
    }, move:function($node$$145$$, $refnode$$1$$, $position$$42$$, $iscopy$$) {
      this.$_moveNode$($node$$145$$, $refnode$$1$$, $position$$42$$, $iscopy$$);
    }, getType:function($node$$146$$) {
      return this.$_getType$($node$$146$$);
    }, setType:function($node$$147$$, $str$$23$$) {
      return this.$_setType$($node$$147$$, $str$$23$$);
    }, getNodeBySubId:function($locator$$61$$) {
      return $locator$$61$$ ? this.$_processSubId$($locator$$61$$) : this.element ? this.element[0] : null;
    }, getSubIdByNode:function($node$$148$$) {
      return this.$_getSubIdFromNodeElem$($node$$148$$);
    }, getContextByNode:function($node$$149$$) {
      var $bNode$$2$$, $bTree$$;
      $node$$149$$ = this.$_getNode$(null == $node$$149$$ || void 0 == $node$$149$$ ? 0 : $node$$149$$);
      $bNode$$2$$ = -1 != $node$$149$$ && 0 < $node$$149$$.length;
      $bTree$$ = -1 == $node$$149$$;
      return $bNode$$2$$ || $bTree$$ ? {subId:$bNode$$2$$ ? "oj-tree-node" : "oj-tree", item:$bNode$$2$$ ? $node$$149$$[0] : null, node:$bNode$$2$$ ? $node$$149$$ : !1, leaf:$bNode$$2$$ ? this.$_isLeaf$($node$$149$$) : !1} : null;
    }, getParent:function($l$$11_node$$150$$) {
      return($l$$11_node$$150$$ = this.$_getParent$($l$$11_node$$150$$)) && 0 < $l$$11_node$$150$$.length ? $l$$11_node$$150$$ : null;
    }, getPrevSibling:function($l$$12_node$$151$$) {
      return($l$$12_node$$151$$ = this.$_getPrev$($l$$12_node$$151$$, !0)) && 0 < $l$$12_node$$151$$.length ? $l$$12_node$$151$$ : null;
    }, getNextSibling:function($l$$13_node$$152$$) {
      return($l$$13_node$$152$$ = this.$_getNext$($l$$13_node$$152$$, !0)) && 0 < $l$$13_node$$152$$.length ? $l$$13_node$$152$$ : null;
    }, getChildren:function($c$$53_node$$153$$) {
      return($c$$53_node$$153$$ = ($c$$53_node$$153$$ = this.$_getChildren$($c$$53_node$$153$$ ? $c$$53_node$$153$$ : -1)) && $c$$53_node$$153$$.length ? $c$$53_node$$153$$.not("." + $TreeUtils$$.$_OJ_TEMPNODE$) : $c$$53_node$$153$$) && 0 < $c$$53_node$$153$$.length ? $c$$53_node$$153$$ : null;
    }, scrollIntoView:function($node$$154_obj$$73$$, $alignTo_toTop$$, $setActive$$) {
      $node$$154_obj$$73$$ ? ($node$$154_obj$$73$$ = $node$$154_obj$$73$$.node, $node$$154_obj$$73$$ = this.$_getNode$($node$$154_obj$$73$$)) : $node$$154_obj$$73$$ = -1;
      -1 == $node$$154_obj$$73$$ && ($node$$154_obj$$73$$ = this.$_$container$.find("\x3e ul \x3e li:first-child"));
      if ($node$$154_obj$$73$$ && $node$$154_obj$$73$$.length) {
        return $alignTo_toTop$$ = "top" == $alignTo_toTop$$, $setActive$$ && (this.$_$container_ul$.focus(), this.hover($node$$154_obj$$73$$)), $node$$154_obj$$73$$[0].scrollIntoView($alignTo_toTop$$), this;
      }
    }, _ComponentCreate:function() {
      this._super();
      this.$_index$ = this.$_newIndex$();
      this.$_elemId$ = this.element.attr("id");
      void 0 === this.$_elemId$ && (this.$_elemId$ = "oj-tree-" + this.$_getIndex$(), this.element.attr("id", this.$_elemId$));
      this.$_$container$ = this.element;
      this.$_$container_ul$ = null;
      this.$_data$ = {};
      this.$_tds$ = null;
      this.$_isRtl$ = "rtl" === this.$_GetReadingDirection$();
      this.$_isTouch$ = $oj$$70$$.$DomUtils$.$isTouchSupported$();
      this.$_initTree$();
      if (this.$_animDuration$ = this.$_getAnimDuration$()) {
        this.$_isSafari$ = $oj$$70$$.$AgentUtils$.$getAgentInfo$().browser === $oj$$70$$.$AgentUtils$.$BROWSER$.$SAFARI$, this.$_proxyTransitionEndHandler$ = $$$$63$$.proxy(this.$_transitionEndHandler$, this);
      }
      this.$_start$();
    }, _destroy:function() {
      this.$_clearTree$();
      this.$_data$.html.$markup_ul$ && (this.$_$container$.append(this.$_data$.html.$markup_ul$), this.$_data$.html.$markup_div$.remove(), this.$_data$.html.$markup_div$ = !1, this.$_data$.html.$useExistingMarkup$ = !1);
      this.$_data$.$ds$.type = 0;
      this._super();
    }, _setOption:function($key$$197$$, $newval$$1$$, $flags$$53$$) {
      var $val$$80$$;
      if ("selection" === $key$$197$$) {
        $newval$$1$$ = "string" == typeof $newval$$1$$ ? [$newval$$1$$] : $newval$$1$$ && $newval$$1$$.length ? $newval$$1$$ : [], this.$_data$.$core$.$suppressSelectEvent$ = !0, this.$_handleSelectionOptionChange$($newval$$1$$), this.$_data$.$core$.$suppressSelectEvent$ = !1, $newval$$1$$ = this.$_getSelected$();
      } else {
        if ("selectionMode" === $key$$197$$) {
          "none" === $newval$$1$$ ? $val$$80$$ = 0 : "single" === $newval$$1$$ ? $val$$80$$ = 1 : "multiple" === $newval$$1$$ ? $val$$80$$ = -1 : ($val$$80$$ = 0, $newval$$1$$ = "none"), $val$$80$$ != this.$_data$.$core$.$selectMode$ && (this.$_data$.$core$.$selectMode$ = $val$$80$$);
        } else {
          if ("icons" === $key$$197$$) {
            "boolean" == $$$$63$$.type($newval$$1$$) && $newval$$1$$ != this.$_data$.$themes$.icons && ((this.$_data$.$themes$.icons = $newval$$1$$) ? this.$_showIcons$() : this.$_hideIcons$());
          } else {
            if ("contextMenu" === $key$$197$$) {
              this.$_clearMenu$(), $newval$$1$$ && this.$_initMenu$($newval$$1$$);
            } else {
              if ("disabled" === $key$$197$$) {
                this.$_handleDisabledChanged$($newval$$1$$);
              } else {
                if ("data" === $key$$197$$) {
                  this._super($key$$197$$, $newval$$1$$, $flags$$53$$);
                  this.$_initDSOpts$();
                  this.$_initDataSource$();
                  this.$_initExpandedOpts$();
                  this.$_loadNodes$();
                  return;
                }
                if ("dnd" === $key$$197$$) {
                  this._super($key$$197$$, $newval$$1$$, $flags$$53$$);
                  this.$_getDndContext$().$handleDnDOptionChange$();
                  return;
                }
                "emptyText" == $key$$197$$ && ($newval$$1$$ = this.$_escapeHtml$($newval$$1$$));
              }
            }
          }
        }
      }
      this._super($key$$197$$, $newval$$1$$, $flags$$53$$);
    }, $_CompareOptionValues$:function($option$$42$$, $value1$$10$$, $value2$$9$$) {
      return "selection" === $option$$42$$ ? this.$_compareSelectionValues$($value1$$10$$, $value2$$9$$) : this._superApply(arguments);
    }, $_compareSelectionValues$:function($value1$$11$$, $value2$$10$$) {
      var $i$$472$$, $j$$58$$, $id$$69$$, $len$$22$$, $len2$$, $bDiff$$ = !1, $bInList$$ = !1;
      $len$$22$$ = $value1$$11$$ && $value1$$11$$.length ? $value1$$11$$.length : 0;
      $len2$$ = $value2$$10$$ && $value2$$10$$.length ? $value2$$10$$.length : 0;
      if ($len$$22$$ !== $len2$$) {
        $bDiff$$ = !0;
      } else {
        if (0 == $len$$22$$ && 0 === $len2$$) {
          $bDiff$$ = !1;
        } else {
          for ($i$$472$$ = 0;$i$$472$$ < $len$$22$$;$i$$472$$++) {
            $id$$69$$ = $$$$63$$($value1$$11$$[$i$$472$$]).attr("id");
            $bInList$$ = !1;
            for ($j$$58$$ = 0;$j$$58$$ < $len2$$;$j$$58$$++) {
              if ($id$$69$$ == $$$$63$$($value2$$10$$[$j$$58$$]).attr("id")) {
                $bInList$$ = !0;
                break;
              }
            }
            if (!$bInList$$) {
              $bDiff$$ = !0;
              break;
            }
          }
        }
      }
      return!$bDiff$$;
    }, $_clearTree$:function() {
      this.$_TreeDndContext$ && (this.$_TreeDndContext$.$_closedown$(), this.$_TreeDndContext$ = null);
      var $n$$31$$ = this.$_getIndex$();
      this.$_$container$.unbind(".oj-tree").undelegate(".oj-tree").removeData("oj-tree-instance-id").find("[class^\x3d'oj-tree']").addBack().attr("class", function() {
        return this.className.replace(/oj-tree[^ ]*|$/ig, "");
      });
      var $cl$$ = this.$_$container$.attr("class"), $cl$$ = $cl$$.trim();
      0 === $cl$$.length && this.$_$container$.removeAttr("class");
      $_removeKeyFilter$$(this.$_$container_ul$);
      $$$$63$$(document).unbind(".oj-tree-" + $n$$31$$).undelegate(".oj-tree-" + $n$$31$$);
      this.$_$container_ul$.remove();
      this.$_$container_ul$ = null;
    }, $_getNode$:function($obj$$74$$, $allowMultiple$$) {
      if ("undefined" === typeof $obj$$74$$ || null === $obj$$74$$) {
        return $allowMultiple$$ ? this.$_data$.ui.selected : this.$_data$.ui.$lastSelected$;
      }
      var $$obj$$1$$ = $$$$63$$($obj$$74$$, this.$_$container$);
      if ($$obj$$1$$.is(".oj-tree") || -1 === $obj$$74$$) {
        return-1;
      }
      $$obj$$1$$ = $$obj$$1$$.closest("li", this.$_$container$);
      return $$obj$$1$$.length ? $$obj$$1$$ : !1;
    }, $_getPrev$:function($obj$$75$$, $strict$$) {
      $obj$$75$$ = this.$_getNode$($obj$$75$$);
      if (-1 === $obj$$75$$) {
        return this.$_$container$.find("\x3e ul \x3e li:last-child");
      }
      if (!$obj$$75$$.length) {
        return!1;
      }
      if ($strict$$) {
        return 0 < $obj$$75$$.prevAll("li").length ? $obj$$75$$.prevAll("li:eq(0)") : !1;
      }
      if ($obj$$75$$.prev("li").length) {
        for ($obj$$75$$ = $obj$$75$$.prev("li").eq(0);$obj$$75$$.hasClass($TreeUtils$$.$_OJ_EXPANDED$);) {
          $obj$$75$$ = $obj$$75$$.children("ul:eq(0)").children("li:last");
        }
        return $obj$$75$$;
      }
      var $o$$13$$ = $obj$$75$$.parentsUntil(".oj-tree", "li:eq(0)");
      return $o$$13$$.length ? $o$$13$$ : !1;
    }, $_getNext$:function($obj$$76$$, $strict$$1$$) {
      $obj$$76$$ = this.$_getNode$($obj$$76$$);
      return-1 === $obj$$76$$ ? this.$_$container$.find("\x3e ul \x3e li:first-child") : $obj$$76$$.length ? $strict$$1$$ ? 0 < $obj$$76$$.nextAll("li").size() ? $obj$$76$$.nextAll("li:eq(0)") : !1 : $obj$$76$$.hasClass($TreeUtils$$.$_OJ_EXPANDED$) ? $obj$$76$$.find("li:eq(0)") : 0 < $obj$$76$$.nextAll("li").size() ? $obj$$76$$.nextAll("li:eq(0)") : $obj$$76$$.parentsUntil(".oj-tree", "li").next("li").eq(0) : !1;
    }, $_getParent$:function($o$$14_obj$$77$$) {
      $o$$14_obj$$77$$ = this.$_getNode$($o$$14_obj$$77$$);
      if (-1 == $o$$14_obj$$77$$ || !$o$$14_obj$$77$$.length) {
        return!1;
      }
      $o$$14_obj$$77$$ = $o$$14_obj$$77$$.parentsUntil(".oj-tree", "li:eq(0)");
      return $o$$14_obj$$77$$.length ? $o$$14_obj$$77$$ : -1;
    }, $_getChildren$:function($obj$$78$$) {
      $obj$$78$$ = this.$_getNode$($obj$$78$$);
      return-1 === $obj$$78$$ ? this.$_$container$.children("ul:eq(0)").children("li") : $obj$$78$$.length ? $obj$$78$$.children("ul:eq(0)").children("li") : !1;
    }, $_isLeaf$:function($node$$155$$) {
      return($node$$155$$ = this.$_getNode$($node$$155$$)) && -1 !== $node$$155$$ && $node$$155$$.hasClass("oj-tree-leaf");
    }, $_getNodeElem$:function($el$$17_node$$156$$) {
      $el$$17_node$$156$$ = this.$_$container_ul$.find($el$$17_node$$156$$);
      var $ret$$74$$ = !1;
      $el$$17_node$$156$$ && $el$$17_node$$156$$.length && 0 < $el$$17_node$$156$$.length && $$$$63$$($el$$17_node$$156$$).is("li") && ($ret$$74$$ = $el$$17_node$$156$$);
      return $ret$$74$$;
    }, $_reference$:function($node$$157$$, $o$$15$$) {
      var $ctor$$2_div$$12$$ = $node$$157$$.parents("div").eq(0);
      ($ctor$$2_div$$12$$ = $oj$$70$$.Components.$getWidgetConstructor$($ctor$$2_div$$12$$)) && $o$$15$$ && $ctor$$2_div$$12$$("getCI", $o$$15$$);
      return this;
    }, getCI:function($o$$16$$) {
      $o$$16$$.$ot$ = this;
    }, $_applyDefaults$:function($to$$4$$, $from$$4$$) {
      void 0 != $to$$4$$ && void 0 != $from$$4$$ && $$$$63$$.each($from$$4$$, function($prop$$85$$, $val$$81$$) {
        void 0 == $to$$4$$[$prop$$85$$] && ($to$$4$$[$prop$$85$$] = $val$$81$$);
      });
    }, $_handleDisabledChanged$:function($newval$$2$$) {
      var $curState$$;
      "undefined" !== typeof $newval$$2$$ && (($curState$$ = this.$_$container_ul$.hasClass($TreeUtils$$.$_OJ_DISABLED$)) || ($curState$$ = !1), $curState$$ != $newval$$2$$ && ($newval$$2$$ ? (this.$_$container_ul$.addClass($TreeUtils$$.$_OJ_DISABLED$), this.$_$container_ul$.prop("disabled", !0)) : (this.$_$container_ul$.removeClass($TreeUtils$$.$_OJ_DISABLED$), this.$_$container_ul$.prop("disabled", !1)), this.$_treeDisable$($newval$$2$$)));
    }, $_treeDisable$:function($lstate$$) {
      $lstate$$ ? (this.$_data$.$core$.locked = !0, this.$_data$.ui.opacity = this.$_$container$.children("ul").css("opacity"), this.$_$container_ul$.addClass($TreeUtils$$.$_OJ_DISABLED$).css("opacity", "0.9")) : (this.$_data$.$core$.locked = !1, this.$_$container_ul$.removeClass($TreeUtils$$.$_OJ_DISABLED$).css("opacity", this.$_data$.ui.opacity));
    }, $_isTreeDisabled$:function() {
      return this.$_data$.$core$.locked;
    }, $_handleSelectionOptionChange$:function($aSelected_newSels$$) {
      var $sels$$ = $aSelected_newSels$$.slice(0), $cur$$2$$ = [], $_this$$5$$ = this, $$elem$$4$$, $id$$70$$, $inList$$, $len$$23$$;
      $$$$63$$.grep($sels$$, function($node$$158$$, $i$$473$$) {
        if ($$elem$$4$$ = $_this$$5$$.$_getNodeElem$($node$$158$$)) {
          $cur$$2$$.push($$elem$$4$$), $sels$$[$i$$473$$] = $$elem$$4$$[0];
        } else {
          return!1;
        }
        return!0;
      });
      $aSelected_newSels$$ = this.$_getSelected$();
      $$$$63$$.each($aSelected_newSels$$, function($i$$474$$, $node$$159$$) {
        $len$$23$$ = $cur$$2$$.length;
        $id$$70$$ = $$$$63$$($node$$159$$).attr("id");
        $inList$$ = !1;
        for ($i$$474$$ = 0;$i$$474$$ < $len$$23$$;$i$$474$$++) {
          if ($id$$70$$ == $cur$$2$$[$i$$474$$].attr("id")) {
            $inList$$ = !0;
            break;
          }
        }
        $inList$$ || $_this$$5$$.$_deselect$($node$$159$$);
      });
      this.$_setSelected$($cur$$2$$, null);
    }, $_prepare_move$:function($o$$17$$, $r$$3$$, $pos$$15$$, $cb$$2$$, $is_cb$$) {
      var $p$$11$$ = {};
      $r$$3$$ = -1 !== $r$$3$$ && $r$$3$$ ? this.$_getNode$($r$$3$$) : -1;
      this.$_reference$($o$$17$$, $p$$11$$);
      $p$$11$$.$rt$ = this;
      $p$$11$$.$o$ = $p$$11$$.$ot$.$_getNode$($o$$17$$);
      $p$$11$$.$r$ = $r$$3$$;
      $p$$11$$.$p$ = "undefined" === typeof $pos$$15$$ || !1 === $pos$$15$$ ? "last" : $pos$$15$$;
      if (!$is_cb$$ && this.$_data$.$core$.$prepMoveBlk$.$o$ && this.$_data$.$core$.$prepMoveBlk$.$o$[0] === $p$$11$$.$o$[0] && this.$_data$.$core$.$prepMoveBlk$.$r$[0] === $p$$11$$.$r$[0] && this.$_data$.$core$.$prepMoveBlk$.$p$ === $p$$11$$.$p$) {
        $cb$$2$$ && $cb$$2$$.call(this, this.$_data$.$core$.$prepMoveBlk$);
      } else {
        if (-1 !== $p$$11$$.$r$ && $p$$11$$.$r$) {
          if (!/^(before|after)$/.test($p$$11$$.$p$) && !this.$_is_loaded$($p$$11$$.$r$)) {
            return this.$_load_node$($p$$11$$.$r$, function() {
              this.$_prepare_move$($o$$17$$, $r$$3$$, $pos$$15$$, $cb$$2$$, !0);
            });
          }
          switch($p$$11$$.$p$) {
            case "before":
              $p$$11$$.$cp$ = $p$$11$$.$r$.index();
              $p$$11$$.$cr$ = $p$$11$$.$rt$.$_getParent$($p$$11$$.$r$);
              break;
            case "after":
              $p$$11$$.$cp$ = $p$$11$$.$r$.index() + 1;
              $p$$11$$.$cr$ = $p$$11$$.$rt$.$_getParent$($p$$11$$.$r$);
              break;
            case "inside":
            ;
            case "first":
              $p$$11$$.$cp$ = 0;
              $p$$11$$.$cr$ = $p$$11$$.$r$;
              break;
            case "last":
              $p$$11$$.$cp$ = $p$$11$$.$r$.find(" \x3e ul \x3e li").length;
              $p$$11$$.$cr$ = $p$$11$$.$r$;
              break;
            default:
              $p$$11$$.$cp$ = $p$$11$$.$p$, $p$$11$$.$cr$ = $p$$11$$.$r$;
          }
        } else {
          switch($p$$11$$.$cr$ = -1, $p$$11$$.$p$) {
            case "first":
            ;
            case "before":
            ;
            case "inside":
              $p$$11$$.$cp$ = 0;
              break;
            case "after":
            ;
            case "last":
              $p$$11$$.$cp$ = $p$$11$$.$rt$.$_$container$.find(" \x3e ul \x3e li").length;
              break;
            default:
              $p$$11$$.$cp$ = $p$$11$$.$p$;
          }
        }
        $p$$11$$.$np$ = -1 == $p$$11$$.$cr$ ? $p$$11$$.$rt$.$_$container$ : $p$$11$$.$cr$;
        $p$$11$$.$op$ = $p$$11$$.$ot$.$_getParent$($p$$11$$.$o$);
        $p$$11$$.$cop$ = $p$$11$$.$o$.index();
        -1 === $p$$11$$.$op$ && ($p$$11$$.$op$ = $p$$11$$.$ot$ ? $p$$11$$.$ot$.$_$container$ : this.$_$container$);
        !/^(before|after)$/.test($p$$11$$.$p$) && $p$$11$$.$op$ && $p$$11$$.$np$ && $p$$11$$.$op$[0] === $p$$11$$.$np$[0] && $p$$11$$.$o$.index() < $p$$11$$.$cp$ && $p$$11$$.$cp$++;
        $p$$11$$.$or$ = $p$$11$$.$np$.find(" \x3e ul \x3e li:nth-child(" + ($p$$11$$.$cp$ + 1) + ")");
        this.$_data$.$core$.$prepMoveBlk$ = $p$$11$$;
        $cb$$2$$ && $cb$$2$$.call(this, this.$_data$.$core$.$prepMoveBlk$, "prepare_move");
      }
    }, $_checkMove$:function() {
      var $obj$$79$$ = this.$_data$.$core$.$prepMoveBlk$, $ret$$75$$ = !0, $r$$4$$;
      $r$$4$$ = -1 === $obj$$79$$.$r$ ? this.$_$container$ : $obj$$79$$.$r$;
      if (!$obj$$79$$ || !$obj$$79$$.$o$ || $obj$$79$$.$or$[0] === $obj$$79$$.$o$[0] || !$obj$$79$$.$r$) {
        return!1;
      }
      if (!$obj$$79$$.$cy$) {
        if ($obj$$79$$.$op$ && $obj$$79$$.$np$ && $obj$$79$$.$op$[0] === $obj$$79$$.$np$[0] && $obj$$79$$.$cp$ - 1 === $obj$$79$$.$o$.index()) {
          return!1;
        }
        $obj$$79$$.$o$.each(function() {
          if (-1 !== $r$$4$$.parentsUntil(".oj-tree", "li").addBack().index(this)) {
            return $ret$$75$$ = !1;
          }
        });
      }
      return $ret$$75$$;
    }, $_renameNode$:function($node$$160$$, $text$$26$$) {
      var $t$$4$$;
      $node$$160$$ = this.$_getNode$($node$$160$$);
      this.$__rollback$();
      $t$$4$$ = this.getText($node$$160$$);
      if ($node$$160$$ && $node$$160$$.length) {
        var $rslt$$3$$ = this.$_emitEvent$({obj:$node$$160$$, func:"rename", title:$text$$26$$, prevTitle:$t$$4$$}, "before");
        if ("boolean" == typeof $rslt$$3$$ && !$rslt$$3$$) {
          return;
        }
      }
      $node$$160$$ && $node$$160$$.length && this.$_set_text$.apply(this, Array.prototype.slice.call(arguments)) && this.$_emitEvent$({obj:$node$$160$$, title:$text$$26$$, prevTitle:$t$$4$$}, "rename");
    }, $_moveNode$:function($obj$$80$$, $d$$9_o$$18_ref$$3$$, $position$$43$$, $is_copy$$, $is_prepared$$, $skip_check$$) {
      $is_prepared$$ || ($obj$$80$$ = this.$_getNode$($obj$$80$$));
      if (!($obj$$80$$.hasClass && $obj$$80$$.hasClass($TreeUtils$$.$_OJ_DISABLED$) || this.$_data$.$core$.locked)) {
        if (!$is_prepared$$) {
          return this.$_prepare_move$($obj$$80$$, $d$$9_o$$18_ref$$3$$, $position$$43$$, function($p$$12$$) {
            $p$$12$$.$ot$ === $p$$12$$.$rt$ || $p$$12$$.$cy$ || $p$$12$$.$ot$.deselect($p$$12$$.$o$);
            this.$_moveNode$($p$$12$$, !1, !1, $is_copy$$, !0, $skip_check$$);
          });
        }
        $is_copy$$ && (this.$_data$.$core$.$prepMoveBlk$.$cy$ = !0);
        if (!$skip_check$$ && !this.$_checkMove$()) {
          return!1;
        }
        this.$__rollback$();
        $d$$9_o$$18_ref$$3$$ = !1;
        $is_copy$$ ? ($d$$9_o$$18_ref$$3$$ = $obj$$80$$.$o$.clone(!0), $d$$9_o$$18_ref$$3$$.find("*[id]").addBack().each(function() {
          this.id && (this.id = "copy_" + this.id);
        })) : $d$$9_o$$18_ref$$3$$ = $obj$$80$$.$o$;
        $obj$$80$$.$or$.length ? $obj$$80$$.$or$.before($d$$9_o$$18_ref$$3$$) : ($obj$$80$$.$np$.children("ul").length || $$$$63$$("\x3cul /\x3e").appendTo($obj$$80$$.$np$), $obj$$80$$.$np$.children("ul:eq(0)").append($d$$9_o$$18_ref$$3$$));
        try {
          $obj$$80$$.$ot$.$_cleanNode$($obj$$80$$.$op$), $obj$$80$$.$rt$.$_cleanNode$($obj$$80$$.$np$), $obj$$80$$.$op$.find("\x3e ul \x3e li").length || $obj$$80$$.$op$.removeClass("oj-expanded oj-collapsed").removeAttr("aria-expanded").addClass("oj-tree-leaf").children("ul").remove();
        } catch ($e$$123$$) {
        }
        $is_copy$$ && (this.$_data$.$core$.$prepMoveBlk$.$cy$ = !0, this.$_data$.$core$.$prepMoveBlk$.$oc$ = $d$$9_o$$18_ref$$3$$);
        $d$$9_o$$18_ref$$3$$ = $$$$63$$.extend(!0, {}, this.$_data$.$core$.$prepMoveBlk$);
        $d$$9_o$$18_ref$$3$$.obj = $obj$$80$$.$o$;
        this.$_emitEvent$($d$$9_o$$18_ref$$3$$, "move");
        return this.$_data$.$core$.$prepMoveBlk$;
      }
    }, $_getMoveBlk$:function() {
      return this.$_data$.$crrm$.$prepMoveBlk$;
    }, $_getType$:function($node$$161$$) {
      var $n$$32$$ = null;
      this.options.types && ($n$$32$$ = this.$_getNode$($node$$161$$));
      return $n$$32$$ && $n$$32$$.length ? $n$$32$$.attr(this.options.types.attr) || "default" : !1;
    }, $_setType$:function($node$$162$$, $str$$24$$) {
      var $s$$12_types$$ = this.options.types, $tattr$$, $ret$$76$$ = !1;
      $node$$162$$ = this.$_getNode$($node$$162$$);
      $s$$12_types$$ && $node$$162$$ && -1 != $node$$162$$ && $node$$162$$.length && $str$$24$$ && ($tattr$$ = $s$$12_types$$.attr, $s$$12_types$$ = $s$$12_types$$.types, $tattr$$ && $s$$12_types$$ && $s$$12_types$$[$str$$24$$] && ($node$$162$$.attr($tattr$$, $str$$24$$), $node$$162$$.addClass("oj-tree-type"), $ret$$76$$ = !0));
      return $ret$$76$$;
    }, $_check$:function($rule$$3$$, $obj$$81$$) {
      $obj$$81$$ = this.$_getNode$($obj$$81$$);
      var $v$$4$$ = !1, $ty$$ = this.$_getType$($obj$$81$$), $s$$13$$ = this.$_getOptions$().types, $data$$172$$ = !1;
      if (-1 === $obj$$81$$) {
        if ($s$$13$$[$rule$$3$$]) {
          $v$$4$$ = $s$$13$$[$rule$$3$$];
        } else {
          return;
        }
      } else {
        if (!1 === $ty$$) {
          return;
        }
        ($data$$172$$ = this.$_data$.types.$defaults$.useData ? $obj$$81$$.data("oj-tree") : !1) && $data$$172$$.types && "undefined" !== typeof $data$$172$$.types[$rule$$3$$] ? $v$$4$$ = $data$$172$$.types[$rule$$3$$] : $s$$13$$.types[$ty$$] && "undefined" !== typeof $s$$13$$.types[$ty$$][$rule$$3$$] ? $v$$4$$ = $s$$13$$.types[$ty$$][$rule$$3$$] : $s$$13$$.types["default"] && "undefined" !== typeof $s$$13$$.types["default"][$rule$$3$$] && ($v$$4$$ = $s$$13$$.types["default"][$rule$$3$$]);
      }
      $$$$63$$.isFunction($v$$4$$) && ($v$$4$$ = $v$$4$$.call(this, $obj$$81$$));
      return $v$$4$$;
    }, $_cleanNode$:function($obj$$82$$) {
      var $dndClasses$$, $draggableAttr$$, $draggableAttrVal$$, $dndContext$$1$$ = this.$_getDndContext$(), $cons$$14$$ = $oj$$70$$.$TreeDndContext$;
      $dndContext$$1$$.$isDragEnabled$() && ($dndClasses$$ = $cons$$14$$.$_OJ_DRAGGABLE$, $draggableAttr$$ = "draggable", $draggableAttrVal$$ = !0);
      $dndContext$$1$$.$isDropEnabled$() && ($dndClasses$$ += " " + $cons$$14$$.$_OJ_VALID_DROP$);
      $obj$$82$$ = $obj$$82$$ && -1 != $obj$$82$$ ? $$$$63$$($obj$$82$$) : this.$_$container_ul$;
      $obj$$82$$ = $obj$$82$$.is("li") ? $obj$$82$$.find("li").addBack() : $obj$$82$$.find("li");
      $obj$$82$$.removeClass("oj-tree-last").addClass("oj-tree-node").addClass($dndClasses$$).attr($draggableAttr$$, $draggableAttrVal$$).filter("li:last-child").addClass("oj-tree-last").end().filter(":has(li)").not(".oj-expanded").removeClass("oj-tree-leaf").addClass($TreeUtils$$.$_OJ_COLLAPSED$).attr("aria-expanded", "false");
      $obj$$82$$.not(".oj-expanded, .oj-collapsed").addClass("oj-tree-leaf").children("ul").remove();
      var $typeAttr$$ = this.options.types ? this.options.types.attr : !1;
      $obj$$82$$.find("li");
      var $disc$$, $t$$6$$;
      $$$$63$$.each($obj$$82$$, function() {
        $t$$6$$ = $$$$63$$(this);
        $disc$$ = $t$$6$$.find("\x3e ins");
        1 < $disc$$.length && ($disc$$ = $$$$63$$($disc$$[0]));
        $t$$6$$.hasClass("oj-tree-leaf") ? ($disc$$.removeClass("oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon-nocontext oj-default"), $disc$$.addClass("oj-tree-icon")) : ($disc$$.addClass("oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon-nocontext oj-default"), $disc$$.removeClass("oj-tree-node-icon"));
        $typeAttr$$ && $t$$6$$.attr($typeAttr$$) && $t$$6$$.addClass("oj-tree-type");
      });
    }, $_createNode$:function($obj$$83$$, $position$$44$$, $js$$, $callback$$139$$, $d$$11_is_loaded$$) {
      $obj$$83$$ = $obj$$83$$ || -1;
      $obj$$83$$ = this.$_getNode$($obj$$83$$);
      if (-1 !== $obj$$83$$ && !$obj$$83$$.length) {
        return null;
      }
      var $tmp$$4$$;
      $position$$44$$ = "undefined" === typeof $position$$44$$ ? "last" : $position$$44$$;
      if (!$d$$11_is_loaded$$ && !this.$_is_loaded$($obj$$83$$)) {
        return this.$_load_node$($obj$$83$$, function() {
          this.$_createNode$($obj$$83$$, $position$$44$$, $js$$, $callback$$139$$, !0);
        }), null;
      }
      this.$__rollback$();
      $js$$ = this.$_parseJson$($js$$);
      if (!$js$$) {
        return null;
      }
      $js$$ = $js$$.children();
      $d$$11_is_loaded$$ = $$$$63$$($js$$[0]);
      -1 === $obj$$83$$ && ($obj$$83$$ = this.$_$container$, "before" === $position$$44$$ && ($position$$44$$ = "first"), "after" === $position$$44$$ && ($position$$44$$ = "last"));
      switch($position$$44$$) {
        case "before":
          $obj$$83$$.before($d$$11_is_loaded$$);
          $tmp$$4$$ = this.$_getParent$($obj$$83$$);
          break;
        case "after":
          $obj$$83$$.after($d$$11_is_loaded$$);
          $tmp$$4$$ = this.$_getParent$($obj$$83$$);
          break;
        case "inside":
        ;
        case "first":
          $obj$$83$$.children("ul").length || $obj$$83$$.append("\x3cul /\x3e");
          $obj$$83$$.children("ul").prepend($d$$11_is_loaded$$);
          $tmp$$4$$ = $obj$$83$$;
          break;
        case "last":
          $obj$$83$$.children("ul").length || $obj$$83$$.append("\x3cul /\x3e");
          $obj$$83$$.children("ul").append($d$$11_is_loaded$$);
          $tmp$$4$$ = $obj$$83$$;
          break;
        default:
          $obj$$83$$.children("ul").length || $obj$$83$$.append("\x3cul /\x3e"), $position$$44$$ || ($position$$44$$ = 0), $tmp$$4$$ = $obj$$83$$.children("ul").children("li").eq($position$$44$$), $tmp$$4$$.length ? $tmp$$4$$.before($d$$11_is_loaded$$) : $obj$$83$$.children("ul").append($d$$11_is_loaded$$), $tmp$$4$$ = $obj$$83$$;
      }
      if (-1 === $tmp$$4$$ || $tmp$$4$$.get(0) === this.$_$container$.get(0)) {
        $tmp$$4$$ = -1;
      }
      this.$_cleanNode$($tmp$$4$$);
      this.$_emitEvent$({obj:$d$$11_is_loaded$$, parent:$tmp$$4$$}, "create");
      $callback$$139$$ && $callback$$139$$.call(this, $d$$11_is_loaded$$);
      1 < this.$_$container_ul$[0].childNodes.length && this.$_$container_ul$.find("." + $TreeUtils$$.$_OJ_TEMPNODE$).remove();
      return $d$$11_is_loaded$$;
    }, $_expand$:function($obj$$84$$, $callback$$140$$, $skipAnim$$4$$) {
      $obj$$84$$ = this.$_getNode$($obj$$84$$);
      if (!$obj$$84$$ || !$obj$$84$$.length) {
        return!1;
      }
      $skipAnim$$4$$ = $skipAnim$$4$$ || !1;
      if (!$obj$$84$$.hasClass($TreeUtils$$.$_OJ_DISABLED$) && !this.$_data$.$core$.locked) {
        if (!$obj$$84$$.hasClass($TreeUtils$$.$_OJ_COLLAPSED$)) {
          return $callback$$140$$ && $callback$$140$$.call(), !1;
        }
        var $dur$$1_rslt$$4$$ = this.$_emitEvent$({obj:$obj$$84$$, func:"expand"}, "before");
        if ("boolean" != typeof $dur$$1_rslt$$4$$ || $dur$$1_rslt$$4$$) {
          var $dur$$1_rslt$$4$$ = $skipAnim$$4$$ ? 0 : this.$_animDuration$, $t$$7$$ = this;
          this.$_is_loaded$($obj$$84$$) ? (this.options.expandParents && $obj$$84$$.parentsUntil(".oj-tree", ".oj-collapsed").each(function() {
            $t$$7$$.$_expand$(this, !1, !0);
          }), $obj$$84$$.removeClass($TreeUtils$$.$_OJ_COLLAPSED$).addClass($TreeUtils$$.$_OJ_EXPANDED$).attr("aria-expanded", "true").children("a").removeClass("oj-tree-loading"), $$$$63$$($obj$$84$$.children()[0]).removeClass($TreeUtils$$.$_OJ_SELECTED$).addClass("oj-default"), !$skipAnim$$4$$ && $dur$$1_rslt$$4$$ ? this.$_slide$($obj$$84$$, !1) : this.$_transitionEnd$($$$$63$$($obj$$84$$.children("UL")[0]), $obj$$84$$), $callback$$140$$ && $callback$$140$$.call()) : ($obj$$84$$.children("a").addClass("oj-tree-loading"), 
          this.$_load_node$($obj$$84$$, function() {
            $t$$7$$.$_expand$($obj$$84$$, $callback$$140$$, $skipAnim$$4$$);
          }, $callback$$140$$));
        }
      }
    }, $_expandAll$:function($obj$$85$$, $animate$$14$$, $original_obj$$) {
      var $origTarg$$1$$ = $obj$$85$$ ? $obj$$85$$ : -1;
      ($obj$$85$$ = $obj$$85$$ ? this.$_getNode$($obj$$85$$) : -1) && -1 !== $obj$$85$$ ? $origTarg$$1$$ = $obj$$85$$ : $obj$$85$$ = this.$_$container_ul$;
      $original_obj$$ ? $obj$$85$$ = $obj$$85$$.find("li.oj-collapsed") : ($original_obj$$ = $obj$$85$$, $obj$$85$$ = $obj$$85$$.is(".oj-collapsed") ? $obj$$85$$.find("li.oj-collapsed").addBack() : $obj$$85$$.find("li.oj-collapsed"));
      var $_this$$7$$ = this;
      $obj$$85$$.each(function() {
        var $__this$$ = this;
        $_this$$7$$.$_is_loaded$(this) ? $_this$$7$$.$_expand$(this, !1, !$animate$$14$$) : $_this$$7$$.expand(this, function() {
          $_this$$7$$.$_expandAll$($__this$$, $animate$$14$$, $original_obj$$);
        }, !$animate$$14$$);
      });
      0 === $original_obj$$.find("li.oj-collapsed").length && this.$_emitEvent$({obj:$obj$$85$$, targ:$origTarg$$1$$}, "expandAll");
    }, $_select$:function($node$$163$$, $bRet_check$$, $e$$124$$) {
      var $core$$ = this.$_data$.$core$, $ui$$46$$ = this.$_data$.ui, $selectMode$$ = $core$$.$selectMode$;
      if (0 == $selectMode$$) {
        return!1;
      }
      $node$$163$$ = this.$_getNode$($node$$163$$);
      if (-1 == $node$$163$$ || !$node$$163$$ || !$node$$163$$.length || $node$$163$$.hasClass($TreeUtils$$.$_OJ_DISABLED$) || $core$$.locked) {
        return!1;
      }
      $e$$124$$ && "touchend" == $e$$124$$.type || ($ui$$46$$.$touchEvent$ = !1);
      var $isSelected$$ = this.isSelected($node$$163$$);
      if (!$isSelected$$) {
        var $prevSelections$$2_rslt$$5$$ = this.$_emitEvent$({obj:$node$$163$$, func:"select"}, "before");
        if ("boolean" == typeof $prevSelections$$2_rslt$$5$$ && !$prevSelections$$2_rslt$$5$$) {
          return!1;
        }
      }
      var $prevSelections$$2_rslt$$5$$ = this.options.selection.slice(0), $s$$15$$ = this.options, $isMultiple_selMultMod$$ = $ui$$46$$.$defaults$.selectMultipleModifier, $isRange_selRangeMod$$ = $ui$$46$$.$defaults$.selectRangeModifier, $disSelChildren$$ = $ui$$46$$.$defaults$.disableSelectingChildren, $isMultiple_selMultMod$$ = "on" == $isMultiple_selMultMod$$ || !1 !== $isMultiple_selMultMod$$ && $e$$124$$ && $oj$$70$$.$DomUtils$.$isMetaKeyPressed$($e$$124$$), $isRange_selRangeMod$$ = !1 !== $isRange_selRangeMod$$ && 
      $e$$124$$ && $e$$124$$[$isRange_selRangeMod$$ + "Key"] && $ui$$46$$.$lastSelected$ && this.$_data$.ui.$lastSelected$[0] !== $node$$163$$[0] && $ui$$46$$.$lastSelected$.parent()[0] === $node$$163$$.parent()[0], $proceed$$1$$ = !0, $t$$8$$ = this;
      if ($bRet_check$$) {
        if ($disSelChildren$$ && $isMultiple_selMultMod$$ && ($node$$163$$.parentsUntil(".oj-tree", "li").children("a.oj-selected").length || $node$$163$$.children("ul").find("a.oj-selected:eq(0)").length)) {
          return!1;
        }
        $proceed$$1$$ = !1;
        switch(!0) {
          case $isRange_selRangeMod$$:
            $ui$$46$$.$lastSelected$.addClass("oj-tree-last-selected");
            $node$$163$$ = $node$$163$$[$node$$163$$.index() < $ui$$46$$.$lastSelected$.index() ? "nextUntil" : "prevUntil"](".oj-tree-last-selected").addBack();
            -1 == $selectMode$$ || $node$$163$$.length < $selectMode$$ ? ($ui$$46$$.$lastSelected$.removeClass("oj-tree-last-selected"), $ui$$46$$.selected.each(function() {
              this !== $ui$$46$$.$lastSelected$[0] && $t$$8$$.$_deselect$(this);
            }), $isSelected$$ = !1, $proceed$$1$$ = !0) : $proceed$$1$$ = !1;
            break;
          case $ui$$46$$.$touchEvent$ && -1 == $selectMode$$:
            $ui$$46$$.$touchEvent$ = !1;
            this.toggleSelect($node$$163$$);
            $proceed$$1$$ = !1;
            break;
          case $isSelected$$ && !$isMultiple_selMultMod$$:
            if (!$e$$124$$) {
              break;
            }
            this.$_deselectAll$();
            $ui$$46$$.$spacebar$ || ($isSelected$$ = !1);
            $proceed$$1$$ = !0;
            break;
          case !$isSelected$$ && !$isMultiple_selMultMod$$:
            $e$$124$$ ? $ui$$46$$.selected && 1 == $ui$$46$$.selected.length ? this.$_deselect$($ui$$46$$.selected) : this.$_deselectAll$($ui$$46$$.selected) : 1 === $selectMode$$ ? this.$_deselect$($ui$$46$$.selected) : 1 < $selectMode$$ && this.$_deselectAll$();
            $proceed$$1$$ = !0;
            break;
          case $isSelected$$ && $isMultiple_selMultMod$$:
            this.deselect($node$$163$$);
            break;
          case !$isSelected$$ && $isMultiple_selMultMod$$:
            if (-1 == $selectMode$$ || $ui$$46$$.selected.length + 1 <= $selectMode$$) {
              $proceed$$1$$ = !0;
            }
          ;
        }
      }
      $bRet_check$$ = !1;
      $proceed$$1$$ && !$isSelected$$ && ($isRange_selRangeMod$$ || ($ui$$46$$.$lastSelected$ = $node$$163$$), $node$$163$$.children("a").addClass($TreeUtils$$.$_OJ_SELECTED$), $node$$163$$.attr("aria-selected", "true"), $bRet_check$$ = !0, $s$$15$$.selectedParentExpand && $node$$163$$.parents(".oj-collapsed").each(function() {
        $t$$8$$.$_expand$(this, !1, !0);
      }), $ui$$46$$.selected = $ui$$46$$.selected.add($node$$163$$), this.$_fix_scroll$($node$$163$$.eq(0)), $core$$.$suppressSelectEvent$ || this.$_fireOptionChangeEvent$("selection", $prevSelections$$2_rslt$$5$$, null, $e$$124$$));
      return $bRet_check$$;
    }, $_deselect$:function($node$$164$$) {
      $node$$164$$ = this.$_getNode$($node$$164$$);
      if (!$node$$164$$.length) {
        return!1;
      }
      $node$$164$$.hasClass($TreeUtils$$.$_OJ_DISABLED$) || this.$_data$.$core$.locked || !this.isSelected($node$$164$$) || ($node$$164$$.children("a").removeClass($TreeUtils$$.$_OJ_SELECTED$), $node$$164$$.removeAttr("aria-selected"), this.$_data$.ui.selected = this.$_data$.ui.selected.not($node$$164$$), this.$_data$.ui.$lastSelected$ && this.$_data$.ui.$lastSelected$.length && this.$_data$.ui.$lastSelected$.get(0) === $node$$164$$.get(0) && (this.$_data$.ui.$lastSelected$ = this.$_data$.ui.selected.eq(0)));
    }, $_deselectAll$:function($context$$183_ret$$77$$) {
      if (!this.$_data$.$core$.locked && ($context$$183_ret$$77$$ = $context$$183_ret$$77$$ ? $$$$63$$($context$$183_ret$$77$$).find("a.oj-selected").parent() : this.$_$container$.find("a.oj-selected").parent(), $context$$183_ret$$77$$.not(".oj-disabled"), 0 !== $context$$183_ret$$77$$.length)) {
        var $_this$$8$$ = this;
        $$$$63$$.each($context$$183_ret$$77$$, function() {
          $_this$$8$$.$_deselect$(this);
        });
      }
    }, $_setSelected$:function($nodes$$9$$, $e$$125$$) {
      if (this.$_data$.$core$.locked) {
        return null;
      }
      if ($nodes$$9$$ && 0 < $nodes$$9$$.length) {
        var $_this$$9$$ = this;
        $$$$63$$.each($nodes$$9$$, function($i$$476$$, $val$$83$$) {
          $val$$83$$ && $_this$$9$$.$_select$($val$$83$$, !0, $e$$125$$);
        });
      }
    }, $_handleNodeTapClick$:function($event$$730$$) {
      $event$$730$$.preventDefault();
      $event$$730$$.currentTarget.blur();
      if (!$$$$63$$($event$$730$$.currentTarget).hasClass("oj-tree-loading")) {
        this.$_setFocus$();
        if (!this.$_data$.ui.$focused$) {
          var $hov$$ = this.$_getNode$($event$$730$$.currentTarget);
          0 < $hov$$.length && -1 != $hov$$ && (this.$_data$.ui.$lastHovered$ = $hov$$);
          this.$_$container_ul$.focus();
        }
        this.$_select$($event$$730$$.currentTarget, !0, $event$$730$$);
      }
      this.$_data$.ui.$touchEvent$ = !1;
    }, $_disclosureHover$:function($elem$$118$$, $bHover$$) {
      $elem$$118$$ = $$$$63$$($elem$$118$$);
      if (!$elem$$118$$.hasClass($TreeUtils$$.$_OJ_DISABLED$) && !this.$_data$.$core$.locked) {
        var $par$$ = $elem$$118$$.parent(), $bClosed$$ = $par$$.hasClass($TreeUtils$$.$_OJ_COLLAPSED$);
        if ($par$$.hasClass($TreeUtils$$.$_OJ_EXPANDED$) || $bClosed$$) {
          $bHover$$ ? ($elem$$118$$.addClass($TreeUtils$$.$_OJ_HOVER$), $elem$$118$$.removeClass("oj-default"), $elem$$118$$.removeClass($TreeUtils$$.$_OJ_SELECTED$)) : ($elem$$118$$.removeClass($TreeUtils$$.$_OJ_HOVER$), $elem$$118$$.addClass("oj-default"));
        }
      }
    }, $_refresh$:function($node$$165$$) {
      this.$_refresh_core$($node$$165$$);
    }, $_refresh_core$:function($node$$166$$) {
      var $origTarg$$3$$ = $node$$166$$ ? $node$$166$$ : -1, $_this$$10$$ = this;
      this.$_save_opened$();
      $node$$166$$ || ($node$$166$$ = -1);
      ($node$$166$$ = this.$_getNode$($node$$166$$)) ? $origTarg$$3$$ = $node$$166$$ : $node$$166$$ = -1;
      -1 !== $node$$166$$ ? $node$$166$$.children("UL").remove() : (this.$_$container_ul$.empty(), this.$_processExistingMarkup$());
      this.$_load_node$($node$$166$$, function() {
        $_this$$10$$.$_emitEvent$({obj:$origTarg$$3$$}, "refresh");
        $_this$$10$$.$_reload_nodes$();
      });
    }, $_refresh_ui$:function($obj$$86$$) {
      this.saveSelected();
      this.$_refresh_core$($obj$$86$$);
    }, after_close:function($obj$$87$$) {
      this.$_emitEvent$({obj:$obj$$87$$}, "after_close", !0);
    }, $_reopen$:function() {
      var $_this$$11$$ = this;
      this.$_data$.$core$.$toExpand$.length && $$$$63$$.each(this.$_data$.$core$.$toExpand$, function($i$$477$$, $val$$84$$) {
        $_this$$11$$.$_expand$($val$$84$$, !1, !0);
      });
      this.$_emitEvent$({}, "reopen", !0);
    }, $_getSelected$:function($context$$184_sel$$2$$) {
      var $ar$$2$$, $i$$478$$, $len$$24$$;
      $context$$184_sel$$2$$ = $context$$184_sel$$2$$ ? $$$$63$$($context$$184_sel$$2$$).find("a.oj-selected").parent() : this.$_data$.ui.selected;
      $ar$$2$$ = [];
      $len$$24$$ = $context$$184_sel$$2$$.length;
      for ($i$$478$$ = 0;$i$$478$$ < $len$$24$$;$i$$478$$++) {
        $ar$$2$$.push($context$$184_sel$$2$$[$i$$478$$]);
      }
      return $ar$$2$$;
    }, $_set_text$:function($obj$$88$$, $val$$85$$) {
      $obj$$88$$ = this.$_getNode$($obj$$88$$);
      if (!$obj$$88$$.length) {
        return!1;
      }
      $obj$$88$$ = $obj$$88$$.children("a:eq(0)");
      $obj$$88$$ = $obj$$88$$.find("span:eq(0)");
      this.$_emitEvent$({obj:$obj$$88$$, name:$val$$85$$}, "set_text", !0);
      return $obj$$88$$[0].textContent = $val$$85$$;
    }, $_loadNodes$:function() {
      0 !== this.$_data$.$ds$.type && -1 !== this.$_data$.$ds$.type ? this.$_load_node$(-1, function() {
        this.$_loaded$();
        this.$_reload_nodes$();
      }) : (this.$_applyEmptyText$(), this.$_loaded$());
    }, $_load_node$:function($obj$$89$$) {
      this.$_emitEvent$({obj:$obj$$89$$}, "load_node", !0);
    }, $_is_loaded$:function() {
      return!0;
    }, $_load_node_DS$:function($obj$$91$$, $s_call$$, $e_call$$) {
      var $_this$$12$$ = this;
      this.$_load_node_tree$($obj$$91$$, function() {
        $_this$$12$$.$_emitEvent$({obj:$_this$$12$$.$_getNode$($obj$$91$$)}, "load_node", !0);
        $s_call$$.call(this);
      }, $e_call$$);
    }, $_is_loaded_DS$:function($obj$$92$$) {
      $obj$$92$$ = this.$_getNode$($obj$$92$$);
      return-1 === $obj$$92$$ || !$obj$$92$$ || $obj$$92$$.is(".oj-expanded, .oj-tree-leaf") || 0 < $obj$$92$$.children("ul").children("li").length;
    }, $_refresh_DS$:function($obj$$93$$) {
      ($obj$$93$$ = this.$_getNode$($obj$$93$$)) && -1 !== $obj$$93$$ && $obj$$93$$.removeData("oj-tree-children");
      return this.$_refresh_ui$($obj$$93$$);
    }, $_load_node_J$:function($obj$$94$$, $s_call$$1$$, $e_call$$1$$) {
      var $_this$$13$$ = this;
      this.$_loadNodeJson$($obj$$94$$, function() {
        $_this$$13$$.$_emitEvent$({obj:$_this$$13$$.$_getNode$($obj$$94$$)}, "load_node", !0);
        $s_call$$1$$.call(this);
      }, $e_call$$1$$);
    }, $_is_loaded_J$:function($obj$$95$$) {
      var $s$$16$$ = this.options.data;
      $obj$$95$$ = this.$_getNode$($obj$$95$$);
      return-1 == $obj$$95$$ || !$obj$$95$$ || !$s$$16$$.ajax && !this.$_data$.$ds$.$progressiveRender$ && !$$$$63$$.isFunction($s$$16$$.data) || $obj$$95$$.is(".oj-expanded, .oj-tree-leaf") || 0 < $obj$$95$$.children("ul").children("li").length;
    }, $_load_node_H$:function($obj$$96$$, $s_call$$2$$, $e_call$$2$$) {
      var $_this$$14$$ = this;
      this.$_loadNodeHtml$($obj$$96$$, function() {
        $_this$$14$$.$_emitEvent$({obj:$_this$$14$$.$_getNode$($obj$$96$$)}, "load_node", !0);
        $s_call$$2$$.call(this);
      }, $e_call$$2$$);
    }, $_is_loaded_H$:function($obj$$97$$) {
      var $s$$17$$ = this.options.data, $data$$173$$ = null, $ajax$$ = null;
      $s$$17$$ && ($data$$173$$ = $s$$17$$.data || null, $ajax$$ = $s$$17$$.ajax || null);
      $obj$$97$$ = this.$_getNode$($obj$$97$$);
      return-1 == $obj$$97$$ || !$obj$$97$$ || !$ajax$$ && !$$$$63$$.isFunction($data$$173$$) || $obj$$97$$.is(".oj-expanded, .oj-tree-leaf") || 0 < $obj$$97$$.children("ul").children("li").size();
    }, reselect:function() {
      var $_this$$15$$ = this, $s$$18$$ = this.$_data$.ui.$toSelect$, $s$$18$$ = $$$$63$$.map($$$$63$$.makeArray($s$$18$$), function($n$$33$$) {
        return "#" + $n$$33$$.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/").replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:");
      });
      $$$$63$$.each($s$$18$$, function($i$$479$$, $val$$86$$) {
        $val$$86$$ && "#" !== $val$$86$$ && $_this$$15$$.select($val$$86$$);
      });
      this.$_data$.ui.selected = this.$_data$.ui.selected.filter(function() {
        return this.parentNode;
      });
      this.$_emitEvent$(null, "reselect", !0);
    }, saveSelected:function() {
      var $ui$$47$$ = this.$_data$.ui;
      $ui$$47$$.$toSelect$ = [];
      $ui$$47$$.selected.each(function() {
        this.id && $ui$$47$$.$toSelect$.push("#" + this.id.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/").replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:"));
      });
      this.$_emitEvent$($ui$$47$$.$toSelect$, "savedselected", !0);
    }, rollback:function($rb$$1$$) {
      $rb$$1$$ && $$$$63$$.isArray($rb$$1$$);
    }, get_rollback:function() {
      this.$_emitEvent$(null, "get_rollback", !0);
      return{$i$:this.$_getIndex$(), $h$:this.$_$container$.children("ul").clone(!0), $d$:this.data};
    }, $_load_node_tree$:function($obj$$98$$, $s_call$$3$$) {
      var $d$$12_rslt$$6$$ = this.$_JsonDSToJson$($obj$$98$$ && -1 != $obj$$98$$ ? $obj$$98$$[0].id : $obj$$98$$ ? $obj$$98$$ : -1, $obj$$98$$);
      if ($d$$12_rslt$$6$$.success && $d$$12_rslt$$6$$.$js$) {
        var $$u_bTree$$1$$ = !$obj$$98$$ || -1 === $obj$$98$$, $s$$19$$ = this.options.data;
        if ($s$$19$$.data && !$s$$19$$.ajax || $s$$19$$.data && $s$$19$$.ajax && $$u_bTree$$1$$) {
          $$u_bTree$$1$$ && (($d$$12_rslt$$6$$ = this.$_parseJson$($d$$12_rslt$$6$$.$js$, $obj$$98$$)) ? (this.$_$container_ul$.empty().append($d$$12_rslt$$6$$.children()), this.$_cleanNode$()) : this.$_data$.$ds$.$correctState$ && this.$_$container_ul$.empty()), $s_call$$3$$ && $s_call$$3$$.call(this);
        } else {
          if (!$s$$19$$.data && $s$$19$$.ajax || $s$$19$$.data && $s$$19$$.ajax && !$$u_bTree$$1$$) {
            ($d$$12_rslt$$6$$ = this.$_parseJson$($d$$12_rslt$$6$$.$js$, $obj$$98$$)) ? ($$u_bTree$$1$$ ? ($$u_bTree$$1$$ = this.$_$container_ul$, $$u_bTree$$1$$.empty().append($d$$12_rslt$$6$$.children()), $$u_bTree$$1$$.attr("role", "tree").attr("aria-labelledby", this.$_elemId$).attr("tabindex", "0").css("outline", "none"), -1 === this.$_data$.$core$.$selectMode$ && $$u_bTree$$1$$.attr("aria-multiselectable", !0)) : ($obj$$98$$.append($d$$12_rslt$$6$$).children("a.oj-tree-loading").removeClass("oj-tree-loading"), 
            $obj$$98$$.removeData("oj-tree-is-loading")), this.$_cleanNode$($obj$$98$$), $s_call$$3$$ && $s_call$$3$$.call(this)) : $$u_bTree$$1$$ ? this.$_data$.$ds$.$correctState$ && (this.$_$container_ul$.empty(), $s_call$$3$$ && $s_call$$3$$.call(this)) : ($obj$$98$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$98$$.removeData("oj-tree-is-loading"), $s$$19$$.correct_state && (this.$_correct_state$($obj$$98$$), $s_call$$3$$ && $s_call$$3$$.call(this)));
          }
        }
      }
    }, $_JsonDSToJson$:function($parentKey$$9$$, $node$$167$$) {
      var $arJson$$ = [], $ds$$ = this.$_tds$, $cc$$, $range$$28$$ = {}, $rslt$$7$$ = {success:!1, $js$:null};
      -1 == $parentKey$$9$$ && ($parentKey$$9$$ = null, $range$$28$$.start = 0);
      $cc$$ = $ds$$.$getChildCount$($parentKey$$9$$);
      0 < $cc$$ && ($range$$28$$.count = $cc$$, $ds$$.$fetchChildren$($parentKey$$9$$, $range$$28$$, {success:$$$$63$$.proxy(function($jns$$) {
        for (var $c$$54$$ = $jns$$.getCount(), $attr$$23_n$$34_r$$5$$, $i$$480$$ = 0;$i$$480$$ < $c$$54$$;$i$$480$$++) {
          $node$$167$$ = {};
          ($attr$$23_n$$34_r$$5$$ = $jns$$.getData($i$$480$$)) && ($node$$167$$.attr = $attr$$23_n$$34_r$$5$$);
          $node$$167$$.title = $jns$$.$m_nodes$[$i$$480$$].title;
          $attr$$23_n$$34_r$$5$$.$metadata$ && ($node$$167$$.metadata = $jns$$.$m_nodes$[$i$$480$$].metadata);
          var $key$$198$$ = $node$$167$$.attr.id;
          $attr$$23_n$$34_r$$5$$ = $ds$$.$getChildCount$($key$$198$$);
          0 < $attr$$23_n$$34_r$$5$$ && ($attr$$23_n$$34_r$$5$$ = this.$_JsonDSToJson$($key$$198$$, $node$$167$$), $node$$167$$.children = $attr$$23_n$$34_r$$5$$.$js$);
          $arJson$$.push($node$$167$$);
        }
        $rslt$$7$$.success = !0;
        $rslt$$7$$.$js$ = $arJson$$;
      }, this), error:function() {
        $rslt$$7$$.success = !1;
      }}));
      return $rslt$$7$$;
    }, $_refresh_json$:function($obj$$99$$) {
      $obj$$99$$ = this.$_getNode$($obj$$99$$);
      if (!this.$_data$.$core$.locked) {
        var $bTree$$2$$ = !$obj$$99$$ || -1 !== $obj$$99$$ || !$obj$$99$$.length;
        if ($bTree$$2$$ || !$obj$$99$$.hasClass($TreeUtils$$.$_OJ_DISABLED$)) {
          var $s$$20$$ = this.options.data.json;
          !$bTree$$2$$ && this.$_data$.$ds$.$progressiveUnload$ && ($$$$63$$.isFunction($s$$20$$.data) || $s$$20$$.ajax) && $obj$$99$$.removeData("oj-tree-children");
          return this.$_refresh_ui$($obj$$99$$);
        }
      }
    }, $_loadNodeJson$:function($obj$$100$$, $s_call$$4$$, $e_call$$4$$) {
      function $success_func$$() {
      }
      function $error_func$$() {
      }
      var $d$$13_s$$21$$ = this.$_getOptions$().data, $data$$174$$ = $d$$13_s$$21$$ && $d$$13_s$$21$$.data || null, $ajax$$1$$ = $d$$13_s$$21$$ && $d$$13_s$$21$$.ajax || null;
      !$d$$13_s$$21$$ || $data$$174$$ || $ajax$$1$$ || ($data$$174$$ = $d$$13_s$$21$$);
      if (($obj$$100$$ = this.$_getNode$($obj$$100$$)) && -1 !== $obj$$100$$ && (this.$_data$.$ds$.$progressiveRender$ || this.$_data$.$ds$.$progressiveUnload$) && !$obj$$100$$.is(".oj-expanded, .oj-tree-leaf") && 0 === $obj$$100$$.children("ul").children("li").length && $obj$$100$$.data("oj-tree-children")) {
        if ($d$$13_s$$21$$ = this.$_parseJson$($obj$$100$$.data("oj-tree-children"), $obj$$100$$)) {
          $obj$$100$$.append($d$$13_s$$21$$), this.$_data$.$ds$.$progressiveUnload$ || $obj$$100$$.removeData("oj-tree-children");
        }
        this.$_cleanNode$($obj$$100$$);
        $s_call$$4$$ && $s_call$$4$$.call(this);
      } else {
        if ($obj$$100$$ && -1 !== $obj$$100$$) {
          if ($obj$$100$$.data("oj-tree-is-loading")) {
            return;
          }
          $obj$$100$$.data("oj-tree-is-loading", !0);
        }
        switch(!0) {
          case !$data$$174$$ && !$ajax$$1$$:
            throw "ojTree - neither data nor ajax settings supplied.";;
          case $$$$63$$.isFunction($data$$174$$):
            $data$$174$$.call(this, $obj$$100$$, $$$$63$$.proxy(function($d$$14$$) {
              ($d$$14$$ = this.$_parseJson$($d$$14$$, $obj$$100$$)) ? (-1 !== $obj$$100$$ && $obj$$100$$ ? ($obj$$100$$.append($d$$14$$).children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$100$$.removeData("oj-tree-is-loading")) : this.$_$container_ul$.empty().append($d$$14$$.children()), this.$_cleanNode$($obj$$100$$), $s_call$$4$$ && $s_call$$4$$.call(this)) : (-1 !== $obj$$100$$ && $obj$$100$$ ? ($obj$$100$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$100$$.removeData("oj-tree-is-loading"), 
              this.$_data$.$ds$.$correctState$ && this.$_correct_state$($obj$$100$$)) : this.$_data$.$ds$.$correctState$ && this.$_$container_ul$.empty(), $e_call$$4$$ && $e_call$$4$$.call(this));
            }, this));
            break;
          case !!$data$$174$$ && !$ajax$$1$$ || !!$data$$174$$ && !!$ajax$$1$$ && (!$obj$$100$$ || -1 === $obj$$100$$):
            $obj$$100$$ && -1 != $obj$$100$$ || (($d$$13_s$$21$$ = this.$_parseJson$($data$$174$$, $obj$$100$$)) ? (this.$_$container_ul$.empty().append($d$$13_s$$21$$.children()), this.$_cleanNode$()) : this.$_data$.$ds$.$correctState$ && this.$_$container_ul$.empty());
            $s_call$$4$$ && $s_call$$4$$.call(this);
            break;
          case !$data$$174$$ && !!$ajax$$1$$ || !!$data$$174$$ && !!$ajax$$1$$ && $obj$$100$$ && -1 !== $obj$$100$$:
            $error_func$$ = function $$error_func$$$($x$$58$$, $status$$30$$, $e$$126$$) {
              var $ef$$ = this.$_getOptions$().data.ajax.error;
              $ef$$ && $ef$$.call(this, $status$$30$$, $e$$126$$, $x$$58$$);
              -1 != $obj$$100$$ && $obj$$100$$.length ? ($obj$$100$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$100$$.removeData("oj-tree-is-loading"), "success" === $status$$30$$ && this.$_data$.$ds$.$correctState$ && this.$_correct_state$($obj$$100$$)) : ("error" == $status$$30$$ || "success" === $status$$30$$ && this.$_data$.$ds$.$correctState$) && this.$_$container_ul$.empty();
              $e_call$$4$$ && $e_call$$4$$.call(this);
            }, $success_func$$ = function $$success_func$$$($d$$15$$, $status$$31_tempd$$, $$u$$1_x$$59$$) {
              var $sf$$ = this.$_getOptions$().data.ajax.success;
              $sf$$ && ($d$$15$$ = $sf$$.call(this, $d$$15$$, $status$$31_tempd$$, $$u$$1_x$$59$$) || $d$$15$$);
              if ("string" == typeof $d$$15$$) {
                $status$$31_tempd$$ = $d$$15$$.replace(/^[\s\n]+$/, "");
                try {
                  $status$$31_tempd$$ = $$$$63$$.parseJSON($status$$31_tempd$$);
                } catch ($err$$26$$) {
                  $status$$31_tempd$$ = null;
                }
                if (!$status$$31_tempd$$) {
                  return $error_func$$.call(this, $$u$$1_x$$59$$, "Bad JSON", "");
                }
              }
              ($d$$15$$ = this.$_parseJson$($d$$15$$, $obj$$100$$)) ? (-1 !== $obj$$100$$ && $obj$$100$$ ? ($obj$$100$$.append($d$$15$$).children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$100$$.removeData("oj-tree-is-loading")) : ($$u$$1_x$$59$$ = this.$_$container_ul$, $$u$$1_x$$59$$.empty().append($d$$15$$.children()), $$u$$1_x$$59$$.attr("role", "tree").attr("aria-labelledby", this.$_elemId$).attr("tabindex", "0").css("outline", "none"), -1 === this.$_data$.$core$.$selectMode$ && 
              $$u$$1_x$$59$$.attr("aria-multiselectable", !0)), this.$_cleanNode$($obj$$100$$), $s_call$$4$$ && $s_call$$4$$.call(this)) : -1 !== $obj$$100$$ && $obj$$100$$ ? ($obj$$100$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$100$$.removeData("oj-tree-is-loading"), this.$_data$.$ds$.$correctState$ && (this.$_correct_state$($obj$$100$$), $s_call$$4$$ && $s_call$$4$$.call(this))) : this.$_data$.$ds$.$correctState$ && (this.$_$container_ul$.empty(), $s_call$$4$$ && $s_call$$4$$.call(this));
            }, $d$$13_s$$21$$.ajax.context = this, $d$$13_s$$21$$.ajax.error = $error_func$$, $d$$13_s$$21$$.ajax.success = $success_func$$, $d$$13_s$$21$$.dataType || ($d$$13_s$$21$$.ajax.dataType = "json"), $$$$63$$.isFunction($d$$13_s$$21$$.ajax.url) && ($d$$13_s$$21$$.ajax.url = $d$$13_s$$21$$.ajax.url.call(this, $obj$$100$$)), $$$$63$$.isFunction($d$$13_s$$21$$.ajax.data) && ($d$$13_s$$21$$.ajax.data = $d$$13_s$$21$$.ajax.data.call(this, $obj$$100$$)), $$$$63$$.ajax($d$$13_s$$21$$.ajax);
        }
      }
    }, $_parseJson$:function($js$$1$$, $obj$$101_ul2$$, $isRecurse_ul1$$) {
      var $d$$16$$ = !1, $tmp$$5$$, $i$$481$$, $j$$59$$, $title$$12$$;
      if (!$js$$1$$) {
        return $d$$16$$;
      }
      this.$_data$.$ds$.$progressiveUnload$ && $obj$$101_ul2$$ && -1 !== $obj$$101_ul2$$ && $obj$$101_ul2$$.data("oj-tree-children", $d$$16$$);
      if ("string" == typeof $js$$1$$) {
        try {
          $js$$1$$ = $$$$63$$.parseJSON($js$$1$$);
        } catch ($err$$27$$) {
          $js$$1$$ = [];
        }
      }
      if ($$$$63$$.isArray($js$$1$$)) {
        $d$$16$$ = $$$$63$$("\x3cul\x3e");
        if (!$js$$1$$.length) {
          return!1;
        }
        $i$$481$$ = 0;
        for ($j$$59$$ = $js$$1$$.length;$i$$481$$ < $j$$59$$;$i$$481$$++) {
          $tmp$$5$$ = this.$_parseJson$($js$$1$$[$i$$481$$], $obj$$101_ul2$$, !0), $tmp$$5$$.length && ($d$$16$$ = $d$$16$$.append($tmp$$5$$));
        }
        $d$$16$$ = $d$$16$$.children();
      } else {
        "string" == typeof $js$$1$$ && ($js$$1$$ = {data:$js$$1$$});
        $title$$12$$ = "string" == typeof $js$$1$$.title ? $js$$1$$.title : " ";
        $d$$16$$ = $$$$63$$("\x3cli role\x3d'treeitem' /\x3e");
        $js$$1$$.attr && (this.$_data$.types.$defType$ && !$js$$1$$.attr.type && ($js$$1$$.attr.type = "oj-tree-deftype", $d$$16$$.addClass("oj-tree-type")), $d$$16$$.attr($js$$1$$.attr));
        $js$$1$$.metadata && $d$$16$$.data($js$$1$$.metadata);
        $js$$1$$.children && 0 === $js$$1$$.children.length && $d$$16$$.addClass($TreeUtils$$.$_OJ_COLLAPSED$);
        $js$$1$$.state && "s" === $js$$1$$.state && $d$$16$$.addClass($TreeUtils$$.$_OJ_SELECTED$);
        $js$$1$$.data || ($js$$1$$.data = {dummy:0});
        var $bIns$$ = !1, $sp$$2$$;
        $tmp$$5$$ = $$$$63$$("\x3ca tabindex\x3d'-1' /\x3e");
        $$$$63$$.each($js$$1$$.data, function($i$$482$$, $m$$26$$) {
          $$$$63$$.isFunction($m$$26$$) && ($m$$26$$ = $m$$26$$.call(this, $js$$1$$));
          "string" != typeof $m$$26$$ && ("attr" == $i$$482$$ ? $tmp$$5$$.attr($m$$26$$) : "style" == $i$$482$$ && $tmp$$5$$.css($m$$26$$), "language" == $i$$482$$ && $tmp$$5$$.addClass($m$$26$$));
          $bIns$$ || ($sp$$2$$ = $$$$63$$("\x3cspan class\x3d'oj-tree-title'\x3e"), $sp$$2$$[0].textContent = $title$$12$$, $tmp$$5$$.prepend("\x3cins class\x3d'oj-tree-icon oj-tree-node-icon oj-component-icon'\x3e\x26#160;\x3c/ins\x3e", $sp$$2$$), $bIns$$ = !0);
          !$m$$26$$.icon && $js$$1$$.icon && ($m$$26$$.icon = $js$$1$$.icon);
          $m$$26$$.icon && (-1 === $m$$26$$.icon.indexOf("/") ? $tmp$$5$$.children("ins").addClass($m$$26$$.icon) : $tmp$$5$$.children("ins").css("background", "url('" + $m$$26$$.icon + "') center center no-repeat"));
        });
        $d$$16$$.append($tmp$$5$$);
        $d$$16$$.prepend("\x3cins class\x3d'oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon-nocontext oj-default'\x3e\x26#160;\x3c/ins\x3e");
        $js$$1$$.children && (this.$_data$.$ds$.$progressiveRender$ && "expanded" !== $js$$1$$.state ? $d$$16$$.addClass($TreeUtils$$.$_OJ_COLLAPSED$).attr("aria-expanded", "false").data("oj-tree-children", $js$$1$$.children) : (this.$_data$.$ds$.$progressiveUnload$ && $d$$16$$.data("oj-tree-children", $js$$1$$.children), $$$$63$$.isArray($js$$1$$.children) && $js$$1$$.children.length && ($tmp$$5$$ = this.$_parseJson$($js$$1$$.children, $obj$$101_ul2$$, !0), $tmp$$5$$.length && ($obj$$101_ul2$$ = 
        $$$$63$$("\x3cul role\x3d'group' /\x3e"), $obj$$101_ul2$$.append($tmp$$5$$), $d$$16$$.append($obj$$101_ul2$$)))));
      }
      $isRecurse_ul1$$ || ($isRecurse_ul1$$ = $$$$63$$("\x3cul /\x3e"), $isRecurse_ul1$$.append($d$$16$$), $d$$16$$ = $isRecurse_ul1$$);
      return $d$$16$$;
    }, $__getJson$:function($obj$$102$$, $li_attr$$, $a_attr$$, $isCallback$$) {
      var $result$$79$$ = [], $s$$22$$ = this.options, $_this$$17$$ = this, $tmp1$$, $tmp2$$, $val$$87$$, $li$$3$$, $a$$119$$, $t$$9$$, $sAttr$$, $title$$13$$;
      ($obj$$102$$ = this.$_getNode$($obj$$102$$)) && -1 !== $obj$$102$$ || ($obj$$102$$ = this.$_$container$.find("\x3e ul \x3e li"));
      $li_attr$$ = $$$$63$$.isArray($li_attr$$) ? $li_attr$$ : ["id", "class"];
      !$isCallback$$ && $s$$22$$.types && $li_attr$$.push($s$$22$$.types.attr);
      $a_attr$$ = $$$$63$$.isArray($a_attr$$) ? $a_attr$$ : [];
      $obj$$102$$.each(function() {
        $li$$3$$ = $$$$63$$(this);
        $tmp1$$ = {};
        $li_attr$$.length && ($tmp1$$.attr = {});
        $$$$63$$.each($li_attr$$, function($i$$483$$, $v$$5$$) {
          ($tmp2$$ = $li$$3$$.attr($v$$5$$)) && $tmp2$$.length && $tmp2$$.replace(/oj-tree[^ ]*/ig, "").length && ($tmp2$$ = (" " + $tmp2$$).replace(/ oj-tree[^ ]*/ig, "").replace(/ oj-[^ ]*/ig, "").replace(/\s+$/ig, " ").replace(/^ /, "").replace(/ $/, ""), $tmp2$$.length && ($tmp1$$.attr[$v$$5$$] = $tmp2$$));
        });
        $_this$$17$$.$_getDndContext$().$isDragEnabled$() && $_this$$17$$.isSelected($li$$3$$) && ($tmp1$$.state = "s");
        $val$$87$$ = $li$$3$$.data();
        $isPureObjEmpty$$($val$$87$$) || ($tmp1$$.metadata = $val$$87$$);
        $a$$119$$ = $li$$3$$.children("a");
        $tmp2$$ = null;
        $a$$119$$.each(function() {
          $t$$9$$ = $$$$63$$(this);
          $a_attr$$.length || $t$$9$$.children("ins").get(0).style.backgroundImage.length || $t$$9$$.children("ins").get(0).className && $t$$9$$.children("ins").get(0).className.replace(/oj-tree[^ ]*|$/ig, "").length ? ($title$$13$$ = $_this$$17$$.getText($t$$9$$), $$$$63$$.each($a_attr$$, function($k$$16$$, $z$$3$$) {
            $sAttr$$ = (" " + ($t$$9$$.attr($z$$3$$) || "")).replace(/ oj-tree[^ ]*/ig, "").replace(/ oj-[^ ]*/ig, "").replace(/\s+$/ig, " ").replace(/^ /, "").replace(/ $/, "");
            $sAttr$$.length && ($tmp2$$ || ($tmp2$$ = {attr:{}}), $tmp2$$.attr[$z$$3$$] = $sAttr$$);
          }), $t$$9$$.children("ins").get(0).className.replace(/oj-tree[^ ]*|$/ig, "").replace(/^\s+$/ig, "").length && ($sAttr$$ = $t$$9$$.children("ins").get(0).className.replace(/oj-tree[^ ]*|$/ig, "").replace(/ oj-[^ ]*/ig, "").replace(/\s+$/ig, " ").replace(/^ /, "").replace(/ $/, ""), $sAttr$$.length && ($tmp2$$ || ($tmp2$$ = {}), $tmp2$$.icon = $sAttr$$)), $t$$9$$.children("ins").get(0).style.backgroundImage.length && ($sAttr$$ = $t$$9$$.children("ins").get(0).style.backgroundImage.replace("url(", 
          "").replace(")", ""), $sAttr$$.length && ($tmp2$$ || ($tmp2$$ = {}), $tmp2$$.icon = $sAttr$$))) : $title$$13$$ = $_this$$17$$.getText($t$$9$$);
          null != $tmp2$$ && ($tmp1$$.data || ($tmp1$$.data = []), 1 < $a$$119$$.length ? $tmp1$$.data.push($tmp2$$) : $tmp1$$.data = $tmp2$$);
          $tmp1$$.title = $title$$13$$;
        });
        $li$$3$$ = $li$$3$$.find("\x3e ul \x3e li");
        $li$$3$$.length && ($tmp1$$.children = $_this$$17$$.$__getJson$($li$$3$$, $li_attr$$, $a_attr$$, !0));
        $result$$79$$.push($tmp1$$);
      });
      return $result$$79$$;
    }, $_correct_state$:function($obj$$103$$) {
      $obj$$103$$ = this.$_getNode$($obj$$103$$);
      if (!$obj$$103$$ || -1 === $obj$$103$$) {
        return!1;
      }
      $obj$$103$$.removeClass("oj-collapsed oj-expanded").removeAttr("aria-expanded").addClass("oj-tree-leaf").children("ul").remove();
      $obj$$103$$.find("ins:first-child").removeClass("oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon-nocontext oj-default").addClass("oj-tree-icon");
      this.$_emitEvent$({obj:$obj$$103$$}, "correct_state", !0);
    }, $_loaded$:function() {
      this.$_emitEvent$(null, "loaded");
    }, $_loadNodeHtml$:function($obj$$104$$, $s_call$$5$$, $e_call$$5$$) {
      function $success_func$$1$$() {
      }
      function $error_func$$1$$() {
      }
      var $d$$17_s$$23$$ = this.$_getOptions$().data, $data$$175$$ = $d$$17_s$$23$$ && $d$$17_s$$23$$.data || null, $ajax$$2$$ = $d$$17_s$$23$$ && $d$$17_s$$23$$.ajax || null;
      if (($obj$$104$$ = this.$_getNode$($obj$$104$$)) && -1 !== $obj$$104$$) {
        if ($obj$$104$$.data("oj-tree-is-loading")) {
          return;
        }
        $obj$$104$$.data("oj-tree-is-loading", !0);
      }
      switch(!0) {
        case !$data$$175$$ && !$ajax$$2$$ && $d$$17_s$$23$$ && "string" === typeof $d$$17_s$$23$$:
          this.$_loadHtmlString$($d$$17_s$$23$$, $obj$$104$$, $s_call$$5$$, $e_call$$5$$);
          break;
        case $$$$63$$.isFunction($data$$175$$):
          $data$$175$$.call(this, $obj$$104$$, $$$$63$$.proxy(function($d$$18$$) {
            this.$_loadHtmlString$($d$$18$$, $obj$$104$$, $s_call$$5$$, $e_call$$5$$);
          }, this));
          break;
        case !$data$$175$$ && !$ajax$$2$$:
          $obj$$104$$ && -1 != $obj$$104$$ || (this.$_$container_ul$.empty().append(this.$_data$.html.$cloneMarkup$).find("li, a").filter(function() {
            return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName;
          }).prepend("\x3cins class\x3d'oj-tree-icon' \x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-node-icon").addClass("oj-tree-node-icon").addClass("oj-tree-icon"), this.$_$container_ul$.find("li").children("ins:first-child").addClass("oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon-nocontext oj-default"), this.$_insertHtmlTextSpan$(this.$_$container_ul$), this.$_data$.types.$defType$ && this.$_addDefType$(this.$_$container_ul$), 
          this.$_cleanNode$(), this.$_$container_ul$.find("ul").attr("role", "group"), this.$_$container_ul$.find("li").attr("role", "treeitem"), this.$_$container_ul$.find("a").attr("tabindex", -1));
          $s_call$$5$$ && $s_call$$5$$.call(this);
          break;
        case !!$data$$175$$ && !$ajax$$2$$ || !!$data$$175$$ && !!$ajax$$2$$ && (!$obj$$104$$ || -1 === $obj$$104$$):
          $obj$$104$$ && -1 != $obj$$104$$ || ($d$$17_s$$23$$ = $$$$63$$($data$$175$$), $d$$17_s$$23$$.is("ul") || ($d$$17_s$$23$$ = $$$$63$$("\x3cul /\x3e").append($d$$17_s$$23$$)), this.$_$container_ul$.empty().append($d$$17_s$$23$$.children()).find("li, a").filter(function() {
            return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName;
          }).prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-node-icon").addClass("oj-tree-node-icon").addClass("oj-tree-icon"), this.$_$container_ul$.find("li.oj-tree-leaf ins:first-child").removeClass("oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon-nocontext oj-default").removeClass("oj-tree-node-icon").addClass("oj-tree-icon"), this.$_insertHtmlTextSpan$(this.$_$container_ul$), this.$_data$.types.$defType$ && 
          this.$_addDefType$(this.$_$container_ul$), this.$_cleanNode$(), this.$_$container_ul$.find("ul").attr("role", "group"), this.$_$container_ul$.find("li").attr("role", "treeitem"), this.$_$container_ul$.find("a").attr("tabindex", "-1"));
          $s_call$$5$$ && $s_call$$5$$.call(this);
          break;
        case !$data$$175$$ && !!$ajax$$2$$ || !!$data$$175$$ && !!$ajax$$2$$ && $obj$$104$$ && -1 !== $obj$$104$$:
          $obj$$104$$ = this.$_getNode$($obj$$104$$), $error_func$$1$$ = function $$error_func$$1$$$($x$$60$$, $t$$10$$, $e$$127$$) {
            var $ef$$1$$ = this.$_getOptions$().data.ajax.error;
            $ef$$1$$ && $ef$$1$$.call(this, $x$$60$$, $t$$10$$, $e$$127$$);
            -1 != $obj$$104$$ && $obj$$104$$.length ? ($obj$$104$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$104$$.removeData("oj-tree-is-loading"), "success" === $t$$10$$ && this.$_data$.$ds$.$correctState$ && this.$_correct_state$($obj$$104$$)) : "success" === $t$$10$$ && this.$_data$.$ds$.$correctState$ && this.$_$container_ul$.empty();
            $e_call$$5$$ && $e_call$$5$$.call(this);
          }, $success_func$$1$$ = function $$success_func$$1$$$($d$$19_parent$$50$$, $nodes$$10_t$$11$$, $x$$61$$) {
            var $sf$$1$$ = this.$_getOptions$().data.ajax.success;
            $sf$$1$$ && ($d$$19_parent$$50$$ = $sf$$1$$.call(this, $d$$19_parent$$50$$, $nodes$$10_t$$11$$, $x$$61$$) || $d$$19_parent$$50$$);
            if ("" === $d$$19_parent$$50$$ || $d$$19_parent$$50$$ && $d$$19_parent$$50$$.toString && "" === $d$$19_parent$$50$$.toString().replace(/^[\s\n]+$/, "")) {
              return $error_func$$1$$.call(this, $x$$61$$, $nodes$$10_t$$11$$, "");
            }
            if ($d$$19_parent$$50$$) {
              $d$$19_parent$$50$$ = $$$$63$$($d$$19_parent$$50$$);
              $d$$19_parent$$50$$.is("ul") || ($d$$19_parent$$50$$ = $$$$63$$("\x3cul /\x3e").append($d$$19_parent$$50$$));
              -1 != $obj$$104$$ && $obj$$104$$ ? ($obj$$104$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), this.$_removeEmptyUL$($obj$$104$$), $obj$$104$$.append($d$$19_parent$$50$$).children("ul").find("li, a").filter(function() {
                return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName;
              }).prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-node-icon").addClass("oj-tree-node-icon").addClass("oj-tree-icon"), $obj$$104$$.removeData("oj-tree-is-loading"), $obj$$104$$.find("li.oj-tree-leaf ins:first-child").removeClass("oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon-nocontext oj-default").removeClass("oj-tree-node-icon").addClass("oj-tree-icon"), $d$$19_parent$$50$$ = 
              $obj$$104$$) : (this.$_$container_ul$.empty().append($d$$19_parent$$50$$.children()).find("li, a").filter(function() {
                return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName;
              }).prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-node-icon").addClass("oj-tree-node-icon").addClass("oj-tree-icon"), this.$_$container_ul$.find("li.oj-tree-leaf ins:first-child").removeClass("oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon-nocontext oj-default").removeClass("oj-tree-node-icon").addClass("oj-tree-icon"), $d$$19_parent$$50$$ = this.$_$container_ul$);
              this.$_handleHtmlParentNoChildren$($d$$19_parent$$50$$);
              this.$_insertHtmlTextSpan$($d$$19_parent$$50$$);
              $nodes$$10_t$$11$$ = $d$$19_parent$$50$$.children("UL");
              if (1 <= $nodes$$10_t$$11$$.length) {
                $nodes$$10_t$$11$$ = $nodes$$10_t$$11$$.first().find("span.oj-tree-title");
                var $_this$$18$$ = this;
                $$$$63$$.each($nodes$$10_t$$11$$, function() {
                  this.textContent = $_this$$18$$.$_escapeHtml$(this.textContent);
                });
              }
              this.$_data$.types.$defType$ && $d$$19_parent$$50$$ && this.$_addDefType$(this.$_$container_ul$);
              this.$_cleanNode$($obj$$104$$);
              $s_call$$5$$ && $s_call$$5$$.call(this);
            } else {
              $obj$$104$$ && -1 !== $obj$$104$$ ? ($obj$$104$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$104$$.removeData("oj-tree-is-loading"), this.$_data$.$ds$.$correctState$ && (this.$_correct_state$($obj$$104$$), $s_call$$5$$ && $s_call$$5$$.call(this))) : this.$_data$.$ds$.$correctState$ && (this.$_$container_ul$.empty(), $s_call$$5$$ && $s_call$$5$$.call(this)), this.$_$container_ul$.find("ul").attr("role", "group"), this.$_$container_ul$.find("li").attr("role", "treeitem")
              ;
            }
          }, $d$$17_s$$23$$.ajax.context = this, $d$$17_s$$23$$.ajax.error = $error_func$$1$$, $d$$17_s$$23$$.ajax.success = $success_func$$1$$, $d$$17_s$$23$$.ajax.dataType || ($d$$17_s$$23$$.ajax.dataType = "html"), $$$$63$$.isFunction($d$$17_s$$23$$.ajax.url) && ($d$$17_s$$23$$.ajax.url = $d$$17_s$$23$$.ajax.url.call(this, $obj$$104$$)), $$$$63$$.isFunction($d$$17_s$$23$$.ajax.data) && ($d$$17_s$$23$$.ajax.data = $d$$17_s$$23$$.ajax.data.call(this, $obj$$104$$)), $$$$63$$.ajax($d$$17_s$$23$$.ajax);
      }
    }, $_handleHtmlParentNoChildren$:function($lazy$$1_parent$$51$$) {
      $lazy$$1_parent$$51$$ = $lazy$$1_parent$$51$$.find($lazy$$1_parent$$51$$.is("ul") ? "li ul" : "ul").filter(function() {
        return!this.firstChild || 0 == this.childNodes.length || 1 == this.childNodes.length && 3 == this.firstChild.nodeType;
      });
      $$$$63$$.each($lazy$$1_parent$$51$$, function() {
        $$$$63$$(this).closest("li").addClass($TreeUtils$$.$_OJ_COLLAPSED$);
      });
    }, $_removeEmptyUL$:function($l$$14_parent$$52$$) {
      $l$$14_parent$$52$$ = $l$$14_parent$$52$$.find("ul").filter(function() {
        return!this.firstChild || 0 == this.childNodes.length || 1 == this.childNodes.length && 3 == this.firstChild.nodeType;
      });
      0 < $l$$14_parent$$52$$.length && $l$$14_parent$$52$$.remove();
    }, $_loadHtmlString$:function($nodes$$11_parent$$53_s$$24$$, $obj$$105$$, $s_call$$6$$) {
      if ($nodes$$11_parent$$53_s$$24$$ && "" !== $nodes$$11_parent$$53_s$$24$$ && $nodes$$11_parent$$53_s$$24$$.toString && "" !== $nodes$$11_parent$$53_s$$24$$.toString().replace(/^[\s\n]+$/, "")) {
        $nodes$$11_parent$$53_s$$24$$ = $$$$63$$($nodes$$11_parent$$53_s$$24$$);
        $nodes$$11_parent$$53_s$$24$$.is("ul") || ($nodes$$11_parent$$53_s$$24$$ = $$$$63$$("\x3cul /\x3e").append($nodes$$11_parent$$53_s$$24$$));
        -1 != $obj$$105$$ && $obj$$105$$ ? ($obj$$105$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$105$$.append($nodes$$11_parent$$53_s$$24$$).children("ul").find("li, a").filter(function() {
          return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName;
        }).prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-node-icon").addClass("oj-tree-node-icon").addClass("oj-tree-icon"), $obj$$105$$.removeData("oj-tree-is-loading"), $nodes$$11_parent$$53_s$$24$$ = $obj$$105$$, this.$_addDefType$(this.$obj$)) : (this.$_$container_ul$.empty().append($nodes$$11_parent$$53_s$$24$$.children()).find("li, a").filter(function() {
          return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName;
        }).prepend("\x3cins class\x3d'oj-tree-icon oj-tree-disclosure-icon'\x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-node-icon").addClass("oj-tree-node-icon").addClass("oj-tree-icon"), this.$_$container_ul$.find("li.oj-tree-leaf ins:first-child").removeClass("oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon-nocontext oj-default").removeClass("oj-tree-node-icon").addClass("oj-tree-icon"), $nodes$$11_parent$$53_s$$24$$ = this.$_$container_ul$, 
        this.$_addDefType$(this.$_$container_ul$));
        $nodes$$11_parent$$53_s$$24$$ && this.$_insertHtmlTextSpan$($nodes$$11_parent$$53_s$$24$$);
        $nodes$$11_parent$$53_s$$24$$ = $nodes$$11_parent$$53_s$$24$$.children("UL");
        if (1 <= $nodes$$11_parent$$53_s$$24$$.length) {
          $nodes$$11_parent$$53_s$$24$$ = $nodes$$11_parent$$53_s$$24$$.first().find("span.oj-tree-title");
          var $_this$$19$$ = this;
          $$$$63$$.each($nodes$$11_parent$$53_s$$24$$, function() {
            this.textContent = $_this$$19$$.$_escapeHtml$(this.textContent);
          });
        }
        this.$_cleanNode$($obj$$105$$);
        $s_call$$6$$ && $s_call$$6$$.call(this);
      } else {
        $obj$$105$$ && -1 !== $obj$$105$$ ? ($obj$$105$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$105$$.removeData("oj-tree-is-loading"), this.$_data$.$ds$.$correctState$ && (this.$_correct_state$($obj$$105$$), $s_call$$6$$ && $s_call$$6$$.call(this))) : this.$_data$.$ds$.$correctState$ && (this.$_$container_ul$.empty(), $s_call$$6$$ && $s_call$$6$$.call(this));
      }
    }, $_insertHtmlTextSpan$:function($elem$$119$$) {
      $$$$63$$.each($elem$$119$$.find("li a"), function($i$$484$$, $val$$88$$) {
        var $ih$$ = $val$$88$$.innerHTML, $ih$$ = $ih$$.replace("ins\x3e", "ins\x3e\x3cspan class\x3d'oj-tree-title'\x3e");
        $val$$88$$.innerHTML = $ih$$ + "\x3c/span\x3e";
      });
    }, $_addDefType$:function($obj$$106$$) {
      var $s$$25$$, $typeAttr$$1$$;
      this.$_data$.types.$defType$ && ($typeAttr$$1$$ = ($s$$25$$ = this.options.types) ? $s$$25$$.attr : this.$_data$.types.$defaults$.attr, $$$$63$$.each($obj$$106$$.find("li"), function($i$$485$$, $val$$89$$) {
        $val$$89$$ = $$$$63$$($val$$89$$);
        $val$$89$$.attr($typeAttr$$1$$) || $val$$89$$.attr($typeAttr$$1$$, "oj-tree-deftype").addClass("oj-tree-type");
      }));
    }, $_save_opened$:function() {
      var $_this$$20$$ = this;
      this.$_data$.$core$.$toExpand$ = [];
      this.$_$container_ul$.find("li.oj-expanded").each(function() {
        this.id && $_this$$20$$.$_data$.$core$.$toExpand$.push("#" + this.id.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/").replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:"));
      });
    }, $_reload_nodes$:function($bIsCallback$$) {
      var $_this$$21$$ = this, $bDone$$ = !0, $current$$28$$ = [], $remaining$$1$$ = [], $n$$35$$, $id$$71$$;
      $bIsCallback$$ || (this.$_data$.$core$.$reopen$ = !1, this.$_data$.$core$.$refreshing$ = !0);
      this.$_isOptExpandAll$() && (this.$_data$.$core$.$toExpand$ = [], this.$_$container_ul$.find("li.oj-collapsed").each(function() {
        $id$$71$$ = "#" + $$$$63$$(this).attr("id");
        $_this$$21$$.isExpanded($id$$71$$) || $_this$$21$$.$_data$.$core$.$toExpand$.push($id$$71$$);
      }));
      this.$_data$.$core$.$toExpand$ = $$$$63$$.map($$$$63$$.makeArray(this.$_data$.$core$.$toExpand$), function($n$$36$$) {
        return "#" + $n$$36$$.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/").replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:");
      });
      this.$_data$.$core$.$toLoad$ = $$$$63$$.map($$$$63$$.makeArray(this.$_data$.$core$.$toLoad$), function($n$$37$$) {
        return "#" + $n$$37$$.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/").replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:");
      });
      this.$_data$.$core$.$toExpand$.length && (this.$_data$.$core$.$toLoad$ = this.$_data$.$core$.$toLoad$.concat(this.$_data$.$core$.$toExpand$), this.$_data$.$core$.$toLoad$ = this.$_data$.$core$.$toLoad$.reduce(function($a$$120$$, $b$$71$$) {
        0 > $a$$120$$.indexOf($b$$71$$) && $a$$120$$.push($b$$71$$);
        return $a$$120$$;
      }, []));
      this.$_data$.$core$.$toLoad$.length && ($$$$63$$.each(this.$_data$.$core$.$toLoad$, function($i$$486$$, $val$$90$$) {
        if ("#" == $val$$90$$) {
          return!0;
        }
        $n$$35$$ = $_this$$21$$.$_$container$.find($val$$90$$);
        $n$$35$$.length ? $_this$$21$$.isExpanded($val$$90$$) || $current$$28$$.push($val$$90$$) : $remaining$$1$$.push($val$$90$$);
      }), $current$$28$$.length && (this.$_data$.$core$.$toLoad$ = $remaining$$1$$, $$$$63$$.each($current$$28$$, function($i$$487$$, $val$$91$$) {
        $_this$$21$$.$_is_loaded$($val$$91$$) || ($_this$$21$$.$_load_node$($val$$91$$, function() {
          $_this$$21$$.$_reload_nodes$(!0);
        }, function() {
          $_this$$21$$.$_reload_nodes$(!0);
        }), $bDone$$ = !1);
      })));
      this.$_data$.$core$.$toExpand$.length && $$$$63$$.each(this.$_data$.$core$.$toExpand$, function($i$$488$$, $val$$92$$) {
        $_this$$21$$.isExpanded($val$$92$$) || $_this$$21$$.$_expand$($val$$92$$, !1, !0);
      });
      $bDone$$ && (this.$_data$.$core$.$reopen$ && clearTimeout(this.$_data$.$core$.$reopen$), this.$_data$.$core$.$reopen$ = setTimeout(function() {
        $_this$$21$$.$_emitEvent$({}, "reload_nodes", !0);
      }, 50), this.$_data$.$core$.$refreshing$ = !1, this.$_reopen$());
    }, setTheme:function($theme_name$$, $theme_url$$) {
      if (!$theme_name$$) {
        return!1;
      }
      $theme_url$$ || ($theme_url$$ = this.$_data$.$themes$.$_themes$ + $theme_name$$ + "/style.css");
      -1 == $$$$63$$.inArray($theme_url$$, this.$_data$.$themes$.$themes_loaded$) && ($_addSheet$$({url:$theme_url$$}), this.$_data$.$themes$.$themes_loaded$.push($theme_url$$));
      this.$_data$.$themes$.$theme$ != $theme_name$$ && (this.$_$container$.removeClass("oj-tree-" + this.$_data$.$themes$.$theme$), this.$_data$.$themes$.$theme$ = $theme_name$$);
      this.$_$container$.addClass("oj-tree-" + $theme_name$$);
      this.$_data$.$themes$.$dots$ ? this.$_showDots$() : this.$_hideDots$();
      this.$_data$.$themes$.icons ? this.$_showIcons$() : this.$_hideIcons$();
    }, $_isTheme$:function() {
      return null != this.$_data$.$themes$;
    }, $_getTheme$:function() {
      return this.$_data$.$themes$.$theme$;
    }, isIcons:function() {
      return this.$_data$.$themes$.icons;
    }, $_showIcons$:function() {
      this.$_data$.$themes$.icons = !0;
      this.$_$container$.children("ul").removeClass("oj-tree-no-icons");
    }, $_hideIcons$:function() {
      this.$_data$.$themes$.icons = !1;
      this.$_$container$.children("ul").addClass("oj-tree-no-icons");
    }, toggleIcons:function() {
    }, $_enableKeys$:function() {
      this.$_data$.keys.$enabled$ = !0;
    }, $_initTree$:function() {
      this.$_initData$();
      this.$_initCoreOpts$();
      this.$_initDSOpts$(!0);
      this.$_initTypeOpts$();
      this.$_getDndContext$().$initDnDOpts$();
      this.$_initCore$();
      this.$_initUI$();
      this.$_initThemes$();
      this.$_initDataSource$();
      this.$_initTypes$();
      this.$_getDndContext$().$initDnD$();
      this.$_initMenu$();
    }, $_emitEvent$:function($data$$176$$, $evname$$, $bInternal$$) {
      if ($evname$$ && "string" === $$$$63$$.type($evname$$) && (!0 !== this.$_data$.$core$.locked || "unlock" === $evname$$ || "isLocked" === $evname$$ || "lock" === $evname$$)) {
        var $func$$12_inst$$, $args$$25_bContinue$$ = Array.prototype.slice.call(arguments);
        $func$$12_inst$$ = this.$_$container$;
        var $isBefore$$ = "before" === $evname$$, $isPublic$$ = $bInternal$$ ? !1 : !0;
        $isPublic$$ || ($evname$$ = "_tree" + $evname$$);
        var $eventdata$$ = {};
        $eventdata$$.item = $data$$176$$ ? $data$$176$$.obj : void 0;
        $eventdata$$.inst = $func$$12_inst$$;
        $isBefore$$ ? ($func$$12_inst$$ = $data$$176$$.func, $eventdata$$.func = $func$$12_inst$$, $eventdata$$.args = $args$$25_bContinue$$, "rename" === $func$$12_inst$$ && ($eventdata$$.title = $data$$176$$.title, $eventdata$$.prevTitle = $data$$176$$.prevTitle)) : $isPublic$$ && ("move" == $evname$$ ? ($eventdata$$.position = $data$$176$$.$p$, $eventdata$$.reference = $data$$176$$.$r$, $eventdata$$.data = $data$$176$$) : "rename" == $evname$$ ? ($eventdata$$.title = $data$$176$$.title, $eventdata$$.prevTitle = 
        $data$$176$$.prevTitle) : "remove" == $evname$$ ? ($eventdata$$.parent = $data$$176$$.parent, $eventdata$$.prev = $data$$176$$.prev) : "delete" == $evname$$ ? ($eventdata$$.prev = $data$$176$$.prev, $eventdata$$.parent = $data$$176$$.parent) : "expandAll" === $evname$$ || "collapseAll" === $evname$$ || "deselectAll" === $evname$$ ? $eventdata$$.targ = $data$$176$$.targ : "loaded" === $evname$$ && ($eventdata$$.item = -1));
        if ($isPublic$$) {
          if ($args$$25_bContinue$$ = this._trigger($evname$$, new $$$$63$$.Event("oj" + $evname$$), $eventdata$$), $isBefore$$) {
            return "undefined" != typeof $args$$25_bContinue$$ && ($args$$25_bContinue$$ = $args$$25_bContinue$$ ? !0 : !1), $args$$25_bContinue$$;
          }
        } else {
          this.$_$container$.trigger($evname$$, $eventdata$$);
        }
      }
    }, $_fireOptionChangeEvent$:function($key$$199$$, $prevVal$$, $newVal$$6$$, $origEvent$$) {
      "selection" === $key$$199$$ && (null == $newVal$$6$$ && ($newVal$$6$$ = this.$_getSelected$()), this.$_compareSelectionValues$($prevVal$$, $newVal$$6$$) || this.option($key$$199$$, $newVal$$6$$, {_context:{originalEvent:$origEvent$$, $internalSet$:!0}, changed:!0}));
    }, $__rollback$:function() {
      return this.get_rollback();
    }, $_start$:function() {
      this.$_isRtl$ && this.$_$container$.addClass("oj-tree-rtl").css("direction", "rtl");
      this.$_$container$.html("\x3cul role\x3d'tree' tabindex\x3d'0' class\x3d'oj-tree-list' style\x3d'outline:none'" + (-1 === this.$_data$.$core$.$selectMode$ ? " aria-multiselectable\x3d'true'" : "") + " aria-labelledby\x3d'" + this.$_elemId$ + "'\x3e\x3cli class\x3d'oj-tree-last oj-tree-leaf'\x3e\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e\x3ca class\x3d'oj-tree-loading' href\x3d'#'\x3e\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e" + this.$_getString$("stateLoading") + 
      "\x3c/a\x3e\x3c/li\x3e\x3c/ul\x3e");
      this.$_$container_ul$ = this.$_$container$.children("ul:eq(0)");
      this.$_$container$.data("oj-tree-instance-id", this.$_getIndex$());
      this.$_data$.$core$.$li_height$ = this.$_$container_ul$.find("li.oj-collapsed, li.oj-tree-leaf").eq(0).height() || 18;
      this.$_isTouch$ && this.$_$container$.delegate(".oj-tree-list ins.oj-tree-disclosure-icon", "touchend.ojtree", $$$$63$$.proxy(function($event$$731_trgt$$) {
        $event$$731_trgt$$.preventDefault();
        $event$$731_trgt$$ = $$$$63$$($event$$731_trgt$$.target);
        this.toggleExpand($event$$731_trgt$$);
      }, this));
      this.$_$container$.delegate(".oj-tree-list ins.oj-tree-disclosure-icon", "click.ojtree", $$$$63$$.proxy(function($event$$732_trgt$$1$$) {
        $event$$732_trgt$$1$$ = $$$$63$$($event$$732_trgt$$1$$.target);
        this.toggleExpand($event$$732_trgt$$1$$);
      }, this)).delegate(".oj-tree-list ins.oj-tree-disclosure-icon", "mousedown", $$$$63$$.proxy(function($event$$733$$) {
        this.$_data$.ui.$disclosureClick$ = !0;
        $$$$63$$($event$$733$$.target).removeClass("oj-default").removeClass($TreeUtils$$.$_OJ_HOVER$).addClass($TreeUtils$$.$_OJ_SELECTED$);
      }, this)).delegate(".oj-tree-list ins.oj-tree-disclosure-icon", "mouseup", $$$$63$$.proxy(function($event$$734$$) {
        $$$$63$$($event$$734$$.target).removeClass($TreeUtils$$.$_OJ_SELECTED$).addClass("oj-default");
      }, this)).bind("mousedown.ojtree", $$$$63$$.proxy(function() {
        this.$_setFocus$();
      }, this)).bind("dblclick.ojtree", function() {
        var $sel$$3$$;
        if (document.selection && document.selection.empty) {
          document.selection.empty();
        } else {
          if (window.getSelection) {
            $sel$$3$$ = window.getSelection();
            try {
              $sel$$3$$.removeAllRanges(), $sel$$3$$.collapse(document.getElementsByTagName("body")[0], 0);
            } catch ($err$$28$$) {
            }
          }
        }
      });
      this.$_$container_ul$.focus($$$$63$$.proxy(function() {
        if (this.$_data$.ui.$disclosureClick$) {
          this.$_data$.ui.$disclosureClick$ = !1;
        } else {
          this.$_data$.ui.$focused$ = !0;
          var $n$$38$$;
          this.$_data$.ui.$lastHovered$ ? (this.$_data$.ui.$hovered$ = this.$_data$.ui.$lastHovered$, $n$$38$$ = this.$_data$.ui.$hovered$) : this.$_data$.ui.$lastSelected$ && 0 < this.$_data$.ui.$lastSelected$.length ? (this.$_data$.ui.$hovered$ = this.$_data$.ui.$lastSelected$, $n$$38$$ = this.$_data$.ui.$hovered$) : $n$$38$$ = this.$_$container_ul$.find("li:first");
          $n$$38$$ && (this.hover($n$$38$$), this.$_data$.ui.$lastHovered$ = null, this.$_$container_ul$.find("a.oj-selected").removeClass("oj-tree-inactive"));
        }
      }, this)).blur($$$$63$$.proxy(function() {
        this.$_data$.ui.$focused$ = !1;
        this.$_data$.ui.$lastHovered$ = this.$_data$.ui.$hovered$;
        this.$_data$.ui.$lastHovered$ && this.dehover(this.$_data$.ui.$hovered$);
        this.$_$container_ul$.find("a.oj-selected").addClass("oj-tree-inactive");
      }, this));
      this.$_emitEvent$({}, "init", !0);
      this.$_loadNodes$();
      this.$_data$.menu.$usermenu$ && this.$_applyMenu$();
      $_addKeyFilter$$({$_handler$:this.$_keyHandler$, $_selector$:this.$_$container_ul$, $_this$:this});
      this.$_enableKeys$();
    }, $_initCore$:function() {
      this.$_data$.$core$.locked = !1;
      this.$_$container$.addClass("oj-tree oj-tree-" + this.$_getIndex$());
      this.$_$container$.css("outline", "none");
      this.$_$container$.css("MozUserSelect", "none");
      this.$_$container$.css("WebkitTouchCallout", "none");
      this.$_$container$.css("WebkitUserSelect", "none");
      this.$_$container$.css("WebkitTapHighlightColor", "rgba(0,0,0,0)");
    }, $_initUI$:function() {
      this.$_data$.ui.selected = $$$$63$$();
      this.$_data$.ui.$lastSelected$ = !1;
      this.$_data$.ui.$hovered$ = null;
      var $a$$121$$ = this.options.selection;
      $a$$121$$ && "array" === $$$$63$$.type($a$$121$$) && 0 < $a$$121$$.length && (this.$_data$.ui.$toSelect$ = $a$$121$$, this.options.selection = []);
      this.$_isTouch$ && this.$_$container$.delegate(".oj-tree-list a", "touchend.ojtree", $$$$63$$.proxy(function($event$$736$$) {
        this.$_data$.ui.$touchEvent$ = !0;
        this.$_handleNodeTapClick$($event$$736$$);
        $$$$63$$($event$$736$$.currentTarget).hasClass("oj-tree-loading") || this.dehover();
      }, this));
      this.$_$container$.delegate(".oj-tree-list a", "click.ojtree", $$$$63$$.proxy(function($event$$737$$) {
        this.$_data$.ui.$touchEvent$ = !1;
        this.$_handleNodeTapClick$($event$$737$$);
      }, this)).delegate(".oj-tree-list a", "mouseenter.ojtree", $$$$63$$.proxy(function($event$$738$$) {
        $$$$63$$($event$$738$$.currentTarget).hasClass("oj-tree-loading") || this.hover($event$$738$$.target);
      }, this)).delegate(".oj-tree-list a", "mouseleave.ojtree", $$$$63$$.proxy(function($event$$739$$) {
        $$$$63$$($event$$739$$.currentTarget).hasClass("oj-tree-loading") || this.dehover($event$$739$$.target);
      }, this)).delegate(".oj-tree-list .oj-tree-disclosure-icon", "mouseenter.ojtree", $$$$63$$.proxy(function($event$$740$$) {
        $$$$63$$($event$$740$$.currentTarget).hasClass("oj-tree-loading") || this.$_disclosureHover$($event$$740$$.target, !0);
      }, this)).delegate(".oj-tree-list .oj-tree-disclosure-icon", "mouseleave.ojtree", $$$$63$$.proxy(function($event$$741$$) {
        $$$$63$$($event$$741$$.currentTarget).hasClass("oj-tree-loading") || this.$_disclosureHover$($event$$741$$.target, !1);
      }, this)).bind("_treereopen", $$$$63$$.proxy(function() {
        this.reselect();
      }, this)).bind("_treeget_rollback", $$$$63$$.proxy(function() {
        this.dehover();
        this.saveSelected();
      }, this)).bind("ojcollapse", $$$$63$$.proxy(function($event$$742$$, $ui$$48$$) {
        var $obj$$107$$ = this.$_getNode$($ui$$48$$.item), $clk$$ = $obj$$107$$ && $obj$$107$$.length ? $obj$$107$$.children("ul").find("a.oj-selected") : $$$$63$$();
        !1 !== this.options.selectedParentCollapse && $clk$$.length && $clk$$.each(function() {
          this.deselect(this);
          "selectParent" === this.options.selectedParentCollapse && this.select($obj$$107$$);
        });
      }, this)).bind("ojremove", $$$$63$$.proxy(function($event$$743$$, $ui$$49$$) {
        var $s$$26$$ = this.options.selectPrevOnDelete, $clk$$1_obj$$108$$ = this.$_getNode$($ui$$49$$.item), $clk$$1_obj$$108$$ = $clk$$1_obj$$108$$ && $clk$$1_obj$$108$$.length ? $clk$$1_obj$$108$$.find("a.oj-selected") : [], $_this$$23$$ = this, $n$$39$$;
        $clk$$1_obj$$108$$.each(function() {
          $_this$$23$$.deselect(this);
          $_this$$23$$.$_data$.ui.$lastHovered$ && ($n$$39$$ = $_this$$23$$.$_getNode$(this)) && $_this$$23$$.$_data$.ui.$lastHovered$.attr("id") == $n$$39$$.attr("id") && ($_this$$23$$.$_data$.ui.$lastHovered$ = null);
        });
        $s$$26$$ && $clk$$1_obj$$108$$.length && $ui$$49$$.prev && $ui$$49$$.prev.each(function() {
          if (this.parentNode) {
            return $_this$$23$$.select(this), !1;
          }
        });
      }, this)).bind("ojmove", $$$$63$$.proxy(function($event$$744$$, $ui$$50$$) {
        var $data$$177$$ = $ui$$50$$.data, $copy$$1_p$$13$$ = $data$$177$$.$cy$;
        $copy$$1_p$$13$$ && $data$$177$$.$oc$ && ($data$$177$$.$oc$.find("a.oj-selected").removeClass($TreeUtils$$.$_OJ_SELECTED$), $data$$177$$.$oc$.removeAttr("aria-selected"));
        $data$$177$$.$ot$ === $data$$177$$.$rt$ || $copy$$1_p$$13$$ || ($copy$$1_p$$13$$ = $data$$177$$.$ot$.$_data$.ui, $copy$$1_p$$13$$.$lastHovered$ && ($data$$177$$.$o$.attr("id") == $copy$$1_p$$13$$.$lastHovered$.attr("id") && ($copy$$1_p$$13$$.$lastHovered$ = null), $copy$$1_p$$13$$.$lastSelected$ && $data$$177$$.$o$.attr("id") == $copy$$1_p$$13$$.$lastSelected$.attr("id") && ($copy$$1_p$$13$$.$lastSelected$ = null)));
      }, this));
    }, $_initDataSource$:function() {
      this.$_initTreeData$();
      this.$_initJsonData$();
      this.$_initHtmlData$();
    }, $_initTreeData$:function() {
      1 === this.$_data$.$ds$.type && (this.$_tds$ = this.options.data || null, this.$_load_node$ = this.$_load_node_DS$, this.$_is_loaded$ = this.$_is_loaded_DS$, this.$_refresh$ = this.$_refresh_DS$);
    }, $_initJsonData$:function() {
      3 === this.$_data$.$ds$.type && (this.$_data$.$ds$.$progressiveUnload$ && this.$_$container$.bind("_treeafter_close", function($e$$130$$, $ui$$51$$) {
        $ui$$51$$.item.children("ul").remove();
      }), this.$_load_node$ = this.$_load_node_J$, this.$_is_loaded$ = this.$_is_loaded_J$, this.$_refresh$ = this.$_refresh_json$);
    }, $_initHtmlData$:function() {
      4 === this.$_data$.$ds$.type && (this.$_processExistingMarkup$(), this.$_load_node$ = this.$_load_node_H$, this.$_is_loaded$ = this.$_is_loaded_H$, this.$_refresh$ = this.$_refresh_ui$);
    }, $_processExistingMarkup$:function() {
      this.$_data$.html.$useExistingMarkup$ && (this.$_data$.html.$markup_ul$ || (this.$_data$.html.$markup_ul$ = this.$_$container$.find(" \x3e ul"), this.$_data$.html.$markup_div$ = $$$$63$$("\x3cdiv id\x3d'oj-tree-existing-markup-" + this.$_getIndex$() + "' style\x3d'display:none'\x3e").append(this.$_data$.html.$markup_ul$), this.$_$container$.after(this.$_data$.html.$markup_div$)), this.$_data$.html.$markup$ = this.$_data$.html.$markup_ul$.find(" \x3e li"), this.$_data$.html.$cloneMarkup$ = this.$_data$.html.$markup$.clone(!0), 
      this.$_data$.html.$cloneMarkup$.find("li").addBack().contents().filter(function() {
        return 3 == this.nodeType;
      }).remove());
    }, $_initThemes$:function() {
      !1 === this.$_data$.$themes$.$_themes$ && $$$$63$$("script").each(function() {
        if (this.src.toString().match(/jquery\.oj-tree[^\/]*?\.js(\?.*)?$/)) {
          return this.$_data$.$themes$.$_themes$ = this.src.toString().replace(/jquery\.oj-tree[^\/]*?\.js(\?.*)?$/, "") + "themes/", !1;
        }
      });
      !1 === this.$_data$.$themes$.$_themes$ && (this.$_data$.$themes$.$_themes$ = "themes/");
      this.$_$container$.bind("_treeinit", $$$$63$$.proxy(function() {
        var $s$$27$$ = this.options;
        this.$_data$.$themes$.$dots$ = $s$$27$$.dots;
        this.$_data$.$themes$.icons = $s$$27$$.icons;
        this.setTheme(this.$_data$.$themes$.$theme$, this.$_data$.$themes$.url);
      }, this)).bind("ojloaded", $$$$63$$.proxy(function() {
        this.$_data$.$themes$.$dots$ ? this.$_showDots$() : this.$_hideDots$();
        this.$_data$.$themes$.icons ? this.$_showIcons$() : this.$_hideIcons$();
      }, this));
    }, $_initTypes$:function() {
      var $s$$28$$ = this.options.types;
      $s$$28$$ && this.$_$container$.bind("_treeinit", $$$$63$$.proxy(function() {
        var $types$$1$$ = $$$$63$$.extend(!0, {}, $s$$28$$.types), $attr$$24$$ = $s$$28$$.attr || this.$_data$.types.$defaults$.attr, $icons_css$$ = "", $_this$$24$$ = this;
        $$$$63$$.each($types$$1$$, function($i$$489$$, $tp$$) {
          $$$$63$$.each($tp$$, function($k$$17$$) {
            /^(maxDepth|maxChildren|icon|validChildren)$/.test($k$$17$$) || $_this$$24$$.$_data$.types.$attachTo$.push($k$$17$$);
          });
          var $ot$$1$$ = typeof $tp$$.icon;
          if ("undefined" === $ot$$1$$) {
            $ot$$1$$ = typeof $tp$$.image;
            if ("boolean" === $ot$$1$$ && !$tp$$.image) {
              $tp$$.image = "ojt$none";
            } else {
              if (!$tp$$.image && !$tp$$.position) {
                return!0;
              }
            }
            $tp$$.icon = {};
            $tp$$.image && ($tp$$.icon.image = $tp$$.image, delete $tp$$.image);
            void 0 !== $tp$$.position && ($tp$$.icon.position = $tp$$.position, delete $tp$$.position);
          }
          if ($tp$$.icon.image || $tp$$.icon.position) {
            "default" == $i$$489$$ ? ($_this$$24$$.$_data$.types.$defType$ = !0, $icons_css$$ += ".oj-tree-" + $_this$$24$$.$_getIndex$() + " .oj-tree-list li.oj-tree-type a \x3e .oj-tree-node-icon { ", $icons_css$$ += $_this$$24$$.$_addTypeCss$($tp$$, $icons_css$$), $icons_css$$ += "} ", $icons_css$$ += ".oj-tree-" + $_this$$24$$.$_getIndex$() + " .oj-tree-list li[" + $attr$$24$$ + '\x3d"oj-tree-deftype"].oj-tree-type \x3e a ins.oj-tree-node-icon { ') : $tp$$.icon.image && ($icons_css$$ += ".oj-tree-" + 
            $_this$$24$$.$_getIndex$() + " .oj-tree-list li[" + $attr$$24$$ + '\x3d"' + $i$$489$$ + '"].oj-tree-type \x3e a \x3e ins.oj-tree-node-icon { '), $icons_css$$ += $_this$$24$$.$_addTypeCss$($tp$$, $icons_css$$), $icons_css$$ += "} ";
          }
        });
        "" !== $icons_css$$ && $_addSheet$$({$str$:$icons_css$$, title:"oj-tree-types"});
      }, this)).bind("ojbefore", $$$$63$$.proxy(function($e$$131$$, $data$$178$$) {
        var $d$$20_o$$19_s$$29$$, $ty$$1$$, $func$$13$$ = $data$$178$$.func, $item$$133$$ = $data$$178$$.item;
        if (($d$$20_o$$19_s$$29$$ = ($d$$20_o$$19_s$$29$$ = this.$_data$.types.$defaults$.useData ? this.$_getNode$($item$$133$$) : !1) && -1 !== $d$$20_o$$19_s$$29$$ && $d$$20_o$$19_s$$29$$.length ? $d$$20_o$$19_s$$29$$.data("oj-tree") : !1) && $d$$20_o$$19_s$$29$$.types && !1 === $d$$20_o$$19_s$$29$$[$func$$13$$] || -1 !== $$$$63$$.inArray($func$$13$$, this.$_data$.types.$attachTo$) && $data$$178$$.item && ($data$$178$$.item.tagName || $data$$178$$.item.jquery) && ($d$$20_o$$19_s$$29$$ = this.options.types.types, 
        $ty$$1$$ = this.$_getType$($item$$133$$), ($d$$20_o$$19_s$$29$$[$ty$$1$$] && "undefined" !== typeof $d$$20_o$$19_s$$29$$[$ty$$1$$][$func$$13$$] || $d$$20_o$$19_s$$29$$["default"] && "undefined" !== typeof $d$$20_o$$19_s$$29$$["default"][$func$$13$$]) && !1 === this.$_check$($func$$13$$, $item$$133$$))) {
          return $e$$131$$.stopImmediatePropagation(), !1;
        }
      }, this));
    }, $_addTypeCss$:function($tp$$1$$) {
      var $css$$3$$ = "", $css$$3$$ = "ojt$none" !== $tp$$1$$.icon.image ? $css$$3$$ + (" background-image:url(" + $tp$$1$$.icon.image + "); ") : $css$$3$$ + " background-image:none; ";
      return $css$$3$$ = $tp$$1$$.icon.position ? $css$$3$$ + (" background-position:" + $tp$$1$$.icon.position + "; ") : $css$$3$$ + " background-position:0 0; ";
    }, $_getDndContext$:function() {
      this.$_TreeDndContext$ || (this.$_TreeDndContext$ = new $oj$$70$$.$TreeDndContext$(this));
      return this.$_TreeDndContext$;
    }, $_initKeys$:function() {
    }, $_initMenu$:function($newVal$$7$$) {
      var $$m$$1_menu$$19$$;
      $newVal$$7$$ || this.options.contextMenu || ($$m$$1_menu$$19$$ = this.$_$container$.attr("contextmenu")) && (this.options.contextMenu = "#" + $$m$$1_menu$$19$$);
      if ($newVal$$7$$ || this.options.contextMenu) {
        if ($$m$$1_menu$$19$$ = $newVal$$7$$ || this.options.contextMenu) {
          if ($$m$$1_menu$$19$$ = $$$$63$$($$m$$1_menu$$19$$)) {
            $$m$$1_menu$$19$$.css("display", "none");
            var $dm$$ = this.$_data$.menu;
            $dm$$.$$container$ = $$m$$1_menu$$19$$;
            $dm$$.$usermenu$ = !0;
          }
          this.$_data$.menu.$usermenu$ && $newVal$$7$$ && this.$_applyMenu$();
        }
      }
    }, $_handleContextMenuSelect$:function($ev$$5$$, $ui$$52$$) {
      if (!$ui$$52$$.inst && this.$_data$.menu.$treeDivId$ == this.$_elemId$) {
        var $id$$72$$ = $ui$$52$$ ? $ui$$52$$.item.attr("id") : void 0;
        "ojtreecopy" === $id$$72$$ ? this.$_crrm_copy$(this.$_data$.menu.$node$) : "ojtreecut" === $id$$72$$ ? this.$_crrm_cut$(this.$_data$.menu.$node$) : "ojtreepaste" === $id$$72$$ ? this.$_crrm_paste$(this.$_data$.menu.$node$) : "ojtreeremove" === $id$$72$$ ? this.isSelected(this.$_data$.menu.$node$) ? this.$_crrm_remove$() : this.$_crrm_remove$(this.$_data$.menu.$node$) : "ojtreerename" === $id$$72$$ ? this.$_crrm_rename$(this.$_data$.menu.$node$) : "ojtreecreate" === $id$$72$$ && this.$_crrm_create$(this.$_data$.menu.$node$);
      }
    }, $_NotifyContextMenuGesture$:function($menu$$20_openOptions$$6$$, $event$$745$$, $eventType$$51$$) {
      var $disabledState$$1_keyboard$$1$$ = "keyboard" === $eventType$$51$$;
      if ("contextmenu" == $event$$745$$.type || $disabledState$$1_keyboard$$1$$ || "touch" == $eventType$$51$$) {
        this.$_data$.menu.$node$ = $disabledState$$1_keyboard$$1$$ ? this.$_data$.ui.$hovered$ : $$$$63$$($event$$745$$.target);
        var $textElem$$ = this.$_data$.menu.$node$.find(".oj-tree-title")[0];
        this.$_data$.menu.$activenode$ = null;
        this.$_data$.menu.$node$ ? (this.$_data$.menu.$treeDivId$ = this.$_data$.menu.$node$.closest("div").attr("id"), $menu$$20_openOptions$$6$$ = {launcher:this.$_$container_ul$}, $disabledState$$1_keyboard$$1$$ && ($menu$$20_openOptions$$6$$.position = {of:$textElem$$}), this.$_data$.menu.$usermenu$ && this.$_data$.menu.$$elemPaste$ && ($disabledState$$1_keyboard$$1$$ = !this.$_data$.$crrm$.$ct_nodes$ && !this.$_data$.$crrm$.$cp_nodes$, !!this.$_data$.menu.$$elemPaste$.hasClass($TreeUtils$$.$_OJ_DISABLED$) != 
        $disabledState$$1_keyboard$$1$$ && ($disabledState$$1_keyboard$$1$$ ? this.$_data$.menu.$$elemPaste$.addClass($TreeUtils$$.$_OJ_DISABLED$) : this.$_data$.menu.$$elemPaste$.removeClass($TreeUtils$$.$_OJ_DISABLED$), this.$_data$.menu.$$container$.ojMenu("refresh"))), this.$_OpenContextMenu$($event$$745$$, $eventType$$51$$, $menu$$20_openOptions$$6$$)) : $event$$745$$.preventDefault();
      }
    }, $_initCoreOpts$:function() {
      var $val$$93$$ = this.options.selectionMode, $val$$93$$ = void 0 == $val$$93$$ ? "single" : $val$$93$$;
      "none" === $val$$93$$ ? $val$$93$$ = 0 : "single" === $val$$93$$ ? $val$$93$$ = 1 : "multiple" === $val$$93$$ && ($val$$93$$ = -1);
      this.$_data$.$core$.$selectMode$ = $val$$93$$;
      this.$_data$.$themes$.icons = this.options.icons;
      this.$_initExpandedOpts$();
      this.$_data$.$core$.$toLoad$ = this.options.initLoaded;
    }, $_initUIOpts$:function() {
    }, $_initDSOpts$:function($bInit$$) {
      var $s$$30$$ = this.options.data, $dt$$9_ot$$2$$;
      this.$_data$.$ds$.type = 0;
      this.$_data$.html.$useExistingMarkup$ = !1;
      this.$_data$.html.$cloneMarkup$ = !1;
      if ($s$$30$$) {
        if ($dt$$9_ot$$2$$ = $$$$63$$.type($s$$30$$), "string" === $dt$$9_ot$$2$$) {
          this.$_isHtml$($s$$30$$) ? this.$_data$.$ds$.type = 4 : this.$_data$.$ds$.type = 3;
        } else {
          if ("array" === $dt$$9_ot$$2$$) {
            this.$_data$.$ds$.type = 3;
          } else {
            if ("object" === $dt$$9_ot$$2$$) {
              try {
                $s$$30$$ instanceof $oj$$70$$.$JsonTreeDataSource$ && (this.$_data$.$ds$.type = 1);
              } catch ($e$$132$$) {
                this.$_data$.$ds$.type = -1;
              }
              if (1 !== this.$_data$.$ds$.type) {
                try {
                  $s$$30$$ instanceof $oj$$70$$.$CollectionTreeDataSource$ && (this.$_data$.$ds$.type = 2);
                } catch ($e$$133$$) {
                  this.$_data$.$ds$.type = -1;
                }
              }
              1 !== this.$_data$.$ds$.type && 2 !== this.$_data$.$ds$.type && ($s$$30$$.data || $s$$30$$.ajax) && (($dt$$9_ot$$2$$ = $s$$30$$.dataType) ? "json" === $dt$$9_ot$$2$$ ? this.$_data$.$ds$.type = 3 : "html" === $dt$$9_ot$$2$$ && (this.$_data$.$ds$.type = 4) : ($s$$30$$.dataType = "json", this.$_data$.$ds$.type = 3));
            }
          }
        }
      }
      $bInit$$ && 0 == this.$_data$.$ds$.type && 0 < this.$_$container$.find("ul").length && (this.$_data$.$ds$.type = 4, this.$_data$.html.$useExistingMarkup$ = !0);
    }, $_initTreeDSOpts$:function() {
    }, $_initJsonOpts$:function() {
    }, $_initHtmlOpts$:function() {
    }, $_initMenuOpts$:function() {
    }, $_initTypeOpts$:function() {
      var $o$$20$$ = this.options.types;
      "object" === typeof $o$$20$$ && this.$_applyDefaults$($o$$20$$, {attr:this.$_data$.types.$defaults$.attr});
    }, $_initExpandedOpts$:function() {
      this.$_data$.$core$.$toExpand$ = this.$_varCopy$(this.options, "initExpanded");
      null == this.$_data$.$core$.$toExpand$ && (this.$_data$.$core$.$toExpand$ = []);
    }, $_initData$:function() {
      var $data$$179$$ = this.$_data$;
      $data$$179$$.$core$ = {$initLoaded$:[], $selectMode$:1, $load_open$:!1, $li_height$:0, $toExpand$:!1, $toLoad$:!1, $prepMoveBlk$:{}, $suppressSelectEvent$:!1, $strings$:{}};
      $data$$179$$.ui = {selected:$$$$63$$(), $lastSelected$:!1, $hovered$:null, $lastHovered$:null, $disclosureClick$:!1, $toSelect$:null, opacity:1, $spacebar$:!1, $focused$:!1, $animDurDiv$:null, $touchEvent$:!1};
      $data$$179$$.ui.$defaults$ = {selectMultipleModifier:"ctrl", selectRangeModifier:"shift", disableSelectingChildren:!1};
      $data$$179$$.$crrm$ = {};
      $data$$179$$.$crrm$.$cp_nodes$ = !1;
      $data$$179$$.$crrm$.$ct_nodes$ = !1;
      $data$$179$$.$crrm$.$defaults$ = {inputWidthLimit:200, move:{alwaysCopy:!1, openOnMove:!0, defaultPosition:"last", checkMove:function $$data$$179$$$$crrm$$$defaults$$move$checkMove$() {
        return!0;
      }}};
      $data$$179$$.$crrm$.$prepMoveBlk$ = {};
      $data$$179$$.$ds$ = {};
      $data$$179$$.$ds$.$progressiveRender$ = !1;
      $data$$179$$.$ds$.$progressiveUnload$ = !1;
      $data$$179$$.$ds$.$correctState$ = !0;
      $data$$179$$.$ds$.type = 0;
      $data$$179$$.$json$ = {};
      $data$$179$$.$json$.$defaults$ = {data:!1, ajax:!1};
      $data$$179$$.html = {};
      $data$$179$$.html.$defaults$ = {data:!1, ajax:!1};
      $data$$179$$.html.$useExistingMarkup$ = !1;
      $data$$179$$.html.$markup_ul$ = !1;
      $data$$179$$.html.$markup_div$ = !1;
      $data$$179$$.html.$markup$ = !1;
      $data$$179$$.html.$cloneMarkup$ = !1;
      $data$$179$$.$themes$ = {};
      $data$$179$$.$themes$.icons = !0;
      $data$$179$$.$themes$.$dots$ = !1;
      $data$$179$$.$themes$.$theme$ = "default";
      $data$$179$$.$themes$.url = !1;
      $data$$179$$.$themes$.$themes_loaded$ = [];
      $data$$179$$.$themes$.$_themes$ = !1;
      $data$$179$$.types = {};
      $data$$179$$.types.$attachTo$ = [];
      $data$$179$$.types.$defType$ = !1;
      $data$$179$$.types.$defaults$ = {maxChildren:-1, maxDepth:-1, validChildren:"all", useData:!1, attr:"type", types:{"default":{maxChildren:-1, maxDepth:-1, validChildren:"all"}}};
      $data$$179$$.menu = {};
      $data$$179$$.menu.$usermenu$ = !1;
      $data$$179$$.menu.$$container$ = !1;
      $data$$179$$.menu.$$elemPaste$ = !1;
      $data$$179$$.menu.$node$ = !1;
      $data$$179$$.menu.$activenode$ = !1;
      $data$$179$$.keys = {};
      $data$$179$$.keys.$enabled$ = !0;
      $data$$179$$.keys.bound = [];
    }, $_fix_scroll$:function($obj$$109_t$$13$$) {
      var $c$$55$$ = this.$_$container$[0];
      $c$$55$$.scrollHeight > $c$$55$$.offsetHeight && ($obj$$109_t$$13$$ = this.$_getNode$($obj$$109_t$$13$$)) && -1 !== $obj$$109_t$$13$$ && $obj$$109_t$$13$$.length && $obj$$109_t$$13$$.is(":visible") && ($obj$$109_t$$13$$ = $obj$$109_t$$13$$.offset().top - this.$_$container$.offset().top, 0 > $obj$$109_t$$13$$ && ($c$$55$$.scrollTop = $c$$55$$.scrollTop + $obj$$109_t$$13$$ - 1), $obj$$109_t$$13$$ + this.$_data$.$core$.$li_height$ + ($c$$55$$.scrollWidth > $c$$55$$.offsetWidth ? $scrollbar_width$$ : 
      0) > $c$$55$$.offsetHeight && ($c$$55$$.scrollTop += $obj$$109_t$$13$$ - $c$$55$$.offsetHeight + this.$_data$.$core$.$li_height$ + 1 + ($c$$55$$.scrollWidth > $c$$55$$.offsetWidth ? $scrollbar_width$$ : 0)));
    }, $_setFocus$:function() {
    }, $_unsetFocus$:function() {
    }, $_newIndex$:function() {
      return++$_instance$$;
    }, $_getIndex$:function() {
      return this.$_index$;
    }, $_getOptions$:function() {
      return $$$$63$$.extend(!0, {}, this.options);
    }, $_getContainer$:function() {
      return this.$_$container$;
    }, $_getContainerList$:function() {
      return this.$_$container_ul$;
    }, $_keyHandler$:{up:function() {
      this.hover(this.$_getPrev$(this.$_data$.ui.$hovered$ || this.$_data$.ui.$lastSelected$ || -1));
      return!1;
    }, "ctrl+up":function() {
      this.hover(this.$_getPrev$(this.$_data$.ui.$hovered$ || this.$_data$.ui.$lastSelected$ || -1));
      return!1;
    }, "shift+up":function() {
      this.select(this.$_getPrev$(this.$_data$.ui.$hovered$ || this.$_data$.ui.$lastSelected$ || -1), -1 !== this.$_data$.ui.$selectMode$);
      return!1;
    }, down:function() {
      this.hover(this.$_getNext$(this.$_data$.ui.$hovered$ || this.$_data$.ui.$lastSelected$ || -1));
      return!1;
    }, "ctrl+down":function() {
      this.hover(this.$_getNext$(this.$_data$.ui.$hovered$ || this.$_data$.ui.$lastSelected$ || -1));
      return!1;
    }, "shift+down":function() {
      this.select(this.$_getNext$(this.$_data$.ui.$hovered$ || this.$_data$.ui.$lastSelected$ || -1), -1 !== this.$_data$.ui.$selectMode$);
      return!1;
    }, left:function() {
      var $o$$27$$ = this.$_data$.ui.$hovered$ || this.$_data$.ui.$lastSelected$;
      $o$$27$$ && ($o$$27$$.hasClass($TreeUtils$$.$_OJ_EXPANDED$) ? this.collapse($o$$27$$) : this.hover(this.$_getPrev$($o$$27$$)));
      return!1;
    }, "ctrl+left":function() {
      var $o$$28$$ = this.$_data$.ui.$hovered$ || this.$_data$.ui.$lastSelected$;
      $o$$28$$ && ($o$$28$$.hasClass($TreeUtils$$.$_OJ_EXPANDED$) ? this.collapse($o$$28$$) : this.hover(this.$_getPrev$($o$$28$$)));
      return!1;
    }, "shift+left":function() {
      var $o$$29$$ = this.$_data$.ui.$hovered$ || this.$_data$.ui.$lastSelected$;
      $o$$29$$ && ($o$$29$$.hasClass($TreeUtils$$.$_OJ_EXPANDED$) ? this.collapse($o$$29$$) : this.hover(this.$_getPrev$($o$$29$$)));
      return!1;
    }, right:function() {
      var $o$$30$$ = this.$_data$.ui.$hovered$ || this.$_data$.ui.$lastSelected$;
      $o$$30$$ && $o$$30$$.length && ($o$$30$$.hasClass($TreeUtils$$.$_OJ_COLLAPSED$) ? this.expand($o$$30$$) : this.hover(this.$_getNext$($o$$30$$)));
      return!1;
    }, "ctrl+right":function() {
      var $o$$31$$ = this.$_data$.ui.$hovered$ || this.$_data$.ui.$lastSelected$;
      $o$$31$$ && $o$$31$$.length && ($o$$31$$.hasClass($TreeUtils$$.$_OJ_COLLAPSED$) ? this.expand($o$$31$$) : this.hover(this.$_getNext$($o$$31$$)));
      return!1;
    }, "shift+right":function() {
      var $o$$32$$ = this.$_data$.ui.$hovered$ || this.$_data$.ui.$lastSelected$;
      $o$$32$$ && $o$$32$$.length && ($o$$32$$.hasClass($TreeUtils$$.$_OJ_COLLAPSED$) ? this.expand($o$$32$$) : this.hover(this.$_getNext$($o$$32$$)));
      return!1;
    }, space:function() {
      this.$_data$.ui.$hovered$ && (this.$_data$.ui.$spacebar$ = !0, this.$_data$.ui.$hovered$.children("a:eq(0)").click(), this.$_data$.ui.$spacebar$ = !1);
      return!1;
    }, home:function() {
      this.hover(this.$_$container_ul$.find("li:first"));
      return!1;
    }, end:function() {
      var $a$$122$$ = this.$_$container_ul$.find("li.oj-tree-last:visible");
      $a$$122$$ && $a$$122$$.length && this.hover($a$$122$$[$a$$122$$.length - 1]);
      return!1;
    }, "*":function() {
      this.$_$container_ul$.find("a");
      this.$_expandAll$(-1, !1);
      return!1;
    }, "ctrl+space":function() {
      if (this.$_data$.ui.$hovered$) {
        var $ev$$6$$ = $$$$63$$.Event("click");
        $ev$$6$$.ctrlKey = !0;
        this.$_data$.ui.$hovered$.children("a:eq(0)").trigger($ev$$6$$);
      }
      return!1;
    }, "shift+space":function() {
      if (this.$_data$.ui.$hovered$) {
        var $ev$$7$$ = $$$$63$$.Event("click");
        $ev$$7$$.shiftKey = !0;
        this.$_data$.ui.$hovered$.children("a:eq(0)").trigger($ev$$7$$);
      }
      return!1;
    }, "shift+home":function($event$$748$$) {
      var $prevSelections$$3$$, $hover$$1$$ = this.$_data$.ui.$hovered$;
      if ($hover$$1$$) {
        var $bContinue$$1$$ = !0, $_this$$25$$ = this, $nodes$$12$$ = this.$_$container_ul$.find("li:visible");
        this.$_data$.$core$.$suppressSelectEvent$ = !0;
        $prevSelections$$3$$ = this.options.selection.slice(0);
        $hover$$1$$ = $hover$$1$$[0];
        $$$$63$$.each($nodes$$12$$, function($i$$490$$, $node$$168$$) {
          $node$$168$$ == $hover$$1$$ && ($bContinue$$1$$ = !1);
          $_this$$25$$.$_select$($node$$168$$, !0);
          return $bContinue$$1$$;
        });
        this.$_data$.$core$.$suppressSelectEvent$ = !1;
        this.$_fireOptionChangeEvent$("selection", $prevSelections$$3$$, null, $event$$748$$);
      }
      return!1;
    }, "shift+pgdn":function($event$$749$$) {
      var $prevSelections$$4$$, $hover$$2$$ = this.$_data$.ui.$lastSelected$ || this.$_data$.ui.$hovered$;
      if ($hover$$2$$) {
        var $bFound$$ = !1, $_this$$26$$ = this, $l$$16$$ = this.$_$container_ul$.find("li:visible");
        this.$_data$.$core$.$suppressSelectEvent$ = !0;
        $prevSelections$$4$$ = this.options.selection.slice(0);
        $hover$$2$$ = $hover$$2$$[0];
        $$$$63$$.each($l$$16$$, function($i$$491$$, $node$$169$$) {
          $bFound$$ || ($bFound$$ = $node$$169$$ == $hover$$2$$);
          $bFound$$ && !$_this$$26$$.isSelected($node$$169$$) && $_this$$26$$.$_select$($node$$169$$, !0);
          return!0;
        });
        this.$_data$.$core$.$suppressSelectEvent$ = !1;
        this.$_fireOptionChangeEvent$("selection", $prevSelections$$4$$, null, $event$$749$$);
      }
      return!1;
    }, f2:function() {
      this.$_crrm_rename$(this.$_data$.ui.$hovered$ || this.$_data$.ui.$lastSelected$);
      return!1;
    }, del:function() {
      this.remove(this.$_data$.ui.$hovered$ || this.$_getNode$(null));
      return!1;
    }}, $_applyMenu$:function() {
      if (this.$_data$.menu.$usermenu$) {
        var $$menuContainer$$1$$ = this.$_data$.menu.$$container$, $_this$$27$$ = this;
        $$menuContainer$$1$$.on("ojselect", $$$$63$$.proxy(this.$_handleContextMenuSelect$, this));
        var $bChanged$$ = !1;
        $$menuContainer$$1$$.find("[data-oj-command]").each(function() {
          var $cmd$$1$$;
          0 === $$$$63$$(this).children("a").length && ($cmd$$1$$ = $$$$63$$(this).attr("data-oj-command").split("oj-tree-"), $$$$63$$(this).replaceWith($_this$$27$$.$_buildContextMenuItem$($cmd$$1$$[$cmd$$1$$.length - 1])), $$$$63$$(this).hasClass("oj-menu-divider") && $$$$63$$(this).removeClass("oj-menu-divider").addClass("oj-menu-item"), $bChanged$$ = !0);
        });
        $bChanged$$ && $$menuContainer$$1$$.ojMenu("refresh");
        this.$_data$.menu.$$elemPaste$ = $$menuContainer$$1$$.find("#ojtreepaste");
      }
    }, $_clearMenu$:function() {
      var $um$$ = this.$_data$.menu;
      $um$$.$usermenu$ && ($um$$.$usermenu$ = !1, $um$$.$$container$.off("ojselect"), $um$$.$$container$ = null);
    }, $_buildContextMenuItem$:function($cmd$$2$$) {
      return $$$$63$$(this.$_buildContextMenuListItem$($cmd$$2$$));
    }, $_buildContextMenuListItem$:function($cmd$$3$$) {
      return "\x3cli id\x3d" + $_arMenuCmdMap$$1$$[$cmd$$3$$] + "\x3e" + this.$_buildContextMenuLabel$($cmd$$3$$) + "\x3c/li\x3e";
    }, $_buildContextMenuLabel$:function($cmd$$4$$) {
      return'\x3ca href\x3d"#"\x3e' + this.$_getString$($_arMenuKeyMap$$1$$[$cmd$$4$$]) + "\x3c/a\x3e";
    }, $_crrm_cut$:function($obj$$110$$) {
      $obj$$110$$ = this.$_getNode$($obj$$110$$, !0);
      if (!$obj$$110$$ || !$obj$$110$$.length) {
        return!1;
      }
      this.$_data$.$crrm$.$cp_nodes$ = !1;
      this.$_data$.$crrm$.$ct_nodes$ = $obj$$110$$;
      this.$_emitEvent$({obj:$obj$$110$$}, "cut");
    }, $_crrm_copy$:function($obj$$111$$) {
      $obj$$111$$ = this.$_getNode$($obj$$111$$, !0);
      if (!$obj$$111$$ || !$obj$$111$$.length) {
        return!1;
      }
      this.$_data$.$crrm$.$ct_nodes$ = !1;
      this.$_data$.$crrm$.$cp_nodes$ = $obj$$111$$;
      this.$_emitEvent$({obj:$obj$$111$$}, "copy");
    }, $_crrm_paste$:function($obj$$112$$) {
      $obj$$112$$ = this.$_getNode$($obj$$112$$);
      if (!$obj$$112$$ || !$obj$$112$$.length) {
        return!1;
      }
      var $nodes$$13$$ = this.$_data$.$crrm$.$ct_nodes$ ? this.$_data$.$crrm$.$ct_nodes$ : this.$_data$.$crrm$.$cp_nodes$;
      if (!this.$_data$.$crrm$.$ct_nodes$ && !this.$_data$.$crrm$.$cp_nodes$) {
        return!1;
      }
      this.$_data$.$crrm$.$ct_nodes$ && (this.$_crrm_move_node$(this.$_data$.$crrm$.$ct_nodes$, $obj$$112$$), this.$_data$.$crrm$.$ct_nodes$ = !1);
      this.$_data$.$crrm$.$ct_nodes$ && (this.$_crrm_move_node$(this.$_data$.$crrm$.$ct_nodes$, $obj$$112$$), this.$_data$.$crrm$.$ct_nodes$ = !1);
      this.$_data$.$crrm$.$cp_nodes$ && this.$_crrm_move_node$(this.$_data$.$crrm$.$cp_nodes$, $obj$$112$$, !1, !0);
      this.$_emitEvent$({obj:$obj$$112$$, nodes:$nodes$$13$$}, "paste");
    }, $_crrm_move_node$:function($obj$$113$$, $ref$$4$$, $position$$45$$, $is_copy$$1$$, $is_prepared$$1$$, $skip_check$$1$$) {
      var $s$$31$$ = this.$_data$.$crrm$.$defaults$.move;
      if (!$is_prepared$$1$$) {
        return "undefined" === typeof $position$$45$$ && ($position$$45$$ = $s$$31$$.defaultPosition), "inside" !== $position$$45$$ || $s$$31$$.defaultPosition.match(/^(before|after)$/) || ($position$$45$$ = $s$$31$$.defaultPosition), this.$_moveNode$($obj$$113$$, $ref$$4$$, $position$$45$$, $is_copy$$1$$, !1, $skip_check$$1$$);
      }
      if (!0 === $s$$31$$.alwaysCopy || "multitree" === $s$$31$$.alwaysCopy && $obj$$113$$.$rt$.$_getIndex$() !== $obj$$113$$.$ot$.$_getIndex$()) {
        $is_copy$$1$$ = !0;
      }
      this.$_moveNode$($obj$$113$$, $ref$$4$$, $position$$45$$, $is_copy$$1$$, !0, $skip_check$$1$$);
    }, $_crrm_remove$:function($obj$$114$$) {
      $obj$$114$$ = this.$_getNode$($obj$$114$$, !0);
      this.$__rollback$();
      this.remove($obj$$114$$);
    }, $_crrm_rename$:function($obj$$115$$) {
      $obj$$115$$ = this.$_getNode$($obj$$115$$);
      this.$__rollback$();
      this.$_crrm_showInput$($obj$$115$$, function() {
      });
    }, $_crrm_showInput$:function($obj$$117$$, $callback$$141$$) {
      $obj$$117$$ = this.$_getNode$($obj$$117$$);
      var $rtl$$7$$ = this.$_isRtl$, $w$$8$$ = this.$_data$.$crrm$.$defaults$.inputWidthLimit, $w1$$ = $obj$$117$$.children("ins").width(), $w2$$ = $obj$$117$$.find("\x3e a:visible \x3e ins").width() * $obj$$117$$.find("\x3e a:visible \x3e ins").length, $t$$15$$ = this.getText($obj$$117$$), $_this$$28$$ = this, $h1$$ = $$$$63$$("\x3cdiv /\x3e", {css:{position:"absolute", top:"-200px", left:$rtl$$7$$ ? "0px" : "-1000px", visibility:"hidden"}}).appendTo("body"), $h2$$ = $obj$$117$$.css("position", 
      "relative").append($$$$63$$("\x3cinput /\x3e", {value:$t$$15$$, "class":"oj-tree-rename-input", css:{padding:"0", border:"1px solid silver", position:"absolute", left:$rtl$$7$$ ? "auto" : $w1$$ + $w2$$ + 4 + "px", right:$rtl$$7$$ ? $w1$$ + $w2$$ + 4 + "px" : "auto", top:"0px", height:this.$_data$.$core$.$li_height$ - 2 + "px", lineHeight:this.$_data$.$core$.$li_height$ - 2 + "px", width:"150px"}, blur:$$$$63$$.proxy(function() {
        var $i$$492$$ = $obj$$117$$.children(".oj-tree-rename-input"), $v$$7$$ = $i$$492$$.val();
        "" === $v$$7$$ && ($v$$7$$ = $t$$15$$);
        $h1$$.remove();
        $i$$492$$.remove();
        this.$_set_text$($obj$$117$$, $t$$15$$);
        this.$_renameNode$($obj$$117$$, $v$$7$$);
        $callback$$141$$.call(this, $obj$$117$$, $v$$7$$, $t$$15$$);
        $obj$$117$$.css("position", "");
      }, this), keyup:function($event$$750_key$$201$$) {
        $event$$750_key$$201$$ = $event$$750_key$$201$$.keyCode || $event$$750_key$$201$$.which;
        if (!$_this$$28$$.$_done$) {
          return $_this$$28$$.$_done$ = !0, !1;
        }
        27 == $event$$750_key$$201$$ ? ($_this$$28$$.$_done$ = !1, this.value = $t$$15$$, this.blur()) : 13 == $event$$750_key$$201$$ ? ($_this$$28$$.$_done$ = !1, this.blur()) : $h2$$.width(Math.min($h1$$.text("pW" + this.value).width(), $w$$8$$));
      }, keypress:function($event$$751$$) {
        if (13 == ($event$$751$$.keyCode || $event$$751$$.which)) {
          return!1;
        }
      }})).children(".oj-tree-rename-input");
      this.$_set_text$($obj$$117$$, "");
      $h1$$.css({fontFamily:$h2$$.css("fontFamily") || "", fontSize:$h2$$.css("fontSize") || "", fontWeight:$h2$$.css("fontWeight") || "", fontStyle:$h2$$.css("fontStyle") || "", fontStretch:$h2$$.css("fontStretch") || "", fontVariant:$h2$$.css("fontVariant") || "", letterSpacing:$h2$$.css("letterSpacing") || "", wordSpacing:$h2$$.css("wordSpacing") || ""});
      $h2$$.width(Math.min($h1$$.text("pW" + $h2$$[0].value).width(), $w$$8$$))[0].select();
    }, $_crrm_create$:function($obj$$118$$, $position$$46$$, $js$$2$$, $callback$$142$$, $skip_rename$$) {
      var $_this$$29$$ = this;
      ($obj$$118$$ = this.$_getNode$($obj$$118$$)) || ($obj$$118$$ = -1);
      this.$__rollback$();
      return this.$_createNode$($obj$$118$$, $position$$46$$, $js$$2$$, function($t$$17$$) {
        var $p$$14$$ = this.$_getParent$($t$$17$$), $pos$$16$$ = $$$$63$$($t$$17$$).index();
        $callback$$142$$ && $callback$$142$$.call(this, $t$$17$$);
        $p$$14$$.length && $p$$14$$.hasClass($TreeUtils$$.$_OJ_COLLAPSED$) && this.expand($p$$14$$, !1, !0);
        $skip_rename$$ ? $_this$$29$$.$_emitEvent$({obj:$t$$17$$, name:this.getText($t$$17$$), parent:$p$$14$$, position:$pos$$16$$}) : this.$_crrm_showInput$($t$$17$$, function($obj$$119$$, $new_name$$1$$) {
          $_this$$29$$.$_emitEvent$({obj:$obj$$119$$, name:$new_name$$1$$, parent:$p$$14$$, position:$pos$$16$$});
        });
      });
    }, $_isHtml$:function($s$$32$$) {
      var $ret$$78$$ = !1;
      $s$$32$$ && 3 <= $s$$32$$.length && ($s$$32$$ = $s$$32$$.trim(), $ret$$78$$ = "\x3c" === $s$$32$$.charAt(0));
      return $ret$$78$$;
    }, $_applyEmptyText$:function() {
      var $txt$$ = this.options.emptyText;
      "string" !== typeof $txt$$ && ($txt$$ = this.$_getString$("labelNoData"));
      if ($txt$$ && 0 < $txt$$.length) {
        var $$u$$2$$ = this.$_$container_ul$, $$d$$ = $$$$63$$("\x3cli class\x3d'oj-tree-empty'\x3e\x3c/li\x3e");
        $$d$$[0].textContent = $txt$$;
        $$u$$2$$.empty().append($$d$$);
      }
    }, $_processSubId$:function($locator$$62_sNode$$) {
      var $c$$56_i$$493_subId$$67$$, $node$$170$$, $a$$123_sKey$$;
      $a$$123_sKey$$ = null;
      var $ret$$79$$;
      $locator$$62_sNode$$ && ($c$$56_i$$493_subId$$67$$ = $locator$$62_sNode$$.subId);
      if (!$c$$56_i$$493_subId$$67$$) {
        return null;
      }
      $a$$123_sKey$$ = $c$$56_i$$493_subId$$67$$.split("[");
      if (3 === $a$$123_sKey$$.length && ($a$$123_sKey$$[0] = $a$$123_sKey$$[0].trim(), "oj-tree-node" === $a$$123_sKey$$[0] && ($a$$123_sKey$$[1] = $a$$123_sKey$$[1].trim(), $c$$56_i$$493_subId$$67$$ = $a$$123_sKey$$[1].charAt(0), $c$$56_i$$493_subId$$67$$ = $a$$123_sKey$$[1].indexOf($c$$56_i$$493_subId$$67$$, 1), 0 <= $c$$56_i$$493_subId$$67$$ && ($locator$$62_sNode$$ = $a$$123_sKey$$[1].substring(1, $c$$56_i$$493_subId$$67$$).trim(), $a$$123_sKey$$[2] = $a$$123_sKey$$[2].trim(), $c$$56_i$$493_subId$$67$$ = 
      $a$$123_sKey$$[2].charAt(0), $c$$56_i$$493_subId$$67$$ = $a$$123_sKey$$[2].indexOf($c$$56_i$$493_subId$$67$$, 1), 0 <= $c$$56_i$$493_subId$$67$$)))) {
        $a$$123_sKey$$ = $a$$123_sKey$$[2].substring(1, $c$$56_i$$493_subId$$67$$).trim();
        try {
          $node$$170$$ = this.$_getNode$($locator$$62_sNode$$);
        } catch ($e$$134$$) {
          $node$$170$$ = null;
        }
        if ($a$$123_sKey$$ && $node$$170$$ && -1 !== $node$$170$$) {
          switch($a$$123_sKey$$) {
            case "icon":
              this.$_data$.$themes$.icons && ($ret$$79$$ = $node$$170$$.find(" \x3e a \x3e ins:eq(0)"));
              break;
            case "link":
              $ret$$79$$ = $node$$170$$.find(" \x3e a:eq(0)");
              break;
            case "disclosure":
              this.$_isLeaf$($node$$170$$) || ($ret$$79$$ = $node$$170$$.find(" \x3e ins:eq(0)"));
              break;
            case "title":
              $ret$$79$$ = $node$$170$$.find(" \x3e a \x3e span");
          }
        }
      }
      return $ret$$79$$ ? $ret$$79$$.length ? $ret$$79$$[0] : null : null;
    }, $_getSubIdFromNodeElem$:function($elem$$120$$) {
      var $node$$171_type$$112$$ = $elem$$120$$ ? this.$_getNode$($elem$$120$$) : null, $parent$$54_parentType$$, $subid$$1$$ = null;
      $node$$171_type$$112$$ && -1 != $node$$171_type$$112$$ && $node$$171_type$$112$$.length && $node$$171_type$$112$$.hasClass("oj-tree-node") && $elem$$120$$.tagName && $elem$$120$$.parentNode && ($node$$171_type$$112$$ = $elem$$120$$.tagName, $parent$$54_parentType$$ = $elem$$120$$.parentNode, $parent$$54_parentType$$ = $parent$$54_parentType$$.tagName, "SPAN" === $node$$171_type$$112$$ ? $subid$$1$$ = "title" : "A" === $node$$171_type$$112$$ ? $subid$$1$$ = "link" : "INS" === $node$$171_type$$112$$ && 
      ($elem$$120$$ = $$$$63$$($elem$$120$$), "LI" === $parent$$54_parentType$$ && $elem$$120$$.hasClass("oj-tree-disclosure-icon") ? $subid$$1$$ = "disclosure" : "A" === $parent$$54_parentType$$ && $elem$$120$$.hasClass("oj-tree-node-icon") && ($subid$$1$$ = "icon")));
      return $subid$$1$$;
    }, $_hideDots$:function() {
      this.$_data$.$themes$.$dots$ = !1;
      this.$_$container$.children("ul").addClass("oj-tree-no-dots");
    }, $_showDots$:function() {
      this.$_data$.$themes$.$dots$ = !0;
      this.$_$container$.children("ul").removeClass("oj-tree-no-dots");
    }, $_isOptExpandAll$:function() {
      var $s$$33$$ = this.options.initExpanded;
      return $s$$33$$ && "all" == $s$$33$$ || $$$$63$$.isArray($s$$33$$) && $s$$33$$.length && "all" == $s$$33$$[0];
    }, $_getString$:function($key$$203$$) {
      var $oStrings$$ = this.$_data$.$core$.$strings$, $s$$34$$;
      $s$$34$$ = $oStrings$$[$key$$203$$];
      $s$$34$$ || ($s$$34$$ = this.$getTranslatedString$($key$$203$$), $s$$34$$ = this.$_escapeHtml$($s$$34$$), $oStrings$$[$key$$203$$] = $s$$34$$);
      return $s$$34$$;
    }, $_escapeHtml$:function($text$$27$$) {
      var $div$$13$$ = document.createElement("div");
      $$$$63$$($div$$13$$).text($text$$27$$);
      return $div$$13$$.textContent;
    }, $_getNodeHeight$:function() {
      return this.$_data$.$core$.$li_height$;
    }, $_getAnimDuration$:function() {
      var $ret$$80$$ = 0, $span$$1_val$$94$$, $$div$$1_c$$57_s$$35$$;
      window.getComputedStyle && ($$div$$1_c$$57_s$$35$$ = this.$_data$.ui.$animDurDiv$, $$div$$1_c$$57_s$$35$$ || ($$div$$1_c$$57_s$$35$$ = $$$$63$$("\x3cdiv id\x3d'ojtree-comp-animduration'\x3e\x3cspan class\x3d'oj-tree-transition'\x3edummy\x3c/span\x3e\x3c/div\x3e"), this.$_data$.ui.$animDurDiv$ = $$div$$1_c$$57_s$$35$$, $$$$63$$("body").append($$div$$1_c$$57_s$$35$$)), $span$$1_val$$94$$ = $$div$$1_c$$57_s$$35$$[0].childNodes[0], $span$$1_val$$94$$ = window.getComputedStyle($span$$1_val$$94$$), 
      $span$$1_val$$94$$ = $span$$1_val$$94$$.transitionDuration ? $span$$1_val$$94$$.transitionDuration : $span$$1_val$$94$$["-webkit-transition-duration"] ? $span$$1_val$$94$$["-webkit-transition-duration"] : 0, $$div$$1_c$$57_s$$35$$.detach(), "string" == typeof $span$$1_val$$94$$ && 1 < $span$$1_val$$94$$.length && ($$div$$1_c$$57_s$$35$$ = $span$$1_val$$94$$.charAt($span$$1_val$$94$$.length - 1).toLowerCase(), "s" == $$div$$1_c$$57_s$$35$$ ? ($span$$1_val$$94$$ = $span$$1_val$$94$$.substring(0, 
      $span$$1_val$$94$$.length - 1), $span$$1_val$$94$$ = parseFloat($span$$1_val$$94$$), isNaN($span$$1_val$$94$$) || ($ret$$80$$ = 1E3 * $span$$1_val$$94$$)) : 2 < $span$$1_val$$94$$.length && ($$div$$1_c$$57_s$$35$$ = $span$$1_val$$94$$.substring($span$$1_val$$94$$.length - 2).toLowerCase(), "ms" == $$div$$1_c$$57_s$$35$$ && ($span$$1_val$$94$$ = parseFloat($span$$1_val$$94$$), isNaN($span$$1_val$$94$$) || ($ret$$80$$ = $span$$1_val$$94$$)))));
      return $ret$$80$$;
    }, $_varCopy$:function($obj$$120$$, $s$$36$$) {
      var $o$$33$$ = {};
      $o$$33$$[$s$$36$$] = $obj$$120$$[$s$$36$$];
      return $$$$63$$.extend(!0, {}, $o$$33$$)[$s$$36$$];
    }, $_trace$:function($s$$37$$) {
      this.$_emitEvent$({obj:{msg:$s$$37$$}}, "trace", !0);
    }});
  })();
});
