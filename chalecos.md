---
layout: default
title: "Chalecos"
permalink: /chalecos/
---

<div class="uk-container uk-margin-small-top">
    <div uk-filter="target: .js-filter">
        
        <ul class="uk-subnav uk-subnav-pill uk-flex-center uk-margin-small-bottom">
            <li class="uk-active" uk-filter-control><a href="#">Todas</a></li>
            <li uk-filter-control="filter: .esencial"><a href="#">Esenciales</a></li>
            <li uk-filter-control="filter: .especial"><a href="#">Exclusivo</a></li>
        </ul>

<ul class="uk-margin-medium-bottom js-filter uk-grid-small uk-child-width-1-2 uk-child-width-1-3@m uk-text-center uk-padding-small uk-border-rounded" uk-grid style="background-color: #fafafa;">
    
    {% comment %} Ordenamos por el campo 'ide' que definiste en el archivo {% endcomment %}
    {% assign chalecos_ordenados = site.chalecos | sort: "ide" %}
    
    {% for chaleco in chalecos_ordenados %}
    {% comment %} Usamos 'categoria' sin tilde como está en tu archivo casino.md {% endcomment %}
    <li class="{{ chaleco.categoria | downcase }}">
        <div class="uk-card uk-card-default uk-card-hover uk-border-rounded uk-overflow-hidden card-sombra-soft uk-transition-toggle">
            
            <div class="uk-card-media-top uk-inline uk-overflow-hidden">
                {% if chaleco.categoria == "Esencial" %}
                {% endif %}

                <a href="{{ chaleco.url | relative_url }}">
                    <img src="{{ chaleco.imagen | relative_url }}" alt="{{ chaleco.title }}" 
                         class="img-traje-catalogo uk-transition-scale-up uk-transition-opaque">
                </a>
            </div>

            <div class="uk-card-body uk-padding-small">
                <h4 class="uk-card-title uk-text-bold uk-margin-remove" style="font-size: 0.85rem; text-transform: capitalize;">
                    {% comment %} Usamos 'title' como está en tu archivo {% endcomment %}
                    {{ chaleco.title | downcase }}
                </h4>
            </div>
        </div>
    </li>
    {% endfor %}
</ul>
        <a href="#" uk-totop uk-scroll></a>
    </div>
</div>
