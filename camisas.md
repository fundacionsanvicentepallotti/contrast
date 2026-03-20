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
  /* Proporción de aspecto 3:4 para las imágenes del catálogo */
.img-traje-catalogo {
    aspect-ratio: 3 / 4;
    width: 100%;
    object-fit: cover;
    object-position: center top; /* Enfoca la parte superior (hombros/cara) si la foto es muy alta */
}

/* Sombra extra suave personalizada */
.card-sombra-soft {
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05) !important;
}
</style>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.21.13/dist/css/uikit.min.css" />
<script src="https://cdn.jsdelivr.net/npm/uikit@3.21.13/dist/js/uikit.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/uikit@3.21.13/dist/js/uikit-icons.min.js"></script>




<div class="uk-container uk-margin-small-top">
    
    <div uk-filter="target: .js-filter">
        <ul class="uk-subnav uk-subnav-pill uk-flex-center uk-margin-small-bottom">
            <li class="uk-active" uk-filter-control>
                <a href="#" class="uk-text-small uk-text-bold" style="text-transform: uppercase; letter-spacing: 1.5px; border-bottom: 2px solid transparent;">Todas</a>
            </li>
            <li uk-filter-control="filter: .esencial">
                <a href="#" class="uk-text-small uk-text-bold" style="text-transform: uppercase; letter-spacing: 1.5px;">Esenciales</a>
            </li>
            <li uk-filter-control="filter: .especial">
                <a href="#" class="uk-text-small uk-text-bold" style="text-transform: uppercase; letter-spacing: 1.5px;">Exclusivo</a>
            </li>
        </ul>

        <ul class="js-filter uk-grid-small uk-child-width-1-2 uk-child-width-1-3@m uk-text-center uk-padding-small uk-border-rounded" uk-grid style="background-color: #fafafa;">
            
            {% comment %} Ordenamiento inteligente por ID (1 al 12) {% endcomment %}
            {% assign camisas_ordenadas = site.camisas | sort: "ide" %}
            
            {% for camisa in camisas_ordenadas %}
            <li class="{{ camisa.categoria | downcase }}">
                <div class="uk-card uk-card-default uk-card-hover uk-border-rounded uk-overflow-hidden card-sombra-soft uk-transition-toggle">
                    
                    <div class="uk-card-media-top uk-inline uk-overflow-hidden">
                        
                        {% if camisa.categoria == "especial" or camisa.categoria == "Especial" %}
                        <div style="position: absolute; top: 12px; right: 12px; z-index: 10;" 
                             uk-scrollspy="cls: uk-animation-scale-up; delay: 300; repeat: false">
                            <span uk-icon="icon: star; ratio: 0.9" 
                                  class="icon-estrella-especial" 
                                  style="color: #D4AF37; filter: drop-shadow(0px 2px 3px rgba(0,0,0,0.3)); transition: transform 0.4s ease-in-out; display: block;">
                            </span>
                        </div>
                        {% endif %}

                        <a href="{{ camisa.url | relative_url }}">
                            <img src="{{ camisa.imagen | relative_url }}" alt="{{ camisa.title }}" 
                                 class="img-traje-catalogo uk-transition-scale-up uk-transition-opaque">
                        </a>
                    </div>

                    <div class="uk-card-body uk-padding-small">
                        <h4 class="uk-card-title uk-text-bold uk-margin-remove" style="font-size: 0.85rem; text-transform: capitalize; uk-text-center">
                            {{ camisa.title | downcase }}
                        </h4>
                        <!--<p class="uk-text-meta uk-margin-remove-top" style="font-size: 0.7rem; uk-text-center uk-text-muted text-transform: uppercase;">
                            {{ camisa.ide_camisa }}
                        </p>-->
                    </div>
                </div>
            </li>
            {% endfor %}
        </ul>
    </div>
</div>
