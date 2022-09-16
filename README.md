# WARNING

This is ~~probably~~ a very bad idea.
If you're using Nunjucks templating, you can do some questionable life choices in your .eleventy.js config file and create dynamic collections using this nonsense:

```js
eleventyConfig.addCollection("liveColl", (collectionApi) => collectionApi);
```

Now, in your Nunjucks templates, you can do this:

```njk
<ol>
  {% for post in collections.liveColl.getFilteredByTag("animal") %}
  <li>{{ post.data.title }} -- tags={{ post.data.tags }}</li>
  {% endfor %}
</ol>
```

Similarly, using `getFilteredByTags()` (plural):
```njk
<ol>
  {% for post in collections.liveColl.getFilteredByTags("animal", "mineral") %}
  <li>{{ post.data.title }} -- tags={{ post.data.tags }}</li>
  {% endfor %}
</ol>
```

Filter by globs? Why not!
```njk
<ol>
  {% for post in collections.liveColl.getFilteredByGlob("src/posts/*.njk") %}
  <li>{{ post.data.title }} -- tags={{ post.data.tags }}</li>
  {% endfor %}
</ol>
```

But wait&hellip; it get's worse! What if you set your tags dynamically, via `eleventyComputed`?

```njk
---
title: Seven
eleventyComputed:
  tags:
    - dynamic
    - whimsy
---

<h1 data-tags="{{ tags }}">{{ title }}</h1>
```

Amazingly, that seems to work too!
```njk
<ol>
  {% for post in collections.liveColl.getFilteredByTag("dynamic") %}
  <li>{{ post.data.title }} -- tags={{ post.data.tags }}</li>
  {% endfor %}
</ol>
```

Probably a very terrible, no good idea. But it seemed to work based on my [very limited] testing. :shrug:
