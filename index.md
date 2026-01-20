---
layout: archive
title: "Metarobot Projects"
author_profile: true
entries_layout: grid
classes: wide
header:
  teaser: /assets/images/logo.jpg
  overlay_image: /assets/images/logo.jpg
  overlay_filter: 0.5
  caption: "Engineering the Future with **METAROBOT**"
---

{% for post in site.posts %}
  {% include archive-single.html type="grid" %}
{% endfor %}