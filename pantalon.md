---
layout: default
title: "Pantalones"
permalink: /pantalon/
---

<style>
  .post-header, header.post-header, .page-header { display: none !important; }
  .img-traje-catalogo {
    aspect-ratio: 3 / 4;
    width: 100%;
    object-fit: cover;
    object-position: center top;
  }
  .card-sombra-soft { box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05) !important; }
</style>

<div class="uk-container uk-margin-small-top">
    <div uk-filter="target: .js-filter">
        
        <ul class="uk-subnav uk-subnav-pill uk-flex-center uk-margin-small-bottom">
            <li class="uk-active" uk-filter-control><a href="#">Todas</a></li>
            <li uk-filter-control="filter: .esencial"><a href="#">Esenciales</a></li>
            <li uk-filter-control="filter: .especial"><a href="#">Exclusivo</a></li>
        </ul>

        <ul class="uk-margin-medium-bottom js-filter uk-grid-small uk-child-width-1-2 uk-child-width-1-3@m uk-text-center uk-padding-small uk-border-rounded" uk-grid style="background-color: #fafafa;">
            
            {% assign pantalones_ordenados = site.pantalon | sort: "ide" %}
            
            {% for panta in pantalones_ordenados %}
            <li class="{{ panta.categoria | downcase }}">
                <div class="uk-card uk-card-default uk-card-hover uk-border-rounded uk-overflow-hidden card-sombra-soft uk-transition-toggle">
                    
                    <div class="uk-card-media-top uk-inline uk-overflow-hidden">
                        <a href="{{ panta.url | relative_url }}">
                            <img src="{{ panta.imagen | relative_url }}" alt="{{ panta.title }}" 
                                 class="img-traje-catalogo uk-transition-scale-up uk-transition-opaque">
                        </a>
                    </div>

                    <div class="uk-card-body uk-padding-small">
                        <h4 class="uk-card-title uk-text-bold uk-margin-remove" style="font-size: 0.85rem; text-transform: capitalize;">
                            {{ panta.title | downcase }}
                        </h4>
                    </div>
                </div>
            </li>
            {% endfor %}
        </ul>
        <a href="#" uk-totop uk-scroll></a>
    </div>
</div>
