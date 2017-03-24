/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojdatasource-common"], function($oj$$80$$) {
  $oj$$80$$.$_JsonTreeNodeDataSource$ = function $$oj$$80$$$$_JsonTreeNodeDataSource$$() {
    this.id = null;
    this.depth = 0;
    this.parent = null;
    this.children = [];
    this.$leaf$ = this.attr = this.title = null;
  };
  $oj$$80$$.$_JsonTreeNodeDataSource$.prototype.$_ascending$ = function $$oj$$80$$$$_JsonTreeNodeDataSource$$$$_ascending$$($key$$209$$) {
    return function($a$$127$$, $b$$75$$) {
      return $a$$127$$.attr && $b$$75$$.attr && $a$$127$$.attr[$key$$209$$] && $b$$75$$.attr[$key$$209$$] ? $a$$127$$.attr[$key$$209$$] < $b$$75$$.attr[$key$$209$$] ? -1 : $a$$127$$.attr[$key$$209$$] === $b$$75$$.attr[$key$$209$$] ? 0 : 1 : $a$$127$$[$key$$209$$] < $b$$75$$[$key$$209$$] ? -1 : $a$$127$$[$key$$209$$] === $b$$75$$[$key$$209$$] ? 0 : 1;
    };
  };
  $oj$$80$$.$_JsonTreeNodeDataSource$.prototype.$_descending$ = function $$oj$$80$$$$_JsonTreeNodeDataSource$$$$_descending$$($key$$210$$) {
    return function($a$$128$$, $b$$76$$) {
      return $a$$128$$.attr && $b$$76$$.attr && $a$$128$$.attr[$key$$210$$] && $b$$76$$.attr[$key$$210$$] ? $a$$128$$.attr[$key$$210$$] < $b$$76$$.attr[$key$$210$$] ? 1 : $a$$128$$.attr[$key$$210$$] === $b$$76$$.attr[$key$$210$$] ? 0 : -1 : $a$$128$$[$key$$210$$] < $b$$76$$[$key$$210$$] ? 1 : $a$$128$$[$key$$210$$] === $b$$76$$[$key$$210$$] ? 0 : -1;
    };
  };
  $oj$$80$$.$_JsonTreeNodeDataSource$.prototype.$_sortRecursive$ = function $$oj$$80$$$$_JsonTreeNodeDataSource$$$$_sortRecursive$$($criteria$$10$$) {
    var $i$$537_key$$211$$ = $criteria$$10$$.key;
    "ascending" === $criteria$$10$$.direction ? this.children.sort(this.$_ascending$($i$$537_key$$211$$)) : "descending" === $criteria$$10$$.direction && this.children.sort(this.$_descending$($i$$537_key$$211$$));
    for (var $i$$537_key$$211$$ = 0, $l$$17$$ = this.children.length;$i$$537_key$$211$$ < $l$$17$$;$i$$537_key$$211$$++) {
      this.children[$i$$537_key$$211$$].$_sortRecursive$($criteria$$10$$);
    }
  };
  $oj$$80$$.$JsonTreeDataSource$ = function $$oj$$80$$$$JsonTreeDataSource$$($data$$183$$) {
    var $tree$$1$$;
    $tree$$1$$ = new $oj$$80$$.$_JsonTreeNodeDataSource$;
    $data$$183$$.id || ($tree$$1$$.id = "root");
    this.data = this.$_createTreeDataSource$({count:0}, $tree$$1$$, $data$$183$$);
    $oj$$80$$.$JsonTreeDataSource$.$superclass$.constructor.call(this, $tree$$1$$);
  };
  $goog$exportPath_$$("JsonTreeDataSource", $oj$$80$$.$JsonTreeDataSource$, $oj$$80$$);
  $oj$$80$$.$Object$.$createSubclass$($oj$$80$$.$JsonTreeDataSource$, $oj$$80$$.$TreeDataSource$, "oj.JsonTreeDataSource");
  $oj$$80$$.$JsonTreeDataSource$.prototype.Init = function $$oj$$80$$$$JsonTreeDataSource$$$Init$() {
    $oj$$80$$.$JsonTreeDataSource$.$superclass$.Init.call(this);
  };
  $oj$$80$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.Init", {Init:$oj$$80$$.$JsonTreeDataSource$.prototype.Init});
  $oj$$80$$.$JsonTreeDataSource$.prototype.$_createTreeDataSource$ = function $$oj$$80$$$$JsonTreeDataSource$$$$_createTreeDataSource$$($c$$61$$, $target$$144$$, $source$$15$$, $depth$$30$$) {
    var $children$$30$$, $node$$178$$, $child$$26$$, $prop$$88$$, $propr$$, $prp$$, $j$$60$$;
    $depth$$30$$ || ($depth$$30$$ = 0);
    for ($prop$$88$$ in $source$$15$$) {
      if ("children" == $prop$$88$$ || 0 == $depth$$30$$ && $source$$15$$ instanceof Array) {
        for ($children$$30$$ = 0 == $depth$$30$$ && $source$$15$$ instanceof Array ? $source$$15$$ : $source$$15$$[$prop$$88$$], $depth$$30$$++, $j$$60$$ = 0;$j$$60$$ < $children$$30$$.length;$j$$60$$++) {
          $child$$26$$ = $children$$30$$[$j$$60$$];
          $node$$178$$ = new $oj$$80$$.$_JsonTreeNodeDataSource$;
          $child$$26$$.id || ($c$$61$$.count++, $child$$26$$.attr ? $child$$26$$.attr.id || ($child$$26$$.attr.id = "rid_" + $c$$61$$.count) : $node$$178$$.id = "rid_" + $c$$61$$.count);
          for ($propr$$ in $child$$26$$) {
            for ($prp$$ in $node$$178$$) {
              $propr$$ == $prp$$ && "children" != $propr$$ && ($node$$178$$[$prp$$] = $child$$26$$[$propr$$]), "depth" == $prp$$ && ($node$$178$$[$prp$$] = $depth$$30$$);
            }
          }
          $target$$144$$.children.push($node$$178$$);
          for ($prp$$ in $child$$26$$) {
            "children" == $prp$$ && this.$_createTreeDataSource$($c$$61$$, $target$$144$$.children[$j$$60$$], $child$$26$$, $depth$$30$$);
          }
        }
      }
    }
    return $target$$144$$;
  };
  $oj$$80$$.$JsonTreeDataSource$.prototype.$getChildCount$ = function $$oj$$80$$$$JsonTreeDataSource$$$$getChildCount$$($parent$$56_parentKey$$10$$) {
    $parent$$56_parentKey$$10$$ || ($parent$$56_parentKey$$10$$ = this.data.id);
    $parent$$56_parentKey$$10$$ = this.$_searchTreeById$(this.data, $parent$$56_parentKey$$10$$);
    return $parent$$56_parentKey$$10$$.children ? $parent$$56_parentKey$$10$$.children.length : 0;
  };
  $oj$$80$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.getChildCount", {$getChildCount$:$oj$$80$$.$JsonTreeDataSource$.prototype.$getChildCount$});
  $oj$$80$$.$JsonTreeDataSource$.prototype.$fetchChildren$ = function $$oj$$80$$$$JsonTreeDataSource$$$$fetchChildren$$($nodeSet$$33_parentKey$$11$$, $i$$538_range$$31$$, $callbacks$$58$$) {
    var $childStart$$, $childEnd$$, $results$$11$$, $parent$$57$$, $node$$179$$;
    $results$$11$$ = [];
    $nodeSet$$33_parentKey$$11$$ || ($nodeSet$$33_parentKey$$11$$ = this.data.id);
    $parent$$57$$ = this.$_searchTreeById$(this.data, $nodeSet$$33_parentKey$$11$$);
    $i$$538_range$$31$$ || ($i$$538_range$$31$$ = [], $i$$538_range$$31$$.start = 0, $i$$538_range$$31$$.count = $parent$$57$$.children.length);
    $i$$538_range$$31$$.count || ($i$$538_range$$31$$.count = $parent$$57$$.children.length);
    $i$$538_range$$31$$.start || ($i$$538_range$$31$$.start = 0);
    $childStart$$ = $i$$538_range$$31$$.start;
    $childEnd$$ = Math.min($parent$$57$$.children.length, $childStart$$ + $i$$538_range$$31$$.count);
    for ($i$$538_range$$31$$ = $childStart$$;$i$$538_range$$31$$ < $childEnd$$;$i$$538_range$$31$$ += 1) {
      $node$$179$$ = new $oj$$80$$.$_JsonTreeNodeDataSource$, $parent$$57$$.children[$i$$538_range$$31$$].attr && ($node$$179$$.attr = $parent$$57$$.children[$i$$538_range$$31$$].attr), $parent$$57$$.children[$i$$538_range$$31$$].id && ($node$$179$$.id = $parent$$57$$.children[$i$$538_range$$31$$].id), $parent$$57$$.children[$i$$538_range$$31$$].depth && ($node$$179$$.depth = $parent$$57$$.children[$i$$538_range$$31$$].depth), $parent$$57$$.children[$i$$538_range$$31$$].title && ($node$$179$$.title = 
      $parent$$57$$.children[$i$$538_range$$31$$].title), $parent$$57$$.children[$i$$538_range$$31$$].parent && ($node$$179$$.parent = $parent$$57$$.children[$i$$538_range$$31$$].parent), $node$$179$$.$leaf$ = 0 < $parent$$57$$.children[$i$$538_range$$31$$].children.length ? !1 : !0, $results$$11$$.push($node$$179$$);
    }
    $nodeSet$$33_parentKey$$11$$ = new $oj$$80$$.$JsonNodeSet$($childStart$$, $childEnd$$, $results$$11$$, $nodeSet$$33_parentKey$$11$$);
    null != $callbacks$$58$$ && null != $callbacks$$58$$.success && $callbacks$$58$$.success.call(null, $nodeSet$$33_parentKey$$11$$);
  };
  $oj$$80$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.fetchChildren", {$fetchChildren$:$oj$$80$$.$JsonTreeDataSource$.prototype.$fetchChildren$});
  $oj$$80$$.$JsonTreeDataSource$.prototype.$fetchDescendants$ = function $$oj$$80$$$$JsonTreeDataSource$$$$fetchDescendants$$($parentKey$$12$$, $callbacks$$59$$) {
    var $childEnd$$1_range$$32$$, $childStart$$1_i$$539$$, $nodeSet$$34_results$$12$$, $parent$$58$$;
    $nodeSet$$34_results$$12$$ = [];
    $parentKey$$12$$ || ($parentKey$$12$$ = this.data.id);
    $parent$$58$$ = this.$_searchTreeById$(this.data, $parentKey$$12$$);
    $childEnd$$1_range$$32$$ = [];
    $childEnd$$1_range$$32$$.start = 0;
    $childEnd$$1_range$$32$$.count = $parent$$58$$.children.length;
    $childStart$$1_i$$539$$ = $childEnd$$1_range$$32$$.start;
    for ($childEnd$$1_range$$32$$ = Math.min($parent$$58$$.children.length, $childStart$$1_i$$539$$ + $childEnd$$1_range$$32$$.count);$childStart$$1_i$$539$$ < $childEnd$$1_range$$32$$;$childStart$$1_i$$539$$ += 1) {
      $parent$$58$$.children[$childStart$$1_i$$539$$].$leaf$ = 0 < $parent$$58$$.children[$childStart$$1_i$$539$$].children.length ? !1 : !0, $nodeSet$$34_results$$12$$.push($parent$$58$$.children[$childStart$$1_i$$539$$]);
    }
    $nodeSet$$34_results$$12$$ = new $oj$$80$$.$JsonNodeSet$(0, $nodeSet$$34_results$$12$$.length, $nodeSet$$34_results$$12$$, $parentKey$$12$$);
    null != $callbacks$$59$$ && null != $callbacks$$59$$.success && $callbacks$$59$$.success.call(null, $nodeSet$$34_results$$12$$);
  };
  $oj$$80$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.fetchDescendants", {$fetchDescendants$:$oj$$80$$.$JsonTreeDataSource$.prototype.$fetchDescendants$});
  $oj$$80$$.$JsonTreeDataSource$.prototype.moveOK = function $$oj$$80$$$$JsonTreeDataSource$$$moveOK$() {
    return "valid";
  };
  $oj$$80$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.moveOK", {moveOK:$oj$$80$$.$JsonTreeDataSource$.prototype.moveOK});
  $oj$$80$$.$JsonTreeDataSource$.prototype.move = function $$oj$$80$$$$JsonTreeDataSource$$$move$($moveNode_nodeToMove$$, $refNode$$8_referenceNode$$1$$, $index$$343_position$$51$$, $callbacks$$60$$) {
    var $parent$$59_refNodeKey$$;
    $parent$$59_refNodeKey$$ = $refNode$$8_referenceNode$$1$$;
    if (!$parent$$59_refNodeKey$$ || $parent$$59_refNodeKey$$ == this.data.id) {
      if ("inside" != $index$$343_position$$51$$) {
        $oj$$80$$.$Logger$.log("Error: root can not be the reference node if position equals to " + $index$$343_position$$51$$);
        return;
      }
      $parent$$59_refNodeKey$$ || ($parent$$59_refNodeKey$$ = this.data.id);
    }
    $moveNode_nodeToMove$$ = this.$_searchTreeById$(null, $moveNode_nodeToMove$$);
    this.$_searchTreeById$($moveNode_nodeToMove$$, $parent$$59_refNodeKey$$) ? $oj$$80$$.$Logger$.log("Error: the node to move contains the reference node as its sub-tree.") : ($refNode$$8_referenceNode$$1$$ = this.$_searchTreeById$(null, $parent$$59_refNodeKey$$), $parent$$59_refNodeKey$$ = this.$_getParentById$($parent$$59_refNodeKey$$), this.$_removeFromTree$($moveNode_nodeToMove$$), "inside" == $index$$343_position$$51$$ ? (this.$_updateDepth$($moveNode_nodeToMove$$, $moveNode_nodeToMove$$.depth - 
    ($refNode$$8_referenceNode$$1$$.depth + 1)), $refNode$$8_referenceNode$$1$$.children.push($moveNode_nodeToMove$$)) : "before" == $index$$343_position$$51$$ ? (this.$_updateDepth$($moveNode_nodeToMove$$, $moveNode_nodeToMove$$.depth - $refNode$$8_referenceNode$$1$$.depth), $index$$343_position$$51$$ = $parent$$59_refNodeKey$$.children.indexOf($refNode$$8_referenceNode$$1$$), -1 < $index$$343_position$$51$$ && (0 != $index$$343_position$$51$$ ? $parent$$59_refNodeKey$$.children.splice($index$$343_position$$51$$, 
    0, $moveNode_nodeToMove$$) : $parent$$59_refNodeKey$$.children.unshift($moveNode_nodeToMove$$))) : "after" == $index$$343_position$$51$$ ? (this.$_updateDepth$($moveNode_nodeToMove$$, $moveNode_nodeToMove$$.depth - $refNode$$8_referenceNode$$1$$.depth), $index$$343_position$$51$$ = $parent$$59_refNodeKey$$.children.indexOf($refNode$$8_referenceNode$$1$$), -1 < $index$$343_position$$51$$ && $parent$$59_refNodeKey$$.children.splice($index$$343_position$$51$$ + 1, 0, $moveNode_nodeToMove$$)) : "first" == 
    $index$$343_position$$51$$ ? (this.$_updateDepth$($moveNode_nodeToMove$$, $moveNode_nodeToMove$$.depth - $refNode$$8_referenceNode$$1$$.depth), $parent$$59_refNodeKey$$.children.unshift($moveNode_nodeToMove$$)) : "last" == $index$$343_position$$51$$ && (this.$_updateDepth$($moveNode_nodeToMove$$, $moveNode_nodeToMove$$.depth - $refNode$$8_referenceNode$$1$$.depth), $parent$$59_refNodeKey$$.children.push($moveNode_nodeToMove$$)), null != $callbacks$$60$$ && null != $callbacks$$60$$.success && 
    $callbacks$$60$$.success.call(null, this.data));
  };
  $oj$$80$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.move", {move:$oj$$80$$.$JsonTreeDataSource$.prototype.move});
  $oj$$80$$.$JsonTreeDataSource$.prototype.sort = function $$oj$$80$$$$JsonTreeDataSource$$$sort$($criteria$$11$$, $callbacks$$61$$) {
    var $parent$$60$$;
    $parent$$60$$ = this.$_searchTreeById$(this.data, this.data.id);
    $parent$$60$$.$_sortRecursive$($criteria$$11$$);
    null != $callbacks$$61$$ && null != $callbacks$$61$$.success && $callbacks$$61$$.success.call(null, $parent$$60$$);
  };
  $oj$$80$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.sort", {sort:$oj$$80$$.$JsonTreeDataSource$.prototype.sort});
  $oj$$80$$.$JsonTreeDataSource$.prototype.$getSortCriteria$ = function $$oj$$80$$$$JsonTreeDataSource$$$$getSortCriteria$$() {
    return{key:null, direction:"none"};
  };
  $oj$$80$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.getSortCriteria", {$getSortCriteria$:$oj$$80$$.$JsonTreeDataSource$.prototype.$getSortCriteria$});
  $oj$$80$$.$JsonTreeDataSource$.prototype.$_getParentById$ = function $$oj$$80$$$$JsonTreeDataSource$$$$_getParentById$$($refNodeKey$$1$$, $currNode$$4$$) {
    var $i$$540$$, $parent$$61$$ = null;
    if ($refNodeKey$$1$$ == this.data.id) {
      return null;
    }
    $currNode$$4$$ || ($currNode$$4$$ = this.data);
    if ($currNode$$4$$.children && 0 < $currNode$$4$$.children.length) {
      for ($i$$540$$ = 0;$i$$540$$ < $currNode$$4$$.children.length;$i$$540$$++) {
        if ($currNode$$4$$.children[$i$$540$$].id && $currNode$$4$$.children[$i$$540$$].id == $refNodeKey$$1$$ || $currNode$$4$$.children[$i$$540$$].attr && $currNode$$4$$.children[$i$$540$$].attr.id == $refNodeKey$$1$$) {
          return $currNode$$4$$;
        }
      }
      for ($i$$540$$ = 0;$i$$540$$ < $currNode$$4$$.children.length && !($parent$$61$$ = this.$_getParentById$($refNodeKey$$1$$, $currNode$$4$$.children[$i$$540$$]));$i$$540$$++) {
      }
    }
    return $parent$$61$$;
  };
  $oj$$80$$.$JsonTreeDataSource$.prototype.$_searchTreeById$ = function $$oj$$80$$$$JsonTreeDataSource$$$$_searchTreeById$$($currChild$$2$$, $parentKey$$14$$) {
    var $i$$541$$, $result$$82$$ = null;
    $currChild$$2$$ || ($currChild$$2$$ = this.data);
    if ($currChild$$2$$.id && $currChild$$2$$.id == $parentKey$$14$$ || $currChild$$2$$.attr && $currChild$$2$$.attr.id == $parentKey$$14$$) {
      return $currChild$$2$$;
    }
    if (null != $currChild$$2$$.children) {
      for ($i$$541$$ = 0;$i$$541$$ < $currChild$$2$$.children.length && !$result$$82$$;$i$$541$$++) {
        $result$$82$$ = $currChild$$2$$.children[$i$$541$$].id && $currChild$$2$$.children[$i$$541$$].id == $parentKey$$14$$ || $currChild$$2$$.children[$i$$541$$].attr && $currChild$$2$$.children[$i$$541$$].attr.id == $parentKey$$14$$ ? $currChild$$2$$.children[$i$$541$$] : this.$_searchTreeById$($currChild$$2$$.children[$i$$541$$], $parentKey$$14$$);
      }
    }
    return $result$$82$$;
  };
  $oj$$80$$.$JsonTreeDataSource$.prototype.$_updateDepth$ = function $$oj$$80$$$$JsonTreeDataSource$$$$_updateDepth$$($currChild$$3$$, $offset$$32$$) {
    var $i$$542$$;
    $currChild$$3$$.depth -= $offset$$32$$;
    if ($currChild$$3$$.children && 0 != $currChild$$3$$.children.length) {
      for ($i$$542$$ = 0;$i$$542$$ < $currChild$$3$$.children.length;$i$$542$$++) {
        this.$_updateDepth$($currChild$$3$$.children[$i$$542$$], $offset$$32$$);
      }
    }
  };
  $oj$$80$$.$JsonTreeDataSource$.prototype.$_removeFromTree$ = function $$oj$$80$$$$JsonTreeDataSource$$$$_removeFromTree$$($currChild$$4_index$$344$$) {
    var $key$$212_parent$$62$$;
    $currChild$$4_index$$344$$.id ? $key$$212_parent$$62$$ = $currChild$$4_index$$344$$.id : $currChild$$4_index$$344$$.attr && ($key$$212_parent$$62$$ = $currChild$$4_index$$344$$.attr.id);
    ($key$$212_parent$$62$$ = this.$_getParentById$($key$$212_parent$$62$$)) || ($key$$212_parent$$62$$ = this.data);
    $currChild$$4_index$$344$$ = $key$$212_parent$$62$$.children.indexOf($currChild$$4_index$$344$$);
    -1 < $currChild$$4_index$$344$$ && $key$$212_parent$$62$$.children.splice($currChild$$4_index$$344$$, 1);
  };
  $oj$$80$$.$JsonTreeDataSource$.prototype.getCapability = function $$oj$$80$$$$JsonTreeDataSource$$$getCapability$($feature$$18$$) {
    return "fetchDescendants" === $feature$$18$$ ? "enable" : "sort" === $feature$$18$$ ? "default" : "batchFetch" === $feature$$18$$ ? "disable" : "move" === $feature$$18$$ ? "full" : null;
  };
  $oj$$80$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.getCapability", {getCapability:$oj$$80$$.$JsonTreeDataSource$.prototype.getCapability});
  $oj$$80$$.$JsonNodeSet$ = function $$oj$$80$$$$JsonNodeSet$$($startNode$$, $endNode$$, $data$$184$$, $currKey$$1$$) {
    $oj$$80$$.$Assert$.$assertNumber$($startNode$$, null);
    $oj$$80$$.$Assert$.$assertNumber$($endNode$$, null);
    this.$m_key$ = $currKey$$1$$;
    this.$m_startNode$ = $startNode$$;
    this.$m_endNode$ = $endNode$$;
    this.$m_nodes$ = $data$$184$$;
  };
  $goog$exportPath_$$("JsonNodeSet", $oj$$80$$.$JsonNodeSet$, $oj$$80$$);
  $oj$$80$$.$JsonNodeSet$.prototype.getParent = function $$oj$$80$$$$JsonNodeSet$$$getParent$() {
    return this.$m_key$;
  };
  $oj$$80$$.$Object$.$exportPrototypeSymbol$("JsonNodeSet.prototype.getParent", {getParent:$oj$$80$$.$JsonNodeSet$.prototype.getParent});
  $oj$$80$$.$JsonNodeSet$.prototype.getStart = function $$oj$$80$$$$JsonNodeSet$$$getStart$() {
    return this.$m_startNode$;
  };
  $oj$$80$$.$Object$.$exportPrototypeSymbol$("JsonNodeSet.prototype.getStart", {getStart:$oj$$80$$.$JsonNodeSet$.prototype.getStart});
  $oj$$80$$.$JsonNodeSet$.prototype.getCount = function $$oj$$80$$$$JsonNodeSet$$$getCount$() {
    return Math.max(0, this.$m_endNode$ - this.$m_startNode$);
  };
  $oj$$80$$.$Object$.$exportPrototypeSymbol$("JsonNodeSet.prototype.getCount", {getCount:$oj$$80$$.$JsonNodeSet$.prototype.getCount});
  $oj$$80$$.$JsonNodeSet$.prototype.getData = function $$oj$$80$$$$JsonNodeSet$$$getData$($index$$345$$) {
    $oj$$80$$.$Assert$.assert($index$$345$$ <= this.$m_endNode$ && $index$$345$$ >= this.$m_startNode$);
    $index$$345$$ -= this.$m_startNode$;
    return this.$m_nodes$[$index$$345$$] ? this.$m_nodes$[$index$$345$$].attr : null;
  };
  $oj$$80$$.$Object$.$exportPrototypeSymbol$("JsonNodeSet.prototype.getData", {getData:$oj$$80$$.$JsonNodeSet$.prototype.getData});
  $oj$$80$$.$JsonNodeSet$.prototype.getMetadata = function $$oj$$80$$$$JsonNodeSet$$$getMetadata$($index$$346$$) {
    var $metadata$$28$$ = [];
    $oj$$80$$.$Assert$.assert($index$$346$$ <= this.$m_endNode$ && $index$$346$$ >= this.$m_startNode$);
    $index$$346$$ -= this.$m_startNode$;
    $metadata$$28$$.key = this.$m_nodes$[$index$$346$$].id ? this.$m_nodes$[$index$$346$$].id : this.$m_nodes$[$index$$346$$].attr.id;
    $metadata$$28$$.leaf = this.$m_nodes$[$index$$346$$].$leaf$;
    $metadata$$28$$.depth = this.$m_nodes$[$index$$346$$].depth;
    null == $metadata$$28$$.leaf && ($metadata$$28$$.leaf = this.$m_nodes$[$index$$346$$].children && 0 < this.$m_nodes$[$index$$346$$].children.length ? !1 : !0);
    return $metadata$$28$$;
  };
  $oj$$80$$.$Object$.$exportPrototypeSymbol$("JsonNodeSet.prototype.getMetadata", {getMetadata:$oj$$80$$.$JsonNodeSet$.prototype.getMetadata});
  $oj$$80$$.$JsonNodeSet$.prototype.$_updateDepth$ = function $$oj$$80$$$$JsonNodeSet$$$$_updateDepth$$($currChild$$5$$, $offset$$33$$) {
    var $i$$543$$;
    $offset$$33$$++;
    $currChild$$5$$.depth = $offset$$33$$;
    if ($currChild$$5$$.children && 0 != $currChild$$5$$.children.length) {
      for ($i$$543$$ = 0;$i$$543$$ < $currChild$$5$$.children.length;$i$$543$$++) {
        this.$_updateDepth$($currChild$$5$$.children[$i$$543$$], $offset$$33$$);
      }
    }
  };
  $oj$$80$$.$JsonNodeSet$.prototype.$getChildNodeSet$ = function $$oj$$80$$$$JsonNodeSet$$$$getChildNodeSet$$($index$$347_key$$213$$) {
    var $results$$13$$, $depth$$32$$, $i$$544$$;
    $oj$$80$$.$Assert$.assert($index$$347_key$$213$$ <= this.$m_endNode$ && $index$$347_key$$213$$ >= this.$m_startNode$);
    $index$$347_key$$213$$ -= this.$m_startNode$;
    $depth$$32$$ = this.$m_nodes$[$index$$347_key$$213$$].depth;
    $results$$13$$ = this.$m_nodes$[$index$$347_key$$213$$].children;
    if (0 == $results$$13$$.length) {
      return null;
    }
    $index$$347_key$$213$$ = this.$m_nodes$[$index$$347_key$$213$$].id ? this.$m_nodes$[$index$$347_key$$213$$].id : this.$m_nodes$[$index$$347_key$$213$$].attr.id;
    for ($i$$544$$ = 0;$i$$544$$ < $results$$13$$.length;$i$$544$$++) {
      this.$_updateDepth$($results$$13$$[$i$$544$$], $depth$$32$$);
    }
    return new $oj$$80$$.$JsonNodeSet$(0, $results$$13$$.length, $results$$13$$, $index$$347_key$$213$$);
  };
  $oj$$80$$.$Object$.$exportPrototypeSymbol$("JsonNodeSet.prototype.getChildNodeSet", {$getChildNodeSet$:$oj$$80$$.$JsonNodeSet$.prototype.$getChildNodeSet$});
});
