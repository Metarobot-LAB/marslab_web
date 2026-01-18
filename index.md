---
layout: archive
title: "Metarobot Projects"
author_profile: true
entries_layout: grid
classes: wide

header:
  image: /main_picture.jpg
  overlay_image: /main_picture.jpg
  overlay_filter: 0.5
  caption: "METAROBOT LABORATORY | MARS"
---

{% for post in site.posts %}
  {% include archive-single.html type="grid" %}
{% endfor %}