import { Injectable } from '@angular/core';
import { Question } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }

    getQuestions(): Question[] {
    return [
      {
        question: 'A company who is bidding for a new contract has offered you a hotel voucher as a gift. Is this a bribe?',
        options: [
          'Yes, all gifts count as bribes',
          'It depends on the value',
          'No, bribes must involve money'
        ],
        correct: 'It depends on the value'
      },

      {
        question: 'Which one is a cat?',
        options: [
          'assets/dog.jpeg',
          'assets/lion.jpeg',
          'assets/images/lion.jpeg',
          'assets/images/bird.jpg'
        ],
        correct: 'assets/dog.jpeg'
      }
    ];
  }
}
