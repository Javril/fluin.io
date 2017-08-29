import { NgModule, ErrorHandler } from '@angular/core';

import { BrowserModule, Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { PostService } from './shared/post.service';
import { TalkService } from './shared/talk.service';
import { AdminService } from './shared/admin.service';

import { FluinioAppComponent } from './fluinio.component';
import { HomeComponent } from './pages/home.component';
import { BlogComponent } from './pages/blog.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// routes
import { BlogPostComponent } from './pages/blog-post.component';
import { ProjectsComponent } from './pages/projects.component';
import { TalksComponent } from './pages/talks.component';
import { TalkViewComponent } from './pages/talk-view.component';

import { EmbeddableModule } from './embeddable/embeddable.module';

import { BioComponent } from './pages/bio.component';
import { routeConfig } from './app.routes';

// Pipes
import { FirebaseToolsModule } from './firebasetools/firebasetools.module';


@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routeConfig),
        HttpModule,
        FirebaseToolsModule,
        BrowserAnimationsModule,
        EmbeddableModule
    ],
    declarations: [
        FluinioAppComponent,
        HomeComponent,
        BlogComponent,
        TalksComponent,
        TalkViewComponent,
        BlogPostComponent,
        BioComponent,
        ProjectsComponent,
    ],
    bootstrap: [FluinioAppComponent],
    providers: [
        Title,
        PostService,
        TalkService,
        AdminService,
    ],
})
export class AppModule { }

