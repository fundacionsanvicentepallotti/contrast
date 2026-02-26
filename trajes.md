---
layout: page
title: "Nuestros Modelos"
permalink: /modelos/
---

Aquí puedes ver nuestra colección de trajes. Haz clic en cada uno para ver su ficha técnica detallada.

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-top: 30px;">
  {% for traje in site.trajes %}
    <div style="border: 1px solid #ddd; padding: 15px; border-radius: 8px; text-align: center; background: #fff;">
      <a href="{{ traje.url }}">
        <img src="{{ traje.imagen }}" alt="{{ traje.title }}" style="width: 100%; border-radius: 4px;">
        <h3 style="margin-top: 10px;">{{ traje.title }}</h3>
      </a>
      <p>Ficha técnica disponible</p>
    </div>
  {% endfor %}
</div>
