import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { ReferencesComponent } from './references/references.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'education', component: EducationComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'achievements', component: AchievementsComponent },
  { path: 'references', component: ReferencesComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    EducationComponent,
    SkillsComponent,
    AchievementsComponent,
    ReferencesComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
