import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

	trainer: string = "ash";
	valor: number = 3;
	condicao: boolean = true;
	imagemPikachu: string ="https://pokemonletsgo.pokemon.com/assets/img/common/char-pikachu.png";
	buttonDisable: boolean = true;
	wrong: string = 'Tá errado!';
	right: string = 'Tá certo!';
	size: number = 10;
	is_show: boolean = true;
	trainers: any[] = [
	{ name: 'ash', birthdate: '2009-02-06'},
	{ name: 'misty', birthdate: '1999-02-06'},
	{ name: 'brock', birthdate: '2016-02-06'},
	{ name: 'gary', birthdate: '2601-02-06'},
	{ name: 'teteu', birthdate: '48489-02-06'}
	];

  constructor() { }

  ngOnInit() {
  }

  getValor(){
  return 1;
  }

  onClick(){
  	this.is_show = !this.is_show;
  }

  delete(i){
  this.trainers.splice(i, 1);
  }
}
