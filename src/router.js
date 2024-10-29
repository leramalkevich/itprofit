import {Feedback} from "./components/feedback";

export class Router {
    constructor() {
        this.titlePageElement = document.getElementById('title-page');
        this.contentPageElement = document.getElementById('content');
        this.viewportElement = document.getElementById('viewport');

        this.initEvents();
        this.routes = [
            {
                route: '/',
                title: 'Форма обратной связи',
                filePathTemplate: '/templates/feedback.html',
                load: () => {
                    new Feedback(this.openNewRoute.bind(this));
                }
            },
            {
              route: '/404',
                title: 'Страница не найдена',
                filePathTemplate: '/templates/404.html'
            },
        ]
    }

    initEvents() {
        window.addEventListener('DOMContentLoaded', this.activateRoute.bind(this));
        // вызываем функцию когда поменялся URL (то есть отлавливаем изменения)
        // window.addEventListener('popstate', this.activateRoute.bind(this));
        // document.addEventListener('click', this.clickHandler.bind(this));
    }

    async openNewRoute(url) {
        const currentRoute = window.location.pathname;
        history.pushState({}, '', url);
        await this.activateRoute(null, currentRoute);
    }

    async activateRoute(e, oldRoute = null) {
        if (oldRoute) {
            const currentRoute = this.routes.find(item => item.route === oldRoute);
            if (currentRoute.styles && currentRoute.styles.length > 0) {
                currentRoute.styles.forEach(style => {
                    document.querySelector(`link[href='/css/${style}']`).remove();
                })
            }

            if (currentRoute.unload && typeof currentRoute.unload === 'function') {
                currentRoute.unload();
            }
        }
        const urlRoute = window.location.pathname;
        const newRoute = this.routes.find(item => item.route === urlRoute);

        if (newRoute) {
            if (newRoute.styles && newRoute.styles.length > 0) {
                newRoute.styles.forEach(style => {
                    const link = document.createElement('link');
                    link.rel = 'stylesheet';
                    link.href = '/css/' + style;
                    document.head.insertBefore(link, this.viewportElement);
                })
            }

            if (newRoute.title) {
                this.titlePageElement.innerText = newRoute.title;
            }

            if (newRoute.filePathTemplate) {
                this.contentPageElement.innerHTML = await fetch(newRoute.filePathTemplate).then(response => response.text());
            }

            if (newRoute.load && typeof newRoute.load === 'function') {
                newRoute.load();
            }
        } else {
            console.log('No route found');
            history.pushState({}, '', '/404');
            await this.activateRoute();
        }
    }
}