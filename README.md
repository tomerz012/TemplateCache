TemplateCache
=============

TemplateCache is a utility which helps caching templates.

this specific implementation is using handlebars, but if you're using another template manager, you can easily 
set it up.

## Introduction

By default handlebars template manager does not create cache for its templates.
TemplateCache does not offer persistance, it merely adds the ability to load an already compiled template at render time.

## Usage

just include the templateManager.js.


## Dependencies

TemplateCache depends on [handlebars] although one can modify to his preffered template manager.

## License

TemplateCache is Copyright (C) 2013 Tomerz
It is distributed under the MIT license.

[handlebars]: http://handlebarsjs.com/
