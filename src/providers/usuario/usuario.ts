import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import axios from 'axios';

@Injectable() 
export class UsuarioProvider {
  //https://ramdomuser.me/api/?results=100&nat=br
  //private API_URL = 'https://reqres.in/api/';
  private API_URL = 'https://reqres.in/api/';
  usuarios: any[];

	constructor(
    public http: HttpClient
  ) {
	}

	getAll(page: number) {
		return new Promise((resolve, reject) => {
      const url = this.API_URL + 'users?per_page=3&page=' + page;

			this.http.get(url)
				.subscribe((result: any) => {
					resolve(result);
				}, (error) => {
					reject(error);
				});
		});
	}

	get(id: number) {
		return new Promise((resolve, reject) => {
      const url = this.API_URL + 'users/' + id;

			this.http.get(url)
				.subscribe((result: any) => {
					resolve(result);
				}, (error) => {
					reject(error);
				});
		});
  }
 
	remove(id: number) {
		return new Promise((resolve, reject) => {
			const url = this.API_URL + 'users/' + id;

			this.http.delete(url)
				.subscribe((result: any) => {
					resolve(result);
				}, (error) => {
					reject(error);
				});
		});
	}

}
