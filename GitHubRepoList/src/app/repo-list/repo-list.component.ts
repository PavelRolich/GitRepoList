import { Component, OnInit } from '@angular/core';
import { GitAPIService } from '../git-api.service';
import { FormControl } from '@angular/forms';
import { Repository } from '../app.model';
import { filter, switchMap, debounceTime, catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss']
})
export class RepoListComponent implements OnInit {
  findControl = new FormControl();
  repositList = [];
  name = 'PavelRolich';
  constructor(private githubService: GitAPIService) { }

  ngOnInit() {
    this.findControl.valueChanges
    .pipe(switchMap(value => this.githubService.searchRepositoriesByName(this.name).pipe())).subscribe(repo => {
      this.repositList.push(repo);
    });
    console.log(this.repositList);
  }
}
