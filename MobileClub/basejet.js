requirejs.config({
    paths:
    {
        'ojs': '../lib/jet/3.0.0/js/libs/oj/v3.0.0/debug',
        'knockout': '../lib/jet/3.0.0/js/libs/knockout/knockout-3.4.0.debug',
        'jquery': '../lib/jet/3.0.0/js/libs/jquery/jquery-3.1.1.min',
        'promise': '../lib/jet/3.0.0/js/libs/es6-promise/es6-promise.min',
        'ojL10n': '../lib/jet/3.0.0/js/libs/oj/v3.0.0/ojL10n',
        'jqueryui-amd': '../lib/jet/3.0.0/js/libs/jquery/jqueryui-amd-1.12.0.min',
        'ojdnd': '../lib/jet/3.0.0/js/libs/dnd-polyfill/dnd-polyfill-1.0.0.min',
        'hammerjs': '../lib/jet/3.0.0/js/libs/hammer/hammer-2.0.8.min',
        'ojtranslations': '../lib/jet/3.0.0/js/libs/oj/v3.0.0/resources',
        'text': '../lib/jet/3.0.0/js/libs/text/text',
        'css': '../lib/jet/3.0.0/js/libs/require-css/css',
        'customElements': '../lib/jet/3.0.0/js/libs/webcomponents/CustomElements.min'

    },
    shim: {
        'jquery': {
            exports: ['jQuery', '$']
        }
    },
    config: {
        ojL10n: {
            merge: {

            }
        }
    }
}); 

require(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout',
    'ojs/ojnavigationlist', 'ojs/ojoffcanvas', 'ojs/ojmodule'],
    function (oj, ko, $) {	
      function viewModel() {
        var self = this;

        // Nav Drawer
        self.drawerSelection = ko.observable('dashboard');
        self.pageLabel = ko.computed(function () {
          var selection = ko.toJS(self.drawerSelection);
          return selection.charAt(0).toUpperCase() + selection.slice(1);
        });
        self.toggleDrawer = function () {
          var selection = ko.toJS(self.drawerSelection);
          //var home = document.getElementById("content1").innerHTML;  
          if(selection == "dashboard")
          {
        	  // Populate some content
        	  //home = document.getElementById("content1").innerHTML;
        	  document.getElementById('content2').style.display = "none";
        	  document.getElementById('content1').style.display = "block";
        	  //$('#content').empty();
          }
          if(selection == "incidents")
          {
        	  // Populate some content
        	  //home = document.getElementById("content2").innerHTML;
        	  document.getElementById('content1').style.display = "none";
        	  document.getElementById('content2').style.display = "block";
        	  //$('#content').empty();
        	  //$('#content').append(home);
          }
          
          return oj.OffcanvasUtils.toggle({selector: '#navDrawer', modality: 'modal', 'content': '#pageContent'});
        };
        // Add a close listener so we can move focus back to the toggle button when the drawer closes
       $("#navDrawer").on("ojclose", function() { $('#drawerToggleButton').focus(); });      
       

      }


      // Method for adjusting the content area top/bottom paddings to avoid overlap with any fixed regions. 
      // This method should be called whenever your fixed region height may change.  The application
      // can also adjust content paddings with css classes if the fixed region height is not changing between 
      // views.
      function adjustContentPadding() {
        var topElem = document.getElementsByClassName('oj-applayout-fixed-top')[0];
        var contentElem = document.getElementsByClassName('oj-applayout-content')[0];
        var bottomElem = document.getElementsByClassName('oj-applayout-fixed-bottom')[0];

        if (topElem) {
          contentElem.style.paddingTop = topElem.offsetHeight+'px';
        }
        if (bottomElem) {
          contentElem.style.paddingBottom = bottomElem.offsetHeight+'px';
        }
        // Add oj-complete marker class to signal that the content area can be unhidden.
        // See the CSS demo tab to see when the content area is hidden.
        contentElem.classList.add('oj-complete');
        
      }

      $(function () {
        ko.applyBindings(new viewModel(), document.getElementById('page'));
       
        adjustContentPadding();
      });
  });
