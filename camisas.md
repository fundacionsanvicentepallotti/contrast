---
layout: default
title: "Camisería"
permalink: /Camisas/
---

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
