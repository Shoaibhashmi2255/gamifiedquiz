import { Injectable } from '@angular/core';
import { Question } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() {}

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
           'assets/images/dog.jpeg',
           'assets/images/tiger.jpeg',
           'assets/images/lion.jpeg', 
           'assets/images/cat.jpg'
        ],
        correct: 'assets/images/cat.jpg'
      },
      {
        question: 'What is the capital of France?',
        options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
        correct: 'Paris'
      },
      {
        question: 'What is 5 + 7?',
        options: ['10', '11', '12', '13'],
        correct: '12'
      },
      {
        question: 'Which image shows a banana?',
        options: [
           'assets/images/grapes.jpg',
           'assets/images/banana.jpg',
           'assets/images/mango.jpg', 
           'assets/images/strawberry.jpeg'
        ],
        correct: 'assets/images/lion.jpeg'
      },
      {
        question: 'Who wrote "Hamlet"?',
        options: ['Charles Dickens', 'William Shakespeare', 'Leo Tolstoy', 'Mark Twain'],
        correct: 'William Shakespeare'
      },
      {
        question: 'Which animal can fly?',
        options: ['Cat', 'Dog', 'Bird', 'Lion'],
        correct: 'Bird'
      },
      {
        question: 'Which one is the correct spelling?',
        options: ['Recieve', 'Receive', 'Receeve', 'Reseive'],
        correct: 'Receive'
      },
      {
        question: 'Which planet is known as the Red Planet?',
        options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
        correct: 'Mars'
      },
      {
        question: 'Select the correct traffic light order from top to bottom.',
        options: ['Red, Yellow, Green', 'Green, Yellow, Red', 'Yellow, Red, Green', 'Green, Red, Yellow'],
        correct: 'Red, Yellow, Green'
      }
    ];
  }
}
