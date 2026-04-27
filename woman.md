---
layout: default
title: "woman"
permalink: /wo/
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
        <h2 class="uk-heading-divider uk-text-bold">Woman</h2>
    </div>

    <ul class="uk-flex-center uk-subnav uk-subnav-pill" uk-switcher="animation: uk-animation-fade">
        <li><a href="#">Woman-1</a></li>
        <li><a href="#">Woman-2</a></li>
        <li><a href="#">Woman-3</a></li>
        <li><a href="#">Woman-4</a></li>
    </ul>

    <ul class="uk-switcher uk-margin-medium-top">
        
        <li>
            <div class="uk-grid-medium uk-child-width-1-1@m uk-flex-middle" uk-grid>
                <div class="uk-text-center">
                    <div uk-lightbox>
                        <a class="uk-inline burbuja-guia" href="{{ '/assets/image/categorias/guias-partes-del-saco-woman.webp' | relative_url }}" data-caption="Anatomía del Saco">
                        <img src="{{ '/assets/image/categorias/guias-partes-del-saco-woman' | relative_url }}" alt="Guía de Sacos" class="img-guia-tecnica uk-border-rounded uk-box-shadow-medium">
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
                        <a class="uk-inline burbuja-guia" href="{{ '/assets/image/categorias/guias-partes-del-saco-woman.webp' | relative_url }}" data-caption="Estructura del Pantalón">
                            <img src="{{ '/assets/image/categorias/guias-partes-del-saco-woman.webp' | relative_url }}" alt="Guía de Pantalones" class="img-guia-tecnica uk-border-rounded uk-box-shadow-medium">
                        </a>
                    </div>
                </div>

            </div>
        </li>

        <li>
            <div class="uk-grid-medium uk-child-width-1-1@m uk-flex-middle" uk-grid>
                <div class="uk-text-center">
                    <div uk-lightbox>
                        <a class="uk-inline burbuja-guia" href="{{ '/assets/image/categorias/guias-partes-del-saco-woman.webp' | relative_url }}" data-caption="Detalles de Camisería">
                            <img src="{{ '/assets/image/categorias/guias-partes-del-saco-woman.webp' | relative_url }}" alt="Guía de Camisas Woman" class="img-guia-tecnica uk-border-rounded uk-box-shadow-medium">
                        </a>
                    </div>
                </div>
            </div>
        </li>

        <li>
            <div class="uk-grid-medium uk-child-width-1-1@m uk-flex-middle" uk-grid>
                <div class="uk-text-center">
                    <div uk-lightbox>
                        <a class="uk-inline burbuja-guia" href="{{ '/assets/image/categorias/guias-partes-del-saco-woman.webp' | relative_url }}" data-caption="Configuración del Chaleco">
                            <img src="{{ '/assets/image/categorias/guias-partes-del-saco-woman.webp' | relative_url }}" alt="Guía de Chalecos Woman" class="img-guia-tecnica uk-border-rounded uk-box-shadow-medium">
                        </a>
                    </div>
                </div>
            </div>
        </li>
    </ul>
</div>
