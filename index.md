---
layout: archive
title: ""
author_profile: true
entries_layout: grid
classes: wide
---

<img src="{{ site.baseurl }}/main_picture.jpg" alt="Main Picture" style="width: 100%; height: auto; margin-bottom: 30px; border-radius: 8px;">

{% for post in site.posts %}
  {% include archive-single.html type="grid" %}
{% endfor %}