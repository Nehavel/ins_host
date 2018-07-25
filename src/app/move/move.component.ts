import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-move',
  templateUrl: './move.component.html',
  styleUrls: ['./move.component.css']
})
export class MoveComponent implements OnInit {
RecentPost=[
  {'name':' The Land of The Vikings','url':''},
  { 'name':'Hello world!','url':''  },
  {'name':' The Key To A Quality','url':''},
  {'name':'The Door In The Wall','url':''},
  {'name':' Now Is The Time To Rebrand','url':''}

];

RecentComments=[
  {'name':' A WordPress Commenter on Hello world!','url':''},
  { 'name':'Maria on Woo Ninja','url':''  },
  {'name':' Maria on Premium Quality','url':''},
  {'name':'Maria on Woo Logo','url':''},
  {'name':'Maria on Ninja Silhouette','url':''}

];

Archives=[
  {'name':'October 2017','url':''},
  { 'name':'September 2017','url':''  },
  {'name':'April 2017','url':''},
  {'name':'March 2017','url':''},
  {'name':'February 2017','url':''}

];


  constructor() { }

  ngOnInit() {
  }

}
