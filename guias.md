---
layout: default
title: "Guías Visuales de Confección"
permalink: /guias/
---

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.21.13/dist/css/uikit.min.css" />
<script src="https://cdn.jsdelivr.net/npm/uikit@3.21.13/dist/js/uikit.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/uikit@3.21.13/dist/js/uikit-icons.min.js"></script>

<style>
    .img-guia-tecnica {
        max-width: 100%;
        height: auto;
        display: block;
        margin: 0 auto;
        transition: transform 0.3s ease;
    }
    .burbuja-guia:hover .img-guia-tecnica {
        transform: scale(1.02);
    }
    .uk-subnav-pill > .uk-active > a {
        background-color: #000 !important; /* Ajuste para el tema de contraste */
        color: #fff !important;
    }
</style>

<div class="uk-container uk-margin-top uk-margin-xsmall-bottom">
    
    <div class="uk-text-center uk-margin-xsmall-bottom">
        <h2 class="uk-heading-divider uk-text-bold">Guías Técnicas SMR</h2>
    </div>

    <ul class="uk-flex-center uk-subnav uk-subnav-pill" uk-switcher="animation: uk-animation-fade">
        <li><a href="#">Sacos</a></li>
        <li><a href="#">Pantalones</a></li>
        <li><a href="#">Camisas</a></li>
        <li><a href="#">Chalecos</a></li>
    </ul>

    <ul class="uk-switcher uk-margin-xsmall-top">
        
        <li>
            <div class="uk-grid-medium uk-child-width-1-1@m uk-flex-middle" uk-grid>
                <div class="uk-text-center">
                    <div uk-lightbox>
                        <a class="uk-inline burbuja-guia" href="{{ '/assets/image/categorias/guias-partes-del-saco.webp' | relative_url }}" data-caption="Anatomía del Saco">
                        <img src="{{ '/assets/image/categorias/guias-partes-del-saco.webp' | relative_url }}" alt="Guía de Sacos" class="img-guia-tecnica uk-border-rounded uk-box-shadow-medium">
                        </a>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
        </li>

        <li>
            <div class="uk-grid-medium uk-child-width-1-1@m uk-flex-middle" uk-grid>
                <div class="uk-text-center">
                    <div uk-lightbox>
                        <a class="uk-inline burbuja-guia" href="{{ '/assets/image/categorias/guias-partesdelpantalon.webp' | relative_url }}" data-caption="Estructura del Pantalón">
                            <img src="{{ '/assets/image/categorias/guias-partesdelpantalon.webp' | relative_url }}" alt="Guía de Pantalones" class="img-guia-tecnica uk-border-rounded uk-box-shadow-medium">
                        </a>
                    </div>
                </div>

            </div>
        </li>

        <li>
            <div class="uk-grid-medium uk-child-width-1-1@m uk-flex-middle" uk-grid>
                <div class="uk-text-center">
                    <div uk-lightbox>
                        <a class="uk-inline burbuja-guia" href="{{ '/assets/image/categorias/guias-partesdelacamisa.webp' | relative_url }}" data-caption="Detalles de Camisería">
                            <img src="{{ '/assets/image/categorias/guias_partesdelacamisa.webp' | relative_url }}" alt="Guía de Camisas" class="img-guia-tecnica uk-border-rounded uk-box-shadow-medium">
                        </a>
                    </div>
                </div>
            </div>
        </li>

        <li>
            <div class="uk-grid-medium uk-child-width-1-1@m uk-flex-middle" uk-grid>
                <div class="uk-text-center">
                    <div uk-lightbox>
                        <a class="uk-inline burbuja-guia" href="{{ '/assets/image/categorias/guias-partesdelchaleco.webp' | relative_url }}" data-caption="Configuración del Chaleco">
                            <img src="{{ '/assets/image/categorias/guias-partesdelchaleco.webp' | relative_url }}" alt="Guía de Chalecos" class="img-guia-tecnica uk-border-rounded uk-box-shadow-medium">
                        </a>
                    </div>
                </div>
            </div>
        </li>
    </ul>
</div>
