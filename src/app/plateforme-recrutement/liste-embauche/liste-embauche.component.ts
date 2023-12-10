import { Component, OnInit } from '@angular/core';
import { Cv } from '../cv.model';
import { EmbaucheService } from '../embauche.service';
import { NgIf, NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-liste-embauche',
  templateUrl: './liste-embauche.component.html',
  styleUrls: ['./liste-embauche.component.css'],
  standalone:true,
  imports:[CommonModule,
  ]
})
export class ListeEmbaucheComponent implements OnInit {
  cvs: Cv[] = [];
  constructor(private embaucheService: EmbaucheService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.cvs = this.embaucheService.getEmbauchees();
  }

}