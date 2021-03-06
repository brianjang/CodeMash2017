angular.module('MyApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('/components/project/display.html',
    "<span><h3 style=\"margin-top: 0px\">Project:</h3><uib-tabset><uib-tab><uib-tab-heading id=\"summary\">Project Summary</uib-tab-heading><span ng-include=\"'/components/project/tab-summary.html'\"></span></uib-tab></uib-tabset></span>"
  );


  $templateCache.put('/components/project/tab-summary.html',
    "<div class=\"row\"><div class=\"col-md-6\"><div><h4>Details</h4><div class=\"well\"><span class=\"field_name\">Project Name</span> <span class=\"field_value\"></span><br><span class=\"field_name\">Parent Project</span> <span class=\"field_value\"></span><br><span class=\"field_name\">Status</span> <span class=\"field_value\"></span><br><span class=\"field_name\">Project Type</span> <span class=\"field_value\"></span><br></div><h4>Points of Contact</h4><div class=\"well\"><span class=\"field_name\">POC 1</span> <span class=\"field_value\"></span><br><span class=\"field_name\">POC 2</span> <span class=\"field_value\"></span><br><span class=\"field_name\">Owning Team</span> <span class=\"field_value\"></span><br><span class=\"field_name\">Oncall Team</span> <span class=\"field_value\"></span><br><span class=\"field_name\">NOC Station</span> <span class=\"field_value\"></span><br><span class=\"field_name\">Mailing List</span> <span class=\"field_value\"></span><br><span class=\"field_name\">Slack Channel</span> <span class=\"field_value\"></span><br></div><!-- end .well --></div><!-- end div --></div><!-- end .col-md-6 --><!-- column gutter --><div class=\"col-md-6\"><div><h4>Business/Financial Information</h4><div class=\"well\"><span class=\"field_name\">Cost Center</span> <span class=\"field_value\"></span><br><span class=\"field_name\">Billing Type</span> <span class=\"field_value\"></span><br><span class=\"field_name\">Classification</span> <span class=\"field_value\"></span><br></div><!-- end .well --></div><!-- end div --></div><!-- end .col-md-6 --></div>"
  );


  $templateCache.put('/components/team/display.html',
    "<span><h3 style=\"margin-top: 0px\">Team:</h3><uib-tabset><uib-tab><uib-tab-heading id=\"Summary\">Summary</uib-tab-heading><span ng-include=\"'/components/team/tab-summary.html'\"></span></uib-tab></uib-tabset></span>"
  );


  $templateCache.put('/components/team/tab-summary.html',
    "<div class=\"row\"><div class=\"col-md-6\"><div><h4>Details</h4><div class=\"well\"><span class=\"field_name\">Name</span> <span class=\"field_value\"></span><br><span class=\"field_name\">Status</span> <span class=\"field_value\"></span><br></div></div></div></div>"
  );

}]);
