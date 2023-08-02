import { Component } from '@angular/core';
  
@Component({
    selector: 'page-404',
    template: `
    <div class='center'>
      <img width="200px" src="https://www.salomon.com/fr-fr/shop-emea/media/catalog/product/article_images/LC1971400/LC1971400_14d2d155608b3af3e309e5fc81be8925.png?auto=webp&bg-color=f5f5f5&dpr=1.25&fit=cover&format=pjpg&optimize=low&orient=1&pad=32%2C33%2C33%2C33&width=256"/>
      <h1>Hey, cette page n'existe pas !</h1>
      <a routerLink="/pokemons" class="waves-effect waves-teal btn-flat">
        Retourner à l' accueil
      </a>
    </div>
  `
})
export class NotFoundComponent { }