import { Component } from '@angular/core';
import { LoanserachService } from '../loanserach.service';

@Component({
  selector: 'app-loansearch',
  templateUrl: './loansearch.component.html',
  styleUrl: './loansearch.component.css'
})
export class LoansearchComponent {
  
  accountnumber:string='';
  constructor(private loansearchservice: LoanserachService){

  }
  
  searchAccount(){
    console.log("loan component"+JSON.stringify(this.accountnumber));
    this.loansearchservice.searchAccount(this.accountnumber).subscribe(
      data=>{
        console.log(JSON.stringify(data));
      }
    )
  }
}
