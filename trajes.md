---
layout: page
title: "trajes"
permalink: /trajes/
---
<style>
  /* 1. Ocultamos el header completo del post/página */
  .post-header, 
  header.post-header,
  .page-header {
    display: none !important;
  }

  /* 2. Por si acaso el tema usa h1 directamente */
  main h1:first-of-type,
  article h1:first-of-type,
  .uk-container h1:first-child {
    display: none !important;
  }

  /* 3. Quitamos márgenes residuales */
  .post-content {
    margin-top: 0 !important;
    padding-top: 20px !important;
  }
</style>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.21.13/dist/css/uikit.min.css" />
<script src="https://cdn.jsdelivr.net/npm/uikit@3.21.13/dist/js/uikit.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/uikit@3.21.13/dist/js/uikit-icons.min.js"></script>


<div class="uk-container uk-margin-remove-top" uk-filter="target: .js-filter">

    <div class="uk-flex uk-flex-center uk-margin-medium-top">
        <ul class="uk-subnav uk-subnav-pill">
            <li class="uk-active" uk-filter-control><a href="#">Todos</a></li>
            <li uk-filter-control="filter: [data-categoria='Esencial']"><a href="#">Esenciales</a></li>
            <li uk-filter-control="filter: [data-categoria='Especial']"><a href="#">Especiales</a></li>
        </ul>
    </div>

    <div class="uk-grid-medium uk-child-width-1-2@m js-filter" uk-grid="masonry: true">
        
        {% for traje in site.trajes %}
        <div data-categoria="{{ traje.categoria }}">
            <div class="uk-card uk-card-default uk-card-hover uk-border-rounded uk-overflow-hidden uk-box-shadow-small">
                
                <div class="uk-card-badge">
                    {% if traje.categoria == "Especial" %}
                        <span uk-icon="icon: star; ratio: 1.2" style="color: #D4AF37;"></span>
                    {% elsif traje.categoria == "Esencial" %}
                        <span uk-icon="icon: check; ratio: 1.2" style="color: #000000;"></span>
                    {% endif %}
                </div>

                <div class="uk-card-media-top uk-inline uk-overflow-hidden">
                    <a href="{{ traje.url | relative_url }}" class="uk-transition-toggle" tabindex="0">
                        <img src="{{ traje.imagen | relative_url }}" alt="{{ traje.title }}" style="height: 500px; width: 100%; object-fit: cover;" class="uk-transition-scale-up uk-transition-opaque">
                    </a>
                </div>

                <div class="uk-card-body uk-padding-small uk-text-center">
                    <h3 class="uk-card-title uk-text-bold uk-margin-remove">{{ traje.ide }}</h3>
                    <p class="uk-text-meta uk-margin-remove-top">{{ traje.categoria }}</p>
                </div>

            </div>
        </div>
        {% endfor %}

    </div>
</div>
