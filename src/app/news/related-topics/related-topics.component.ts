import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-related-topics',
  templateUrl: './related-topics.component.html',
  styleUrls: ['./related-topics.component.scss']
})
export class RelatedTopicsComponent implements OnInit {
  @Input() attachments;
  constructor() { }

  ngOnInit(): void {
  }

}
