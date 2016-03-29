# Nested Anchor jQuery plugin

You can write nested &lt;a&gt; tag in your HTML page

* Supports AMD/CommonJS

[View Example](example.html)

## Installation

Include the script (unless you are packaging scripts somehow else):

```html
<link rel="stylesheet" href="/path/to/nestedanchor.css"/>
<script src="/path/to/nestedanchor.js"></script>
```

**Do not include the script directly from GitHub (http://raw.github.com/...).** The file is being served as text/plain and as such being blocked
in Internet Explorer on Windows 7 for instance (because of the wrong MIME type). Bottom line: GitHub is not a CDN.

It can also be loaded as an AMD or CommonJS module.

## Basic Usage

Activate plugin

```javascript
$(document).nestedanchor();
```

Create a link

```html
<span class="link" data-href="http://google.com">Google</span>
```

Set a target

```html
<span class="link" data-href="http://google.com" data-target="_blank">Google</span>
```

You can even make nested link tag(s)!

```html
<span class="link" data-href="http://google.com" data-target="_blank">This link take you Google, but <span class="link" data-href="http://bing.com" data-target="_blank">this nested link</span> takes Bing.com</span>
```

## Contributing

Use your common sence! :-)

## Authors

* [Hoya Kim](https://github.com/webstory)
