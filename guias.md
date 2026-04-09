---
layout: default
title: "Guías Visuales de Confección"
permalink: /guias/
---

<style>
    .burbuja-guia {
        box-shadow: 0 5px 15px rgba(0,0,0,0.08) !important;
        transition: transform 0.3s ease;
    }
    .burbuja-guia:hover {
        transform: scale(1.02);
    }
    .img-guia-tecnica {
        max-width: 100%;
        height: auto;
        display: block;
        margin: 0 auto;
    }
</style>

<div class="uk-container uk-margin-medium-top uk-margin-large-bottom">
    
    <div class="uk-text-center uk-margin-large-bottom">
        <h1 class="uk-heading-divider uk-text-bold">Guías Técnicas SMR</h1>
        <!--<p class="uk-text-meta uk-text-large">Explora la anatomía y detalles técnicos de cada prenda para una personalización precisa.</p>-->
    </div>

    <ul class="uk-flex-center uk-subnav uk-subnav-pill" uk-switcher="animation: uk-animation-fade">
        <li><a href="#">Sacos</a></li>
        <li><a href="#">Pantalones</a></li>
        <li><a href="#">Camisas</a></li>
        <li><a href="#">Chalecos</a></li>
    </ul>

    <ul class="uk-switcher uk-margin-medium-top">
        
        <li>
            <div class="uk-grid-medium uk-child-width-1-3@m uk-flex-middle" uk-grid>
                <div uk-lightbox class="uk-text-center">
                    <a class="uk-inline burbuja-guia" href="{{ '/assets/image/categorias/guias-partes-del-saco.webp' | relative_url }}">
                        <img src="{{ '/assets/image/categorias/guias-partes-del-saco.webp' | relative_url }}" alt="Guía de Sacos" class="img-guia-tecnica uk-border-rounded">
                    </a>
                </div>
                <div>
                    <h3 class="uk-text-bold">Anatomía del Saco</h3>
                    <p>Referencia visual para la toma de medidas y selección de acabados técnicos.</p>
                </div>
            </div>
        </li>

        <li>
            <div class="uk-grid-medium uk-child-width-1-2@m uk-flex-middle" uk-grid>
                <div uk-lightbox class="uk-text-center">
                    <a class="uk-inline burbuja-guia" href="{{ '/assets/image/categorias/guias-partesdelpantalon.webp' | relative_url }}">
                        <img src="{{ '/assets/image/categorias/guias-partesdelpantalon.webp' | relative_url }}" alt="Guía de Pantalones" class="img-guia-tecnica uk-border-rounded">
                    </a>
                </div>
                <div>
                    <h3 class="uk-text-bold">Estructura del Pantalón</h3>
                    <p>Detalles clave para asegurar el ajuste y la comodidad.</p>
                </div>
            </div>
        </li>

        <li>
            <div class="uk-grid-medium uk-child-width-1-2@m uk-flex-middle" uk-grid>
                <div uk-lightbox class="uk-text-center">
                    <a class="uk-inline burbuja-guia" href="{{ '/assets/image/categorias/guias-partesdelacamisa.webp' | relative_url }}">
                        <img src="{{ '/assets/image/categorias/guias-partesdelacamisa.webp' | relative_url }}" alt="Guía de Camisas" class="img-guia-tecnica uk-border-rounded">
                    </a>
                </div>
                <div>
                    <h3 class="uk-text-bold">Detalles de Camisería</h3>
                    <p>Referencia técnica para la personalización de cuellos y puños.</p>
                </div>
            </div>
        </li>

        <li>
            <div class="uk-grid-medium uk-child-width-1-2@m uk-flex-middle" uk-grid>
                <div uk-lightbox class="uk-text-center">
                    <a class="uk-inline burbuja-guia" href="{{ '/assets/image/categorias/guias-partesdelchaleco.webp' | relative_url }}">
                        <img src="{{ '/assets/image/categorias/guias-partesdelchaleco.webp' | relative_url }}" alt="Guía de Chalecos" class="img-guia-tecnica uk-border-rounded">
                    </a>
                </div>
                <div>
                    <h3 class="uk-text-bold">Configuración del Chaleco</h3>
                    <p>Detalles técnicos para el diseño frontal y ajuste trasero.</p>
                </div>
            </div>
        </li>
    </ul>
</div>
