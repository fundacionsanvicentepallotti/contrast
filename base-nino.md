---
layout: default
title: "Base Niños"
permalink: /base-ninos/
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
            <li class="uk-active" uk-filter-control><a href="#">Todas las tallas</a></li>
            <li uk-filter-control="filter: .infantil"><a href="#">Infantil</a></li>
            <li uk-filter-control="filter: .juvenil"><a href="#">Juvenil</a></li>
        </ul>

        <ul class="uk-margin-medium-bottom js-filter uk-grid-small uk-child-width-1-2 uk-child-width-1-3@m uk-text-center uk-padding-small uk-border-rounded" uk-grid style="background-color: #fafafa;">
            
            {% assign ninos_ordenados = site.base_nino | sort: "ide" %}
            
            {% for nino in ninos_ordenados %}
            <li class="{{ nino.categoria | downcase }}">
                <div class="uk-card uk-card-default uk-card-hover uk-border-rounded uk-overflow-hidden card-sombra-soft uk-transition-toggle">
                    
                    <div class="uk-card-media-top uk-inline uk-overflow-hidden">
                        <a href="{{ nino.url | relative_url }}">
                            <img src="{{ nino.imagen | relative_url }}" alt="{{ nino.title }}" 
                                 class="img-traje-catalogo uk-transition-scale-up uk-transition-opaque">
                        </a>
                    </div>

                    <div class="uk-card-body uk-padding-small">
                        <h4 class="uk-card-title uk-text-bold uk-margin-remove" style="font-size: 0.85rem; text-transform: capitalize;">
                            {{ nino.title | downcase }}
                        </h4>
                    </div>
                </div>
            </li>
            {% endfor %}
        </ul>
    </div>
</div>
