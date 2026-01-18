---
layout: archive
title: "Metarobot Projects"
author_profile: true
entries_layout: grid
classes: wide

header:
  image: /main_picture.jpg
  overlay_image: /main_picture.jpg
  overlay_filter: 0.3
  caption: "METAROBOT LABORATORY | MARS"
  image_description: "METAROBOT LABORATORY 단체 사진"
---

{% for post in site.posts %}
  {% include archive-single.html type="grid" %}
{% endfor %}