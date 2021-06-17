#!/bin/bash

clear


gulp lintFixScss

#  compile the sass to css
gulp compileSCSSToCSS

# Apply fixes if needed to the CSS file 
gulp lintFixCss

# Minify CSS 
gulp minifyCSS


# MAY NOT BE NEEDED ANYMORE ... run "gulp defaults" instead 