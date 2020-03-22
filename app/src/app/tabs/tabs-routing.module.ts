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
                        import('../Home/home.module').then(m => m.HomeModule)
                },
                {
                    path: 'recommendation',
                    loadChildren: () =>
                        import('../Recommendation/recommendation.module').then(m => m.RecommendationModule)
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
