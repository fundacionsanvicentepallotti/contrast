---
layout: page
title: "Nuestros Modelos"
permalink: /modelos/
---
<!-- UIkit CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.25.13/dist/css/uikit.min.css" />

Colección de trajes.

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-top: 30px;">
  {% for traje in site.trajes %}
    <div style="border: 1px solid #ddd; padding: 15px; border-radius: 8px; text-align: center; background: #fff;">
      <a href="{{ traje.url | relative_url }}">
        <img src="{{ traje.imagen | relative_url }}" alt="{{ traje.title }}" style="width: 100%; border-radius: 4px;">
        <h3 style="margin-top: 10px;">{{ traje.title }}</h3>
      </a>
      <!--<p>Ficha técnica disponible</p>-->
    </div>
  {% endfor %}
</div>

<!-- UIkit JS -->
<script src="https://cdn.jsdelivr.net/npm/uikit@3.25.13/dist/js/uikit.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/uikit@3.25.13/dist/js/uikit-icons.min.js"></script>
