---
layout: default
title: "Camisería"
permalink: /camisas/
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

<!--<nav aria-label="Breadcrumb" class="uk-margin-bottom">
    <ul class="uk-breadcrumb">
        <li><a href="{{ site.baseurl }}/">Inicio</a></li>
        <li><a href="{{ '/modelos/' | relative_url }}">Catálogo</a></li>
        <li><span class="uk-text-bold">{{ page.title }}</span></li>
    </ul>
</nav>-->

    <div class="uk-flex uk-flex-center uk-margin-bottom">
        <ul class="uk-subnav uk-subnav-pill">
            <li class="uk-active" uk-filter-control><a href="#">Todos</a></li>
            <li uk-filter-control="filter: [data-categoria='Esencial']"><a href="#">Esenciales</a></li>
            <li uk-filter-control="filter: [data-categoria='Especial']"><a href="#"><span uk-icon="star"></span>Especiales</a></li>
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
                    <!--<span class="uk-label uk-margin-small-bottom uk-margin-xsmall-top uk-text-small">{{ traje.categoria }}</span>-->
                    <h5 class="uk-card-title uk-text-bold uk-margin-remove uk-text-small">{{ traje.ide }}</h5>
                </div>

            </div>
        </div>
        {% endfor %}

    </div>
</div>














<div class="uk-container uk-margin-large-top">
    
    <div uk-filter="target: .js-filter">
        <ul class="uk-subnav uk-subnav-pill uk-flex-center">
            <li class="uk-active" uk-filter-control><a href="#">Todas</a></li>
            <li uk-filter-control="filter: .esencial"><a href="#">Esenciales</a></li>
            <li uk-filter-control="filter: .especial"><a href="#">Especiales</a></li>
        </ul>

        <ul class="js-filter uk-grid-small uk-child-width-1-2 uk-child-width-1-3@m uk-text-center" uk-grid>
            {% for camisa in site.camisas %}
            <li class="{{ camisa.clase }}">
                <a href="{{ camisa.url | relative_url }}" class="uk-link-reset">
                    <div class="uk-card uk-card-default uk-border-rounded uk-overflow-hidden">
                        <div class="uk-card-media-top">
                            <img src="{{ camisa.imagen | relative_url }}" alt="{{ camisa.title }}" style="aspect-ratio: 3/4; object-fit: cover;">
                        </div>
                        <div class="uk-card-body uk-padding-small">
                            <h3 class="uk-card-title uk-text-small uk-text-uppercase uk-margin-remove">{{ camisa.title }}</h3>
                        </div>
                    </div>
                </a>
            </li>
            {% endfor %}
        </ul>
    </div>
</div>
