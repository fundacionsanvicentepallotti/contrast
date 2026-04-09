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
    /* Asegurar que la imagen no se corte en móviles */
    .img-guia-tecnica {
        max-width: 100%;
        height: auto;
        display: block;
        margin: 0 auto;
    }
</style>

<div class="uk-container uk-margin-medium-top uk-margin-large-bottom">
    
    <div class="uk-text-center uk-margin-large-bottom" uk-scrollspy="cls: uk-animation-slide-top; delay: 300">
        <h1 class="uk-heading-divider uk-text-bold">Guías Técnicas SMR</h1>
        <p class="uk-text-meta uk-text-large">Explora la anatomía y detalles técnicos de cada prenda para una personalización precisa.</p>
    </div>

    <div uk-scrollspy="cls: uk-animation-fade; delay: 500">
        <ul class="uk-flex-center uk-subnav uk-subnav-pill" uk-switcher="animation: uk-animation-fade">
            <li><a href="#"><span uk-icon="icon: album; ratio: 0.8" class="uk-margin-small-right"></span>Sacos</a></li>
            <li><a href="#"><span uk-icon="icon: list; ratio: 0.8" class="uk-margin-small-right"></span>Pantalones</a></li>
            <li><a href="#"><span uk-icon="icon: tag; ratio: 0.8" class="uk-margin-small-right"></span>Camisas</a></li>
            <li><a href="#"><span uk-icon="icon: users; ratio: 0.8" class="uk-margin-small-right"></span>Chalecos</a></li>
        </ul>
    </div>

    <ul class="uk-switcher uk-margin-medium-top">
        
        <li>
            <div class="uk-grid-medium uk-child-width-1-2@m uk-flex-middle" uk-grid>
                <div uk-lightbox class="uk-text-center">
                    <a class="uk-inline burbuja-guia" href="{{ '/assets/image/categorias/partes-saco.webp' | relative_url }}" data-caption="Anatomía del Saco">
                        <img src="{{ '/assets/image/categorias/partes-saco.webp' | relative_url }}" 
                             alt="Guía de Sacos" class="img-guia-tecnica uk-border-rounded">
                        <div class="uk-position-center uk-overlay uk-overlay-default uk-transition-fade">
                            <span uk-icon="icon: plus; ratio: 2"></span>
                        </div>
                    </a>
                </div>
                <div>
                    <h3 class="uk-text-bold">Anatomía del Saco</h3>
                    <p>Referencia visual para la toma de medidas y selección de acabados técnicos. Al hacer clic en la imagen, podrás ampliarla para leer los detalles.</p>
                    <ul class="uk-list uk-list-divider uk-text-small">
                        <li><span class="uk-text-bold">Carterita:</span> Bolsillo superior izquierdo para pañuelo.</li>
                        <li><span class="uk-text-bold">Ticket Pocket:</span> Bolsillo pequeño funcional sobre el bolsillo principal derecho.</li>
                        <li><span class="uk-text-bold">Coderas:</span> Refuerzo opcional en el codo para estilos casuales.</li>
                    </ul>
                </div>
            </div>
        </li>

        <li>
            <div class="uk-grid-medium uk-child-width-1-2@m uk-flex-middle uk-flex-row-reverse@m" uk-grid>
                <div uk-lightbox class="uk-text-center">
                    <a class="uk-inline burbuja-guia" href="{{ '/assets/image/categorias/partes-pantalon.webp' | relative_url }}" data-caption="Anatomía del Pantalón">
                        <img src="{{ '/assets/image/categorias/partes-pantalon.webp' | relative_url }}" 
                             alt="Guía de Pantalones" class="img-guia-tecnica uk-border-rounded">
                    </a>
                </div>
                <div>
                    <h3 class="uk-text-bold">Estructura del Pantalón</h3>
                    <p>Detalles clave para asegurar el ajuste y la comodidad. Incluye vistas frontal y trasera.</p>
                    <ul class="uk-list uk-list-divider uk-text-small">
                        <li><span class="uk-text-bold">Tiro:</span> Medida crucial para la altura del pantalón.</li>
                        <li><span class="uk-text-bold">Pretina:</span> Banda de la cintura que incluye las travillas para el cinturón.</li>
                        <li><span class="uk-text-bold">Bota:</span> Terminación inferior del pantalón (ancho de boca).</li>
                    </ul>
                </div>
            </div>
        </li>

        <li>
            <div class="uk-grid-medium uk-child-width-1-2@m uk-flex-middle" uk-grid>
                <div uk-lightbox class="uk-text-center">
                    <a class="uk-inline burbuja-guia" href="{{ '/assets/image/categorias/partes-camisa.webp' | relative_url }}" data-caption="Anatomía de la Camisa">
                        <img src="{{ '/assets/image/categorias/partes-camisa.webp' | relative_url }}" 
                             alt="Guía de Camisas" class="img-guia-tecnica uk-border-rounded">
                    </a>
                </div>
                <div>
                    <h3 class="uk-text-bold">Detalles de Camisería</h3>
                    <p>Referencia técnica para la personalización de cuellos, puños y aberturas.</p>
                    <ul class="uk-list uk-list-divider uk-text-small">
                        <li><span class="uk-text-bold">Canesú:</span> Pieza de tela en los hombros para mejorar el ajuste.</li>
                        <li><span class="uk-text-bold">Sardineta:</span> Abertura de la manga con botón para facilitar el remangado.</li>
                        <li><span class="uk-text-bold">Tachón:</span> Pliegue inferior central para dar holgura.</li>
                    </ul>
                </div>
            </div>
        </li>

        <li>
            <div class="uk-grid-medium uk-child-width-1-2@m uk-flex-middle uk-flex-row-reverse@m" uk-grid>
                <div uk-lightbox class="uk-text-center">
                    <a class="uk-inline burbuja-guia" href="{{ '/assets/image/categorias/partes-chaleco.webp' | relative_url }}" data-caption="Anatomía del Chaleco">
                        <img src="{{ '/assets/image/categorias/partes-chaleco.webp' | relative_url }}" 
                             alt="Guía de Chalecos" class="img-guia-tecnica uk-border-rounded">
                    </a>
                </div>
                <div>
                    <h3 class="uk-text-bold">Configuración del Chaleco</h3>
                    <p>Detalles técnicos para el diseño frontal y el ajuste trasero.</p>
                    <ul class="uk-list uk-list-divider uk-text-small">
                        <li><span class="uk-text-bold">Hebilla:</span> Ajustador trasero para ceñir la prenda a la cintura.</li>
                        <li><span class="uk-text-bold">Vivo:</span> Acabado del borde del bolsillo para mayor elegancia.</li>
                        <li><span class="uk-text-bold">Ticket Pocket:</span> Bolsillo pequeño opcional sobre el bolsillo principal derecho.</li>
                    </ul>
                </div>
            </div>
        </li>
    </ul>
    
    <a href="#" uk-totop uk-scroll class="uk-position-fixed uk-position-bottom-right uk-margin-medium-right uk-margin-medium-bottom"></a>

</div>
