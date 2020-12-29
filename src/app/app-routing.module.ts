import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./page/home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'stream',
        loadChildren: () => import('./page/transaction/transaction.module').then(m => m.TransactionModule)
    },
    {
        path: '**', redirectTo: 'home'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
