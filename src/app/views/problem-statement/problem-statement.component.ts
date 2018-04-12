import { Component } from '@angular/core';
import { AuthService, LoadingService } from 'app';
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: './problem-statement.statement.html',
  styleUrls: ['./problem-statement.component.sass']
})
export class ProblemStatementComponent {
  user: any = {}
  isLoading: boolean;

  constructor(
    private auth: AuthService,
    private loadingService: LoadingService,
    private toaster: ToastrService
  ) {
  }

}
