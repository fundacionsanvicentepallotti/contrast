---
layout: page
title: "Trajes"
permalink: /modelos/
---
<style>
  /* 1. Oculta el título principal de la página */
  .post-header, 
  .post-title, 
  .page-title,
  h1.post-title {
    display: none !important;
    visibility: hidden !important;
    margin: 0 !important;
    padding: 0 !important;
    height: 0 !important;
  }

  /* 2. Ajusta el espacio superior para que el filtro no quede pegado al menú */
  .uk-container {
    padding-top: 40px !important;
  }

  /* 3. Opcional: Si queda una línea divisoria huérfana, la quitamos */
  header.post-header {
    border: none !important;
    margin-bottom: 0 !important;
  }
</style>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.21.13/dist/css/uikit.min.css" />
<script src="https://cdn.jsdelivr.net/npm/uikit@3.21.13/dist/js/uikit.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/uikit@3.21.13/dist/js/uikit-icons.min.js"></script>

<div class="uk-container uk-margin-small-top" uk-filter="target: .js-filter">

    <div class="uk-flex uk-flex-center uk-margin-large-bottom">
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
