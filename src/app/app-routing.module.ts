import{ NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivrosRoutes } from './livros';

export const router : Routes = [
    {
        path: '',
        redirectTo: 'livros/listar',
        pathMatch: 'full'
    },
    ...LivrosRoutes
]


@NgModule({
    imports : [ RouterModule.forRoot(router)],
    exports : [ RouterModule]
})

export class AppRoutingModule {}