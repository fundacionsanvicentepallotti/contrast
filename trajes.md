---
layout: page
title: "Nuestros Modelos"
permalink: /modelos/
---
<!-- UIkit CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.25.13/dist/css/uikit.min.css" />
<!-- UIkit JS -->
<script src="https://cdn.jsdelivr.net/npm/uikit@3.25.13/dist/js/uikit.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/uikit@3.25.13/dist/js/uikit-icons.min.js"></script>

<div class="uk-margin-medium-bottom">
  <ul class="uk-subnav uk-subnav-pill" uk-margin>
    <li class="uk-active" uk-filter-control><a href="#">Todos</a></li>
    
    <li uk-filter-control="filter: [data-categoria='Esencial']"><a href="#">Esenciales</a></li>
    <li uk-filter-control="filter: [data-categoria='Especial']"><a href="#">Especiales</a></li>
  </ul>
</div>

<div class="uk-grid-small uk-child-width-1-2@s uk-child-width-1-3@m js-filter" uk-grid>
  
  {% for traje in site.trajes %}
  <div data-categoria="{{ traje.categoria }}" data-botones="{{ traje.botones_delantero }}">
    <div class="uk-card uk-card-default uk-card-hover uk-border-rounded">
      <div class="uk-card-media-top">
        <a href="{{ traje.url | relative_url }}">
          <img src="{{ traje.imagen | relative_url }}" alt="{{ traje.title }}" style="height: 300px; object-fit: cover;" class="uk-border-rounded">
        </a>
      </div>
      <div class="uk-card-body uk-padding-small">
        <span class="uk-label">{{ traje.categoria }}</span> <h3 class="uk-card-title uk-text-bold uk-margin-small-top uk-margin-remove-bottom">{{ traje.title }}</h3>
        <p class="uk-text-meta uk-margin-remove-top">{{ traje.botones_delantero }}</p>
      </div>
    </div>
  </div>
  {% endfor %}

</div>
