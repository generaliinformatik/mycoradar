import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';

const routes: Routes = [
        {
            path: 'tabs',
            component: TabsPage,
            children: [
                {
                    path: 'more',
                    loadChildren: () =>
                        import('../more/more.module').then(m => m.MoreModule)
                },
                {
                    path: 'recommendation',
                    loadChildren: () =>
                        import('../recommendation/recommendation.module').then(m => m.RecommendationModule)
                },
                {
                    path: 'profile',
                    loadChildren: () =>
                        import('../corona-profile/corona-profile.module').then(m => m.CoronaProfileModule)
                },
                {
                    path: '',
                    redirectTo: 'profile',
                    pathMatch: 'full'
                }
            ]
        },
        {
            path: '',
            redirectTo: 'tabs',
            pathMatch: 'full'
        }
    ]
;

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsPageRoutingModule {
}
