---
layout: archive
title: ""
author_profile: true
entries_layout: grid
classes: wide
---

<div style="width: 100%; margin-bottom: 40px;">
  <img src="{{ site.baseurl }}/main_picture.jpg" alt="Main Picture" style="width: 100%; max-width: none; display: block; border-radius: 4px;">
</div>

{% for post in site.posts %}
  {% include archive-single.html type="grid" %}
{% endfor %}