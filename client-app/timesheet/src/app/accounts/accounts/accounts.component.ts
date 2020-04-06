import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { AccountModel } from 'src/app/models/account.model';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  accounts: AccountModel[] = [];
  displayedColumns: string[] = ['id', 'userName', 'email', 'firstName', 'lastName'];

  constructor(private accountsService: AccountsService) { }

  fetchAccounts() {
    this.accountsService.getAccounts()
      .subscribe(response => this.accounts = [...response.result.data]
        ,
        err => console.error(err)
      );
  }

  ngOnInit() {
    this.fetchAccounts();
  }

}