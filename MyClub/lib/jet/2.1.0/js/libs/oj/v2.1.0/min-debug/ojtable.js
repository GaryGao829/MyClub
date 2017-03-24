/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "promise", "ojdnd", "ojs/ojdomscroller", "ojs/ojeditablevalue", "ojs/ojmenu", "ojs/ojdatasource-common", "ojs/ojpagingtabledatasource", "ojs/ojflattenedtreetabledatasource"], function($oj$$14$$, $$$$14$$) {
  (function() {
    $oj$$14$$.$__registerWidget$("oj.ojTable", $$$$14$$.oj.baseComponent, {version:"1.0.0", defaultElement:"\x3ctable\x3e", widgetEventPrefix:"oj", options:{accessibility:null, currentRow:null, data:null, display:"list", dnd:{drag:null, drop:null, reorder:{columns:"disabled"}}, editMode:"none", emptyText:null, horizontalGridVisible:"auto", rowRenderer:null, scrollPolicy:"auto", scrollPolicyOptions:{fetchSize:25, maxCount:500}, selection:[], selectionMode:null, verticalGridVisible:"auto", columns:[{renderer:null, 
    className:null, field:null, footerClassName:null, footerRenderer:null, footerStyle:null, headerClassName:null, headerRenderer:null, headerStyle:null, headerText:null, id:null, sortable:"auto", sortProperty:null, style:null}], columnsDefault:{renderer:null, className:null, field:null, footerClassName:null, footerRenderer:null, footerStyle:null, headerClassName:null, headerRenderer:null, headerStyle:null, headerText:null, sortable:"auto", sortProperty:null, style:null}, beforeCurrentRow:null, beforeRowEdit:null, 
    beforeRowEditEnd:null, ready:null, sort:null, optionChange:null}, $_BUNDLE_KEY$:{$_MSG_FETCHING_DATA$:"msgFetchingData", $_MSG_NO_DATA$:"msgNoData", $_LABEL_SELECT_COLUMN$:"labelSelectColumn", $_LABEL_SELECT_ROW$:"labelSelectRow", $_LABEL_EDIT_ROW$:"labelEditRow", $_LABEL_SELECT_AND_EDIT_ROW$:"labelSelectAndEditRow"}, $_LOGGER_MSG$:{$_ERR_PRECURRENTROW_ERROR_SUMMARY$:"Did not change current row due to error.", $_ERR_PRECURRENTROW_ERROR_DETAIL$:"Error detail: {error}.", $_ERR_CURRENTROW_UNAVAILABLE_INDEX_SUMMARY$:"Did not change current row due to unavailable row index.", 
    $_ERR_CURRENTROW_UNAVAILABLE_INDEX_DETAIL$:"Unavailable row index: {rowIdx}.", $_ERR_REFRESHROW_INVALID_INDEX_SUMMARY$:"Invalid row index value.", $_ERR_REFRESHROW_INVALID_INDEX_DETAIL$:"Row index: {rowIdx}.", $_ERR_DATA_INVALID_TYPE_SUMMARY$:"Invalid data type.", $_ERR_DATA_INVALID_TYPE_DETAIL$:"Please specify the appropriate data type.", $_ERR_ELEMENT_INVALID_TYPE_SUMMARY$:"Invalid element type.", $_ERR_ELEMENT_INVALID_TYPE_DETAIL$:"Only a \x3ctable\x3e element can be specified for ojTable.", 
    $_ERR_DOM_SCROLLER_MAX_COUNT_SUMMARY$:"Exceeded maximum rows for table scrolling.", $_ERR_DOM_SCROLLER_MAX_COUNT_DETAIL$:"Please reload with smaller data set."}, $_FIELD_ID$:"id", $_CONST_DATA$:"data", $_CONST_INDEXES$:"indexes", $_CONST_KEY$:"key", $_CONST_KEYS$:"keys", $_CONST_STARTINDEX$:"startIndex", $_CONST_ENDINDEX$:"endIndex", $_CONST_PAGESIZE$:"pageSize", $_CONST_COLUMN$:"column", $_CONST_ROW$:"row", $_COLUMN_HEADER_ID$:"_headerColumn", $_COLUMN_HEADER_TEXT_ID$:"_headerColumnText", $_COLUMN_HEADER_ASC_ID$:"_headerColumnAsc", 
    $_COLUMN_HEADER_DSC_ID$:"_headerColumnDsc", $_COLUMN_HEADER_ID_PREFIX$:"_hdrCol", $_FOCUS_CALLED$:"_focusedCalled", $_OPTION_AUTO$:"auto", $_OPTION_ENABLED$:"enabled", $_OPTION_DISABLED$:"disabled", $_OPTION_NONE$:"none", $_OPTION_EDIT_MODE$:{$_NONE$:"none", $_ROW_EDIT$:"rowEdit"}, $_OPTION_SELECTION_MODES$:{$_SINGLE$:"single", $_MULTIPLE$:"multiple"}, $_OPTION_SCROLL_POLICY$:{$_AUTO$:"auto", $_LOADMORE_ON_SCROLL$:"loadMoreOnScroll"}, $_COLUMN_SORT_ORDER$:{$_ASCENDING$:"ascending", $_DESCENDING$:"descending"}, 
    $_DND_REORDER_TABLE_ID_DATA_KEY$:"oj-table-dnd-reorder-table-id", $_KEYBOARD_CODES$:{$_KEYBOARD_CODE_SPACEBAR$:32, $_KEYBOARD_CODE_ENTER$:13, $_KEYBOARD_CODE_UP$:38, $_KEYBOARD_CODE_DOWN$:40, $_KEYBOARD_CODE_LEFT$:37, $_KEYBOARD_CODE_RIGHT$:39, $_KEYBOARD_CODE_HOME$:36, $_KEYBOARD_CODE_END$:35, $_KEYBOARD_CODE_TAB$:9, $_KEYBOARD_CODE_ESC$:27, $_KEYBOARD_CODE_F2$:113, $_KEYBOARD_MODIFIER_SHIFT$:"shiftKey"}, getContextByNode:function($node$$57$$) {
      return this.getSubIdByNode($node$$57$$, !0);
    }, getDataForVisibleRow:function($rowIndex$$12$$) {
      var $row$$47_tableBodyRow$$ = this.$_getTableDomUtils$().$getTableBodyRow$($rowIndex$$12$$);
      return null != $row$$47_tableBodyRow$$ ? ($row$$47_tableBodyRow$$ = JSON.parse($row$$47_tableBodyRow$$.data("rowData")), {key:$row$$47_tableBodyRow$$.key, data:$row$$47_tableBodyRow$$.data, index:$rowIndex$$12$$}) : null;
    }, getNodeBySubId:function($columnIdx_locator$$18_tableHeaderColumn$$) {
      if (null == $columnIdx_locator$$18_tableHeaderColumn$$) {
        return this.element ? this.element[0] : null;
      }
      var $rowIdx$$1_subId$$20_tableFooterCell_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$ = $columnIdx_locator$$18_tableHeaderColumn$$.subId;
      if ("oj-table-cell" === $rowIdx$$1_subId$$20_tableFooterCell_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$) {
        return $rowIdx$$1_subId$$20_tableFooterCell_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$ = parseInt($columnIdx_locator$$18_tableHeaderColumn$$.rowIndex, 10), $columnIdx_locator$$18_tableHeaderColumn$$ = parseInt($columnIdx_locator$$18_tableHeaderColumn$$.columnIndex, 10), this.$_getTableDomUtils$().$getTableBodyLogicalCells$($rowIdx$$1_subId$$20_tableFooterCell_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$)[$columnIdx_locator$$18_tableHeaderColumn$$];
      }
      if ("oj-table-header" === $rowIdx$$1_subId$$20_tableFooterCell_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$ || "oj-table-sort-ascending" === $rowIdx$$1_subId$$20_tableFooterCell_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$ || "oj-table-sort-descending" === $rowIdx$$1_subId$$20_tableFooterCell_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$) {
        if ($columnIdx_locator$$18_tableHeaderColumn$$ = $columnIdx_locator$$18_tableHeaderColumn$$.index, $columnIdx_locator$$18_tableHeaderColumn$$ = $$$$14$$(this.$_getTableDomUtils$().$getTableHeaderLogicalColumns$()[$columnIdx_locator$$18_tableHeaderColumn$$]), null != $columnIdx_locator$$18_tableHeaderColumn$$) {
          if ("oj-table-header" === $rowIdx$$1_subId$$20_tableFooterCell_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$) {
            return $columnIdx_locator$$18_tableHeaderColumn$$[0];
          }
          $rowIdx$$1_subId$$20_tableFooterCell_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$ = "oj-table-sort-ascending" === $rowIdx$$1_subId$$20_tableFooterCell_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$ ? $columnIdx_locator$$18_tableHeaderColumn$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_LINK_CLASS$) : $columnIdx_locator$$18_tableHeaderColumn$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DSC_LINK_CLASS$);
          if (0 < $rowIdx$$1_subId$$20_tableFooterCell_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$.length) {
            return $rowIdx$$1_subId$$20_tableFooterCell_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$[0];
          }
        }
      } else {
        if ("oj-table-footer" === $rowIdx$$1_subId$$20_tableFooterCell_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$ && ($columnIdx_locator$$18_tableHeaderColumn$$ = $columnIdx_locator$$18_tableHeaderColumn$$.index, $rowIdx$$1_subId$$20_tableFooterCell_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$ = this.$_getTableDomUtils$().$getTableFooterLogicalCells$()[$columnIdx_locator$$18_tableHeaderColumn$$], null != $rowIdx$$1_subId$$20_tableFooterCell_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$)) {
          return $rowIdx$$1_subId$$20_tableFooterCell_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$;
        }
      }
      return null;
    }, getSubIdByNode:function($node$$58$$, $ignoreSortIcons$$) {
      var $cell$$30_footer_header$$38_headerSortAsc_headerSortDsc$$ = $$$$14$$($node$$58$$).closest("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_CLASS$);
      if (0 < $cell$$30_footer_header$$38_headerSortAsc_headerSortDsc$$.length) {
        return{subId:"oj-table-cell", rowIndex:this.$_getTableDomUtils$().$getElementRowIdx$($cell$$30_footer_header$$38_headerSortAsc_headerSortDsc$$), columnIndex:this.$_getTableDomUtils$().$getElementColumnIdx$($cell$$30_footer_header$$38_headerSortAsc_headerSortDsc$$)};
      }
      $cell$$30_footer_header$$38_headerSortAsc_headerSortDsc$$ = $$$$14$$($node$$58$$).closest("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_LINK_CLASS$);
      if (0 < $cell$$30_footer_header$$38_headerSortAsc_headerSortDsc$$.length) {
        return{subId:$ignoreSortIcons$$ ? "oj-table-header" : "oj-table-sort-ascending", index:this.$_getTableDomUtils$().$getElementColumnIdx$($cell$$30_footer_header$$38_headerSortAsc_headerSortDsc$$)};
      }
      $cell$$30_footer_header$$38_headerSortAsc_headerSortDsc$$ = $$$$14$$($node$$58$$).closest("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DSC_LINK_CLASS$);
      if (0 < $cell$$30_footer_header$$38_headerSortAsc_headerSortDsc$$.length) {
        return{subId:$ignoreSortIcons$$ ? "oj-table-header" : "oj-table-sort-descending", index:this.$_getTableDomUtils$().$getElementColumnIdx$($cell$$30_footer_header$$38_headerSortAsc_headerSortDsc$$)};
      }
      $cell$$30_footer_header$$38_headerSortAsc_headerSortDsc$$ = $$$$14$$($node$$58$$).closest("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_CELL_CLASS$);
      if (0 < $cell$$30_footer_header$$38_headerSortAsc_headerSortDsc$$.length) {
        return{subId:"oj-table-header", index:this.$_getTableDomUtils$().$getElementColumnIdx$($cell$$30_footer_header$$38_headerSortAsc_headerSortDsc$$)};
      }
      $cell$$30_footer_header$$38_headerSortAsc_headerSortDsc$$ = $$$$14$$($node$$58$$).closest("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_CELL_CLASS$);
      return 0 < $cell$$30_footer_header$$38_headerSortAsc_headerSortDsc$$.length ? {subId:"oj-table-footer", index:this.$_getTableDomUtils$().$getElementColumnIdx$($cell$$30_footer_header$$38_headerSortAsc_headerSortDsc$$)} : null;
    }, refresh:function() {
      this._super();
      this.$_refresh$();
    }, refreshRow:function($rowIdx$$2$$) {
      var $data$$106_errSummary$$9$$ = this.$_getData$();
      if (!$data$$106_errSummary$$9$$) {
        return!1;
      }
      var $errDetail$$2_rowKey$$14_tableBodyRows$$ = this.$_getTableDomUtils$().$getTableBodyRows$();
      if (isNaN($rowIdx$$2$$) || 0 > $rowIdx$$2$$ || null != $errDetail$$2_rowKey$$14_tableBodyRows$$ && $rowIdx$$2$$ >= $errDetail$$2_rowKey$$14_tableBodyRows$$.length) {
        throw $data$$106_errSummary$$9$$ = this.$_LOGGER_MSG$.$_ERR_REFRESHROW_INVALID_INDEX_SUMMARY$, $errDetail$$2_rowKey$$14_tableBodyRows$$ = $oj$$14$$.$Translations$.$applyParameters$(this.$_LOGGER_MSG$.$_ERR_REFRESHROW_INVALID_INDEX_DETAIL$, {rowIdx:$rowIdx$$2$$.toString()}), new RangeError($data$$106_errSummary$$9$$ + "\n" + $errDetail$$2_rowKey$$14_tableBodyRows$$);
      }
      var $row$$48$$ = this.getDataForVisibleRow($rowIdx$$2$$), $self$$107$$ = this;
      return null == $row$$48$$ ? ($errDetail$$2_rowKey$$14_tableBodyRows$$ = this.$_getRowKeyForRowIdx$($rowIdx$$2$$), $row$$48$$ = $data$$106_errSummary$$9$$.get($errDetail$$2_rowKey$$14_tableBodyRows$$), null == $row$$48$$ ? !1 : this.$_queueTask$(function() {
        return $row$$48$$.then(function($row$$49$$) {
          $self$$107$$.$_refreshTableBodyRow$($rowIdx$$2$$, $row$$49$$);
          $self$$107$$ = null;
        }).then(function() {
          return!0;
        });
      })) : this.$_queueTask$(function() {
        $self$$107$$.$_refreshTableBodyRow$($rowIdx$$2$$, $row$$48$$);
        $self$$107$$ = null;
        return!0;
      });
    }, widget:function() {
      var $tableContainer$$ = this.$_getTableDomUtils$().$getTableContainer$();
      return null != $tableContainer$$ ? $tableContainer$$ : this.element;
    }, _ComponentCreate:function() {
      this._super();
      this.$_draw$();
      this.$_registerCustomEvents$();
      this._on(this.$_events$);
      if (this.$_isTouchDevice$()) {
        var $tableContainer$$1$$ = this.$_getTableDomUtils$().$getTableContainer$();
        this._on($tableContainer$$1$$, this.$_eventsContainer$);
      }
      this.$_registerDomEventListeners$();
      this.$_registerDataSourceEventListeners$();
      this.$_cachedOptions$ = $$$$14$$.extend(!0, {}, this.options);
      this.$_setEditableRowIdx$(null);
    }, $_AfterCreate$:function() {
      this._super();
      this.$_getTableDomUtils$().$createContextMenu$(this.$_handleContextMenuSelect$.bind(this));
      this.$_initFetch$();
    }, $_NotifyContextMenuGesture$:function($contextMenu$$2$$, $event$$268$$, $eventType$$34$$) {
      var $openOptions$$3$$ = {};
      this.$_contextMenuEvent$ = $event$$268$$.originalEvent;
      if (!(this.$_isNodeEditable$($$$$14$$(this.$_contextMenuEvent$.target)) || this.$_isNodeClickable$($$$$14$$(this.$_contextMenuEvent$.target)) || "touch" == $eventType$$34$$ && this.$_isNodeDraggable$($$$$14$$(this.$_contextMenuEvent$.target)))) {
        var $columnIdx$$1_headerColumn$$ = this.$_getTableDomUtils$().$getFirstAncestor$($$$$14$$(this.$_contextMenuEvent$.target), "oj-table-column-header-cell"), $columnIdx$$1_headerColumn$$ = null == $columnIdx$$1_headerColumn$$ ? this.$_getTableDomUtils$().$getTableHeaderColumn$(this.$_activeColumnIndex$) : $columnIdx$$1_headerColumn$$, $focusedRowIdx_table_tableBodyCell_tableBodyRow$$1$$ = this.$_getTableDomUtils$().$getFirstAncestor$($$$$14$$(this.$_contextMenuEvent$.target), "oj-table-data-cell");
        null != $focusedRowIdx_table_tableBodyCell_tableBodyRow$$1$$ && ($columnIdx$$1_headerColumn$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($focusedRowIdx_table_tableBodyCell_tableBodyRow$$1$$), $columnIdx$$1_headerColumn$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($columnIdx$$1_headerColumn$$));
        "keydown" === this.$_contextMenuEvent$.type && ($focusedRowIdx_table_tableBodyCell_tableBodyRow$$1$$ = this.$_tableDomUtils$.$getTable$(), this.$_contextMenuEvent$.target == $focusedRowIdx_table_tableBodyCell_tableBodyRow$$1$$[0] ? null != $columnIdx$$1_headerColumn$$ && null != $columnIdx$$1_headerColumn$$[0] ? $openOptions$$3$$.position = {my:"start top", at:"start bottom", of:$columnIdx$$1_headerColumn$$[0]} : ($focusedRowIdx_table_tableBodyCell_tableBodyRow$$1$$ = this.$_getFocusedRowIdx$(), 
        0 <= $focusedRowIdx_table_tableBodyCell_tableBodyRow$$1$$ ? ($focusedRowIdx_table_tableBodyCell_tableBodyRow$$1$$ = this.$_getTableDomUtils$().$getTableBodyRow$($focusedRowIdx_table_tableBodyCell_tableBodyRow$$1$$), $openOptions$$3$$.position = {my:"start top", at:"start bottom", of:$focusedRowIdx_table_tableBodyCell_tableBodyRow$$1$$[0]}) : $openOptions$$3$$.position = {my:"start top", at:"start bottom", of:this.$_contextMenuEvent$.target}) : $openOptions$$3$$.position = {my:"start top", 
        at:"start bottom", of:this.$_contextMenuEvent$.target});
        $columnIdx$$1_headerColumn$$.attr("data-oj-sortable") == this.$_OPTION_ENABLED$ ? ($$$$14$$($contextMenu$$2$$.element).find("[data-oj-command\x3doj-table-sortAsc]").removeClass("oj-disabled"), $$$$14$$($contextMenu$$2$$.element).find("[data-oj-command\x3doj-table-sortDsc]").removeClass("oj-disabled")) : ($$$$14$$($contextMenu$$2$$.element).find("[data-oj-command\x3doj-table-sortAsc]").addClass("oj-disabled"), $$$$14$$($contextMenu$$2$$.element).find("[data-oj-command\x3doj-table-sortDsc]").addClass("oj-disabled"));
        this.$_OpenContextMenu$($event$$268$$, $eventType$$34$$, $openOptions$$3$$);
      }
    }, _destroy:function() {
      this.$_getData$();
      this.$_unregisterDataSourceEventListeners$();
      this.$_unregisterResizeListener$();
      this.$_getTableDomUtils$().$getTableBody$().removeAttr($oj$$14$$.Components.$_OJ_CONTAINER_ATTR$);
      this.element.children().remove("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_HEADER_CLASS$);
      this.element.children().remove("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_BODY_CLASS$);
      this.element.children().remove("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_CLASS$);
      this.element.children().remove("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_STATUS_MESSAGE_CLASS$);
      this.element.children().remove("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_NO_DATA_MESSAGE_CLASS$);
      $oj$$14$$.$DomUtils$.unwrap(this.element, this.$_getTableDomUtils$().$getTableContainer$());
      this.element.removeClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_CLASS$);
      this.$_componentDestroyed$ = !0;
    }, $_draw$:function() {
      this.$_setFinalTask$(function() {
        this.$_getTableDomUtils$().$refreshTableDimensions$();
        this.$_setSelection$(this.options.selection);
        if (this.$_hasEditableRow$()) {
          var $editableRowIdx_editableTableBodyRow$$ = this.$_getEditableRowIdx$(), $editableRowIdx_editableTableBodyRow$$ = this.$_getTableDomUtils$().$getTableBodyRow$($editableRowIdx_editableTableBodyRow$$);
          null != $editableRowIdx_editableTableBodyRow$$ && $editableRowIdx_editableTableBodyRow$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_EDIT_CLASS$);
        }
        this.$_isLoadMoreOnScroll$() && !this.$_dataFetching$ && this.$_domScroller$.checkViewport().then(this.$_domScrollerMaxCountFunc$, null);
      });
      if (!this.element.is("table")) {
        throw new RangeError(this.$_LOGGER_MSG$.$_ERR_ELEMENT_INVALID_TYPE_SUMMARY$ + "\n" + this.$_LOGGER_MSG$.$_ERR_ELEMENT_INVALID_TYPE_DETAIL$);
      }
      this.element.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_ELEMENT_CLASS$);
      this.$_getTableDomUtils$().$createInitialTable$(this.$_isTableHeaderless$(), this.$_isTableFooterless$());
      this.$_getTableDomUtils$().$styleInitialTable$();
      this.$_refreshTableHeader$();
      this.$_refreshTableFooter$();
      this.$_refreshTableBody$();
      this.$_getTableDomUtils$().$refreshTableDimensions$();
      this.$_isLoadMoreOnScroll$() && this.$_registerDomScroller$();
      this.options.disabled && this.disable();
      this.$_registerResizeListener$();
    }, $_events$:{blur:function($event$$269$$) {
      var $table$$1$$ = this.$_getTableDomUtils$().$getTable$();
      0 < $table$$1$$.has($event$$269$$.relatedTarget).length || null != $event$$269$$.originalEvent && $event$$269$$.originalEvent.explicitOriginalTarget == $table$$1$$[0] || (this.$_clearKeyboardKeys$(), this.$_clearFocusedHeaderColumn$(), this.$_clearFocusedRow$(!1), this.$_setTableNavigationMode$(!1));
    }, "blur .oj-table-data-cell":function($event$$270$$) {
      $$$$14$$($event$$270$$.currentTarget).hasClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_EDIT_CLASS$) && $$$$14$$($event$$270$$.currentTarget).removeClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_EDIT_CLASS$);
    }, focus:function($event$$271$$) {
      this.$_checkRowOrHeaderColumnFocus$($event$$271$$);
    }, focusin:function($event$$272$$) {
      0 < this.$_getTableDomUtils$().$getTableBody$().has($event$$272$$.target).length && !this.$_tableNavMode$ && !this.$_hasEditableRow$() && !this.$_temporaryTableChildElementFocus$ && this.$_getTableDomUtils$().$getTable$().focus();
    }, "focus .oj-table-column-header-acc-asc-link":function($event$$273$$) {
      var $self$$108$$ = this;
      setTimeout(function() {
        $self$$108$$.$_checkRowOrHeaderColumnFocus$($event$$273$$);
        $self$$108$$ = null;
      }, 0);
    }, "focus .oj-table-data-cell":function($event$$274$$) {
      this.$_getTableDomUtils$().$getElementRowIdx$($$$$14$$($event$$274$$.currentTarget)) == this.$_getEditableRowIdx$() && $$$$14$$($event$$274$$.currentTarget).addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_EDIT_CLASS$);
    }, "click .oj-table-checkbox-acc-select-column":function($event$$275$$) {
      var $columnIdx$$2$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($$$$14$$($event$$275$$.currentTarget)), $selected$$15$$ = $$$$14$$($event$$275$$.currentTarget).is(":checked");
      $selected$$15$$ && this.$_setHeaderColumnFocus$($columnIdx$$2$$, !0, !0, null);
      this.$_setHeaderColumnSelection$($columnIdx$$2$$, $selected$$15$$, $event$$275$$.currentTarget, $event$$275$$, !0);
      $event$$275$$.stopPropagation();
    }, "click .oj-table-checkbox-acc-select-row":function($event$$276$$) {
      var $rowIdx$$4$$ = this.$_getTableDomUtils$().$getElementRowIdx$($$$$14$$($event$$276$$.currentTarget)), $selected$$16$$ = $$$$14$$($event$$276$$.currentTarget).is(":checked"), $focused$$ = !1;
      $selected$$16$$ ? $focused$$ = this.$_setRowFocus$($rowIdx$$4$$, !0, !0, null, $event$$276$$, !0) : this.$_setTableEditable$(!1, !1, 0, !0, $event$$276$$);
      $focused$$ && (this.$_setRowSelection$($rowIdx$$4$$, $selected$$16$$, $event$$276$$.currentTarget, $event$$276$$, !0), this.$_setTableEditable$(!0, !1, 0, !0, $event$$276$$));
      $event$$276$$.stopPropagation();
    }, keydown:function($event$$277$$) {
      this.$_addKeyboardKey$($event$$277$$.keyCode);
      if (this.$_getKeyboardKeys$()[0] == this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_TAB$ || !(this.$_isNodeEditable$($$$$14$$($event$$277$$.target)) || null != this.$_getTableDomUtils$().$getTableFooter$() && 0 < this.$_getTableDomUtils$().$getTableFooter$().has($event$$277$$.target).length)) {
        if (1 == this.$_getKeyboardKeys$().length || 2 == this.$_getKeyboardKeys$().length && $event$$277$$[this.$_KEYBOARD_CODES$.$_KEYBOARD_MODIFIER_SHIFT$]) {
          if (this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_UP$) || this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_DOWN$) || this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_SPACEBAR$) || this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_HOME$) || this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_END$)) {
            $event$$277$$.preventDefault(), $event$$277$$.stopPropagation();
          }
          this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_UP$) || this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_DOWN$) ? this.$_handleKeydownUpDown$($event$$277$$) : this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_LEFT$) || this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_RIGHT$) ? this.$_handleKeydownLeftRight$($event$$277$$) : this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_TAB$) && this.$_handleKeydownTab$($event$$277$$);
        }
      }
    }, keyup:function($event$$278$$) {
      if (1 == this.$_getKeyboardKeys$().length) {
        var $keyboardCode1$$1$$ = this.$_getKeyboardKeys$()[0];
        if ($keyboardCode1$$1$$ != this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_ESC$ && $keyboardCode1$$1$$ != this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_ENTER$ && $keyboardCode1$$1$$ != this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_F2$ && $keyboardCode1$$1$$ != this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_TAB$ && (this.$_isNodeEditable$($$$$14$$($event$$278$$.target)) || null != this.$_getTableDomUtils$().$getTableFooter$() && 0 < this.$_getTableDomUtils$().$getTableFooter$().has($event$$278$$.target).length)) {
          this.$_removeKeyboardKey$($keyboardCode1$$1$$);
          return;
        }
        $keyboardCode1$$1$$ == this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_SPACEBAR$ ? this.$_handleKeyupSpacebar$($event$$278$$) : $keyboardCode1$$1$$ == this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_ENTER$ ? this.$_handleKeyupEnter$($event$$278$$) : $keyboardCode1$$1$$ == this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_HOME$ ? this.$_handleKeyupHome$($event$$278$$) : $keyboardCode1$$1$$ == this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_END$ ? this.$_handleKeyupEnd$($event$$278$$) : $keyboardCode1$$1$$ == this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_ESC$ ? 
        this.$_handleKeyupEsc$($event$$278$$) : $keyboardCode1$$1$$ == this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_F2$ && this.$_handleKeyupF2$($event$$278$$);
        this.$_removeKeyboardKey$($keyboardCode1$$1$$);
      }
      this.$_removeKeyboardKey$($event$$278$$.keyCode);
    }, "mousedown .oj-table-body":function($event$$279$$) {
      this.$_mouseDownRowIdx$ = this.$_getTableDomUtils$().$getElementRowIdx$($$$$14$$($event$$279$$.target));
      if (null != this.$_mouseDownRowIdx$) {
        var $tableBodyRow$$2$$ = this.$_getTableDomUtils$().$getTableBodyRow$(this.$_mouseDownRowIdx$);
        null != $tableBodyRow$$2$$ && $tableBodyRow$$2$$.prop("draggable") ? this.$_mouseDownRowIdx$ = null : null == this.$_mouseDownRowIdx$ || $event$$279$$[this.$_KEYBOARD_CODES$.$_KEYBOARD_MODIFIER_SHIFT$] || $oj$$14$$.$DomUtils$.$isMetaKeyPressed$($event$$279$$) || this.$_getRowSelection$(this.$_mouseDownRowIdx$) && 1 == this.$_getSelectedRowIdxs$().length || this.$_nonContiguousSelection$ || this.$_clearSelectedRows$();
      }
    }, "mouseup .oj-table-body":function() {
      this.$_mouseDownRowIdx$ = null;
    }, "mouseenter .oj-table-body-row":function($event$$281$$) {
      $$$$14$$($event$$281$$.currentTarget).addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_HOVER$);
      this.$_handleMouseEnterSelection$($event$$281$$.target);
    }, "mouseleave .oj-table-body-row":function($event$$282$$) {
      $$$$14$$($event$$282$$.currentTarget).removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_HOVER$);
    }, "mousedown .oj-table-column-header-cell":function($event$$283$$) {
      var $columnIdx$$3$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($$$$14$$($event$$283$$.currentTarget));
      this.$_setHeaderColumnFocus$($columnIdx$$3$$, !0, !0, $event$$283$$);
      $$$$14$$($event$$283$$.target).data(this.$_FOCUS_CALLED$, !0);
    }, "mouseenter .oj-table-column-header-cell":function($columnIdx$$4_event$$284$$) {
      $$$$14$$($columnIdx$$4_event$$284$$.currentTarget).addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_HOVER$);
      $columnIdx$$4_event$$284$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($$$$14$$($columnIdx$$4_event$$284$$.currentTarget));
      this.$_showTableHeaderColumnSortLink$($columnIdx$$4_event$$284$$);
    }, "mouseleave .oj-table-column-header-cell":function($columnIdx$$5_event$$285$$) {
      $$$$14$$($columnIdx$$5_event$$285$$.currentTarget).removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_HOVER$);
      $columnIdx$$5_event$$285$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($$$$14$$($columnIdx$$5_event$$285$$.currentTarget));
      this.$_hideTableHeaderColumnSortLink$($columnIdx$$5_event$$285$$, !0);
      this.$_hideTableHeaderColumnSortLink$($columnIdx$$5_event$$285$$, !1);
    }, "mousedown .oj-table-data-cell":function($event$$286$$) {
      var $rowIdx$$5$$ = this.$_getTableDomUtils$().$getElementRowIdx$($$$$14$$($event$$286$$.currentTarget));
      this.$_setRowFocus$($rowIdx$$5$$, !0, !0, $event$$286$$.currentTarget, $event$$286$$);
      $$$$14$$($event$$286$$.target).data(this.$_FOCUS_CALLED$, !0);
    }, "mouseenter .oj-table-data-cell":function($event$$287$$) {
      $$$$14$$($event$$287$$.currentTarget).addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_HOVER$);
    }, "mouseleave .oj-table-data-cell":function($event$$288$$) {
      $$$$14$$($event$$288$$.currentTarget).removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_HOVER$);
    }, "click .oj-table-column-header-asc-link":function($event$$289$$) {
      var $columnIdx$$6$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($$$$14$$($event$$289$$.target)), $tableHeaderColumn$$1$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($columnIdx$$6$$);
      $tableHeaderColumn$$1$$ && ($tableHeaderColumn$$1$$.data("sorted") == this.$_COLUMN_SORT_ORDER$.$_ASCENDING$ ? this.$_handleSortTableHeaderColumn$($columnIdx$$6$$, !1, $event$$289$$) : this.$_handleSortTableHeaderColumn$($columnIdx$$6$$, !0, $event$$289$$), $event$$289$$.preventDefault(), $event$$289$$.stopPropagation());
    }, "click .oj-table-column-header-acc-asc-link":function($event$$290$$) {
      if (0 < this.$_getKeyboardKeys$().length && this.$_getKeyboardKeys$()[0] == this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_ENTER$) {
        $event$$290$$.preventDefault(), $event$$290$$.stopPropagation();
      } else {
        var $columnIdx$$7$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($$$$14$$($event$$290$$.target)), $tableHeaderColumn$$2$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($columnIdx$$7$$);
        $tableHeaderColumn$$2$$ && ($tableHeaderColumn$$2$$.data("sorted") == this.$_COLUMN_SORT_ORDER$.$_DESCENDING$ ? this.$_handleSortTableHeaderColumn$($columnIdx$$7$$, !0, $event$$290$$) : this.$_handleSortTableHeaderColumn$($columnIdx$$7$$, !1, $event$$290$$), $event$$290$$.preventDefault(), $event$$290$$.stopPropagation());
      }
    }, "click .oj-table-column-header-dsc-link":function($event$$291$$) {
      var $columnIdx$$8$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($$$$14$$($event$$291$$.target)), $tableHeaderColumn$$3$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($columnIdx$$8$$);
      $tableHeaderColumn$$3$$ && ($tableHeaderColumn$$3$$.data("sorted") == this.$_COLUMN_SORT_ORDER$.$_DESCENDING$ ? this.$_handleSortTableHeaderColumn$($columnIdx$$8$$, !0, $event$$291$$) : this.$_handleSortTableHeaderColumn$($columnIdx$$8$$, !1, $event$$291$$), $event$$291$$.preventDefault(), $event$$291$$.stopPropagation());
    }, "click .oj-table-column-header-acc-dsc-link":function($event$$292$$) {
      if (0 < this.$_getKeyboardKeys$().length && this.$_getKeyboardKeys$()[0] == this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_ENTER$) {
        $event$$292$$.preventDefault(), $event$$292$$.stopPropagation();
      } else {
        var $columnIdx$$9$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($$$$14$$($event$$292$$.target)), $tableHeaderColumn$$4$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($columnIdx$$9$$);
        $tableHeaderColumn$$4$$ && ($tableHeaderColumn$$4$$.data("sorted") == this.$_COLUMN_SORT_ORDER$.$_DESCENDING$ ? this.$_handleSortTableHeaderColumn$($columnIdx$$9$$, !0, $event$$292$$) : this.$_handleSortTableHeaderColumn$($columnIdx$$9$$, !1, $event$$292$$), $event$$292$$.preventDefault(), $event$$292$$.stopPropagation());
      }
    }, "click .oj-table-data-cell":function($event$$293$$) {
      var $rowIdx$$6$$ = this.$_getTableDomUtils$().$getElementRowIdx$($$$$14$$($event$$293$$.currentTarget));
      if (!$$$$14$$($event$$293$$.target).data(this.$_FOCUS_CALLED$)) {
        var $focused$$2_lastSelectedRowIdx_rowSelected$$1$$ = this.$_setRowFocus$($rowIdx$$6$$, !0, !0, $event$$293$$.currentTarget, $event$$293$$);
        $$$$14$$($event$$293$$.target).data(this.$_FOCUS_CALLED$, !1);
        if (!$focused$$2_lastSelectedRowIdx_rowSelected$$1$$) {
          return;
        }
      }
      if ($event$$293$$[this.$_KEYBOARD_CODES$.$_KEYBOARD_MODIFIER_SHIFT$]) {
        if ($focused$$2_lastSelectedRowIdx_rowSelected$$1$$ = this.$_getLastRowSelection$(), null != $focused$$2_lastSelectedRowIdx_rowSelected$$1$$) {
          if (window.getSelection().removeAllRanges(), $rowIdx$$6$$ < $focused$$2_lastSelectedRowIdx_rowSelected$$1$$) {
            var $i$$235$$;
            for ($i$$235$$ = $rowIdx$$6$$;$i$$235$$ <= $focused$$2_lastSelectedRowIdx_rowSelected$$1$$;$i$$235$$++) {
              this.$_setRowSelection$($i$$235$$, !0, $event$$293$$.currentTarget, $event$$293$$, !0);
            }
          } else {
            for ($i$$235$$ = $focused$$2_lastSelectedRowIdx_rowSelected$$1$$;$i$$235$$ <= $rowIdx$$6$$;$i$$235$$++) {
              this.$_setRowSelection$($i$$235$$, !0, $event$$293$$.currentTarget, $event$$293$$, !0);
            }
          }
        }
      } else {
        $oj$$14$$.$DomUtils$.$isMetaKeyPressed$($event$$293$$) ? this.$_setRowSelection$($rowIdx$$6$$, !this.$_getRowSelection$($rowIdx$$6$$), $event$$293$$.currentTarget, $event$$293$$, !0) : 0 == this.$_getKeyboardKeys$().length && ($focused$$2_lastSelectedRowIdx_rowSelected$$1$$ = this.$_getRowSelection$($rowIdx$$6$$), this.$_setRowSelection$($rowIdx$$6$$, !$focused$$2_lastSelectedRowIdx_rowSelected$$1$$, $event$$293$$.currentTarget, $event$$293$$, !0), this.$_isTouchDevice$() && this.$_getRowSelectionMode$() == 
        this.$_OPTION_SELECTION_MODES$.$_MULTIPLE$ && !$focused$$2_lastSelectedRowIdx_rowSelected$$1$$ && this.$_getTableDomUtils$().$createTableBodyRowTouchSelectionAffordance$($rowIdx$$6$$));
      }
    }, "dblclick .oj-table-data-cell":function($event$$294$$) {
      var $columnIdx$$10$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($$$$14$$($event$$294$$.target));
      this.$_setTableEditable$(!0, !1, $columnIdx$$10$$, !0, $event$$294$$);
    }, "contextmenu .oj-table-data-cell":function($event$$295$$) {
      var $rowIdx$$7_rowKey$$15$$ = this.$_getTableDomUtils$().$getElementRowIdx$($$$$14$$($event$$295$$.currentTarget)), $rowIdx$$7_rowKey$$15$$ = this.$_getRowKeyForRowIdx$($rowIdx$$7_rowKey$$15$$);
      this.$_setCurrentRow$({rowKey:$rowIdx$$7_rowKey$$15$$}, $event$$295$$, !1);
    }, "click .oj-table-column-header-cell":function($event$$296$$) {
      var $columnIdx$$11$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($$$$14$$($event$$296$$.currentTarget));
      $$$$14$$($event$$296$$.target).data(this.$_FOCUS_CALLED$) || (this.$_setHeaderColumnFocus$($columnIdx$$11$$, !0, !0, $event$$296$$), $$$$14$$($event$$296$$.target).data(this.$_FOCUS_CALLED$, !1));
      if ($event$$296$$[this.$_KEYBOARD_CODES$.$_KEYBOARD_MODIFIER_SHIFT$]) {
        var $lastSelectedColumnIdx$$ = this.$_getLastHeaderColumnSelection$();
        if (null != $lastSelectedColumnIdx$$) {
          if ($columnIdx$$11$$ < $lastSelectedColumnIdx$$) {
            var $i$$236$$;
            for ($i$$236$$ = $columnIdx$$11$$;$i$$236$$ <= $lastSelectedColumnIdx$$;$i$$236$$++) {
              this.$_setHeaderColumnSelection$($i$$236$$, !0, $event$$296$$.currentTarget, $event$$296$$, !0);
            }
          } else {
            for ($i$$236$$ = $lastSelectedColumnIdx$$;$i$$236$$ <= $columnIdx$$11$$;$i$$236$$++) {
              this.$_setHeaderColumnSelection$($i$$236$$, !0, $event$$296$$.currentTarget, $event$$296$$, !0);
            }
          }
        }
      } else {
        $oj$$14$$.$DomUtils$.$isMetaKeyPressed$($event$$296$$) ? this.$_setHeaderColumnSelection$($columnIdx$$11$$, !this.$_getHeaderColumnSelection$($columnIdx$$11$$), $event$$296$$.currentTarget, $event$$296$$, !0) : 0 == this.$_getKeyboardKeys$().length && (this.$_clearSelectedHeaderColumns$(), this.$_setHeaderColumnSelection$($columnIdx$$11$$, !this.$_getHeaderColumnSelection$($columnIdx$$11$$), $event$$296$$.currentTarget, $event$$296$$, !0), this.$_getTableDndContext$().$setTableHeaderColumnDraggable$($columnIdx$$11$$, 
        !0));
      }
    }, "dragstart .oj-table-column-header-cell":function($event$$297$$) {
      return this.$_getTableDndContext$().$handleColumnDragStart$($event$$297$$);
    }, "dragenter .oj-table-column-header-cell":function($event$$298$$) {
      return this.$_getTableDndContext$().$handleColumnDragEnter$($event$$298$$);
    }, "dragover .oj-table-column-header-cell":function($event$$299$$) {
      return this.$_getTableDndContext$().$handleColumnDragOver$($event$$299$$);
    }, "dragleave .oj-table-column-header-cell":function($event$$300$$) {
      return this.$_getTableDndContext$().$handleColumnDragLeave$($event$$300$$);
    }, "drop .oj-table-column-header-cell":function($event$$301$$) {
      return this.$_getTableDndContext$().$handleColumnDrop$($event$$301$$);
    }, "dragend .oj-table-column-header-cell":function() {
      return this.$_getTableDndContext$().$handleColumnDragEnd$();
    }, "dragstart .oj-table-body-row":function($event$$303$$) {
      return this.$_getTableDndContext$().$handleRowDragStart$($event$$303$$);
    }, "drag .oj-table-body-row":function($event$$304$$) {
      return this.$_getTableDndContext$().$handleRowDrag$($event$$304$$);
    }, "dragend .oj-table-body-row":function($event$$305$$) {
      return this.$_getTableDndContext$().$handleRowDragEnd$($event$$305$$);
    }, "dragenter .oj-table-body":function($event$$306$$) {
      return this.$_getTableDndContext$().$handleRowDragEnter$($event$$306$$);
    }, "dragover .oj-table-body":function($event$$307$$) {
      return this.$_getTableDndContext$().$handleRowDragOver$($event$$307$$);
    }, "dragleave .oj-table-body":function($event$$308$$) {
      return this.$_getTableDndContext$().$handleRowDragLeave$($event$$308$$);
    }, "drop .oj-table-body":function($event$$309$$) {
      return this.$_getTableDndContext$().$handleRowDrop$($event$$309$$);
    }}, $_eventsContainer$:{touchstart:function($event$$310$$) {
      if (1 == $event$$310$$.originalEvent.touches.length && this.$_getRowSelectionMode$() == this.$_OPTION_SELECTION_MODES$.$_MULTIPLE$) {
        if ($$$$14$$($event$$310$$.target).hasClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_TOUCH_SELECTIOM_AFFORDANCE_TOP_CLASS$) || $$$$14$$($event$$310$$.target).hasClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_TOUCH_SELECTIOM_AFFORDANCE_TOP_ICON_CLASS$)) {
          $event$$310$$.preventDefault(), this.$_mouseDownRowIdx$ = this.$_getTableDomUtils$().$getTableBodyRowTouchSelectionAffordanceBottom$().data("rowIdx");
        } else {
          if ($$$$14$$($event$$310$$.target).hasClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_TOUCH_SELECTIOM_AFFORDANCE_BOTTOM_CLASS$) || $$$$14$$($event$$310$$.target).hasClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_TOUCH_SELECTIOM_AFFORDANCE_BOTTOM_ICON_CLASS$)) {
            $event$$310$$.preventDefault(), this.$_mouseDownRowIdx$ = this.$_getTableDomUtils$().$getTableBodyRowTouchSelectionAffordanceTop$().data("rowIdx");
          }
        }
      }
    }, touchmove:function($event$$311_eventTarget$$) {
      null != this.$_mouseDownRowIdx$ && ($event$$311_eventTarget$$.preventDefault(), $event$$311_eventTarget$$ = this.$_getTouchEventTargetElement$($event$$311_eventTarget$$), this.$_handleMouseEnterSelection$($event$$311_eventTarget$$));
    }, touchend:function($event$$312_eventTarget$$1$$) {
      null != this.$_mouseDownRowIdx$ && ($event$$312_eventTarget$$1$$ = this.$_getTouchEventTargetElement$($event$$312_eventTarget$$1$$), this.$_handleMouseEnterSelection$($event$$312_eventTarget$$1$$));
      this.$_mouseDownRowIdx$ = null;
    }, touchcancel:function() {
      this.$_mouseDownRowIdx$ = null;
    }}, $_refresh$:function() {
      var $startIndex$$25$$ = null, $initFetch$$ = !1;
      this.$_data$ != this.options[this.$_CONST_DATA$] && (this.$_clearCachedDataMetadata$(), null == this.$_data$ ? $initFetch$$ = !0 : $startIndex$$25$$ = 0, this.$_isLoadMoreOnScroll$() && (null != this.$_domScroller$ && this.$_domScroller$.destroy(), this.$_registerDomScroller$()));
      this.$_contextMenuId$ != this.$_getTableDomUtils$().$getContextMenuId$() && this.$_getTableDomUtils$().$createContextMenu$(this.$_handleContextMenuSelect$.bind(this));
      this.$_getTableDomUtils$().$clearCachedDom$();
      this.$_getTableDomUtils$().$refreshContextMenu$();
      this.$_refreshTableStatusMessage$();
      if ($initFetch$$) {
        return this.$_initFetch$();
      }
      var $self$$109$$ = this;
      this.$_queueTask$(function() {
        var $result$$36$$ = $self$$109$$.$_invokeDataFetchRows$($startIndex$$25$$);
        $self$$109$$ = $startIndex$$25$$ = null;
        return $result$$36$$;
      });
    }, _setOption:function($key$$89$$, $value$$232$$) {
      this._superApply(arguments);
      this.$_isTableRefreshNeeded$($key$$89$$, $value$$232$$) ? this.$_refresh$() : "selection" == $key$$89$$ ? (this.$_clearSelectedRows$(), this.$_clearSelectedHeaderColumns$(), this.$_setSelection$($value$$232$$)) : "currentRow" == $key$$89$$ && this.$_setCurrentRow$($value$$232$$, null, !0);
    }, $_addKeyboardKey$:function($keyCode$$7$$) {
      var $foundCode_keyboardKeys$$ = !1, $found$$7_prop$$68$$;
      for ($found$$7_prop$$68$$ in this.$_KEYBOARD_CODES$) {
        this.$_KEYBOARD_CODES$.hasOwnProperty($found$$7_prop$$68$$) && this.$_KEYBOARD_CODES$[$found$$7_prop$$68$$] == $keyCode$$7$$ && ($foundCode_keyboardKeys$$ = !0);
      }
      if ($foundCode_keyboardKeys$$) {
        $foundCode_keyboardKeys$$ = this.$_getKeyboardKeys$();
        $found$$7_prop$$68$$ = !1;
        var $i$$237$$, $keyboardKeysCount$$ = $foundCode_keyboardKeys$$.length;
        for ($i$$237$$ = 0;$i$$237$$ < $keyboardKeysCount$$;$i$$237$$++) {
          if ($foundCode_keyboardKeys$$[$i$$237$$] == $keyCode$$7$$) {
            $found$$7_prop$$68$$ = !0;
            break;
          }
        }
        $found$$7_prop$$68$$ || $foundCode_keyboardKeys$$.push($keyCode$$7$$);
      }
    }, $_addSingleTableBodyRow$:function($rowIdx$$8$$, $row$$50$$, $docFrag$$, $docFragStartIdx$$) {
      var $tableBodyRow$$3$$ = this.$_getTableDomUtils$().$createTableBodyRow$($rowIdx$$8$$, $row$$50$$[this.$_CONST_KEY$]);
      this.$_getTableDomUtils$().$styleTableBodyRow$($tableBodyRow$$3$$, !0);
      this.$_getTableDomUtils$().$insertTableBodyRow$($rowIdx$$8$$, $tableBodyRow$$3$$, $row$$50$$, $docFrag$$);
      this.$_refreshTableBodyRow$($rowIdx$$8$$, $row$$50$$, $tableBodyRow$$3$$, $docFrag$$, $docFragStartIdx$$, !0);
    }, $_checkRowOrHeaderColumnFocus$:function($event$$314$$) {
      var $focusedRowIdx$$1$$ = this.$_getFocusedRowIdx$(), $focusedHeaderColumnIdx$$ = this.$_getFocusedHeaderColumnIdx$();
      null == $focusedRowIdx$$1$$ && null == $focusedHeaderColumnIdx$$ && (this.$_isTableHeaderless$() ? this.$_setRowFocus$(0, !0, !0, null, $event$$314$$) : this.$_setHeaderColumnFocus$(0, !0, !1, $event$$314$$));
    }, $_clearCachedMetadata$:function() {
      this.$_columnDefArray$ = null;
      this.$_setTableNavigationMode$(!1);
    }, $_clearCachedDataMetadata$:function() {
      null != this.$_data$ && this.$_unregisterDataSourceEventListeners$();
      this.$_data$ = null;
    }, $_clearDataWaitingState$:function() {
      this.$_hideInlineMessage$();
      this.$_hideStatusMessage$();
      this.$_dataFetching$ = !1;
    }, $_clearKeyboardKeys$:function() {
      this.$_keyboardKeys$ = [];
    }, $_clearFocusedHeaderColumn$:function() {
      var $focusedHeaderColumnIdx$$1$$ = this.$_getFocusedHeaderColumnIdx$();
      null != $focusedHeaderColumnIdx$$1$$ && this.$_setHeaderColumnFocus$($focusedHeaderColumnIdx$$1$$, !1, !1, null);
      this.$_activeColumnIndex$ = -1;
    }, $_clearFocusedRow$:function($updateCurrentRow$$) {
      null != this.$_getFocusedRowIdx$() && this.$_setRowFocus$(-1, !0, $updateCurrentRow$$, null, null);
    }, $_clearSelectedHeaderColumns$:function() {
      var $selectedHeaderColumnIdxs$$ = this.$_getSelectedHeaderColumnIdxs$(), $i$$238$$, $selectedHeaderColumnIdxsCount$$ = $selectedHeaderColumnIdxs$$.length;
      for ($i$$238$$ = 0;$i$$238$$ < $selectedHeaderColumnIdxsCount$$;$i$$238$$++) {
        this.$_setHeaderColumnSelection$($selectedHeaderColumnIdxs$$[$i$$238$$], !1, null, null, !1);
      }
    }, $_clearSelectedRows$:function() {
      var $selectedRowIdxs$$ = this.$_getSelectedRowIdxs$(), $i$$239$$, $selectedRowIdxsCount$$ = $selectedRowIdxs$$.length;
      for ($i$$239$$ = 0;$i$$239$$ < $selectedRowIdxsCount$$;$i$$239$$++) {
        this.$_setRowSelection$($selectedRowIdxs$$[$i$$239$$], !1, null, null, !1);
      }
      this.$_isTouchDevice$() && this.$_getRowSelectionMode$() == this.$_OPTION_SELECTION_MODES$.$_MULTIPLE$ && this.$_getTableDomUtils$().$removeTableBodyRowTouchSelectionAffordance$();
    }, $_clearSortedHeaderColumn$:function($columnIdx$$12$$) {
      var $sortedTableHeaderColumnIdx$$ = this.$_getSortedTableHeaderColumnIdx$();
      if (null != $sortedTableHeaderColumnIdx$$) {
        var $sortedTableHeaderColumn$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($sortedTableHeaderColumnIdx$$), $sorted$$7$$ = $sortedTableHeaderColumn$$.data("sorted");
        $sortedTableHeaderColumn$$.data("sorted", null);
        $sortedTableHeaderColumnIdx$$ != $columnIdx$$12$$ ? $sorted$$7$$ == this.$_COLUMN_SORT_ORDER$.$_ASCENDING$ ? this.$_hideTableHeaderColumnSortLink$($sortedTableHeaderColumnIdx$$, !0) : this.$_hideTableHeaderColumnSortLink$($sortedTableHeaderColumnIdx$$, !1) : ($sortedTableHeaderColumn$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_LINK_CLASS$).removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$), $sortedTableHeaderColumn$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DSC_LINK_CLASS$).removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$));
      }
    }, $_executeTableBodyRowsAdd$:function($rows$$10$$) {
      var $self$$110$$ = this;
      this.$_queueTask$(function() {
        var $batchAdd_tableBody$$1$$ = !1;
        if (1 < $rows$$10$$.length) {
          var $i$$240_tableBodyRowBefore$$, $rowsCount$$ = $rows$$10$$.length, $isContiguous_tableBodyDocFrag$$ = !0;
          for ($i$$240_tableBodyRowBefore$$ = 0;$i$$240_tableBodyRowBefore$$ < $rowsCount$$;$i$$240_tableBodyRowBefore$$++) {
            if (0 != $i$$240_tableBodyRowBefore$$ && $rows$$10$$[$i$$240_tableBodyRowBefore$$ - 1].$rowIdx$ != $rows$$10$$[$i$$240_tableBodyRowBefore$$].$rowIdx$ - 1) {
              $isContiguous_tableBodyDocFrag$$ = !1;
              break;
            }
          }
          if ($isContiguous_tableBodyDocFrag$$) {
            $batchAdd_tableBody$$1$$ = $self$$110$$.$_getTableDomUtils$().$getTableBody$();
            $isContiguous_tableBodyDocFrag$$ = $$$$14$$(document.createDocumentFragment());
            $rowsCount$$ = $rows$$10$$.length;
            for ($i$$240_tableBodyRowBefore$$ = 0;$i$$240_tableBodyRowBefore$$ < $rowsCount$$;$i$$240_tableBodyRowBefore$$++) {
              $self$$110$$.$_addSingleTableBodyRow$($rows$$10$$[$i$$240_tableBodyRowBefore$$].$rowIdx$, $rows$$10$$[$i$$240_tableBodyRowBefore$$].row, $isContiguous_tableBodyDocFrag$$, $rows$$10$$[0].$rowIdx$);
            }
            0 == $rows$$10$$[0].$rowIdx$ ? $batchAdd_tableBody$$1$$.prepend($isContiguous_tableBodyDocFrag$$) : ($i$$240_tableBodyRowBefore$$ = $self$$110$$.$_getTableDomUtils$().$getTableBodyRow$($rows$$10$$[0].$rowIdx$), null != $i$$240_tableBodyRowBefore$$ ? $batchAdd_tableBody$$1$$[0].insertBefore($isContiguous_tableBodyDocFrag$$[0], $i$$240_tableBodyRowBefore$$[0]) : $batchAdd_tableBody$$1$$[0].insertBefore($isContiguous_tableBodyDocFrag$$[0], null));
            $self$$110$$.$_getTableDomUtils$().$clearCachedDomRowData$();
            $oj$$14$$.Components.$subtreeAttached$($batchAdd_tableBody$$1$$[0]);
            $batchAdd_tableBody$$1$$ = !0;
          }
        }
        if (!$batchAdd_tableBody$$1$$) {
          for ($rowsCount$$ = $rows$$10$$.length, $i$$240_tableBodyRowBefore$$ = 0;$i$$240_tableBodyRowBefore$$ < $rowsCount$$;$i$$240_tableBodyRowBefore$$++) {
            $self$$110$$.$_addSingleTableBodyRow$($rows$$10$$[$i$$240_tableBodyRowBefore$$].$rowIdx$, $rows$$10$$[$i$$240_tableBodyRowBefore$$].row);
          }
        }
        $self$$110$$.$_getTableDomUtils$().$clearCachedDomRowData$();
        $self$$110$$.$_refreshTableFooter$();
        $self$$110$$ = null;
      });
    }, $_executeTableBodyRowsChange$:function($rows$$11$$) {
      var $self$$111$$ = this;
      this.$_queueTask$(function() {
        var $i$$241$$, $rowsCount$$1$$ = $rows$$11$$.length;
        for ($i$$241$$ = 0;$i$$241$$ < $rowsCount$$1$$;$i$$241$$++) {
          $self$$111$$.$_refreshTableBodyRow$($rows$$11$$[$i$$241$$].$rowIdx$, $rows$$11$$[$i$$241$$].row);
        }
        $self$$111$$.$_refreshTableFooter$();
        $self$$111$$ = null;
      });
    }, $_executeTableBodyRowsRemove$:function($rows$$12$$) {
      var $self$$112$$ = this, $currentRow$$ = this.$_getCurrentRow$(), $currentRowKey$$ = null != $currentRow$$ ? $currentRow$$.rowKey : null;
      this.$_queueTask$(function() {
        var $i$$242_tableBodyRows$$1$$, $rowKey$$16$$, $rowsCount$$2$$ = $rows$$12$$.length;
        for ($i$$242_tableBodyRows$$1$$ = 0;$i$$242_tableBodyRows$$1$$ < $rowsCount$$2$$;$i$$242_tableBodyRows$$1$$++) {
          $self$$112$$.$_getTableDomUtils$().$removeTableBodyRow$($rows$$12$$[$i$$242_tableBodyRows$$1$$].$rowIdx$), null != $currentRowKey$$ && ($rowKey$$16$$ = $rows$$12$$[$i$$242_tableBodyRows$$1$$].row[$self$$112$$.$_FIELD_ID$], $oj$$14$$.$Object$.$compareValues$($rowKey$$16$$, $currentRowKey$$) && ($self$$112$$.$_setCurrentRow$(null, null, !1), $currentRowKey$$ = null));
        }
        $self$$112$$.$_refreshTableFooter$();
        $i$$242_tableBodyRows$$1$$ = $self$$112$$.$_getTableDomUtils$().$getTableBodyRows$();
        null != $i$$242_tableBodyRows$$1$$ && 0 != $i$$242_tableBodyRows$$1$$.length || this.$_showNoDataMessage$();
        $self$$112$$ = null;
      });
    }, $_getColumnDefs$:function() {
      this.$_columnDefArray$ || (this.$_columnDefArray$ = this.$_getColumnMetadata$());
      return this.$_columnDefArray$;
    }, $_getColumnMetadata$:function() {
      var $columns$$3_columnsSortedArray$$ = this.options.columns, $columnsDefault_defaultedColumnsCount$$ = this.options.columnsDefault;
      if ((0 == $columns$$3_columnsSortedArray$$.length || 1 == $columns$$3_columnsSortedArray$$.length && null == $columns$$3_columnsSortedArray$$[0].id && null == $columns$$3_columnsSortedArray$$[0].headerText && null == $columns$$3_columnsSortedArray$$[0].field) && null == $columnsDefault_defaultedColumnsCount$$.headerText && null == $columnsDefault_defaultedColumnsCount$$.field) {
        return[];
      }
      var $defaultedColumns_sortSupportedData$$ = [], $data$$108_i$$243$$, $columnsCount$$ = $columns$$3_columnsSortedArray$$.length;
      for ($data$$108_i$$243$$ = 0;$data$$108_i$$243$$ < $columnsCount$$;$data$$108_i$$243$$++) {
        $defaultedColumns_sortSupportedData$$[$data$$108_i$$243$$] = $$$$14$$.extend({}, $columnsDefault_defaultedColumnsCount$$, $columns$$3_columnsSortedArray$$[$data$$108_i$$243$$]);
      }
      $columns$$3_columnsSortedArray$$ = [];
      $columnsDefault_defaultedColumnsCount$$ = $defaultedColumns_sortSupportedData$$.length;
      for ($data$$108_i$$243$$ = 0;$data$$108_i$$243$$ < $columnsDefault_defaultedColumnsCount$$;$data$$108_i$$243$$++) {
        $columns$$3_columnsSortedArray$$.push($defaultedColumns_sortSupportedData$$[$data$$108_i$$243$$]);
      }
      $data$$108_i$$243$$ = this.$_getData$();
      $defaultedColumns_sortSupportedData$$ = !1;
      null != $data$$108_i$$243$$ && "full" == $data$$108_i$$243$$.getCapability("sort") && ($defaultedColumns_sortSupportedData$$ = !0);
      for ($data$$108_i$$243$$ = 0;$data$$108_i$$243$$ < $columnsDefault_defaultedColumnsCount$$;$data$$108_i$$243$$++) {
        null == $columns$$3_columnsSortedArray$$[$data$$108_i$$243$$][this.$_FIELD_ID$] && ($columns$$3_columnsSortedArray$$[$data$$108_i$$243$$][this.$_FIELD_ID$] = this.$_COLUMN_HEADER_ID_PREFIX$ + $data$$108_i$$243$$), null != $columns$$3_columnsSortedArray$$[$data$$108_i$$243$$].sortable && $columns$$3_columnsSortedArray$$[$data$$108_i$$243$$].sortable != this.$_OPTION_AUTO$ || !$defaultedColumns_sortSupportedData$$ || ($columns$$3_columnsSortedArray$$[$data$$108_i$$243$$].sortable = this.$_OPTION_ENABLED$)
        ;
      }
      return $columns$$3_columnsSortedArray$$;
    }, $_getColumnIdxForColumnKey$:function($columnKey$$1$$) {
      var $columns$$4$$ = this.$_getColumnDefs$();
      if (null != $columns$$4$$) {
        var $i$$244$$, $column$$10$$, $columnsCount$$1$$ = $columns$$4$$.length;
        for ($i$$244$$ = 0;$i$$244$$ < $columnsCount$$1$$;$i$$244$$++) {
          if ($column$$10$$ = $columns$$4$$[$i$$244$$], $oj$$14$$.$Object$.$compareValues$($column$$10$$.id, $columnKey$$1$$)) {
            return $i$$244$$;
          }
        }
      }
      return null;
    }, $_getColumnIdxsForElementsWithStyleClass$:function($elements$$3_styleClass$$3$$) {
      $elements$$3_styleClass$$3$$ = this.$_getTableDomUtils$().$getTable$().find($elements$$3_styleClass$$3$$);
      var $columnIdxs$$ = [];
      if ($elements$$3_styleClass$$3$$ && 0 < $elements$$3_styleClass$$3$$.length) {
        var $i$$245$$, $j$$40$$, $alreadyAdded$$, $columnIdx$$13$$, $columnIdxsCount$$, $elementsCount$$ = $elements$$3_styleClass$$3$$.length;
        for ($i$$245$$ = 0;$i$$245$$ < $elementsCount$$;$i$$245$$++) {
          $columnIdx$$13$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($$$$14$$($elements$$3_styleClass$$3$$.get($i$$245$$)));
          $alreadyAdded$$ = !1;
          $columnIdxsCount$$ = $columnIdxs$$.length;
          for ($j$$40$$ = 0;$j$$40$$ < $columnIdxsCount$$;$j$$40$$++) {
            $columnIdxs$$[$j$$40$$] == $columnIdx$$13$$ && ($alreadyAdded$$ = !0);
          }
          $alreadyAdded$$ || $columnIdxs$$.push($columnIdx$$13$$);
        }
      }
      return $columnIdxs$$;
    }, $_getColumnKeyForColumnIdx$:function($columnIdx$$14$$) {
      var $columns$$5$$ = this.$_getColumnDefs$();
      return null != $columns$$5$$ && $columnIdx$$14$$ < $columns$$5$$.length ? $columns$$5$$[$columnIdx$$14$$][this.$_FIELD_ID$] : null;
    }, $_getColumnRenderer$:function($columnIdx$$15$$, $type$$79$$) {
      var $column$$11$$ = this.$_getColumnDefs$()[$columnIdx$$15$$];
      return "cell" == $type$$79$$ ? $column$$11$$.renderer : "footer" == $type$$79$$ ? $column$$11$$.footerRenderer : "header" == $type$$79$$ ? $column$$11$$.headerRenderer : null;
    }, $_getCurrentRow$:function() {
      return this.$_getData$() ? this.$_currentRow$ : null;
    }, $_getData$:function() {
      if (!this.$_data$ && null != this.options.data) {
        var $data$$110$$ = this.options.data;
        if ($data$$110$$ instanceof $oj$$14$$.$TableDataSource$ || $data$$110$$ instanceof $oj$$14$$.$PagingTableDataSource$) {
          this.$_data$ = $data$$110$$;
        } else {
          throw Error(this.$_LOGGER_MSG$.$_ERR_DATA_INVALID_TYPE_SUMMARY$ + "\n" + this.$_LOGGER_MSG$.$_ERR_DATA_INVALID_TYPE_DETAIL$);
        }
        this.$_registerDataSourceEventListeners$();
      }
      return this.$_data$;
    }, $_getFocusedHeaderColumnIdx$:function() {
      return this.$_getColumnIdxsForElementsWithStyleClass$("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_CELL_CLASS$ + "." + $oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_FOCUS$)[0];
    }, $_getFocusedRowIdx$:function() {
      return this.$_getRowIdxsForElementsWithStyleClass$("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_CLASS$ + "." + $oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_FOCUS$)[0];
    }, $_getHeaderColumnFocus$:function($columnIdx$$16$$) {
      return this.$_getHeaderColumnState$($columnIdx$$16$$).$focused$;
    }, $_getHeaderColumnSelection$:function($columnIdx$$17$$) {
      return this.$_getHeaderColumnState$($columnIdx$$17$$).selected;
    }, $_getColumnSelectionMode$:function() {
      return null == this.options.selectionMode ? null : this.options.selectionMode[this.$_CONST_COLUMN$];
    }, $_getHeaderColumnState$:function($columnIdx$$18_headerColumn$$1$$) {
      $columnIdx$$18_headerColumn$$1$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($columnIdx$$18_headerColumn$$1$$);
      return{$focused$:$columnIdx$$18_headerColumn$$1$$.hasClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_FOCUS$), selected:$columnIdx$$18_headerColumn$$1$$.hasClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$)};
    }, $_getKeyboardKeys$:function() {
      this.$_keyboardKeys$ || (this.$_keyboardKeys$ = []);
      return this.$_keyboardKeys$.reverse();
    }, $_getLastHeaderColumnSelection$:function() {
      return null != this.$_lastSelectedColumnIdxArray$ && 0 < this.$_lastSelectedColumnIdxArray$.length ? this.$_lastSelectedColumnIdxArray$[0] : null;
    }, $_getLastRowSelection$:function() {
      return null != this.$_lastSelectedRowIdxArray$ && 0 < this.$_lastSelectedRowIdxArray$.length ? this.$_lastSelectedRowIdxArray$[0] : null;
    }, $_getRowIdxRowArray$:function($resultObject$$, $startIndex$$27$$) {
      var $rowIdxRowArray$$ = [];
      if (null != $resultObject$$) {
        var $i$$246$$, $indexesCount$$ = $resultObject$$[this.$_CONST_INDEXES$].length;
        for ($i$$246$$ = 0;$i$$246$$ < $indexesCount$$;$i$$246$$++) {
          $rowIdxRowArray$$.push({row:{data:$resultObject$$[this.$_CONST_DATA$][$i$$246$$], key:$resultObject$$[this.$_CONST_KEYS$][$i$$246$$], index:$resultObject$$[this.$_CONST_INDEXES$][$i$$246$$]}, $rowIdx$:$startIndex$$27$$ + $i$$246$$});
        }
      }
      return $rowIdxRowArray$$;
    }, $_getRowIdxForRowKey$:function($rowKey$$17$$) {
      var $tableBodyRows$$2$$ = this.$_getTableDomUtils$().$getTableBodyRows$();
      if (null != $tableBodyRows$$2$$ && 0 < $tableBodyRows$$2$$.length) {
        var $i$$247$$, $tableBodyRowsCount$$ = $tableBodyRows$$2$$.length;
        for ($i$$247$$ = 0;$i$$247$$ < $tableBodyRowsCount$$;$i$$247$$++) {
          if ($oj$$14$$.$Object$.$compareValues$($$$$14$$($tableBodyRows$$2$$[$i$$247$$]).data("rowKey"), $rowKey$$17$$)) {
            return $i$$247$$;
          }
        }
      }
      return null;
    }, $_getDataSourceRowIndexForRowKey$:function($data$$111_rowKey$$18$$) {
      var $startIndex$$28_tableBodyRows$$3$$ = this.$_getTableDomUtils$().$getTableBodyRows$();
      if (null != $startIndex$$28_tableBodyRows$$3$$ && 0 < $startIndex$$28_tableBodyRows$$3$$.length) {
        var $i$$248$$, $tableBodyRowsCount$$1$$ = $startIndex$$28_tableBodyRows$$3$$.length;
        for ($i$$248$$ = 0;$i$$248$$ < $tableBodyRowsCount$$1$$;$i$$248$$++) {
          if ($oj$$14$$.$Object$.$compareValues$($$$$14$$($startIndex$$28_tableBodyRows$$3$$[$i$$248$$]).data("rowKey"), $data$$111_rowKey$$18$$)) {
            return $data$$111_rowKey$$18$$ = this.$_getData$(), $startIndex$$28_tableBodyRows$$3$$ = 0, $data$$111_rowKey$$18$$ instanceof $oj$$14$$.$PagingTableDataSource$ && ($startIndex$$28_tableBodyRows$$3$$ = $data$$111_rowKey$$18$$.getStartItemIndex()), $i$$248$$ + $startIndex$$28_tableBodyRows$$3$$;
          }
        }
      }
      return null;
    }, $_getEditableRowIdx$:function() {
      var $rowIdx$$9$$ = null;
      return null != this.$_editableRowKey$ && ($rowIdx$$9$$ = this.$_getRowIdxForRowKey$(this.$_editableRowKey$), null !== $rowIdx$$9$$) ? $rowIdx$$9$$ : this.$_editableRowIdx$;
    }, $_getEditableRowKey$:function() {
      return this.$_editableRowKey$;
    }, $_getRowIdxsForElementsWithStyleClass$:function($elements$$4_styleClass$$4$$) {
      $elements$$4_styleClass$$4$$ = this.$_getTableDomUtils$().$getTable$().find($elements$$4_styleClass$$4$$);
      var $rowIdxs$$ = [];
      if ($elements$$4_styleClass$$4$$ && 0 < $elements$$4_styleClass$$4$$.length) {
        var $i$$249$$, $j$$41$$, $rowIdx$$10$$, $rowIdxsCount$$, $alreadyAdded$$1$$, $elementsCount$$1$$ = $elements$$4_styleClass$$4$$.length;
        for ($i$$249$$ = 0;$i$$249$$ < $elementsCount$$1$$;$i$$249$$++) {
          $rowIdx$$10$$ = this.$_getTableDomUtils$().$getElementRowIdx$($$$$14$$($elements$$4_styleClass$$4$$.get($i$$249$$)));
          $alreadyAdded$$1$$ = !1;
          $rowIdxsCount$$ = $rowIdxs$$.length;
          for ($j$$41$$ = 0;$j$$41$$ < $rowIdxsCount$$;$j$$41$$++) {
            $rowIdxs$$[$j$$41$$] == $rowIdx$$10$$ && ($alreadyAdded$$1$$ = !0);
          }
          $alreadyAdded$$1$$ || $rowIdxs$$.push($rowIdx$$10$$);
        }
      }
      return $rowIdxs$$;
    }, $_getRowKeyForDataSourceRowIndex$:function($rowIndex$$13$$) {
      var $tableBodyRows$$4$$ = this.$_getTableDomUtils$().$getTableBodyRows$();
      if (null != $tableBodyRows$$4$$ && 0 < $tableBodyRows$$4$$.length) {
        var $data$$112_i$$250$$ = this.$_getData$(), $startIndex$$29$$ = 0;
        $data$$112_i$$250$$ instanceof $oj$$14$$.$PagingTableDataSource$ && ($startIndex$$29$$ = $data$$112_i$$250$$.getStartItemIndex());
        for (var $tableBodyRowsCount$$2$$ = $tableBodyRows$$4$$.length, $data$$112_i$$250$$ = 0;$data$$112_i$$250$$ < $tableBodyRowsCount$$2$$;$data$$112_i$$250$$++) {
          if ($startIndex$$29$$ + $data$$112_i$$250$$ == $rowIndex$$13$$) {
            return $$$$14$$($tableBodyRows$$4$$[$data$$112_i$$250$$]).data("rowKey");
          }
        }
      }
      return null;
    }, $_getRowKeyForRowIdx$:function($rowIdx$$11_tableBodyRow$$4$$) {
      $rowIdx$$11_tableBodyRow$$4$$ = this.$_getTableDomUtils$().$getTableBodyRow$($rowIdx$$11_tableBodyRow$$4$$);
      return null != $rowIdx$$11_tableBodyRow$$4$$ ? $rowIdx$$11_tableBodyRow$$4$$.data("rowKey") : null;
    }, $_getRowRenderer$:function() {
      return this.options.rowRenderer;
    }, $_getRowSelection$:function($rowIdx$$12$$) {
      return this.$_getTableDomUtils$().$getTableBodyRow$($rowIdx$$12$$).hasClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$);
    }, $_getRowSelectionMode$:function() {
      return null == this.options.selectionMode ? null : this.options.selectionMode[this.$_CONST_ROW$];
    }, $_getSelectedHeaderColumnIdxs$:function() {
      return this.$_getColumnIdxsForElementsWithStyleClass$("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_CELL_CLASS$ + "." + $oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$);
    }, $_getSelectedRowIdxs$:function() {
      return this.$_getRowIdxsForElementsWithStyleClass$("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_CLASS$ + "." + $oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$);
    }, $_getSelection$:function() {
      var $rangeArray_selectedRowIdxs$$1$$ = this.$_getSelectedRowIdxs$(), $rangeCount_selectedColumnIdxs$$ = this.$_getSelectedHeaderColumnIdxs$(), $selectionIdxs$$ = null, $rowSelection$$ = !0;
      if (null != $rangeArray_selectedRowIdxs$$1$$ && 0 < $rangeArray_selectedRowIdxs$$1$$.length) {
        $selectionIdxs$$ = $rangeArray_selectedRowIdxs$$1$$;
      } else {
        if (null != $rangeCount_selectedColumnIdxs$$ && 0 < $rangeCount_selectedColumnIdxs$$.length) {
          $selectionIdxs$$ = $rangeCount_selectedColumnIdxs$$, $rowSelection$$ = !1;
        } else {
          return null;
        }
      }
      var $rangeArray_selectedRowIdxs$$1$$ = [], $rangeCount_selectedColumnIdxs$$ = 0, $previousIdx$$ = null, $rangeObj$$, $selectionIndex$$, $selectionIdx$$, $selectionKey$$, $i$$251$$, $selectionIdxsCount$$ = $selectionIdxs$$.length;
      for ($i$$251$$ = 0;$i$$251$$ < $selectionIdxsCount$$;$i$$251$$++) {
        $selectionIdx$$ = $selectionIdxs$$[$i$$251$$], 0 == $i$$251$$ ? ($rangeObj$$ = {}, $rangeObj$$[this.$_CONST_STARTINDEX$] = {}, $rangeObj$$[this.$_CONST_ENDINDEX$] = {}, $rangeObj$$.startKey = {}, $rangeObj$$.endKey = {}, $rowSelection$$ ? ($selectionKey$$ = this.$_getRowKeyForRowIdx$($selectionIdx$$), $selectionIndex$$ = this.$_getDataSourceRowIndexForRowKey$($selectionKey$$), $rangeObj$$.startKey[this.$_CONST_ROW$] = $selectionKey$$, $rangeObj$$.endKey[this.$_CONST_ROW$] = $selectionKey$$, 
        $rangeObj$$[this.$_CONST_STARTINDEX$][this.$_CONST_ROW$] = $selectionIndex$$, $rangeObj$$[this.$_CONST_ENDINDEX$][this.$_CONST_ROW$] = $selectionIndex$$) : ($rangeObj$$[this.$_CONST_STARTINDEX$][this.$_CONST_COLUMN$] = $selectionIdx$$, $rangeObj$$[this.$_CONST_ENDINDEX$][this.$_CONST_COLUMN$] = $selectionIdx$$, $selectionKey$$ = this.$_getColumnKeyForColumnIdx$($selectionIdx$$), $rangeObj$$.startKey[this.$_CONST_COLUMN$] = $selectionKey$$, $rangeObj$$.endKey[this.$_CONST_COLUMN$] = $selectionKey$$), 
        $rangeArray_selectedRowIdxs$$1$$[0] = $rangeObj$$) : ($rangeObj$$ = $rangeArray_selectedRowIdxs$$1$$[$rangeCount_selectedColumnIdxs$$], $rowSelection$$ ? ($selectionKey$$ = this.$_getRowKeyForRowIdx$($selectionIdx$$), $selectionIndex$$ = this.$_getDataSourceRowIndexForRowKey$($selectionKey$$), $rangeObj$$.endKey[this.$_CONST_ROW$] = $selectionKey$$, $rangeObj$$[this.$_CONST_ENDINDEX$][this.$_CONST_ROW$] = $selectionIndex$$) : ($rangeObj$$[this.$_CONST_ENDINDEX$][this.$_CONST_COLUMN$] = $selectionIdx$$, 
        $selectionKey$$ = this.$_getColumnKeyForColumnIdx$($selectionIdx$$), $rangeObj$$.endKey[this.$_CONST_COLUMN$] = $selectionKey$$), $selectionIdx$$ != $previousIdx$$ + 1 && ($rowSelection$$ ? ($selectionKey$$ = this.$_getRowKeyForRowIdx$($previousIdx$$), $selectionIndex$$ = this.$_getDataSourceRowIndexForRowKey$($selectionKey$$), $rangeObj$$.endKey[this.$_CONST_ROW$] = $selectionKey$$, $rangeObj$$[this.$_CONST_ENDINDEX$][this.$_CONST_ROW$] = $selectionIndex$$, $rangeObj$$ = {}, $rangeObj$$[this.$_CONST_STARTINDEX$] = 
        {}, $rangeObj$$[this.$_CONST_ENDINDEX$] = {}, $rangeObj$$.startKey = {}, $rangeObj$$.endKey = {}, $selectionKey$$ = this.$_getRowKeyForRowIdx$($selectionIdx$$), $selectionIndex$$ = this.$_getDataSourceRowIndexForRowKey$($selectionKey$$), $rangeObj$$.startKey[this.$_CONST_ROW$] = $selectionKey$$, $rangeObj$$.endKey[this.$_CONST_ROW$] = $selectionKey$$, $rangeObj$$[this.$_CONST_STARTINDEX$][this.$_CONST_ROW$] = $selectionIndex$$, $rangeObj$$[this.$_CONST_ENDINDEX$][this.$_CONST_ROW$] = $selectionIndex$$) : 
        ($rangeObj$$[this.$_CONST_ENDINDEX$][this.$_CONST_COLUMN$] = $previousIdx$$, $selectionKey$$ = this.$_getColumnKeyForColumnIdx$($previousIdx$$), $rangeObj$$.endKey[this.$_CONST_COLUMN$] = $selectionKey$$, $rangeObj$$ = {}, $rangeObj$$[this.$_CONST_STARTINDEX$] = {}, $rangeObj$$[this.$_CONST_ENDINDEX$] = {}, $rangeObj$$.startKey = {}, $rangeObj$$.endKey = {}, $rangeObj$$[this.$_CONST_STARTINDEX$][this.$_CONST_COLUMN$] = $selectionIdx$$, $rangeObj$$[this.$_CONST_ENDINDEX$][this.$_CONST_COLUMN$] = 
        $selectionIdx$$, $selectionKey$$ = this.$_getColumnKeyForColumnIdx$($selectionIdx$$), $rangeObj$$.startKey[this.$_CONST_COLUMN$] = $selectionKey$$, $rangeObj$$.endKey[this.$_CONST_COLUMN$] = $selectionKey$$), $rangeCount_selectedColumnIdxs$$++, $rangeArray_selectedRowIdxs$$1$$[$rangeCount_selectedColumnIdxs$$] = $rangeObj$$)), $previousIdx$$ = $selectionIdx$$;
      }
      return $rangeArray_selectedRowIdxs$$1$$;
    }, $_getSortedTableHeaderColumnIdx$:function() {
      var $tableHeaderColumns$$ = this.$_getTableDomUtils$().$getTableHeaderColumns$(), $i$$252$$, $sorted$$8$$, $tableHeaderColumnsCount$$ = $tableHeaderColumns$$.length;
      for ($i$$252$$ = 0;$i$$252$$ < $tableHeaderColumnsCount$$;$i$$252$$++) {
        if ($sorted$$8$$ = $$$$14$$($tableHeaderColumns$$[$i$$252$$]).data("sorted"), null != $sorted$$8$$) {
          return $i$$252$$;
        }
      }
      return null;
    }, $_getTabbableElements$:function($element$$159_tabbableElements$$) {
      $element$$159_tabbableElements$$ = $element$$159_tabbableElements$$.find(":tabbable");
      return null != $element$$159_tabbableElements$$ && 0 < $element$$159_tabbableElements$$.length ? $element$$159_tabbableElements$$ : null;
    }, $_getTableDndContext$:function() {
      this.$_tableDndContext$ || (this.$_tableDndContext$ = new $oj$$14$$.$TableDndContext$(this));
      return this.$_tableDndContext$;
    }, $_getTableDomUtils$:function() {
      this.$_tableDomUtils$ || (this.$_tableDomUtils$ = new $oj$$14$$.$TableDomUtils$(this));
      return this.$_tableDomUtils$;
    }, $_getTouchEventTargetElement$:function($event$$315_eventLocation$$) {
      $event$$315_eventLocation$$ = $event$$315_eventLocation$$.originalEvent.changedTouches[0];
      return $$$$14$$(document.elementFromPoint($event$$315_eventLocation$$.clientX, $event$$315_eventLocation$$.clientY));
    }, $_handleContextMenuSelect$:function($event$$316$$, $ui$$5$$) {
      var $menuItemCommand$$ = $ui$$5$$.item.attr("data-oj-command"), $headerColumn$$2$$ = this.$_getTableDomUtils$().$getFirstAncestor$($$$$14$$(this.$_contextMenuEvent$.target), "oj-table-column-header-cell"), $tableBodyCell$$1$$ = this.$_getTableDomUtils$().$getFirstAncestor$($$$$14$$(this.$_contextMenuEvent$.target), "oj-table-data-cell"), $columnIdx$$19$$ = null;
      null != $headerColumn$$2$$ && ($columnIdx$$19$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($headerColumn$$2$$));
      null != $tableBodyCell$$1$$ && ($columnIdx$$19$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($tableBodyCell$$1$$));
      "oj-table-sortAsc" == $menuItemCommand$$ ? this.$_handleSortTableHeaderColumn$($columnIdx$$19$$, !0, $event$$316$$) : "oj-table-sortDsc" == $menuItemCommand$$ ? this.$_handleSortTableHeaderColumn$($columnIdx$$19$$, !1, $event$$316$$) : "oj-table-enableNonContiguousSelection" == $menuItemCommand$$ ? (this.$_nonContiguousSelection$ = !0, $ui$$5$$.item.attr("data-oj-command", "oj-table-disableNonContiguousSelection"), $ui$$5$$.item.children().first().text(this.$getTranslatedString$("labelDisableNonContiguousSelection"))) : 
      "oj-table-disableNonContiguousSelection" == $menuItemCommand$$ && (this.$_nonContiguousSelection$ = !1, $ui$$5$$.item.attr("data-oj-command", "oj-table-enableNonContiguousSelection"), $ui$$5$$.item.children().first().text(this.$getTranslatedString$("labelEnableNonContiguousSelection")));
    }, $_handleDataError$:function($error$$32$$) {
      this.$_clearDataWaitingState$();
      $oj$$14$$.$Logger$.error($error$$32$$);
    }, $_handleDataFetchStart$:function() {
      this.$_setDataWaitingState$();
    }, $_handleDataFetchEnd$:function($event$$318$$) {
      try {
        var $self$$113$$ = this;
        this.$_queueTask$(function() {
          var $offset$$20$$ = 0, $data$$113_indexArray$$ = $self$$113$$.$_getData$();
          $data$$113_indexArray$$ instanceof $oj$$14$$.$PagingTableDataSource$ && ($offset$$20$$ = $data$$113_indexArray$$.getStartItemIndex());
          var $data$$113_indexArray$$ = [], $i$$253$$, $eventDataCount$$ = $event$$318$$[$self$$113$$.$_CONST_DATA$].length;
          for ($i$$253$$ = 0;$i$$253$$ < $eventDataCount$$;$i$$253$$++) {
            $data$$113_indexArray$$[$i$$253$$] = $i$$253$$ + $offset$$20$$ + $event$$318$$[$self$$113$$.$_CONST_STARTINDEX$];
          }
          $self$$113$$.$_refreshAll$({data:$event$$318$$[$self$$113$$.$_CONST_DATA$], keys:$event$$318$$[$self$$113$$.$_CONST_KEYS$], indexes:$data$$113_indexArray$$}, $event$$318$$[$self$$113$$.$_CONST_STARTINDEX$]);
          $self$$113$$ = null;
        });
      } catch ($e$$84$$) {
        $oj$$14$$.$Logger$.error($e$$84$$);
      } finally {
        this.$_clearDataWaitingState$();
      }
    }, $_handleDataRefresh$:function() {
      try {
        var $fetchPromise$$ = this.$_invokeDataFetchRows$(), $self$$114$$ = this;
        this.$_queueTask$(function() {
          $self$$114$$.$_setCurrentRow$(null, null, !1);
          $self$$114$$ = null;
          return $fetchPromise$$;
        });
      } catch ($e$$85$$) {
        $oj$$14$$.$Logger$.error($e$$85$$);
      } finally {
        this.$_clearDataWaitingState$();
      }
    }, $_handleDataReset$:function() {
      try {
        this.$_initFetch$();
        var $self$$115$$ = this;
        this.$_queueTask$(function() {
          $self$$115$$.$_setCurrentRow$(null, null, !1);
          $self$$115$$ = null;
        });
      } catch ($e$$86$$) {
        $oj$$14$$.$Logger$.error($e$$86$$);
      } finally {
        this.$_clearDataWaitingState$();
      }
    }, $_handleDataRowAdd$:function($event$$321_startIndex$$30$$) {
      try {
        var $data$$114_rowArray$$ = this.$_getData$(), $eventData$$6$$ = $event$$321_startIndex$$30$$[this.$_CONST_DATA$], $eventIndexes$$ = $event$$321_startIndex$$30$$[this.$_CONST_INDEXES$], $eventKeys$$ = $event$$321_startIndex$$30$$[this.$_CONST_KEYS$];
        $eventData$$6$$ instanceof Array || ($eventData$$6$$ = [$eventData$$6$$]);
        $event$$321_startIndex$$30$$ = 0;
        $data$$114_rowArray$$ instanceof $oj$$14$$.$PagingTableDataSource$ && ($event$$321_startIndex$$30$$ = $data$$114_rowArray$$.getStartItemIndex());
        var $data$$114_rowArray$$ = [], $i$$254$$, $eventDataCount$$1$$ = $eventData$$6$$.length;
        for ($i$$254$$ = 0;$i$$254$$ < $eventDataCount$$1$$;$i$$254$$++) {
          var $rowIdx$$13$$ = $eventIndexes$$[$i$$254$$] - $event$$321_startIndex$$30$$;
          void 0 !== $rowIdx$$13$$ && $data$$114_rowArray$$.push({row:{data:$eventData$$6$$[$i$$254$$], key:$eventKeys$$[$i$$254$$], index:$eventIndexes$$[$i$$254$$]}, $rowIdx$:$rowIdx$$13$$});
        }
        0 < $data$$114_rowArray$$.length && this.$_executeTableBodyRowsAdd$($data$$114_rowArray$$);
      } catch ($e$$87$$) {
        $oj$$14$$.$Logger$.error($e$$87$$);
      } finally {
        this.$_clearDataWaitingState$();
      }
    }, $_handleDataRowChange$:function($event$$322_startIndex$$31$$) {
      try {
        var $data$$115_rowArray$$1$$ = this.$_getData$(), $eventData$$7$$ = $event$$322_startIndex$$31$$[this.$_CONST_DATA$], $eventIndexes$$1$$ = $event$$322_startIndex$$31$$[this.$_CONST_INDEXES$], $eventKeys$$1$$ = $event$$322_startIndex$$31$$[this.$_CONST_KEYS$];
        $eventData$$7$$ instanceof Array || ($eventData$$7$$ = [$eventData$$7$$]);
        $event$$322_startIndex$$31$$ = 0;
        $data$$115_rowArray$$1$$ instanceof $oj$$14$$.$PagingTableDataSource$ && ($event$$322_startIndex$$31$$ = $data$$115_rowArray$$1$$.getStartItemIndex());
        var $data$$115_rowArray$$1$$ = [], $i$$255$$, $eventDataCount$$2$$ = $eventData$$7$$.length;
        for ($i$$255$$ = 0;$i$$255$$ < $eventDataCount$$2$$;$i$$255$$++) {
          var $rowIdx$$14$$ = $eventIndexes$$1$$[$i$$255$$] - $event$$322_startIndex$$31$$;
          void 0 !== $rowIdx$$14$$ && $data$$115_rowArray$$1$$.push({row:{data:$eventData$$7$$[$i$$255$$], key:$eventKeys$$1$$[$i$$255$$], index:$eventIndexes$$1$$[$i$$255$$]}, $rowIdx$:$rowIdx$$14$$});
        }
        0 < $data$$115_rowArray$$1$$.length && this.$_executeTableBodyRowsChange$($data$$115_rowArray$$1$$);
      } catch ($e$$88$$) {
        $oj$$14$$.$Logger$.error($e$$88$$);
      } finally {
        this.$_clearDataWaitingState$();
      }
    }, $_handleDataRowRemove$:function($event$$323_startIndex$$32$$) {
      try {
        var $data$$116_rowArray$$2$$ = this.$_getData$(), $eventData$$8$$ = $event$$323_startIndex$$32$$[this.$_CONST_DATA$], $eventIndexes$$2$$ = $event$$323_startIndex$$32$$[this.$_CONST_INDEXES$], $eventKeys$$2$$ = $event$$323_startIndex$$32$$[this.$_CONST_KEYS$];
        $eventData$$8$$ instanceof Array || ($eventData$$8$$ = [$eventData$$8$$]);
        $event$$323_startIndex$$32$$ = 0;
        $data$$116_rowArray$$2$$ instanceof $oj$$14$$.$PagingTableDataSource$ && ($event$$323_startIndex$$32$$ = $data$$116_rowArray$$2$$.getStartItemIndex());
        var $data$$116_rowArray$$2$$ = [], $i$$256$$;
        for ($i$$256$$ = $eventData$$8$$.length - 1;0 <= $i$$256$$;$i$$256$$--) {
          var $rowIdx$$15$$ = $eventIndexes$$2$$[$i$$256$$] - $event$$323_startIndex$$32$$;
          void 0 !== $rowIdx$$15$$ && $data$$116_rowArray$$2$$.push({row:{data:$eventData$$8$$[$i$$256$$], key:$eventKeys$$2$$[$i$$256$$], index:$eventIndexes$$2$$[$i$$256$$]}, $rowIdx$:$rowIdx$$15$$});
        }
        0 < $data$$116_rowArray$$2$$.length && this.$_executeTableBodyRowsRemove$($data$$116_rowArray$$2$$);
      } catch ($e$$89$$) {
        $oj$$14$$.$Logger$.error($e$$89$$);
      } finally {
        this.$_clearDataWaitingState$();
      }
    }, $_handleDataSort$:function($clearSelection$$2_event$$324$$) {
      try {
        var $columnIdx$$20$$;
        if (null != $clearSelection$$2_event$$324$$) {
          var $columns$$7$$ = this.$_getColumnDefs$(), $i$$257$$, $column$$12$$, $sortField$$, $columnsCount$$2$$ = $columns$$7$$.length;
          for ($i$$257$$ = 0;$i$$257$$ < $columnsCount$$2$$;$i$$257$$++) {
            if ($column$$12$$ = $columns$$7$$[$i$$257$$], $sortField$$ = null == $column$$12$$.sortProperty ? $column$$12$$.field : $column$$12$$.sortProperty, $clearSelection$$2_event$$324$$.header == $sortField$$) {
              $columnIdx$$20$$ = $i$$257$$;
              break;
            }
          }
          null != $columnIdx$$20$$ && this.$_refreshSortTableHeaderColumn$($columnIdx$$20$$, $clearSelection$$2_event$$324$$.direction == this.$_COLUMN_SORT_ORDER$.$_ASCENDING$);
        }
        var $existingSelection$$ = this.options.selection;
        if (null != $existingSelection$$) {
          $clearSelection$$2_event$$324$$ = !1;
          if (1 < $existingSelection$$.length) {
            $clearSelection$$2_event$$324$$ = !0;
          } else {
            if (null != $existingSelection$$[0]) {
              var $endIndex$$13$$ = $existingSelection$$[0][this.$_CONST_ENDINDEX$];
              $oj$$14$$.$Object$.$compareValues$($existingSelection$$[0][this.$_CONST_STARTINDEX$], $endIndex$$13$$) || null == $endIndex$$13$$ || ($clearSelection$$2_event$$324$$ = !0);
            }
          }
          $clearSelection$$2_event$$324$$ && (this.$_setSelection$(null), this.option("selection", null, {_context:{$writeback$:!0, $internalSet$:!0}}));
        }
        this.$_setCurrentRow$(this.options.currentRow, null, !1);
        var $self$$116$$ = this;
        this.$_queueTask$(function() {
          return $self$$116$$.$_isLoadMoreOnScroll$() ? $self$$116$$.$_invokeDataFetchRows$(0, null) : $self$$116$$.$_invokeDataFetchRows$(null);
        }).then(function() {
          null != $columnIdx$$20$$ && setTimeout(function() {
            $self$$116$$.$_scrollColumnIntoViewport$($columnIdx$$20$$);
            $columnIdx$$20$$ = $self$$116$$ = null;
          }, 0);
        });
      } catch ($e$$90$$) {
        $oj$$14$$.$Logger$.error($e$$90$$);
      } finally {
        this.$_clearDataWaitingState$();
      }
    }, $_handleKeydownLeftRight$:function($event$$325$$) {
      var $focusedHeaderColumnIdx$$2$$ = this.$_getFocusedHeaderColumnIdx$(), $columns$$8_newFocusedHeaderColumnSelection$$ = this.$_getColumnDefs$();
      if (null != $focusedHeaderColumnIdx$$2$$) {
        var $newFocusedHeaderColumnIdx$$ = $focusedHeaderColumnIdx$$2$$;
        this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_LEFT$) ? $newFocusedHeaderColumnIdx$$ = 0 < $focusedHeaderColumnIdx$$2$$ ? $focusedHeaderColumnIdx$$2$$ - 1 : $focusedHeaderColumnIdx$$2$$ : this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_RIGHT$) && ($newFocusedHeaderColumnIdx$$ = $focusedHeaderColumnIdx$$2$$ < $columns$$8_newFocusedHeaderColumnSelection$$.length - 1 ? $focusedHeaderColumnIdx$$2$$ + 1 : $focusedHeaderColumnIdx$$2$$);
        $newFocusedHeaderColumnIdx$$ != $focusedHeaderColumnIdx$$2$$ && (this.$_setHeaderColumnFocus$($newFocusedHeaderColumnIdx$$, !0, !1, null), $event$$325$$[this.$_KEYBOARD_CODES$.$_KEYBOARD_MODIFIER_SHIFT$] && ($columns$$8_newFocusedHeaderColumnSelection$$ = this.$_getHeaderColumnSelection$($newFocusedHeaderColumnIdx$$), this.$_setHeaderColumnSelection$($newFocusedHeaderColumnIdx$$, !$columns$$8_newFocusedHeaderColumnSelection$$, null, $event$$325$$, !0), $columns$$8_newFocusedHeaderColumnSelection$$ && 
        this.$_getHeaderColumnSelection$($focusedHeaderColumnIdx$$2$$) && this.$_setHeaderColumnSelection$($focusedHeaderColumnIdx$$2$$, !1, null, $event$$325$$, !0)));
      }
    }, $_handleKeydownTab$:function($event$$326$$) {
      var $tabHandled_tabbableElementsInDocument$$ = !1, $focusedRowIdx$$3_tabbableElementsInDocumentCount$$ = this.$_getFocusedRowIdx$();
      if (null != $focusedRowIdx$$3_tabbableElementsInDocumentCount$$ && this.$_tableNavMode$) {
        var $currentFocusElement_rowElementTabIndex_tabbableElementsInTableCount_tableHeaderColumnsCount$$1$$ = document.activeElement, $tabbableElementsInBody_tabbableElementsInTable_table$$2_tableBody$$2$$ = this.$_getTableDomUtils$().$getTableBody$();
        if (this.$_getEditableRowIdx$() === $focusedRowIdx$$3_tabbableElementsInDocumentCount$$) {
          var $tabbableElementsInRow_tableBodyRow$$5_tableTabIndex$$ = this.$_getTableDomUtils$().$getTableBodyRow$($focusedRowIdx$$3_tabbableElementsInDocumentCount$$), $tabbableElementsInRow_tableBodyRow$$5_tableTabIndex$$ = this.$_getTabbableElements$($tabbableElementsInRow_tableBodyRow$$5_tableTabIndex$$), $tabbableElementsInRowCount$$ = null != $tabbableElementsInRow_tableBodyRow$$5_tableTabIndex$$ ? $tabbableElementsInRow_tableBodyRow$$5_tableTabIndex$$.length : 0, $currentFocusElement_rowElementTabIndex_tabbableElementsInTableCount_tableHeaderColumnsCount$$1$$ = 
          $tabbableElementsInRow_tableBodyRow$$5_tableTabIndex$$.index($currentFocusElement_rowElementTabIndex_tabbableElementsInTableCount_tableHeaderColumnsCount$$1$$);
          if ($currentFocusElement_rowElementTabIndex_tabbableElementsInTableCount_tableHeaderColumnsCount$$1$$ != $tabbableElementsInRowCount$$ - 1 || $event$$326$$[this.$_KEYBOARD_CODES$.$_KEYBOARD_MODIFIER_SHIFT$]) {
            if (0 == $currentFocusElement_rowElementTabIndex_tabbableElementsInTableCount_tableHeaderColumnsCount$$1$$ && $event$$326$$[this.$_KEYBOARD_CODES$.$_KEYBOARD_MODIFIER_SHIFT$]) {
              $currentFocusElement_rowElementTabIndex_tabbableElementsInTableCount_tableHeaderColumnsCount$$1$$ = this.$_getTableDomUtils$().$getTableHeaderColumns$().length, this.$_setPreviousRowEditable$($currentFocusElement_rowElementTabIndex_tabbableElementsInTableCount_tableHeaderColumnsCount$$1$$ - 1, $event$$326$$);
            } else {
              return;
            }
          } else {
            this.$_setNextRowEditable$(0, $event$$326$$);
          }
        } else {
          if ($$$$14$$.contains($tabbableElementsInBody_tabbableElementsInTable_table$$2_tableBody$$2$$[0], $currentFocusElement_rowElementTabIndex_tabbableElementsInTableCount_tableHeaderColumnsCount$$1$$)) {
            return;
          }
        }
        $tabbableElementsInBody_tabbableElementsInTable_table$$2_tableBody$$2$$ = this.$_getTabbableElements$($tabbableElementsInBody_tabbableElementsInTable_table$$2_tableBody$$2$$);
        null == $tabbableElementsInBody_tabbableElementsInTable_table$$2_tableBody$$2$$ || $event$$326$$[this.$_KEYBOARD_CODES$.$_KEYBOARD_MODIFIER_SHIFT$] || ($tabHandled_tabbableElementsInDocument$$ = !0, $tabbableElementsInRow_tableBodyRow$$5_tableTabIndex$$ = this.$_getTableDomUtils$().$getTableBodyRow$($focusedRowIdx$$3_tabbableElementsInDocumentCount$$), $tabbableElementsInRow_tableBodyRow$$5_tableTabIndex$$ = this.$_getTabbableElements$($tabbableElementsInRow_tableBodyRow$$5_tableTabIndex$$), 
        null != $tabbableElementsInRow_tableBodyRow$$5_tableTabIndex$$ ? $$$$14$$($tabbableElementsInRow_tableBodyRow$$5_tableTabIndex$$[0]).focus() : $$$$14$$($tabbableElementsInBody_tabbableElementsInTable_table$$2_tableBody$$2$$[0]).focus(), $event$$326$$.preventDefault(), $event$$326$$.stopPropagation());
      }
      if (!$tabHandled_tabbableElementsInDocument$$) {
        $tabbableElementsInBody_tabbableElementsInTable_table$$2_tableBody$$2$$ = this.$_getTableDomUtils$().$getTable$();
        $tabHandled_tabbableElementsInDocument$$ = this.$_getTabbableElements$($$$$14$$(document));
        $focusedRowIdx$$3_tabbableElementsInDocumentCount$$ = $tabHandled_tabbableElementsInDocument$$.length;
        $tabbableElementsInBody_tabbableElementsInTable_table$$2_tableBody$$2$$ = this.$_getTabbableElements$($tabbableElementsInBody_tabbableElementsInTable_table$$2_tableBody$$2$$);
        $currentFocusElement_rowElementTabIndex_tabbableElementsInTableCount_tableHeaderColumnsCount$$1$$ = null != $tabbableElementsInBody_tabbableElementsInTable_table$$2_tableBody$$2$$ ? $tabbableElementsInBody_tabbableElementsInTable_table$$2_tableBody$$2$$.length : 0;
        $tabbableElementsInRow_tableBodyRow$$5_tableTabIndex$$ = $tabHandled_tabbableElementsInDocument$$.index(this.$_getTableDomUtils$().$getTable$());
        if ($event$$326$$[this.$_KEYBOARD_CODES$.$_KEYBOARD_MODIFIER_SHIFT$]) {
          if (0 <= $tabbableElementsInRow_tableBodyRow$$5_tableTabIndex$$) {
            if (0 == $tabbableElementsInRow_tableBodyRow$$5_tableTabIndex$$) {
              return;
            }
            $$$$14$$($tabHandled_tabbableElementsInDocument$$[$tabbableElementsInRow_tableBodyRow$$5_tableTabIndex$$ - 1]).focus();
          } else {
            return;
          }
        } else {
          if ($tabbableElementsInRow_tableBodyRow$$5_tableTabIndex$$ != $focusedRowIdx$$3_tabbableElementsInDocumentCount$$ - 1 && $tabbableElementsInRow_tableBodyRow$$5_tableTabIndex$$ + $currentFocusElement_rowElementTabIndex_tabbableElementsInTableCount_tableHeaderColumnsCount$$1$$ + 1 <= $focusedRowIdx$$3_tabbableElementsInDocumentCount$$ - 1) {
            $$$$14$$($tabHandled_tabbableElementsInDocument$$[$tabbableElementsInRow_tableBodyRow$$5_tableTabIndex$$ + $currentFocusElement_rowElementTabIndex_tabbableElementsInTableCount_tableHeaderColumnsCount$$1$$ + 1]).focus();
          } else {
            if (0 < $currentFocusElement_rowElementTabIndex_tabbableElementsInTableCount_tableHeaderColumnsCount$$1$$) {
              this.$_temporaryTableChildElementFocus$ = !0;
              $tabbableElementsInBody_tabbableElementsInTable_table$$2_tableBody$$2$$[$currentFocusElement_rowElementTabIndex_tabbableElementsInTableCount_tableHeaderColumnsCount$$1$$ - 1].focus();
              var $self$$117$$ = this;
              setTimeout(function() {
                $self$$117$$.$_temporaryTableChildElementFocus$ = !1;
              }, 0);
            }
            return;
          }
        }
        $event$$326$$.preventDefault();
        $event$$326$$.stopPropagation();
      }
      this.$_removeKeyboardKey$($event$$326$$.keyCode);
    }, $_handleKeydownUpDown$:function($event$$327$$) {
      var $focusedRowIdx$$4$$ = this.$_getFocusedRowIdx$(), $focusedHeaderColumnIdx$$3_newFocusedRowIdx_tableBodyRows$$5$$ = this.$_getFocusedHeaderColumnIdx$();
      if (null != $focusedRowIdx$$4$$) {
        var $focusedHeaderColumnIdx$$3_newFocusedRowIdx_tableBodyRows$$5$$ = this.$_getTableDomUtils$().$getTableBodyRows$(), $newFocusedRowSelection_rowCount$$12$$ = null != $focusedHeaderColumnIdx$$3_newFocusedRowIdx_tableBodyRows$$5$$ ? $focusedHeaderColumnIdx$$3_newFocusedRowIdx_tableBodyRows$$5$$.length : 0, $focusedHeaderColumnIdx$$3_newFocusedRowIdx_tableBodyRows$$5$$ = $focusedRowIdx$$4$$;
        this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_UP$) ? $focusedHeaderColumnIdx$$3_newFocusedRowIdx_tableBodyRows$$5$$ = 0 < $focusedRowIdx$$4$$ ? $focusedRowIdx$$4$$ - 1 : $focusedRowIdx$$4$$ : this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_DOWN$) && ($focusedHeaderColumnIdx$$3_newFocusedRowIdx_tableBodyRows$$5$$ = $focusedRowIdx$$4$$ < $newFocusedRowSelection_rowCount$$12$$ - 1 ? $focusedRowIdx$$4$$ + 1 : $focusedRowIdx$$4$$);
        $focusedHeaderColumnIdx$$3_newFocusedRowIdx_tableBodyRows$$5$$ != $focusedRowIdx$$4$$ ? this.$_setRowFocus$($focusedHeaderColumnIdx$$3_newFocusedRowIdx_tableBodyRows$$5$$, !0, !0, null, $event$$327$$) && $event$$327$$[this.$_KEYBOARD_CODES$.$_KEYBOARD_MODIFIER_SHIFT$] && ($newFocusedRowSelection_rowCount$$12$$ = this.$_getRowSelection$($focusedHeaderColumnIdx$$3_newFocusedRowIdx_tableBodyRows$$5$$), this.$_setRowSelection$($focusedHeaderColumnIdx$$3_newFocusedRowIdx_tableBodyRows$$5$$, !$newFocusedRowSelection_rowCount$$12$$, 
        null, $event$$327$$, !0), $newFocusedRowSelection_rowCount$$12$$ && this.$_getRowSelection$($focusedRowIdx$$4$$) && this.$_setRowSelection$($focusedRowIdx$$4$$, !1, null, $event$$327$$, !0)) : $focusedHeaderColumnIdx$$3_newFocusedRowIdx_tableBodyRows$$5$$ == $focusedRowIdx$$4$$ && 0 == $focusedRowIdx$$4$$ && this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_UP$) && this.$_setHeaderColumnFocus$(0, !0, !1, null);
      } else {
        null != $focusedHeaderColumnIdx$$3_newFocusedRowIdx_tableBodyRows$$5$$ && this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_DOWN$) && this.$_setRowFocus$(0, !0, !0, null, $event$$327$$);
      }
    }, $_handleKeyupEnd$:function($event$$328$$) {
      var $focusedColumnIdx_focusedRowIdx$$5$$ = this.$_getFocusedHeaderColumnIdx$();
      if (null != $focusedColumnIdx_focusedRowIdx$$5$$ && $focusedColumnIdx_focusedRowIdx$$5$$ != this.$_getColumnDefs$().length - 1) {
        this.$_setHeaderColumnFocus$(this.$_getColumnDefs$().length - 1, !0, !1, null);
      } else {
        var $focusedColumnIdx_focusedRowIdx$$5$$ = this.$_getFocusedRowIdx$(), $rowCount$$13_tableBodyRows$$6$$ = this.$_getTableDomUtils$().$getTableBodyRows$(), $rowCount$$13_tableBodyRows$$6$$ = null != $rowCount$$13_tableBodyRows$$6$$ ? $rowCount$$13_tableBodyRows$$6$$.length : 0;
        null != $focusedColumnIdx_focusedRowIdx$$5$$ && $focusedColumnIdx_focusedRowIdx$$5$$ != $rowCount$$13_tableBodyRows$$6$$ - 1 && 0 < $rowCount$$13_tableBodyRows$$6$$ && this.$_setRowFocus$($rowCount$$13_tableBodyRows$$6$$ - 1, !0, !0, null, $event$$328$$);
      }
    }, $_handleKeyupEnter$:function($event$$329$$) {
      var $columnIdx$$21_currentRow$$1_focusedColumnIdx$$1$$ = this.$_getFocusedHeaderColumnIdx$();
      if (null != $columnIdx$$21_currentRow$$1_focusedColumnIdx$$1$$ && this.$_getColumnDefs$()[$columnIdx$$21_currentRow$$1_focusedColumnIdx$$1$$].sortable == this.$_OPTION_ENABLED$) {
        var $sorted$$9$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($columnIdx$$21_currentRow$$1_focusedColumnIdx$$1$$).data("sorted");
        null == $sorted$$9$$ || $sorted$$9$$ == this.$_COLUMN_SORT_ORDER$.$_DESCENDING$ ? this.$_handleSortTableHeaderColumn$($columnIdx$$21_currentRow$$1_focusedColumnIdx$$1$$, !0, $event$$329$$) : this.$_handleSortTableHeaderColumn$($columnIdx$$21_currentRow$$1_focusedColumnIdx$$1$$, !1, $event$$329$$);
      } else {
        $columnIdx$$21_currentRow$$1_focusedColumnIdx$$1$$ = ($columnIdx$$21_currentRow$$1_focusedColumnIdx$$1$$ = this.$_getCurrentRow$()) || {}, 0 <= $columnIdx$$21_currentRow$$1_focusedColumnIdx$$1$$.rowIndex && (this.$_getTableDomUtils$().$getTableBodyRows$(), this.$_hasEditableRow$() ? ($columnIdx$$21_currentRow$$1_focusedColumnIdx$$1$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($$$$14$$($event$$329$$.target)), $event$$329$$[this.$_KEYBOARD_CODES$.$_KEYBOARD_MODIFIER_SHIFT$] ? this.$_setPreviousRowEditable$($columnIdx$$21_currentRow$$1_focusedColumnIdx$$1$$, 
        $event$$329$$) : this.$_setNextRowEditable$($columnIdx$$21_currentRow$$1_focusedColumnIdx$$1$$, $event$$329$$)) : this.$_setTableEditable$(!0, !1, 0, !0, $event$$329$$));
      }
    }, $_handleKeyupEsc$:function($event$$330$$) {
      $event$$330$$.preventDefault();
      $event$$330$$.stopPropagation();
      this.$_setTableEditable$(!1, !0, 0, !0, $event$$330$$);
      this.$_getTableDomUtils$().$getTable$().focus();
      this.$_setTableNavigationMode$(!1);
    }, $_handleKeyupF2$:function($event$$331$$) {
      $event$$331$$.preventDefault();
      $event$$331$$.stopPropagation();
      this.$_hasEditableRow$() ? this.$_setTableEditable$(!1, !1, 0, !0, $event$$331$$) : this.$_setTableEditable$(!0, !1, 0, !0, $event$$331$$);
      this.$_getTableDomUtils$().$getTable$().focus();
      this.$_setTableNavigationMode$(!1);
    }, $_handleKeyupHome$:function($event$$332$$) {
      var $focusedColumnIdx$$2_focusedRowIdx$$6$$ = this.$_getFocusedHeaderColumnIdx$();
      null != $focusedColumnIdx$$2_focusedRowIdx$$6$$ && 0 != $focusedColumnIdx$$2_focusedRowIdx$$6$$ ? this.$_setHeaderColumnFocus$(0, !0, !1, null) : ($focusedColumnIdx$$2_focusedRowIdx$$6$$ = this.$_getFocusedRowIdx$(), null != $focusedColumnIdx$$2_focusedRowIdx$$6$$ && 0 != $focusedColumnIdx$$2_focusedRowIdx$$6$$ && this.$_setRowFocus$(0, !0, !0, null, $event$$332$$));
    }, $_handleKeyupSpacebar$:function($event$$333$$) {
      var $focusedHeaderColumnIdx$$4_focusedRowIdx$$7$$ = this.$_getFocusedRowIdx$();
      null != $focusedHeaderColumnIdx$$4_focusedRowIdx$$7$$ ? this.$_setRowSelection$($focusedHeaderColumnIdx$$4_focusedRowIdx$$7$$, !this.$_getRowSelection$($focusedHeaderColumnIdx$$4_focusedRowIdx$$7$$), null, $event$$333$$, !0) : ($focusedHeaderColumnIdx$$4_focusedRowIdx$$7$$ = this.$_getFocusedHeaderColumnIdx$(), null != $focusedHeaderColumnIdx$$4_focusedRowIdx$$7$$ && (this.$_clearSelectedRows$(), this.$_setHeaderColumnSelection$($focusedHeaderColumnIdx$$4_focusedRowIdx$$7$$, !this.$_getHeaderColumnSelection$($focusedHeaderColumnIdx$$4_focusedRowIdx$$7$$), 
      null, $event$$333$$, !0)));
    }, $_handleMouseEnterSelection$:function($element$$160$$) {
      var $rowIdx$$16$$ = this.$_getTableDomUtils$().$getElementRowIdx$($$$$14$$($element$$160$$));
      if (null != $rowIdx$$16$$ && null != this.$_mouseDownRowIdx$ && this.$_mouseDownRowIdx$ != $rowIdx$$16$$) {
        var $lastSelectedRowIdx$$1$$ = this.$_mouseDownRowIdx$, $selectedRowIdxs$$2$$ = this.$_getSelectedRowIdxs$();
        if ($rowIdx$$16$$ < $lastSelectedRowIdx$$1$$) {
          var $i$$258$$;
          for ($i$$258$$ = 0;$i$$258$$ < $selectedRowIdxs$$2$$.length;$i$$258$$++) {
            ($selectedRowIdxs$$2$$[$i$$258$$] < $rowIdx$$16$$ || $selectedRowIdxs$$2$$[$i$$258$$] > $lastSelectedRowIdx$$1$$) && this.$_setRowSelection$($selectedRowIdxs$$2$$[$i$$258$$], !1, $element$$160$$, null, !0);
          }
          for ($i$$258$$ = $lastSelectedRowIdx$$1$$;$i$$258$$ >= $rowIdx$$16$$;$i$$258$$--) {
            this.$_setRowSelection$($i$$258$$, !0, $element$$160$$, null, !0), this.$_getTableDomUtils$().$moveTableBodyRowTouchSelectionAffordanceTop$($i$$258$$);
          }
        } else {
          for ($i$$258$$ = 0;$i$$258$$ < $selectedRowIdxs$$2$$.length;$i$$258$$++) {
            ($selectedRowIdxs$$2$$[$i$$258$$] > $rowIdx$$16$$ || $selectedRowIdxs$$2$$[$i$$258$$] < $lastSelectedRowIdx$$1$$) && this.$_setRowSelection$($selectedRowIdxs$$2$$[$i$$258$$], !1, $element$$160$$, null, !0);
          }
          for ($i$$258$$ = $lastSelectedRowIdx$$1$$;$i$$258$$ <= $rowIdx$$16$$;$i$$258$$++) {
            this.$_setRowSelection$($i$$258$$, !0, $element$$160$$, null, !0), this.$_getTableDomUtils$().$moveTableBodyRowTouchSelectionAffordanceBottom$($i$$258$$);
          }
        }
      }
    }, $_handleScrollerMaxRowCount$:function() {
      this.$_showInlineMessage$(this.$_LOGGER_MSG$.$_ERR_DOM_SCROLLER_MAX_COUNT_SUMMARY$, this.$_LOGGER_MSG$.$_ERR_DOM_SCROLLER_MAX_COUNT_DETAIL$, $oj$$14$$.$Message$.$SEVERITY_LEVEL$.WARNING);
    }, $_handleScrollerScrollLeft$:function($scrollLeft$$12$$) {
      var $tableFooterRow_tableHeader_tableHeaderRow$$ = this.$_getTableDomUtils$().$getTableHeader$(), $tableFooter$$ = this.$_getTableDomUtils$().$getTableFooter$();
      this.$_getTableDomUtils$().$isDivScroller$() ? ($tableFooterRow_tableHeader_tableHeaderRow$$ && ("rtl" === this.$_GetReadingDirection$() ? $tableFooterRow_tableHeader_tableHeaderRow$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_RIGHT$, "-" + $scrollLeft$$12$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$) : $tableFooterRow_tableHeader_tableHeaderRow$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_LEFT$, "-" + $scrollLeft$$12$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$)), $tableFooter$$ && ("rtl" === 
      this.$_GetReadingDirection$() ? $tableFooter$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_RIGHT$, "-" + $scrollLeft$$12$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$) : $tableFooter$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_LEFT$, "-" + $scrollLeft$$12$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$))) : (($tableFooterRow_tableHeader_tableHeaderRow$$ = this.$_getTableDomUtils$().$getTableHeaderRow$()) && ("rtl" === this.$_GetReadingDirection$() ? $tableFooterRow_tableHeader_tableHeaderRow$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_RIGHT$, 
      "-" + $scrollLeft$$12$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$) : $tableFooterRow_tableHeader_tableHeaderRow$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_LEFT$, "-" + $scrollLeft$$12$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$)), ($tableFooterRow_tableHeader_tableHeaderRow$$ = this.$_getTableDomUtils$().$getTableFooterRow$()) && ("rtl" === this.$_GetReadingDirection$() ? $tableFooterRow_tableHeader_tableHeaderRow$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_RIGHT$, "-" + $scrollLeft$$12$$ + 
      $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$) : $tableFooterRow_tableHeader_tableHeaderRow$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_LEFT$, "-" + $scrollLeft$$12$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$)));
    }, $_handleSortTableHeaderColumn$:function($columnIdx$$22$$, $ascending$$, $event$$334$$) {
      this.$_clearSortedHeaderColumn$($columnIdx$$22$$);
      var $column$$13$$ = this.$_getColumnDefs$()[$columnIdx$$22$$];
      this.$_invokeDataSort$(null == $column$$13$$.sortProperty ? $column$$13$$.field : $column$$13$$.sortProperty, $ascending$$, $event$$334$$);
      this.$_sortColumn$ = $column$$13$$;
      this.$_refreshSortTableHeaderColumn$($columnIdx$$22$$, $ascending$$);
    }, $_hasEditableRow$:function() {
      var $editMode$$2$$ = this.options.editMode;
      return null == $editMode$$2$$ || $editMode$$2$$ == this.$_OPTION_EDIT_MODE$.$_NONE$ ? !1 : null !== this.$_getEditableRowIdx$();
    }, $_hasRowOrCellRenderer$:function($columnIdx$$23_i$$259$$) {
      if (null != this.$_getRowRenderer$()) {
        return!0;
      }
      var $cellRenderer$$ = null;
      if (null != $columnIdx$$23_i$$259$$) {
        $cellRenderer$$ = this.$_getColumnRenderer$($columnIdx$$23_i$$259$$, "cell");
      } else {
        var $columnsCount$$3$$ = this.$_getColumnDefs$().length;
        for ($columnIdx$$23_i$$259$$ = 0;$columnIdx$$23_i$$259$$ < $columnsCount$$3$$ && ($cellRenderer$$ = this.$_getColumnRenderer$($columnIdx$$23_i$$259$$, "cell"), null == $cellRenderer$$);$columnIdx$$23_i$$259$$++) {
        }
      }
      return null != $cellRenderer$$ ? !0 : !1;
    }, $_hideInlineMessage$:function() {
      var $inlineMessage$$ = this.$_getTableDomUtils$().$getTableInlineMessage$();
      if ($inlineMessage$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_DISPLAY$) != $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_NONE$) {
        var $inlineMessageHeight$$ = $inlineMessage$$.outerHeight(), $tableContainer$$2$$ = this.$_getTableDomUtils$().$getTableContainer$(), $tableContainerBorderBottom$$ = parseInt($tableContainer$$2$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_BORDER_BOTTOM_WIDTH$), 10), $tableContainerMarginBottom$$ = parseInt($tableContainer$$2$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_MARGIN_BOTTOM$), 10);
        $tableContainer$$2$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_MARGIN_BOTTOM$, $tableContainerMarginBottom$$ - $tableContainerBorderBottom$$ - $inlineMessageHeight$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$);
        $tableContainer$$2$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_WARNING$);
        $inlineMessage$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_WARNING$);
        $inlineMessage$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_BOTTOM$, "");
        $inlineMessage$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_DISPLAY$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_NONE$);
      }
    }, $_hideNoDataMessage$:function() {
      var $noDataRow$$ = this.$_getTableDomUtils$().$getTableNoDataRow$();
      null != $noDataRow$$ && $noDataRow$$.remove();
    }, $_hideStatusMessage$:function() {
      this.$_getTableDomUtils$().$getTableStatusMessage$().css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_DISPLAY$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_NONE$);
    }, $_hideTableHeaderColumnSortLink$:function($columnIdx$$24$$, $ascending$$1$$) {
      if (this.$_getColumnDefs$()[$columnIdx$$24$$].sortable == this.$_OPTION_ENABLED$) {
        var $headerColumnAscLink_headerColumnDscLink_tableHeaderColumn$$6$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($columnIdx$$24$$), $sorted$$10$$ = $headerColumnAscLink_headerColumnDscLink_tableHeaderColumn$$6$$.data("sorted");
        !$ascending$$1$$ || null != $sorted$$10$$ && $sorted$$10$$ != this.$_COLUMN_SORT_ORDER$.$_DESCENDING$ ? $ascending$$1$$ || null != $sorted$$10$$ && $sorted$$10$$ != this.$_COLUMN_SORT_ORDER$.$_ASCENDING$ || ($headerColumnAscLink_headerColumnDscLink_tableHeaderColumn$$6$$ = $headerColumnAscLink_headerColumnDscLink_tableHeaderColumn$$6$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DSC_LINK_CLASS$), $headerColumnAscLink_headerColumnDscLink_tableHeaderColumn$$6$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$), 
        $headerColumnAscLink_headerColumnDscLink_tableHeaderColumn$$6$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_ENABLED$), $headerColumnAscLink_headerColumnDscLink_tableHeaderColumn$$6$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$)) : ($headerColumnAscLink_headerColumnDscLink_tableHeaderColumn$$6$$ = $headerColumnAscLink_headerColumnDscLink_tableHeaderColumn$$6$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_LINK_CLASS$), 
        $headerColumnAscLink_headerColumnDscLink_tableHeaderColumn$$6$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$), $headerColumnAscLink_headerColumnDscLink_tableHeaderColumn$$6$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_ENABLED$), $headerColumnAscLink_headerColumnDscLink_tableHeaderColumn$$6$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$));
      }
    }, $_initFetch$:function() {
      var $self$$118$$ = this, $data$$117$$ = this.$_getData$();
      null != $data$$117$$ && $data$$117$$ instanceof $oj$$14$$.$TableDataSource$ && !($data$$117$$ instanceof $oj$$14$$.$PagingTableDataSource$) ? (this.$_getTableDomUtils$().$getScroller$()[0].scrollTop = 0, this.$_queueTask$(function() {
        var $result$$37$$ = $self$$118$$.$_invokeDataFetchRows$(0, {fetchType:"init"});
        $self$$118$$ = null;
        return $result$$37$$;
      })) : null == $data$$117$$ && this.$_queueTask$(function() {
        return Promise.resolve();
      });
    }, $_invokeDataFetchRows$:function($startIndex$$34$$, $options$$249$$) {
      $options$$249$$ = $options$$249$$ || {};
      $options$$249$$[this.$_CONST_STARTINDEX$] = $startIndex$$34$$;
      !$options$$249$$[this.$_CONST_PAGESIZE$] && this.$_isLoadMoreOnScroll$() && ($options$$249$$[this.$_CONST_PAGESIZE$] = this.options.scrollPolicyOptions.fetchSize);
      $options$$249$$.silent = !0;
      var $initFetch$$1$$ = "init" == $options$$249$$.fetchType ? !0 : !1, $data$$118$$ = this.$_getData$(), $self$$119$$ = this;
      return new Promise(function($resolve$$28$$, $reject$$28$$) {
        null != $data$$118$$ ? ($self$$119$$.$_setDataWaitingState$(), $data$$118$$.fetch($options$$249$$).then(function($result$$38$$) {
          if (null != $result$$38$$ && null != $result$$38$$[$self$$119$$.$_CONST_DATA$]) {
            var $offset$$21$$ = 0;
            $data$$118$$ instanceof $oj$$14$$.$PagingTableDataSource$ && ($offset$$21$$ = $data$$118$$.getStartItemIndex());
            var $indexArray$$1$$ = [], $i$$260$$, $resultDataCount$$ = $result$$38$$[$self$$119$$.$_CONST_DATA$].length;
            for ($i$$260$$ = 0;$i$$260$$ < $resultDataCount$$;$i$$260$$++) {
              $indexArray$$1$$[$i$$260$$] = $i$$260$$ + $offset$$21$$ + $result$$38$$[$self$$119$$.$_CONST_STARTINDEX$];
            }
            $self$$119$$.$_refreshAll$({data:$result$$38$$[$self$$119$$.$_CONST_DATA$], keys:$result$$38$$[$self$$119$$.$_CONST_KEYS$], indexes:$indexArray$$1$$}, $result$$38$$[$self$$119$$.$_CONST_STARTINDEX$], $initFetch$$1$$, $initFetch$$1$$);
          }
          $self$$119$$.$_clearDataWaitingState$();
          $self$$119$$ = null;
          $resolve$$28$$(null);
        }, function($error$$33$$) {
          $self$$119$$.$_clearDataWaitingState$();
          $self$$119$$ = null;
          $reject$$28$$($error$$33$$);
        })) : $resolve$$28$$(null);
      });
    }, $_invokeDataSort$:function($sortField$$2$$, $ascending$$2$$, $event$$335$$) {
      var $data$$119$$ = this.$_getData$();
      if (!$data$$119$$) {
        return null;
      }
      this.$_showStatusMessage$();
      var $sortCriteria$$ = {};
      $sortCriteria$$[this.$_CONST_KEY$] = $sortField$$2$$;
      $sortCriteria$$.direction = $ascending$$2$$ ? this.$_COLUMN_SORT_ORDER$.$_ASCENDING$ : this.$_COLUMN_SORT_ORDER$.$_DESCENDING$;
      this._trigger("sort", $event$$335$$, {header:$sortCriteria$$[this.$_CONST_KEY$], direction:$sortCriteria$$.direction});
      $data$$119$$.sort($sortCriteria$$);
    }, $_isColumnMetadataUpdated$:function() {
      if (null != this.$_columnDefArray$) {
        var $columnsMetadata$$ = this.$_getColumnMetadata$();
        if (this.$_columnDefArray$.length != $columnsMetadata$$.length) {
          return!0;
        }
        var $i$$261$$, $prop$$69$$, $columnsMetadataCount$$ = $columnsMetadata$$.length;
        for ($i$$261$$ = 0;$i$$261$$ < $columnsMetadataCount$$;$i$$261$$++) {
          for ($prop$$69$$ in $columnsMetadata$$[$i$$261$$]) {
            if ($columnsMetadata$$[$i$$261$$].hasOwnProperty($prop$$69$$) && $columnsMetadata$$[$i$$261$$][$prop$$69$$] != this.$_columnDefArray$[$i$$261$$][$prop$$69$$]) {
              return!0;
            }
          }
        }
        return!1;
      }
      return!0;
    }, $_isKeyboardKeyPressed$:function($keyCode$$8$$) {
      var $keyboardKeys$$1$$ = this.$_getKeyboardKeys$(), $i$$262$$, $keyboardKeysCount$$1$$ = $keyboardKeys$$1$$.length;
      for ($i$$262$$ = 0;$i$$262$$ < $keyboardKeysCount$$1$$;$i$$262$$++) {
        if ($keyboardKeys$$1$$[$i$$262$$] == $keyCode$$8$$) {
          return!0;
        }
      }
      return!1;
    }, $_isLoadMoreOnScroll$:function() {
      return this.options.scrollPolicy == this.$_OPTION_SCROLL_POLICY$.$_LOADMORE_ON_SCROLL$ ? !0 : !1;
    }, $_isNodeEditable$:function($node$$59$$) {
      return this.$_isNodeType$($node$$59$$, /^INPUT|TEXTAREA/);
    }, $_isNodeClickable$:function($node$$60$$) {
      return this.$_isNodeType$($node$$60$$, /SELECT|OPTION|BUTTON|^A\b/);
    }, $_isNodeDraggable$:function($node$$61$$) {
      return 0 < $node$$61$$.closest("[draggable\x3d'true']").length;
    }, $_isNodeType$:function($node$$62$$, $type$$80$$) {
      for (var $nodeName$$4$$, $table$$3$$ = this.$_getTableDomUtils$().$getTable$();null != $node$$62$$ && $node$$62$$[0] != $table$$3$$[0] && "TD" != ($nodeName$$4$$ = $node$$62$$.prop("nodeName")) && "TH" != $nodeName$$4$$;) {
        if (3 == $node$$62$$[0].nodeType) {
          $node$$62$$ = $node$$62$$[0].parentNode;
        } else {
          var $tabIndex$$3$$ = $node$$62$$.attr("tabIndex");
          if ($nodeName$$4$$.match($type$$80$$) && -1 != $tabIndex$$3$$) {
            return!0;
          }
          $node$$62$$ = $node$$62$$.parentNode;
        }
      }
      return!1;
    }, $_isTableFooterless$:function() {
      var $i$$263$$, $footerRenderer$$, $columnsCount$$4$$ = this.$_getColumnDefs$().length;
      for ($i$$263$$ = 0;$i$$263$$ < $columnsCount$$4$$;$i$$263$$++) {
        if ($footerRenderer$$ = this.$_getColumnRenderer$($i$$263$$, "footer"), null != $footerRenderer$$) {
          return!1;
        }
      }
      return!0;
    }, $_isTableHeaderless$:function() {
      var $columns$$11$$ = this.$_getColumnDefs$(), $i$$264$$, $columnsCount$$5$$ = $columns$$11$$.length;
      for ($i$$264$$ = 0;$i$$264$$ < $columnsCount$$5$$;$i$$264$$++) {
        if (null != $columns$$11$$[$i$$264$$].headerText || null != $columns$$11$$[$i$$264$$].headerStyle || null != $columns$$11$$[$i$$264$$].sortable && $columns$$11$$[$i$$264$$].sortable != this.$_OPTION_NONE$ || null != $columns$$11$$[$i$$264$$].sortProperty || null != $columns$$11$$[$i$$264$$].headerRenderer) {
          return!1;
        }
      }
      return!0;
    }, $_isTableHeaderColumnsRendered$:function() {
      return!0 == this.$_renderedTableHeaderColumns$;
    }, $_isTableNavigationMode$:function() {
      return this.$_tableNavMode$;
    }, $_isTableRefreshNeeded$:function($key$$90$$, $value$$233$$) {
      var $currentOptions$$ = this.$_cachedOptions$, $refresh$$1$$ = !1;
      "contextMenu" == $key$$90$$ && $value$$233$$ == "#" + this.$_getTableDomUtils$().$getTableId$() + "_contextmenu" ? $refresh$$1$$ = !1 : "selection" == $key$$90$$ || "currentRow" == $key$$90$$ || $oj$$14$$.$Object$.$compareValues$($value$$233$$, $currentOptions$$[$key$$90$$]) || ($refresh$$1$$ = !0);
      this.$_cachedOptions$ = $$$$14$$.extend(!0, {}, this.options);
      return $refresh$$1$$;
    }, $_isTableSortable$:function() {
      var $columns$$12$$ = this.$_getColumnDefs$(), $i$$265$$, $columnsCount$$6$$ = $columns$$12$$.length;
      for ($i$$265$$ = 0;$i$$265$$ < $columnsCount$$6$$;$i$$265$$++) {
        if (null != $columns$$12$$[$i$$265$$].sortable && $columns$$12$$[$i$$265$$].sortable != this.$_OPTION_NONE$) {
          return!0;
        }
      }
      return!1;
    }, $_isTouchDevice$:function() {
      if (void 0 == this.$_isTouch$) {
        var $agentName$$1$$ = navigator.userAgent.toLowerCase();
        -1 != $agentName$$1$$.indexOf("mobile") || -1 != $agentName$$1$$.indexOf("android") ? this.$_isTouch$ = !0 : this.$_isTouch$ = !1;
      }
      return this.$_isTouch$;
    }, $_refreshAll$:function($resultObject$$1$$, $startIndex$$35$$, $resetScrollTop$$, $resetScrollLeft$$) {
      if (this.$_isColumnMetadataUpdated$() || !this.$_isTableHeaderColumnsRendered$() && !this.$_isTableHeaderless$()) {
        if (this.$_clearCachedMetadata$(), this.$_refreshTableHeader$(), null != this.$_sortColumn$) {
          var $i$$266$$, $column$$14$$, $foundColumn$$ = !1, $columns$$13$$ = this.$_getColumnDefs$();
          if (null != $columns$$13$$) {
            var $columnsCount$$7$$ = $columns$$13$$.length;
            for ($i$$266$$ = 0;$i$$266$$ < $columnsCount$$7$$;$i$$266$$++) {
              if ($column$$14$$ = $columns$$13$$[$i$$266$$], $oj$$14$$.$Object$.$compareValues$($column$$14$$, this.$_sortColumn$)) {
                $foundColumn$$ = !0;
                break;
              }
            }
            $foundColumn$$ || this.$_getData$().sort(null);
          }
        }
      }
      this.$_refreshTableFooter$();
      this.$_refreshTableBody$($resultObject$$1$$, $startIndex$$35$$, $resetScrollTop$$, $resetScrollLeft$$);
    }, $_refreshSortTableHeaderColumn$:function($columnIdx$$25$$, $ascending$$3$$) {
      this.$_clearSortedHeaderColumn$($columnIdx$$25$$);
      var $tableHeaderColumn$$7$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($columnIdx$$25$$), $headerColumnAsc_headerColumnAscLink$$1_headerColumnDsc_headerColumnDscLink$$1_sorted$$11$$ = $tableHeaderColumn$$7$$.data("sorted");
      $ascending$$3$$ && $headerColumnAsc_headerColumnAscLink$$1_headerColumnDsc_headerColumnDscLink$$1_sorted$$11$$ != this.$_COLUMN_SORT_ORDER$.$_ASCENDING$ ? ($tableHeaderColumn$$7$$.data("sorted", this.$_COLUMN_SORT_ORDER$.$_ASCENDING$), $headerColumnAsc_headerColumnAscLink$$1_headerColumnDsc_headerColumnDscLink$$1_sorted$$11$$ = $tableHeaderColumn$$7$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_LINK_CLASS$), $headerColumnAsc_headerColumnAscLink$$1_headerColumnDsc_headerColumnDscLink$$1_sorted$$11$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_ENABLED$), 
      $headerColumnAsc_headerColumnAscLink$$1_headerColumnDsc_headerColumnDscLink$$1_sorted$$11$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$), $headerColumnAsc_headerColumnAscLink$$1_headerColumnDsc_headerColumnDscLink$$1_sorted$$11$$ = $tableHeaderColumn$$7$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_CLASS$), $headerColumnAsc_headerColumnAscLink$$1_headerColumnDsc_headerColumnDscLink$$1_sorted$$11$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$), 
      $headerColumnAsc_headerColumnAscLink$$1_headerColumnDsc_headerColumnDscLink$$1_sorted$$11$$ = $tableHeaderColumn$$7$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DSC_CLASS$), $headerColumnAsc_headerColumnAscLink$$1_headerColumnDsc_headerColumnDscLink$$1_sorted$$11$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$), this.$_hideTableHeaderColumnSortLink$($columnIdx$$25$$, !$ascending$$3$$)) : $ascending$$3$$ || $headerColumnAsc_headerColumnAscLink$$1_headerColumnDsc_headerColumnDscLink$$1_sorted$$11$$ == 
      this.$_COLUMN_SORT_ORDER$.$_DESCENDING$ || ($tableHeaderColumn$$7$$.data("sorted", this.$_COLUMN_SORT_ORDER$.$_DESCENDING$), $headerColumnAsc_headerColumnAscLink$$1_headerColumnDsc_headerColumnDscLink$$1_sorted$$11$$ = $tableHeaderColumn$$7$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DSC_LINK_CLASS$), $headerColumnAsc_headerColumnAscLink$$1_headerColumnDsc_headerColumnDscLink$$1_sorted$$11$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_ENABLED$), $headerColumnAsc_headerColumnAscLink$$1_headerColumnDsc_headerColumnDscLink$$1_sorted$$11$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$), 
      $headerColumnAsc_headerColumnAscLink$$1_headerColumnDsc_headerColumnDscLink$$1_sorted$$11$$ = $tableHeaderColumn$$7$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DSC_CLASS$), $headerColumnAsc_headerColumnAscLink$$1_headerColumnDsc_headerColumnDscLink$$1_sorted$$11$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$), $headerColumnAsc_headerColumnAscLink$$1_headerColumnDsc_headerColumnDscLink$$1_sorted$$11$$ = $tableHeaderColumn$$7$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_CLASS$), 
      $headerColumnAsc_headerColumnAscLink$$1_headerColumnDsc_headerColumnDscLink$$1_sorted$$11$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$));
    }, $_refreshTableBody$:function($resultObject$$2_rows$$13$$, $startIndex$$36$$, $resetScrollTop$$1$$, $resetScrollLeft$$1$$) {
      var $tableBody$$3$$ = this.$_getTableDomUtils$().$getTableBody$();
      if (null != $tableBody$$3$$) {
        $resultObject$$2_rows$$13$$ = this.$_getRowIdxRowArray$($resultObject$$2_rows$$13$$, $startIndex$$36$$);
        var $i$$267_tableBodyRows$$8$$;
        if (0 == $startIndex$$36$$) {
          $oj$$14$$.Components.$subtreeDetached$($tableBody$$3$$[0]), $tableBody$$3$$.empty();
        } else {
          if ($i$$267_tableBodyRows$$8$$ = $tableBody$$3$$.children(), null != $i$$267_tableBodyRows$$8$$ && 0 < $i$$267_tableBodyRows$$8$$.length) {
            for ($i$$267_tableBodyRows$$8$$ = $i$$267_tableBodyRows$$8$$.length - 1;$i$$267_tableBodyRows$$8$$ >= $startIndex$$36$$;$i$$267_tableBodyRows$$8$$--) {
              this.$_getTableDomUtils$().$removeTableBodyRow$($i$$267_tableBodyRows$$8$$);
            }
          }
        }
        this.$_getTableDomUtils$().$clearCachedDomRowData$();
        this.$_hideNoDataMessage$();
        $i$$267_tableBodyRows$$8$$ = $tableBody$$3$$.children();
        if (0 != $resultObject$$2_rows$$13$$.length || null != $i$$267_tableBodyRows$$8$$ && 0 != $i$$267_tableBodyRows$$8$$.length) {
          var $tableBodyDocFrag$$1$$ = $$$$14$$(document.createDocumentFragment()), $row$$54$$, $rowIdx$$17$$, $tableBodyRow$$6$$, $rowsCount$$3$$ = $resultObject$$2_rows$$13$$.length;
          for ($i$$267_tableBodyRows$$8$$ = 0;$i$$267_tableBodyRows$$8$$ < $rowsCount$$3$$;$i$$267_tableBodyRows$$8$$++) {
            $row$$54$$ = $resultObject$$2_rows$$13$$[$i$$267_tableBodyRows$$8$$].row, $rowIdx$$17$$ = $resultObject$$2_rows$$13$$[$i$$267_tableBodyRows$$8$$].$rowIdx$, null != $row$$54$$ && ($tableBodyRow$$6$$ = this.$_getTableDomUtils$().$createTableBodyRow$($rowIdx$$17$$, $row$$54$$[this.$_CONST_KEY$]), this.$_getTableDomUtils$().$styleTableBodyRow$($tableBodyRow$$6$$, !0), this.$_getTableDomUtils$().$insertTableBodyRow$($rowIdx$$17$$, $tableBodyRow$$6$$, $row$$54$$, $tableBodyDocFrag$$1$$), this.$_refreshTableBodyRow$($rowIdx$$17$$, 
            $row$$54$$, $tableBodyRow$$6$$, $tableBodyDocFrag$$1$$, $startIndex$$36$$, !0));
          }
          $tableBody$$3$$.append($tableBodyDocFrag$$1$$);
          this.$_hasRowOrCellRenderer$() && (this.$_getTableDomUtils$().$refreshTableDimensions$(null, null, $resetScrollTop$$1$$, $resetScrollLeft$$1$$), $oj$$14$$.Components.$subtreeAttached$($tableBody$$3$$[0]));
        } else {
          this.$_showNoDataMessage$();
        }
      }
    }, $_refreshTableBodyRow$:function($moveTableBodyCell_rowIdx$$18$$, $row$$55_swapTableBodyCell$$, $tableBodyRow$$7$$, $docFrag$$1_i$$268$$, $docFragStartIdx$$1_tableBodyCells$$, $context$$74_currentRow$$2_isNew$$) {
      var $rowContent_rowRenderer$$1_tableBodyCell$$2$$ = this.$_getRowRenderer$();
      this.$_getColumnDefs$();
      var $tableBody$$4_tableBodyCellsCount$$ = this.$_getTableDomUtils$().$getTableBody$();
      (isNaN($moveTableBodyCell_rowIdx$$18$$) || 0 > $moveTableBodyCell_rowIdx$$18$$) && $oj$$14$$.$Logger$.error("Error: Invalid rowIdx value: " + $moveTableBodyCell_rowIdx$$18$$);
      var $rowHashCode$$ = this.$_getTableDomUtils$().$hashCode$($row$$55_swapTableBodyCell$$[this.$_CONST_KEY$]);
      if (null == $tableBodyRow$$7$$) {
        if ($tableBodyRow$$7$$ = this.$_getTableDomUtils$().$getTableBodyRow$($moveTableBodyCell_rowIdx$$18$$)) {
          $tableBodyRow$$7$$.empty(), $context$$74_currentRow$$2_isNew$$ = !0, this.$_getTableDomUtils$().$createTableBodyCellAccSelect$($moveTableBodyCell_rowIdx$$18$$, $row$$55_swapTableBodyCell$$[this.$_CONST_KEY$], $rowHashCode$$, $tableBodyRow$$7$$, $context$$74_currentRow$$2_isNew$$);
        } else {
          return;
        }
      }
      this.$_hideNoDataMessage$();
      $context$$74_currentRow$$2_isNew$$ = ($context$$74_currentRow$$2_isNew$$ = this.$_getCurrentRow$()) || {};
      $context$$74_currentRow$$2_isNew$$ = {rowContext:$oj$$14$$.$TableRendererUtils$.$getRendererContextObject$(this, $tableBodyRow$$7$$[0], {row:$row$$55_swapTableBodyCell$$, isCurrentRow:$context$$74_currentRow$$2_isNew$$.rowIndex == $moveTableBodyCell_rowIdx$$18$$}), row:$row$$55_swapTableBodyCell$$[this.$_CONST_DATA$]};
      if ($rowContent_rowRenderer$$1_tableBodyCell$$2$$) {
        $rowContent_rowRenderer$$1_tableBodyCell$$2$$ = $rowContent_rowRenderer$$1_tableBodyCell$$2$$($context$$74_currentRow$$2_isNew$$);
        null != $rowContent_rowRenderer$$1_tableBodyCell$$2$$ ? $tableBodyRow$$7$$.append($rowContent_rowRenderer$$1_tableBodyCell$$2$$) : (null == $docFrag$$1_i$$268$$ ? $tableBodyRow$$7$$ = $$$$14$$($tableBody$$4_tableBodyCellsCount$$.children()[$moveTableBodyCell_rowIdx$$18$$]) : ($docFragStartIdx$$1_tableBodyCells$$ = null == $docFragStartIdx$$1_tableBodyCells$$ ? 0 : $docFragStartIdx$$1_tableBodyCells$$, $tableBodyRow$$7$$ = $$$$14$$($docFrag$$1_i$$268$$.children()[$moveTableBodyCell_rowIdx$$18$$ - 
        $docFragStartIdx$$1_tableBodyCells$$])), this.$_getTableDomUtils$().$clearCachedDomRowData$(), this.$_getTableDomUtils$().$setTableBodyRowAttributes$($row$$55_swapTableBodyCell$$, $tableBodyRow$$7$$), this.$_getTableDomUtils$().$styleTableBodyRow$($tableBodyRow$$7$$, !1));
        this.$_getTableDomUtils$().$createTableBodyCellAccSelect$($moveTableBodyCell_rowIdx$$18$$, $row$$55_swapTableBodyCell$$[this.$_CONST_KEY$], $rowHashCode$$, $tableBodyRow$$7$$, !1);
        $docFragStartIdx$$1_tableBodyCells$$ = $tableBodyRow$$7$$.children($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_TD$);
        $tableBody$$4_tableBodyCellsCount$$ = $docFragStartIdx$$1_tableBodyCells$$.length;
        for ($docFrag$$1_i$$268$$ = 1;$docFrag$$1_i$$268$$ < $tableBody$$4_tableBodyCellsCount$$;$docFrag$$1_i$$268$$++) {
          $rowContent_rowRenderer$$1_tableBodyCell$$2$$ = $$$$14$$($docFragStartIdx$$1_tableBodyCells$$[$docFrag$$1_i$$268$$]), this.$_getTableDomUtils$().$setTableBodyCellAttributes$($moveTableBodyCell_rowIdx$$18$$, $row$$55_swapTableBodyCell$$[this.$_CONST_KEY$], $rowHashCode$$, $docFrag$$1_i$$268$$ - 1, $rowContent_rowRenderer$$1_tableBodyCell$$2$$), this.$_getTableDomUtils$().$styleTableBodyCell$($docFrag$$1_i$$268$$ - 1, $rowContent_rowRenderer$$1_tableBodyCell$$2$$, !1);
        }
        if (null != this.$_columnsDestMap$) {
          for ($docFrag$$1_i$$268$$ = 0;$docFrag$$1_i$$268$$ < this.$_columnsDestMap$.length - 1;$docFrag$$1_i$$268$$++) {
            this.$_columnsDestMap$[$docFrag$$1_i$$268$$] > $docFrag$$1_i$$268$$ && ($moveTableBodyCell_rowIdx$$18$$ = $$$$14$$($docFragStartIdx$$1_tableBodyCells$$[this.$_columnsDestMap$[$docFrag$$1_i$$268$$] + 1]), $row$$55_swapTableBodyCell$$ = $$$$14$$($docFragStartIdx$$1_tableBodyCells$$[$docFrag$$1_i$$268$$ + 1]), $moveTableBodyCell_rowIdx$$18$$[0].parentNode.insertBefore($moveTableBodyCell_rowIdx$$18$$[0], $row$$55_swapTableBodyCell$$[0]), $docFragStartIdx$$1_tableBodyCells$$ = $tableBodyRow$$7$$.children($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_TD$))
            ;
          }
        }
      } else {
        $oj$$14$$.$TableRendererUtils$.$tableBodyRowDefaultRenderer$(this, $moveTableBodyCell_rowIdx$$18$$, $row$$55_swapTableBodyCell$$, $context$$74_currentRow$$2_isNew$$);
      }
    }, $_refreshTableFooter$:function() {
      var $columns$$15_i$$269$$ = this.$_getColumnDefs$(), $tableFooter$$1_tableFooterRow$$1$$ = this.$_getTableDomUtils$().$getTableFooter$();
      if (!$tableFooter$$1_tableFooterRow$$1$$) {
        if (this.$_isTableFooterless$()) {
          return;
        }
        $tableFooter$$1_tableFooterRow$$1$$ = this.$_getTableDomUtils$().$createTableFooter$();
        this.$_getTableDomUtils$().$styleTableFooter$($tableFooter$$1_tableFooterRow$$1$$);
      }
      $tableFooter$$1_tableFooterRow$$1$$ = this.$_getTableDomUtils$().$getTableFooterRow$();
      $tableFooter$$1_tableFooterRow$$1$$.empty();
      if ($columns$$15_i$$269$$ && 0 < $columns$$15_i$$269$$.length) {
        this.$_getTableDomUtils$().$createTableFooterAccSelect$($tableFooter$$1_tableFooterRow$$1$$);
        for (var $footerCellContent_footerRenderer$$1$$, $footerCell$$, $columnsCount$$8$$ = $columns$$15_i$$269$$.length, $columns$$15_i$$269$$ = 0;$columns$$15_i$$269$$ < $columnsCount$$8$$;$columns$$15_i$$269$$++) {
          $footerCellContent_footerRenderer$$1$$ = this.$_getColumnRenderer$($columns$$15_i$$269$$, "footer"), $footerCell$$ = this.$_getTableDomUtils$().$createTableFooterCell$(), this.$_getTableDomUtils$().$styleTableFooterCell$($columns$$15_i$$269$$, $footerCell$$), this.$_getTableDomUtils$().$insertTableFooterCell$($columns$$15_i$$269$$, $footerCell$$), $footerCellContent_footerRenderer$$1$$ && ($footerCellContent_footerRenderer$$1$$ = $footerCellContent_footerRenderer$$1$$({footerContext:$oj$$14$$.$TableRendererUtils$.$getRendererContextObject$(this, 
          $footerCell$$[0], {}), columnIndex:$columns$$15_i$$269$$}), null != $footerCellContent_footerRenderer$$1$$ ? ($footerCell$$.empty(), $footerCell$$.append($footerCellContent_footerRenderer$$1$$)) : ($footerCell$$ = $$$$14$$($tableFooter$$1_tableFooterRow$$1$$.children(":not(." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_HIDDEN_CONTENT_ACC_CLASS$ + ")")[$columns$$15_i$$269$$]), this.$_getTableDomUtils$().$styleTableFooterCell$($columns$$15_i$$269$$, $footerCell$$)));
        }
      }
    }, $_refreshTableHeader$:function() {
      var $self$$120$$ = this, $columns$$16$$ = this.$_getColumnDefs$(), $tableHeader$$1_tableHeaderRow$$1$$ = this.$_getTableDomUtils$().$getTableHeader$();
      if (!$tableHeader$$1_tableHeaderRow$$1$$) {
        if (this.$_isTableHeaderless$()) {
          return;
        }
        $tableHeader$$1_tableHeaderRow$$1$$ = this.$_getTableDomUtils$().$createTableHeader$();
        this.$_getTableDomUtils$().$styleTableHeader$($tableHeader$$1_tableHeaderRow$$1$$);
      }
      $tableHeader$$1_tableHeaderRow$$1$$ = this.$_getTableDomUtils$().$getTableHeaderRow$();
      this.$_unregisterChildStateListeners$($tableHeader$$1_tableHeaderRow$$1$$);
      $tableHeader$$1_tableHeaderRow$$1$$.empty();
      if ($columns$$16$$ && 0 < $columns$$16$$.length) {
        var $i$$270_tableHeaderAccSelectRowColumn$$ = this.$_getTableDomUtils$().$createTableHeaderAccSelectRowColumn$();
        $tableHeader$$1_tableHeaderRow$$1$$.append($i$$270_tableHeaderAccSelectRowColumn$$);
        for (var $column$$16_headerColumnContent$$, $headerRenderer$$, $headerColumn$$3$$, $context$$75_headerContext$$5$$, $columnsCount$$9$$ = $columns$$16$$.length, $i$$270_tableHeaderAccSelectRowColumn$$ = 0;$i$$270_tableHeaderAccSelectRowColumn$$ < $columnsCount$$9$$;$i$$270_tableHeaderAccSelectRowColumn$$++) {
          $column$$16_headerColumnContent$$ = $columns$$16$$[$i$$270_tableHeaderAccSelectRowColumn$$], $headerRenderer$$ = this.$_getColumnRenderer$($i$$270_tableHeaderAccSelectRowColumn$$, "header"), $headerColumn$$3$$ = this.$_getTableDomUtils$().$createTableHeaderColumn$($i$$270_tableHeaderAccSelectRowColumn$$), $headerRenderer$$ && ($context$$75_headerContext$$5$$ = $oj$$14$$.$TableRendererUtils$.$getRendererContextObject$(this, $headerColumn$$3$$[0], {}), $context$$75_headerContext$$5$$ = {headerContext:$context$$75_headerContext$$5$$, 
          columnIndex:$i$$270_tableHeaderAccSelectRowColumn$$, data:$column$$16_headerColumnContent$$.headerText}, $column$$16_headerColumnContent$$.sortable == $oj$$14$$.$TableDomUtils$.$_OPTION_ENABLED$ ? $context$$75_headerContext$$5$$.columnHeaderSortableIconRenderer = function $$context$$75_headerContext$$5$$$columnHeaderSortableIconRenderer$($options$$251$$, $delegateRenderer$$) {
            $oj$$14$$.$TableRendererUtils$.$columnHeaderSortableIconRenderer$($self$$120$$, this, $delegateRenderer$$);
          } : $context$$75_headerContext$$5$$.columnHeaderDefaultRenderer = function $$context$$75_headerContext$$5$$$columnHeaderDefaultRenderer$($options$$252$$, $delegateRenderer$$1$$) {
            $oj$$14$$.$TableRendererUtils$.$columnHeaderDefaultRenderer$($self$$120$$, this, $delegateRenderer$$1$$);
          }, $column$$16_headerColumnContent$$ = $headerRenderer$$($context$$75_headerContext$$5$$), null != $column$$16_headerColumnContent$$ ? ($headerColumn$$3$$.empty(), $headerColumn$$3$$.append($column$$16_headerColumnContent$$)) : ($headerColumn$$3$$ = $$$$14$$($tableHeader$$1_tableHeaderRow$$1$$.children(":not(." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ACC_SELECT_ROW_CLASS$ + ")")[$i$$270_tableHeaderAccSelectRowColumn$$]), this.$_getTableDomUtils$().$setTableHeaderColumnAttributes$($i$$270_tableHeaderAccSelectRowColumn$$, 
          $headerColumn$$3$$), this.$_getTableDomUtils$().$styleTableHeaderColumn$($i$$270_tableHeaderAccSelectRowColumn$$, $headerColumn$$3$$, !1))), this.$_getTableDomUtils$().$createTableHeaderColumnAccSelect$($i$$270_tableHeaderAccSelectRowColumn$$, this.$_getColumnSelectionMode$());
        }
        this.$_renderedTableHeaderColumns$ = !0;
      }
    }, $_refreshTableStatusMessage$:function() {
      var $tableStatusMessage$$ = this.$_getTableDomUtils$().$getTableStatusMessage$();
      null != $tableStatusMessage$$ && $tableStatusMessage$$.remove();
      this.$_getTableDomUtils$().$createTableStatusMessage$();
    }, $_registerCustomEvents$:function() {
      var $jqEventSpecial$$ = $$$$14$$.event.special;
      $jqEventSpecial$$.ojtablebeforecurrentrow = {handle:function $$jqEventSpecial$$$ojtablebeforecurrentrow$handle$($event$$336$$, $JSCompiler_OptimizeArgumentsArray_p1$$) {
        return $event$$336$$.handleObj.handler.apply(this, [$event$$336$$, $JSCompiler_OptimizeArgumentsArray_p1$$]);
      }};
      $jqEventSpecial$$.ojtablesort = {handle:function $$jqEventSpecial$$$ojtablesort$handle$($event$$337$$, $JSCompiler_OptimizeArgumentsArray_p2$$) {
        return $event$$337$$.handleObj.handler.apply(this, [$event$$337$$, $JSCompiler_OptimizeArgumentsArray_p2$$]);
      }};
    }, $_registerDataSourceEventListeners$:function() {
      var $data$$120$$ = this.$_getData$();
      if (null != $data$$120$$) {
        this.$_unregisterDataSourceEventListeners$();
        this.$_dataSourceEventHandlers$ = [];
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$14$$.$TableDataSource$.$EventType$.REQUEST, eventHandler:this.$_handleDataFetchStart$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$14$$.$TableDataSource$.$EventType$.SYNC, eventHandler:this.$_handleDataFetchEnd$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$14$$.$TableDataSource$.$EventType$.SORT, eventHandler:this.$_handleDataSort$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$14$$.$TableDataSource$.$EventType$.ADD, eventHandler:this.$_handleDataRowAdd$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$14$$.$TableDataSource$.$EventType$.REMOVE, eventHandler:this.$_handleDataRowRemove$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$14$$.$TableDataSource$.$EventType$.CHANGE, eventHandler:this.$_handleDataRowChange$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$14$$.$TableDataSource$.$EventType$.REFRESH, eventHandler:this.$_handleDataRefresh$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$14$$.$TableDataSource$.$EventType$.RESET, eventHandler:this.$_handleDataReset$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$14$$.$TableDataSource$.$EventType$.ERROR, eventHandler:this.$_handleDataError$.bind(this)});
        var $i$$271$$, $ev$$1$$, $dataSourceEventHandlersCount$$ = this.$_dataSourceEventHandlers$.length;
        for ($i$$271$$ = 0;$i$$271$$ < $dataSourceEventHandlersCount$$;$i$$271$$++) {
          ($ev$$1$$ = $data$$120$$.on(this.$_dataSourceEventHandlers$[$i$$271$$].eventType, this.$_dataSourceEventHandlers$[$i$$271$$].eventHandler)) && (this.$_dataSourceEventHandlers$[$i$$271$$].eventHandler = $ev$$1$$);
        }
      }
    }, $_registerDomEventListeners$:function() {
      null != this.$_getTableDomUtils$().$getScroller$() && this.$_getTableDomUtils$().$getScroller$().scroll(function($event$$338$$) {
        this.$_handleScrollerScrollLeft$(this.$_getTableDomUtils$().$getScrollLeft$($event$$338$$.target));
      }.bind(this));
    }, $_registerDomScroller$:function() {
      var $self$$121$$ = this;
      this.$_domScrollerMaxCountFunc$ = function $this$$_domScrollerMaxCountFunc$$($result$$39$$) {
        null != $result$$39$$ && $result$$39$$.maxCountLimit && $self$$121$$.$_handleScrollerMaxRowCount$();
      };
      this.$_domScroller$ = new $oj$$14$$.$DomScroller$(this.$_getTableDomUtils$().$getScroller$(), this.$_getData$(), {fetchSize:this.options.scrollPolicyOptions.fetchSize, maxCount:this.options.scrollPolicyOptions.maxCount, success:this.$_domScrollerMaxCountFunc$});
    }, $_registerResizeListener$:function() {
      var $element$$161$$ = this.$_getTableDomUtils$().$getTableContainer$();
      if (!this.$_resizeListener$) {
        var $self$$122$$ = this;
        this.$_resizeListener$ = function $this$$_resizeListener$$() {
          var $tableContainerHeight$$ = $self$$122$$.$_getTableDomUtils$().$getTableContainer$().outerHeight(), $tableContainerWidth$$ = $self$$122$$.$_getTableDomUtils$().$getTableContainer$().outerWidth();
          $self$$122$$.$_getTableDomUtils$().$refreshTableDimensions$($tableContainerWidth$$, $tableContainerHeight$$);
        };
      }
      this.$_isResizeListenerAdded$ || ($oj$$14$$.$DomUtils$.$addResizeListener$($element$$161$$[0], this.$_resizeListener$, 50), this.$_isResizeListenerAdded$ = !0);
    }, $_removeKeyboardKey$:function($keyCode$$9$$) {
      var $keyboardKeys$$2$$ = this.$_getKeyboardKeys$(), $i$$272$$, $keyboardKeysCount$$2$$ = $keyboardKeys$$2$$.length;
      for ($i$$272$$ = 0;$i$$272$$ < $keyboardKeysCount$$2$$;$i$$272$$++) {
        $keyboardKeys$$2$$[$i$$272$$] == $keyCode$$9$$ && $keyboardKeys$$2$$.splice($i$$272$$, 1);
      }
    }, $_scrollColumnIntoViewport$:function($columnIdx$$26_scrollbarWidth$$) {
      var $isRTL$$3_scrollLeftDiff$$ = "rtl" === this.$_GetReadingDirection$(), $tableBody$$5$$ = this.$_getTableDomUtils$().$getTableBody$(), $headerColumnRect_tableHeaderColumn$$8$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($columnIdx$$26_scrollbarWidth$$);
      if ($headerColumnRect_tableHeaderColumn$$8$$) {
        $columnIdx$$26_scrollbarWidth$$ = this.$_getTableDomUtils$().$getScrollbarWidth$();
        var $headerColumnRect_tableHeaderColumn$$8$$ = $headerColumnRect_tableHeaderColumn$$8$$.get(0).getBoundingClientRect(), $tableBodyRect$$ = $tableBody$$5$$.get(0).getBoundingClientRect(), $scrolledLeft$$ = !1;
        $isRTL$$3_scrollLeftDiff$$ ? ($headerColumnRect_tableHeaderColumn$$8$$.left < $tableBodyRect$$.left + $columnIdx$$26_scrollbarWidth$$ && ($isRTL$$3_scrollLeftDiff$$ = $tableBodyRect$$.left - $headerColumnRect_tableHeaderColumn$$8$$.left + $columnIdx$$26_scrollbarWidth$$, this.$_getTableDomUtils$().$_isIE$() || ($isRTL$$3_scrollLeftDiff$$ *= -1), $tableBody$$5$$.scrollLeft($tableBody$$5$$.scrollLeft() + $isRTL$$3_scrollLeftDiff$$), $scrolledLeft$$ = !0), $headerColumnRect_tableHeaderColumn$$8$$.right > 
        $tableBodyRect$$.right && !$scrolledLeft$$ && ($isRTL$$3_scrollLeftDiff$$ = $headerColumnRect_tableHeaderColumn$$8$$.right - $tableBodyRect$$.right, this.$_getTableDomUtils$().$_isIE$() || ($isRTL$$3_scrollLeftDiff$$ *= -1), $tableBody$$5$$.scrollLeft($tableBody$$5$$.scrollLeft() - $isRTL$$3_scrollLeftDiff$$))) : ($headerColumnRect_tableHeaderColumn$$8$$.left < $tableBodyRect$$.left && ($isRTL$$3_scrollLeftDiff$$ = $tableBodyRect$$.left - $headerColumnRect_tableHeaderColumn$$8$$.left, $tableBody$$5$$.scrollLeft($tableBody$$5$$.scrollLeft() - 
        $isRTL$$3_scrollLeftDiff$$), $scrolledLeft$$ = !0), $headerColumnRect_tableHeaderColumn$$8$$.right > $tableBodyRect$$.right - $columnIdx$$26_scrollbarWidth$$ && !$scrolledLeft$$ && ($isRTL$$3_scrollLeftDiff$$ = $headerColumnRect_tableHeaderColumn$$8$$.right - $tableBodyRect$$.right + $columnIdx$$26_scrollbarWidth$$, $tableBody$$5$$.scrollLeft($tableBody$$5$$.scrollLeft() + $isRTL$$3_scrollLeftDiff$$)));
      }
    }, $_scrollRowIntoViewport$:function($rowIdx$$19_scrollTopDiff_scrollbarHeight$$) {
      var $rowRect_tableBodyRow$$8$$ = this.$_getTableDomUtils$().$getTableBodyRow$($rowIdx$$19_scrollTopDiff_scrollbarHeight$$);
      $rowIdx$$19_scrollTopDiff_scrollbarHeight$$ = this.$_getTableDomUtils$().$getScrollbarHeight$();
      var $rowRect_tableBodyRow$$8$$ = $rowRect_tableBodyRow$$8$$.get(0).getBoundingClientRect(), $scrollingElement$$ = this.$_getTableDomUtils$().$getScroller$(), $scrollingElementRect$$ = $scrollingElement$$.get(0).getBoundingClientRect(), $scrolledDown$$ = !1;
      $rowRect_tableBodyRow$$8$$.bottom > $scrollingElementRect$$.bottom - $rowIdx$$19_scrollTopDiff_scrollbarHeight$$ && ($rowIdx$$19_scrollTopDiff_scrollbarHeight$$ = $rowRect_tableBodyRow$$8$$.bottom - $scrollingElementRect$$.bottom + $rowIdx$$19_scrollTopDiff_scrollbarHeight$$, $scrollingElement$$.scrollTop($scrollingElement$$.scrollTop() + $rowIdx$$19_scrollTopDiff_scrollbarHeight$$), $scrolledDown$$ = !0);
      $rowRect_tableBodyRow$$8$$.top < $scrollingElementRect$$.top && !$scrolledDown$$ && ($rowIdx$$19_scrollTopDiff_scrollbarHeight$$ = $scrollingElementRect$$.top - $rowRect_tableBodyRow$$8$$.top, $scrollingElement$$.scrollTop($scrollingElement$$.scrollTop() - $rowIdx$$19_scrollTopDiff_scrollbarHeight$$));
    }, $_setCurrentRow$:function($currentRow$$3_errSummary$$13$$, $event$$339$$, $currentFocusedRowIdx_optionChange$$) {
      var $existingCurrentRow$$ = this.$_currentRow$, $existingCurrentRowIndex_existingCurrentRowKey_tableBodyRow$$9_updateCurrentRow$$1_updateEditable$$, $existingCurrentRowIdx$$;
      $existingCurrentRowIndex_existingCurrentRowKey_tableBodyRow$$9_updateCurrentRow$$1_updateEditable$$ = !0;
      if (null == $currentRow$$3_errSummary$$13$$) {
        if (null != $existingCurrentRow$$) {
          try {
            $existingCurrentRowIndex_existingCurrentRowKey_tableBodyRow$$9_updateCurrentRow$$1_updateEditable$$ = this._trigger("beforeCurrentRow", $event$$339$$, {currentRow:null, previousCurrentRow:this.$_currentRow$});
          } catch ($err$$15$$) {
            $currentRow$$3_errSummary$$13$$ = this.$_LOGGER_MSG$.$_ERR_PRECURRENTROW_ERROR_SUMMARY$;
            var $currentFocusElement$$1_errDetail$$6_rowIdx$$20$$ = $oj$$14$$.$Translations$.$applyParameters$(this.$_LOGGER_MSG$.$_ERR_PRECURRENTROW_ERROR_DETAIL$, {error:$err$$15$$.toString()});
            $oj$$14$$.$Logger$.info($currentRow$$3_errSummary$$13$$ + "\n" + $currentFocusElement$$1_errDetail$$6_rowIdx$$20$$);
            return!1;
          }
          if (!$existingCurrentRowIndex_existingCurrentRowKey_tableBodyRow$$9_updateCurrentRow$$1_updateEditable$$) {
            return!1;
          }
          this.$_currentRow$ = null;
          $existingCurrentRowIndex_existingCurrentRowKey_tableBodyRow$$9_updateCurrentRow$$1_updateEditable$$ = $existingCurrentRow$$.rowIndex;
          $existingCurrentRowIndex_existingCurrentRowKey_tableBodyRow$$9_updateCurrentRow$$1_updateEditable$$ = this.$_getRowKeyForDataSourceRowIndex$($existingCurrentRowIndex_existingCurrentRowKey_tableBodyRow$$9_updateCurrentRow$$1_updateEditable$$);
          $existingCurrentRowIdx$$ = this.$_getRowIdxForRowKey$($existingCurrentRowIndex_existingCurrentRowKey_tableBodyRow$$9_updateCurrentRow$$1_updateEditable$$);
          $existingCurrentRowIndex_existingCurrentRowKey_tableBodyRow$$9_updateCurrentRow$$1_updateEditable$$ = this.$_setTableEditable$(!1, !1, 0, !0, $event$$339$$);
          if (!1 === $existingCurrentRowIndex_existingCurrentRowKey_tableBodyRow$$9_updateCurrentRow$$1_updateEditable$$) {
            this.$_currentRow$ = $existingCurrentRow$$;
            var $currentFocusElement$$1_errDetail$$6_rowIdx$$20$$ = document.activeElement, $columnIdx$$27$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($currentFocusElement$$1_errDetail$$6_rowIdx$$20$$), $self$$123$$ = this;
            this.$_queueTask$(function() {
              var $focusRowIdx$$ = $existingCurrentRowIdx$$, $focusColumnIdx$$ = $columnIdx$$27$$;
              setTimeout(function() {
                $self$$123$$.$_setCellFocus$($focusRowIdx$$, $focusColumnIdx$$);
              }, 0);
            });
            return!1;
          }
          this.option("currentRow", null, {_context:{$writeback$:!0, originalEvent:$event$$339$$, $internalSet$:!0}});
          null == $event$$339$$ && this.$_setRowFocus$(-1, !0, !1, null, $event$$339$$);
          $existingCurrentRowIndex_existingCurrentRowKey_tableBodyRow$$9_updateCurrentRow$$1_updateEditable$$ = this.$_getTableDomUtils$().$getTableBodyRow$($existingCurrentRowIdx$$);
          null != $existingCurrentRowIndex_existingCurrentRowKey_tableBodyRow$$9_updateCurrentRow$$1_updateEditable$$ && $existingCurrentRowIndex_existingCurrentRowKey_tableBodyRow$$9_updateCurrentRow$$1_updateEditable$$.removeClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CURRENT_ROW_CLASS$);
        }
        return!0;
      }
      var $currentRowChanged_data$$121$$ = this.$_getData$(), $rowIndex$$14$$ = $currentRow$$3_errSummary$$13$$.rowIndex, $rowKey$$19$$ = $currentRow$$3_errSummary$$13$$.rowKey;
      null == $rowKey$$19$$ && ($rowKey$$19$$ = this.$_getRowKeyForDataSourceRowIndex$($rowIndex$$14$$));
      null == $rowIndex$$14$$ && ($rowIndex$$14$$ = this.$_getDataSourceRowIndexForRowKey$($rowKey$$19$$));
      $currentFocusElement$$1_errDetail$$6_rowIdx$$20$$ = this.$_getRowIdxForRowKey$($rowKey$$19$$);
      $currentRow$$3_errSummary$$13$$ = {rowIndex:$rowIndex$$14$$, rowKey:$rowKey$$19$$};
      if (-1 != $currentFocusElement$$1_errDetail$$6_rowIdx$$20$$ && (!$currentRowChanged_data$$121$$ || 0 == $currentRowChanged_data$$121$$.totalSize() || -1 > $currentFocusElement$$1_errDetail$$6_rowIdx$$20$$ || null === $currentFocusElement$$1_errDetail$$6_rowIdx$$20$$ || null === $rowKey$$19$$)) {
        $currentRow$$3_errSummary$$13$$ = this.$_LOGGER_MSG$.$_ERR_CURRENTROW_UNAVAILABLE_INDEX_SUMMARY$;
        $currentFocusElement$$1_errDetail$$6_rowIdx$$20$$ = $oj$$14$$.$Translations$.$applyParameters$(this.$_LOGGER_MSG$.$_ERR_CURRENTROW_UNAVAILABLE_INDEX_DETAIL$, {rowIdx:$currentFocusElement$$1_errDetail$$6_rowIdx$$20$$});
        if ($currentFocusedRowIdx_optionChange$$) {
          throw Error($currentRow$$3_errSummary$$13$$ + "\n" + $currentFocusElement$$1_errDetail$$6_rowIdx$$20$$);
        }
        $oj$$14$$.$Logger$.info($currentRow$$3_errSummary$$13$$ + "\n" + $currentFocusElement$$1_errDetail$$6_rowIdx$$20$$);
        return!1;
      }
      $currentFocusedRowIdx_optionChange$$ = this.$_getFocusedRowIdx$();
      if ($currentRowChanged_data$$121$$ = !$oj$$14$$.$Object$.$compareValues$(this.$_currentRow$, $currentRow$$3_errSummary$$13$$)) {
        try {
          $existingCurrentRowIndex_existingCurrentRowKey_tableBodyRow$$9_updateCurrentRow$$1_updateEditable$$ = this._trigger("beforeCurrentRow", $event$$339$$, {currentRow:{rowIndex:$rowIndex$$14$$, rowKey:$rowKey$$19$$}, previousCurrentRow:this.$_currentRow$});
        } catch ($err$$16$$) {
          return $currentRow$$3_errSummary$$13$$ = this.$_LOGGER_MSG$.$_ERR_PRECURRENTROW_ERROR_SUMMARY$, $currentFocusElement$$1_errDetail$$6_rowIdx$$20$$ = $oj$$14$$.$Translations$.$applyParameters$(this.$_LOGGER_MSG$.$_ERR_PRECURRENTROW_ERROR_DETAIL$, {error:$err$$16$$.toString()}), $oj$$14$$.$Logger$.info($currentRow$$3_errSummary$$13$$ + "\n" + $currentFocusElement$$1_errDetail$$6_rowIdx$$20$$), !1;
        }
        if (!$existingCurrentRowIndex_existingCurrentRowKey_tableBodyRow$$9_updateCurrentRow$$1_updateEditable$$) {
          return!1;
        }
        this.$_currentRow$ = {rowIndex:$rowIndex$$14$$, rowKey:$rowKey$$19$$};
        null != $existingCurrentRow$$ && ($existingCurrentRowIndex_existingCurrentRowKey_tableBodyRow$$9_updateCurrentRow$$1_updateEditable$$ = $existingCurrentRow$$.rowIndex, $existingCurrentRowIndex_existingCurrentRowKey_tableBodyRow$$9_updateCurrentRow$$1_updateEditable$$ = this.$_getRowKeyForDataSourceRowIndex$($existingCurrentRowIndex_existingCurrentRowKey_tableBodyRow$$9_updateCurrentRow$$1_updateEditable$$), $existingCurrentRowIdx$$ = this.$_getRowIdxForRowKey$($existingCurrentRowIndex_existingCurrentRowKey_tableBodyRow$$9_updateCurrentRow$$1_updateEditable$$));
        $existingCurrentRowIndex_existingCurrentRowKey_tableBodyRow$$9_updateCurrentRow$$1_updateEditable$$ = this.$_setTableEditable$(!1, !1, 0, !0, $event$$339$$);
        if (!1 === $existingCurrentRowIndex_existingCurrentRowKey_tableBodyRow$$9_updateCurrentRow$$1_updateEditable$$) {
          return this.$_currentRow$ = $existingCurrentRow$$, $currentFocusElement$$1_errDetail$$6_rowIdx$$20$$ = document.activeElement, $columnIdx$$27$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($currentFocusElement$$1_errDetail$$6_rowIdx$$20$$), $self$$123$$ = this, this.$_queueTask$(function() {
            var $focusRowIdx$$1$$ = $existingCurrentRowIdx$$, $focusColumnIdx$$1$$ = $columnIdx$$27$$;
            setTimeout(function() {
              $self$$123$$.$_setCellFocus$($focusRowIdx$$1$$, $focusColumnIdx$$1$$);
            }, 0);
          }), !1;
        }
        this.option("currentRow", this.$_currentRow$, {_context:{$writeback$:!0, originalEvent:$event$$339$$, $internalSet$:!0}});
        $existingCurrentRowIndex_existingCurrentRowKey_tableBodyRow$$9_updateCurrentRow$$1_updateEditable$$ = this.$_getTableDomUtils$().$getTableBodyRow$($currentFocusElement$$1_errDetail$$6_rowIdx$$20$$);
        null != $existingCurrentRowIndex_existingCurrentRowKey_tableBodyRow$$9_updateCurrentRow$$1_updateEditable$$ && $existingCurrentRowIndex_existingCurrentRowKey_tableBodyRow$$9_updateCurrentRow$$1_updateEditable$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CURRENT_ROW_CLASS$);
        null != $existingCurrentRow$$ && ($existingCurrentRowIndex_existingCurrentRowKey_tableBodyRow$$9_updateCurrentRow$$1_updateEditable$$ = this.$_getTableDomUtils$().$getTableBodyRow$($existingCurrentRowIdx$$), null != $existingCurrentRowIndex_existingCurrentRowKey_tableBodyRow$$9_updateCurrentRow$$1_updateEditable$$ && $existingCurrentRowIndex_existingCurrentRowKey_tableBodyRow$$9_updateCurrentRow$$1_updateEditable$$.removeClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CURRENT_ROW_CLASS$));
      }
      ($currentRowChanged_data$$121$$ || $currentFocusedRowIdx_optionChange$$ != $currentRow$$3_errSummary$$13$$.rowIndex) && null == $event$$339$$ && this.$_setRowFocus$($currentFocusElement$$1_errDetail$$6_rowIdx$$20$$, !0, !1, null, $event$$339$$);
      return!0;
    }, $_setDataWaitingState$:function() {
      this.$_showStatusMessage$();
      this.$_hideNoDataMessage$();
      this.$_dataFetching$ = !0;
    }, $_setCellFocus$:function($rowIdx$$21$$, $columnIdx$$28$$) {
      var $focused$$4$$ = !1;
      this.$_getTableDomUtils$().$getTableBodyCell$($rowIdx$$21$$, $columnIdx$$28$$).find("*").each(function() {
        !$focused$$4$$ && $$$$14$$(this).is(":focusable") && (this.focus(), $focused$$4$$ = $$$$14$$(this).is(":focus"));
      });
      return $focused$$4$$;
    }, $_setCellInRowFocus$:function($rowIdx$$22$$, $columnIdx$$29_i$$273_tableBodyCells$$1$$, $forwardSearch$$) {
      if (!this.$_setCellFocus$($rowIdx$$22$$, $columnIdx$$29_i$$273_tableBodyCells$$1$$) && ($columnIdx$$29_i$$273_tableBodyCells$$1$$ = this.$_getTableDomUtils$().$getTableBodyCells$($rowIdx$$22$$))) {
        var $tableBodyCellIndex$$, $tableBodyCellsCount$$1$$ = $columnIdx$$29_i$$273_tableBodyCells$$1$$.length;
        for ($columnIdx$$29_i$$273_tableBodyCells$$1$$ = 0;$columnIdx$$29_i$$273_tableBodyCells$$1$$ < $tableBodyCellsCount$$1$$ && ($tableBodyCellIndex$$ = $columnIdx$$29_i$$273_tableBodyCells$$1$$, $forwardSearch$$ || ($tableBodyCellIndex$$ = $tableBodyCellsCount$$1$$ - $columnIdx$$29_i$$273_tableBodyCells$$1$$ - 1), !this.$_setCellFocus$($rowIdx$$22$$, $tableBodyCellIndex$$));$columnIdx$$29_i$$273_tableBodyCells$$1$$++) {
        }
      }
    }, $_setEditableRowIdx$:function($rowIdx$$23$$) {
      this.$_editableRowKey$ = this.$_getRowKeyForRowIdx$($rowIdx$$23$$);
      this.$_editableRowIdx$ = $rowIdx$$23$$;
    }, $_setHeaderColumnFocus$:function($columnIdx$$30$$, $focused$$5$$, $clearSelectedRows$$, $event$$340$$) {
      var $element$$162$$ = null;
      null != $event$$340$$ && ($element$$162$$ = $event$$340$$.currentTarget);
      if ($focused$$5$$) {
        var $focusedHeaderColumnIdx$$5$$ = this.$_getFocusedHeaderColumnIdx$();
        null != $focusedHeaderColumnIdx$$5$$ && $focusedHeaderColumnIdx$$5$$ != $columnIdx$$30$$ && this.$_setHeaderColumnFocus$($focusedHeaderColumnIdx$$5$$, !1, !1, $event$$340$$);
        this.$_clearFocusedRow$(!0);
        $clearSelectedRows$$ && this.$_clearSelectedRows$();
        this.$_scrollColumnIntoViewport$($columnIdx$$30$$);
        this.$_activeColumnIndex$ = $columnIdx$$30$$;
      }
      this.$_setHeaderColumnState$($columnIdx$$30$$, {$focused$:$focused$$5$$}, $element$$162$$);
    }, $_setHeaderColumnSelection$:function($accSelectionColumn_columnIdx$$31$$, $selected$$17_selection$$14$$, $element$$163$$, $event$$341$$, $updateSelection$$) {
      if (this.$_getColumnSelectionMode$() == this.$_OPTION_SELECTION_MODES$.$_SINGLE$ || this.$_getColumnSelectionMode$() == this.$_OPTION_SELECTION_MODES$.$_MULTIPLE$) {
        (isNaN($accSelectionColumn_columnIdx$$31$$) || 0 > $accSelectionColumn_columnIdx$$31$$) && $oj$$14$$.$Logger$.error("Error: Invalid column selection value: " + $accSelectionColumn_columnIdx$$31$$), this.$_getColumnSelectionMode$() == this.$_OPTION_SELECTION_MODES$.$_SINGLE$ && $selected$$17_selection$$14$$ && this.$_clearSelectedHeaderColumns$(), this.$_setHeaderColumnState$($accSelectionColumn_columnIdx$$31$$, {selected:$selected$$17_selection$$14$$}, $element$$163$$, $event$$341$$), this.$_setLastHeaderColumnSelection$($accSelectionColumn_columnIdx$$31$$, 
        $selected$$17_selection$$14$$), $accSelectionColumn_columnIdx$$31$$ = this.$_getTableDomUtils$().$getTableHeaderColumnAccSelect$($accSelectionColumn_columnIdx$$31$$), $$$$14$$($accSelectionColumn_columnIdx$$31$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_CHECKBOX_ACC_SELECT_COLUMN_CLASS$)[0]).prop("checked", $selected$$17_selection$$14$$), $updateSelection$$ && ($selected$$17_selection$$14$$ = this.$_getSelection$(), this.option("selection", $selected$$17_selection$$14$$, {_context:{$writeback$:!0, 
        $internalSet$:!0}}));
      }
    }, $_setHeaderColumnState$:function($columnIdx$$32$$, $state$$1$$) {
      var $headerColumn$$4$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($columnIdx$$32$$);
      if ($headerColumn$$4$$) {
        var $focused$$6$$ = $state$$1$$.$focused$, $selected$$18$$ = $state$$1$$.selected;
        null != $selected$$18$$ && $headerColumn$$4$$.hasClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$) != $selected$$18$$ && ($selected$$18$$ ? $headerColumn$$4$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$) : $headerColumn$$4$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$));
        null != $focused$$6$$ && ($focused$$6$$ ? ($headerColumn$$4$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_FOCUS$), this.$_showTableHeaderColumnSortLink$($columnIdx$$32$$)) : ($headerColumn$$4$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_FOCUS$), this.$_hideTableHeaderColumnSortLink$($columnIdx$$32$$, !0), this.$_hideTableHeaderColumnSortLink$($columnIdx$$32$$, !1)));
        this.$_updateHeaderColumnStateCellsClass$($columnIdx$$32$$);
      }
    }, $_setLastHeaderColumnSelection$:function($columnIdx$$33$$, $selected$$19$$) {
      this.$_lastSelectedColumnIdxArray$ || (this.$_lastSelectedColumnIdxArray$ = []);
      var $i$$274$$, $lastSelectedColumnIdxArrayCount$$ = this.$_lastSelectedColumnIdxArray$.length;
      for ($i$$274$$ = 0;$i$$274$$ < $lastSelectedColumnIdxArrayCount$$;$i$$274$$++) {
        if (this.$_lastSelectedColumnIdxArray$[$i$$274$$] == $columnIdx$$33$$) {
          this.$_lastSelectedColumnIdxArray$.splice($i$$274$$, 1);
          break;
        }
      }
      $selected$$19$$ && this.$_lastSelectedColumnIdxArray$.push($columnIdx$$33$$);
    }, $_setLastRowSelection$:function($rowIdx$$24$$, $selected$$20$$) {
      this.$_lastSelectedRowIdxArray$ || (this.$_lastSelectedRowIdxArray$ = []);
      var $i$$275$$, $lastSelectedRowIdxArrayCount$$ = this.$_lastSelectedRowIdxArray$.length;
      for ($i$$275$$ = 0;$i$$275$$ < $lastSelectedRowIdxArrayCount$$;$i$$275$$++) {
        if (this.$_lastSelectedRowIdxArray$[$i$$275$$] == $rowIdx$$24$$) {
          this.$_lastSelectedRowIdxArray$.splice($i$$275$$, 1);
          break;
        }
      }
      $selected$$20$$ && this.$_lastSelectedRowIdxArray$.push($rowIdx$$24$$);
    }, $_setNextRowEditable$:function($columnIdx$$34$$, $event$$343$$) {
      var $rowCount$$15_tableBodyRows$$9$$ = this.$_getTableDomUtils$().$getTableBodyRows$(), $rowCount$$15_tableBodyRows$$9$$ = null != $rowCount$$15_tableBodyRows$$9$$ ? $rowCount$$15_tableBodyRows$$9$$.length : 0, $editableRowIdx$$1$$ = this.$_getEditableRowIdx$();
      0 <= $editableRowIdx$$1$$ && $editableRowIdx$$1$$ < $rowCount$$15_tableBodyRows$$9$$ - 1 ? (this.$_setTableEditable$(!1, !1, $columnIdx$$34$$, !0, $event$$343$$), this.$_setCurrentRow$({rowIndex:$editableRowIdx$$1$$ + 1}, $event$$343$$, !1), this.$_setTableEditable$(!0, !1, $columnIdx$$34$$, !0, $event$$343$$)) : $editableRowIdx$$1$$ === $rowCount$$15_tableBodyRows$$9$$ - 1 && (this.$_setTableEditable$(!1, !1, $columnIdx$$34$$, !0, $event$$343$$), this.$_getTableDomUtils$().$getTable$().focus(), 
      this.$_setTableNavigationMode$(!1));
    }, $_setPreviousRowEditable$:function($columnIdx$$35$$, $event$$344$$) {
      var $editableRowIdx$$2$$ = this.$_getEditableRowIdx$();
      1 <= $editableRowIdx$$2$$ ? (this.$_setTableEditable$(!1, !1, $columnIdx$$35$$, !1, $event$$344$$), this.$_setCurrentRow$({rowIndex:$editableRowIdx$$2$$ - 1}, $event$$344$$, !1), this.$_setTableEditable$(!0, !1, $columnIdx$$35$$, !1, $event$$344$$)) : 0 === $editableRowIdx$$2$$ && (this.$_setTableEditable$(!1, !1, $columnIdx$$35$$, !1, $event$$344$$), this.$_getTableDomUtils$().$getTable$().focus(), this.$_setTableNavigationMode$(!1));
    }, $_setRowFocus$:function($rowIdx$$25$$, $focused$$7$$, $rowKey$$20_updateCurrentRow$$2$$, $element$$165$$, $event$$345_updateRowFocus$$) {
      if (-1 == $rowIdx$$25$$) {
        var $focusedRowIdx$$8$$ = this.$_getFocusedRowIdx$();
        null != $focusedRowIdx$$8$$ && this.$_setRowFocus$($focusedRowIdx$$8$$, !1, $rowKey$$20_updateCurrentRow$$2$$, null, null);
        return $rowKey$$20_updateCurrentRow$$2$$ && ($event$$345_updateRowFocus$$ = this.$_setCurrentRow$(null, $event$$345_updateRowFocus$$, !1), !$event$$345_updateRowFocus$$) ? !1 : !0;
      }
      var $tableBodyRow$$10$$ = this.$_getTableDomUtils$().$getTableBodyRow$($rowIdx$$25$$);
      if (!$tableBodyRow$$10$$) {
        return!1;
      }
      if ($focused$$7$$) {
        $focusedRowIdx$$8$$ = this.$_getFocusedRowIdx$();
        null != $focusedRowIdx$$8$$ && $focusedRowIdx$$8$$ != $rowIdx$$25$$ && this.$_setRowFocus$($focusedRowIdx$$8$$, !1, $rowKey$$20_updateCurrentRow$$2$$, $element$$165$$, null);
        if ($rowKey$$20_updateCurrentRow$$2$$ && ($rowKey$$20_updateCurrentRow$$2$$ = this.$_getRowKeyForRowIdx$($rowIdx$$25$$), $event$$345_updateRowFocus$$ = this.$_setCurrentRow$({rowKey:$rowKey$$20_updateCurrentRow$$2$$}, $event$$345_updateRowFocus$$, !1), !$event$$345_updateRowFocus$$)) {
          return!1;
        }
        $tableBodyRow$$10$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_FOCUS$);
        this.$_scrollRowIntoViewport$($rowIdx$$25$$);
        this.$_updateRowStateCellsClass$($rowIdx$$25$$, {$focused$:!0, hover:!1});
        this.$_clearFocusedHeaderColumn$();
        this.$_clearSelectedHeaderColumns$();
        this.$_setTableNavigationMode$(!0);
      } else {
        $tableBodyRow$$10$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_FOCUS$);
      }
      this.$_updateRowStateCellsClass$($rowIdx$$25$$, {$focused$:$focused$$7$$});
      return!0;
    }, $_setRowSelection$:function($accSelectionCell_rowIdx$$26$$, $selected$$21_selection$$15$$, $element$$166_tableBodyRow$$11$$, $event$$346_selectionChanged$$, $updateSelection$$1$$) {
      if (this.$_getRowSelectionMode$() == this.$_OPTION_SELECTION_MODES$.$_SINGLE$ || this.$_getRowSelectionMode$() == this.$_OPTION_SELECTION_MODES$.$_MULTIPLE$) {
        if ((isNaN($accSelectionCell_rowIdx$$26$$) || 0 > $accSelectionCell_rowIdx$$26$$) && $oj$$14$$.$Logger$.error("Error: Invalid row selection value: " + $accSelectionCell_rowIdx$$26$$), this.$_getRowSelectionMode$() == this.$_OPTION_SELECTION_MODES$.$_SINGLE$ && $selected$$21_selection$$15$$ && this.$_clearSelectedRows$(), $element$$166_tableBodyRow$$11$$ = this.$_getTableDomUtils$().$getTableBodyRow$($accSelectionCell_rowIdx$$26$$), null != $element$$166_tableBodyRow$$11$$) {
          $event$$346_selectionChanged$$ = !1;
          if ($element$$166_tableBodyRow$$11$$.hasClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$) != $selected$$21_selection$$15$$) {
            $selected$$21_selection$$15$$ ? $element$$166_tableBodyRow$$11$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$) : $element$$166_tableBodyRow$$11$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$);
            $event$$346_selectionChanged$$ = !0;
            var $dragOption$$ = this.options.dnd.drag;
            $dragOption$$ && ("rows" === $dragOption$$ || $dragOption$$.rows) && $element$$166_tableBodyRow$$11$$.prop("draggable", $selected$$21_selection$$15$$);
          }
          $event$$346_selectionChanged$$ && ($selected$$21_selection$$15$$ ? this.$_updateRowStateCellsClass$($accSelectionCell_rowIdx$$26$$, {hover:!1, $focused$:!1, selected:!0}) : this.$_updateRowStateCellsClass$($accSelectionCell_rowIdx$$26$$, {selected:!1}));
          this.$_setLastRowSelection$($accSelectionCell_rowIdx$$26$$, $selected$$21_selection$$15$$);
          $accSelectionCell_rowIdx$$26$$ = this.$_getTableDomUtils$().$getTableBodyCellAccSelect$($element$$166_tableBodyRow$$11$$);
          $$$$14$$($accSelectionCell_rowIdx$$26$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_CHECKBOX_ACC_SELECT_ROW_CLASS$)[0]).prop("checked", $selected$$21_selection$$15$$);
          $updateSelection$$1$$ && ($selected$$21_selection$$15$$ = this.$_getSelection$(), this.option("selection", $selected$$21_selection$$15$$, {_context:{$writeback$:!0, $internalSet$:!0}}));
        }
      }
    }, $_setSelection$:function($selection$$16$$) {
      if (null == $selection$$16$$) {
        this.$_clearSelectedRows$(), this.$_clearSelectedHeaderColumns$();
      } else {
        var $i$$276$$, $endRowIndex$$1_endRowKey$$2_j$$44$$, $endRowIdx_rangeObj$$1$$, $endColumnIdx_startRowIdx_startRowKey$$2$$, $startRowIndex$$1$$, $startColumnIdx$$, $selectionCount$$ = $selection$$16$$.length;
        for ($i$$276$$ = 0;$i$$276$$ < $selectionCount$$;$i$$276$$++) {
          $endRowIdx_rangeObj$$1$$ = $selection$$16$$[$i$$276$$];
          if (null == $endRowIdx_rangeObj$$1$$.startKey && null == $endRowIdx_rangeObj$$1$$[this.$_CONST_STARTINDEX$] || null == $endRowIdx_rangeObj$$1$$.endKey && null == $endRowIdx_rangeObj$$1$$[this.$_CONST_ENDINDEX$]) {
            return $oj$$14$$.$Logger$.error("Error: Invalid range object in selection. Both start and end objects must be specified"), null;
          }
          $endColumnIdx_startRowIdx_startRowKey$$2$$ = $startColumnIdx$$ = $endRowIndex$$1_endRowKey$$2_j$$44$$ = $startRowIndex$$1$$ = null;
          null != $endRowIdx_rangeObj$$1$$.startKey && null != $endRowIdx_rangeObj$$1$$.startKey[this.$_CONST_ROW$] && ($startRowIndex$$1$$ = this.$_getDataSourceRowIndexForRowKey$($endRowIdx_rangeObj$$1$$.startKey[this.$_CONST_ROW$]));
          null != $endRowIdx_rangeObj$$1$$.endKey && null != $endRowIdx_rangeObj$$1$$.endKey[this.$_CONST_ROW$] && ($endRowIndex$$1_endRowKey$$2_j$$44$$ = this.$_getDataSourceRowIndexForRowKey$($endRowIdx_rangeObj$$1$$.endKey[this.$_CONST_ROW$]));
          null != $endRowIdx_rangeObj$$1$$.startKey && null != $endRowIdx_rangeObj$$1$$.startKey[this.$_CONST_COLUMN$] && ($startColumnIdx$$ = this.$_getColumnIdxForColumnKey$($endRowIdx_rangeObj$$1$$.startKey[this.$_CONST_COLUMN$]));
          null != $endRowIdx_rangeObj$$1$$.endKey && null != $endRowIdx_rangeObj$$1$$.endKey[this.$_CONST_COLUMN$] && ($endColumnIdx_startRowIdx_startRowKey$$2$$ = this.$_getColumnIdxForColumnKey$($endRowIdx_rangeObj$$1$$.endKey[this.$_CONST_COLUMN$]));
          null == $startRowIndex$$1$$ && null != $endRowIdx_rangeObj$$1$$[this.$_CONST_STARTINDEX$] && ($startRowIndex$$1$$ = $endRowIdx_rangeObj$$1$$[this.$_CONST_STARTINDEX$][this.$_CONST_ROW$]);
          null == $endRowIndex$$1_endRowKey$$2_j$$44$$ && null != $endRowIdx_rangeObj$$1$$[this.$_CONST_ENDINDEX$] && ($endRowIndex$$1_endRowKey$$2_j$$44$$ = $endRowIdx_rangeObj$$1$$[this.$_CONST_ENDINDEX$][this.$_CONST_ROW$]);
          null == $startColumnIdx$$ && null != $endRowIdx_rangeObj$$1$$[this.$_CONST_STARTINDEX$] && ($startColumnIdx$$ = $endRowIdx_rangeObj$$1$$[this.$_CONST_STARTINDEX$][this.$_CONST_COLUMN$]);
          null == $endColumnIdx_startRowIdx_startRowKey$$2$$ && null != $endRowIdx_rangeObj$$1$$[this.$_CONST_ENDINDEX$] && ($endColumnIdx_startRowIdx_startRowKey$$2$$ = $endRowIdx_rangeObj$$1$$[this.$_CONST_ENDINDEX$][this.$_CONST_COLUMN$]);
          if (null != $startRowIndex$$1$$ && null != $endRowIndex$$1_endRowKey$$2_j$$44$$ && null != $startColumnIdx$$ && null != $endColumnIdx_startRowIdx_startRowKey$$2$$) {
            return $oj$$14$$.$Logger$.error("Error: Invalid range object in selection - Can only support row or column selection. Not both"), null;
          }
          if (null != $startRowIndex$$1$$ && 0 <= $startRowIndex$$1$$ && null != $endRowIndex$$1_endRowKey$$2_j$$44$$ && 0 <= $endRowIndex$$1_endRowKey$$2_j$$44$$) {
            for ($endColumnIdx_startRowIdx_startRowKey$$2$$ = this.$_getRowKeyForDataSourceRowIndex$($startRowIndex$$1$$), $endRowIndex$$1_endRowKey$$2_j$$44$$ = this.$_getRowKeyForDataSourceRowIndex$($endRowIndex$$1_endRowKey$$2_j$$44$$), $endColumnIdx_startRowIdx_startRowKey$$2$$ = this.$_getRowIdxForRowKey$($endColumnIdx_startRowIdx_startRowKey$$2$$), $endRowIdx_rangeObj$$1$$ = this.$_getRowIdxForRowKey$($endRowIndex$$1_endRowKey$$2_j$$44$$), $endRowIndex$$1_endRowKey$$2_j$$44$$ = $endColumnIdx_startRowIdx_startRowKey$$2$$;$endRowIndex$$1_endRowKey$$2_j$$44$$ <= 
            $endRowIdx_rangeObj$$1$$;$endRowIndex$$1_endRowKey$$2_j$$44$$++) {
              try {
                this.$_setRowSelection$($endRowIndex$$1_endRowKey$$2_j$$44$$, !0, null, null, !1);
              } catch ($e$$91$$) {
                $oj$$14$$.$Logger$.error("Error: " + $e$$91$$);
              }
            }
          } else {
            if (null != $startColumnIdx$$ && null != $endColumnIdx_startRowIdx_startRowKey$$2$$) {
              for ($endRowIndex$$1_endRowKey$$2_j$$44$$ = $startColumnIdx$$;$endRowIndex$$1_endRowKey$$2_j$$44$$ <= $endColumnIdx_startRowIdx_startRowKey$$2$$;$endRowIndex$$1_endRowKey$$2_j$$44$$++) {
                try {
                  this.$_setHeaderColumnSelection$($endRowIndex$$1_endRowKey$$2_j$$44$$, !0, null, null, !1);
                } catch ($e$$92$$) {
                  $oj$$14$$.$Logger$.error("Error: " + $e$$92$$);
                }
              }
            } else {
              return $oj$$14$$.$Logger$.error("Error: Invalid range object in selection - \n start row: " + $startRowIndex$$1$$ + "\nend row: " + $endRowIndex$$1_endRowKey$$2_j$$44$$ + "\nstart column: " + $startColumnIdx$$ + "\nend column: " + $endColumnIdx_startRowIdx_startRowKey$$2$$), null;
            }
          }
        }
      }
    }, $_setTableEditable$:function($editable$$, $cancelled$$, $columnIdx$$36$$, $forwardSearch$$1$$, $event$$347$$) {
      var $currentRow$$4_editMode$$3$$ = this.options.editMode;
      if (null != $currentRow$$4_editMode$$3$$ && $currentRow$$4_editMode$$3$$ != this.$_OPTION_EDIT_MODE$.$_NONE$ && ($currentRow$$4_editMode$$3$$ = this.$_getCurrentRow$(), null != $currentRow$$4_editMode$$3$$)) {
        var $rowIdx$$27$$ = $currentRow$$4_editMode$$3$$.rowIndex, $updateEditMode$$;
        try {
          if ($editable$$ && !this.$_hasEditableRow$()) {
            var $tableBodyRow$$12$$ = this.$_getTableDomUtils$().$getTableBodyRow$($rowIdx$$27$$), $rowKey$$21$$ = this.$_getRowKeyForRowIdx$($rowIdx$$27$$), $rowContext$$1$$ = $oj$$14$$.$TableRendererUtils$.$getRendererContextObject$(this, $tableBodyRow$$12$$[0], {row:{key:$rowKey$$21$$, index:$rowIdx$$27$$}, isCurrentRow:!0});
            $updateEditMode$$ = this._trigger("beforeEdit", $event$$347$$, {rowContext:$rowContext$$1$$});
          } else {
            if (!$editable$$ && this.$_hasEditableRow$()) {
              $tableBodyRow$$12$$ = this.$_getTableDomUtils$().$getTableBodyRow$(this.$_getEditableRowIdx$()), $rowKey$$21$$ = this.$_getRowKeyForRowIdx$(this.$_getEditableRowIdx$()), $rowContext$$1$$ = $oj$$14$$.$TableRendererUtils$.$getRendererContextObject$(this, $tableBodyRow$$12$$[0], {row:{key:$rowKey$$21$$, index:this.$_getEditableRowIdx$()}, isCurrentRow:!0}), $updateEditMode$$ = this._trigger("beforeEditEnd", $event$$347$$, {rowContext:$rowContext$$1$$, cancelEdit:$cancelled$$});
            } else {
              return;
            }
          }
        } catch ($err$$17$$) {
          return!1;
        }
        if (!$updateEditMode$$) {
          return!1;
        }
        var $prevEditableRowIdx$$ = this.$_getEditableRowIdx$(), $self$$125$$ = this;
        $editable$$ ? (this.$_setEditableRowIdx$($rowIdx$$27$$), this.refreshRow($rowIdx$$27$$), this.$_queueTask$(function() {
          $self$$125$$.$_setCellInRowFocus$($rowIdx$$27$$, $columnIdx$$36$$, $forwardSearch$$1$$);
        })) : this.$_setEditableRowIdx$(null);
        null != $prevEditableRowIdx$$ && (this.refreshRow($prevEditableRowIdx$$), this.$_queueTask$(function() {
          var $prevEditableRow$$ = this.$_getTableDomUtils$().$getTableBodyRow$($prevEditableRowIdx$$);
          null != $prevEditableRow$$ && $prevEditableRow$$.removeClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_EDIT_CLASS$);
        }));
      }
    }, $_setTableNavigationMode$:function($value$$234$$) {
      this.$_tableNavMode$ = $value$$234$$;
    }, $_showInlineMessage$:function($inlineMessage$$1_summary$$22$$, $detail$$24_tableContainer$$3$$, $inlineMessageHeight$$1_severityLevel$$2_tableContainerWidth$$1$$) {
      this.$_getTableDomUtils$().$setTableInlineMessage$($inlineMessage$$1_summary$$22$$, $detail$$24_tableContainer$$3$$, $inlineMessageHeight$$1_severityLevel$$2_tableContainerWidth$$1$$);
      $inlineMessage$$1_summary$$22$$ = this.$_getTableDomUtils$().$getTableInlineMessage$();
      if ($inlineMessage$$1_summary$$22$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_DISPLAY$) == $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_NONE$) {
        $inlineMessage$$1_summary$$22$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_DISPLAY$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_BLOCK$);
        var $inlineMessagePaddingLeft_tableContainerBorderBottom$$1$$ = parseInt($inlineMessage$$1_summary$$22$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_PADDING_LEFT$), 10), $inlineMessagePaddingRight_tableContainerBorderLeft$$ = parseInt($inlineMessage$$1_summary$$22$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_PADDING_RIGHT$), 10);
        $detail$$24_tableContainer$$3$$ = this.$_getTableDomUtils$().$getTableContainer$();
        $inlineMessageHeight$$1_severityLevel$$2_tableContainerWidth$$1$$ == $oj$$14$$.$Message$.$SEVERITY_LEVEL$.WARNING && ($detail$$24_tableContainer$$3$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_WARNING$), $inlineMessage$$1_summary$$22$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_WARNING$));
        $inlineMessageHeight$$1_severityLevel$$2_tableContainerWidth$$1$$ = $detail$$24_tableContainer$$3$$.width();
        $inlineMessage$$1_summary$$22$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_WIDTH$, $inlineMessageHeight$$1_severityLevel$$2_tableContainerWidth$$1$$ - $inlineMessagePaddingLeft_tableContainerBorderBottom$$1$$ - $inlineMessagePaddingRight_tableContainerBorderLeft$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$);
        $inlineMessageHeight$$1_severityLevel$$2_tableContainerWidth$$1$$ = $inlineMessage$$1_summary$$22$$.outerHeight();
        var $inlineMessagePaddingLeft_tableContainerBorderBottom$$1$$ = parseInt($detail$$24_tableContainer$$3$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_BORDER_BOTTOM_WIDTH$), 10), $inlineMessagePaddingRight_tableContainerBorderLeft$$ = parseInt($detail$$24_tableContainer$$3$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_BORDER_LEFT_WIDTH$), 10), $tableContainerMarginBottom$$1$$ = parseInt($detail$$24_tableContainer$$3$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_MARGIN_BOTTOM$), 10), $tableContainerMarginBottom$$1$$ = 
        $tableContainerMarginBottom$$1$$ + $inlineMessagePaddingLeft_tableContainerBorderBottom$$1$$ + $inlineMessageHeight$$1_severityLevel$$2_tableContainerWidth$$1$$;
        $detail$$24_tableContainer$$3$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_MARGIN_BOTTOM$, $tableContainerMarginBottom$$1$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$);
        $inlineMessage$$1_summary$$22$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_BOTTOM$, -1 * ($tableContainerMarginBottom$$1$$ + $inlineMessagePaddingLeft_tableContainerBorderBottom$$1$$) + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$);
        $inlineMessage$$1_summary$$22$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_LEFT$, -1 * $inlineMessagePaddingRight_tableContainerBorderLeft$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$);
      }
    }, $_showNoDataMessage$:function() {
      null == this.$_getTableDomUtils$().$getTableNoDataRow$() && this.$_getTableDomUtils$().$createTableNoDataRow$(this.$_getColumnDefs$().length);
    }, $_showStatusMessage$:function() {
      this.$_getTableDomUtils$().$getTableStatusMessage$().css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_DISPLAY$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_INLINE$);
      this.$_getTableDomUtils$().$refreshTableStatusPosition$();
    }, $_showTableHeaderColumnSortLink$:function($columnIdx$$37_tableHeaderColumn$$9$$) {
      if (this.$_getColumnDefs$()[$columnIdx$$37_tableHeaderColumn$$9$$].sortable == this.$_OPTION_ENABLED$ && ($columnIdx$$37_tableHeaderColumn$$9$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($columnIdx$$37_tableHeaderColumn$$9$$)) && null == $columnIdx$$37_tableHeaderColumn$$9$$.data("sorted")) {
        var $headerColumnAscLink$$2$$ = $columnIdx$$37_tableHeaderColumn$$9$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_LINK_CLASS$);
        $headerColumnAscLink$$2$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_ENABLED$);
        $headerColumnAscLink$$2$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$);
        $columnIdx$$37_tableHeaderColumn$$9$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_CLASS$).removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$);
        $columnIdx$$37_tableHeaderColumn$$9$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DSC_CLASS$).addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$);
      }
    }, $_unregisterChildStateListeners$:function($parent$$11$$) {
      var $self$$126$$ = this;
      $parent$$11$$.find("*").each(function() {
        $self$$126$$.$_UnregisterChildNode$(this);
      });
      $self$$126$$ = null;
    }, $_unregisterDataSourceEventListeners$:function() {
      var $data$$122$$ = this.$_getData$();
      if (null != this.$_dataSourceEventHandlers$ && null != $data$$122$$) {
        var $i$$277$$, $dataSourceEventHandlersCount$$1$$ = this.$_dataSourceEventHandlers$.length;
        for ($i$$277$$ = 0;$i$$277$$ < $dataSourceEventHandlersCount$$1$$;$i$$277$$++) {
          $data$$122$$.off(this.$_dataSourceEventHandlers$[$i$$277$$].eventType, this.$_dataSourceEventHandlers$[$i$$277$$].eventHandler);
        }
      }
    }, $_unregisterResizeListener$:function() {
      var $element$$167$$ = this.$_getTableDomUtils$().$getTableContainer$();
      $oj$$14$$.$DomUtils$.$removeResizeListener$($element$$167$$[0], this.$_resizeListener$);
      this.$_isResizeListenerAdded$ = !1;
    }, $_updateHeaderColumnStateCellsClass$:function($columnIdx$$38$$) {
      var $selected$$22$$ = this.$_getHeaderColumnState$($columnIdx$$38$$).selected, $selectedRowIdxs$$3$$ = this.$_getSelectedRowIdxs$(), $i$$278_tableBodyRows$$10$$ = this.$_getTableDomUtils$().$getTableBodyRows$();
      if (null != $i$$278_tableBodyRows$$10$$ && 0 < $i$$278_tableBodyRows$$10$$.length) {
        for (var $j$$45$$, $tableBodyCell$$4$$, $rowSelected$$3$$, $selectedRowIdxsCount$$1$$, $tableBodyRowsCount$$4$$ = $i$$278_tableBodyRows$$10$$.length, $i$$278_tableBodyRows$$10$$ = 0;$i$$278_tableBodyRows$$10$$ < $tableBodyRowsCount$$4$$;$i$$278_tableBodyRows$$10$$++) {
          if ($tableBodyCell$$4$$ = this.$_getTableDomUtils$().$getTableBodyCell$($i$$278_tableBodyRows$$10$$, $columnIdx$$38$$), $selected$$22$$) {
            $$$$14$$($tableBodyCell$$4$$).addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$);
          } else {
            $rowSelected$$3$$ = !1;
            $selectedRowIdxsCount$$1$$ = $selectedRowIdxs$$3$$.length;
            for ($j$$45$$ = 0;$j$$45$$ < $selectedRowIdxsCount$$1$$;$j$$45$$++) {
              if ($i$$278_tableBodyRows$$10$$ == $selectedRowIdxs$$3$$[$j$$45$$]) {
                $rowSelected$$3$$ = !0;
                break;
              }
            }
            $rowSelected$$3$$ || $$$$14$$($tableBodyCell$$4$$).removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$);
          }
        }
      }
    }, $_updateRowStateCellsClass$:function($rowIdx$$28$$, $state$$3$$) {
      var $tableBodyCells$$2$$ = this.$_getTableDomUtils$().$getTableBodyCells$($rowIdx$$28$$), $focused$$8$$ = $state$$3$$.$focused$, $selected$$23$$ = $state$$3$$.selected, $hover$$ = $state$$3$$.hover;
      if ($tableBodyCells$$2$$) {
        if (null != $hover$$) {
          var $i$$279$$, $tableBodyCellsCount$$2$$ = $tableBodyCells$$2$$.length;
          for ($i$$279$$ = 0;$i$$279$$ < $tableBodyCellsCount$$2$$;$i$$279$$++) {
            $hover$$ ? $$$$14$$($tableBodyCells$$2$$[$i$$279$$]).addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_HOVER$) : $$$$14$$($tableBodyCells$$2$$[$i$$279$$]).removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_HOVER$);
          }
        }
        if (null != $focused$$8$$) {
          for ($tableBodyCellsCount$$2$$ = $tableBodyCells$$2$$.length, $i$$279$$ = 0;$i$$279$$ < $tableBodyCellsCount$$2$$;$i$$279$$++) {
            $focused$$8$$ ? $$$$14$$($tableBodyCells$$2$$[$i$$279$$]).addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_FOCUS$) : $$$$14$$($tableBodyCells$$2$$[$i$$279$$]).removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_FOCUS$);
          }
        }
        if (null != $selected$$23$$) {
          for ($tableBodyCellsCount$$2$$ = $tableBodyCells$$2$$.length, $i$$279$$ = 0;$i$$279$$ < $tableBodyCellsCount$$2$$;$i$$279$$++) {
            $selected$$23$$ ? $$$$14$$($tableBodyCells$$2$$[$i$$279$$]).addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$) : $$$$14$$($tableBodyCells$$2$$[$i$$279$$]).removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$);
          }
        }
      }
    }, $_setFinalTask$:function($task$$) {
      this.$_finalTask$ = $task$$ ? $task$$.bind(this) : void 0;
    }, $_queueTask$:function($task$$1$$) {
      var $self$$127$$ = this;
      this.$_pendingTasks$ || (this.$_taskCount$ = 0, this.$_pendingTasks$ = Promise.resolve());
      this.$_taskCount$++;
      return this.$_pendingTasks$ = this.$_pendingTasks$.then(function() {
        if (!$self$$127$$.$_componentDestroyed$) {
          return $task$$1$$.bind($self$$127$$)();
        }
      }).then(function($value$$235$$) {
        $self$$127$$.$_taskCount$--;
        0 != $self$$127$$.$_taskCount$ || $self$$127$$.$_componentDestroyed$ || ($self$$127$$.$_pendingTasks$ = void 0, $self$$127$$.$_finalTask$ && $self$$127$$.$_finalTask$(), $self$$127$$._trigger("ready"), $self$$127$$ = null);
        return $value$$235$$;
      }, function($error$$34$$) {
        $self$$127$$.$_taskCount$--;
        0 == $self$$127$$.$_taskCount$ && ($self$$127$$.$_pendingTasks$ = void 0, $oj$$14$$.$Logger$.error($error$$34$$), $self$$127$$ = null);
        return Promise.reject($error$$34$$);
      });
    }});
  })();
  $oj$$14$$.Components.$setDefaultOptions$({ojTable:{display:$oj$$14$$.Components.$createDynamicPropertyGetter$(function() {
    return($oj$$14$$.$ThemeUtils$.$parseJSONFromFontFamily$("oj-table-option-defaults") || {}).display;
  })}});
  $oj$$14$$.$TableDomUtils$ = function $$oj$$14$$$$TableDomUtils$$($component$$13$$) {
    this.$component$ = $component$$13$$;
    this.options = $component$$13$$.options;
    this.element = $component$$13$$.element;
    this.Init();
  };
  $goog$exportPath_$$("TableDomUtils", $oj$$14$$.$TableDomUtils$, $oj$$14$$);
  $oj$$14$$.$Object$.$createSubclass$($oj$$14$$.$TableDomUtils$, $oj$$14$$.$Object$, "oj.TableDomUtils");
  $oj$$14$$.$TableDomUtils$.prototype.Init = function $$oj$$14$$$$TableDomUtils$$$Init$() {
    $oj$$14$$.$TableDomUtils$.$superclass$.Init.call(this);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("TableDomUtils.prototype.Init", {Init:$oj$$14$$.$TableDomUtils$.prototype.Init});
  $oj$$14$$.$TableDomUtils$.prototype.$clearCachedDom$ = function $$oj$$14$$$$TableDomUtils$$$$clearCachedDom$$() {
    this.$clearCachedDomRowData$();
    this.$_tableDimensions$ = null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$clearCachedDomRowData$ = function $$oj$$14$$$$TableDomUtils$$$$clearCachedDomRowData$$() {
    this.$_cachedDomTableBodyRows$ = null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createContextMenu$ = function $$oj$$14$$$$TableDomUtils$$$$createContextMenu$$($handleContextMenuSelect$$) {
    var $menuContainer$$1$$ = null, $self$$128$$ = this, $enableNonContigousSelectionMenu_menuContainerId_nonContigousSelectionMenu$$ = this.$component$.$_isTouchDevice$() ? this.$component$.$_getRowSelectionMode$() == this.$component$.$_OPTION_SELECTION_MODES$.$_MULTIPLE$ : !1;
    if (null != this.options.contextMenu || null != this.$getTable$().attr("contextmenu")) {
      if ($enableNonContigousSelectionMenu_menuContainerId_nonContigousSelectionMenu$$ = this.$getContextMenuId$(), $menuContainer$$1$$ = $$$$14$$($enableNonContigousSelectionMenu_menuContainerId_nonContigousSelectionMenu$$), null != $menuContainer$$1$$ && 0 < $menuContainer$$1$$.length) {
        var $listItems$$1_sortMenu$$1$$ = $menuContainer$$1$$.find("[data-oj-command]");
        if (null != $listItems$$1_sortMenu$$1$$ && 0 < $listItems$$1_sortMenu$$1$$.length) {
          var $command$$7$$;
          $listItems$$1_sortMenu$$1$$.each(function() {
            0 === $$$$14$$(this).children($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_A$).length && ($command$$7$$ = $$$$14$$(this).attr("data-oj-command").split("-"), $$$$14$$(this).replaceWith($self$$128$$.$createContextMenuItem$($command$$7$$[$command$$7$$.length - 1])));
          });
          this.$_menuContainer$ = $menuContainer$$1$$;
          this.$component$.$_contextMenuId$ = $enableNonContigousSelectionMenu_menuContainerId_nonContigousSelectionMenu$$;
          $menuContainer$$1$$.data("oj-ojMenu") && $menuContainer$$1$$.ojMenu("refresh");
          $menuContainer$$1$$.on("ojselect", $handleContextMenuSelect$$);
        }
      }
    } else {
      if (this.$component$.$_isTableSortable$() || $enableNonContigousSelectionMenu_menuContainerId_nonContigousSelectionMenu$$) {
        $menuContainer$$1$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_UL$)), $menuContainer$$1$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_DISPLAY$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_NONE$), $menuContainer$$1$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_ID$, this.$getTableId$() + "_contextmenu"), this.$getTableContainer$().append($menuContainer$$1$$), this.$component$.$_isTableSortable$() && ($listItems$$1_sortMenu$$1$$ = this.$createContextMenuItem$("sort"), 
        $menuContainer$$1$$.append($listItems$$1_sortMenu$$1$$)), $enableNonContigousSelectionMenu_menuContainerId_nonContigousSelectionMenu$$ && ($enableNonContigousSelectionMenu_menuContainerId_nonContigousSelectionMenu$$ = this.$createContextMenuItem$("enableNonContiguousSelection"), $menuContainer$$1$$.append($enableNonContigousSelectionMenu_menuContainerId_nonContigousSelectionMenu$$)), $menuContainer$$1$$.ojMenu(), this.$_menuContainer$ = $menuContainer$$1$$, this.$component$.$_contextMenuId$ = 
        "#" + $menuContainer$$1$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_ID$), $menuContainer$$1$$.on("ojselect", $handleContextMenuSelect$$), this.$component$._setOption("contextMenu", "#" + $menuContainer$$1$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_ID$));
      }
    }
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createContextMenuItem$ = function $$oj$$14$$$$TableDomUtils$$$$createContextMenuItem$$($command$$8$$) {
    return "sort" === $command$$8$$ ? $$$$14$$(this.$createContextMenuListItem$($command$$8$$)).append($$$$14$$("\x3cul\x3e\x3c/ul\x3e").append($$$$14$$(this.$createContextMenuListItem$("sortAsc"))).append($$$$14$$(this.$createContextMenuListItem$("sortDsc")))) : "sortAsc" === $command$$8$$ ? $$$$14$$(this.$createContextMenuListItem$("sortAsc")) : "sortDsc" === $command$$8$$ ? $$$$14$$(this.$createContextMenuListItem$("sortDsc")) : "enableNonContiguousSelection" == $command$$8$$ || "disableNonContiguousSelection" == 
    $command$$8$$ ? $$$$14$$(this.$createContextMenuListItem$($command$$8$$)) : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createContextMenuListItem$ = function $$oj$$14$$$$TableDomUtils$$$$createContextMenuListItem$$($command$$9$$) {
    var $contextMenuListItem$$ = $$$$14$$(document.createElement("li"));
    $contextMenuListItem$$.attr("data-oj-command", "oj-table-" + $command$$9$$);
    $contextMenuListItem$$.append(this.$createContextMenuLabel$($command$$9$$));
    return $contextMenuListItem$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createContextMenuLabel$ = function $$oj$$14$$$$TableDomUtils$$$$createContextMenuLabel$$($command$$10$$) {
    var $contextMenuLabel$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_A$));
    $contextMenuLabel$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_HREF$, "#");
    var $commandString$$ = null;
    "sort" == $command$$10$$ ? $commandString$$ = this.$component$.$getTranslatedString$("labelSort") : "sortAsc" == $command$$10$$ ? $commandString$$ = this.$component$.$getTranslatedString$("labelSortAsc") : "sortDsc" == $command$$10$$ ? $commandString$$ = this.$component$.$getTranslatedString$("labelSortDsc") : "enableNonContiguousSelection" == $command$$10$$ ? $commandString$$ = this.$component$.$getTranslatedString$("labelEnableNonContiguousSelection") : "disableNonContiguousSelection" == $command$$10$$ && 
    ($commandString$$ = this.$component$.$getTranslatedString$("labelDisableNonContiguousSelection"));
    $contextMenuLabel$$.text($commandString$$);
    return $contextMenuLabel$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createInitialTable$ = function $$oj$$14$$$$TableDomUtils$$$$createInitialTable$$($isTableHeaderless$$, $isTableFooterless$$) {
    this.$getTable$();
    this.$createTableContainer$();
    this.$isDivScroller$() && this.$createTableDivScroller$();
    $isTableHeaderless$$ || this.$createTableHeader$();
    $isTableFooterless$$ || this.$createTableFooter$();
    this.$createTableBody$();
    this.$createTableStatusMessage$();
    this.$createTableInlineMessage$();
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableBody$ = function $$oj$$14$$$$TableDomUtils$$$$createTableBody$$() {
    var $table$$5$$ = this.$getTable$(), $tableBody$$6$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_TBODY$));
    $table$$5$$.append($tableBody$$6$$);
    this.$_cachedDomTableBody$ = $tableBody$$6$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableBodyCell$ = function $$oj$$14$$$$TableDomUtils$$$$createTableBodyCell$$() {
    return $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_TD$));
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableBodyCellAccSelect$ = function $$oj$$14$$$$TableDomUtils$$$$createTableBodyCellAccSelect$$($rowIdx$$30$$, $accSelectCheckbox$$2_accessibility_cellRowHeaderId_rowKey$$22$$, $isRowSelectionEnabled_rowHashCode$$1_rowKeyStrHashCode_selectRowTitle$$, $tableBodyRow$$13$$, $isNew$$1_rowHeaderColumnId$$) {
    var $accSelectionCell$$1_rowKeyStr$$ = null;
    $isNew$$1_rowHeaderColumnId$$ || ($accSelectionCell$$1_rowKeyStr$$ = this.$getTableBodyCellAccSelect$($tableBodyRow$$13$$));
    null == $accSelectionCell$$1_rowKeyStr$$ && ($accSelectionCell$$1_rowKeyStr$$ = null != $accSelectCheckbox$$2_accessibility_cellRowHeaderId_rowKey$$22$$ ? $accSelectCheckbox$$2_accessibility_cellRowHeaderId_rowKey$$22$$.toString() : $rowIdx$$30$$.toString(), $isRowSelectionEnabled_rowHashCode$$1_rowKeyStrHashCode_selectRowTitle$$ = null == $isRowSelectionEnabled_rowHashCode$$1_rowKeyStrHashCode_selectRowTitle$$ ? this.$hashCode$($accSelectionCell$$1_rowKeyStr$$) : $isRowSelectionEnabled_rowHashCode$$1_rowKeyStrHashCode_selectRowTitle$$, 
    $accSelectionCell$$1_rowKeyStr$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_TD$)), $accSelectionCell$$1_rowKeyStr$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_ACC_SELECT_CLASS$), $accSelectionCell$$1_rowKeyStr$$.css("padding", "0"), $accSelectionCell$$1_rowKeyStr$$.css("border", "0"), null != this.$getTableHeader$() && ($accSelectCheckbox$$2_accessibility_cellRowHeaderId_rowKey$$22$$ = this.options.accessibility, $isNew$$1_rowHeaderColumnId$$ = 
    null, $isNew$$1_rowHeaderColumnId$$ = null != $accSelectCheckbox$$2_accessibility_cellRowHeaderId_rowKey$$22$$ && null != $accSelectCheckbox$$2_accessibility_cellRowHeaderId_rowKey$$22$$.rowHeader ? $accSelectCheckbox$$2_accessibility_cellRowHeaderId_rowKey$$22$$.rowHeader : this.$component$.$_getColumnDefs$()[0].id, $accSelectCheckbox$$2_accessibility_cellRowHeaderId_rowKey$$22$$ = this.$getTableId$() + ":" + $isNew$$1_rowHeaderColumnId$$ + "_" + $isRowSelectionEnabled_rowHashCode$$1_rowKeyStrHashCode_selectRowTitle$$, 
    $accSelectionCell$$1_rowKeyStr$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_HEADERS$, this.$getTableId$() + ":" + $oj$$14$$.$TableDomUtils$.$_COLUMN_HEADER_ROW_SELECT_ID$ + " " + $accSelectCheckbox$$2_accessibility_cellRowHeaderId_rowKey$$22$$)), $accSelectCheckbox$$2_accessibility_cellRowHeaderId_rowKey$$22$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_INPUT$)), $accSelectCheckbox$$2_accessibility_cellRowHeaderId_rowKey$$22$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_ID$, 
    this.$getTableId$() + ":acc_sel_row_" + $isRowSelectionEnabled_rowHashCode$$1_rowKeyStrHashCode_selectRowTitle$$), $accSelectCheckbox$$2_accessibility_cellRowHeaderId_rowKey$$22$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_TYPE$, "checkbox"), $accSelectCheckbox$$2_accessibility_cellRowHeaderId_rowKey$$22$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_TABINDEX$, "-1"), $isRowSelectionEnabled_rowHashCode$$1_rowKeyStrHashCode_selectRowTitle$$ = null, $isRowSelectionEnabled_rowHashCode$$1_rowKeyStrHashCode_selectRowTitle$$ = 
    null != this.$component$.$_getRowSelectionMode$() ? !0 : !1, $isRowSelectionEnabled_rowHashCode$$1_rowKeyStrHashCode_selectRowTitle$$ = this.options.editMode == this.$component$.$_OPTION_EDIT_MODE$.$_ROW_EDIT$ ? $isRowSelectionEnabled_rowHashCode$$1_rowKeyStrHashCode_selectRowTitle$$ ? this.$component$.$getTranslatedString$(this.$component$.$_BUNDLE_KEY$.$_LABEL_SELECT_AND_EDIT_ROW$) : this.$component$.$getTranslatedString$(this.$component$.$_BUNDLE_KEY$.$_LABEL_EDIT_ROW$) : this.$component$.$getTranslatedString$(this.$component$.$_BUNDLE_KEY$.$_LABEL_SELECT_ROW$), 
    $accSelectCheckbox$$2_accessibility_cellRowHeaderId_rowKey$$22$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_TITLE$, $isRowSelectionEnabled_rowHashCode$$1_rowKeyStrHashCode_selectRowTitle$$), $accSelectCheckbox$$2_accessibility_cellRowHeaderId_rowKey$$22$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_CHECKBOX_ACC_SELECT_ROW_CLASS$), $accSelectCheckbox$$2_accessibility_cellRowHeaderId_rowKey$$22$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_HIDDEN_CONTENT_ACC_CLASS$), this.$component$.$_getEditableRowIdx$() == 
    $rowIdx$$30$$ ? $accSelectCheckbox$$2_accessibility_cellRowHeaderId_rowKey$$22$$.prop("checked", !0) : $accSelectCheckbox$$2_accessibility_cellRowHeaderId_rowKey$$22$$.prop("checked", !1), $accSelectionCell$$1_rowKeyStr$$.append($accSelectCheckbox$$2_accessibility_cellRowHeaderId_rowKey$$22$$), $tableBodyRow$$13$$.prepend($accSelectionCell$$1_rowKeyStr$$));
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableBodyRow$ = function $$oj$$14$$$$TableDomUtils$$$$createTableBodyRow$$($rowIdx$$31$$, $rowKey$$23$$) {
    var $tableBodyRow$$14$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_TR$));
    this.$createTableBodyCellAccSelect$($rowIdx$$31$$, $rowKey$$23$$, null, $tableBodyRow$$14$$, !0);
    return $tableBodyRow$$14$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableBodyRowTouchSelectionAffordance$ = function $$oj$$14$$$$TableDomUtils$$$$createTableBodyRowTouchSelectionAffordance$$($rowIdx$$32$$) {
    var $topAffordance$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_DIV$));
    $topAffordance$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_TOUCH_SELECTIOM_AFFORDANCE_TOP_CLASS$);
    $topAffordance$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_TOUCH_SELECTIOM_AFFORDANCE_TOUCH_AREA_CLASS$);
    $topAffordance$$.data("rowIdx", $rowIdx$$32$$);
    var $bottomAffordance_topIcon$$1$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_DIV$));
    $bottomAffordance_topIcon$$1$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_TOUCH_SELECTIOM_AFFORDANCE_TOP_ICON_CLASS$);
    $bottomAffordance_topIcon$$1$$.attr("role", "button");
    $bottomAffordance_topIcon$$1$$.attr("aria-label", this.$component$.$getTranslatedString$("labelAccSelectionAffordanceTop"));
    $bottomAffordance_topIcon$$1$$.data("rowIdx", $rowIdx$$32$$);
    $topAffordance$$.append($bottomAffordance_topIcon$$1$$);
    $bottomAffordance_topIcon$$1$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_DIV$));
    $bottomAffordance_topIcon$$1$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_TOUCH_SELECTIOM_AFFORDANCE_BOTTOM_CLASS$);
    $bottomAffordance_topIcon$$1$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_TOUCH_SELECTIOM_AFFORDANCE_TOUCH_AREA_CLASS$);
    $bottomAffordance_topIcon$$1$$.data("rowIdx", $rowIdx$$32$$);
    var $bottomIcon$$1_tableContainer$$4$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_DIV$));
    $bottomIcon$$1_tableContainer$$4$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_TOUCH_SELECTIOM_AFFORDANCE_BOTTOM_ICON_CLASS$);
    $bottomIcon$$1_tableContainer$$4$$.attr("role", "button");
    $bottomIcon$$1_tableContainer$$4$$.attr("aria-label", this.$component$.$getTranslatedString$("labelAccSelectionAffordanceBottom"));
    $bottomIcon$$1_tableContainer$$4$$.data("rowIdx", $rowIdx$$32$$);
    $bottomAffordance_topIcon$$1$$.append($bottomIcon$$1_tableContainer$$4$$);
    $bottomIcon$$1_tableContainer$$4$$ = this.$getTableContainer$();
    $bottomIcon$$1_tableContainer$$4$$.append($topAffordance$$);
    $bottomIcon$$1_tableContainer$$4$$.append($bottomAffordance_topIcon$$1$$);
    this.$moveTableBodyRowTouchSelectionAffordanceTop$($rowIdx$$32$$);
    this.$moveTableBodyRowTouchSelectionAffordanceBottom$($rowIdx$$32$$);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableContainer$ = function $$oj$$14$$$$TableDomUtils$$$$createTableContainer$$() {
    var $tableContainer$$5$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_DIV$));
    this.element.parent()[0].replaceChild($tableContainer$$5$$[0], this.element[0]);
    $tableContainer$$5$$.prepend(this.element);
    this.$_cachedDomTableContainer$ = $tableContainer$$5$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableFooter$ = function $$oj$$14$$$$TableDomUtils$$$$createTableFooter$$() {
    var $table$$6$$ = this.$getTable$(), $tableFooter$$2$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_TFOOT$)), $tableBody$$7_tableFooterRow$$2_tableHeader$$2$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_TR$));
    this.$createTableFooterAccSelect$($tableBody$$7_tableFooterRow$$2_tableHeader$$2$$);
    $tableFooter$$2$$.append($tableBody$$7_tableFooterRow$$2_tableHeader$$2$$);
    $tableBody$$7_tableFooterRow$$2_tableHeader$$2$$ = this.$getTableHeader$();
    null != $tableBody$$7_tableFooterRow$$2_tableHeader$$2$$ ? $tableBody$$7_tableFooterRow$$2_tableHeader$$2$$.after($tableFooter$$2$$) : ($tableBody$$7_tableFooterRow$$2_tableHeader$$2$$ = this.$getTableBody$(), null != $tableBody$$7_tableFooterRow$$2_tableHeader$$2$$ ? $tableBody$$7_tableFooterRow$$2_tableHeader$$2$$.before($tableFooter$$2$$) : $table$$6$$.append($tableFooter$$2$$));
    return $tableFooter$$2$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableFooterAccSelect$ = function $$oj$$14$$$$TableDomUtils$$$$createTableFooterAccSelect$$($tableFooterRow$$3$$) {
    var $accFooterCell$$ = $tableFooterRow$$3$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_HIDDEN_CONTENT_ACC_CLASS$);
    null != $accFooterCell$$ && 0 < $accFooterCell$$.length ? $$$$14$$($accFooterCell$$[0]) : ($accFooterCell$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_TD$)), $accFooterCell$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_HIDDEN_CONTENT_ACC_CLASS$), $accFooterCell$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_TABINDEX$, "-1"), $tableFooterRow$$3$$.prepend($accFooterCell$$));
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableFooterCell$ = function $$oj$$14$$$$TableDomUtils$$$$createTableFooterCell$$() {
    return $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_TD$));
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableHeader$ = function $$oj$$14$$$$TableDomUtils$$$$createTableHeader$$() {
    var $table$$7$$ = this.$getTable$(), $tableHeader$$3$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_THEAD$)), $tableBody$$8_tableFooter$$3_tableHeaderRow$$2$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_TR$));
    this.$_cachedDomTableHeaderRow$ = $tableBody$$8_tableFooter$$3_tableHeaderRow$$2$$;
    $tableHeader$$3$$.append($tableBody$$8_tableFooter$$3_tableHeaderRow$$2$$);
    $tableBody$$8_tableFooter$$3_tableHeaderRow$$2$$ = this.$getTableFooter$();
    null != $tableBody$$8_tableFooter$$3_tableHeaderRow$$2$$ ? $tableBody$$8_tableFooter$$3_tableHeaderRow$$2$$.before($tableHeader$$3$$) : ($tableBody$$8_tableFooter$$3_tableHeaderRow$$2$$ = this.$getTableBody$(), null != $tableBody$$8_tableFooter$$3_tableHeaderRow$$2$$ ? $tableBody$$8_tableFooter$$3_tableHeaderRow$$2$$.before($tableHeader$$3$$) : $table$$7$$.append($tableHeader$$3$$));
    return this.$_cachedDomTableHeader$ = $tableHeader$$3$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableHeaderAccSelectRowColumn$ = function $$oj$$14$$$$TableDomUtils$$$$createTableHeaderAccSelectRowColumn$$() {
    var $headerColumn$$5$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_TH$));
    $headerColumn$$5$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ACC_SELECT_ROW_CLASS$);
    $headerColumn$$5$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_ID$, this.$getTableId$() + ":" + $oj$$14$$.$TableDomUtils$.$_COLUMN_HEADER_ROW_SELECT_ID$);
    var $isRowSelectionEnabled$$1_selectRowTitle$$1$$;
    $isRowSelectionEnabled$$1_selectRowTitle$$1$$ = null != this.$component$.$_getRowSelectionMode$() ? !0 : !1;
    $isRowSelectionEnabled$$1_selectRowTitle$$1$$ = this.options.editMode == this.$component$.$_OPTION_EDIT_MODE$.$_ROW_EDIT$ ? $isRowSelectionEnabled$$1_selectRowTitle$$1$$ ? this.$component$.$getTranslatedString$(this.$component$.$_BUNDLE_KEY$.$_LABEL_SELECT_AND_EDIT_ROW$) : this.$component$.$getTranslatedString$(this.$component$.$_BUNDLE_KEY$.$_LABEL_EDIT_ROW$) : this.$component$.$getTranslatedString$(this.$component$.$_BUNDLE_KEY$.$_LABEL_SELECT_ROW$);
    $headerColumn$$5$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_TITLE$, $isRowSelectionEnabled$$1_selectRowTitle$$1$$);
    $headerColumn$$5$$.css("padding", "0");
    $headerColumn$$5$$.css("border", "0");
    var $headerColumnText$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_SPAN$));
    $headerColumnText$$.text($isRowSelectionEnabled$$1_selectRowTitle$$1$$);
    $headerColumnText$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_HIDDEN_CONTENT_ACC_CLASS$);
    $headerColumn$$5$$.append($headerColumnText$$);
    return $headerColumn$$5$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableHeaderColumn$ = function $$oj$$14$$$$TableDomUtils$$$$createTableHeaderColumn$$($columnIdx$$41_headerContext$$6$$) {
    var $column$$17$$ = this.$component$.$_getColumnDefs$()[$columnIdx$$41_headerContext$$6$$], $headerColumnCell$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_TH$));
    this.$styleTableHeaderColumn$($columnIdx$$41_headerContext$$6$$, $headerColumnCell$$, !0);
    $headerColumnCell$$.attr("abbr", $column$$17$$.headerText);
    $headerColumnCell$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_TITLE$, $column$$17$$.headerText);
    this.$insertTableHeaderColumn$($columnIdx$$41_headerContext$$6$$, $headerColumnCell$$);
    $columnIdx$$41_headerContext$$6$$ = {columnIndex:$columnIdx$$41_headerContext$$6$$, headerContext:{component:this.$component$, parentElement:$headerColumnCell$$}};
    $column$$17$$.sortable == $oj$$14$$.$TableDomUtils$.$_OPTION_ENABLED$ ? ($headerColumnCell$$.attr("data-oj-sortable", $oj$$14$$.$TableDomUtils$.$_OPTION_ENABLED$), $oj$$14$$.$TableRendererUtils$.$columnHeaderSortableIconRenderer$(this.$component$, $columnIdx$$41_headerContext$$6$$, null)) : $oj$$14$$.$TableRendererUtils$.$columnHeaderDefaultRenderer$(this.$component$, $columnIdx$$41_headerContext$$6$$, null);
    return $headerColumnCell$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableHeaderColumnDragImage$ = function $$oj$$14$$$$TableDomUtils$$$$createTableHeaderColumnDragImage$$($columnIdx$$42_headerColumnDragImage$$) {
    $columnIdx$$42_headerColumnDragImage$$ = this.$getTableHeaderColumn$($columnIdx$$42_headerColumnDragImage$$).clone();
    $columnIdx$$42_headerColumnDragImage$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DRAG$);
    $columnIdx$$42_headerColumnDragImage$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_FOCUS$);
    $columnIdx$$42_headerColumnDragImage$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_HOVER$);
    $columnIdx$$42_headerColumnDragImage$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DRAG_IMAGE$);
    $columnIdx$$42_headerColumnDragImage$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_POSITION$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_ABSOLUTE$);
    $columnIdx$$42_headerColumnDragImage$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_TOP$, "0");
    $columnIdx$$42_headerColumnDragImage$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_LEFT$, "0");
    $columnIdx$$42_headerColumnDragImage$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_ZINDEX$, "-999");
    this.$getTableContainer$().append($columnIdx$$42_headerColumnDragImage$$);
    return $columnIdx$$42_headerColumnDragImage$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableHeaderColumnAccSelect$ = function $$oj$$14$$$$TableDomUtils$$$$createTableHeaderColumnAccSelect$$($columnIdx$$43$$, $columnSelectionMode$$2$$) {
    if ($columnSelectionMode$$2$$ == $oj$$14$$.$TableDomUtils$.$_OPTION_SELECTION_MODES$.$_SINGLE$ || $columnSelectionMode$$2$$ == $oj$$14$$.$TableDomUtils$.$_OPTION_SELECTION_MODES$.$_MULTIPLE$) {
      var $headerColumn$$7$$ = this.$getTableHeaderColumn$($columnIdx$$43$$), $accSelectionHeaderColumn$$ = this.$getTableHeaderColumnAccSelect$($columnIdx$$43$$);
      if (null == $accSelectionHeaderColumn$$) {
        $accSelectionHeaderColumn$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_DIV$));
        $accSelectionHeaderColumn$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ACC_SELECT_COLUMN_CLASS$);
        $accSelectionHeaderColumn$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_HIDDEN_CONTENT_ACC_CLASS$);
        var $accSelectCheckbox$$3$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_INPUT$));
        $accSelectCheckbox$$3$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_ID$, this.$getTableId$() + ":acc_sel_col" + $columnIdx$$43$$);
        $accSelectCheckbox$$3$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_TYPE$, "checkbox");
        $accSelectCheckbox$$3$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_TABINDEX$, "-1");
        var $selectColumnTitle$$ = this.$component$.$getTranslatedString$(this.$component$.$_BUNDLE_KEY$.$_LABEL_SELECT_COLUMN$);
        $accSelectCheckbox$$3$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_TITLE$, $selectColumnTitle$$);
        $accSelectCheckbox$$3$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_CHECKBOX_ACC_SELECT_COLUMN_CLASS$);
        $accSelectionHeaderColumn$$.append($accSelectCheckbox$$3$$);
        $headerColumn$$7$$.prepend($accSelectionHeaderColumn$$);
      }
    }
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableDivScroller$ = function $$oj$$14$$$$TableDomUtils$$$$createTableDivScroller$$() {
    var $table$$8$$ = this.$getTable$(), $tableContainer$$7$$ = this.$getTableContainer$(), $tableDivScroller$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_DIV$));
    $tableDivScroller$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_SCROLLER_CLASS$);
    $tableContainer$$7$$[0].replaceChild($tableDivScroller$$[0], $table$$8$$[0]);
    $tableDivScroller$$.append($table$$8$$);
    this.$_cachedDomTableDivScroller$ = $tableDivScroller$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableNoDataRow$ = function $$oj$$14$$$$TableDomUtils$$$$createTableNoDataRow$$($columnCount$$5$$) {
    var $tableBody$$9$$ = this.$getTableBody$(), $tableNoDataRow$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_TR$));
    $tableNoDataRow$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_NO_DATA_ROW_CLASS$);
    this.$createTableNoDataAccSelect$($tableNoDataRow$$);
    this.$createTableNoDataCell$($tableNoDataRow$$, $columnCount$$5$$);
    $tableBody$$9$$.append($tableNoDataRow$$);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableNoDataAccSelect$ = function $$oj$$14$$$$TableDomUtils$$$$createTableNoDataAccSelect$$($tableNoDataRow$$1$$) {
    var $accNoDataCell$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_TD$));
    $accNoDataCell$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_HIDDEN_CONTENT_ACC_CLASS$);
    $accNoDataCell$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_TABINDEX$, "-1");
    $tableNoDataRow$$1$$.prepend($accNoDataCell$$);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableNoDataCell$ = function $$oj$$14$$$$TableDomUtils$$$$createTableNoDataCell$$($tableNoDataRow$$2$$, $columnCount$$6$$) {
    var $noDataCell$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_TD$));
    $noDataCell$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_COLSPAN$, $columnCount$$6$$ || 1);
    $noDataCell$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_NO_DATA_MESSAGE_CLASS$);
    var $emptyTextMsg$$ = null, $emptyTextMsg$$ = null != this.options.emptyText ? this.options.emptyText : this.$component$.$getTranslatedString$(this.$component$.$_BUNDLE_KEY$.$_MSG_NO_DATA$);
    $noDataCell$$.text($emptyTextMsg$$);
    $tableNoDataRow$$2$$.append($noDataCell$$);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableInlineMessage$ = function $$oj$$14$$$$TableDomUtils$$$$createTableInlineMessage$$() {
    var $tableContainer$$8$$ = this.$getTableContainer$(), $inlineMessage$$2$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_DIV$));
    $inlineMessage$$2$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_INLINE_MESSAGE_CLASS$);
    $inlineMessage$$2$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_DISPLAY$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_NONE$);
    $tableContainer$$8$$.append($inlineMessage$$2$$);
    this.$_cachedDomTableInlineMessage$ = $inlineMessage$$2$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableStatusMessage$ = function $$oj$$14$$$$TableDomUtils$$$$createTableStatusMessage$$() {
    var $tableContainer$$9$$ = this.$getTableContainer$(), $statusMessage$$2$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_DIV$));
    $statusMessage$$2$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_STATUS_MESSAGE_CLASS$);
    $statusMessage$$2$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_DISPLAY$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_NONE$);
    var $statusMessageText$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_DIV$));
    $statusMessageText$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_STATUS_MESSAGE_TEXT_CLASS$);
    $statusMessageText$$.text(this.$component$.$getTranslatedString$(this.$component$.$_BUNDLE_KEY$.$_MSG_FETCHING_DATA$));
    $statusMessage$$2$$.append($statusMessageText$$);
    $tableContainer$$9$$.append($statusMessage$$2$$);
    this.$_cachedDomTableStatusMessage$ = $statusMessage$$2$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$displayDragOverIndicatorColumn$ = function $$oj$$14$$$$TableDomUtils$$$$displayDragOverIndicatorColumn$$($columnIdx$$44$$, $before$$1$$) {
    this.$removeDragOverIndicatorColumn$();
    var $tableHeaderRow$$3$$ = this.$getTableHeaderRow$(), $columns$$17_tableHeaderColumn$$10$$ = this.$getTableHeaderColumn$($columnIdx$$44$$);
    if (null != $columns$$17_tableHeaderColumn$$10$$) {
      $before$$1$$ ? $columns$$17_tableHeaderColumn$$10$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DRAG_INDICATOR_BEFORE_CLASS$) : $columns$$17_tableHeaderColumn$$10$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DRAG_INDICATOR_AFTER_CLASS$);
    } else {
      if ($columns$$17_tableHeaderColumn$$10$$ = this.$component$.$_getColumnDefs$(), null == $columns$$17_tableHeaderColumn$$10$$ || 0 == $columns$$17_tableHeaderColumn$$10$$.length) {
        $before$$1$$ ? $tableHeaderRow$$3$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DRAG_INDICATOR_BEFORE_CLASS$) : $tableHeaderRow$$3$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DRAG_INDICATOR_AFTER_CLASS$);
      }
    }
  };
  $oj$$14$$.$TableDomUtils$.prototype.$displayDragOverIndicatorRow$ = function $$oj$$14$$$$TableDomUtils$$$$displayDragOverIndicatorRow$$($rowIdx$$33$$, $modelRow$$) {
    this.$removeDragOverIndicatorRow$();
    var $tableBodyRowDragIndicator$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_TR$));
    $tableBodyRowDragIndicator$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_DRAG_INDICATOR_BEFORE_CLASS$);
    $modelRow$$ && $tableBodyRowDragIndicator$$.height($modelRow$$.height());
    var $tableBodyDragIndicatorCell_tableBodyRow$$15_tableBodyRows$$11$$ = $$$$14$$(document.createElement($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_TD$)), $columns$$18$$ = this.$component$.$_getColumnDefs$();
    $tableBodyDragIndicatorCell_tableBodyRow$$15_tableBodyRows$$11$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_COLSPAN$, $columns$$18$$.length + 1);
    $tableBodyRowDragIndicator$$.append($tableBodyDragIndicatorCell_tableBodyRow$$15_tableBodyRows$$11$$);
    $tableBodyDragIndicatorCell_tableBodyRow$$15_tableBodyRows$$11$$ = this.$getTableBodyRow$($rowIdx$$33$$);
    null != $tableBodyDragIndicatorCell_tableBodyRow$$15_tableBodyRows$$11$$ ? $tableBodyDragIndicatorCell_tableBodyRow$$15_tableBodyRows$$11$$.before($tableBodyRowDragIndicator$$) : ($tableBodyDragIndicatorCell_tableBodyRow$$15_tableBodyRows$$11$$ = this.$getTableBodyRows$(), null != $tableBodyDragIndicatorCell_tableBodyRow$$15_tableBodyRows$$11$$ && 0 != $tableBodyDragIndicatorCell_tableBodyRow$$15_tableBodyRows$$11$$.length || this.$component$.$_hideNoDataMessage$(), this.$getTableBody$().append($tableBodyRowDragIndicator$$));
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getContextMenuId$ = function $$oj$$14$$$$TableDomUtils$$$$getContextMenuId$$() {
    return null == this.options.contextMenu ? "#" + this.$getTable$().attr("contextmenu") : this.options.contextMenu;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getElementColumnIdx$ = function $$oj$$14$$$$TableDomUtils$$$$getElementColumnIdx$$($element$$168_tableFooterCell$$2$$) {
    var $tableBodyCell$$6_tableHeaderColumn$$11$$ = this.$getFirstAncestor$($element$$168_tableFooterCell$$2$$, $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_CLASS$);
    if (null != $tableBodyCell$$6_tableHeaderColumn$$11$$) {
      return $tableBodyCell$$6_tableHeaderColumn$$11$$.parent().children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_CLASS$).index($tableBodyCell$$6_tableHeaderColumn$$11$$);
    }
    $tableBodyCell$$6_tableHeaderColumn$$11$$ = this.$getFirstAncestor$($element$$168_tableFooterCell$$2$$, $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_CELL_CLASS$);
    if (null != $tableBodyCell$$6_tableHeaderColumn$$11$$) {
      return $tableBodyCell$$6_tableHeaderColumn$$11$$.parent().children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_CELL_CLASS$).index($tableBodyCell$$6_tableHeaderColumn$$11$$);
    }
    $element$$168_tableFooterCell$$2$$ = this.$getFirstAncestor$($element$$168_tableFooterCell$$2$$, $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_CELL_CLASS$);
    return null != $element$$168_tableFooterCell$$2$$ ? $element$$168_tableFooterCell$$2$$.parent().children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_CELL_CLASS$).index($element$$168_tableFooterCell$$2$$) : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getElementRowIdx$ = function $$oj$$14$$$$TableDomUtils$$$$getElementRowIdx$$($element$$169_tableBodyRow$$16$$) {
    $element$$169_tableBodyRow$$16$$ = this.$getFirstAncestor$($element$$169_tableBodyRow$$16$$, $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_CLASS$);
    return null != $element$$169_tableBodyRow$$16$$ ? $element$$169_tableBodyRow$$16$$.index() : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getFirstAncestor$ = function $$oj$$14$$$$TableDomUtils$$$$getFirstAncestor$$($element$$170$$, $className$$26$$) {
    var $parents$$2$$;
    if (null == $element$$170$$) {
      return null;
    }
    $element$$170$$ = $$$$14$$($element$$170$$);
    if ($element$$170$$.hasClass($className$$26$$)) {
      return $element$$170$$;
    }
    $parents$$2$$ = $element$$170$$.parents("." + $className$$26$$);
    return 0 != $parents$$2$$.length ? $parents$$2$$.eq(0) : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getScrollbarHeight$ = function $$oj$$14$$$$TableDomUtils$$$$getScrollbarHeight$$() {
    var $scroller$$11$$ = this.$getScroller$();
    return 0 < $scroller$$11$$.get(0).clientHeight ? $scroller$$11$$.get(0).offsetHeight - $scroller$$11$$.get(0).clientHeight : 0;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getScrollbarWidth$ = function $$oj$$14$$$$TableDomUtils$$$$getScrollbarWidth$$() {
    var $scroller$$12$$ = this.$getScroller$();
    return 0 < $scroller$$12$$.get(0).clientWidth ? $scroller$$12$$.get(0).offsetWidth - $scroller$$12$$.get(0).clientWidth : 0;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getScroller$ = function $$oj$$14$$$$TableDomUtils$$$$getScroller$$() {
    return this.$isDivScroller$() ? this.$getTableDivScroller$() : this.$getTableBody$();
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getScrollLeft$ = function $$oj$$14$$$$TableDomUtils$$$$getScrollLeft$$($element$$171$$) {
    $element$$171$$ = $$$$14$$($element$$171$$);
    var $scrollLeft$$13$$ = $element$$171$$[0].scrollLeft;
    "rtl" === this.$component$.$_GetReadingDirection$() && ($scrollLeft$$13$$ = Math.abs($scrollLeft$$13$$), this.$_isWebkit$() && ($scrollLeft$$13$$ = $element$$171$$[0].scrollWidth - $element$$171$$[0].clientWidth - $scrollLeft$$13$$));
    return $scrollLeft$$13$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTable$ = function $$oj$$14$$$$TableDomUtils$$$$getTable$$() {
    return $$$$14$$(this.element);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableBody$ = function $$oj$$14$$$$TableDomUtils$$$$getTableBody$$() {
    if (!this.$_cachedDomTableBody$) {
      var $table$$9$$ = this.$getTable$(), $tableBody$$10$$ = null;
      $table$$9$$ && ($tableBody$$10$$ = $table$$9$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_BODY_CLASS$)) && 0 < $tableBody$$10$$.length && (this.$_cachedDomTableBody$ = $$$$14$$($tableBody$$10$$.get(0)));
    }
    return this.$_cachedDomTableBody$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableBodyCell$ = function $$oj$$14$$$$TableDomUtils$$$$getTableBodyCell$$($rowIdx$$34_tableBodyCells$$3$$, $columnIdx$$45$$, $tableBodyRow$$17$$) {
    return($rowIdx$$34_tableBodyCells$$3$$ = this.$getTableBodyCells$($rowIdx$$34_tableBodyCells$$3$$, $tableBodyRow$$17$$)) ? $rowIdx$$34_tableBodyCells$$3$$.length > $columnIdx$$45$$ ? $$$$14$$($rowIdx$$34_tableBodyCells$$3$$[$columnIdx$$45$$]) : null : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableBodyCellAccSelect$ = function $$oj$$14$$$$TableDomUtils$$$$getTableBodyCellAccSelect$$($accSelectionCell$$2_tableBodyRow$$18$$) {
    return null != $accSelectionCell$$2_tableBodyRow$$18$$ && ($accSelectionCell$$2_tableBodyRow$$18$$ = $accSelectionCell$$2_tableBodyRow$$18$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_ACC_SELECT_CLASS$), null != $accSelectionCell$$2_tableBodyRow$$18$$ && 0 < $accSelectionCell$$2_tableBodyRow$$18$$.length) ? $$$$14$$($accSelectionCell$$2_tableBodyRow$$18$$[0]) : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableBodyLogicalCells$ = function $$oj$$14$$$$TableDomUtils$$$$getTableBodyLogicalCells$$($rowIdx$$35_tableBodyCells$$4$$) {
    return($rowIdx$$35_tableBodyCells$$4$$ = this.$getTableBodyCells$($rowIdx$$35_tableBodyCells$$4$$, void 0)) ? this.$_getColspanLogicalElements$($rowIdx$$35_tableBodyCells$$4$$) : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableBodyCells$ = function $$oj$$14$$$$TableDomUtils$$$$getTableBodyCells$$($rowIdx$$36$$, $tableBodyRow$$20$$) {
    $tableBodyRow$$20$$ || ($tableBodyRow$$20$$ = this.$getTableBodyRow$($rowIdx$$36$$));
    if (!$tableBodyRow$$20$$) {
      return null;
    }
    var $tableBodyCellElements$$ = $tableBodyRow$$20$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_CLASS$);
    return null != $tableBodyCellElements$$ && 0 < $tableBodyCellElements$$.length ? $tableBodyCellElements$$ : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableBodyRow$ = function $$oj$$14$$$$TableDomUtils$$$$getTableBodyRow$$($rowIdx$$37$$) {
    var $tableBodyRows$$12$$ = this.$getTableBodyRows$();
    return $tableBodyRows$$12$$ && null != $rowIdx$$37$$ ? $tableBodyRows$$12$$.length > $rowIdx$$37$$ ? $$$$14$$($tableBodyRows$$12$$[$rowIdx$$37$$]) : null : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableBodyRows$ = function $$oj$$14$$$$TableDomUtils$$$$getTableBodyRows$$() {
    if (!this.$_cachedDomTableBodyRows$) {
      var $tableBodyRowElements$$ = this.$getTableBody$().children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_CLASS$);
      null != $tableBodyRowElements$$ && 0 < $tableBodyRowElements$$.length && (this.$_cachedDomTableBodyRows$ = $tableBodyRowElements$$);
    }
    return this.$_cachedDomTableBodyRows$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableBodyRowTouchSelectionAffordanceTop$ = function $$oj$$14$$$$TableDomUtils$$$$getTableBodyRowTouchSelectionAffordanceTop$$() {
    var $topAffordance$$1$$ = this.$getTableContainer$().children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_TOUCH_SELECTIOM_AFFORDANCE_TOP_CLASS$);
    return null != $topAffordance$$1$$ && 0 < $topAffordance$$1$$.length ? $topAffordance$$1$$ = $$$$14$$($topAffordance$$1$$[0]) : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableBodyRowTouchSelectionAffordanceBottom$ = function $$oj$$14$$$$TableDomUtils$$$$getTableBodyRowTouchSelectionAffordanceBottom$$() {
    var $bottomAffordance$$1$$ = this.$getTableContainer$().children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_TOUCH_SELECTIOM_AFFORDANCE_BOTTOM_CLASS$);
    return null != $bottomAffordance$$1$$ && 0 < $bottomAffordance$$1$$.length ? $bottomAffordance$$1$$ = $$$$14$$($bottomAffordance$$1$$[0]) : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableContainer$ = function $$oj$$14$$$$TableDomUtils$$$$getTableContainer$$() {
    this.$_cachedDomTableContainer$ || (this.$isDivScroller$() ? this.$_cachedDomTableContainer$ = $$$$14$$(this.element.get(0).parentNode.parentNode) : this.$_cachedDomTableContainer$ = $$$$14$$(this.element.get(0).parentNode));
    return this.$_cachedDomTableContainer$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableFooter$ = function $$oj$$14$$$$TableDomUtils$$$$getTableFooter$$() {
    var $table$$10$$ = this.$getTable$(), $tableFooter$$4$$ = null;
    return $table$$10$$ && ($tableFooter$$4$$ = $table$$10$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_CLASS$)) && 0 < $tableFooter$$4$$.length ? $$$$14$$($tableFooter$$4$$.get(0)) : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableFooterCell$ = function $$oj$$14$$$$TableDomUtils$$$$getTableFooterCell$$($columnIdx$$46$$) {
    var $tableFooterCells$$ = this.$getTableFooterCells$();
    return null != $tableFooterCells$$ && $tableFooterCells$$.length > $columnIdx$$46$$ ? $$$$14$$($tableFooterCells$$[$columnIdx$$46$$]) : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableFooterCells$ = function $$oj$$14$$$$TableDomUtils$$$$getTableFooterCells$$() {
    var $tableFooterCells$$1_tableFooterRow$$4$$ = this.$getTableFooterRow$(), $tableFooterCells$$1_tableFooterRow$$4$$ = $$$$14$$($tableFooterCells$$1_tableFooterRow$$4$$).children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_CELL_CLASS$);
    return null != $tableFooterCells$$1_tableFooterRow$$4$$ && 0 < $tableFooterCells$$1_tableFooterRow$$4$$.length ? $tableFooterCells$$1_tableFooterRow$$4$$ : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableFooterLogicalCells$ = function $$oj$$14$$$$TableDomUtils$$$$getTableFooterLogicalCells$$() {
    var $tableFooterCells$$2$$ = this.$getTableFooterCells$();
    return $tableFooterCells$$2$$ ? this.$_getColspanLogicalElements$($tableFooterCells$$2$$) : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableFooterRow$ = function $$oj$$14$$$$TableDomUtils$$$$getTableFooterRow$$() {
    if (!this.$_cachedDomTableFooterRow$) {
      var $tableFooter$$5$$ = this.$getTableFooter$();
      if (!$tableFooter$$5$$) {
        return null;
      }
      this.$_cachedDomTableFooterRow$ = $$$$14$$($tableFooter$$5$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_ROW_CLASS$).get(0));
    }
    return this.$_cachedDomTableFooterRow$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableHeader$ = function $$oj$$14$$$$TableDomUtils$$$$getTableHeader$$() {
    if (!this.$_cachedDomTableHeader$) {
      var $table$$11$$ = this.$getTable$(), $tableHeader$$4$$ = null;
      $table$$11$$ && ($tableHeader$$4$$ = $table$$11$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_HEADER_CLASS$)) && 0 < $tableHeader$$4$$.length && (this.$_cachedDomTableHeader$ = $$$$14$$($tableHeader$$4$$.get(0)));
    }
    return this.$_cachedDomTableHeader$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableHeaderColumn$ = function $$oj$$14$$$$TableDomUtils$$$$getTableHeaderColumn$$($columnIdx$$47$$) {
    var $headerColumns$$ = this.$getTableHeaderColumns$();
    return $headerColumns$$ ? $headerColumns$$.length > $columnIdx$$47$$ ? $$$$14$$($headerColumns$$[$columnIdx$$47$$]) : null : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableHeaderColumnAccSelect$ = function $$oj$$14$$$$TableDomUtils$$$$getTableHeaderColumnAccSelect$$($accSelectionCell$$3_columnIdx$$48_headerColumn$$8$$) {
    $accSelectionCell$$3_columnIdx$$48_headerColumn$$8$$ = this.$getTableHeaderColumn$($accSelectionCell$$3_columnIdx$$48_headerColumn$$8$$);
    return null != $accSelectionCell$$3_columnIdx$$48_headerColumn$$8$$ && ($accSelectionCell$$3_columnIdx$$48_headerColumn$$8$$ = $accSelectionCell$$3_columnIdx$$48_headerColumn$$8$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ACC_SELECT_COLUMN_CLASS$), null != $accSelectionCell$$3_columnIdx$$48_headerColumn$$8$$ && 0 < $accSelectionCell$$3_columnIdx$$48_headerColumn$$8$$.length) ? $$$$14$$($accSelectionCell$$3_columnIdx$$48_headerColumn$$8$$[0]) : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableHeaderColumns$ = function $$oj$$14$$$$TableDomUtils$$$$getTableHeaderColumns$$() {
    var $headerColumnElements_tableHeaderRow$$4$$ = this.$getTableHeaderRow$();
    return null != $headerColumnElements_tableHeaderRow$$4$$ && ($headerColumnElements_tableHeaderRow$$4$$ = $headerColumnElements_tableHeaderRow$$4$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_CELL_CLASS$), null != $headerColumnElements_tableHeaderRow$$4$$ && 0 < $headerColumnElements_tableHeaderRow$$4$$.length) ? $headerColumnElements_tableHeaderRow$$4$$ : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableHeaderLogicalColumns$ = function $$oj$$14$$$$TableDomUtils$$$$getTableHeaderLogicalColumns$$() {
    var $tableHeaderColumns$$2$$ = this.$getTableHeaderColumns$();
    return $tableHeaderColumns$$2$$ ? this.$_getColspanLogicalElements$($tableHeaderColumns$$2$$) : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableHeaderRow$ = function $$oj$$14$$$$TableDomUtils$$$$getTableHeaderRow$$() {
    if (!this.$_cachedDomTableHeaderRow$) {
      var $tableHeader$$5$$ = this.$getTableHeader$();
      if (!$tableHeader$$5$$) {
        return null;
      }
      this.$_cachedDomTableHeaderRow$ = $$$$14$$($tableHeader$$5$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_HEADER_ROW_CLASS$).get(0));
    }
    return this.$_cachedDomTableHeaderRow$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableDivScroller$ = function $$oj$$14$$$$TableDomUtils$$$$getTableDivScroller$$() {
    if (!this.$_cachedDomTableDivScroller$) {
      var $tableContainer$$12_tableDivScroller$$1$$ = this.$getTableContainer$();
      $tableContainer$$12_tableDivScroller$$1$$ && ($tableContainer$$12_tableDivScroller$$1$$ = $tableContainer$$12_tableDivScroller$$1$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_SCROLLER_CLASS$)) && 0 < $tableContainer$$12_tableDivScroller$$1$$.length && (this.$_cachedDomTableDivScroller$ = $$$$14$$($tableContainer$$12_tableDivScroller$$1$$.get(0)));
    }
    return this.$_cachedDomTableDivScroller$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableId$ = function $$oj$$14$$$$TableDomUtils$$$$getTableId$$() {
    this.$_tableId$ || (this.$_tableId$ = this.$getTable$().attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_ID$));
    return this.$_tableId$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableInlineMessage$ = function $$oj$$14$$$$TableDomUtils$$$$getTableInlineMessage$$() {
    if (!this.$_cachedDomTableInlineMessage$) {
      var $inlineMessage$$3_tableContainer$$13$$ = this.$getTableContainer$();
      $inlineMessage$$3_tableContainer$$13$$ && ($inlineMessage$$3_tableContainer$$13$$ = $inlineMessage$$3_tableContainer$$13$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_INLINE_MESSAGE_CLASS$)) && 0 < $inlineMessage$$3_tableContainer$$13$$.length && (this.$_cachedDomTableInlineMessage$ = $$$$14$$($inlineMessage$$3_tableContainer$$13$$.get(0)));
    }
    return this.$_cachedDomTableInlineMessage$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableNoDataRow$ = function $$oj$$14$$$$TableDomUtils$$$$getTableNoDataRow$$() {
    var $noDataRow$$2_tableBody$$12$$ = this.$getTableBody$();
    return $noDataRow$$2_tableBody$$12$$ && ($noDataRow$$2_tableBody$$12$$ = $noDataRow$$2_tableBody$$12$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_NO_DATA_ROW_CLASS$)) && 0 < $noDataRow$$2_tableBody$$12$$.length ? $$$$14$$($noDataRow$$2_tableBody$$12$$.get(0)) : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableStatusMessage$ = function $$oj$$14$$$$TableDomUtils$$$$getTableStatusMessage$$() {
    if (!this.$_cachedDomTableStatusMessage$) {
      var $statusMessage$$3_tableContainer$$14$$ = this.$getTableContainer$();
      $statusMessage$$3_tableContainer$$14$$ && ($statusMessage$$3_tableContainer$$14$$ = $statusMessage$$3_tableContainer$$14$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_STATUS_MESSAGE_CLASS$)) && 0 < $statusMessage$$3_tableContainer$$14$$.length && (this.$_cachedDomTableStatusMessage$ = $$$$14$$($statusMessage$$3_tableContainer$$14$$.get(0)));
    }
    return this.$_cachedDomTableStatusMessage$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableUID$ = function $$oj$$14$$$$TableDomUtils$$$$getTableUID$$() {
    if (!this.$_tableUID$) {
      var $uid$$ = this.$getTableId$();
      null == $uid$$ && ($uid$$ = (1E32 * Math.random()).toString(36));
      this.$_tableUID$ = $uid$$;
    }
    return this.$_tableUID$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$hashCode$ = function $$oj$$14$$$$TableDomUtils$$$$hashCode$$($str$$21$$) {
    "string" != $$$$14$$.type($str$$21$$) && ($str$$21$$ = $str$$21$$.toString());
    var $hash$$1$$ = 0;
    if (0 == $str$$21$$.length) {
      return $hash$$1$$;
    }
    var $charVal$$, $i$$280$$, $strCount$$ = $str$$21$$.length;
    for ($i$$280$$ = 0;$i$$280$$ < $strCount$$;$i$$280$$++) {
      $charVal$$ = $str$$21$$.charCodeAt($i$$280$$), $hash$$1$$ = ($hash$$1$$ << 5) - $hash$$1$$ + $charVal$$, $hash$$1$$ &= $hash$$1$$;
    }
    return $hash$$1$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$insertTableBodyCell$ = function $$oj$$14$$$$TableDomUtils$$$$insertTableBodyCell$$($rowIdx$$38$$, $rowKey$$24$$, $rowHashCode$$2$$, $columnIdx$$49$$, $tableBodyCell$$7$$, $tableBodyRow$$21$$) {
    this.$setTableBodyCellAttributes$($rowIdx$$38$$, $rowKey$$24$$, $rowHashCode$$2$$, $columnIdx$$49$$, $tableBodyCell$$7$$);
    $$$$14$$($tableBodyRow$$21$$).append($tableBodyCell$$7$$);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$insertTableBodyRow$ = function $$oj$$14$$$$TableDomUtils$$$$insertTableBodyRow$$($rowIdx$$39$$, $tableBodyRow$$22$$, $row$$56_tableBody$$13$$, $docFrag$$2_tableBodyRows$$13$$) {
    this.$setTableBodyRowAttributes$($row$$56_tableBody$$13$$, $tableBodyRow$$22$$);
    null == $docFrag$$2_tableBodyRows$$13$$ ? ($row$$56_tableBody$$13$$ = this.$getTableBody$(), $docFrag$$2_tableBodyRows$$13$$ = $row$$56_tableBody$$13$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_CLASS$), 0 == $rowIdx$$39$$ ? $row$$56_tableBody$$13$$.prepend($tableBodyRow$$22$$) : $docFrag$$2_tableBodyRows$$13$$.length >= $rowIdx$$39$$ ? $$$$14$$($docFrag$$2_tableBodyRows$$13$$.get($rowIdx$$39$$ - 1)).after($tableBodyRow$$22$$) : $row$$56_tableBody$$13$$.append($tableBodyRow$$22$$)) : 
    $docFrag$$2_tableBodyRows$$13$$.append($tableBodyRow$$22$$);
    this.$clearCachedDomRowData$();
  };
  $oj$$14$$.$TableDomUtils$.prototype.$insertTableFooterCell$ = function $$oj$$14$$$$TableDomUtils$$$$insertTableFooterCell$$($columnIdx$$50$$, $tableFooterCell$$3$$) {
    var $tableFooterRow$$5$$ = this.$getTableFooterRow$(), $accFooterCell$$1_tableFooterCells$$3$$ = $$$$14$$($tableFooterRow$$5$$).children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_CELL_CLASS$);
    0 == $columnIdx$$50$$ ? ($accFooterCell$$1_tableFooterCells$$3$$ = $tableFooterRow$$5$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_HIDDEN_CONTENT_ACC_CLASS$), null != $accFooterCell$$1_tableFooterCells$$3$$ && 0 < $accFooterCell$$1_tableFooterCells$$3$$.length ? $$$$14$$($accFooterCell$$1_tableFooterCells$$3$$[0]).after($tableFooterCell$$3$$) : $tableFooterRow$$5$$.prepend($tableFooterCell$$3$$)) : $tableFooterRow$$5$$.length >= $columnIdx$$50$$ ? $$$$14$$($accFooterCell$$1_tableFooterCells$$3$$.get($columnIdx$$50$$ - 
    1)).after($tableFooterCell$$3$$) : $tableFooterRow$$5$$.append($tableFooterCell$$3$$);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$insertTableHeaderColumn$ = function $$oj$$14$$$$TableDomUtils$$$$insertTableHeaderColumn$$($columnIdx$$51$$, $tableHeaderColumn$$12$$) {
    var $tableHeaderRow$$5$$ = this.$getTableHeaderRow$(), $accSelectionColumn$$1_tableHeaderColumns$$3$$ = this.$getTableHeaderColumns$();
    this.$setTableHeaderColumnAttributes$($columnIdx$$51$$, $tableHeaderColumn$$12$$);
    var $oldTableHeaderColumn$$ = this.$getTableHeaderColumn$($columnIdx$$51$$);
    $oldTableHeaderColumn$$ ? $oldTableHeaderColumn$$.replaceWith($tableHeaderColumn$$12$$) : 0 == $columnIdx$$51$$ ? ($accSelectionColumn$$1_tableHeaderColumns$$3$$ = $tableHeaderRow$$5$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ACC_SELECT_ROW_CLASS$), null != $accSelectionColumn$$1_tableHeaderColumns$$3$$ && 0 < $accSelectionColumn$$1_tableHeaderColumns$$3$$.length ? $$$$14$$($accSelectionColumn$$1_tableHeaderColumns$$3$$[0]).after($tableHeaderColumn$$12$$) : $tableHeaderRow$$5$$.prepend($tableHeaderColumn$$12$$)) : 
    $accSelectionColumn$$1_tableHeaderColumns$$3$$.length >= $columnIdx$$51$$ ? $$$$14$$($accSelectionColumn$$1_tableHeaderColumns$$3$$.get($columnIdx$$51$$ - 1)).after($tableHeaderColumn$$12$$) : $tableHeaderRow$$5$$.append($tableHeaderColumn$$12$$);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$isDivScroller$ = function $$oj$$14$$$$TableDomUtils$$$$isDivScroller$$() {
    return this.$_isIE$() && 10 > this.$_isIE$() ? !0 : !1;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$isTableContainerScrollable$ = function $$oj$$14$$$$TableDomUtils$$$$isTableContainerScrollable$$() {
    var $tableContainer$$15$$ = this.$getTableContainer$(), $table$$12$$ = this.$getTable$(), $tableStatusMessage$$1$$ = this.$getTableStatusMessage$(), $tableStatusMessageDisplay$$ = $tableStatusMessage$$1$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_DISPLAY$).toString();
    $tableStatusMessage$$1$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_DISPLAY$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_NONE$);
    var $result$$40$$ = [];
    $result$$40$$[0] = 0 < $tableContainer$$15$$[0].clientHeight ? $table$$12$$[0].clientHeight > $tableContainer$$15$$[0].clientHeight ? 1 : 1 < $tableContainer$$15$$[0].clientHeight - $table$$12$$[0].clientHeight ? -1 : 0 : 0;
    $result$$40$$[1] = 0 < $tableContainer$$15$$[0].clientWidth ? $table$$12$$[0].clientWidth > $tableContainer$$15$$[0].clientWidth ? 1 : 1 < $tableContainer$$15$$[0].clientWidth - $table$$12$$[0].clientWidth ? -1 : 0 : 0;
    $tableStatusMessage$$1$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_DISPLAY$, $tableStatusMessageDisplay$$);
    return $result$$40$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$moveTableBodyRowTouchSelectionAffordanceTop$ = function $$oj$$14$$$$TableDomUtils$$$$moveTableBodyRowTouchSelectionAffordanceTop$$($rowIdx$$40_tableBodyRowRect$$) {
    var $topAffordance$$2$$ = this.$getTableBodyRowTouchSelectionAffordanceTop$();
    if (null != $topAffordance$$2$$) {
      $topAffordance$$2$$.data("rowIdx", $rowIdx$$40_tableBodyRowRect$$);
      $$$$14$$($topAffordance$$2$$.children()[0]).data("rowIdx", $rowIdx$$40_tableBodyRowRect$$);
      var $tableBody$$14$$ = this.$getTableBody$();
      $rowIdx$$40_tableBodyRowRect$$ = this.$getTableBodyRow$($rowIdx$$40_tableBodyRowRect$$)[0].getBoundingClientRect();
      var $tableContainerRect$$ = this.$getTableContainer$()[0].getBoundingClientRect();
      $topAffordance$$2$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_TOP$, $rowIdx$$40_tableBodyRowRect$$.top - $tableContainerRect$$.top - $topAffordance$$2$$.height() / 2);
      $topAffordance$$2$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_LEFT$, $tableBody$$14$$.width() / 2 + "px");
    }
  };
  $oj$$14$$.$TableDomUtils$.prototype.$moveTableBodyRowTouchSelectionAffordanceBottom$ = function $$oj$$14$$$$TableDomUtils$$$$moveTableBodyRowTouchSelectionAffordanceBottom$$($rowIdx$$41_tableBodyRowRect$$1$$) {
    var $bottomAffordance$$2$$ = this.$getTableBodyRowTouchSelectionAffordanceBottom$();
    if (null != $bottomAffordance$$2$$) {
      $bottomAffordance$$2$$.data("rowIdx", $rowIdx$$41_tableBodyRowRect$$1$$);
      $$$$14$$($bottomAffordance$$2$$.children()[0]).data("rowIdx", $rowIdx$$41_tableBodyRowRect$$1$$);
      var $tableBody$$15$$ = this.$getTableBody$();
      $rowIdx$$41_tableBodyRowRect$$1$$ = this.$getTableBodyRow$($rowIdx$$41_tableBodyRowRect$$1$$)[0].getBoundingClientRect();
      var $tableContainerRect$$1$$ = this.$getTableContainer$()[0].getBoundingClientRect();
      $bottomAffordance$$2$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_TOP$, $rowIdx$$41_tableBodyRowRect$$1$$.top - $tableContainerRect$$1$$.top + $rowIdx$$41_tableBodyRowRect$$1$$.height - $bottomAffordance$$2$$.height() / 2);
      $bottomAffordance$$2$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_LEFT$, $tableBody$$15$$.width() / 2 + "px");
    }
  };
  $oj$$14$$.$TableDomUtils$.prototype.$moveTableHeaderColumn$ = function $$oj$$14$$$$TableDomUtils$$$$moveTableHeaderColumn$$($columnIdx$$52_columnsDestMapItem$$, $destColIdx_destIdx$$, $columnDef_event$$348$$) {
    var $columns$$19_i$$281$$ = this.$component$.$_getColumnDefs$(), $tableBodyRows$$14_tableHeaderColumn$$13$$ = this.$getTableHeaderColumn$($columnIdx$$52_columnsDestMapItem$$), $tableFooterCell$$4$$ = this.$getTableFooterCell$($columnIdx$$52_columnsDestMapItem$$), $destTableFooterCell_destTableHeaderColumn_tableBodyCell$$8$$ = null, $destTableBodyCell$$ = $destTableFooterCell_destTableHeaderColumn_tableBodyCell$$8$$ = $destTableFooterCell_destTableHeaderColumn_tableBodyCell$$8$$ = null, $colSpan_columnsOption$$ = 
    null, $afterColumn_columnOption$$ = !1;
    $destColIdx_destIdx$$ == $columns$$19_i$$281$$.length && ($destColIdx_destIdx$$ -= 1, $afterColumn_columnOption$$ = !0);
    null != $tableBodyRows$$14_tableHeaderColumn$$13$$ && ($colSpan_columnsOption$$ = $tableBodyRows$$14_tableHeaderColumn$$13$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_COLSPAN$), $destTableFooterCell_destTableHeaderColumn_tableBodyCell$$8$$ = this.$getTableHeaderColumn$($destColIdx_destIdx$$), null == $destTableFooterCell_destTableHeaderColumn_tableBodyCell$$8$$ || null != $colSpan_columnsOption$$ && 1 != $colSpan_columnsOption$$ || ($afterColumn_columnOption$$ ? $destTableFooterCell_destTableHeaderColumn_tableBodyCell$$8$$.after($tableBodyRows$$14_tableHeaderColumn$$13$$) : 
    $destTableFooterCell_destTableHeaderColumn_tableBodyCell$$8$$.before($tableBodyRows$$14_tableHeaderColumn$$13$$)));
    null != $tableFooterCell$$4$$ && ($colSpan_columnsOption$$ = $tableFooterCell$$4$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_COLSPAN$), $destTableFooterCell_destTableHeaderColumn_tableBodyCell$$8$$ = this.$getTableFooterCell$($destColIdx_destIdx$$), null == $destTableFooterCell_destTableHeaderColumn_tableBodyCell$$8$$ || null != $colSpan_columnsOption$$ && 1 != $colSpan_columnsOption$$ || ($afterColumn_columnOption$$ ? $destTableFooterCell_destTableHeaderColumn_tableBodyCell$$8$$.after($tableFooterCell$$4$$) : 
    $destTableFooterCell_destTableHeaderColumn_tableBodyCell$$8$$.before($tableFooterCell$$4$$)));
    $tableBodyRows$$14_tableHeaderColumn$$13$$ = this.$getTableBodyRows$();
    if (null != $tableBodyRows$$14_tableHeaderColumn$$13$$) {
      for ($columns$$19_i$$281$$ = 0;$columns$$19_i$$281$$ < $tableBodyRows$$14_tableHeaderColumn$$13$$.length;$columns$$19_i$$281$$++) {
        $destTableFooterCell_destTableHeaderColumn_tableBodyCell$$8$$ = this.$getTableBodyCell$($columns$$19_i$$281$$, $columnIdx$$52_columnsDestMapItem$$, null), null != $destTableFooterCell_destTableHeaderColumn_tableBodyCell$$8$$ && ($destTableBodyCell$$ = this.$getTableBodyCell$($columns$$19_i$$281$$, $destColIdx_destIdx$$, null), $colSpan_columnsOption$$ = $destTableFooterCell_destTableHeaderColumn_tableBodyCell$$8$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_COLSPAN$), null == $destTableBodyCell$$ || 
        null != $colSpan_columnsOption$$ && 1 != $colSpan_columnsOption$$ || ($afterColumn_columnOption$$ ? $destTableBodyCell$$.after($destTableFooterCell_destTableHeaderColumn_tableBodyCell$$8$$) : $destTableBodyCell$$.before($destTableFooterCell_destTableHeaderColumn_tableBodyCell$$8$$)));
      }
    }
    $colSpan_columnsOption$$ = this.options.columns;
    $destColIdx_destIdx$$ = $columnIdx$$52_columnsDestMapItem$$ < $destColIdx_destIdx$$ && !$afterColumn_columnOption$$ ? $destColIdx_destIdx$$ - 1 : $destColIdx_destIdx$$;
    $afterColumn_columnOption$$ = $colSpan_columnsOption$$.splice($columnIdx$$52_columnsDestMapItem$$, 1);
    $colSpan_columnsOption$$.splice($destColIdx_destIdx$$, 0, $afterColumn_columnOption$$[0]);
    $colSpan_columnsOption$$ = $colSpan_columnsOption$$.slice(0);
    this.$component$.option("columns", $colSpan_columnsOption$$, {_context:{$writeback$:!0, originalEvent:$columnDef_event$$348$$, $internalSet$:!0}});
    $columnDef_event$$348$$ = this.$component$.$_columnDefArray$.splice($columnIdx$$52_columnsDestMapItem$$, 1);
    this.$component$.$_columnDefArray$.splice($destColIdx_destIdx$$, 0, $columnDef_event$$348$$[0]);
    if (!this.$_columnsDestMap$) {
      for (this.$_columnsDestMap$ = [], $columns$$19_i$$281$$ = 0;$columns$$19_i$$281$$ < $colSpan_columnsOption$$.length;$columns$$19_i$$281$$++) {
        this.$_columnsDestMap$[$columns$$19_i$$281$$] = $columns$$19_i$$281$$;
      }
    }
    $columnIdx$$52_columnsDestMapItem$$ = this.$_columnsDestMap$.splice($columnIdx$$52_columnsDestMapItem$$, 1);
    this.$_columnsDestMap$.splice($destColIdx_destIdx$$, 0, $columnIdx$$52_columnsDestMapItem$$[0]);
    this.$component$.$_queueTask$(function() {
    });
    return this.$_columnsDestMap$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$refreshContextMenu$ = function $$oj$$14$$$$TableDomUtils$$$$refreshContextMenu$$() {
    var $self$$129$$ = this, $menuContainer$$2$$ = this.$_menuContainer$;
    $menuContainer$$2$$ && 0 < $menuContainer$$2$$.length && $menuContainer$$2$$.find("[data-oj-command]").each(function() {
      var $contextMenuLabel$$1$$ = $$$$14$$(this).children($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_A$);
      if (0 < $contextMenuLabel$$1$$.length) {
        var $command$$11$$ = $$$$14$$(this).attr("data-oj-command").split("-"), $command$$11$$ = $command$$11$$[$command$$11$$.length - 1], $commandString$$1$$;
        "sort" == $command$$11$$ ? $commandString$$1$$ = $self$$129$$.$component$.$getTranslatedString$("labelSort") : "sortAsc" == $command$$11$$ ? $commandString$$1$$ = $self$$129$$.$component$.$getTranslatedString$("labelSortAsc") : "sortDsc" == $command$$11$$ && ($commandString$$1$$ = $self$$129$$.$component$.$getTranslatedString$("labelSortDsc"));
        $contextMenuLabel$$1$$.contents().filter(function() {
          return 3 === this.nodeType;
        })[0].nodeValue = $commandString$$1$$;
      }
    });
  };
  $oj$$14$$.$TableDomUtils$.prototype.$refreshTableDimensions$ = function $$oj$$14$$$$TableDomUtils$$$$refreshTableDimensions$$($width$$35$$, $height$$35$$, $resetScrollTop$$2$$, $resetScrollLeft$$2$$) {
    this.$component$.$_unregisterResizeListener$();
    this.$_refreshTableDimensions$($width$$35$$, $height$$35$$, $resetScrollTop$$2$$, $resetScrollLeft$$2$$);
    this.$component$.$_registerResizeListener$();
    this.$component$.$_setCurrentRow$(this.options.currentRow, null);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$removeDragOverIndicatorColumn$ = function $$oj$$14$$$$TableDomUtils$$$$removeDragOverIndicatorColumn$$() {
    var $indicatorElements$$ = this.$getTable$().find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DRAG_INDICATOR_BEFORE_CLASS$ + ",." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DRAG_INDICATOR_AFTER_CLASS$), $i$$282$$ = 0;
    if ($indicatorElements$$ && 0 < $indicatorElements$$.length) {
      for (var $indicatorElementsCount$$ = $indicatorElements$$.length, $i$$282$$ = 0;$i$$282$$ < $indicatorElementsCount$$;$i$$282$$++) {
        $$$$14$$($indicatorElements$$[$i$$282$$]).removeClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DRAG_INDICATOR_BEFORE_CLASS$), $$$$14$$($indicatorElements$$[$i$$282$$]).removeClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DRAG_INDICATOR_AFTER_CLASS$);
      }
    }
  };
  $oj$$14$$.$TableDomUtils$.prototype.$removeDragOverIndicatorRow$ = function $$oj$$14$$$$TableDomUtils$$$$removeDragOverIndicatorRow$$() {
    var $indicatorRowAfterElements_tableBody$$16$$ = this.$getTableBody$(), $indicatorRowAfterElementsCount_indicatorRowBeforeElements_tableBodyRows$$15$$ = $indicatorRowAfterElements_tableBody$$16$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_DRAG_INDICATOR_BEFORE_CLASS$), $indicatorRowAfterElements_tableBody$$16$$ = $indicatorRowAfterElements_tableBody$$16$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_DRAG_INDICATOR_AFTER_CLASS$), $i$$283$$ = 
    0;
    if ($indicatorRowAfterElementsCount_indicatorRowBeforeElements_tableBodyRows$$15$$ && 0 < $indicatorRowAfterElementsCount_indicatorRowBeforeElements_tableBodyRows$$15$$.length) {
      for (var $indicatorRowBeforeElementsCount$$ = $indicatorRowAfterElementsCount_indicatorRowBeforeElements_tableBodyRows$$15$$.length, $i$$283$$ = 0;$i$$283$$ < $indicatorRowBeforeElementsCount$$;$i$$283$$++) {
        $$$$14$$($indicatorRowAfterElementsCount_indicatorRowBeforeElements_tableBodyRows$$15$$[$i$$283$$]).remove();
      }
    }
    if ($indicatorRowAfterElements_tableBody$$16$$ && 0 < $indicatorRowAfterElements_tableBody$$16$$.length) {
      for ($indicatorRowAfterElementsCount_indicatorRowBeforeElements_tableBodyRows$$15$$ = $indicatorRowAfterElements_tableBody$$16$$.length, $i$$283$$ = 0;$i$$283$$ < $indicatorRowAfterElementsCount_indicatorRowBeforeElements_tableBodyRows$$15$$;$i$$283$$++) {
        $$$$14$$($indicatorRowAfterElements_tableBody$$16$$[$i$$283$$]).remove();
      }
    }
    $indicatorRowAfterElementsCount_indicatorRowBeforeElements_tableBodyRows$$15$$ = this.$getTableBodyRows$();
    null != $indicatorRowAfterElementsCount_indicatorRowBeforeElements_tableBodyRows$$15$$ && 0 != $indicatorRowAfterElementsCount_indicatorRowBeforeElements_tableBodyRows$$15$$.length || this.$component$.$_showNoDataMessage$();
  };
  $oj$$14$$.$TableDomUtils$.prototype.$removeTableBodyRow$ = function $$oj$$14$$$$TableDomUtils$$$$removeTableBodyRow$$($rowIdx$$42_tableBodyRow$$25$$) {
    $rowIdx$$42_tableBodyRow$$25$$ = this.$getTableBodyRow$($rowIdx$$42_tableBodyRow$$25$$);
    null != $rowIdx$$42_tableBodyRow$$25$$ && ($oj$$14$$.Components.$subtreeDetached$($rowIdx$$42_tableBodyRow$$25$$[0]), $rowIdx$$42_tableBodyRow$$25$$.remove(), this.$clearCachedDomRowData$());
  };
  $oj$$14$$.$TableDomUtils$.prototype.$removeTableBodyRowTouchSelectionAffordance$ = function $$oj$$14$$$$TableDomUtils$$$$removeTableBodyRowTouchSelectionAffordance$$() {
    var $touchAffordance$$ = this.$getTableContainer$().children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_TOUCH_SELECTIOM_AFFORDANCE_TOUCH_AREA_CLASS$);
    if (null != $touchAffordance$$ && 0 < $touchAffordance$$.length) {
      var $i$$284$$;
      for ($i$$284$$ = 0;$i$$284$$ < $touchAffordance$$.length;$i$$284$$++) {
        $touchAffordance$$[$i$$284$$].remove();
      }
    }
  };
  $oj$$14$$.$TableDomUtils$.prototype.$removeTableHeaderColumnDragImage$ = function $$oj$$14$$$$TableDomUtils$$$$removeTableHeaderColumnDragImage$$() {
    var $headerDragImage$$ = this.$getTableContainer$().find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DRAG_IMAGE$);
    if ($headerDragImage$$ && 0 < $headerDragImage$$.length) {
      var $i$$285$$, $headerDragImageCount$$ = $headerDragImage$$.length;
      for ($i$$285$$ = 0;$i$$285$$ < $headerDragImageCount$$;$i$$285$$++) {
        $$$$14$$($headerDragImage$$[$i$$285$$]).remove();
      }
    }
  };
  $oj$$14$$.$TableDomUtils$.prototype.$setScrollLeft$ = function $$oj$$14$$$$TableDomUtils$$$$setScrollLeft$$($element$$172$$, $scrollLeft$$14$$) {
    $element$$172$$ = $$$$14$$($element$$172$$);
    "rtl" === this.$component$.$_GetReadingDirection$() && ($scrollLeft$$14$$ = Math.abs($scrollLeft$$14$$), this.$_isWebkit$() ? $scrollLeft$$14$$ = $element$$172$$[0].scrollWidth - $element$$172$$[0].clientWidth - $scrollLeft$$14$$ : this.$_isFF$() && ($scrollLeft$$14$$ *= -1));
    $element$$172$$[0].scrollLeft != $scrollLeft$$14$$ && ($element$$172$$[0].scrollLeft = $scrollLeft$$14$$);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$setTableBodyCellAttributes$ = function $$oj$$14$$$$TableDomUtils$$$$setTableBodyCellAttributes$$($headers$$8_rowIdx$$43_rowKeyStr$$1$$, $rowKey$$25$$, $cellRowHeaderId$$1_rowHashCode$$3_rowKeyStrHashCode$$1$$, $column$$18_columnIdx$$53$$, $tableBodyCell$$9$$) {
    var $accessibility$$1$$ = this.options.accessibility;
    $column$$18_columnIdx$$53$$ = this.$component$.$_getColumnDefs$()[$column$$18_columnIdx$$53$$];
    var $rowHeaderColumnId$$1$$ = null, $isTableHeaderless$$2$$ = null == this.$getTableHeader$() ? !0 : !1, $rowHeaderColumnId$$1$$ = null != $accessibility$$1$$ && null != $accessibility$$1$$.rowHeader ? $accessibility$$1$$.rowHeader : this.$component$.$_getColumnDefs$()[0].id;
    $headers$$8_rowIdx$$43_rowKeyStr$$1$$ = null != $rowKey$$25$$ ? $rowKey$$25$$.toString() : $headers$$8_rowIdx$$43_rowKeyStr$$1$$.toString();
    $cellRowHeaderId$$1_rowHashCode$$3_rowKeyStrHashCode$$1$$ = null == $cellRowHeaderId$$1_rowHashCode$$3_rowKeyStrHashCode$$1$$ ? this.$hashCode$($headers$$8_rowIdx$$43_rowKeyStr$$1$$) : $cellRowHeaderId$$1_rowHashCode$$3_rowKeyStrHashCode$$1$$;
    $cellRowHeaderId$$1_rowHashCode$$3_rowKeyStrHashCode$$1$$ = this.$getTableId$() + ":" + $rowHeaderColumnId$$1$$ + "_" + $cellRowHeaderId$$1_rowHashCode$$3_rowKeyStrHashCode$$1$$;
    $headers$$8_rowIdx$$43_rowKeyStr$$1$$ = this.$getTableId$() + ":" + $column$$18_columnIdx$$53$$.id;
    $rowHeaderColumnId$$1$$ == $column$$18_columnIdx$$53$$.id ? ($tableBodyCell$$9$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_ID$, $cellRowHeaderId$$1_rowHashCode$$3_rowKeyStrHashCode$$1$$), $isTableHeaderless$$2$$ && ($headers$$8_rowIdx$$43_rowKeyStr$$1$$ = "")) : $headers$$8_rowIdx$$43_rowKeyStr$$1$$ = $isTableHeaderless$$2$$ ? $cellRowHeaderId$$1_rowHashCode$$3_rowKeyStrHashCode$$1$$ : $headers$$8_rowIdx$$43_rowKeyStr$$1$$ + " " + $cellRowHeaderId$$1_rowHashCode$$3_rowKeyStrHashCode$$1$$;
    $tableBodyCell$$9$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_HEADERS$) || $tableBodyCell$$9$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_HEADERS$, $headers$$8_rowIdx$$43_rowKeyStr$$1$$);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$setTableBodyRowAttributes$ = function $$oj$$14$$$$TableDomUtils$$$$setTableBodyRowAttributes$$($row$$57$$, $tableBodyRow$$26$$) {
    $tableBodyRow$$26$$.data("rowKey", $row$$57$$.key);
    $tableBodyRow$$26$$.data("rowData", JSON.stringify($row$$57$$));
  };
  $oj$$14$$.$TableDomUtils$.prototype.$setTableHeaderColumnAttributes$ = function $$oj$$14$$$$TableDomUtils$$$$setTableHeaderColumnAttributes$$($columnIdx$$54$$, $tableHeaderColumn$$14$$) {
    var $column$$19$$ = this.$component$.$_getColumnDefs$()[$columnIdx$$54$$];
    $tableHeaderColumn$$14$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_ID$) || $tableHeaderColumn$$14$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_ID$, this.$getTableId$() + ":" + $column$$19$$.id);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$setTableColumnCellsClass$ = function $$oj$$14$$$$TableDomUtils$$$$setTableColumnCellsClass$$($columnIdx$$55_tableBodyCells$$6$$, $add$$7$$, $styleClass$$5$$) {
    var $i$$286_tableBodyRows$$16$$ = this.$getTableBodyRows$();
    if (null != $i$$286_tableBodyRows$$16$$ && 0 < $i$$286_tableBodyRows$$16$$.length) {
      if (null === $columnIdx$$55_tableBodyCells$$6$$) {
        if ($columnIdx$$55_tableBodyCells$$6$$ = null, $columnIdx$$55_tableBodyCells$$6$$ = $add$$7$$ ? this.$getTableBody$().find("[td]") : this.$getTableBody$().find("." + $styleClass$$5$$), null != $columnIdx$$55_tableBodyCells$$6$$ && 0 < $columnIdx$$55_tableBodyCells$$6$$.length) {
          for (var $tableBodyCell$$10_tableBodyCellsCount$$3$$ = $columnIdx$$55_tableBodyCells$$6$$.length, $i$$286_tableBodyRows$$16$$ = 0;$i$$286_tableBodyRows$$16$$ < $tableBodyCell$$10_tableBodyCellsCount$$3$$;$i$$286_tableBodyRows$$16$$++) {
            $add$$7$$ ? $$$$14$$($columnIdx$$55_tableBodyCells$$6$$[$i$$286_tableBodyRows$$16$$]).addClass($styleClass$$5$$) : $$$$14$$($columnIdx$$55_tableBodyCells$$6$$[$i$$286_tableBodyRows$$16$$]).removeClass($styleClass$$5$$);
          }
        }
      } else {
        for (var $tableBodyRowsCount$$5$$ = $i$$286_tableBodyRows$$16$$.length, $i$$286_tableBodyRows$$16$$ = 0;$i$$286_tableBodyRows$$16$$ < $tableBodyRowsCount$$5$$;$i$$286_tableBodyRows$$16$$++) {
          $tableBodyCell$$10_tableBodyCellsCount$$3$$ = this.$getTableBodyCell$($i$$286_tableBodyRows$$16$$, $columnIdx$$55_tableBodyCells$$6$$, null), $add$$7$$ ? $$$$14$$($tableBodyCell$$10_tableBodyCellsCount$$3$$).addClass($styleClass$$5$$) : $$$$14$$($tableBodyCell$$10_tableBodyCellsCount$$3$$).removeClass($styleClass$$5$$);
        }
      }
    }
  };
  $oj$$14$$.$TableDomUtils$.prototype.$setTableInlineMessage$ = function $$oj$$14$$$$TableDomUtils$$$$setTableInlineMessage$$($summary$$23$$, $detail$$25$$, $severityLevel$$3$$) {
    var $inlineMessage$$4$$ = this.$getTableInlineMessage$();
    $inlineMessage$$4$$.empty();
    $inlineMessage$$4$$.append($oj$$14$$.$PopupMessagingStrategyUtils$.$buildMessageHtml$(document, $summary$$23$$, $detail$$25$$, $severityLevel$$3$$, null));
  };
  $oj$$14$$.$TableDomUtils$.prototype.$styleInitialTable$ = function $$oj$$14$$$$TableDomUtils$$$$styleInitialTable$$() {
    var $table$$14$$ = this.$getTable$(), $tableContainer$$20$$ = this.$getTableContainer$(), $tableHeader$$6$$ = $table$$14$$.children($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_THEAD$), $tableHeader$$6$$ = 0 < $tableHeader$$6$$.length ? $$$$14$$($tableHeader$$6$$[0]) : null, $tableFooter$$6$$ = $table$$14$$.children($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_TFOOT$), $tableFooter$$6$$ = 0 < $tableFooter$$6$$.length ? $$$$14$$($tableFooter$$6$$[0]) : null, $tableBody$$17$$ = $table$$14$$.children($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_TBODY$), 
    $tableBody$$17$$ = 0 < $tableBody$$17$$.length ? $$$$14$$($tableBody$$17$$[0]) : null;
    $table$$14$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_TABINDEX$, "0");
    this.$component$._focusable($table$$14$$);
    this.$component$._focusable($tableContainer$$20$$);
    this.$styleTableHeader$($tableHeader$$6$$);
    this.$styleTableFooter$($tableFooter$$6$$);
    this.$styleTableBody$($tableBody$$17$$);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$styleTableBody$ = function $$oj$$14$$$$TableDomUtils$$$$styleTableBody$$($tableBody$$18$$) {
    $tableBody$$18$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_BODY_CLASS$);
    $tableBody$$18$$.attr($oj$$14$$.Components.$_OJ_CONTAINER_ATTR$, this.$component$.widgetName);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$styleTableBodyCell$ = function $$oj$$14$$$$TableDomUtils$$$$styleTableBodyCell$$($column$$20_columnIdx$$56$$, $tableBodyCell$$11$$, $isNew$$3$$) {
    $column$$20_columnIdx$$56$$ = this.$component$.$_getColumnDefs$()[$column$$20_columnIdx$$56$$];
    if ($isNew$$3$$ || !$tableBodyCell$$11$$.hasClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_CLASS$)) {
      $tableBodyCell$$11$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_CLASS$), $tableBodyCell$$11$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATE_CELL_FORM_CONTROL_CLASS$), null == $column$$20_columnIdx$$56$$.style || !$isNew$$3$$ && $tableBodyCell$$11$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_STYLE$) == $column$$20_columnIdx$$56$$.style || $tableBodyCell$$11$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_STYLE$, $column$$20_columnIdx$$56$$.style), null == 
      $column$$20_columnIdx$$56$$.className || !$isNew$$3$$ && $tableBodyCell$$11$$.hasClass($column$$20_columnIdx$$56$$.className) || $tableBodyCell$$11$$.addClass($column$$20_columnIdx$$56$$.className);
    }
    this.$_isVerticalGridEnabled$() && (!$isNew$$3$$ && $tableBodyCell$$11$$.hasClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_VGRID_LINES_CLASS$) || $tableBodyCell$$11$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_VGRID_LINES_CLASS$));
  };
  $oj$$14$$.$TableDomUtils$.prototype.$styleTableBodyRow$ = function $$oj$$14$$$$TableDomUtils$$$$styleTableBodyRow$$($tableBodyRow$$27$$, $isNew$$4$$) {
    !$isNew$$4$$ && $tableBodyRow$$27$$.hasClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_CLASS$) || $tableBodyRow$$27$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_CLASS$);
    this.$_isHorizontalGridEnabled$() && (!$isNew$$4$$ && $tableBodyRow$$27$$.hasClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_HGRID_LINES_CLASS$) || $tableBodyRow$$27$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_HGRID_LINES_CLASS$));
  };
  $oj$$14$$.$TableDomUtils$.prototype.$styleTableContainer$ = function $$oj$$14$$$$TableDomUtils$$$$styleTableContainer$$($tableContainer$$21$$) {
    $tableContainer$$21$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_CLASS$);
    $tableContainer$$21$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_CONTAINER_CLASS$);
    $tableContainer$$21$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_WIDGET$);
    this.options.display == $oj$$14$$.$TableDomUtils$.$_OPTION_DISPLAY$.$_GRID$ ? $tableContainer$$21$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_COMPACT_CLASS$) : $tableContainer$$21$$.removeClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_COMPACT_CLASS$);
    var $editMode$$6$$ = this.options.editMode;
    null != $editMode$$6$$ && $editMode$$6$$ != this.$component$.$_OPTION_EDIT_MODE$.$_NONE$ ? $tableContainer$$21$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_EDIT_CLASS$) : $tableContainer$$21$$.removeClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_EDIT_CLASS$);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$styleTableFooter$ = function $$oj$$14$$$$TableDomUtils$$$$styleTableFooter$$($tableFooter$$7$$) {
    $tableFooter$$7$$ && ($tableFooter$$7$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_CLASS$), $$$$14$$($tableFooter$$7$$.children($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_TR$)[0]).addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_ROW_CLASS$));
  };
  $oj$$14$$.$TableDomUtils$.prototype.$styleTableFooterCell$ = function $$oj$$14$$$$TableDomUtils$$$$styleTableFooterCell$$($columnIdx$$57$$, $tableFooterCell$$5$$) {
    this.$component$.$_getColumnDefs$();
    var $column$$21$$ = this.$component$.$_getColumnDefs$()[$columnIdx$$57$$];
    $tableFooterCell$$5$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_STYLE$, $column$$21$$.footerStyle);
    $tableFooterCell$$5$$.hasClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_CELL_CLASS$) || $tableFooterCell$$5$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_CELL_CLASS$);
    this.$_isVerticalGridEnabled$() && !$tableFooterCell$$5$$.hasClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_VGRID_LINES_CLASS$) && $tableFooterCell$$5$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_VGRID_LINES_CLASS$);
    $column$$21$$.footerClassName && $tableFooterCell$$5$$.addClass($column$$21$$.footerClassName);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$styleTableHeader$ = function $$oj$$14$$$$TableDomUtils$$$$styleTableHeader$$($tableHeader$$7_tableHeaderRow$$6$$) {
    $tableHeader$$7_tableHeaderRow$$6$$ && ($tableHeader$$7_tableHeaderRow$$6$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_HEADER_CLASS$), $tableHeader$$7_tableHeaderRow$$6$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_DISPLAY$, "table-header-group"), $tableHeader$$7_tableHeaderRow$$6$$ = $$$$14$$($tableHeader$$7_tableHeaderRow$$6$$.children($oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$.$_TR$)[0]), $tableHeader$$7_tableHeaderRow$$6$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_HEADER_ROW_CLASS$), 
    $tableHeader$$7_tableHeaderRow$$6$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_POSITION$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_RELATIVE$));
  };
  $oj$$14$$.$TableDomUtils$.prototype.$styleTableHeaderColumn$ = function $$oj$$14$$$$TableDomUtils$$$$styleTableHeaderColumn$$($column$$22_columnIdx$$58$$, $tableHeaderColumn$$15$$, $isNew$$5$$) {
    $column$$22_columnIdx$$58$$ = this.$component$.$_getColumnDefs$()[$column$$22_columnIdx$$58$$];
    if ($isNew$$5$$ || !$tableHeaderColumn$$15$$.hasClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_CELL_CLASS$)) {
      $tableHeaderColumn$$15$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_CELL_CLASS$), this.$_isVerticalGridEnabled$() && (!$isNew$$5$$ && $tableHeaderColumn$$15$$.hasClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_VGRID_LINES_CLASS$) || $tableHeaderColumn$$15$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_VGRID_LINES_CLASS$)), null == $column$$22_columnIdx$$58$$.headerStyle || !$isNew$$5$$ && $tableHeaderColumn$$15$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_STYLE$) == 
      $column$$22_columnIdx$$58$$.headerStyle || $tableHeaderColumn$$15$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_STYLE$, $column$$22_columnIdx$$58$$.headerStyle), null == $column$$22_columnIdx$$58$$.headerClassName || !$isNew$$5$$ && $tableHeaderColumn$$15$$.hasClass($column$$22_columnIdx$$58$$.headerClassName) || $tableHeaderColumn$$15$$.addClass($column$$22_columnIdx$$58$$.headerClassName);
    }
  };
  $oj$$14$$.$TableDomUtils$.prototype.$_getColspanLogicalElements$ = function $$oj$$14$$$$TableDomUtils$$$$_getColspanLogicalElements$$($elementArray$$) {
    var $i$$287$$, $j$$46$$, $indexedElementArrayNum$$ = 0, $indexedElementArray$$ = [], $elementArrayCount$$ = $elementArray$$.length;
    for ($i$$287$$ = 0;$i$$287$$ < $elementArrayCount$$;$i$$287$$++) {
      var $colSpan$$1$$ = $$$$14$$($elementArray$$[$i$$287$$]).attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_COLSPAN$);
      if (null != $colSpan$$1$$) {
        $colSpan$$1$$ = parseInt($colSpan$$1$$, 10);
        for ($j$$46$$ = 0;$j$$46$$ < $colSpan$$1$$;$j$$46$$++) {
          $indexedElementArray$$[$indexedElementArrayNum$$ + $j$$46$$] = $elementArray$$[$i$$287$$];
        }
        $indexedElementArrayNum$$ += $colSpan$$1$$;
      } else {
        $indexedElementArray$$[$indexedElementArrayNum$$++] = $elementArray$$[$i$$287$$];
      }
    }
    return $$$$14$$($indexedElementArray$$);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$_isHorizontalGridEnabled$ = function $$oj$$14$$$$TableDomUtils$$$$_isHorizontalGridEnabled$$() {
    return this.options.horizontalGridVisible == $oj$$14$$.$TableDomUtils$.$_OPTION_ENABLED$ || this.options.horizontalGridVisible == $oj$$14$$.$TableDomUtils$.$_OPTION_AUTO$ ? !0 : !1;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$_isVerticalGridEnabled$ = function $$oj$$14$$$$TableDomUtils$$$$_isVerticalGridEnabled$$() {
    return this.options.verticalGridVisible == $oj$$14$$.$TableDomUtils$.$_OPTION_ENABLED$ || this.options.verticalGridVisible == $oj$$14$$.$TableDomUtils$.$_OPTION_AUTO$ && this.options.display == $oj$$14$$.$TableDomUtils$.$_OPTION_DISPLAY$.$_GRID$ ? !0 : !1;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$_isFF$ = function $$oj$$14$$$$TableDomUtils$$$$_isFF$$() {
    return-1 < navigator.userAgent.toLowerCase().indexOf("firefox") ? !0 : !1;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$_isIE$ = function $$oj$$14$$$$TableDomUtils$$$$_isIE$$() {
    if ("undefined" == typeof this.$_browserIsIE$) {
      var $resultArray_userAgent$$5$$ = navigator.userAgent;
      "Microsoft Internet Explorer" == navigator.appName ? ($resultArray_userAgent$$5$$ = /MSIE ([0-9]{1,}[.0-9]{0,})/.exec($resultArray_userAgent$$5$$), null != $resultArray_userAgent$$5$$ && (this.$_browserIsIE$ = parseFloat($resultArray_userAgent$$5$$[1]))) : 0 <= $resultArray_userAgent$$5$$.indexOf("Trident") ? this.$_browserIsIE$ = 11 : this.$_browserIsIE$ = null;
    }
    return this.$_browserIsIE$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$_isWebkit$ = function $$oj$$14$$$$TableDomUtils$$$$_isWebkit$$() {
    if ("undefined" == typeof this.$_browserIsWebkit$) {
      var $ua$$ = navigator.userAgent.toLowerCase();
      this.$_browserIsWebkit$ = /webkit/.test($ua$$) && !/edge/.test($ua$$);
    }
    return this.$_browserIsWebkit$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$_refreshTableDimensions$ = function $$oj$$14$$$$TableDomUtils$$$$_refreshTableDimensions$$($scrollbarWidth$$2_tableContainerScrollbarWidth_width$$36$$, $height$$36_tableBodyRows$$17_tableHeaderWidth_tableWidth$$, $resetScrollTop$$3$$, $resetScrollLeft$$3$$) {
    var $caption_table$$15_tableHeaderHeight$$ = this.$getTable$(), $tableDivScroller$$2_tableHeader$$8$$ = this.$getTableHeader$(), $tableFooter$$8$$ = this.$getTableFooter$(), $tableBodyHeight_tableFooterRow$$7$$ = this.$getTableFooterRow$(), $tableFooterHeight_tableHeaderRow$$7$$ = this.$getTableHeaderRow$(), $tableContainer$$22$$ = this.$getTableContainer$(), $tableBody$$19$$ = this.$getTableBody$(), $scrollTop$$11$$ = null, $scrollLeft$$15$$ = null;
    if (null != this.$getScroller$()) {
      var $maxScrollTop_tableContainerScrollableState$$ = this.$getScroller$()[0].scrollHeight - this.$getScroller$()[0].clientHeight, $captionHeight_maxScrollLeft$$2$$ = this.$getScroller$()[0].scrollWidth - this.$getScroller$()[0].clientWidth;
      0 < $maxScrollTop_tableContainerScrollableState$$ && ($scrollTop$$11$$ = this.$getScroller$()[0].scrollTop);
      0 < $captionHeight_maxScrollLeft$$2$$ && ($scrollLeft$$15$$ = this.$getScrollLeft$(this.$getScroller$()[0]));
    }
    this.$_removeTableDimensionsStyling$();
    this.$styleTableContainer$($tableContainer$$22$$);
    $maxScrollTop_tableContainerScrollableState$$ = this.$isTableContainerScrollable$();
    this.$_tableHeightConstrained$ = 1 === $maxScrollTop_tableContainerScrollableState$$[0] ? !0 : !1;
    this.$_tableWidthConstrained$ = 1 === $maxScrollTop_tableContainerScrollableState$$[1] ? !0 : !1;
    if (null != $tableBody$$19$$) {
      if (this.$_tableHeightConstrained$ || this.$_tableWidthConstrained$) {
        this.$_tableDimensions$ || (this.$_tableDimensions$ = {}), 0 < $scrollbarWidth$$2_tableContainerScrollbarWidth_width$$36$$ || 0 < $height$$36_tableBodyRows$$17_tableHeaderWidth_tableWidth$$ ? (0 < $scrollbarWidth$$2_tableContainerScrollbarWidth_width$$36$$ && this.$_tableWidthConstrained$ && (this.$_tableDimensions$[$oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_WIDTH$] = $scrollbarWidth$$2_tableContainerScrollbarWidth_width$$36$$), 0 < $height$$36_tableBodyRows$$17_tableHeaderWidth_tableWidth$$ && 
        this.$_tableHeightConstrained$ && (this.$_tableDimensions$[$oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_HEIGHT$] = $height$$36_tableBodyRows$$17_tableHeaderWidth_tableWidth$$)) : (this.$_tableDimensions$[$oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_HEIGHT$] = this.$_tableHeightConstrained$ ? $tableContainer$$22$$[0].offsetHeight : 0, this.$_tableDimensions$[$oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_WIDTH$] = this.$_tableWidthConstrained$ ? $tableContainer$$22$$[0].offsetWidth : 0), this.$_tableBorderWidth$ || 
        (this.$_tableBorderWidth$ = $tableContainer$$22$$.outerWidth() - $tableContainer$$22$$.innerWidth()), this.$_tableBorderHeight$ || (this.$_tableBorderHeight$ = $tableContainer$$22$$.outerHeight() - $tableContainer$$22$$.innerHeight()), $scrollbarWidth$$2_tableContainerScrollbarWidth_width$$36$$ = 0, this.$_tableHeightConstrained$ && !this.$_tableWidthConstrained$ && ($tableContainer$$22$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_OVERFLOW$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_AUTO$), $scrollbarWidth$$2_tableContainerScrollbarWidth_width$$36$$ = 
        $tableContainer$$22$$.get(0).offsetWidth - $tableContainer$$22$$.get(0).clientWidth, 0 < this.$_tableDimensions$[$oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_WIDTH$] ? $caption_table$$15_tableHeaderHeight$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_WIDTH$, $tableContainer$$22$$.get(0).clientWidth + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$) : ($caption_table$$15_tableHeaderHeight$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_WIDTH$, $tableContainer$$22$$.get(0).scrollWidth + $scrollbarWidth$$2_tableContainerScrollbarWidth_width$$36$$ + 
        $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$), $maxScrollTop_tableContainerScrollableState$$ = this.$isTableContainerScrollable$(), 1 === $maxScrollTop_tableContainerScrollableState$$[1] && $caption_table$$15_tableHeaderHeight$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_WIDTH$, $tableContainer$$22$$.get(0).clientWidth + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$)), $tableContainer$$22$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_OVERFLOW$, "")), $height$$36_tableBodyRows$$17_tableHeaderWidth_tableWidth$$ = 
        $caption_table$$15_tableHeaderHeight$$.width(), this.$_setColumnWidths$(), $captionHeight_maxScrollLeft$$2$$ = 0, $caption_table$$15_tableHeaderHeight$$ = $caption_table$$15_tableHeaderHeight$$.children("caption"), null != $caption_table$$15_tableHeaderHeight$$ && 0 < $caption_table$$15_tableHeaderHeight$$.length && ($captionHeight_maxScrollLeft$$2$$ = $$$$14$$($caption_table$$15_tableHeaderHeight$$[0]).outerHeight(), $caption_table$$15_tableHeaderHeight$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_DISPLAY$, 
        $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_INLINE$), null != $tableDivScroller$$2_tableHeader$$8$$ && $tableDivScroller$$2_tableHeader$$8$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_BORDER_TOP$, $tableContainer$$22$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_BORDER_TOP$).toString())), $caption_table$$15_tableHeaderHeight$$ = 0, null != $tableDivScroller$$2_tableHeader$$8$$ && ($tableDivScroller$$2_tableHeader$$8$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_DISPLAY$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_BLOCK$), 
        this.$isDivScroller$() ? ($tableDivScroller$$2_tableHeader$$8$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_POSITION$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_ABSOLUTE$), $tableDivScroller$$2_tableHeader$$8$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_TOP$, "0px")) : $tableDivScroller$$2_tableHeader$$8$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_POSITION$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_RELATIVE$), $tableFooterHeight_tableHeaderRow$$7$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_DISPLAY$, 
        $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_BLOCK$), $tableFooterHeight_tableHeaderRow$$7$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_POSITION$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_RELATIVE$), $caption_table$$15_tableHeaderHeight$$ = $tableDivScroller$$2_tableHeader$$8$$.outerHeight()), this.$isDivScroller$() && $tableContainer$$22$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_PADDING_TOP$, $caption_table$$15_tableHeaderHeight$$ + $captionHeight_maxScrollLeft$$2$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$), 
        $tableFooterHeight_tableHeaderRow$$7$$ = 0, null != $tableFooter$$8$$ && (this.$isDivScroller$() ? ($tableFooter$$8$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_POSITION$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_ABSOLUTE$), $tableDivScroller$$2_tableHeader$$8$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_BOTTOM$, "0px")) : $tableFooter$$8$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_POSITION$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_RELATIVE$), $tableFooter$$8$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_DISPLAY$, 
        $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_BLOCK$), $tableBodyHeight_tableFooterRow$$7$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_DISPLAY$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_BLOCK$), $tableBodyHeight_tableFooterRow$$7$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_POSITION$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_RELATIVE$)), $tableBody$$19$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_DISPLAY$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_BLOCK$), $tableBodyHeight_tableFooterRow$$7$$ = 0, this.$isDivScroller$() || 
        ($tableBody$$19$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_OVERFLOW_Y$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_AUTO$), $tableBody$$19$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_POSITION$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_RELATIVE$), this.$_tableWidthConstrained$ ? $tableBody$$19$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_WIDTH$, this.$_tableDimensions$[$oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_WIDTH$] - this.$_tableBorderWidth$) : 0 < $scrollbarWidth$$2_tableContainerScrollbarWidth_width$$36$$ && 
        $tableBody$$19$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_WIDTH$, $height$$36_tableBodyRows$$17_tableHeaderWidth_tableWidth$$ - this.$_tableBorderWidth$ + $scrollbarWidth$$2_tableContainerScrollbarWidth_width$$36$$), $tableBody$$19$$.width(), null != $tableFooter$$8$$ && ($tableFooterHeight_tableHeaderRow$$7$$ = $tableFooter$$8$$.outerHeight(), $tableBody$$19$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_TOP$, -1 * $tableFooterHeight_tableHeaderRow$$7$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$)), 
        this.$_tableHeightConstrained$ ? ($tableBodyHeight_tableFooterRow$$7$$ = this.$_tableDimensions$[$oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_HEIGHT$] - $caption_table$$15_tableHeaderHeight$$ - $tableFooterHeight_tableHeaderRow$$7$$ - $captionHeight_maxScrollLeft$$2$$ - this.$_tableBorderHeight$, 0 < $tableBodyHeight_tableFooterRow$$7$$ && ($tableBody$$19$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_HEIGHT$, $tableBodyHeight_tableFooterRow$$7$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$), $tableBody$$19$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_MIN_HEIGHT$, 
        $tableBodyHeight_tableFooterRow$$7$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$))) : $tableBodyHeight_tableFooterRow$$7$$ = $tableBody$$19$$.outerHeight(), $scrollbarWidth$$2_tableContainerScrollbarWidth_width$$36$$ = this.$getScrollbarWidth$(), this.$_tableWidthConstrained$ ? ($height$$36_tableBodyRows$$17_tableHeaderWidth_tableWidth$$ = this.$getTableBodyRows$(), null != $height$$36_tableBodyRows$$17_tableHeaderWidth_tableWidth$$ && 0 < $height$$36_tableBodyRows$$17_tableHeaderWidth_tableWidth$$.length ? 
        ($tableBody$$19$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_OVERFLOW_X$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_AUTO$), $tableContainer$$22$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_OVERFLOW_X$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_HIDDEN$), $tableContainer$$22$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_OVERFLOW_Y$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_HIDDEN$), null != $tableDivScroller$$2_tableHeader$$8$$ && ($height$$36_tableBodyRows$$17_tableHeaderWidth_tableWidth$$ = this.$_tableDimensions$[$oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_WIDTH$] - 
        this.$_tableBorderWidth$, 0 < $height$$36_tableBodyRows$$17_tableHeaderWidth_tableWidth$$ && (0 < $scrollbarWidth$$2_tableContainerScrollbarWidth_width$$36$$ ? $tableDivScroller$$2_tableHeader$$8$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_WIDTH$, $height$$36_tableBodyRows$$17_tableHeaderWidth_tableWidth$$ - $scrollbarWidth$$2_tableContainerScrollbarWidth_width$$36$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$) : $tableDivScroller$$2_tableHeader$$8$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_WIDTH$, 
        $height$$36_tableBodyRows$$17_tableHeaderWidth_tableWidth$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$)))) : ($tableBody$$19$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_OVERFLOW_X$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_HIDDEN$), $tableContainer$$22$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_OVERFLOW_X$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_AUTO$), $tableContainer$$22$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_OVERFLOW_Y$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_HIDDEN$))) : $tableBody$$19$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_OVERFLOW_X$, 
        $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_HIDDEN$)), this.$isDivScroller$() && ($tableDivScroller$$2_tableHeader$$8$$ = this.$getTableDivScroller$(), $tableDivScroller$$2_tableHeader$$8$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_OVERFLOW$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_AUTO$), this.$_tableWidthConstrained$ && $tableDivScroller$$2_tableHeader$$8$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_WIDTH$, this.$_tableDimensions$[$oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_WIDTH$]), this.$_tableHeightConstrained$ && 
        $tableDivScroller$$2_tableHeader$$8$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_HEIGHT$, this.$_tableDimensions$[$oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_HEIGHT$] - $caption_table$$15_tableHeaderHeight$$ - $tableFooterHeight_tableHeaderRow$$7$$), $tableBody$$19$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_FLOAT$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_LEFT$), $tableContainer$$22$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_OVERFLOW$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_HIDDEN$)), null != 
        $tableFooter$$8$$ && (this.$isDivScroller$() || $tableFooter$$8$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_TOP$, $tableBodyHeight_tableFooterRow$$7$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$));
      }
      this.$_setHeaderColumnOverflowWidths$();
      this.$_removeTableBodyRowBottomBorder$(0 > $maxScrollTop_tableContainerScrollableState$$[0]);
      this.$refreshTableStatusPosition$();
      null == $scrollTop$$11$$ || $resetScrollTop$$3$$ ? $resetScrollTop$$3$$ && (this.$getScroller$()[0].scrollTop = 0, this.$getScroller$().scroll()) : ($maxScrollTop_tableContainerScrollableState$$ = this.$getScroller$()[0].scrollHeight - this.$getScroller$()[0].clientHeight, $scrollTop$$11$$ = $scrollTop$$11$$ > $maxScrollTop_tableContainerScrollableState$$ ? $maxScrollTop_tableContainerScrollableState$$ : $scrollTop$$11$$, this.$component$.$_isLoadMoreOnScroll$() && $maxScrollTop_tableContainerScrollableState$$ == 
      $scrollTop$$11$$ && $scrollTop$$11$$--, this.$getScroller$()[0].scrollTop = $scrollTop$$11$$, this.$getScroller$().scroll());
      null == $scrollLeft$$15$$ || $resetScrollLeft$$3$$ ? $resetScrollLeft$$3$$ && (this.$setScrollLeft$(this.$getScroller$()[0], 0), this.$getScroller$().scroll()) : (this.$setScrollLeft$(this.$getScroller$()[0], $scrollLeft$$15$$), this.$getScroller$().scroll());
    }
  };
  $oj$$14$$.$TableDomUtils$.prototype.$refreshTableStatusPosition$ = function $$oj$$14$$$$TableDomUtils$$$$refreshTableStatusPosition$$() {
    var $isRTL$$4_tableContainer$$23$$ = this.$getTableContainer$(), $tableBody$$20_tableStatusMessageText$$ = this.$getTableBody$(), $msgTextOptions_tableStatusMessage$$2$$ = this.$getTableStatusMessage$(), $options$$257_overTableElement$$ = $isRTL$$4_tableContainer$$23$$;
    0 < $tableBody$$20_tableStatusMessageText$$.height() && ($options$$257_overTableElement$$ = $tableBody$$20_tableStatusMessageText$$);
    $msgTextOptions_tableStatusMessage$$2$$ && $msgTextOptions_tableStatusMessage$$2$$[0].offsetParent && ($msgTextOptions_tableStatusMessage$$2$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_HEIGHT$, $tableBody$$20_tableStatusMessageText$$.height() + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$), $msgTextOptions_tableStatusMessage$$2$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_WIDTH$, $tableBody$$20_tableStatusMessageText$$.width() + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$), $tableBody$$20_tableStatusMessageText$$ = 
    $$$$14$$($msgTextOptions_tableStatusMessage$$2$$[0].children[0]), $isRTL$$4_tableContainer$$23$$ = "rtl" === this.$component$.$_GetReadingDirection$(), $options$$257_overTableElement$$ = {my:"center", at:"center", collision:"none", of:$options$$257_overTableElement$$}, $options$$257_overTableElement$$ = $oj$$14$$.$PositionUtils$.$normalizeHorizontalAlignment$($options$$257_overTableElement$$, $isRTL$$4_tableContainer$$23$$), $msgTextOptions_tableStatusMessage$$2$$.position($options$$257_overTableElement$$), 
    $msgTextOptions_tableStatusMessage$$2$$ = {my:"center", at:"center", collision:"none", of:$msgTextOptions_tableStatusMessage$$2$$}, $msgTextOptions_tableStatusMessage$$2$$ = $oj$$14$$.$PositionUtils$.$normalizeHorizontalAlignment$($msgTextOptions_tableStatusMessage$$2$$, $isRTL$$4_tableContainer$$23$$), $tableBody$$20_tableStatusMessageText$$.position($msgTextOptions_tableStatusMessage$$2$$));
  };
  $oj$$14$$.$TableDomUtils$.prototype.$_removeHeaderColumnAndCellColumnWidths$ = function $$oj$$14$$$$TableDomUtils$$$$_removeHeaderColumnAndCellColumnWidths$$() {
    var $i$$288_tableBodyRows$$18$$, $headerColumn$$9_tableBodyCell$$12$$, $columnCount$$7$$ = this.$component$.$_getColumnDefs$().length;
    for ($i$$288_tableBodyRows$$18$$ = 0;$i$$288_tableBodyRows$$18$$ < $columnCount$$7$$;$i$$288_tableBodyRows$$18$$++) {
      $headerColumn$$9_tableBodyCell$$12$$ = this.$getTableHeaderColumn$($i$$288_tableBodyRows$$18$$), null != $headerColumn$$9_tableBodyCell$$12$$ && $headerColumn$$9_tableBodyCell$$12$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_MIN_WIDTH$, "");
    }
    $i$$288_tableBodyRows$$18$$ = this.$getTableBodyRows$();
    if (null != $i$$288_tableBodyRows$$18$$ && 0 < $i$$288_tableBodyRows$$18$$.length) {
      for ($i$$288_tableBodyRows$$18$$ = 0;$i$$288_tableBodyRows$$18$$ < $columnCount$$7$$;$i$$288_tableBodyRows$$18$$++) {
        $headerColumn$$9_tableBodyCell$$12$$ = this.$getTableBodyCell$(0, $i$$288_tableBodyRows$$18$$, null), null != $headerColumn$$9_tableBodyCell$$12$$ && $headerColumn$$9_tableBodyCell$$12$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_MIN_WIDTH$, "");
      }
    }
  };
  $oj$$14$$.$TableDomUtils$.prototype.$_removeTableBodyRowBottomBorder$ = function $$oj$$14$$$$TableDomUtils$$$$_removeTableBodyRowBottomBorder$$($underflow$$) {
    if (this.$_isHorizontalGridEnabled$()) {
      var $lastTableBodyRow_tableBodyRows$$19$$ = this.$getTableBodyRows$();
      if (null != $lastTableBodyRow_tableBodyRows$$19$$ && 0 < $lastTableBodyRow_tableBodyRows$$19$$.length) {
        var $i$$289$$, $tableBodyRowsCount$$6$$ = $lastTableBodyRow_tableBodyRows$$19$$.length;
        for ($i$$289$$ = 0;$i$$289$$ < $tableBodyRowsCount$$6$$;$i$$289$$++) {
          $$$$14$$($lastTableBodyRow_tableBodyRows$$19$$[$i$$289$$]).hasClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_HGRID_LINES_CLASS$) || $$$$14$$($lastTableBodyRow_tableBodyRows$$19$$[$i$$289$$]).addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_HGRID_LINES_CLASS$);
        }
        $lastTableBodyRow_tableBodyRows$$19$$ = $$$$14$$($lastTableBodyRow_tableBodyRows$$19$$[$lastTableBodyRow_tableBodyRows$$19$$.length - 1]);
        $underflow$$ || $lastTableBodyRow_tableBodyRows$$19$$.removeClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_HGRID_LINES_CLASS$);
      }
    }
  };
  $oj$$14$$.$TableDomUtils$.prototype.$_removeTableDimensionsStyling$ = function $$oj$$14$$$$TableDomUtils$$$$_removeTableDimensionsStyling$$() {
    var $table$$16$$ = this.$getTable$(), $headerColumnTextDivs_tableHeader$$9$$ = this.$getTableHeader$(), $i$$290_tableHeaderRow$$8$$ = this.$getTableHeaderRow$(), $tableFooter$$9$$ = this.$getTableFooter$(), $tableFooterRow$$8$$ = this.$getTableFooterRow$(), $tableBody$$21$$ = this.$getTableBody$();
    if (null != $headerColumnTextDivs_tableHeader$$9$$ && ($headerColumnTextDivs_tableHeader$$9$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_STYLE$, ""), $i$$290_tableHeaderRow$$8$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_STYLE$, ""), ($headerColumnTextDivs_tableHeader$$9$$ = $i$$290_tableHeaderRow$$8$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_TEXT_CLASS$)) && 0 < $headerColumnTextDivs_tableHeader$$9$$.length)) {
      for (var $headerColumnTextDivsCount$$ = $headerColumnTextDivs_tableHeader$$9$$.length, $i$$290_tableHeaderRow$$8$$ = 0;$i$$290_tableHeaderRow$$8$$ < $headerColumnTextDivsCount$$;$i$$290_tableHeaderRow$$8$$++) {
        $$$$14$$($headerColumnTextDivs_tableHeader$$9$$[$i$$290_tableHeaderRow$$8$$]).css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_WIDTH$, "");
      }
    }
    null != $tableFooter$$9$$ && ($tableFooter$$9$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_STYLE$, ""), $tableFooterRow$$8$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_STYLE$, ""));
    $table$$16$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_DISPLAY$, "");
    $table$$16$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_WIDTH$, "");
    null != $tableBody$$21$$ && $tableBody$$21$$.attr($oj$$14$$.$TableDomUtils$.$DOM_ATTR$.$_STYLE$, "");
    this.$_removeHeaderColumnAndCellColumnWidths$();
  };
  $oj$$14$$.$TableDomUtils$.prototype.$_setColumnWidths$ = function $$oj$$14$$$$TableDomUtils$$$$_setColumnWidths$$() {
    var $columnWidths$$ = [], $columnPaddingWidths$$ = [], $adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$13_tableBodyCellPaddingWidth_tableBodyCellStyle$$ = null, $adjustedColumnWidths_defaultColumnPaddingWidth$$, $defaultTableBodyCellPaddingWidth_footerCell$$1$$, $headerColumnTextDivHeight_headerRenderer$$1$$, $i$$291_tableBodyRows$$20$$, $headerColumnCellStyle_headerColumnTextDiv$$, $columnsCount$$10$$ = this.$component$.$_getColumnDefs$().length;
    for ($i$$291_tableBodyRows$$20$$ = 0;$i$$291_tableBodyRows$$20$$ < $columnsCount$$10$$;$i$$291_tableBodyRows$$20$$++) {
      $adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$13_tableBodyCellPaddingWidth_tableBodyCellStyle$$ = this.$getTableHeaderColumn$($i$$291_tableBodyRows$$20$$), null != $adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$13_tableBodyCellPaddingWidth_tableBodyCellStyle$$ && ($headerColumnCellStyle_headerColumnTextDiv$$ = window.getComputedStyle($adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$13_tableBodyCellPaddingWidth_tableBodyCellStyle$$[0]), 
      $columnWidths$$[$i$$291_tableBodyRows$$20$$] = parseInt($headerColumnCellStyle_headerColumnTextDiv$$[$oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_WIDTH$], 10), $headerColumnTextDivHeight_headerRenderer$$1$$ = this.$component$.$_getColumnRenderer$($i$$291_tableBodyRows$$20$$, "header"), $adjustedColumnWidths_defaultColumnPaddingWidth$$ || null != $headerColumnTextDivHeight_headerRenderer$$1$$ ? $columnPaddingWidths$$[$i$$291_tableBodyRows$$20$$] = null != $headerColumnTextDivHeight_headerRenderer$$1$$ ? 
      parseInt($headerColumnCellStyle_headerColumnTextDiv$$[$oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_PADDING_RIGHT$], 10) + parseInt($headerColumnCellStyle_headerColumnTextDiv$$[$oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_PADDING_LEFT$], 10) : $adjustedColumnWidths_defaultColumnPaddingWidth$$ : ($adjustedColumnWidths_defaultColumnPaddingWidth$$ = parseInt($headerColumnCellStyle_headerColumnTextDiv$$[$oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_PADDING_RIGHT$], 10) + parseInt($headerColumnCellStyle_headerColumnTextDiv$$[$oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_PADDING_LEFT$], 
      10), $columnPaddingWidths$$[$i$$291_tableBodyRows$$20$$] = $adjustedColumnWidths_defaultColumnPaddingWidth$$), $headerColumnTextDivHeight_headerRenderer$$1$$ = null, ($headerColumnCellStyle_headerColumnTextDiv$$ = $adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$13_tableBodyCellPaddingWidth_tableBodyCellStyle$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_TEXT_CLASS$)) && 0 < $headerColumnCellStyle_headerColumnTextDiv$$.length && 
      ($headerColumnTextDivHeight_headerRenderer$$1$$ = $headerColumnCellStyle_headerColumnTextDiv$$.get(0).clientHeight), null != $headerColumnTextDivHeight_headerRenderer$$1$$ && ($adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$13_tableBodyCellPaddingWidth_tableBodyCellStyle$$ = $adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$13_tableBodyCellPaddingWidth_tableBodyCellStyle$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_CLASS$), 
      $adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$13_tableBodyCellPaddingWidth_tableBodyCellStyle$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_MIN_HEIGHT$, $headerColumnTextDivHeight_headerRenderer$$1$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$)));
    }
    $adjustedColumnWidths_defaultColumnPaddingWidth$$ = [];
    $i$$291_tableBodyRows$$20$$ = this.$getTableBodyRows$();
    if (null != $i$$291_tableBodyRows$$20$$ && 0 < $i$$291_tableBodyRows$$20$$.length) {
      for ($i$$291_tableBodyRows$$20$$ = 0;$i$$291_tableBodyRows$$20$$ < $columnsCount$$10$$;$i$$291_tableBodyRows$$20$$++) {
        $adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$13_tableBodyCellPaddingWidth_tableBodyCellStyle$$ = this.$getTableBodyCell$(0, $i$$291_tableBodyRows$$20$$, null), null != $adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$13_tableBodyCellPaddingWidth_tableBodyCellStyle$$ && (this.$component$.$_getColumnRenderer$($i$$291_tableBodyRows$$20$$, "cell"), this.$component$.$_hasRowOrCellRenderer$($i$$291_tableBodyRows$$20$$) ? 
        ($adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$13_tableBodyCellPaddingWidth_tableBodyCellStyle$$ = window.getComputedStyle($adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$13_tableBodyCellPaddingWidth_tableBodyCellStyle$$[0]), $adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$13_tableBodyCellPaddingWidth_tableBodyCellStyle$$ = parseInt($adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$13_tableBodyCellPaddingWidth_tableBodyCellStyle$$[$oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_PADDING_RIGHT$], 
        10) + parseInt($adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$13_tableBodyCellPaddingWidth_tableBodyCellStyle$$[$oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_PADDING_LEFT$], 10)) : ($defaultTableBodyCellPaddingWidth_footerCell$$1$$ || ($adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$13_tableBodyCellPaddingWidth_tableBodyCellStyle$$ = window.getComputedStyle($adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$13_tableBodyCellPaddingWidth_tableBodyCellStyle$$[0]), 
        $defaultTableBodyCellPaddingWidth_footerCell$$1$$ = parseInt($adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$13_tableBodyCellPaddingWidth_tableBodyCellStyle$$[$oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_PADDING_RIGHT$], 10) + parseInt($adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$13_tableBodyCellPaddingWidth_tableBodyCellStyle$$[$oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_PADDING_LEFT$], 10)), $adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$13_tableBodyCellPaddingWidth_tableBodyCellStyle$$ = 
        $defaultTableBodyCellPaddingWidth_footerCell$$1$$), $adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$13_tableBodyCellPaddingWidth_tableBodyCellStyle$$ = $adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$13_tableBodyCellPaddingWidth_tableBodyCellStyle$$ > $columnPaddingWidths$$[$i$$291_tableBodyRows$$20$$] ? $columnWidths$$[$i$$291_tableBodyRows$$20$$] - $adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$13_tableBodyCellPaddingWidth_tableBodyCellStyle$$ + 
        $columnPaddingWidths$$[$i$$291_tableBodyRows$$20$$] : $columnWidths$$[$i$$291_tableBodyRows$$20$$] + $columnPaddingWidths$$[$i$$291_tableBodyRows$$20$$] - $adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$13_tableBodyCellPaddingWidth_tableBodyCellStyle$$, $adjustedColumnWidths_defaultColumnPaddingWidth$$[$i$$291_tableBodyRows$$20$$] = $adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$13_tableBodyCellPaddingWidth_tableBodyCellStyle$$)
        ;
      }
    }
    for ($i$$291_tableBodyRows$$20$$ = 0;$i$$291_tableBodyRows$$20$$ < $columnsCount$$10$$;$i$$291_tableBodyRows$$20$$++) {
      $adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$13_tableBodyCellPaddingWidth_tableBodyCellStyle$$ = this.$getTableHeaderColumn$($i$$291_tableBodyRows$$20$$), null != $adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$13_tableBodyCellPaddingWidth_tableBodyCellStyle$$ && $adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$13_tableBodyCellPaddingWidth_tableBodyCellStyle$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_MIN_WIDTH$, 
      $columnWidths$$[$i$$291_tableBodyRows$$20$$] + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$), $adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$13_tableBodyCellPaddingWidth_tableBodyCellStyle$$ = this.$getTableBodyCell$(0, $i$$291_tableBodyRows$$20$$, null), null != $adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$13_tableBodyCellPaddingWidth_tableBodyCellStyle$$ && $adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$13_tableBodyCellPaddingWidth_tableBodyCellStyle$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_MIN_WIDTH$, 
      $adjustedColumnWidths_defaultColumnPaddingWidth$$[$i$$291_tableBodyRows$$20$$] + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$), $defaultTableBodyCellPaddingWidth_footerCell$$1$$ = this.$getTableFooterCell$($i$$291_tableBodyRows$$20$$), null != $defaultTableBodyCellPaddingWidth_footerCell$$1$$ && ($adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$13_tableBodyCellPaddingWidth_tableBodyCellStyle$$ = parseInt($defaultTableBodyCellPaddingWidth_footerCell$$1$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_PADDING_RIGHT$), 
      10) + parseInt($defaultTableBodyCellPaddingWidth_footerCell$$1$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_PADDING_LEFT$), 10), $adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$13_tableBodyCellPaddingWidth_tableBodyCellStyle$$ = $adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$13_tableBodyCellPaddingWidth_tableBodyCellStyle$$ > $columnPaddingWidths$$[$i$$291_tableBodyRows$$20$$] ? $columnWidths$$[$i$$291_tableBodyRows$$20$$] - 
      $adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$13_tableBodyCellPaddingWidth_tableBodyCellStyle$$ + $columnPaddingWidths$$[$i$$291_tableBodyRows$$20$$] : $columnWidths$$[$i$$291_tableBodyRows$$20$$] + $columnPaddingWidths$$[$i$$291_tableBodyRows$$20$$] - $adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$13_tableBodyCellPaddingWidth_tableBodyCellStyle$$, $defaultTableBodyCellPaddingWidth_footerCell$$1$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_MIN_WIDTH$, 
      $adjustedColumnWidth_footerPaddingWidth_headerColumnCell$$1_headerColumnDiv_tableBodyCell$$13_tableBodyCellPaddingWidth_tableBodyCellStyle$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$));
    }
  };
  $oj$$14$$.$TableDomUtils$.prototype.$_setHeaderColumnOverflowWidths$ = function $$oj$$14$$$$TableDomUtils$$$$_setHeaderColumnOverflowWidths$$() {
    var $columns$$22$$ = this.$component$.$_getColumnDefs$(), $i$$292$$, $column$$23_headerColumnTextDivWidth$$, $headerColumnCell$$2_newHeaderColumnTextDivWidth$$, $headerColumnDiv$$1$$, $headerColumnTextDiv$$1$$, $sortPlaceHolderDivWidth$$, $columnsCount$$11$$ = $columns$$22$$.length;
    for ($i$$292$$ = 0;$i$$292$$ < $columnsCount$$11$$;$i$$292$$++) {
      $column$$23_headerColumnTextDivWidth$$ = $columns$$22$$[$i$$292$$], $headerColumnCell$$2_newHeaderColumnTextDivWidth$$ = this.$getTableHeaderColumn$($i$$292$$), null != $headerColumnCell$$2_newHeaderColumnTextDivWidth$$ && ($headerColumnDiv$$1$$ = $headerColumnCell$$2_newHeaderColumnTextDivWidth$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_CLASS$), 0 < $headerColumnDiv$$1$$.length && ($headerColumnDiv$$1$$ = $$$$14$$($headerColumnDiv$$1$$[0]), ($headerColumnTextDiv$$1$$ = 
      $headerColumnCell$$2_newHeaderColumnTextDivWidth$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_TEXT_CLASS$)) && 0 < $headerColumnTextDiv$$1$$.length && ($sortPlaceHolderDivWidth$$ = 0, $column$$23_headerColumnTextDivWidth$$.sortable == $oj$$14$$.$TableDomUtils$.$_OPTION_ENABLED$ && ($sortPlaceHolderDivWidth$$ = $$$$14$$($headerColumnCell$$2_newHeaderColumnTextDivWidth$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_SORT_PACEHOLDER_CLASS$).get(0)).width()), 
      0 < $headerColumnDiv$$1$$[0].clientWidth && $headerColumnTextDiv$$1$$.width() + $sortPlaceHolderDivWidth$$ > $headerColumnDiv$$1$$[0].clientWidth && ($headerColumnTextDiv$$1$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_WIDTH$, ""), $column$$23_headerColumnTextDivWidth$$ = $headerColumnTextDiv$$1$$.width(), $headerColumnCell$$2_newHeaderColumnTextDivWidth$$ = $headerColumnCell$$2_newHeaderColumnTextDivWidth$$.width() - $sortPlaceHolderDivWidth$$, $column$$23_headerColumnTextDivWidth$$ > $headerColumnCell$$2_newHeaderColumnTextDivWidth$$ + 
      1 && $headerColumnTextDiv$$1$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_WIDTH$, $headerColumnCell$$2_newHeaderColumnTextDivWidth$$ + $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_PX$)))));
    }
  };
  $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$ = {$_CHECKBOX_ACC_SELECT_COLUMN_CLASS$:"oj-table-checkbox-acc-select-column", $_CHECKBOX_ACC_SELECT_ROW_CLASS$:"oj-table-checkbox-acc-select-row", $_TABLE_CONTAINER_CLASS$:"oj-table-container", $_TABLE_SCROLLER_CLASS$:"oj-table-scroller", $_TABLE_CLASS$:"oj-table", $_TABLE_COMPACT_CLASS$:"oj-table-grid-display", $_TABLE_EDIT_CLASS$:"oj-table-editable", $_TABLE_ELEMENT_CLASS$:"oj-table-element", $_TABLE_FOOTER_CLASS$:"oj-table-footer", $_TABLE_FOOTER_ROW_CLASS$:"oj-table-footer-row", 
  $_TABLE_HEADER_CLASS$:"oj-table-header", $_TABLE_HEADER_ROW_CLASS$:"oj-table-header-row", $_COLUMN_HEADER_CELL_CLASS$:"oj-table-column-header-cell", $_COLUMN_HEADER_DROP_EMPTY_CELL_CLASS$:"oj-table-column-header-drop-empty-cell", $_COLUMN_HEADER_ACC_SELECT_COLUMN_CLASS$:"oj-table-column-header-acc-select-column", $_COLUMN_HEADER_ACC_SELECT_ROW_CLASS$:"oj-table-column-header-acc-select-row", $_COLUMN_HEADER_ACC_SELECT_ROW_TEXT_CLASS$:"oj-table-column-header-acc-select-row-text", $_COLUMN_HEADER_CLASS$:"oj-table-column-header", 
  $_COLUMN_HEADER_TEXT_CLASS$:"oj-table-column-header-text", $_COLUMN_HEADER_ASC_CLASS$:"oj-table-column-header-asc", $_COLUMN_HEADER_DSC_CLASS$:"oj-table-column-header-dsc", $_COLUMN_HEADER_SORT_PACEHOLDER_CLASS$:"oj-table-column-header-sort-placeholder", $_COLUMN_HEADER_ACC_ASC_LINK_CLASS$:"oj-table-column-header-acc-asc-link", $_COLUMN_HEADER_ACC_DSC_LINK_CLASS$:"oj-table-column-header-acc-dsc-link", $_COLUMN_HEADER_ASC_LINK_CLASS$:"oj-table-column-header-asc-link", $_COLUMN_HEADER_DSC_LINK_CLASS$:"oj-table-column-header-dsc-link", 
  $_COLUMN_HEADER_ASC_ICON_CLASS$:"oj-table-column-header-asc-icon", $_COLUMN_HEADER_DSC_ICON_CLASS$:"oj-table-column-header-dsc-icon", $_COLUMN_HEADER_DRAG_INDICATOR_BEFORE_CLASS$:"oj-table-column-header-drag-indicator-before", $_COLUMN_HEADER_DRAG_INDICATOR_AFTER_CLASS$:"oj-table-column-header-drag-indicator-after", $_COLUMN_HEADER_DRAG_IMAGE$:"oj-table-column-header-cell-drag-image", $_TABLE_BODY_CLASS$:"oj-table-body", $_TABLE_DATA_ROW_CLASS$:"oj-table-body-row", $_TABLE_DATA_ROW_DRAG_INDICATOR_BEFORE_CLASS$:"oj-table-body-row-drag-indicator-before", 
  $_TABLE_DATA_ROW_DRAG_INDICATOR_AFTER_CLASS$:"oj-table-body-row-drag-indicator-after", $_TABLE_DATA_ROW_TOUCH_SELECTIOM_AFFORDANCE_TOP_CLASS$:"oj-table-body-row-touch-selection-affordance-top", $_TABLE_DATA_ROW_TOUCH_SELECTIOM_AFFORDANCE_BOTTOM_CLASS$:"oj-table-body-row-touch-selection-affordance-bottom", $_TABLE_DATA_ROW_TOUCH_SELECTIOM_AFFORDANCE_TOP_ICON_CLASS$:"oj-table-body-row-touch-selection-affordance-top-icon", $_TABLE_DATA_ROW_TOUCH_SELECTIOM_AFFORDANCE_BOTTOM_ICON_CLASS$:"oj-table-body-row-touch-selection-affordance-bottom-icon", 
  $_TABLE_DATA_ROW_TOUCH_SELECTIOM_AFFORDANCE_TOUCH_AREA_CLASS$:"oj-table-body-row-touch-selection-affordance-touch-area", $_TABLE_DATA_ROW_EDIT_CLASS$:"oj-table-body-row-edit", $_TABLE_DATA_CURRENT_ROW_CLASS$:"oj-table-body-current-row", $_TABLE_DATA_CELL_CLASS$:"oj-table-data-cell", $_TABLE_DATA_CELL_ACC_SELECT_CLASS$:"oj-table-data-cell-acc-select", $_TABLE_DATA_CELL_EDIT_CLASS$:"oj-table-data-cell-edit", $_TABLE_DATE_CELL_FORM_CONTROL_CLASS$:"oj-form-control-inherit", $_TABLE_VGRID_LINES_CLASS$:"oj-table-vgrid-lines", 
  $_TABLE_HGRID_LINES_CLASS$:"oj-table-hgrid-lines", $_TABLE_FOOTER_CELL_CLASS$:"oj-table-footer-cell", $_TABLE_FOOTER_DROP_EMPTY_CELL_CLASS$:"oj-table-footer-drop-empty-cell", $_TABLE_INLINE_MESSAGE_CLASS$:"oj-table-inline-message", $_TABLE_STATUS_MESSAGE_CLASS$:"oj-table-status-message", $_TABLE_STATUS_MESSAGE_TEXT_CLASS$:"oj-table-status-message-text", $_TABLE_NO_DATA_MESSAGE_CLASS$:"oj-table-no-data-message", $_TABLE_NO_DATA_ROW_CLASS$:"oj-table-no-data-row", $_WIDGET_ICON_CLASS$:"oj-component-icon", 
  $_HIDDEN_CONTENT_ACC_CLASS$:"oj-helper-hidden-accessible"};
  $oj$$14$$.$TableDomUtils$.$CSS_PROP$ = {$_DISPLAY$:"display", $_POSITION$:"position", $_HEIGHT$:"height", $_WIDTH$:"width", $_TOP$:"top", $_BOTTOM$:"bottom", $_LEFT$:"left", $_RIGHT$:"right", $_PADDING_TOP$:"padding-top", $_PADDING_LEFT$:"padding-left", $_PADDING_RIGHT$:"padding-right", $_OVERFLOW$:"overflow", $_OVERFLOW_X$:"overflow-x", $_OVERFLOW_Y$:"overflow-y", $_MIN_WIDTH$:"min-width", $_MIN_HEIGHT$:"min-height", $_FLOAT$:"float", $_BORDER_TOP$:"border-top", $_BORDER_BOTTOM_WIDTH$:"border-bottom-width", 
  $_BORDER_LEFT_WIDTH$:"border-left-width", $_MARGIN_BOTTOM$:"margin-bottom", $_VERTICAL_ALIGN$:"vertical-align", $_CURSOR$:"cursor", $_ZINDEX$:"z-index"};
  $oj$$14$$.$TableDomUtils$.$CSS_VAL$ = {$_NONE$:"none", $_BLOCK$:"block", $_RELATIVE$:"relative", $_ABSOLUTE$:"absolute", $_INLINE$:"inline", $_AUTO$:"auto", $_HIDDEN$:"hidden", $_LEFT$:"left", $_PX$:"px", $_MIDDLE$:"middle", $_MOVE$:"move"};
  $oj$$14$$.$TableDomUtils$.$DOM_ATTR$ = {$_STYLE$:"style", $_TABINDEX$:"tabindex", $_TYPE$:"type", $_ID$:"id", $_TITLE$:"title", $_HREF$:"href", $_HEADERS$:"headers", $_COLSPAN$:"colspan"};
  $oj$$14$$.$TableDomUtils$.$DOM_ELEMENT$ = {$_DIV$:"div", $_A$:"a", $_TR$:"tr", $_TD$:"td", $_TH$:"th", $_TABLE$:"table", $_TBODY$:"tbody", $_THEAD$:"thead", $_TFOOT$:"tfoot", $_INPUT$:"input", $_UL$:"ul", $_SPAN$:"span"};
  $oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$ = {$_WIDGET$:"oj-component", $_ACTIVE$:"oj-active", $_CLICKABLE_ICON$:"oj-clickable-icon-nocontext", $_DISABLED$:"oj-disabled", $_ENABLED$:"oj-enabled", $_FOCUS$:"oj-focus", $_HOVER$:"oj-hover", $_SELECTED$:"oj-selected", $_WARNING$:"oj-warning", $_DRAGGABLE$:"oj-draggable", $_DRAG$:"oj-drag"};
  $oj$$14$$.$TableDomUtils$.$_COLUMN_HEADER_ROW_SELECT_ID$ = "_hdrColRowSel";
  $oj$$14$$.$TableDomUtils$.$_OPTION_AUTO$ = "auto";
  $oj$$14$$.$TableDomUtils$.$_OPTION_ENABLED$ = "enabled";
  $oj$$14$$.$TableDomUtils$.$_OPTION_DISABLED$ = "disabled";
  $oj$$14$$.$TableDomUtils$.$_OPTION_SELECTION_MODES$ = {$_SINGLE$:"single", $_MULTIPLE$:"multiple"};
  $oj$$14$$.$TableDomUtils$.$_OPTION_DISPLAY$ = {$_LIST$:"list", $_GRID$:"grid"};
  $oj$$14$$.$TableDndContext$ = function $$oj$$14$$$$TableDndContext$$($component$$14$$) {
    this.$component$ = $component$$14$$;
    this.options = $component$$14$$.options;
    this.Init();
  };
  $goog$exportPath_$$("TableDndContext", $oj$$14$$.$TableDndContext$, $oj$$14$$);
  $oj$$14$$.$Object$.$createSubclass$($oj$$14$$.$TableDndContext$, $oj$$14$$.$Object$, "oj.TableDndContext");
  $oj$$14$$.$TableDndContext$.prototype.Init = function $$oj$$14$$$$TableDndContext$$$Init$() {
    $oj$$14$$.$TableDndContext$.$superclass$.Init.call(this);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("TableDndContext.prototype.Init", {Init:$oj$$14$$.$TableDndContext$.prototype.Init});
  $oj$$14$$.$TableDndContext$.prototype.$_addDragMarkerClass$ = function $$oj$$14$$$$TableDndContext$$$$_addDragMarkerClass$$($columnIdx$$59$$) {
    this.$_getTableDomUtils$().$getTableHeaderColumn$($columnIdx$$59$$).addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DRAG$);
    this.$_getTableDomUtils$().$setTableColumnCellsClass$($columnIdx$$59$$, !0, $oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DRAG$);
  };
  $oj$$14$$.$TableDndContext$.prototype.$_removeDragMarkerClass$ = function $$oj$$14$$$$TableDndContext$$$$_removeDragMarkerClass$$() {
    var $dragColumns$$ = this.$_getTableDomUtils$().$getTableHeader$().find("." + $oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DRAG$);
    if (null != $dragColumns$$ && 0 < $dragColumns$$.length) {
      var $i$$293$$, $dragColumnsCount$$ = $dragColumns$$.length;
      for ($i$$293$$ = 0;$i$$293$$ < $dragColumnsCount$$;$i$$293$$++) {
        $$$$14$$($dragColumns$$[$i$$293$$]).removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DRAG$);
      }
    }
    this.$_getTableDomUtils$().$setTableColumnCellsClass$(null, !1, $oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DRAG$);
  };
  $oj$$14$$.$TableDndContext$.prototype.$_cloneTableBody$ = function $$oj$$14$$$$TableDndContext$$$$_cloneTableBody$$($tableBody$$22$$) {
    var $bodyClone$$;
    $tableBody$$22$$[0].getBoundingClientRect();
    var $scrollLeft$$16$$ = $tableBody$$22$$.scrollLeft(), $scrollTop$$12$$ = $tableBody$$22$$.scrollTop();
    $bodyClone$$ = $tableBody$$22$$.clone();
    $bodyClone$$.css({overflow:"hidden", "overflow-x":"hidden", "overflow-y":"hidden", "background-color":"transparent", width:$tableBody$$22$$.css("width"), height:$tableBody$$22$$.css("height"), position:"fixed", top:1E4});
    $$$$14$$("body").append($bodyClone$$);
    $bodyClone$$.scrollLeft(1 * $scrollLeft$$16$$);
    $bodyClone$$.scrollTop(1 * $scrollTop$$12$$);
    return $bodyClone$$;
  };
  $oj$$14$$.$TableDndContext$.prototype.$_destroyDragImage$ = function $$oj$$14$$$$TableDndContext$$$$_destroyDragImage$$() {
    this.$_dragImage$ && (this.$_dragImage$.remove(), this.$_dragImage$ = null);
  };
  $oj$$14$$.$TableDndContext$.prototype.$_getEventColumnIndex$ = function $$oj$$14$$$$TableDndContext$$$$_getEventColumnIndex$$($event$$349$$) {
    return this.$_getTableDomUtils$().$getElementColumnIdx$($$$$14$$($event$$349$$.currentTarget));
  };
  $oj$$14$$.$TableDndContext$.prototype.$_getOverRowIndex$ = function $$oj$$14$$$$TableDndContext$$$$_getOverRowIndex$$($context$$76_event$$350$$) {
    var $newRowIndex_overRow_tableBodyRows$$21$$;
    $newRowIndex_overRow_tableBodyRows$$21$$ = $$$$14$$($context$$76_event$$350$$.target).closest("tr");
    $newRowIndex_overRow_tableBodyRows$$21$$ = ($context$$76_event$$350$$ = this.$component$.getContextByNode($context$$76_event$$350$$.target)) && "oj-table-cell" == $context$$76_event$$350$$.subId ? $context$$76_event$$350$$.rowIndex : $newRowIndex_overRow_tableBodyRows$$21$$ && $newRowIndex_overRow_tableBodyRows$$21$$.hasClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_DRAG_INDICATOR_BEFORE_CLASS$) ? this.$_dropRowIndex$ : ($newRowIndex_overRow_tableBodyRows$$21$$ = this.$_getTableDomUtils$().$getTableBodyRows$()) ? 
    $newRowIndex_overRow_tableBodyRows$$21$$.length : 0;
    return $newRowIndex_overRow_tableBodyRows$$21$$;
  };
  $oj$$14$$.$TableDndContext$.prototype.$_getTableDomUtils$ = function $$oj$$14$$$$TableDndContext$$$$_getTableDomUtils$$() {
    return this.$component$.$_getTableDomUtils$();
  };
  $oj$$14$$.$TableDndContext$.prototype.$handleColumnDragStart$ = function $$oj$$14$$$$TableDndContext$$$$handleColumnDragStart$$($event$$351$$) {
    if (this.$_isColumnReorderEnabled$()) {
      var $columnIdx$$60$$ = this.$_getEventColumnIndex$($event$$351$$);
      this.$_dragStartColumnIdx$ = $columnIdx$$60$$;
      this.$_setReorderColumnsDataTransfer$($event$$351$$, $columnIdx$$60$$);
      this.$component$.$_setSelection$(null);
      this.$component$.option("selection", null, {_context:{$writeback$:!0, $internalSet$:!0}});
      setTimeout(function() {
        window.getSelection().removeAllRanges();
      }, 0);
      this.$_addDragMarkerClass$($columnIdx$$60$$);
      return!0;
    }
  };
  $oj$$14$$.$TableDndContext$.prototype.$handleColumnDragEnd$ = function $$oj$$14$$$$TableDndContext$$$$handleColumnDragEnd$$() {
    this.$_isColumnReorderEnabled$() && (this.$setTableHeaderColumnDraggable$(null, !1), this.$_dragStartColumnIdx$ = null, this.$_getTableDomUtils$().$removeDragOverIndicatorColumn$(), this.$_getTableDomUtils$().$removeTableHeaderColumnDragImage$(), this.$_removeDragMarkerClass$());
  };
  $oj$$14$$.$TableDndContext$.prototype.$handleColumnDragEnter$ = function $$oj$$14$$$$TableDndContext$$$$handleColumnDragEnter$$($event$$353$$) {
    if (!this.$_isColumnReordering$()) {
      var $columnIdx$$61$$ = this.$_getEventColumnIndex$($event$$353$$);
      return this.$_invokeDropCallback$("columns", "dragEnter", $event$$353$$, {columnIndex:$columnIdx$$61$$});
    }
  };
  $oj$$14$$.$TableDndContext$.prototype.$handleColumnReorderDragOver$ = function $$oj$$14$$$$TableDndContext$$$$handleColumnReorderDragOver$$($event$$354$$) {
    var $columnIdx$$62$$ = this.$_getEventColumnIndex$($event$$354$$), $dragStartColumnIdx$$ = this.$_dragStartColumnIdx$;
    null != $dragStartColumnIdx$$ && $dragStartColumnIdx$$ != $columnIdx$$62$$ && ((this.$_currentDropColumnBefore$ = this.$_isDragOverBeforeColumn$($event$$354$$)) && $dragStartColumnIdx$$ == $columnIdx$$62$$ - 1 || !this.$_currentDropColumnBefore$ && $dragStartColumnIdx$$ == $columnIdx$$62$$ + 1 || this.$_getTableDomUtils$().$displayDragOverIndicatorColumn$($columnIdx$$62$$, this.$_currentDropColumnBefore$), $event$$354$$.preventDefault());
  };
  $oj$$14$$.$TableDndContext$.prototype.$handleColumnDragOver$ = function $$oj$$14$$$$TableDndContext$$$$handleColumnDragOver$$($event$$355$$) {
    if (this.$_isColumnReordering$()) {
      return this.$handleColumnReorderDragOver$($event$$355$$);
    }
    var $columnIdx$$63$$ = this.$_getEventColumnIndex$($event$$355$$);
    this.$_currentDropColumnBefore$ = this.$_isDragOverBeforeColumn$($event$$355$$);
    var $returnValue$$1$$ = this.$_invokeDropCallback$("columns", "dragOver", $event$$355$$, {columnIndex:$columnIdx$$63$$});
    (!1 === $returnValue$$1$$ || $event$$355$$.isDefaultPrevented()) && this.$_getTableDomUtils$().$displayDragOverIndicatorColumn$($columnIdx$$63$$, this.$_isDragOverBeforeColumn$($event$$355$$));
    return $returnValue$$1$$;
  };
  $oj$$14$$.$TableDndContext$.prototype.$handleColumnDragLeave$ = function $$oj$$14$$$$TableDndContext$$$$handleColumnDragLeave$$($event$$356$$) {
    if (!this.$_isColumnReordering$()) {
      this.$_getTableDomUtils$().$removeDragOverIndicatorColumn$();
      var $columnIdx$$64$$ = this.$_getEventColumnIndex$($event$$356$$);
      return this.$_invokeDndCallback$("drop", "columns", "dragLeave", $event$$356$$, {columnIndex:$columnIdx$$64$$});
    }
  };
  $oj$$14$$.$TableDndContext$.prototype.$handleColumnReorderDrop$ = function $$oj$$14$$$$TableDndContext$$$$handleColumnReorderDrop$$($event$$357$$) {
    var $columnIdx$$65$$ = this.$_getEventColumnIndex$($event$$357$$);
    this.$_currentDropColumnBefore$ || $columnIdx$$65$$++;
    this.$component$.$_columnsDestMap$ = this.$_getTableDomUtils$().$moveTableHeaderColumn$(this.$_dragStartColumnIdx$, $columnIdx$$65$$, $event$$357$$);
    $event$$357$$.preventDefault();
  };
  $oj$$14$$.$TableDndContext$.prototype.$handleColumnDrop$ = function $$oj$$14$$$$TableDndContext$$$$handleColumnDrop$$($event$$358$$) {
    if (this.$_isColumnReordering$()) {
      return this.$handleColumnReorderDrop$($event$$358$$);
    }
    this.$_getTableDomUtils$().$removeDragOverIndicatorColumn$();
    var $columnIdx$$66$$ = this.$_getEventColumnIndex$($event$$358$$);
    this.$_currentDropColumnBefore$ || $columnIdx$$66$$++;
    return this.$_invokeDropCallback$("columns", "drop", $event$$358$$, {columnIndex:$columnIdx$$66$$});
  };
  $oj$$14$$.$TableDndContext$.prototype.$handleRowDragStart$ = function $$oj$$14$$$$TableDndContext$$$$handleRowDragStart$$($event$$359$$) {
    var $dragOption$$1_ui$$6$$ = this.options.dnd.drag;
    if ($dragOption$$1_ui$$6$$ && $dragOption$$1_ui$$6$$.rows) {
      return($dragOption$$1_ui$$6$$ = this.$_setDragRowsDataTransfer$($event$$359$$, $dragOption$$1_ui$$6$$.rows.dataTypes, this.$component$.$_getSelectedRowIdxs$())) ? this.$_invokeDndCallback$("drag", "rows", "dragStart", $event$$359$$, $dragOption$$1_ui$$6$$) : !1;
    }
  };
  $oj$$14$$.$TableDndContext$.prototype.$handleRowDrag$ = function $$oj$$14$$$$TableDndContext$$$$handleRowDrag$$($event$$360$$) {
    return this.$_invokeDndCallback$("drag", "rows", "drag", $event$$360$$);
  };
  $oj$$14$$.$TableDndContext$.prototype.$handleRowDragEnd$ = function $$oj$$14$$$$TableDndContext$$$$handleRowDragEnd$$($event$$361$$) {
    this.$_destroyDragImage$();
    return this.$_invokeDndCallback$("drag", "rows", "dragEnd", $event$$361$$);
  };
  $oj$$14$$.$TableDndContext$.prototype.$handleRowDragEnter$ = function $$oj$$14$$$$TableDndContext$$$$handleRowDragEnter$$($event$$362$$) {
    var $newRowIndex$$1$$ = this.$_getOverRowIndex$($event$$362$$), $returnValue$$2$$ = this.$_invokeDropCallback$("rows", "dragEnter", $event$$362$$, {rowIndex:$newRowIndex$$1$$});
    (!1 === $returnValue$$2$$ || $event$$362$$.isDefaultPrevented()) && this.$_updateDragRowsState$($event$$362$$, $newRowIndex$$1$$);
    return $returnValue$$2$$;
  };
  $oj$$14$$.$TableDndContext$.prototype.$handleRowDragOver$ = function $$oj$$14$$$$TableDndContext$$$$handleRowDragOver$$($event$$363$$) {
    return this.$_invokeDropCallback$("rows", "dragOver", $event$$363$$, {rowIndex:this.$_dropRowIndex$});
  };
  $oj$$14$$.$TableDndContext$.prototype.$handleRowDragLeave$ = function $$oj$$14$$$$TableDndContext$$$$handleRowDragLeave$$($event$$364$$) {
    var $returnValue$$3$$ = this.$_invokeDndCallback$("drop", "rows", "dragLeave", $event$$364$$, {rowIndex:this.$_dropRowIndex$});
    this.$_isDndEventInElement$($event$$364$$, $event$$364$$.currentTarget) || (this.$_getTableDomUtils$().$removeDragOverIndicatorRow$(), this.$_dropRowIndex$ = null);
    return $returnValue$$3$$;
  };
  $oj$$14$$.$TableDndContext$.prototype.$handleRowDrop$ = function $$oj$$14$$$$TableDndContext$$$$handleRowDrop$$($event$$365$$) {
    var $dropRowIndex$$ = this.$_dropRowIndex$;
    this.$_getTableDomUtils$().$removeDragOverIndicatorRow$();
    this.$_dropRowIndex$ = null;
    return this.$_invokeDropCallback$("rows", "drop", $event$$365$$, {rowIndex:$dropRowIndex$$});
  };
  $oj$$14$$.$TableDndContext$.prototype.$_hideUnselectedRows$ = function $$oj$$14$$$$TableDndContext$$$$_hideUnselectedRows$$($bodyClone$$1$$, $selArray$$) {
    var $bodyRows$$;
    $bodyRows$$ = $bodyClone$$1$$.children("tr");
    for (var $i$$294$$ = 0;$i$$294$$ < $bodyRows$$.length;$i$$294$$++) {
      -1 == $selArray$$.indexOf($i$$294$$) && $$$$14$$($bodyRows$$[$i$$294$$]).css("visibility", "hidden");
    }
  };
  $oj$$14$$.$TableDndContext$.prototype.$_invokeDndCallback$ = function $$oj$$14$$$$TableDndContext$$$$_invokeDndCallback$$($dndOption_dndType$$, $callback$$103_itemType$$, $callbackType$$, $event$$366$$, $ui$$7$$) {
    $dndOption_dndType$$ = this.options.dnd[$dndOption_dndType$$];
    var $returnValue$$4$$;
    if ($dndOption_dndType$$ && $dndOption_dndType$$[$callback$$103_itemType$$] && ($callback$$103_itemType$$ = $dndOption_dndType$$[$callback$$103_itemType$$][$callbackType$$]) && "function" == typeof $callback$$103_itemType$$) {
      try {
        $event$$366$$.dataTransfer = $event$$366$$.originalEvent.dataTransfer, $returnValue$$4$$ = $callback$$103_itemType$$($event$$366$$, $ui$$7$$);
      } catch ($e$$93$$) {
        $oj$$14$$.$Logger$.error("Error: " + $e$$93$$);
      }
    }
    return $returnValue$$4$$;
  };
  $oj$$14$$.$TableDndContext$.prototype.$_invokeDropCallback$ = function $$oj$$14$$$$TableDndContext$$$$_invokeDropCallback$$($itemType$$1$$, $callbackType$$1_returnValue$$5$$, $event$$367$$, $ui$$8$$) {
    $callbackType$$1_returnValue$$5$$ = this.$_invokeDndCallback$("drop", $itemType$$1$$, $callbackType$$1_returnValue$$5$$, $event$$367$$, $ui$$8$$);
    void 0 === $callbackType$$1_returnValue$$5$$ && this.$_matchDragDataType$($event$$367$$, $itemType$$1$$) && $event$$367$$.preventDefault();
    return $callbackType$$1_returnValue$$5$$;
  };
  $oj$$14$$.$TableDndContext$.prototype.$_isColumnReorderEnabled$ = function $$oj$$14$$$$TableDndContext$$$$_isColumnReorderEnabled$$() {
    var $dndOption$$1$$ = this.options.dnd;
    return $dndOption$$1$$ && $dndOption$$1$$.reorder && $dndOption$$1$$.reorder.columns == this.$component$.$_OPTION_ENABLED$ ? !0 : !1;
  };
  $oj$$14$$.$TableDndContext$.prototype.$_isColumnReordering$ = function $$oj$$14$$$$TableDndContext$$$$_isColumnReordering$$() {
    return null != this.$_dragStartColumnIdx$;
  };
  $oj$$14$$.$TableDndContext$.prototype.$_isDndEventInElement$ = function $$oj$$14$$$$TableDndContext$$$$_isDndEventInElement$$($event$$368$$, $element$$173$$) {
    var $rect$$1$$ = $element$$173$$.getBoundingClientRect(), $domEvent$$ = $event$$368$$.originalEvent;
    return $domEvent$$.clientX >= $rect$$1$$.left && $domEvent$$.clientX < $rect$$1$$.right && $domEvent$$.clientY >= $rect$$1$$.top && $domEvent$$.clientY < $rect$$1$$.bottom;
  };
  $oj$$14$$.$TableDndContext$.prototype.$_isDragOverBeforeColumn$ = function $$oj$$14$$$$TableDndContext$$$$_isDragOverBeforeColumn$$($event$$369_onRightHalf$$) {
    var $columnRect$$ = $event$$369_onRightHalf$$.currentTarget.getBoundingClientRect();
    return null != $event$$369_onRightHalf$$.originalEvent.clientX ? ($event$$369_onRightHalf$$ = $columnRect$$.right - $event$$369_onRightHalf$$.originalEvent.clientX < ($columnRect$$.right - $columnRect$$.left) / 2, "rtl" === $oj$$14$$.$DomUtils$.$getReadingDirection$() ? $event$$369_onRightHalf$$ : !$event$$369_onRightHalf$$) : !1;
  };
  $oj$$14$$.$TableDndContext$.prototype.$_matchDragDataType$ = function $$oj$$14$$$$TableDndContext$$$$_matchDragDataType$$($event$$370$$, $itemType$$2$$) {
    var $dragDataTypes$$ = $event$$370$$.originalEvent.dataTransfer.types, $allowedTypeArray_allowedTypes_dndOption$$2$$ = this.options.dnd.drop;
    if ($allowedTypeArray_allowedTypes_dndOption$$2$$ && $allowedTypeArray_allowedTypes_dndOption$$2$$[$itemType$$2$$] && $allowedTypeArray_allowedTypes_dndOption$$2$$[$itemType$$2$$].dataTypes) {
      for (var $allowedTypeArray_allowedTypes_dndOption$$2$$ = $allowedTypeArray_allowedTypes_dndOption$$2$$[$itemType$$2$$].dataTypes, $allowedTypeArray_allowedTypes_dndOption$$2$$ = "string" == typeof $allowedTypeArray_allowedTypes_dndOption$$2$$ ? [$allowedTypeArray_allowedTypes_dndOption$$2$$] : $allowedTypeArray_allowedTypes_dndOption$$2$$, $i$$295$$ = 0;$i$$295$$ < $dragDataTypes$$.length;$i$$295$$++) {
        if (0 <= $allowedTypeArray_allowedTypes_dndOption$$2$$.indexOf($dragDataTypes$$[$i$$295$$])) {
          return!0;
        }
      }
    }
    return!1;
  };
  $oj$$14$$.$TableDndContext$.prototype.$_setHeaderColumnDraggable$ = function $$oj$$14$$$$TableDndContext$$$$_setHeaderColumnDraggable$$($headerColumn$$10$$, $draggable$$) {
    if ($headerColumn$$10$$.draggable = $draggable$$) {
      $$$$14$$($headerColumn$$10$$).css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_CURSOR$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_MOVE$), $$$$14$$($headerColumn$$10$$).addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DRAGGABLE$);
    }
  };
  $oj$$14$$.$TableDndContext$.prototype.$_clearHeaderColumnDraggable$ = function $$oj$$14$$$$TableDndContext$$$$_clearHeaderColumnDraggable$$($headerColumn$$11$$) {
    $headerColumn$$11$$.draggable = "";
    $$$$14$$($headerColumn$$11$$).css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_CURSOR$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_AUTO$);
    $$$$14$$($headerColumn$$11$$).removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DRAGGABLE$);
  };
  $oj$$14$$.$TableDndContext$.prototype.$_setDragRowsData$ = function $$oj$$14$$$$TableDndContext$$$$_setDragRowsData$$($dataTransfer_nativeEvent$$, $dataTypes$$2$$, $jsonStr$$1_rowDataArray$$) {
    $dataTransfer_nativeEvent$$ = $dataTransfer_nativeEvent$$.dataTransfer;
    $jsonStr$$1_rowDataArray$$ = JSON.stringify($jsonStr$$1_rowDataArray$$);
    if ("string" == typeof $dataTypes$$2$$) {
      $dataTransfer_nativeEvent$$.setData($dataTypes$$2$$, $jsonStr$$1_rowDataArray$$);
    } else {
      if ($dataTypes$$2$$) {
        for (var $i$$296$$ = 0;$i$$296$$ < $dataTypes$$2$$.length;$i$$296$$++) {
          $dataTransfer_nativeEvent$$.setData($dataTypes$$2$$[$i$$296$$], $jsonStr$$1_rowDataArray$$);
        }
      }
    }
  };
  $oj$$14$$.$TableDndContext$.prototype.$_setDragRowsDataTransfer$ = function $$oj$$14$$$$TableDndContext$$$$_setDragRowsDataTransfer$$($event$$371$$, $dataTypes$$3$$, $selArray$$1$$) {
    for (var $rowDataArray$$1$$ = [], $i$$297$$ = 0;$i$$297$$ < $selArray$$1$$.length;$i$$297$$++) {
      var $row$$58$$ = this.$component$.getDataForVisibleRow($selArray$$1$$[$i$$297$$]);
      $row$$58$$ && $rowDataArray$$1$$.push($row$$58$$);
    }
    return $rowDataArray$$1$$.length ? (this.$_setDragRowsData$($event$$371$$.originalEvent, $dataTypes$$3$$, $rowDataArray$$1$$), this.$_dragImage$ = this.$_setDragRowsImage$($event$$371$$.originalEvent, $$$$14$$($event$$371$$.currentTarget).closest("tbody"), $selArray$$1$$), {rows:$rowDataArray$$1$$}) : null;
  };
  $oj$$14$$.$TableDndContext$.prototype.$_setDragRowsImage$ = function $$oj$$14$$$$TableDndContext$$$$_setDragRowsImage$$($nativeEvent$$1$$, $scrollTop$$13_tableBody$$23$$, $rect$$2_selArray$$2$$) {
    var $bodyClone$$2$$ = this.$_cloneTableBody$($scrollTop$$13_tableBody$$23$$);
    this.$_hideUnselectedRows$($bodyClone$$2$$, $rect$$2_selArray$$2$$);
    $rect$$2_selArray$$2$$ = $scrollTop$$13_tableBody$$23$$[0].getBoundingClientRect();
    var $scrollLeft$$17$$ = $scrollTop$$13_tableBody$$23$$.scrollLeft();
    $scrollTop$$13_tableBody$$23$$ = $scrollTop$$13_tableBody$$23$$.scrollTop();
    $nativeEvent$$1$$.dataTransfer.setDragImage($bodyClone$$2$$[0], $nativeEvent$$1$$.clientX - $rect$$2_selArray$$2$$.left + $scrollLeft$$17$$, $nativeEvent$$1$$.clientY - $rect$$2_selArray$$2$$.top + $scrollTop$$13_tableBody$$23$$);
    return $bodyClone$$2$$;
  };
  $oj$$14$$.$TableDndContext$.prototype.$_setReorderColumnsDataTransfer$ = function $$oj$$14$$$$TableDndContext$$$$_setReorderColumnsDataTransfer$$($event$$372$$, $columnIdx$$67$$) {
    var $dataTransfer$$1$$ = $event$$372$$.originalEvent.dataTransfer, $dragImage_tableIdHashCode$$ = this.$_getTableDomUtils$().$hashCode$(this.$_getTableDomUtils$().$getTableUID$());
    $dataTransfer$$1$$.setData("Text", this.$component$.$_DND_REORDER_TABLE_ID_DATA_KEY$ + ":" + $dragImage_tableIdHashCode$$ + ":" + $columnIdx$$67$$);
    $dragImage_tableIdHashCode$$ = this.$_getTableDomUtils$().$createTableHeaderColumnDragImage$($columnIdx$$67$$);
    try {
      $dataTransfer$$1$$.setDragImage($dragImage_tableIdHashCode$$[0], 0, 0);
    } catch ($e$$94$$) {
    }
  };
  $oj$$14$$.$TableDndContext$.prototype.$setTableHeaderColumnDraggable$ = function $$oj$$14$$$$TableDndContext$$$$setTableHeaderColumnDraggable$$($columnIdx$$68$$, $draggable$$1$$) {
    if (this.$_isColumnReorderEnabled$()) {
      var $headerColumns$$1$$ = this.$_getTableDomUtils$().$getTableHeaderColumns$();
      if (null != $headerColumns$$1$$ && 0 < $headerColumns$$1$$.length) {
        var $i$$298$$;
        for ($i$$298$$ = 0;$i$$298$$ < $headerColumns$$1$$.length;$i$$298$$++) {
          var $headerColumn$$12$$ = $headerColumns$$1$$[$i$$298$$];
          null != $columnIdx$$68$$ && $i$$298$$ == $columnIdx$$68$$ ? this.$_setHeaderColumnDraggable$($headerColumn$$12$$, $draggable$$1$$) : this.$_clearHeaderColumnDraggable$($headerColumn$$12$$);
        }
      }
    }
  };
  $oj$$14$$.$TableDndContext$.prototype.$_updateDragRowsState$ = function $$oj$$14$$$$TableDndContext$$$$_updateDragRowsState$$($event$$373$$, $newRowIndex$$2$$) {
    if (this.$_dropRowIndex$ != $newRowIndex$$2$$) {
      var $overRow$$1$$ = $$$$14$$($event$$373$$.target).closest("tr");
      this.$_dropRowIndex$ = $newRowIndex$$2$$;
      this.$_getTableDomUtils$().$displayDragOverIndicatorRow$(this.$_dropRowIndex$, $overRow$$1$$);
    }
  };
  $oj$$14$$.$TableRendererUtils$ = {};
  $oj$$14$$.$TableRendererUtils$.$columnHeaderDefaultRenderer$ = function $$oj$$14$$$$TableRendererUtils$$$columnHeaderDefaultRenderer$$($component$$15$$, $context$$77$$, $delegateRenderer$$2$$) {
    var $headerContentDiv_parentElement$$1$$ = $$$$14$$($context$$77$$.headerContext.parentElement), $headerColumnDiv$$2$$ = $$$$14$$(document.createElement("div"));
    $headerColumnDiv$$2$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_CLASS$);
    $headerContentDiv_parentElement$$1$$.empty();
    $headerContentDiv_parentElement$$1$$.append($headerColumnDiv$$2$$);
    $headerContentDiv_parentElement$$1$$ = $$$$14$$(document.createElement("div"));
    $headerContentDiv_parentElement$$1$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_TEXT_CLASS$);
    $headerColumnDiv$$2$$.prepend($headerContentDiv_parentElement$$1$$);
    null != $delegateRenderer$$2$$ ? $delegateRenderer$$2$$($headerContentDiv_parentElement$$1$$) : this.$columnHeaderDefaultTextRenderer$($component$$15$$, $headerContentDiv_parentElement$$1$$, $context$$77$$);
  };
  $oj$$14$$.$TableRendererUtils$.$columnHeaderSortableIconRenderer$ = function $$oj$$14$$$$TableRendererUtils$$$columnHeaderSortableIconRenderer$$($component$$16$$, $context$$78$$, $delegateRenderer$$3$$) {
    var $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_headerContentDiv$$1_parentElement$$2$$ = $$$$14$$($context$$78$$.headerContext.parentElement), $headerColumnDiv$$3$$ = $$$$14$$(document.createElement("div"));
    $headerColumnDiv$$3$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_CLASS$);
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_headerContentDiv$$1_parentElement$$2$$.empty();
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_headerContentDiv$$1_parentElement$$2$$.append($headerColumnDiv$$3$$);
    "rtl" === $component$$16$$.$_GetReadingDirection$() ? $headerColumnDiv$$3$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_PADDING_LEFT$, "0px") : $headerColumnDiv$$3$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_PADDING_RIGHT$, "0px");
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_headerContentDiv$$1_parentElement$$2$$ = $$$$14$$(document.createElement("div"));
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_headerContentDiv$$1_parentElement$$2$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_CLASS$);
    $headerColumnDiv$$3$$.append($headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_headerContentDiv$$1_parentElement$$2$$);
    var $headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$ = $$$$14$$(document.createElement("a"));
    $headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_LINK_CLASS$);
    $headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_WIDGET_ICON_CLASS$);
    $headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_ICON_CLASS$);
    $headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$);
    $headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_CLICKABLE_ICON$);
    $component$$16$$._hoverable($headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$);
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_headerContentDiv$$1_parentElement$$2$$.append($headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$);
    var $headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$ = $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_headerContentDiv$$1_parentElement$$2$$.width(), $headerColumnAscHeight$$ = $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_headerContentDiv$$1_parentElement$$2$$.height(), $headerColumnAccAscLink$$ = $$$$14$$(document.createElement("a"));
    $headerColumnAccAscLink$$.attr("tabindex", "0");
    $headerColumnAccAscLink$$.attr("href", "#");
    $headerColumnAccAscLink$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ACC_ASC_LINK_CLASS$);
    $headerColumnAccAscLink$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_HIDDEN_CONTENT_ACC_CLASS$);
    $headerColumnAccAscLink$$.text($component$$16$$.$getTranslatedString$("labelSortAsc"));
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_headerContentDiv$$1_parentElement$$2$$.append($headerColumnAccAscLink$$);
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_headerContentDiv$$1_parentElement$$2$$ = $$$$14$$(document.createElement("div"));
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_headerContentDiv$$1_parentElement$$2$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_SORT_PACEHOLDER_CLASS$);
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_headerContentDiv$$1_parentElement$$2$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_DISPLAY$, "inline-block");
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_headerContentDiv$$1_parentElement$$2$$.css($oj$$14$$.$TableDomUtils$.$CSS_PROP$.$_VERTICAL_ALIGN$, $oj$$14$$.$TableDomUtils$.$CSS_VAL$.$_MIDDLE$);
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_headerContentDiv$$1_parentElement$$2$$.css("width", $headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$ + "px");
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_headerContentDiv$$1_parentElement$$2$$.css("height", $headerColumnAscHeight$$ + "px");
    $headerColumnDiv$$3$$.append($headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_headerContentDiv$$1_parentElement$$2$$);
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_headerContentDiv$$1_parentElement$$2$$ = $$$$14$$(document.createElement("div"));
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_headerContentDiv$$1_parentElement$$2$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DSC_CLASS$);
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_headerContentDiv$$1_parentElement$$2$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$);
    $headerColumnDiv$$3$$.append($headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_headerContentDiv$$1_parentElement$$2$$);
    $headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$ = $$$$14$$(document.createElement("a"));
    $headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DSC_LINK_CLASS$);
    $headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_WIDGET_ICON_CLASS$);
    $headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DSC_ICON_CLASS$);
    $headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$);
    $headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_CLICKABLE_ICON$);
    $component$$16$$._hoverable($headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$);
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_headerContentDiv$$1_parentElement$$2$$.append($headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$);
    $headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$ = $$$$14$$(document.createElement("a"));
    $headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$.attr("tabindex", "0");
    $headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$.attr("href", "#");
    $headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ACC_DSC_LINK_CLASS$);
    $headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_HIDDEN_CONTENT_ACC_CLASS$);
    $headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$.text($component$$16$$.$getTranslatedString$("labelSortDsc"));
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_headerContentDiv$$1_parentElement$$2$$.append($headerColumnAccDscLink_headerColumnAscLink$$3_headerColumnAscWidth_headerColumnDscLink$$2$$);
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_headerContentDiv$$1_parentElement$$2$$ = $$$$14$$(document.createElement("div"));
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_headerContentDiv$$1_parentElement$$2$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_TEXT_CLASS$);
    $headerColumnDiv$$3$$.prepend($headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_headerContentDiv$$1_parentElement$$2$$);
    null != $delegateRenderer$$3$$ ? $delegateRenderer$$3$$($headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_headerContentDiv$$1_parentElement$$2$$) : this.$columnHeaderDefaultTextRenderer$($component$$16$$, $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_headerContentDiv$$1_parentElement$$2$$, $context$$78$$);
  };
  $oj$$14$$.$TableRendererUtils$.$columnHeaderDefaultTextRenderer$ = function $$oj$$14$$$$TableRendererUtils$$$columnHeaderDefaultTextRenderer$$($column$$25_component$$17$$, $headerContentDiv$$2$$, $columnIdx$$69_context$$79$$) {
    $columnIdx$$69_context$$79$$ = $columnIdx$$69_context$$79$$.columnIndex;
    $column$$25_component$$17$$ = $column$$25_component$$17$$.$_getColumnDefs$()[$columnIdx$$69_context$$79$$];
    $headerContentDiv$$2$$.text($column$$25_component$$17$$.headerText);
  };
  $oj$$14$$.$TableRendererUtils$.$tableBodyRowDefaultRenderer$ = function $$oj$$14$$$$TableRendererUtils$$$tableBodyRowDefaultRenderer$$($component$$18$$, $rowIdx$$44$$, $row$$59$$, $context$$80$$) {
    var $j$$47_tableBodyRow$$28$$ = $$$$14$$($context$$80$$.rowContext.parentElement), $rowHashCode$$4$$ = $component$$18$$.$_getTableDomUtils$().$hashCode$($row$$59$$.key), $columns$$23_columnsCount$$12$$ = $component$$18$$.$_getColumnDefs$();
    $component$$18$$.$_getTableDomUtils$().$setTableBodyRowAttributes$($row$$59$$, $j$$47_tableBodyRow$$28$$);
    $columns$$23_columnsCount$$12$$ = $columns$$23_columnsCount$$12$$.length;
    for ($j$$47_tableBodyRow$$28$$ = 0;$j$$47_tableBodyRow$$28$$ < $columns$$23_columnsCount$$12$$;$j$$47_tableBodyRow$$28$$++) {
      this.$tableBodyCellDefaultRenderer$($component$$18$$, $rowIdx$$44$$, $j$$47_tableBodyRow$$28$$, $row$$59$$, $rowHashCode$$4$$, $context$$80$$);
    }
  };
  $oj$$14$$.$TableRendererUtils$.$tableBodyCellDefaultRenderer$ = function $$oj$$14$$$$TableRendererUtils$$$tableBodyCellDefaultRenderer$$($component$$19$$, $rowIdx$$45$$, $columnIdx$$70$$, $row$$60$$, $rowHashCode$$5$$, $context$$81_tableBodyRow$$29$$) {
    $context$$81_tableBodyRow$$29$$ = $$$$14$$($context$$81_tableBodyRow$$29$$.rowContext.parentElement);
    var $cellRenderer$$2_column$$26$$ = $component$$19$$.$_getColumnDefs$()[$columnIdx$$70$$], $tableBodyCell$$14$$ = $component$$19$$.$_getTableDomUtils$().$createTableBodyCell$();
    $component$$19$$.$_getTableDomUtils$().$styleTableBodyCell$($columnIdx$$70$$, $tableBodyCell$$14$$, !0);
    $component$$19$$.$_getTableDomUtils$().$insertTableBodyCell$($rowIdx$$45$$, $row$$60$$.key, $rowHashCode$$5$$, $columnIdx$$70$$, $tableBodyCell$$14$$, $context$$81_tableBodyRow$$29$$);
    var $cellColumnContent_data$$123$$ = null;
    null != $cellRenderer$$2_column$$26$$.field && ($cellColumnContent_data$$123$$ = $row$$60$$.data[$cellRenderer$$2_column$$26$$.field]);
    if ($cellRenderer$$2_column$$26$$ = $component$$19$$.$_getColumnRenderer$($columnIdx$$70$$, "cell")) {
      var $cellContext$$3$$ = this.$getRendererContextObject$($component$$19$$, $tableBodyCell$$14$$[0], {row:$row$$60$$}), $cellColumnContent_data$$123$$ = $cellRenderer$$2_column$$26$$({cellContext:$cellContext$$3$$, columnIndex:$columnIdx$$70$$, data:$cellColumnContent_data$$123$$, row:$$$$14$$.extend({}, $row$$60$$.data)});
      null != $cellColumnContent_data$$123$$ ? $tableBodyCell$$14$$.append($cellColumnContent_data$$123$$) : ($tableBodyCell$$14$$ = $$$$14$$($context$$81_tableBodyRow$$29$$.children(":not(." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_ACC_SELECT_CLASS$ + ")")[$columnIdx$$70$$]), $component$$19$$.$_getTableDomUtils$().$setTableBodyCellAttributes$($rowIdx$$45$$, $row$$60$$.key, $rowHashCode$$5$$, $columnIdx$$70$$, $tableBodyCell$$14$$), $component$$19$$.$_getTableDomUtils$().$styleTableBodyCell$($columnIdx$$70$$, 
      $tableBodyCell$$14$$, !1));
    } else {
      $tableBodyCell$$14$$.text($cellColumnContent_data$$123$$);
    }
  };
  $oj$$14$$.$TableRendererUtils$.$getRendererContextObject$ = function $$oj$$14$$$$TableRendererUtils$$$getRendererContextObject$$($component$$20_rowContext$$2$$, $parentElement$$3_row$$61$$, $options$$260_rowKey$$26$$) {
    var $context$$82$$ = {};
    $context$$82$$.component = $oj$$14$$.Components.$getWidgetConstructor$($component$$20_rowContext$$2$$.element, "ojTable");
    var $dataSource$$1$$ = $component$$20_rowContext$$2$$.$_getData$();
    $dataSource$$1$$ instanceof $oj$$14$$.$PagingTableDataSource$ && ($dataSource$$1$$ = $dataSource$$1$$.getWrappedDataSource());
    $context$$82$$.datasource = $dataSource$$1$$;
    $context$$82$$.parentElement = $parentElement$$3_row$$61$$;
    if (null != $options$$260_rowKey$$26$$.row && ($parentElement$$3_row$$61$$ = $options$$260_rowKey$$26$$.row, $options$$260_rowKey$$26$$ = $parentElement$$3_row$$61$$.key, $context$$82$$.status = this.$getRendererStatusObject$($component$$20_rowContext$$2$$, $parentElement$$3_row$$61$$), $component$$20_rowContext$$2$$.$_hasEditableRow$() ? $oj$$14$$.$Object$.$compareValues$($options$$260_rowKey$$26$$, $component$$20_rowContext$$2$$.$_editableRowKey$) ? $context$$82$$.mode = "edit" : $context$$82$$.mode = 
    "navigation" : $context$$82$$.mode = "navigation", $dataSource$$1$$ instanceof $oj$$14$$.$FlattenedTreeTableDataSource$)) {
      $component$$20_rowContext$$2$$ = $dataSource$$1$$.$_getMetadata$($parentElement$$3_row$$61$$.index);
      for (var $i$$299$$ in $component$$20_rowContext$$2$$) {
        $component$$20_rowContext$$2$$.hasOwnProperty($i$$299$$) && ($context$$82$$[$i$$299$$] = $component$$20_rowContext$$2$$[$i$$299$$]);
      }
    }
    return $context$$82$$;
  };
  $oj$$14$$.$TableRendererUtils$.$getRendererStatusObject$ = function $$oj$$14$$$$TableRendererUtils$$$getRendererStatusObject$$($component$$21$$, $row$$62$$) {
    return{rowIndex:$row$$62$$.index, rowKey:$row$$62$$.key, currentRow:$$$$14$$.extend({}, $component$$21$$.$_getCurrentRow$())};
  };
});
