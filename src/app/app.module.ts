import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {   AppComponent } from "./app.component";
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { NgImageSliderModule } from 'ng-image-slider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DryKachoriComponent } from './dry-kachori/dry-kachori.component';
import { NamkeenComponent } from './namkeen/namkeen.component';
import {MatTableModule} from '@angular/material/table';
import { DemoComponent } from './demo/demo.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { GujratiPapdiComponent } from './gujrati-papdi/gujrati-papdi.component';
import { CornflakeMixtureComponent } from './cornflake-mixture/cornflake-mixture.component';
import { TastyNutsComponent } from './tasty-nuts/tasty-nuts.component';
import { BakedTriangleChipsComponent } from './baked-triangle-chips/baked-triangle-chips.component';
import { KhakraComponent } from './khakra/khakra.component';
import { MeethiPapdiComponent } from './meethi-papdi/meethi-papdi.component';
import { MiniKachoriComponent } from './mini-kachori/mini-kachori.component';
import { ChakliComponent } from './chakli/chakli.component';
import { PUFFEDPOHAComponent } from './puffed-poha/puffed-poha.component';
import { SteamBasmatiComponent } from './steam-basmati/steam-basmati.component';
import { GrainListComponent } from './grain-list/grain-list.component';
import { TraditionalBasmatiComponent } from './traditional-basmati/traditional-basmati.component';
import { PusaBasmatiComponent } from './pusa-basmati/pusa-basmati.component';
import { BasmatiComponent } from './basmati/basmati.component';
import { Basmati1509Component } from './basmati1509/basmati1509.component';
import { SugandhaRiceComponent } from './sugandha-rice/sugandha-rice.component';
import { SharbatiRiceComponent } from './sharbati-rice/sharbati-rice.component';
import { Rh10Component } from './rh10/rh10.component';
import { WheatComponent } from './wheat/wheat.component';
import { SharbatiWheatComponent } from './sharbati-wheat/sharbati-wheat.component';
import { WheatFlourComponent } from './wheat-flour/wheat-flour.component';
import { SaffronComponent } from './saffron/saffron.component';
import { HoneyComponent } from './honey/honey.component';
import { SpicesComponent } from './spices/spices.component';
import { SpiceListComponent } from './spice-list/spice-list.component';
import { FoodProductsComponent } from './food-products/food-products.component';
import { GrainsComponent } from './grains/grains.component';
import { SpicesDisplayComponent } from './spices-display/spices-display.component';
import { HomepageComponent } from './homepage/homepage.component';
import {MatTabsModule} from '@angular/material/tabs';
import { AnimComponent } from './anim/anim.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FooterComponent } from './footer/footer.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import { AboutdeveloperComponent } from './aboutdeveloper/aboutdeveloper.component';


@NgModule({
  declarations: [
    AppComponent,
    DryKachoriComponent,
    NamkeenComponent,
    DemoComponent,
    GujratiPapdiComponent,
    CornflakeMixtureComponent,
    TastyNutsComponent,
    BakedTriangleChipsComponent,
    KhakraComponent,
    MeethiPapdiComponent,
    MiniKachoriComponent,
    ChakliComponent,
    PUFFEDPOHAComponent,
    SteamBasmatiComponent,
    GrainListComponent,
    TraditionalBasmatiComponent,
    PusaBasmatiComponent,
    BasmatiComponent,
    Basmati1509Component,
    SugandhaRiceComponent,
    SharbatiRiceComponent,
    Rh10Component,
    WheatComponent,
    SharbatiWheatComponent,
    WheatFlourComponent,
    SaffronComponent,
    HoneyComponent,
    SpicesComponent,
    SpiceListComponent,
    FoodProductsComponent,
    GrainsComponent,
    SpicesDisplayComponent,
    HomepageComponent,
    AnimComponent,
    FooterComponent,
    AboutdeveloperComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    NgImageSliderModule,
    FlexLayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatMenuModule,
    MatToolbarModule,
    MatTabsModule,
    MatSidenavModule,
    MatGridListModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
