<?php
echo "<!DOCTYPE html>\n";
echo "\n";
echo "<html lang=\"en\">\n";
echo " <head>\n";
echo "<script type=\"text/javascript\">\n";
echo " \n";
echo "if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)) {\n";
echo "  top.location = \"https://apps.facebook.com/515384261992651\";\n";
echo "} else {\n";
echo " if (top == self) { top.location = \"https://apps.facebook.com/515384261992651\"; }\n";
echo "  ; //this is the browser";
echo " \n";
echo "}\n";
echo " \n";
echo "</script>\n";
echo "     <title>Home</title>\n";
echo "	 <meta charset=\"utf-8\">\n";
echo "	 <!-- applying css externally\n";
echo "	 <link href=\"css/style2.css\" rel=\"stylesheet\" type=\"text/css\"> -->\n";
echo "	\n";
echo "		 <style>\n";
echo "	body {\n";
echo "    margin: 0;\n";
echo "}\n";
echo ".parent {\n";
echo "    display: flex;\n";
echo "    flex-direction: column;\n";
echo "    min-height: 100vh;\n";
echo "	margin:0px;\n";
echo "	padding:0px;\n";
echo "}\n";
echo ".parent .banner {\n";
echo "    background: #f00;\n";
echo "    width: 100%;\n";
echo "    height: 30px;\n";
echo "	margin:0px;\n";
echo "	padding:0px;\n";
echo "}\n";
echo ".parent iframe {\n";
echo "    background: #000;\n";
echo "    border: none;\n";
echo "	margin:0px;\n";
echo "	padding:0px;\n";
echo "    flex-grow: 1;\n";
echo "}\n";
echo "\n";
echo "	 </style> \n";
echo "	\n";
echo "   </head>\n";
echo "\n";
echo "<body>\n";
echo "\n";
echo "<div class=\"parent\">\n";
echo "    \n";
echo " <iframe src=\"https://manasati30.com\" width=\"100%\" height=\"100%\">\n";
echo "</iframe>\n";
echo "</div>\n";
echo "\n";
echo "\n";
echo "</body>\n";
echo "\n";
echo "</html>";
?>