---
layout: page
title: "Trajes"
permalink: /modelos/
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

    <div class="uk-flex uk-flex-center uk-margin-small-bottom">
        <ul class="uk-subnav uk-subnav-pill">
            <li class="uk-active" uk-filter-control><a href="#">Todos</a></li>
            <li uk-filter-control="filter: [data-categoria='Esencial']"><a href="#">Esenciales</a></li>
            <li uk-filter-control="filter: [data-categoria='Especial']"><a href="#">Especiales</a></li>
        </ul>
    </div>

    <div class="uk-grid-small uk-child-width-1-2@s uk-child-width-1-3@m js-filter" uk-grid="masonry: true">
        
        {% for traje in site.trajes %}
        <div data-categoria="{{ traje.categoria }}">
            <div class="uk-card uk-card-default uk-card-hover uk-border-rounded">
                
                <div class="uk-card-media-top">
                    <a href="{{ traje.url | relative_url }}">
                        <img src="{{ traje.imagen | relative_url }}" alt="{{ traje.title }}" style="height: 350px; object-fit: cover;" class="uk-border-rounded">
                    </a>
                </div>

                <div class="uk-card-body uk-padding-small uk-text-center">
                    <!--<span class="uk-label uk-margin-small-bottom">{{ traje.categoria }}</span>
                    <h3 class="uk-card-title uk-text-bold uk-margin-remove">{{ traje.title }}</h3>-->
                </div>

            </div>
        </div>
        {% endfor %}

    </div>
</div>
