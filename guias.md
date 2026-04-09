---
layout: default
title: "Guías Visuales"
permalink: /guias/
---

<div class="uk-container uk-margin-medium-top">
    <h1 class="uk-heading-line uk-text-center"><span>Guías de Diseño SMR</span></h1>
    
    <div class="uk-child-width-1-2@s uk-child-width-1-3@m uk-grid-match" uk-grid>
        
        {% assign guias = site.guias_visuales | sort: "title" %}
        {% for guia in guias %}
        <div>
            <div class="uk-card uk-card-default uk-card-hover uk-border-rounded">
                <div class="uk-card-media-top">
                    <img src="{{ guia.imagen_referencia | relative_url }}" alt="{{ guia.title }}" style="aspect-ratio: 1/1; object-fit: cover;">
                </div>
                <div class="uk-card-body uk-padding-small uk-text-center">
                    <span class="uk-text-meta uk-text-uppercase">{{ guia.categoria }}</span>
                    <h3 class="uk-card-title uk-margin-remove" style="font-size: 1.2rem;">{{ guia.title }}</h3>
                    <a href="{{ guia.url | relative_url }}" class="uk-button uk-button-text uk-margin-small-top">Ver detalles</a>
                </div>
            </div>
        </div>
        {% endfor %}

    </div>
</div>
